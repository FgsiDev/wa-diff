__d(
  "AdsUEditorAdgroupOnsiteDestinationOptimizationToggleReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupOnsiteDestinationOptimizationToggleActionFlux",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.toggleValue === "OPTED_IN"
                ? o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).setOnsiteDestinationOptimizationOptIn(e)
                : t.toggleValue === "OPTED_OUT"
                  ? o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).setOnsiteDestinationOptimizationOptOut(e)
                  : e;
            });
          },
          r("AdsUEditorAdgroupOnsiteDestinationOptimizationToggleActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
