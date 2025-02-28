import { unSlugify } from "@/utils/format";
import { slugify } from "@/utils/format";
import { createMergeableStore, type MergeableStore } from "tinybase";
import { createLocalPersister } from "tinybase/persisters/persister-browser";

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

  const addTeam = (name: string, city: string) => {
    const teamName = unSlugify(slugify(name));
    const teamCity = unSlugify(slugify(city));
    const teamId = slugify(teamName + teamCity);
    const rows = store.getRowIds("teams");
    const teamExists = rows.find(
      (row) => store.getCell("teams", row, "id") === teamId
    );
    if (!teamExists) {
      store?.addRow("teams", {
        id: teamId,
        name: teamName,
        city: teamCity,
      });
    }
  };

  return {
    store,
    persister,
    addTeam,
  };
}
