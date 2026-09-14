__d(
  "AdsUEditorCampaignGroupDisabledBudgetFlexOnConversionLocationChangeReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectDonationPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectOfflinePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
    "AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignShopAdsOptInDataActionFlux",
    "adsBudgetFlexGKUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = e;
            if (t.isChangingAllCampaigns !== !0) {
              var i;
              a = o("AdsMutators").mutateEach(
                a,
                (i = t.campaignGroupIDs) != null ? i : [],
                function (e) {
                  var n = e.daily_budget == null && e.lifetime_budget == null,
                    r =
                      o("adsBudgetFlexGKUtils").isEngagementObjective(
                        e.objective,
                      ) && o("adsBudgetFlexGKUtils").isRelativeFlexEnabled();
                  return e.budget_strategy === "CAMPAIGN_FLEX_BUDGET" &&
                    t.isChangingAllCampaigns !== !0
                    ? r
                      ? e
                      : o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).resetCampaignGroupWhenCampaignBudgetEnabled(e, !1)
                    : n && r
                      ? o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).resetCampaignGroupWhenCampaignBudgetEnabled(e, !0)
                      : e;
                },
              );
            }
            var l = (n = t.campaignGroupIDs) != null ? n : [];
            return (
              l.length > 0 &&
                (a = o("AdsMutators").mutateEach(a, l, function (e) {
                  var t = r("AdsCampaignGroupRecordAccessors").pacing_type.get(
                    e,
                  );
                  return t != null && t.includes("day_parting")
                    ? r("AdsCampaignGroupRecordAccessors").pacing_type.set(
                        r("immutable").List(["standard"]),
                        e,
                      )
                    : e;
                })),
              a
            );
          },
          [
            r("AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignSelectDonationPromotedObjectTypeDataActionFlux",
            ).actionType,
            r(
              "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataActionFlux",
            ).actionType,
            r(
              "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataActionFlux",
            ).actionType,
            r(
              "AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
            ).actionType,
            r("AdsUEditorCampaignSelectOfflinePromotedObjectTypeDataActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
            ).actionType,
            r(
              "AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataActionFlux",
            ).actionType,
            r("AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataActionFlux",
            ).actionType,
            r("AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux")
              .actionType,
            r("AdsUEditorCampaignShopAdsOptInDataActionFlux").actionType,
            r("AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
