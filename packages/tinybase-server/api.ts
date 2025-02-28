import { MergeableStore, createQueries, Queries, Store } from "tinybase";

export interface ApiHandlerContext {
  store: MergeableStore | undefined;
}

function processQueryParameters(
  store: Store,
  queries: Queries,
  tableId: string,
  params: URLSearchParams
): void {
  queries.setQueryDefinition("queryResult", tableId, ({ select, where }) => {
    // Get first row's cell IDs to know what fields we can query
    const firstRowId = store.getRowIds(tableId)?.[0];
    if (!firstRowId) {
      return;
    }

    const cellIds = store.getCellIds(tableId, firstRowId) || [];

    // Select all available fields
    cellIds.forEach((cellId) => select(cellId));

    // Process query parameters
    params.forEach((value, key) => {
      console.log("query parameter", { key, value });
      try {
        // Parse the parameter format: fieldName[$operator]=value
        const matches = key.match(/^(.+?)(?:\[(.*?)\])?$/);
        if (!matches) return;

        const [, field, operator = "$eq"] = matches;

        if (!cellIds.includes(field)) return;
        let parsedValue;
        try {
          parsedValue = JSON.parse(value);
        } catch (e) {
          parsedValue = value;
        }

        switch (operator) {
          case "$eq":
            where(field, parsedValue);
            break;
          case "$ne":
            where((getCell) => {
              const value = getCell(field);
              return value !== undefined ? value !== parsedValue : false;
            });
            break;
          case "$gt":
            where((getCell) => {
              const value = getCell(field);
              return value !== undefined ? value > parsedValue : false;
            });
            break;
          case "$gte":
            where((getCell) => {
              const value = getCell(field);
              return value !== undefined ? value >= parsedValue : false;
            });
            break;
          case "$lt":
            where((getCell) => {
              const value = getCell(field);
              return value !== undefined ? value < parsedValue : false;
            });
            break;
          case "$lte":
            where((getCell) => {
              const value = getCell(field);
              return value !== undefined ? value <= parsedValue : false;
            });
            break;
          case "$in":
            where((getCell) => {
              if (!Array.isArray(parsedValue)) {
                return false;
              }
              const value = getCell(field);
              return value !== undefined ? parsedValue.includes(value) : false;
            });
            break;
          case "$nin":
            where((getCell) => {
              if (!Array.isArray(parsedValue)) {
                return false;
              }
              const value = getCell(field);
              return value !== undefined ? !parsedValue.includes(value) : false;
            });
            break;
        }
      } catch (e) {
        console.error(`Error processing query parameter ${key}:`, e);
      }
    });
  });
}

export async function handleApiRequest(
  request: Request,
  context: ApiHandlerContext
): Promise<Response> {
  const { store } = context;

  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const apiIndex = urlParts.indexOf("__api__");
  if (apiIndex === -1) {
    return new Response("Invalid API request", { status: 400 });
  }

  const action = urlParts[apiIndex + 1];
  const details = urlParts.slice(apiIndex + 2).join("/");

  console.log("API Request:", { action, details });

  switch (action) {
    case "get-values":
      return new Response(store?.getValuesJson());
    case "get-tables":
      return new Response(store?.getTablesJson());
    case "get-table":
      return new Response(JSON.stringify(store?.getTable(details)));
    case "get-table-ids":
      return new Response(JSON.stringify(store?.getTableIds()));
    case "get-content":
      return new Response(JSON.stringify(store?.getContent()));
    case "get-schema":
      return new Response(JSON.stringify(store?.getTablesSchemaJson()));
    case "get-cell": {
      const [tableId, rowId, cellId] = details.split("/");
      return new Response(
        JSON.stringify(store?.getCell(tableId, rowId, cellId))
      );
    }
    case "get-row": {
      const [tableId, rowId] = details.split("/");
      console.log("get-row", { tableId, rowId });
      return new Response(JSON.stringify(store?.getRow(tableId, rowId)));
    }
    case "get-row-ids":
      return new Response(JSON.stringify(store?.getRowIds(details)));
    case "get-cell-ids": {
      const [tableId, rowId] = details.split("/");
      return new Response(JSON.stringify(store?.getCellIds(tableId, rowId)));
    }
    case "get-value":
      return new Response(JSON.stringify(store?.getValue(details)));
    case "get-value-ids":
      return new Response(JSON.stringify(store?.getValueIds()));
    case "has-cell": {
      const [tableId, rowId, cellId] = details.split("/");
      return new Response(
        JSON.stringify(store?.hasCell(tableId, rowId, cellId))
      );
    }
    case "has-row": {
      const [tableId, rowId] = details.split("/");
      return new Response(JSON.stringify(store?.hasRow(tableId, rowId)));
    }
    case "has-table":
      return new Response(JSON.stringify(store?.hasTable(details)));
    case "has-value":
      return new Response(JSON.stringify(store?.hasValue(details)));
    case "query": {
      const params = url.searchParams;
      const tableId = details;

      if (!store || !tableId) {
        return new Response("Invalid query parameters", { status: 400 });
      }

      const queries = createQueries(store);
      processQueryParameters(store, queries, tableId, params);

      return new Response(
        JSON.stringify(queries.getResultTable("queryResult"))
      );
    }
    default:
      return new Response("Invalid action", { status: 400 });
  }
}
