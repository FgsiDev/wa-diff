__d(
  "CatalogPreloadingHandleScenarioAction",
  [
    "CatalogPreloadingHandleScenarioReducerPlugin",
    "CatalogPreloadingScenarioProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("CatalogPreloadingHandleScenarioReducerPlugin"),
            n("CatalogPreloadingScenarioProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "CATALOG.PRELOADING_HANDLE_SCENARIO",
    );
    a.exports = e;
  },
  null,
);
