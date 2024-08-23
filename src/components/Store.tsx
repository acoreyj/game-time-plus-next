'use client';
import { usePathname } from 'next/navigation';
import { createContext, useContext } from 'react';
import { createMergeableStore, type MergeableStore } from 'tinybase';
import {
  createLocalPersister,
  type SessionPersister,
} from 'tinybase/persisters/persister-browser';
import {
  createWsSynchronizer,
  type WsSynchronizer,
} from 'tinybase/synchronizers/synchronizer-ws-client';
import {
  Provider,
  useCreateMergeableStore,
  useCreatePersister,
  useCreateSynchronizer,
} from 'tinybase/ui-react';
import { Inspector } from 'tinybase/ui-react-inspector';

const SERVER = 'localhost:8787';
const SERVER_PROTOCOL = 'ws';
// const SERVER = 'tinybase-cf-server.geniecode.workers.dev';
// const SERVER_PROTOCOL = 'wss';
export default function Store({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const serverPathId = usePathname();
  const store = useCreateMergeableStore(() => createMergeableStore());
  const persister = useCreatePersister(
    store,
    (store) =>
      createLocalPersister(
        store,
        'local://' + SERVER + (`/${id}` || serverPathId),
      ),
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

  const synchronizer = useCreateSynchronizer(
    store,
    async (store: MergeableStore) => {
      const synchronizer = await createWsSynchronizer(
        store,
        new WebSocket(
          SERVER_PROTOCOL + '://' + SERVER + (`/${id}` || serverPathId),
        ),
        1,
        (clientId, requestId, msg, body) => {
          console.log('sent', msg, body);
        },
        (clientId, requestId, msg, body) => {
          console.log('received', msg, body);
        },
        (error) => {
          console.log('error', error);
        },
      );

      await synchronizer.startSync();

      return synchronizer;
    },
  );

  return (
    <Provider store={store}>
      <StoreContext.Provider value={{ persister, synchronizer }}>
        <Inspector />
        {children}
      </StoreContext.Provider>
    </Provider>
  );
}

export type StoreContextProps = {
  persister?: SessionPersister;
  synchronizer?: WsSynchronizer<WebSocket>;
};
export const StoreContext = createContext<StoreContextProps>({});
export const useStoreContext = () => useContext(StoreContext);
