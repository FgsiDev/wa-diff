__d(
  "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignBudgetPluginResolver",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsDefaultPageDataProvider",
    "AdsEditingCampaignEditorContext",
    "AdsEditorCtxDynamicBudgetUtils",
    "AdsInterfacesLogger",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWebToWhatsAppBudgetRecommendationUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "CtxSabrOutcomeRangeExperimentUtils",
    "Currency",
    "DateTime",
    "Promise",
    "SABRBudgetRoundDownMarketingAdoptionUtils",
    "WebToXFeatureGating",
    "adsCampaignGetCampaignDayCount",
    "adsCampaignGetDefaultEndDate",
    "adsCampaignGetISODateTimeString",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "gkx",
    "isFalsey",
    "isTruthy",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")(
        "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommon",
      ).__setRef("AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils"),
      u = r("requireDeferred")(
        "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
      ).__setRef("AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils"),
      c,
      d = !1;
    function m(t, a) {
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var i = yield (e || (e = n("Promise"))).all([u.load(), s.load()]),
          l = i[0],
          m = i[1],
          p = l.shouldEnableCTXBudgetDurationDefaultQEParamsSelector,
          _ = m.ctxDynamicBudgetSelector,
          f = m.fetchCTXDynamicBudgetRecommendation,
          g = p(r("AdsEditingCampaignEditorContext")),
          h = g.account,
          y = g.destinationType,
          C = g.objective,
          b = g.optimizationGoal,
          v = g.pageID,
          S = _(r("AdsEditingCampaignEditorContext")),
          R = S.attribution_spec,
          L = S.bidStrategy,
          E = S.placement,
          k = S.promoted_object,
          I = S.target_spec;
        f(v != null ? v : "", h, !0, y, b, C, R, L, E, k, I)
          .then(function (e) {
            ((c = e),
              r("isTruthy")(c) &&
                !d &&
                ((d = !0),
                o(
                  "AdsEditorCtxDynamicBudgetUtils",
                ).logExposureForCTXDynamicZOGreaterThanSABR(c, !0, t, a)));
          })
          .catch(function (e) {});
      })();
    }
    function p(e, t, n, o, a, i, l, s, u, c) {
      var d;
      if (
        (l === void 0 && (l = r("AdsAPIOptimizationGoals").CONVERSATIONS),
        c === void 0 && (c = !1),
        e == null)
      )
        return null;
      var m =
        t != null
          ? t
          : (d = r("AdsDefaultPageDataProvider")()
                .get(e.account_id)
                .getValue()) == null
            ? void 0
            : d.pageID;
      if (o === "daily") return f(e, m, n, s, u, l, c);
      if (o === "lifetime") {
        var p = I(a, i, e, n);
        return g(e, m, n, p, l, c);
      }
      return null;
    }
    function _(e, t, n, o, a, i, l, s) {
      var u;
      if (
        (o === void 0 && (o = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS),
        s === void 0 && (s = !1),
        e == null)
      )
        return null;
      var c =
        t != null
          ? t
          : (u = r("AdsDefaultPageDataProvider")()
                .get(e.account_id)
                .getValue()) == null
            ? void 0
            : u.pageID;
      if (a === "daily") return y(e, c, n, o, s);
      if (a === "lifetime") {
        var d = I(i, l, e);
        return h(e, c, d, n, o, s);
      }
      return null;
    }
    function f(e, t, n, a, i, l, s) {
      s === void 0 && (s = !1);
      var u = S(t, l),
        d = C(t, l),
        p = o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).eligibleCTXAMCBOBudgetGuidance(n, l),
        _ = o(
          "ClickToMessageCTWAFeatureGating",
        ).isEligibleForCTXOptimizationGoalTrafficAndSales(n, l),
        f =
          _ &&
          !s &&
          o(
            "CtxSabrOutcomeRangeExperimentUtils",
          ).isInCtxSabrOutcomeRangeTestGroup(!1),
        g =
          (p || _) &&
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXDynamicBudgetRecommendationCBO(
            !1,
            "CTXDynamicZOEligibility",
          );
      if (
        ((p || _) && m(t, l),
        r("isTruthy")(c) &&
          o(
            "ClickToMessageCTWAFeatureGating",
          ).isEligibleForCTXOptimizationGoalTrafficAndSales(n, l) &&
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXDynamicBudgetRecommendationCBO(
            !1,
            "CTXDynamicZOEligibilityTrafficSales",
          ))
      ) {
        var h = Math.ceil(E(e, Number(c)) / 100) * 100;
        return { ctxZORecommendation: h, isCTXDynamicZOEligible: !0 };
      }
      if (
        o(
          "ClickToMessageCTWAFeatureGating",
        ).isEligibleForCTXOptimizationGoalTrafficAndSales(n, l) &&
        !f
      )
        return { ctxZORecommendation: null, isCTXDynamicZOEligible: !1 };
      var y = !1;
      (p || g || f) &&
        (M(
          e,
          t,
          a,
          i,
          u == null ? void 0 : u.budget,
          d,
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXCBOBudgetGuidanceQE(!1),
        ),
        r("isTruthy")(c) &&
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXDynamicBudgetRecommendationCBO(
            !1,
            "CTXDynamicZOEligibility",
          ) &&
          ((y = !0), (d = c)));
      var v = null;
      return (
        p &&
          o("ClickToWhatsAppFeatureGating").shouldEnableCTXZOConsolidationTest(
            !0,
          ),
        r("isTruthy")(d) &&
          p &&
          (o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXCBOBudgetGuidanceQE(!0) ||
            o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).enableCTXDynamicBudgetRecommendationCBO(
              !1,
              "CTXDynamicZOEligibility",
            )) &&
          (v = Math.ceil(E(e, d) / 100) * 100),
        ((p &&
          (o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).enableCTXCBOBudgetGuidanceQE(!1) ||
            o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).enableCTXDynamicBudgetRecommendationCBO(
              !1,
              "CTXDynamicZOCBOReturnDefault",
            ))) ||
          f) &&
        !s
          ? {
              ctxZORecommendation: b(e, t, v != null ? v : 0, l),
              isCTXDynamicZOEligible: y,
            }
          : { ctxZORecommendation: v, isCTXDynamicZOEligible: y }
      );
    }
    function g(e, t, n, a, i, l) {
      var s, u;
      l === void 0 && (l = !1);
      var c = a;
      c === 0 && (c = 1);
      var d = f(e, t, n, null, null, i, l),
        m = (s = d == null ? void 0 : d.ctxZORecommendation) != null ? s : null,
        p =
          (u = d == null ? void 0 : d.isCTXDynamicZOEligible) != null ? u : !1;
      if (r("isFalsey")(m))
        return { ctxZORecommendation: null, isCTXDynamicZOEligible: p };
      var _ = Math.round(m / 100) * 100,
        g = null;
      if (r("isTruthy")(m) && r("isTruthy")(c)) {
        if (
          _ !== m &&
          o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0)
        )
          return {
            ctxZORecommendation: o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(_ * c),
            isCTXDynamicZOEligible: p,
          };
        g = m * c;
      }
      return { ctxZORecommendation: g, isCTXDynamicZOEligible: p };
    }
    function h(e, t, n, o, a, i) {
      i === void 0 && (i = !1);
      var l = n;
      l === 0 && (l = 1);
      var s = y(e, t, o, a, i);
      if (s === null) return null;
      var u = null;
      return (r("isTruthy")(s) && r("isTruthy")(l) && (u = s * l), u);
    }
    function y(e, t, n, a, i) {
      i === void 0 && (i = !1);
      var l = o(
          "AdsWebToWhatsAppBudgetRecommendationUtils",
        ).getWTWAZOBudgetRecommendationInCBOFlow(t),
        s = o(
          "AdsWebToWhatsAppBudgetRecommendationUtils",
        ).getWtwaSabrCboBudgetAndConversionForExperiment(t, !1).budget,
        u = null;
      r("isTruthy")(l) &&
        o(
          "AdsWebToWhatsAppBudgetRecommendationUtils",
        ).checkEligibleForWTWAZOBudgetCBOEditingFlow(e, n, a) &&
        o("WebToXFeatureGating").enableWTWAZOBudgetDefaultInCBOFlow(n, a, !0) &&
        (u = l);
      var c = !1,
        d =
          r("isTruthy")(s) && (r("isFalsey")(l) || (r("isTruthy")(l) && s > l));
      o(
        "AdsWebToWhatsAppBudgetRecommendationUtils",
      ).isEligibleCampaignForWTWASABRZO(n, a) &&
        !i &&
        d &&
        o("WebToXFeatureGating").enableWTWASABRBudgeInCBOFlowQE(!0) &&
        ((u = s != null ? s : null), (c = !0));
      var m = r("isTruthy")(u) ? Math.ceil(E(e, u) / 100) * 100 : null;
      return (
        c &&
          m != null &&
          o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
          (m = o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).applyMarketingRoundDown(m)),
        m
      );
    }
    function C(e, t) {
      if (r("isFalsey")(e) && r("gkx")("5855")) return 800;
      var n = e != null ? r("AdsPageStore").get(e) : null;
      return t === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
        ? n == null
          ? void 0
          : n.ctx_cbo_zero_outcome_budget_recommendation_purchase_optimization
        : n == null
          ? void 0
          : n.ctx_cbo_zero_outcome_budget_recommendation;
    }
    function b(e, t, n, a) {
      var i = S(t, a).budget,
        l = null;
      return (
        r("isTruthy")(i) &&
          ((l = Math.ceil(E(e, i) / 100) * 100),
          o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
            (l = o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(l))),
        (l != null ? l : 0) > n ? l : n
      );
    }
    function v(e, t) {
      if (r("isFalsey")(e)) return null;
      var n = e != null ? r("AdsPageStore").get(e) : null;
      return t === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
        ? n == null
          ? void 0
          : n.ctx_cbo_similar_advertiser_budget_recommendation_purchase_optimization
        : n == null
          ? void 0
          : n.ctx_cbo_similar_advertiser_budget_recommendation;
    }
    function S(e, t, n) {
      n === void 0 && (n = !1);
      var r = v(e, t);
      return o(
        "AdsClickToMessageSABRBudgetDefaultStoreUtils",
      ).getSabrBudgetAndConversionForExperiment(r, n);
    }
    function R(e, t, n, a, i) {
      var l = null;
      if (n === "lifetime") {
        if (((l = L(e, t, i, a)), r("isTruthy")(l))) {
          var s = Math.round(l / 100) * 100;
          s !== l &&
            o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
            (l = o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(s));
        }
      } else {
        var u = S(t, i).budget;
        r("isTruthy")(u) &&
          ((l = Math.ceil(E(e, u) / 100) * 100),
          o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
            (l = o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(l)));
      }
      return l;
    }
    function L(e, t, n, a) {
      var i = S(t, n).budget,
        l = null;
      return (
        r("isTruthy")(i) &&
          ((l = Math.ceil(E(e, i) / 100) * 100),
          o(
            "SABRBudgetRoundDownMarketingAdoptionUtils",
          ).isInSabrBudgetRoundDownMarketingAdoption(!0) &&
            (l = o(
              "SABRBudgetRoundDownMarketingAdoptionUtils",
            ).applyMarketingRoundDown(l))),
        r("isTruthy")(l) && r("isTruthy")(a) ? l * a : null
      );
    }
    function E(e, t) {
      var n = e == null ? void 0 : e.currency,
        r = o("Currency").getOffset(n) / o("Currency").getOffset("USD"),
        a = (e == null ? void 0 : e.account_currency_ratio_to_usd) * r,
        i = t * a;
      return i;
    }
    function k(e, t, n, r, o) {
      if (t == null || t <= 0 || o <= 0) return null;
      var a = Math.ceil(E(e, t) / 100) * 100;
      if (n) {
        var i = r === 0 ? 1 : r;
        return i == null || i <= 0 ? null : a * i * o;
      }
      return a * o;
    }
    function I(e, t, n, o) {
      if (r("isFalsey")(n)) return null;
      var a;
      e != null && (a = new Date(e));
      var i;
      if ((t != null && (i = new Date(t)), a && i))
        return Math.floor(r("adsCampaignGetCampaignDayCount")(a, i));
      var l = r("DateTime").now(n.timezone_id),
        s = n.timezone_offset_hours_utc,
        u = r("adsCampaignGetDefaultEndDate")(
          l.toDate(),
          null,
          r("AdsCampaignBudgetPluginResolver").resolve({
            objective: r("AdsAPIObjectives").NONE,
            promotedObjectType: r("AdsPromotedObjectTypes").NONE,
          }),
          o,
          !0,
        );
      return (
        (a = new Date(r("adsCampaignGetISODateTimeString")(l.toDate(), s))),
        (i = new Date(r("adsCampaignGetISODateTimeString")(u, s))),
        Math.floor(r("adsCampaignGetCampaignDayCount")(a, i))
      );
    }
    function T(e, t, n, o, a, i, l, s, u, c, d) {
      var m,
        _,
        f = s.every(function (e) {
          var t = u.get(e);
          return $(t, o);
        });
      if (!f) return null;
      var g = p(e, l, o, n, a, i, c, null, null, !0),
        h = (m = g == null ? void 0 : g.ctxZORecommendation) != null ? m : null,
        y =
          (_ = g == null ? void 0 : g.isCTXDynamicZOEligible) != null ? _ : !1,
        C = Math.max.apply(Math, t.getValues());
      if (r("isTruthy")(C) && r("isTruthy")(h)) {
        var b = s.map(function (e) {
            var t = u.get(e);
            if (t != null) return t.length * h;
          }),
          v = Math.min.apply(Math, r("filterNulls")(b));
        return (
          N(e, s, n, C, d, v, C < v, e.currency, o),
          {
            shouldShowLowerBudgetWarning: !y && C < v,
            ctxZORecommendedBudget: v,
          }
        );
      }
      return null;
    }
    function D(e, t, n, o, a, i, l, s, u, c) {
      if (o == null) {
        var d = F(s, u);
        if (d === !1) return null;
      }
      var m = _(
          e,
          l,
          o,
          c != null ? c : r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
          n,
          a,
          i,
          !0,
        ),
        p = Math.max.apply(Math, t.getValues());
      if (r("isTruthy")(p) && r("isTruthy")(m)) {
        var f = s.map(function (e) {
            var t = u.get(e);
            if (t != null) return t.length * m;
          }),
          g = Math.min.apply(Math, r("filterNulls")(f));
        return {
          shouldShowWTWALowerBudgetWarning: p < g,
          wtwaZORecommendedBudget: g,
        };
      }
      return null;
    }
    function x(e, t, n, o, a, i, l, s, u, c, d, m) {
      var _, f, g;
      m === void 0 && (m = !1);
      var h = u.every(function (e) {
        var t = c.get(e);
        return $(t, a);
      });
      if (!h) return null;
      var y =
          s != null
            ? s
            : (_ = r("AdsDefaultPageDataProvider")()
                  .get(e.account_id)
                  .getValue()) == null
              ? void 0
              : _.pageID,
        C = p(e, y, a, n, i, l, d, null, null, !0),
        b = (f = C == null ? void 0 : C.ctxZORecommendation) != null ? f : null,
        v =
          (g = C == null ? void 0 : C.isCTXDynamicZOEligible) != null ? g : !1;
      if (v) return null;
      var L = R(e, y, n, o, d);
      if (r("isFalsey")(L)) return null;
      var E = S(y, d).reported_conversion;
      if (r("isTruthy")(b) && b >= L) return null;
      var k = Math.max.apply(Math, t.getValues());
      if (r("isTruthy")(k)) {
        var I,
          T = u.map(function (e) {
            var t = c.get(e);
            if (t != null) return t.length * L;
          }),
          D = Math.min.apply(Math, r("filterNulls")(T)),
          x = u.map(function (e) {
            var t = c.get(e);
            if (t != null && r("isTruthy")(E)) return t.length * E;
          }),
          P = Math.min.apply(Math, r("filterNulls")(x));
        return m && r("isTruthy")(k) && k === D
          ? null
          : (r("AdsInterfacesLogger").log({
              eventName: "ctx_am_cbo_sabr_budget_recommendation_num_of_ad_sets",
              data:
                ((I = {}),
                (I.ad_account_id = e.account_id),
                (I.new_value = D),
                (I.number_of_ad_sets = Math.floor(D / L)),
                (I.campaign_budget_type = n),
                I),
            }),
            {
              ctxSABRRecommendedBudget: D,
              reportedConversions: P,
              shouldShowSABR: k <= D,
            });
      }
      return null;
    }
    function $(e, t) {
      if (r("isFalsey")(e) || t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)
        return !1;
      var n = e.every(function (e) {
        return (
          r("isFalsey")(e.destination_type) ||
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(e.destination_type)
        );
      });
      return n;
    }
    function P(e) {
      if (r("isFalsey")(e)) return !1;
      var t = e.every(function (e) {
        return (
          r("isFalsey")(e.destination_type) ||
          o(
            "AdsWebToWhatsAppBudgetRecommendationUtils",
          ).isEligibleCampaignForWTWAZO(e.destination_type)
        );
      });
      return t;
    }
    function N(e, t, n, o, a, i, l, s, u) {
      t.forEach(function (t) {
        var c;
        r("AdsInterfacesLogger").log({
          eventName: "ctx_am_cbo_zo_budget_recommendation",
          data:
            ((c = {}),
            (c.ad_account_id = e.account_id),
            (c.account_country = e.business_country_code),
            (c.campaign_group_id = t),
            (c.bulk_edit_value = o),
            (c.old_value = i),
            (c.new_value = a),
            (c.is_enabled = l),
            (c.campaign_budget_type = n),
            (c.current_target_currency = s),
            (c.objective = u),
            c),
        });
      });
    }
    function M(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName: "ctx_am_cbo_sabr_budget_recommendation",
        data:
          ((s = {}),
          (s.facebook_page_id = t),
          (s.ad_account_id = e.account_id),
          (s.account_country = e.business_country_code),
          (s.campaign_group_id = n),
          (s.campaign_id = o),
          (s.bulk_edit_value = a),
          (s.old_value = i),
          (s.campaign_budget_type = "daily"),
          (s.current_target_currency = e.currency),
          (s.is_enabled = l),
          s),
      });
    }
    function w(e, t, n, o, a) {
      e.forEach(function (e) {
        var i;
        r("AdsInterfacesLogger").log({
          eventName:
            "ctx_am_cbo_sabr_budget_recommendation_rightside_card_cta_click",
          data:
            ((i = {}),
            (i.campaign_group_id = e),
            (i.old_value = n),
            (i.new_value = a),
            (i.is_enabled = !0),
            (i.campaign_budget_type = t),
            (i.current_target_currency = o),
            i),
        });
      });
    }
    function A(e, t, n) {
      var r = e.every(function (e) {
        var r = t.get(e);
        return $(r, n);
      });
      return r;
    }
    function F(e, t) {
      var n = e.every(function (e) {
        var n = t.get(e);
        return P(n);
      });
      return n;
    }
    ((l.setCTXDefaultBudgetAtCBOEditing = p),
      (l.setWTWADefaultBudgetAtCBOEditing = _),
      (l.getZONewModelBudgetRecommendationInCBOFlow = C),
      (l.getSABRBudgetRecommendationInCBOFlow = v),
      (l.getSabrCboBudgetAndConversionForExperiment = S),
      (l.setBudgetNumberInLocalCurrency = E),
      (l.getWtwaRecommendedGroupBudget = k),
      (l.getDurationFromCampaign = I),
      (l.shouldShowCTXLowerBudgetWarningInCBO = T),
      (l.shouldShowWTWALowerBudgetWarningInCBO = D),
      (l.shouldShowCTXSimilarAdvertiserBudgetRecommendationInCBO = x),
      (l.getIsCTXDestinationInEngagementObjective = $),
      (l.logCTXCampaignGroupSABRBudgetDefaultingRHSCTAClick = w),
      (l.getIsCampaignGroupCTXDestinationInEngagementObjective = A),
      (l.getIsCampaignGroupWTWADestination = F));
  },
  98,
);
