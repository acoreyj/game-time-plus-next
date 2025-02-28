"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useStore, useTable } from "tinybase/ui-react";
import { useTeamsStore } from "@/hooks/useTeamsStore";
const formSchema = z.object({
  teamName: z.string().min(2, "Team name must be at least 2 characters."),
});

export function TeamNameForm() {
  const { store } = useTeamsStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    store?.addRow("teams", {
      name: values.teamName,
    });
  }

  const teams = useTable("teams", store);

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Saved Teams</h2>
        <ul className="space-y-2">
          {Object.values(teams).map((team) => (
            <li key={team.name.toString()} className="p-3 bg-muted rounded-md">
              <a href={`/team/${team.name}`}>{team.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
