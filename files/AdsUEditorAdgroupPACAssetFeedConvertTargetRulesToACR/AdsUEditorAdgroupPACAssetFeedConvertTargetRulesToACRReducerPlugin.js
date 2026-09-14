__d(
  "AdsUEditorAdgroupPACAssetFeedConvertTargetRulesToACRReducerPlugin",
  [
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsLocalizedPlacementsMutators",
    "AdsMutators",
    "AdsUEditorAdgroupPACAssetFeedConvertTargetRulesToACRDataActionFlux",
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
              r("vulture")("iY7IuguhK80xQ7B7K_PiyS09GN4="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, t) {
                return (
                  r("vulture")("6wP6Wr4oToP-QlyyZfE_-hy_nD4="),
                  !o(
                    "AdsAssetFeedSimpleFieldCheckUtils",
                  ).hasAssetCustomizationRules(e) &&
                  o("AdsAssetFeedSimpleFieldCheckUtils").hasTargetRules(e)
                    ? o(
                        "AdsLocalizedPlacementsMutators",
                      ).convertTargetRulePACAdgroupToACR(e)
                    : e
                );
              })
            );
          },
          o(
            "AdsUEditorAdgroupPACAssetFeedConvertTargetRulesToACRDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
