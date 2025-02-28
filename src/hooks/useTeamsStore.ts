import { createMergeableStore, type MergeableStore } from "tinybase";
import {
  createLocalPersister,
  type SessionPersister,
} from "tinybase/persisters/persister-browser";

import { useCreateMergeableStore, useCreatePersister } from "tinybase/ui-react";

export function useTeamsStore() {
  const store = useCreateMergeableStore(() => createMergeableStore());
  const persister = useCreatePersister(
    store,
    (store) => createLocalPersister(store, "local://teams"),
    [],
    async (persister) => {
      await persister.startAutoLoad([
        {
          teams: {},
        },
        {},
      ]);
      await persister.startAutoSave();
    }
  );

  return {
    store,
    persister,
  };
}
