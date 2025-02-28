"use client";
import { use } from "react";
import { useTeamsStore } from "@/hooks/useTeamsStore";
import Store from "@/components/Store";
import Players from "@/components/Players";
export default function Page(props: {
  params: Promise<{ teamName: string; teamCity: string }>;
}) {
  const params = use(props.params);
  const { addTeam } = useTeamsStore();
  const { teamId, teamName, teamCity } = addTeam(
    params.teamName,
    params.teamCity,
  );
  return (
    <div className="mb-16 mt-16 flex min-h-screen justify-center lg:mb-0 lg:mt-0 lg:items-center">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 px-4">
        <h1 className="text-2xl font-bold">
          {teamName} - {teamCity}
        </h1>
        <Store id={`${teamId}`}>
          <Players />
        </Store>
      </main>
    </div>
  );
}
