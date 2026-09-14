__d(
  "AdsUEditorAdgroupDLOAssetFeedConvertGroupRulesToACRReducerPlugin",
  [
    "AdsDLOLanguageMutators",
    "AdsMutators",
    "AdsUEditorAdgroupDLOAssetFeedConvertGroupRulesToACRDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return (
              r("vulture")("LWAX8FHYZDd_AhkzYXMzrixjpc8="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, t) {
                return (
                  r("vulture")("z4qwIR3qdM9Ju9F_2Fp0bcsRWtg="),
                  o("AdsDLOLanguageMutators").getACRAdgroupFromGroupRuleAdgroup(
                    e,
                  )
                );
              })
            );
          },
          o("AdsUEditorAdgroupDLOAssetFeedConvertGroupRulesToACRDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
