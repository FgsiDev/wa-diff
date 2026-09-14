__d(
  "AdsUEditorAdgroupMessageMarketingUnselectImageReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingMediaMutators",
    "AdsUEditorAdgroupMessageMarketingUnselectImageActionFlux",
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
              ).deleteImageFromCreativeSpec(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingUnselectImageActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
