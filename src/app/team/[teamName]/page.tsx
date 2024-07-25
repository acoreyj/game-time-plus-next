import Players from '~/components/Players';
import Store from '~/components/Store';
export default function Page({ params }: { params: { teamName: string } }) {
  return (
    <main className="mx-auto mt-16 flex min-h-screen w-full max-w-screen-md flex-col items-center">
      <Store id={params.teamName}>
        {' '}
        <Players />
      </Store>
    </main>
  );
}
