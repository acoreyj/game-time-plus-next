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
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 px-4">
        <Card className="bg-accent w-full max-w-md">
          <CardHeader>
            <CardTitle>Team Setup</CardTitle>
            <CardDescription>
              Enter your team info to get started.
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
