__d(
  "AdsUEditorCallAdsBudgetRecommendationUitls",
  [
    "AdsBulkValueUtils",
    "AdsEditingCampaignEditorContext",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsPromotedObjectTypes",
    "AdsUniformValue",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetCampaignDayCount",
    "adsUEditorAccountSelector",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 30;
    function s(e, t) {
      r("AdsInterfacesLogger").logOnce({ eventName: e, data: t });
    }
    function u(e, t, n) {
      return { ad_account_id: e, campaign_id: t, message: n };
    }
    function c(e, t, n, o) {
      if (!r("isTruthy")(e)) return null;
      if (t === "daily") return e;
      if (t === "lifetime") {
        var a = h(n, o);
        return r("isTruthy")(a) ? e * a : null;
      }
      return null;
    }
    function d(e, t, n) {
      if (!r("isTruthy")(t)) return null;
      var o = e * t;
      return Math.max(o, n);
    }
    function m(e, t) {
      return Math.max(e, t);
    }
    function p(e, t, n) {
      var r = o("AdsBulkValueUtils").getUniformValueOrDefault(n, 0),
        a = o("AdsBulkValueUtils").getUniformValueOrDefault(t, 0);
      return e === "daily" ? a : r;
    }
    function _(e, t, n, o, a, i, l) {
      if (!r("isTruthy")(a)) return null;
      var s = p(t, n, o);
      if (!r("isTruthy")(s)) return null;
      var u = f(e, a);
      E(e.account_id, t, u);
      var c = h(i, l);
      return t === "daily" ? d(u, c, s) : t === "lifetime" ? m(u, s) : null;
    }
    function f(e, t) {
      return Math.ceil((t * e.account_currency_ratio_to_usd) / 100) * 100;
    }
    function g(e) {
      if (!(e instanceof r("AdsUniformValue"))) return null;
      var t = e.getValue();
      return t != null ? new Date(t) : null;
    }
    function h(t, n) {
      var o = g(t),
        a = g(n);
      return !o || !a
        ? e
        : Math.max(1, Math.floor(r("adsCampaignGetCampaignDayCount")(o, a)));
    }
    function y() {
      var e = r("adsUEditorAccountSelector")(
          r("AdsEditingCampaignEditorContext"),
        ),
        t =
          e == null
            ? void 0
            : e.call_ads_ad_account_similar_advertiser_budget_recommendation;
      return r("isTruthy")(t)
        ? ((t = Number(t)),
          (t = o(
            "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
          ).getBudgetNumberInUSDbyCurrencyMultiplier(t)),
          t)
        : null;
    }
    function C(t, n) {
      if (!r("isTruthy")(t)) return null;
      var o = n != null ? n : e;
      return (o === 0 && (o = 1), t * o);
    }
    function b(e) {
      var t = y();
      return C(t, e);
    }
    function v(e, t, n, r, o) {
      if (e === "lifetime") {
        var a = h(r, o);
        return n(a);
      }
      return t();
    }
    function S(e, t, n, o) {
      var a = v(e, y, b, t, n);
      return r("isTruthy")(a)
        ? r("adsCampaignConvertUSDBudgetToCurrency")(o, a)
        : null;
    }
    function R(e) {
      s("call_ads_budget_guidance_card_impression", e);
    }
    function L(e) {
      s("call_ads_budget_guidance_card_button_clicked", e);
    }
    function E(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName:
          "call_ads_budget_recommendation_set_l2_default_budget_when_budget_mode_switched",
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.message = n),
          (o.campaign_budget_type = t),
          o),
      });
    }
    function k(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName:
          "call_ads_budget_recommendation_set_l2_default_budget_when_call_selected",
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.message = n),
          (o.campaign_budget_type = t),
          o),
      });
    }
    function I(e, t, n, o, a) {
      e.forEach(function (e) {
        var i;
        r("AdsInterfacesLogger").logOnce({
          eventName:
            "call_ads_similar_advertiser_budget_shadow_log_adaccount_recommendation",
          data:
            ((i = {}),
            (i.ad_account_id = t),
            (i.campaign_id = e),
            (i.bulk_edit_value = n),
            (i.campaign_destination_type = o),
            (i.campaign_budget_type = a),
            i),
        });
      });
    }
    function T(e) {
      s("call_ads_similar_advertiser_budget_guidance_card_impression", e);
    }
    function D(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("3362") : r("qex")._("3363")
      );
    }
    function x(e) {
      return e.getValues().includes(r("AdsPromotedObjectTypes").PHONE_CALL);
    }
    ((l.getCallAdsBudgetRecommendationByMode = c),
      (l.getCallAdsDefaultBudgetByModeOnModeSwitch = _),
      (l.convertBudgetFromUSDToCurrency = f),
      (l.getCallAdsSABRAdAccountDailyBudgetRecommendation = y),
      (l.getAdAccountBudgetRecommendationByModeForSABR = S),
      (l.logBudgetRecommendationImpressions = R),
      (l.logBudgetRecommendationAdoption = L),
      (l.logCallAdsBudgetRecommendationL2DefaultBudgetWhenCallSelected = k),
      (l.shadowLogAdaccountSimilarAdvertiserBudgetRecommendation = I),
      (l.logSimilarAdvertiserBudgetRecommendationImpressions = T),
      (l.isEligibleForCallAdsSimilarAdvertiserBudgetRecommendation = D),
      (l.shouldDisableOverSpendingWarningForCallAds = x));
  },
  98,
);
