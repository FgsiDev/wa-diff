__d(
  "AdsUEditorCampaignGroupDisableBudgetFlexOnPixelChangeReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsDataActionFlux",
    "SignalsConversionTypeaheadUpdateSelectedPixelIDActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n;
            if (
              (t == null ? void 0 : t.isChangingAllCampaigns) != null &&
              !(t != null && t.isChangingAllCampaigns) &&
              t.previouslySelectedPixelID != null &&
              (((n = t.pixelData) == null ? void 0 : n.pixel_id) != null ||
                t.selectedPixelID != null)
            ) {
              var r;
              return o("AdsMutators").mutateEach(
                e,
                (r = t.campaignGroupIDs) != null ? r : [],
                function (e) {
                  return e.budget_strategy === "CAMPAIGN_FLEX_BUDGET"
                    ? o(
                        "AdsCampaignGroupBudgetMutationUtils",
                      ).resetCampaignGroupWhenCampaignBudgetEnabled(e, !1)
                    : e;
                },
              );
            }
            return e;
          },
          [
            r(
              "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsDataActionFlux",
            ).actionType,
            r(
              "AdsUEditorCampaignDeliveryChangeOmnichannelPixelObjectActionFlux",
            ).actionType,
            o("SignalsConversionTypeaheadUpdateSelectedPixelIDActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
