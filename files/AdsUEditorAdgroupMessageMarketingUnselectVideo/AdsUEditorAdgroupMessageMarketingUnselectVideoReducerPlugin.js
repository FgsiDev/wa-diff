__d(
  "AdsUEditorAdgroupMessageMarketingUnselectVideoReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingMediaMutators",
    "AdsUEditorAdgroupMessageMarketingUnselectVideoActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupMessageMarketingMediaMutators",
              ).deleteVideoFromCreativeSpec(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingUnselectVideoActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
