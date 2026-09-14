__d(
  "AdsPostEngagementCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsEditingCampaignEditorContext",
    "CampaignDefaultBudgetConfig",
    "LiveBoostingFalcoEvent",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignLiveVideoSectionContainerSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1100,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "post-engagement",
        pivots: { objective: r("AdsAPIObjectives").POST_ENGAGEMENT },
        getDefaultBudgetMode: function (t) {
          var e = o(
            "adsUEditorCampaignLiveVideoSectionContainerSelector",
          ).shouldApplyLVAOptimizedSettingsSelector(
            r("AdsEditingCampaignEditorContext"),
          );
          if (e) {
            var n = r("adsUEditorSelectedCampaignIDsSelector")(
                r("AdsEditingCampaignEditorContext"),
              ),
              a = r("adsUEditorAccountSelector")(
                r("AdsEditingCampaignEditorContext"),
              );
            return (
              r("LiveBoostingFalcoEvent").log(function () {
                var e, t;
                return {
                  event: "optimized_settings_lifetime_budget_defaulted",
                  ui_component: "optimized_settings_guidance",
                  surface: "ads_manager",
                  extra_data: {
                    objective: r("AdsAPIObjectives").POST_ENGAGEMENT,
                    campaign_id:
                      (e = n == null ? void 0 : n.join(",")) != null ? e : "",
                    ad_account_id: (t = a.account_id) != null ? t : "",
                  },
                };
              }),
              "lifetime"
            );
          }
          return "daily";
        },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e;
        },
        getDefaultLifetimeBudgetUSD: function (t, n) {
          var e = o(
            "adsUEditorCampaignLiveVideoSectionContainerSelector",
          ).liveVideoAdsDefaultBudgetSelector(
            r("AdsEditingCampaignEditorContext"),
          );
          if (r("isTruthy")(e)) {
            var a = r("adsUEditorSelectedCampaignIDsSelector")(
                r("AdsEditingCampaignEditorContext"),
              ),
              i = r("adsUEditorAccountSelector")(
                r("AdsEditingCampaignEditorContext"),
              );
            return (
              r("LiveBoostingFalcoEvent").log(function () {
                var t, n;
                return {
                  event: "optimized_settings_budget_defaulted",
                  ui_component: "optimized_settings_guidance",
                  surface: "ads_manager",
                  ad_account_id_provided: i.account_id,
                  extra_data: {
                    objective: r("AdsAPIObjectives").POST_ENGAGEMENT,
                    campaign_id:
                      (t = a == null ? void 0 : a.join(",")) != null ? t : "",
                    ad_account_id: (n = i.account_id) != null ? n : "",
                    default_budget: String(e),
                  },
                };
              }),
              e
            );
          }
          return r("CampaignDefaultBudgetConfig").default_budget.lifetime;
        },
        shouldOverrideDailyBudgetWithDestination: function () {
          return !0;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
