__d(
  "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppReducerPlugin",
  [
    "AdsMutators",
    "AdsProfileVisitSABRBudgetRestoreUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorWebsiteAndAppMutators",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignShopAdsHasOptimizedSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            shopAdsHasOptimized: r(
              "adsUEditorCampaignShopAdsHasOptimizedSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupMap,
              l = n.eligibilityInformation,
              s = o("AdsMutators").mutateEach(
                e,
                t.campaignIDs,
                function (e, t) {
                  var n = r("nullthrows")(i.get(t));
                  return o(
                    "AdsUEditorWebsiteAndAppMutators",
                  ).selectWebsiteAndAppPromotedObjectTypeForCampaign(
                    e,
                    n,
                    a,
                    l,
                  );
                },
              );
            return o(
              "AdsProfileVisitSABRBudgetRestoreUtils",
            ).restoreSABRDefaultedBudgets(s, t.campaignIDs);
          },
          o(
            "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
