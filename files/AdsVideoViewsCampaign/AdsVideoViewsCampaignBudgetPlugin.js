__d(
  "AdsVideoViewsCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsApplicationIDs",
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
    var e = { daily: 2e3, lifetime: 5e4 };
    function s(e) {
      return (
        e === r("AdsApplicationIDs").ADS_CREATOR ||
        e === r("AdsApplicationIDs").ADS_CAMPAIGN_MANAGER ||
        e === r("AdsApplicationIDs").ADS_POWER_EDITOR
      );
    }
    var u = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "video-views",
        pivots: { objective: r("AdsAPIObjectives").VIDEO_VIEWS },
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
                    objective: r("AdsAPIObjectives").VIDEO_VIEWS,
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
          return s(n)
            ? e.daily
            : r("CampaignDefaultBudgetConfig").default_budget.daily;
        },
        getBaseDefaultLifetimeBudgetUSD: function (n) {
          return s(n)
            ? e.lifetime
            : r("CampaignDefaultBudgetConfig").default_budget.lifetime;
        },
        getDefaultLifetimeBudgetUSD: function (t) {
          var e = o(
            "adsUEditorCampaignLiveVideoSectionContainerSelector",
          ).liveVideoAdsDefaultBudgetSelector(
            r("AdsEditingCampaignEditorContext"),
          );
          if (r("isTruthy")(e)) {
            var n = r("adsUEditorSelectedCampaignIDsSelector")(
                r("AdsEditingCampaignEditorContext"),
              ),
              a = r("adsUEditorAccountSelector")(
                r("AdsEditingCampaignEditorContext"),
              );
            return (
              r("LiveBoostingFalcoEvent").log(function () {
                var t, o;
                return {
                  event: "optimized_settings_budget_defaulted",
                  ui_component: "optimized_settings_guidance",
                  surface: "ads_manager",
                  ad_account_id_provided: a.account_id,
                  extra_data: {
                    objective: r("AdsAPIObjectives").VIDEO_VIEWS,
                    campaign_id:
                      (t = n == null ? void 0 : n.join(",")) != null ? t : "",
                    ad_account_id: (o = a.account_id) != null ? o : "",
                    default_budget: String(e),
                  },
                };
              }),
              e
            );
          }
          return r("CampaignDefaultBudgetConfig").default_budget.lifetime;
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);
