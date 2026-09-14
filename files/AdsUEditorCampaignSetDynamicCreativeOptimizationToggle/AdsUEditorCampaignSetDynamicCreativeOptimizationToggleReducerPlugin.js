__d(
  "AdsUEditorCampaignSetDynamicCreativeOptimizationToggleReducerPlugin",
  [
    "AdsDCOUtils",
    "AdsMutators",
    "AdsPlacementUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetDynamicCreativeOptimizationToggleActionFlux",
    "isFalsey",
    "isMessengerMarketingMessageEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var a = babelHelpers.extends({}, t.eligibilityInformation, {
                    containsDCO: t.isInDynamicCreativeOptimization,
                  }),
                  i =
                    r(
                      "AdsPlacementUtils",
                    ).getAutomaticCampaignPlacementWithEligibilityInformation(
                      a,
                    );
                return t.isInDynamicCreativeOptimization &&
                  (r("isFalsey")(t.isDCODeprecatedEligibleForCAGFlow) ||
                    o(
                      "isMessengerMarketingMessageEnabledFromCampaign",
                    ).isMessengerMarketingMessageEnabledFromCampaign(e))
                  ? o("AdsDCOUtils").convertToDCOCampaign(e, i)
                  : o("AdsDCOUtils").convertDynamicCreativeToStorySpecCampaign(
                      e,
                      i,
                    );
              },
            );
          },
          o("AdsUEditorCampaignSetDynamicCreativeOptimizationToggleActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
