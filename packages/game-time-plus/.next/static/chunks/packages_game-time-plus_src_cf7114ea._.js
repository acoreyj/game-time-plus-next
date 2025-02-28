(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/packages_game-time-plus_src_cf7114ea._.js", {

"[project]/packages/game-time-plus/src/utils/format.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatMilliseconds": (()=>formatMilliseconds),
    "formatSeconds": (()=>formatSeconds),
    "slugify": (()=>slugify),
    "unSlugify": (()=>unSlugify)
});
function formatSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
function formatMilliseconds(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor(milliseconds % 60000 / 1000);
    const remainingMilliseconds = milliseconds % 1000;
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${remainingMilliseconds.toString().slice(0, 1)}`;
}
function slugify(str) {
    return str.toString().toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/--+/g, "-");
}
function unSlugify(slug) {
    return slug.toString().replace(/-/g, " ").replace(/\b\w/g, (char)=>char.toUpperCase());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/game-time-plus/src/hooks/useTeamsStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTeamsStore": (()=>useTeamsStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/utils/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$persisters$2f$persister$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/persisters/persister-browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/ui-react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useTeamsStore() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMergeableStore"])({
        "useTeamsStore.useCreateMergeableStore[store]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMergeableStore"])()
    }["useTeamsStore.useCreateMergeableStore[store]"]);
    const persister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePersister"])(store, {
        "useTeamsStore.useCreatePersister[persister]": (store)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$persisters$2f$persister$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLocalPersister"])(store, "local://teams")
    }["useTeamsStore.useCreatePersister[persister]"], [], {
        "useTeamsStore.useCreatePersister[persister]": async (persister)=>{
            await persister.startAutoLoad([
                {
                    teams: {}
                },
                {}
            ]);
            await persister.startAutoSave();
        }
    }["useTeamsStore.useCreatePersister[persister]"]);
    const addTeam = (name, city)=>{
        const sluggedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(name);
        const sluggedCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(city);
        const teamName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unSlugify"])(sluggedName);
        const teamCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unSlugify"])(sluggedCity);
        const teamId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(teamName + teamCity);
        const rows = store.getRowIds("teams");
        const teamExists = rows.find((row)=>store.getCell("teams", row, "id") === teamId);
        if (!teamExists) {
            store?.addRow("teams", {
                id: teamId,
                name: teamName,
                city: teamCity
            });
        }
        return {
            teamName,
            teamCity,
            teamId,
            sluggedName,
            sluggedCity
        };
    };
    const deleteTeam = (teamId)=>{
        const rows = store.getRowIds("teams");
        const teamExists = rows.find((row)=>store.getCell("teams", row, "id") === teamId);
        if (teamExists) {
            store?.delRow("teams", teamExists);
        }
    };
    return {
        store,
        persister,
        addTeam,
        deleteTeam
    };
}
_s(useTeamsStore, "sXJLtQ2bIcpBjT8WNeOIVy0/76s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMergeableStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePersister"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/game-time-plus/src/components/Store.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StoreContext": (()=>StoreContext),
    "default": (()=>Store),
    "useStoreContext": (()=>useStoreContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$persisters$2f$persister$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/persisters/persister-browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$synchronizers$2f$synchronizer$2d$ws$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/synchronizers/synchronizer-ws-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/ui-react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2d$inspector$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/ui-react-inspector/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const SERVER = ("TURBOPACK compile-time value", "ws://localhost:8787");
function Store({ children, id }) {
    _s();
    const serverPathId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMergeableStore"])({
        "Store.useCreateMergeableStore[store]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMergeableStore"])()
    }["Store.useCreateMergeableStore[store]"]);
    const persister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePersister"])(store, {
        "Store.useCreatePersister[persister]": (store)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$persisters$2f$persister$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLocalPersister"])(store, "local://" + SERVER + (`/${id}` || serverPathId))
    }["Store.useCreatePersister[persister]"], [], {
        "Store.useCreatePersister[persister]": async (persister)=>{
            await persister.startAutoLoad([
                {
                    players: {}
                },
                {}
            ]);
            await persister.startAutoSave();
        }
    }["Store.useCreatePersister[persister]"]);
    const synchronizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateSynchronizer"])(store, {
        "Store.useCreateSynchronizer[synchronizer]": async (store)=>{
            const synchronizer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$synchronizers$2f$synchronizer$2d$ws$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWsSynchronizer"])(store, new WebSocket(SERVER + (`/${id}` || serverPathId)), 1, {
                "Store.useCreateSynchronizer[synchronizer]": (clientId, requestId, msg, body)=>{
                    console.log("sent", msg, body);
                }
            }["Store.useCreateSynchronizer[synchronizer]"], {
                "Store.useCreateSynchronizer[synchronizer]": (clientId, requestId, msg, body)=>{
                    console.log("received", msg, body);
                }
            }["Store.useCreateSynchronizer[synchronizer]"], {
                "Store.useCreateSynchronizer[synchronizer]": (error)=>{
                    console.log("error", error);
                }
            }["Store.useCreateSynchronizer[synchronizer]"]);
            await synchronizer.startSync();
            return synchronizer;
        }
    }["Store.useCreateSynchronizer[synchronizer]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: store,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreContext.Provider, {
            value: {
                persister,
                synchronizer
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2d$inspector$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inspector"], {}, void 0, false, {
                    fileName: "[project]/packages/game-time-plus/src/components/Store.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/packages/game-time-plus/src/components/Store.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/game-time-plus/src/components/Store.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(Store, "Msqm3b89txNdUGlA3Fnxvp9pjVQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMergeableStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePersister"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateSynchronizer"]
    ];
});
_c = Store;
const StoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const useStoreContext = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
};
_s1(useStoreContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "Store");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/game-time-plus/src/hooks/useMultiTimer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useMultiTimer = ()=>{
    _s();
    const timers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const createTimer = (key, initialState = 0, running = false)=>{
        if (running) {
            startTimer(key, initialState);
        } else {
            pauseTimer(key);
            timers.current[key] ??= {
                elapsedTime: initialState,
                intervalId: null,
                isRunning: running
            };
        }
    };
    const setTimer = (key, time = 0, running = false)=>{
        timers.current[key] = {
            intervalId: null,
            ...timers.current[key] ?? {},
            isRunning: running,
            elapsedTime: time
        };
        if (running) {
            startTimer(key, time);
        } else {
            pauseTimer(key);
        }
    };
    const startTimer = (key, initialState = 0)=>{
        timers.current[key] ??= {
            elapsedTime: initialState,
            intervalId: null,
            isRunning: false
        };
        if (!timers.current[key].intervalId) {
            const startTime = Date.now() - timers.current[key].elapsedTime;
            timers.current[key].intervalId = setInterval(()=>{
                timers.current[key].elapsedTime = Date.now() - startTime;
            }, 1);
        }
        timers.current[key].isRunning = true;
    };
    const pauseTimer = (key)=>{
        if (timers.current[key]) {
            clearInterval(timers.current[key].intervalId);
            timers.current[key].intervalId = null;
            timers.current[key].isRunning = false;
        }
    };
    const resetTimer = (key)=>{
        if (timers.current[key]) {
            clearInterval(timers.current[key].intervalId);
            timers.current[key].elapsedTime = 0;
            timers.current[key].isRunning = false;
        }
    };
    const getElapsedTime = (key)=>{
        return timers.current[key]?.elapsedTime ?? 0;
    };
    const isTimerRunning = (key)=>{
        return timers.current[key]?.isRunning ?? false;
    };
    return {
        startTimer,
        pauseTimer,
        createTimer,
        setTimer,
        resetTimer,
        getElapsedTime,
        isTimerRunning
    };
};
_s(useMultiTimer, "st5NtG/X+7ZGsdmafYS5TdOK0bg=");
const __TURBOPACK__default__export__ = useMultiTimer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/game-time-plus/src/hooks/useNetworkStatus.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useNetworkStatus = ()=>{
    _s();
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(navigator.onLine);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNetworkStatus.useEffect": ()=>{
            const handleOnline = {
                "useNetworkStatus.useEffect.handleOnline": ()=>setIsOnline(true)
            }["useNetworkStatus.useEffect.handleOnline"];
            const handleOffline = {
                "useNetworkStatus.useEffect.handleOffline": ()=>setIsOnline(false)
            }["useNetworkStatus.useEffect.handleOffline"];
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
            return ({
                "useNetworkStatus.useEffect": ()=>{
                    window.removeEventListener('online', handleOnline);
                    window.removeEventListener('offline', handleOffline);
                }
            })["useNetworkStatus.useEffect"];
        }
    }["useNetworkStatus.useEffect"], []);
    return isOnline;
};
_s(useNetworkStatus, "Hl7ZEYKUlCNDUCBSLoXEW/QIeeE=");
const __TURBOPACK__default__export__ = useNetworkStatus;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/game-time-plus/src/components/Players.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Players)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinybase@5.4.8_@cloudflare+workers-types@4.20250224.0_prettier@3.5.2_react-dom@19.0.0_r_f119fa6fd70ae136b14596e010fc1b02/node_modules/tinybase/ui-react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useMultiTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/hooks/useMultiTimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useNetworkStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/hooks/useNetworkStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/utils/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/components/Store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$a$2d$z$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownAZ$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/arrow-down-a-z.js [app-client] (ecmascript) <export default as ArrowDownAZ>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Players() {
    _s();
    const times = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const { synchronizer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreContext"])();
    const networkIsConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useNetworkStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [readyState, setReadyState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Players.useEffect": ()=>{
            const timer = setInterval({
                "Players.useEffect.timer": ()=>{
                    setReadyState(synchronizer?.getWebSocket().readyState ?? null);
                }
            }["Players.useEffect.timer"], 500);
            setReadyState(synchronizer?.getWebSocket().readyState ?? null);
            return ({
                "Players.useEffect": ()=>clearInterval(timer)
            })["Players.useEffect"];
        }
    }["Players.useEffect"], [
        synchronizer
    ]);
    const networkIsOnline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Players.useMemo[networkIsOnline]": ()=>networkIsConnected && readyState !== WebSocket.CLOSING && readyState !== WebSocket.CLOSED
    }["Players.useMemo[networkIsOnline]"], [
        readyState,
        networkIsConnected
    ]);
    const playersStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTable"])("players");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name");
    const { getElapsedTime, isTimerRunning, setTimer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useMultiTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Players.useMemo[players]": ()=>{
            return Object.keys(playersStore).map({
                "Players.useMemo[players]": (key)=>({
                        ...playersStore[key],
                        key
                    })
            }["Players.useMemo[players]"]);
        }
    }["Players.useMemo[players]"], [
        playersStore
    ]);
    const playersSortedByName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Players.useMemo[playersSortedByName]": ()=>{
            return [
                ...players
            ].sort({
                "Players.useMemo[playersSortedByName]": (a, b)=>a.name.localeCompare(b.name)
            }["Players.useMemo[playersSortedByName]"]);
        }
    }["Players.useMemo[playersSortedByName]"], [
        players
    ]);
    const playersSortedByTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Players.useMemo[playersSortedByTime]": ()=>{
            return [
                ...players
            ].sort({
                "Players.useMemo[playersSortedByTime]": (a, b)=>{
                    if (!a.time && !b.time) {
                        return 0;
                    }
                    if (!a.time) {
                        return 1;
                    }
                    if (!b.time) {
                        return -1;
                    }
                    return b.time - a.time;
                }
            }["Players.useMemo[playersSortedByTime]"]);
        }
    }["Players.useMemo[playersSortedByTime]"], [
        players
    ]);
    const playersSorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Players.useMemo[playersSorted]": ()=>sortBy === "name" ? playersSortedByName : playersSortedByTime
    }["Players.useMemo[playersSorted]"], [
        sortBy,
        playersSortedByName,
        playersSortedByTime
    ]);
    const [playerToAdd, setPlayerToAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Set timers from state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Players.useEffect": ()=>{
            for (const player of players){
                const key = player.key;
                setTimer(key, player.time ?? 0, player.playing);
                times.current[key].innerText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMilliseconds"])(getElapsedTime(key));
            }
        }
    }["Players.useEffect"], [
        getElapsedTime,
        players,
        setTimer
    ]);
    const handleUpdatePlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetTableCallback"])("players", {
        "Players.useSetTableCallback[handleUpdatePlayer]": (player, store)=>{
            const playersTable = store.getTable("players");
            playersTable[player.key] = player;
            return playersTable;
        }
    }["Players.useSetTableCallback[handleUpdatePlayer]"]);
    const reset = ()=>{
        for (const player of players){
            handleUpdatePlayer({
                ...player,
                positions: "",
                playing: false,
                time: 0
            });
        }
        setShowResetBtn(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Players.useEffect": ()=>{
            const updateTimersInterval = setInterval({
                "Players.useEffect.updateTimersInterval": ()=>{
                    for (const player of players){
                        if (player.playing && networkIsOnline) {
                            handleUpdatePlayer({
                                ...player,
                                time: getElapsedTime(player.key)
                            });
                        }
                    }
                }
            }["Players.useEffect.updateTimersInterval"], 5000);
            const updateDomInterval = setInterval({
                "Players.useEffect.updateDomInterval": ()=>{
                    for (const player of players){
                        const key = player.key;
                        if (isTimerRunning(key)) {
                            times.current[key].innerText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMilliseconds"])(getElapsedTime(key));
                        }
                    }
                }
            }["Players.useEffect.updateDomInterval"], 1);
            return ({
                "Players.useEffect": ()=>{
                    clearInterval(updateTimersInterval);
                    clearInterval(updateDomInterval);
                }
            })["Players.useEffect"];
        }
    }["Players.useEffect"], [
        getElapsedTime,
        handleUpdatePlayer,
        isTimerRunning,
        networkIsOnline,
        players
    ]);
    const handlePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Players.useCallback[handlePlayPause]": (player)=>{
            if (player && (networkIsOnline || !player.playing)) {
                const key = player.key;
                handleUpdatePlayer({
                    ...player,
                    time: getElapsedTime(key),
                    playing: !player.playing
                });
            } else if (!player && networkIsOnline) {
                for (const player of players){
                    if (player.playing) {
                        const key = player.key;
                        handleUpdatePlayer({
                            ...player,
                            time: getElapsedTime(key),
                            playing: !player.playing
                        });
                    }
                }
            }
        }
    }["Players.useCallback[handlePlayPause]"], [
        networkIsOnline,
        handleUpdatePlayer,
        getElapsedTime,
        players
    ]);
    const handleAddPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddRowCallback"])("players", {
        "Players.useAddRowCallback[handleAddPlayer]": (name)=>{
            return {
                name: name,
                time: 0,
                playing: false
            };
        }
    }["Players.useAddRowCallback[handleAddPlayer]"]);
    const handleDelPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDelRowCallback"])("players", {
        "Players.useDelRowCallback[handleDelPlayer]": (player)=>{
            return player.key;
        }
    }["Players.useDelRowCallback[handleDelPlayer]"]);
    const [showResetBtn, setShowResetBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDelBtn, setShowDelBtn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Players.useEffect": ()=>{
            if (showDelBtn) {
                setTimeout({
                    "Players.useEffect": ()=>{
                        setShowDelBtn(false);
                    }
                }["Players.useEffect"], 3000);
            }
        }
    }["Players.useEffect"], [
        showDelBtn
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-4",
        children: [
            !networkIsOnline && synchronizer?.getWebSocket() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center gap-4 rounded bg-error p-8 text-2xl font-bold text-error-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "You are offline."
                    }, void 0, false, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn items-center",
                        type: "button",
                        onClick: ()=>window.location.reload(),
                        children: [
                            "Refresh ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            if (sortBy === "name") {
                                setSortBy("time");
                            } else {
                                setSortBy("name");
                            }
                        },
                        className: "btn btn-secondary max-w-fit",
                        children: [
                            sortBy === "name" ? "Name" : "Time",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$a$2d$z$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownAZ$3e$__["ArrowDownAZ"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !networkIsOnline,
                        onClick: ()=>{
                            handlePlayPause();
                        },
                        className: "btn btn-square btn-accent join-item items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            size: 48
                        }, void 0, false, {
                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            playersSorted.map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "join w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: !networkIsOnline,
                            onClick: ()=>{
                                handlePlayPause(player);
                            },
                            className: `join-item flex grow items-center justify-between rounded border px-4 ${player.playing ? "border-success" : "border-primary"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        player.name,
                                        " ",
                                        player.positions ? ` (${player.positions.split("").join(" ")})` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    ref: (el)=>{
                                        times.current[player.key] = el;
                                    },
                                    className: "join-item font-time text-4xl",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMilliseconds"])(getElapsedTime(player.key))
                                }, void 0, false, {
                                    fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dropdown dropdown-end join-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    tabIndex: 0,
                                    role: "button",
                                    className: "btn btn-square btn-accent join-item items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 48
                                    }, void 0, false, {
                                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "menu dropdown-content z-10 gap-4 border-2 border-accent bg-base-300 p-2 shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const positions = player.positions?.includes("G") ? player.positions.replace("G", "") : (player.positions ?? "") + "G";
                                                    handleUpdatePlayer({
                                                        ...player,
                                                        positions
                                                    });
                                                },
                                                className: `btn ${player.positions?.includes("G") ? "btn-success" : ""}`,
                                                children: "G"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const positions = player.positions?.includes("D") ? player.positions.replace("D", "") : (player.positions ?? "") + "D";
                                                    handleUpdatePlayer({
                                                        ...player,
                                                        positions
                                                    });
                                                },
                                                className: `btn ${player.positions?.includes("D") ? "btn-success" : ""}`,
                                                children: "D"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const positions = player.positions?.includes("M") ? player.positions.replace("M", "") : (player.positions ?? "") + "M";
                                                    handleUpdatePlayer({
                                                        ...player,
                                                        positions
                                                    });
                                                },
                                                className: `btn ${player.positions?.includes("M") ? "btn-success" : ""}`,
                                                children: "M"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const positions = player.positions?.includes("F") ? player.positions.replace("F", "") : (player.positions ?? "") + "F";
                                                    handleUpdatePlayer({
                                                        ...player,
                                                        positions
                                                    });
                                                },
                                                className: `btn ${player.positions?.includes("F") ? "btn-success" : ""}`,
                                                children: "F"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: showDelBtn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    handleDelPlayer(player);
                                                },
                                                className: "btn btn-error",
                                                children: "Sure?"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowDelBtn(true),
                                                className: "btn btn-error",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: !networkIsOnline,
                            onClick: ()=>{
                                handlePlayPause(player);
                            },
                            className: "btn btn-square btn-accent join-item items-center",
                            children: player.playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                size: 48
                            }, void 0, false, {
                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                lineNumber: 360,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                size: 48
                            }, void 0, false, {
                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                lineNumber: 360,
                                columnNumber: 53
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this)
                    ]
                }, player.key, true, {
                    fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "join grow",
                    onSubmit: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            onChange: (e)=>{
                                setPlayerToAdd(e.target.value);
                            },
                            minLength: 1,
                            value: playerToAdd,
                            className: "input join-item input-bordered grow",
                            type: "text",
                            placeholder: "Player Name"
                        }, void 0, false, {
                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            onClick: ()=>{
                                if (playerToAdd) {
                                    handleAddPlayer(playerToAdd);
                                    setPlayerToAdd("");
                                }
                            },
                            className: "btn btn-square btn-accent join-item items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 48
                            }, void 0, false, {
                                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-start gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowResetBtn(!showResetBtn),
                        className: "btn btn-warning",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    showResetBtn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        className: "btn btn-error",
                        children: "RESET!!!!"
                    }, void 0, false, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            showResetBtn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Web socket"
                    }, void 0, false, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "exists: ",
                            (!!synchronizer?.getWebSocket()).toString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Connecting: ",
                            (readyState === WebSocket.CONNECTING).toString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Open: ",
                            (readyState === WebSocket.OPEN).toString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Closing: ",
                            (readyState === WebSocket.CLOSING).toString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Closed: ",
                            (readyState === WebSocket.CLOSED).toString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/game-time-plus/src/components/Players.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s(Players, "h/TLXbkrtUeiCAGIn/oTbBy/fAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useNetworkStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useMultiTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetTableCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddRowCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinybase$40$5$2e$4$2e$8_$40$cloudflare$2b$workers$2d$types$40$4$2e$20250224$2e$0_prettier$40$3$2e$5$2e$2_react$2d$dom$40$19$2e$0$2e$0_r_f119fa6fd70ae136b14596e010fc1b02$2f$node_modules$2f$tinybase$2f$ui$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDelRowCallback"]
    ];
});
_c = Players;
var _c;
__turbopack_context__.k.register(_c, "Players");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/game-time-plus/src/app/team/[teamCity]/[teamName]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useTeamsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/hooks/useTeamsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/components/Store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Players$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/game-time-plus/src/components/Players.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Page(props) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(props.params);
    const { addTeam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useTeamsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamsStore"])();
    const { teamName, teamCity } = addTeam(params.teamName, params.teamCity);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col gap-8 items-center w-full max-w-4xl px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: [
                teamName,
                " - ",
                teamCity,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: `${teamCity}/${teamName}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$components$2f$Players$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/packages/game-time-plus/src/app/team/[teamCity]/[teamName]/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/game-time-plus/src/app/team/[teamCity]/[teamName]/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/game-time-plus/src/app/team/[teamCity]/[teamName]/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/game-time-plus/src/app/team/[teamCity]/[teamName]/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Page, "7/QcmK9JLwo7hc4Cj5hCyd+RdWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$game$2d$time$2d$plus$2f$src$2f$hooks$2f$useTeamsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTeamsStore"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=packages_game-time-plus_src_cf7114ea._.js.map