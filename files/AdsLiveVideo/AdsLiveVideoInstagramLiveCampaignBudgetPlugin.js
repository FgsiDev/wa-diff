__d(
  "AdsLiveVideoInstagramLiveCampaignBudgetPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsApplicationIDs",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsEditingCampaignEditorContext",
    "AdsPromotedObjectTypes",
    "CampaignDefaultBudgetConfig",
    "adsUEditorCampaignLiveVideoSectionContainerSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { daily: 2e3, lifetime: 5e4 },
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "conversions/live_video/instagram_live",
        pivots: {
          objective: r("AdsAPIObjectives").CONVERSIONS,
          promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
          destinationType: r("AdCampaignDestination").INSTAGRAM_LIVE,
        },
        getDefaultBudgetMode: function (t) {
          return "lifetime";
        },
        _shouldOverrideDefaultBudgets: function (t) {
          return (
            t === r("AdsApplicationIDs").ADS_CREATOR ||
            t === r("AdsApplicationIDs").ADS_CAMPAIGN_MANAGER ||
            t === r("AdsApplicationIDs").ADS_POWER_EDITOR
          );
        },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return s._shouldOverrideDefaultBudgets(n)
            ? e.daily
            : r("CampaignDefaultBudgetConfig").default_budget.daily;
        },
        getBaseDefaultLifetimeBudgetUSD: function (n) {
          return s._shouldOverrideDefaultBudgets(n)
            ? e.lifetime
            : r("CampaignDefaultBudgetConfig").default_budget.lifetime;
        },
        getDefaultLifetimeBudgetUSD: function (t, n) {
          var e = o(
            "adsUEditorCampaignLiveVideoSectionContainerSelector",
          ).liveVideoAdsDefaultBudgetSelectorWithoutToggle(
            r("AdsEditingCampaignEditorContext"),
          );
          return e != null
            ? e
            : r("CampaignDefaultBudgetConfig").default_budget.lifetime;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
