__d(
  "adsDCOConvertDynamicCreativeToStorySpecCampaign",
  [
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        t != null
          ? o("AdsPlacementReducerUtils").updatePlacementSpec(
              o("AdsCampaignRawSpecUtils").setCampaignPlacement(e, t),
            )
          : e;
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").is_dynamic_creative_optimization.set(
          !1,
        ),
        r("AdsCampaignRecordAccessors").is_dynamic_creative.set(!1),
        r(
          "AdsCampaignRecordAccessors",
        ).is_dynamic_creative_asset_customization.set(!1),
      )(n);
    }
    l.default = e;
  },
  98,
);
