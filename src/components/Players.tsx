'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  useAddRowCallback,
  useDelRowCallback,
  useHasTables,
  useSetTableCallback,
  useStore,
  useTable,
} from 'tinybase/ui-react';
import { SortedTableInHtmlTable } from 'tinybase/ui-react-dom';
import useMultiTimer from '~/hooks/useMultiTimer';
import useNetworkStatus from '~/hooks/useNetworkStatus';
import { formatMilliseconds } from '~/utils/format';

type Player = {
  key: string;
  name: string;
  positions?: string;
  time?: number;
  playing?: boolean;
};
export default function Players() {
  const times = useRef<Record<string, HTMLParagraphElement | null>>({});
  const networkIsOnline = useNetworkStatus();
  const playersStore = useTable('players');
  const [sortBy, setSortBy] = useState('name');
  const { getElapsedTime, isTimerRunning, setTimer } = useMultiTimer();
  const players = useMemo(() => {
    return Object.keys(playersStore).map((key) => ({
      ...playersStore[key],
      key,
    }));
  }, [playersStore]) as Player[];

  const playersSortedByName = useMemo(() => {
    return [...players].sort((a, b) => a.name.localeCompare(b.name));
  }, [players]);

  const playersSortedByTime = useMemo(() => {
    return [...players].sort((a, b) => {
      if (!a.time && !b.time) {
        return 0;
      }
      if (!a.time) {
        return 1;
      }
      if (!b.time) {
        return -1;
      }
      return b.time - a.time;
    });
  }, [players]);

  const playersSorted = useMemo(
    () => (sortBy === 'name' ? playersSortedByName : playersSortedByTime),
    [sortBy, playersSortedByName, playersSortedByTime],
  );

  const [playerToAdd, setPlayerToAdd] = useState<string>('');

  // Set timers from state
  useEffect(() => {
    for (const player of players) {
      const key = player.key;
      setTimer(key, player.time ?? 0, player.playing);
      times.current[key]!.innerText = formatMilliseconds(getElapsedTime(key));
    }
  }, [getElapsedTime, players, setTimer]);

  const handleUpdatePlayer = useSetTableCallback(
    'players',
    (player: Player, store) => {
      const playersTable = store.getTable('players');
      playersTable[player.key] = player;

      return playersTable;
    },
  );

  const reset = () => {
    for (const player of players) {
      handleUpdatePlayer({
        ...player,
        time: 0,
      });
    }
    setShowResetBtn(false);
  };

  useEffect(() => {
    const updateTimersInterval = setInterval(() => {
      for (const player of players) {
        if (player.playing && networkIsOnline) {
          handleUpdatePlayer({
            ...player,
            time: getElapsedTime(player.key),
          });
        }
      }
    }, 5000);

    const updateDomInterval = setInterval(() => {
      for (const player of players) {
        const key = player.key;
        if (isTimerRunning(key)) {
          times.current[key]!.innerText = formatMilliseconds(
            getElapsedTime(key),
          );
        }
      }
    }, 1);
    return () => {
      clearInterval(updateTimersInterval);
      clearInterval(updateDomInterval);
    };
  }, [
    getElapsedTime,
    handleUpdatePlayer,
    isTimerRunning,
    networkIsOnline,
    players,
  ]);

  const handlePlayPause = useCallback(
    (player?: Player) => {
      if (player && (networkIsOnline || !player.playing)) {
        const key = player.key;
        handleUpdatePlayer({
          ...player,
          time: getElapsedTime(key),
          playing: !player.playing,
        });
      } else if (!player && networkIsOnline) {
        for (const player of players) {
          if (player.playing) {
            const key = player.key;
            handleUpdatePlayer({
              ...player,
              time: getElapsedTime(key),
              playing: !player.playing,
            });
          }
        }
      }
    },
    [networkIsOnline, handleUpdatePlayer, getElapsedTime, players],
  );

  const handleAddPlayer = useAddRowCallback('players', (name) => {
    return {
      name: name as string,
      time: 0,
      playing: false,
    };
  });

  const handleDelPlayer = useDelRowCallback('players', (player: Player) => {
    return player.key;
  });
  const [showResetBtn, setShowResetBtn] = useState(false);

  const [showDelBtn, setShowDelBtn] = useState(false);
  useEffect(() => {
    if (showDelBtn) {
      setTimeout(() => {
        setShowDelBtn(false);
      }, 3000);
    }
  }, [showDelBtn]);
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => {
            if (sortBy === 'name') {
              setSortBy('time');
            } else {
              setSortBy('name');
            }
          }}
          className="btn btn-secondary max-w-fit"
        >
          {sortBy === 'name' ? 'Name' : 'Time'}
          <i className="iconify text-2xl icon-park--sort-amount-down"></i>
        </button>

        <button
          type="button"
          disabled={!networkIsOnline || !players.find((p) => p.playing)}
          onClick={() => {
            handlePlayPause();
          }}
          className="btn btn-square btn-accent join-item items-center"
        >
          <i className="iconify text-4xl icon-park-outline--pause"></i>
        </button>
      </div>
      {playersSorted.map((player) => (
        <div className="join w-full" key={player.key}>
          <button
            type="button"
            disabled={!networkIsOnline}
            onClick={() => {
              handlePlayPause(player);
            }}
            className={`join-item flex grow items-center justify-between rounded border px-4 ${player.playing ? 'border-success' : 'border-primary'}`}
          >
            <p>
              {player.name}{' '}
              {player.positions
                ? ` (${player.positions.split('').join(' ')})`
                : ''}
            </p>
            <p
              ref={(el) => {
                times.current[player.key] = el;
              }}
              className="join-item font-time text-4xl"
            >
              {formatMilliseconds(getElapsedTime(player.key))}
            </p>
          </button>
          <div className="dropdown dropdown-end join-item">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-square btn-accent join-item items-center"
            >
              <i className="iconify text-4xl icon-park--application-menu"></i>
            </div>
            <ul className="menu dropdown-content z-10 gap-4 border-2 border-accent bg-base-300 p-2 shadow">
              <li>
                <button
                  onClick={() => {
                    const positions = player.positions?.includes('G')
                      ? player.positions.replace('G', '')
                      : (player.positions ?? '') + 'G';
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className={`btn ${player.positions?.includes('G') ? 'btn-success' : ''}`}
                >
                  G
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    const positions = player.positions?.includes('D')
                      ? player.positions.replace('D', '')
                      : (player.positions ?? '') + 'D';
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className={`btn ${player.positions?.includes('D') ? 'btn-success' : ''}`}
                >
                  D
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const positions = player.positions?.includes('M')
                      ? player.positions.replace('M', '')
                      : (player.positions ?? '') + 'M';
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className={`btn ${player.positions?.includes('M') ? 'btn-success' : ''}`}
                >
                  M
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const positions = player.positions?.includes('F')
                      ? player.positions.replace('F', '')
                      : (player.positions ?? '') + 'F';
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className={`btn ${player.positions?.includes('F') ? 'btn-success' : ''}`}
                >
                  F
                </button>
              </li>
              <li>
                {showDelBtn ? (
                  <button
                    onClick={() => {
                      handleDelPlayer(player);
                    }}
                    className="btn btn-error"
                  >
                    Sure?
                  </button>
                ) : (
                  <button
                    onClick={() => setShowDelBtn(true)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                )}
              </li>
            </ul>
          </div>
          <button
            type="button"
            disabled={!networkIsOnline && player.playing}
            onClick={() => {
              handlePlayPause(player);
            }}
            className="btn btn-square btn-accent join-item items-center"
          >
            {player.playing ? (
              <i className="iconify text-4xl icon-park-outline--pause"></i>
            ) : (
              <i className="iconify text-4xl icon-park-solid--play-one"></i>
            )}
          </button>
        </div>
      ))}
      <div className="flex w-full">
        <form className="join grow" onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => {
              setPlayerToAdd(e.target.value);
            }}
            minLength={1}
            value={playerToAdd}
            className="input join-item input-bordered grow"
            type="text"
            placeholder="Player Name"
          ></input>
          <button
            type="submit"
            onClick={() => {
              if (playerToAdd) {
                handleAddPlayer(playerToAdd);
                setPlayerToAdd('');
              }
            }}
            className="btn btn-square btn-accent join-item items-center"
          >
            <i className="iconify text-4xl icon-park-solid--add-one"></i>
          </button>
        </form>
      </div>
      <div className="flex justify-start gap-8">
        <button
          onClick={() => setShowResetBtn(!showResetBtn)}
          className="btn btn-warning"
        >
          Reset
        </button>

        {showResetBtn && (
          <button onClick={reset} className="btn btn-error">
            RESET!!!!
          </button>
        )}
      </div>
    </div>
  );
}
