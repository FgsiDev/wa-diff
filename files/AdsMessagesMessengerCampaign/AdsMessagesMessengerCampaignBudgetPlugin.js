__d(
  "AdsMessagesMessengerCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsEditingCampaignEditorContext",
    "AdsMessagesCampaignBudgetPluginCommon",
    "AdsMessagesCampaignBudgetPluginEndDateCommon",
    "AdsPromotedObjectTypes",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "LiveBoostingFalcoEvent",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignBudgetModeSelector",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "adsUEditorCampaignLiveVideoSectionContainerSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "messages/messenger",
        pivots: {
          objective: r("AdsAPIObjectives").MESSAGES,
          promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
        },
        getBaseDefaultDailyBudgetUSD: function () {
          return o("AdsMessagesCampaignBudgetPluginEndDateCommon")
            .DEFAULT_DAILY_BUDGET;
        },
        getDefaultBudgetMode: function (t) {
          var e = o(
            "adsUEditorCampaignLiveVideoSectionContainerSelector",
          ).shouldApplyLVAOptimizedSettingsSelector(
            r("AdsEditingCampaignEditorContext"),
          );
          if (e) return "lifetime";
          var n = o(
            "adsUEditorCampaignBudgetModeSelector",
          ).budgetModeOrMixedSelector(r("AdsEditingCampaignEditorContext"));
          return r("isTruthy")(n) &&
            n === "lifetime" &&
            o(
              "CtxBudgetGuidanceLongTermHoldoutUtils",
            ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
              !1,
              "consistent_budget",
              "AdsMessagesMessengerCampaignBudgetPlugin",
            )
            ? "lifetime"
            : "daily";
        },
        getDefaultDailyBudgetUSD: function () {
          var e = null;
          return (
            (e = o(
              "AdsMessagesCampaignBudgetPluginCommon",
            ).setDefaultDailyBudgetForCTXAtEditing(
              o("AdsMessagesCampaignBudgetPluginCommon").CTXBudgetPluginsType
                .MESSENGER,
            )),
            r("isTruthy")(e)
              ? e
              : o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                  .DEFAULT_DAILY_BUDGET
          );
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
                    objective: r("AdsAPIObjectives").MESSAGES,
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
          var l = null;
          if (
            ((l = o(
              "AdsMessagesCampaignBudgetPluginCommon",
            ).setDefaultLifetimeBudgetForCTXAtEditing(
              o("AdsMessagesCampaignBudgetPluginCommon").CTXBudgetPluginsType
                .MESSENGER,
              n,
            )),
            r("isTruthy")(l))
          )
            return l;
          var s = o(
              "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
            ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
              r("AdsEditingCampaignEditorContext"),
            ),
            u = s.destinationType,
            c = s.objective,
            d = s.promotedObjectType;
          if (
            (d !== r("AdsPromotedObjectTypes").MESSENGER || r("isFalsey")(u)) &&
            (c === r("AdsAPIObjectives").OUTCOME_SALES ||
              c === r("AdsAPIObjectives").LINK_CLICKS ||
              c === r("AdsAPIObjectives").OUTCOME_LEADS)
          ) {
            var m = o(
              "adsUEditorCampaignBudgetModeSelector",
            ).lifetimeBudgetSelector(r("AdsEditingCampaignEditorContext"));
            if (r("isTruthy")(m)) {
              var p = m.getValues()[0];
              if (
                r("isTruthy")(p) &&
                p >
                  o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                    .DEFAULT_LIFETIME_BUDGET &&
                o(
                  "CtxBudgetGuidanceLongTermHoldoutUtils",
                ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
                  !0,
                  "consistent_budget",
                  "AdsMessagesMessengerCampaignBudgetPlugin_lifetimeBudget",
                )
              )
                return p;
            }
          }
          return o("AdsMessagesCampaignBudgetPluginEndDateCommon")
            .DEFAULT_LIFETIME_BUDGET;
        },
        getDefaultEndDate: function (t, n, r, a) {
          return o(
            "AdsMessagesCampaignBudgetPluginEndDateCommon",
          ).getMessagesDefaultEndDate(t, r, a);
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
