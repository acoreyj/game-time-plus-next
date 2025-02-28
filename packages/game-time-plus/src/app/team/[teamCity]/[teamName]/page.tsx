"use client";
import { use } from "react";
import { useTeamsStore } from "@/hooks/useTeamsStore";
import Store from "@/components/Store";
import Players from "@/components/Players";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page(props: {
  params: Promise<{ teamName: string; teamCity: string }>;
}) {
  const params = use(props.params);
  const { addTeam } = useTeamsStore();
  const { teamName, teamCity } = addTeam(params.teamName, params.teamCity);
  return (
    <main className="flex flex-col items-center w-full max-w-4xl px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {teamName} - {teamCity}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Store id={`${teamCity}/${teamName}`}>
            <Players />
          </Store>
        </CardContent>
      </Card>
    </main>
  );
}
