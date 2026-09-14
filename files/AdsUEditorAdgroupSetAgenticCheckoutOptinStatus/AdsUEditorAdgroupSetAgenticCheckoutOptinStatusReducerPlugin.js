__d(
  "AdsUEditorAdgroupSetAgenticCheckoutOptinStatusReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAgenticCheckoutOptinStatusActionFlux",
    "AgenticCheckoutAdsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o(
                  "AgenticCheckoutAdsUtils",
                ).applyManualAgenticCheckoutUpdate(e, t.optinStatus);
              },
            );
          },
          r("AdsUEditorAdgroupSetAgenticCheckoutOptinStatusActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
