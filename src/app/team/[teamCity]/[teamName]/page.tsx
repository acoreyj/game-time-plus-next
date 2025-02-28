"use client";
import { useTeamsStore } from "@/hooks/useTeamsStore";
export default function Page({
  params,
}: {
  params: { teamName: string; teamCity: string };
}) {
  const { addTeam } = useTeamsStore();
  const { teamName, teamCity } = addTeam(params.teamName, params.teamCity);
  return (
    <main className="flex flex-col gap-8 items-center w-full max-w-4xl px-4">
      <h1>
        {teamName} - {teamCity}
      </h1>
    </main>
  );
}
