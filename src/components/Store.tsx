'use client';
import { usePathname } from 'next/navigation';
import { createMergeableStore, type MergeableStore } from 'tinybase';
import { createSessionPersister } from 'tinybase/persisters/persister-browser';
import { createWsSynchronizer } from 'tinybase/synchronizers/synchronizer-ws-client';
import {
  Provider,
  useCreateMergeableStore,
  useCreatePersister,
  useCreateSynchronizer,
} from 'tinybase/ui-react';
import { Inspector } from 'tinybase/ui-react-inspector';

const SERVER = 'localhost:8787';
const SERVER_PROTOCOL = 'ws';
export default function Store({ children }: { children: React.ReactNode }) {
  const serverPathId = usePathname();
  const store = useCreateMergeableStore(() => createMergeableStore());
  useCreatePersister(
    store,
    (store) =>
      createSessionPersister(store, 'local://' + SERVER + serverPathId),
    [],

    async (persister) => {
      await persister.startAutoLoad([
        {
          players: {},
        },
        {},
      ]);
      await persister.startAutoSave();
    },
  );

  useCreateSynchronizer(store, async (store: MergeableStore) => {
    const synchronizer = await createWsSynchronizer(
      store,
      new WebSocket(SERVER_PROTOCOL + '://' + SERVER + serverPathId),
      1,
    );
    await synchronizer.startSync();
    return synchronizer;
  });

  return (
    <Provider store={store}>
      <Inspector />
      {children}
    </Provider>
  );
}
