"use client";

import React, { Attributes, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTable } from "tinybase/ui-react";
import { useTeamsStore } from "@/hooks/useTeamsStore";
import { slugify, unSlugify } from "@/utils/format";
import Link from "next/link";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  teamName: z.string().min(1),
  teamCity: z.string().min(1),
});

export function TeamNameForm() {
  const { store, addTeam } = useTeamsStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const teams = useTable("teams", store);

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    const { teamName, teamCity } = addTeam(values.teamName, values.teamCity);

    router.push(`/team/${teamCity}/${teamName}`);
  }

  const hasTeams = useMemo(() => Object.keys(teams).length > 0, [teams]);

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="teamCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team City</FormLabel>
                <FormControl>
                  <Input
                    className={cn("bg-background")}
                    placeholder="Enter team city"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input
                    className={cn("bg-background")}
                    placeholder="Enter team name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={!form.formState.isValid} type="submit">
            Submit
          </Button>
        </form>
      </Form>

      {hasTeams && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Saved Teams</h2>
          <ul className="space-y-2">
            {Object.values(teams).map((team) => (
              <li key={team.name.toString()} className="m-0">
                <Button className="p-0 " variant="link" asChild>
                  <Link
                    href={`/team/${slugify(team.city)}/${slugify(team.name)}`}
                  >
                    {team.name} - {team.city}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
