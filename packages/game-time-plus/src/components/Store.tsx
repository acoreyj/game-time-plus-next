"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext } from "react";
import { createMergeableStore, type MergeableStore } from "tinybase";
import ReconnectingWebSocket from "reconnecting-websocket";
import {
  createLocalPersister,
  type SessionPersister,
} from "tinybase/persisters/persister-browser";
import {
  createWsSynchronizer,
  type WsSynchronizer,
} from "tinybase/synchronizers/synchronizer-ws-client";
import {
  Provider,
  useCreateMergeableStore,
  useCreatePersister,
  useCreateSynchronizer,
} from "tinybase/ui-react";
import { Inspector } from "tinybase/ui-react-inspector";

const SERVER = process.env.NEXT_PUBLIC_TINYBASE_SERVER_URL;
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
        "local://" + SERVER + (`/${id}` || serverPathId)
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
    }
  );

  const synchronizer = useCreateSynchronizer(
    store,
    async (store: MergeableStore) => {
      const ws = new ReconnectingWebSocket(
        SERVER + (`/${id}` || serverPathId),
        undefined,
        {
          debug: false,
        }
      );
      const synchronizer = await createWsSynchronizer(store, ws, 1);
      await synchronizer.startSync();

      // If the websocket reconnects in the future, do another explicit sync.
      synchronizer.getWebSocket().addEventListener("open", () => {
        synchronizer.load().then(() => synchronizer.save());
      });

      return synchronizer;
    }
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
  synchronizer?: WsSynchronizer<ReconnectingWebSocket>;
};
export const StoreContext = createContext<StoreContextProps>({});
export const useStoreContext = () => useContext(StoreContext);
