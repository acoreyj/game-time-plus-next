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
  const { teamName, teamCity } = addTeam(params.teamName, params.teamCity);
  return (
    <main className="flex flex-col gap-8 items-center w-full max-w-4xl px-4">
      <h1>
        {teamName} - {teamCity}
        <Store id={`${teamCity}/${teamName}`}>
          <Players />
        </Store>
      </h1>
    </main>
  );
}
