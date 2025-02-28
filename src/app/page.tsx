import Image from "next/image";
import { TeamNameForm } from "../components/TeamNameForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-8 items-center w-full max-w-4xl px-4">
        <Card className="w-full max-w-md bg-accent soccer-ball-border">
          <CardHeader>
            <CardTitle>Team Setup</CardTitle>
            <CardDescription>
              Enter your team name to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TeamNameForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
