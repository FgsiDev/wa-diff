__d(
  "AdsUEditorAdgroupMessageMarketingConvertDynamicToStaticReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingConvertDynamicToStaticActionFlux",
    "AdsUEditorAdgroupMessageMarketingResetCreativeSpecMutators",
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
                "AdsUEditorAdgroupMessageMarketingResetCreativeSpecMutators",
              ).getCreativeSpecResetMutators(
                e,
                t.sourceValue,
                t.format,
                t.language,
                !0,
              );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingConvertDynamicToStaticActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
