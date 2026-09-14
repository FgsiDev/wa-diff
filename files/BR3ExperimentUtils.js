__d(
  "BR3ExperimentUtils",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [
          "aymt_bi_user_restriction_tip",
          "aymt_bi_bm_restriction_tip",
          "aymt_bi_ad_account_restriction_tip",
          "aymt_account_at_spend_cap_tip",
          "aymt_account_unsettled_tip_v2",
          "aymt_prepay_account_blocked_status_notif_tip",
        ],
        n = {};
      return (
        t.forEach(function (e, t) {
          n[e] = t;
        }),
        e.reduce(function (e, t) {
          if (t == null) return e;
          if (e == null) return t;
          var r = Object.prototype.hasOwnProperty.call(n, t) ? n[t] : 1 / 0,
            o = Object.prototype.hasOwnProperty.call(n, e) ? n[e] : 1 / 0;
          return r < o ? t : e;
        }, null)
      );
    }
    function s(e, t) {
      return (t === void 0 && (t = !1), t ? _(e) : p(e));
    }
    function u(e) {
      return f(e);
    }
    function c(e) {
      return e === "aymt_ads_dz_reserve_tip";
    }
    function d(e, t) {
      if ((t === void 0 && (t = !0), t === !1)) return !1;
      var n = _(e);
      return n
        ? !0
        : e === "aymt_bi_ad_account_restriction_tip" ||
            e === "aymt_bi_user_restriction_tip" ||
            e === "aymt_bi_bm_restriction_tip";
    }
    function m(e) {
      var t = _(e);
      return t
        ? !0
        : e === "aymt_bi_ad_account_restriction_tip" ||
            e === "aymt_bi_bm_restriction_tip" ||
            e === "aymt_bi_user_restriction_tip";
    }
    function p(e) {
      switch (e) {
        case "aymt_bi_ad_account_restriction_tip":
        case "aymt_bi_user_restriction_tip":
          return !0;
        case "aymt_bi_bm_restriction_tip":
          return !1;
        default:
          return !1;
      }
    }
    function _(e) {
      switch (e) {
        case "aymt_bi_ad_account_restriction_tip":
        case "aymt_bi_user_restriction_tip":
          return !0;
        case "aymt_account_at_spend_cap_tip":
        case "aymt_account_unsettled_tip_v2":
        case "aymt_prepay_account_blocked_status_notif_tip":
          return !!r("qex")._("1495");
        default:
          return !1;
      }
    }
    function f(e) {
      switch (e) {
        case "aymt_bi_ad_account_restriction_tip":
        case "aymt_bi_ad_account_restriction_aeb_tip":
        case "aymt_bi_bm_restriction_aeb_tip":
        case "aymt_bi_user_restriction_tip":
        case "aymt_bi_user_restriction_aeb_tip":
        case "aymt_bi_user_restriction_aeb_mbs_tip":
        case "aymt_bi_bm_restriction_aeb_mbs_tip":
        case "aymt_bi_ad_account_restriction_mbs_tip":
          return !0;
        default:
          return !1;
      }
    }
    ((l.getTopPriorityTipName = e),
      (l.isTipInActorEnforcementBannerOnSYDandCT = s),
      (l.isTipExposedToInPlaceGAMEModalResolutionExperiment = u),
      (l.shouldForceLegallyRequiredMegaphoneDisplay = c),
      (l.shouldHideTipInAYMTCampaignsMegaphoneChannel = d),
      (l.shouldHideTipInAYMTStartYourDayAlertsChannel = m));
  },
  98,
);
