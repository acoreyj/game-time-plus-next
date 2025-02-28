import { TeamNameForm } from "@/components/TeamNameForm";

export default function TeamsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Team Management</h1>
      <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
        <TeamNameForm />
      </div>
    </div>
  );
}
