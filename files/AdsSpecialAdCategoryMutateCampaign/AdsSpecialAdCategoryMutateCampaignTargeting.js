__d(
  "AdsSpecialAdCategoryMutateCampaignTargeting",
  [
    "AdsBuyingTypes",
    "AdsCampaignRecordAccessors",
    "AdsEditingCampaignEditorContext",
    "AdsMutators",
    "AdsTargetingSignalReducerUtils",
    "AdsTuneTargetingClient",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetTargetingSpecAction",
    "handleMarketingMessagesSACCampaignUpdate",
    "targetingBulkSpecTransformSpecToAdsBulkValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, l, s, u) {
      var c = u.campaignIDToBuyingTypeMap,
        d = u.campaignIDToObjectiveMap,
        m = u.campaignIDToRegulatedCategoriesMap,
        p = u.eligibilityInformationMap,
        _ = u.enableAutomationForPharmaAdvertiser;
      return o("AdsMutators").mutateEach(e, n, function (e, n) {
        var u,
          f,
          g,
          h,
          y = function (t) {
            r("AdsUEditorCampaignSetTargetingSpecAction").dispatch(
              {
                campaignIDs: [n],
                hostID: a,
                targetingBulkSpec: r(
                  "targetingBulkSpecTransformSpecToAdsBulkValue",
                )(JSON.parse(t)),
              },
              {
                line: "51",
                module: "AdsSpecialAdCategoryMutateCampaignTargeting.js",
                moduleID: i.id,
              },
            );
          },
          C = (u = d.get(n)) != null ? u : "NONE",
          b = (f = m.get(n)) == null ? void 0 : f.toArray(),
          v = (g = c.get(n)) != null ? g : r("AdsBuyingTypes").AUCTION,
          S = e.optimization_goal,
          R = o("AdsTargetingSignalReducerUtils").setTargetingSignal({
            campaign: e,
            objective: C,
            regulatedCategories: b,
            optimizationGoal: S,
            shouldSkipTargetingExpansionDefaultOn: !1,
            shouldTurnOffLookalikeRelaxation: !0,
            buyingType: v,
            enableAutomationForPharmaAdvertiser: _,
          }),
          L =
            (h = p == null ? void 0 : p.get(n)) != null
              ? h
              : o("AdsUEditorCampaignSelectors").eligibilityInformationSelector(
                  r("AdsEditingCampaignEditorContext"),
                );
        return (
          (R = o(
            "handleMarketingMessagesSACCampaignUpdate",
          ).handleMarketingMessagesSACCampaignUpdate(R, n, a, L, !0)),
          r("AdsTuneTargetingClient").tuneTargetingString(
            y,
            l,
            JSON.stringify(R.targeting),
            t,
            s,
          ),
          o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").saved_audience.set(null),
            r("AdsCampaignRecordAccessors").saved_audience_id.set(null),
          )(R)
        );
      });
    }
    l.AdsSpecialAdCategoryMutateCampaignTargeting = e;
  },
  98,
);
