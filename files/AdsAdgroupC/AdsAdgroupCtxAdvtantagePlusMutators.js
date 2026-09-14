__d(
  "AdsAdgroupCtxAdvtantagePlusMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPageUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "ApiDynamicCreativeOptimizationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsPageUtils").getPageID(e);
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
            e,
            t,
            null,
            n,
          );
        },
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.additional_data.is_click_to_message.set(!0),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.set(
          r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION,
        ),
      )(e);
    }
    l.restoreCTXMDAssetFeedSpecForAdgroup = e;
  },
  98,
);
