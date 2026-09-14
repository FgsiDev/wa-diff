__d(
  "AdsAgencyFeeUtils",
  [
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsInsightsColumn",
    "SV_AGENCY_FEE_CONFIGURATION.experimental",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return r("justknobx")._("2105");
      },
      s = function () {
        return !r("justknobx")._("57");
      },
      u = function () {
        return r("justknobx")._("305");
      },
      c = function () {
        return r("gkx")("9383") && !e();
      },
      d = [
        r("AdsInsightsColumn").AGENCY_FEE_MARKUP,
        r("AdsInsightsColumn").AGENCY_FEE_AMOUNT,
        r("AdsInsightsColumn").BILLABLE_AMOUNT_SPENT,
      ],
      m = function (n) {
        return e() ? !1 : n;
      },
      p = function (t, n, r) {
        return m(r) && f(t, n);
      };
    function _(e) {
      return (
        e != null &&
        e.capabilities != null &&
        e.capabilities.includes("CAN_SEE_AGENCY_FEE_INSIGHTS_REPORTING")
      );
    }
    function f(e, t) {
      return g(e) && t === r("AdsBuyingTypes").AUCTION;
    }
    function g(e) {
      return e == null
        ? !1
        : r("gkx")("3926")
          ? r(
              "SV_AGENCY_FEE_CONFIGURATION.experimental",
            ).allowed_objectives.includes(e)
          : e === r("AdsAPIObjectives").OUTCOME_AWARENESS;
    }
    function h(e) {
      return e == null
        ? !1
        : e.is_agency_fee_disabled === !1 &&
            e.default_agency_fee_pct != null &&
            e.default_agency_fee_pct !== 0;
    }
    ((l.showOnboardingNuxTour = s),
      (l.agencyFeeBulkEditKillSwitch = u),
      (l.showAdvancedOnboarding = c),
      (l.agencyFeeInsightsColumnsList = d),
      (l.isEligibleForAgencyFee = m),
      (l.canSeeAgencyFeeWithObjectiveAndBuyingTypeCheck = p),
      (l.canSeeAgencyFeeInsightsColumns = _),
      (l.isEligibleObjectiveAndBuyingType = f),
      (l.isEligibleObjective = g),
      (l.isDefaultAgencyFeeApplicableForAdAccount = h));
  },
  98,
);
