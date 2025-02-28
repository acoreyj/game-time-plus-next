"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  useAddRowCallback,
  useDelRowCallback,
  useSetTableCallback,
  useTable,
} from "tinybase/ui-react";
import useMultiTimer from "@/hooks/useMultiTimer";
import useNetworkStatus from "@/hooks/useNetworkStatus";
import { formatMilliseconds } from "@/utils/format";
import { useStoreContext } from "./Store";
import { ArrowDownAZ, Pause, Menu, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Player = {
  key: string;
  name: string;
  positions?: string;
  time?: number;
  playing?: boolean;
};
export default function Players() {
  const times = useRef<Record<string, HTMLParagraphElement | null>>({});
  const { synchronizer } = useStoreContext();

  const [readyState, setReadyState] = useState<number | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setReadyState(synchronizer?.getWebSocket().readyState ?? null);
    }, 500);
    setReadyState(synchronizer?.getWebSocket().readyState ?? null);
    return () => clearInterval(timer);
  }, [synchronizer]);
  const playersStore = useTable("players");
  const [sortBy, setSortBy] = useState("name");
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
    () => (sortBy === "name" ? playersSortedByName : playersSortedByTime),
    [sortBy, playersSortedByName, playersSortedByTime]
  );

  const [playerToAdd, setPlayerToAdd] = useState<string>("");

  // Set timers from state
  useEffect(() => {
    for (const player of players) {
      const key = player.key;
      setTimer(key, player.time ?? 0, player.playing);
      times.current[key]!.innerText = formatMilliseconds(getElapsedTime(key));
    }
  }, [getElapsedTime, players, setTimer]);

  const handleUpdatePlayer = useSetTableCallback(
    "players",
    (player: Player, store) => {
      const playersTable = store.getTable("players");
      playersTable[player.key] = player;

      return playersTable;
    }
  );

  const reset = () => {
    for (const player of players) {
      handleUpdatePlayer({
        ...player,
        positions: "",
        playing: false,
        time: 0,
      });
    }
    setShowResetBtn(false);
  };

  useEffect(() => {
    const updateTimersInterval = setInterval(() => {
      for (const player of players) {
        if (player.playing) {
          handleUpdatePlayer({
            ...player,
            time: getElapsedTime(player.key),
          });
        }
      }
    }, 1000);

    const updateDomInterval = setInterval(() => {
      for (const player of players) {
        const key = player.key;
        if (isTimerRunning(key)) {
          times.current[key]!.innerText = formatMilliseconds(
            getElapsedTime(key)
          );
        }
      }
    }, 1);
    return () => {
      clearInterval(updateTimersInterval);
      clearInterval(updateDomInterval);
    };
  }, [getElapsedTime, handleUpdatePlayer, isTimerRunning, players]);

  const handlePlayPause = useCallback(
    (player?: Player) => {
      if (player) {
        const key = player.key;
        handleUpdatePlayer({
          ...player,
          time: getElapsedTime(key),
          playing: !player.playing,
        });
      } else if (!player) {
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
    [handleUpdatePlayer, getElapsedTime, players]
  );

  const handleAddPlayer = useAddRowCallback("players", (name) => {
    return {
      name: name as string,
      time: 0,
      playing: false,
    };
  });

  const handleDelPlayer = useDelRowCallback("players", (player: Player) => {
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
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            if (sortBy === "name") {
              setSortBy("time");
            } else {
              setSortBy("name");
            }
          }}
          className="max-w-fit"
        >
          {sortBy === "name" ? "Name" : "Time"}
          <ArrowDownAZ size={24} className="ml-2" />
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() => {
            handlePlayPause();
          }}
          size="icon"
          className="h-14 w-14"
        >
          <Pause className="size-12" />
        </Button>
      </div>
      {playersSorted.map((player) => (
        <div className="flex w-full" key={player.key}>
          <Button
            variant="outline"
            type="button"
            onClick={() => {
              handlePlayPause(player);
            }}
            className={`flex h-auto grow items-center justify-between rounded px-4 py-2 ${
              player.playing ? "border-green-500" : "border-blue-500"
            }`}
          >
            <p>
              {player.name}{" "}
              {player.positions
                ? ` (${player.positions.split("").join(" ")})`
                : ""}
            </p>
            <p
              ref={(el) => {
                times.current[player.key] = el;
              }}
              className="font-time text-4xl"
            >
              {formatMilliseconds(getElapsedTime(player.key))}
            </p>
          </Button>
          <DropdownMenu open={showDelBtn ? true : undefined}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-16 w-16 ml-1">
                <Menu className="size-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 p-2">
              <DropdownMenuItem asChild>
                <Button
                  variant={
                    player.positions?.includes("G") ? "default" : "outline"
                  }
                  onClick={() => {
                    const positions = player.positions?.includes("G")
                      ? player.positions.replace("G", "")
                      : (player.positions ?? "") + "G";
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className="w-full"
                >
                  G
                </Button>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Button
                  variant={
                    player.positions?.includes("D") ? "default" : "outline"
                  }
                  onClick={() => {
                    const positions = player.positions?.includes("D")
                      ? player.positions.replace("D", "")
                      : (player.positions ?? "") + "D";
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className="w-full"
                >
                  D
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button
                  variant={
                    player.positions?.includes("M") ? "default" : "outline"
                  }
                  onClick={() => {
                    const positions = player.positions?.includes("M")
                      ? player.positions.replace("M", "")
                      : (player.positions ?? "") + "M";
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className="w-full"
                >
                  M
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button
                  variant={
                    player.positions?.includes("F") ? "default" : "outline"
                  }
                  onClick={() => {
                    const positions = player.positions?.includes("F")
                      ? player.positions.replace("F", "")
                      : (player.positions ?? "") + "F";
                    handleUpdatePlayer({
                      ...player,
                      positions,
                    });
                  }}
                  className="w-full"
                >
                  F
                </Button>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDelPlayer(player);
                  }}
                  className="w-full"
                >
                  Delete
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            type="button"
            onClick={() => {
              handlePlayPause(player);
            }}
            size="icon"
            className="h-16 w-16 ml-1"
          >
            {player.playing ? (
              <Pause className="size-8" />
            ) : (
              <Play className="size-8" />
            )}
          </Button>
        </div>
      ))}
      <div className="flex w-full">
        <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex w-full">
            <Input
              onChange={(e) => {
                setPlayerToAdd(e.target.value);
              }}
              minLength={1}
              value={playerToAdd}
              className="rounded-r-none h-10"
              type="text"
              placeholder="Player Name"
            />
            <Button
              type="submit"
              onClick={() => {
                if (playerToAdd) {
                  handleAddPlayer(playerToAdd);
                  setPlayerToAdd("");
                }
              }}
              size="icon"
              className="h-10 w-10 rounded-l-none"
            >
              <Plus size={24} />
            </Button>
          </div>
        </form>
      </div>
      <div className="flex justify-start gap-8">
        <Button
          variant="outline"
          onClick={() => setShowResetBtn(!showResetBtn)}
        >
          Reset
        </Button>

        {showResetBtn && (
          <Button variant="destructive" onClick={reset}>
            RESET!!!!
          </Button>
        )}
      </div>
      {showResetBtn && (
        <div className="flex flex-col">
          <span>Web socket</span>
          <span>exists: {(!!synchronizer?.getWebSocket()).toString()}</span>
          <span>
            Connecting: {(readyState === WebSocket.CONNECTING).toString()}
          </span>
          <span>Open: {(readyState === WebSocket.OPEN).toString()}</span>
          <span>Closing: {(readyState === WebSocket.CLOSING).toString()}</span>
          <span>Closed: {(readyState === WebSocket.CLOSED).toString()}</span>
        </div>
      )}
    </div>
  );
}
