__d(
  "AdsUEditorLiveVideoAdsOptimizedSettingsUtils",
  [
    "AdsAPIObjectives",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignRecordAccessors",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorLiveVideoAdsConstants",
    "DateTime",
    "LiveBoostingFalcoEvent",
    "adsCampaignGetDefaultDailyBudget",
    "adsCampaignGetDefaultLifetimeBudget",
    "adsCampaignGetISODateTimeString",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
        var e,
          i = n == null ? void 0 : n.start_time,
          l = r("isTruthy")(i)
            ? r("DateTime").fromISOString(i, t.timezone_id)
            : r("DateTime").now(t.timezone_id);
        if (a === !0) {
          var s = o("AdsLiveVideoAdUtils").getIGLVADurationHours(n);
          return r("adsCampaignGetISODateTimeString")(
            l.addHours(s).toDate(),
            t.timezone_offset_hours_utc,
          );
        }
        var u =
            (e = t.live_video_advertiser_details) == null
              ? void 0
              : e.lva_default_duration_s,
          c =
            u != null && u > 0
              ? u
              : o("AdsUEditorLiveVideoAdsConstants")
                  .FB_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR * 3600;
        return r("adsCampaignGetISODateTimeString")(
          l.addSeconds(c).toDate(),
          t.timezone_offset_hours_utc,
        );
      },
      s = function (t, n) {
        var e,
          o =
            t == null || (e = t.live_video_advertiser_details) == null
              ? void 0
              : e.lva_default_budget;
        return r("isTruthy")(o)
          ? o
          : r("isTruthy")(n) && (t == null ? void 0 : t.currency) != null
            ? r("adsCampaignGetDefaultLifetimeBudget")(
                t.currency,
                n,
                null,
                null,
              )
            : 0;
      },
      u = function (n, o, a, i, l) {
        var t,
          u = o;
        if (!r("isTruthy")(n)) return u;
        if (
          ((u = r("AdsCampaignRecordAccessors").end_time.set(e(n, o, i), o)),
          l !== !0 && r("isTruthy")((t = u) == null ? void 0 : t.daily_budget))
        ) {
          var c = s(n, a);
          ((u = r("AdsCampaignRecordAccessors").lifetime_budget.set(c, u)),
            (u = r("AdsCampaignRecordAccessors").daily_budget.set(0, u)),
            c != null &&
              r("LiveBoostingFalcoEvent").log(function () {
                var e, t;
                return {
                  event: "default_budget",
                  surface: "ads_manager",
                  extra_data: {
                    default_budget: String(c),
                    ad_account_id: (e = n.account_id) != null ? e : "",
                    currency: n.currency,
                    campaign_id: (t = o.id) != null ? t : "",
                    is_ig_live_video_ad: String(i === !0),
                  },
                };
              }));
        }
        return u;
      };
    function c(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? "PURCHASE"
        : e === r("AdsAPIObjectives").OUTCOME_LEADS
          ? "LEAD"
          : e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
            ? o(
                "AdsCampaignLiveVideoAdsUtils",
              ).getShouldDefaultOcPurchaseOptimizationGoalIgLva(!1)
              ? "PURCHASE"
              : "CONTACT"
            : null;
    }
    var d = function (t, n, a, i) {
      if (!r("isTruthy")(t)) return n;
      var e = o("AdsMutators").chain(function (e) {
        return r("AdsCampaignRecordAccessors").end_time.set("", e);
      })(n);
      if (i !== !0) {
        var l = r("isTruthy")(a)
          ? r("adsCampaignGetDefaultDailyBudget")(t.currency, a)
          : 0;
        e = o("AdsMutators").chain(
          function (e) {
            return r("AdsCampaignRecordAccessors").lifetime_budget.set(0, e);
          },
          function (e) {
            return r("AdsCampaignRecordAccessors").daily_budget.set(l, e);
          },
        )(e);
      }
      return e;
    };
    ((l.getLVAOptimizedSettingsLifetimeBudget = s),
      (l.applyLVACampaignSettingsOptimization = u),
      (l.getDefaultOffsiteCustomEventType = c),
      (l.clearLVACampaignSettingsOptimization = d));
  },
  98,
);
