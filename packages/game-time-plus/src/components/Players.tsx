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
      <div className="flex justify-between mb-4">
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
          className="bg-card shadow-sm hover:bg-card/80"
        >
          Sort by: {sortBy === "name" ? "Name" : "Time"}
          <ArrowDownAZ size={20} className="ml-2" />
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() => {
            handlePlayPause();
          }}
          size="icon"
          className="h-10 w-10 bg-card shadow-sm hover:bg-card/80"
        >
          <Pause className="size-5" />
        </Button>
      </div>
      <div className="space-y-2">
        {playersSorted.map((player, index) => (
          <div
            className={cn(
              "flex w-full rounded-lg overflow-hidden shadow-sm",
              index % 2 === 0 ? "bg-muted" : "bg-card"
            )}
            key={player.key}
          >
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                handlePlayPause(player);
              }}
              className={cn(
                "flex h-auto grow items-center justify-between rounded-none border-0 px-4 py-3",
                player.playing
                  ? "border-l-4 border-l-green-500"
                  : "border-l-4 border-l-blue-500",
                index % 2 === 0
                  ? "bg-muted hover:bg-muted/80"
                  : "bg-card hover:bg-card/80"
              )}
            >
              <div className="flex items-center">
                <p className="font-medium">{player.name}</p>
                {player.positions && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({player.positions.split("").join(" ")})
                  </span>
                )}
              </div>
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
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-16 w-16 rounded-none border-0",
                    index % 2 === 0
                      ? "bg-muted hover:bg-muted/80"
                      : "bg-card hover:bg-card/80"
                  )}
                >
                  <Menu className="size-6" />
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
              variant="ghost"
              type="button"
              onClick={() => {
                handlePlayPause(player);
              }}
              size="icon"
              className={cn(
                "h-16 w-16 rounded-none border-0",
                index % 2 === 0
                  ? "bg-muted hover:bg-muted/80"
                  : "bg-card hover:bg-card/80"
              )}
            >
              {player.playing ? (
                <Pause className="size-6" />
              ) : (
                <Play className="size-6" />
              )}
            </Button>
          </div>
        ))}
      </div>
      <div className="flex w-full">
        <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex w-full shadow-sm rounded-lg overflow-hidden">
            <Input
              onChange={(e) => {
                setPlayerToAdd(e.target.value);
              }}
              minLength={1}
              value={playerToAdd}
              className="rounded-none border-r-0 h-12 bg-card focus-visible:ring-0 focus-visible:ring-offset-0"
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
              className="h-12 rounded-none px-4 bg-primary hover:bg-primary/90"
            >
              <Plus size={20} className="mr-2" />
              Add Player
            </Button>
          </div>
        </form>
      </div>
      <div className="flex justify-start gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => setShowResetBtn(!showResetBtn)}
          className="bg-card shadow-sm hover:bg-card/80"
        >
          Reset Game
        </Button>

        {showResetBtn && (
          <Button variant="destructive" onClick={reset} className="shadow-sm">
            Confirm Reset
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
