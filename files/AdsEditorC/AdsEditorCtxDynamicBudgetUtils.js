__d(
  "AdsEditorCtxDynamicBudgetUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsCTXCBOZOCountryCapConfig",
    "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o, a) {
      var i,
        l = e
          .flatMap(function (e) {
            var n;
            return (n = t.get(e)) != null ? n : [];
          })
          .find(function (e) {
            return (
              (e == null ? void 0 : e.destination_type) != null &&
              _(
                e == null ? void 0 : e.destination_type,
                e == null ? void 0 : e.optimization_goal,
              )
            );
          }),
        u = s(l, n == null ? void 0 : n.account_id, r, o, a);
      if (l == null)
        return {
          dynamicBudgetInput: u,
          endTime: null,
          pageID: null,
          startTime: null,
          campaignGroupID: null,
        };
      var c = l == null || (i = l.promoted_object) == null ? void 0 : i.page_id,
        d = l == null ? void 0 : l.start_time,
        m = l == null ? void 0 : l.end_time,
        p = l == null ? void 0 : l.campaign_id;
      return {
        dynamicBudgetInput: u,
        endTime: m,
        pageID: c,
        startTime: d,
        campaignGroupID: p,
      };
    }
    function s(e, t, n, r, o) {
      var a, i, l, s, u, c, d, m;
      if (e == null)
        return {
          account_id: t,
          attribution_spec: "[]",
          bid_strategy: "NONE",
          destination_type: "UNDEFINED",
          is_cbo_enabled: !1,
          objective: "",
          optimization_goal: "",
          placement: "[]",
          promoted_object: "",
          target_spec: "[]",
        };
      var p =
          (a = JSON.stringify(e == null ? void 0 : e.attribution_spec)) != null
            ? a
            : "[]",
        _ =
          (i = (l = e == null ? void 0 : e.bid_strategy) != null ? l : o) !=
          null
            ? i
            : "NONE",
        f =
          (s = e == null ? void 0 : e.destination_type) != null
            ? s
            : "UNDEFINED",
        g = (u = e == null ? void 0 : e.optimization_goal) != null ? u : "NONE",
        h =
          (c = JSON.stringify(e == null ? void 0 : e.placement)) != null
            ? c
            : "[]",
        y =
          (d = JSON.stringify(e == null ? void 0 : e.targeting)) != null
            ? d
            : "[]",
        C =
          (m = JSON.stringify(e == null ? void 0 : e.promoted_object)) != null
            ? m
            : "{}";
      return {
        account_id: t,
        attribution_spec: p,
        bid_strategy: _,
        campaign_id: e.id ? Number(e.id) : null,
        destination_type: f,
        is_cbo_enabled: n,
        objective: r,
        optimization_goal: g,
        placement: h,
        promoted_object: C,
        target_spec: y,
      };
    }
    var u = 30;
    function c(e, t, n, a, i) {
      var l = e;
      if (t === "lifetime") {
        var s,
          c =
            r("isTruthy")(a) &&
            r("isTruthy")(i) &&
            (s = o(
              "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
            ).getDurationFromCampaign(a, i, n)) != null
              ? s
              : u;
        l = Number(e) * c;
      }
      var d =
        r("isTruthy")(l) && r("isTruthy")(n)
          ? Math.ceil(
              o(
                "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
              ).setBudgetNumberInLocalCurrency(n, l) / 100,
            ) * 100
          : null;
      return d;
    }
    function d(e, t, n) {
      return n && e != null && t > 0 ? t * e : e;
    }
    function m(e, t, n) {
      var r;
      if (e == null) return e;
      var o = (r = n == null ? void 0 : n.currency) != null ? r : "USD",
        a = p(t, o);
      return a == null ? e : Math.min(e, a);
    }
    function p(e, t) {
      var n,
        o = r("AdsCTXCBOZOCountryCapConfig"),
        a;
      if (e === "CONVERSATIONS") a = o.conversations_goal;
      else if (e === "MESSAGING_PURCHASE_CONVERSION")
        a = o.purchase_optimization_goal;
      else return null;
      var i = a[t];
      return i == null ? null : (n = i.max_cap) != null ? n : null;
    }
    function _(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          e,
        ) &&
        (t === r("AdsAPIOptimizationGoals").REPLIES ||
          t === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
          t === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION)
      );
    }
    function f(e, t, n, a) {
      if ((a === void 0 && (a = r("AdCampaignDestination").MESSENGER), e)) {
        var i;
        return (i = o(
          "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
        ).getSABRBudgetRecommendationInCBOFlow(t, n)) == null
          ? void 0
          : i.budget;
      }
      var l = o(
        "AdsClickToMessageSABRBudgetDefaultStoreUtils",
      ).getCTXSimilarAdvertiserBudgetRecommendationByDestination(t, a, n);
      return Number(
        o(
          "AdsClickToMessageSABRBudgetDefaultStoreUtils",
        ).getSabrBudgetAndConversionForExperiment(l).budget,
      );
    }
    function g(e, t, n, a, i) {
      i === void 0 && (i = r("AdCampaignDestination").MESSENGER);
      var l = f(t, n, a, i);
      if (!t) {
        r("isTruthy")(l) &&
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXDynamicBudgetDefaulting(
            !1,
            !0,
            "CTXDynamicBudgetNonCBOSabrAvailable",
            a,
          );
        return;
      }
      r("isTruthy")(e) &&
        r("isTruthy")(l) &&
        e > l &&
        o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXDynamicBudgetDefaulting(
          t,
          !0,
          "CTXDynamicZOGreaterThanSABRCBO",
          a,
        );
    }
    ((l.getCTXDynamicBudgetGraphQLInputParams = e),
      (l.getCTXDynamicBudgetValueBasedOnMode = c),
      (l.getCtxDynamicBudgetWithCampaignCount = d),
      (l.capCtxDynamicBudgetWithCBOMaxCap = m),
      (l.isCTXEligibleCampaign = _),
      (l.logExposureForCTXDynamicZOGreaterThanSABR = g));
  },
  98,
);
