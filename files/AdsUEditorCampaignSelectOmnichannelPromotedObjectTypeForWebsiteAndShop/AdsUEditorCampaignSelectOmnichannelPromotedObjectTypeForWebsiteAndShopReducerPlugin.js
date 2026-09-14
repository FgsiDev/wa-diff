__d(
  "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndShopReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsCampaignShopsAdsTransformMutator",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignShopAdsOptInDataActionFlux",
    "AdsUEditorCampaignShopAdsUtils",
    "adsUEditorAccountSelector",
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
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupMap;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var l,
                  s,
                  u,
                  c,
                  d,
                  m = r("nullthrows")(
                    i.get(n),
                    "Campaign group must exist in the map for the given campaignID",
                  ),
                  p = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    m.objective,
                    e,
                  ),
                  _ = o("AdsODAXUtils").maybeTranslateObjective(
                    m.objective,
                    p,
                    e.optimization_goal,
                  ),
                  f = o(
                    "AdsUEditorCampaignShopAdsUtils",
                  ).isShopsAdsIncentiveProgramEligible(m),
                  g = o(
                    "AdsCampaignShopsAdsTransformMutator",
                  ).transformCampaignToShopsAds(e, {
                    isShopsAdsIncentiveProgramEnabled: f,
                    campaignGroup: m,
                    objective: _,
                    account: a,
                    promotedObjectType: p,
                    commerceMerchantSettingsId:
                      (l = t.campaignCMSMap) == null ? void 0 : l.get(n),
                    resetAttributionSettings:
                      (s = t.resetAttributionSettings) != null ? s : !0,
                    resetAudienceFields:
                      (u = t.resetAudienceFields) != null ? u : !0,
                    resetBudgetFields:
                      (c = t.resetBudgetFields) != null ? c : !0,
                    resetOptimizationRelatedFields:
                      (d = t.resetOptimizationRelatedFields) != null ? d : !0,
                  });
                return (
                  (g = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.variation.delete(g)),
                  g
                );
              },
            );
          },
          o("AdsUEditorCampaignShopAdsOptInDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
