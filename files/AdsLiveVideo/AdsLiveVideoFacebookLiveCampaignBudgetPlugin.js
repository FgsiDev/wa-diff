__d(
  "AdsLiveVideoFacebookLiveCampaignBudgetPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsApplicationIDs",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsEditingCampaignEditorContext",
    "AdsPromotedObjectTypes",
    "AdsUEditorLiveVideoAdsConstants",
    "CampaignDefaultBudgetConfig",
    "DateTime",
    "adsUEditorCampaignLiveVideoSectionContainerSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { daily: 2e3, lifetime: 5e4 },
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "conversions/live_video/facebook_live",
        pivots: {
          objective: r("AdsAPIObjectives").CONVERSIONS,
          promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
          destinationType: r("AdCampaignDestination").FACEBOOK_LIVE,
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
        getDefaultEndDate: function (t, n, a) {
          var e = r("DateTime").fromDate(t, t.getTimezoneOffset());
          return e
            .addHours(
              o("AdsUEditorLiveVideoAdsConstants")
                .FB_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR,
            )
            .toDate();
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
