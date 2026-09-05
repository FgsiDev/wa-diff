__d(
  "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
  [
    "$InternalEnum",
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "AdsAIUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "MOVE_DRAFTS",
      "MOVE_AND_FILTER_DRAFTS",
      "CONTROL",
    ]);
    function s() {
      var t;
      if (c()) return e.MOVE_AND_FILTER_DRAFTS;
      if (!o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests())
        return o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout()
          ? e.MOVE_AND_FILTER_DRAFTS
          : e.CONTROL;
      var n = (t = r("qex")._("5110")) != null ? t : !0;
      return n ? e.MOVE_AND_FILTER_DRAFTS : e.CONTROL;
    }
    function u() {
      var t;
      if (c()) return e.MOVE_AND_FILTER_DRAFTS;
      if (!o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests())
        return o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout()
          ? e.MOVE_AND_FILTER_DRAFTS
          : e.CONTROL;
      var n = (t = r("qex")._("5111")) != null ? t : !0;
      return n ? e.MOVE_AND_FILTER_DRAFTS : e.CONTROL;
    }
    function c() {
      return r("gkx")("9700");
    }
    function d() {
      return r("gkx")("15591");
    }
    function m() {
      var e;
      return _()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("5110")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function p() {
      var e;
      return _()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("5111")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function _() {
      return r("gkx")("13852");
    }
    function f() {
      var e;
      return r("gkx")("6116") ||
        (!o(
          "ARXUsabilityHoldoutUtils",
        ).isAccountIn2026H1UsabilityHBTHoldout() &&
          o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout())
        ? !0
        : (e = r("qex")._("3114")) != null
          ? e
          : !0;
    }
    function g() {
      var e;
      return r("gkx")("6116") ||
        (!o(
          "ARXUsabilityHoldoutUtils",
        ).isAccountIn2026H1UsabilityHBTHoldout() &&
          o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout())
        ? !0
        : (e = r("qex")._("3155")) != null
          ? e
          : !0;
    }
    function h(e) {
      return (
        e === void 0 && (e = !0),
        o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "PERFORMANCE_SUMMARY_WIDGET",
          e,
        )
      );
    }
    function y() {
      return h()
        ? o(
            "ARXUsabilityHoldoutUtils",
          ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("4260")
          ? ($(),
            o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTest())
          : !0
        : !1;
    }
    function C() {
      return h(!1)
        ? o(
            "ARXUsabilityHoldoutUtils",
          ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("4260")
          ? o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTestWithoutExposure()
          : !0
        : !1;
    }
    function b() {
      var e;
      return I()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("1236")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function v() {
      var e;
      return I()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("358")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function S() {
      var e;
      return I()
        ? !0
        : o(
              "ARXUsabilityHoldoutUtils",
            ).isAccountIn2026H1UsabilityHBTHoldout() &&
            !r("justknobx")._("2016")
          ? (R(),
            o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTest())
          : o("ARXUsabilityHoldoutUtils").isAccountIn2026H1UsabilityHBTHoldout()
            ? !1
            : (e = r("qex")._("2676")) != null
              ? e
              : !1;
    }
    function R() {
      r("gkx")("3132");
    }
    function L() {
      var e;
      return k()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("5110")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function E() {
      var e;
      return k()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("5111")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function k() {
      return r("gkx")("19458");
    }
    function I() {
      return r("gkx")("16571");
    }
    function T() {
      var e;
      return x()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("5110")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function D() {
      var e;
      return x()
        ? !0
        : o("ARXUsabilityHoldoutUtils").shouldAccountSeeFlow11_2Pretests()
          ? (e = r("qex")._("5111")) != null
            ? e
            : !0
          : !!o("ARXUsabilityHoldoutUtils").isAccountInFlow11_2Holdout();
    }
    function x() {
      return r("gkx")("8457");
    }
    function $() {
      r("gkx")("9856");
    }
    ((l.AdsInsightsDraftBehaviorVariant = e),
      (l.getDraftBehaviorVariantForAccount = s),
      (l.getDraftBehaviorVariantForAccountWithoutExposure = u),
      (l.getIsAccountInMoveAndFilterDraftsDogfooding = c),
      (l.getIsAccountInDraftAgeSplit = d),
      (l.getIsAccountInCurrencyHybridInput = m),
      (l.getIsAccountInCurrencyHybridInputWithoutExposure = p),
      (l.getIsAccountInCurrencyHybridInputDogfooding = _),
      (l.getIsAccountInFuzzySearch = f),
      (l.getIsAccountInFuzzySearchWithoutExposure = g),
      (l.getIsAccountEligibleForAIInsightsExcludesRestrictedAccounts = h),
      (l.getIsAccountInAIPerformanceSummaryWithExposure = y),
      (l.getIsAccountInAIPerformanceSummaryWithoutExposure = C),
      (l.getIsAccountInMetricTaxonomyInFilterMenuExperiment = b),
      (l.getIsAccountInMetricTaxonomyInFilterMenuExperimentWithoutExposure = v),
      (l.getIsAccountInFixAdsReportingMetricFilter = S),
      (l.getIsAccountInFixBrokenFilters = L),
      (l.getIsAccountInFixBrokenFiltersWithoutExposure = E),
      (l.isAccountInAMDMediumRockDogfooding = I),
      (l.getIsAccountInRemoveAutomaticAdditionalFilters = T),
      (l.getIsAccountInRemoveAutomaticAdditionalFiltersWithoutExposure = D),
      (l.getIsAccountInRemoveAutomaticAdditionalFiltersDogfooding = x));
  },
  98,
);
