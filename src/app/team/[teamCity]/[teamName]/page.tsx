import { unSlugify } from "@/utils/format";

export default function Page({
  params,
}: {
  params: { teamName: string; teamCity: string };
}) {
  return (
    <main className="flex flex-col gap-8 items-center w-full max-w-4xl px-4">
      <h1>
        {unSlugify(params.teamName)} - {unSlugify(params.teamCity)}
      </h1>
    </main>
  );
}
