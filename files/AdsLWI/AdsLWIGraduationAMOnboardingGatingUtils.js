__d(
  "AdsLWIGraduationAMOnboardingGatingUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e === void 0 && (e = !0), c() && d(e) === "objective_selector");
    }
    function s(e) {
      e === void 0 && (e = !0);
      var t = r("gkx")("18073");
      return t ? !1 : u(e);
    }
    function u(e) {
      return (e === void 0 && (e = !0), c() && d(e) === "two_steps_onboarding");
    }
    function c() {
      return r("gkx")("8825");
    }
    function d(e) {
      e === void 0 && (e = !0);
      var t = e ? r("qex")._("353") : r("qex")._("2669");
      return t != null ? t : "control";
    }
    ((l.enableObjectiveSelectorOnboarding = e),
      (l.isLWIAudienceExpansionEnabled = s),
      (l.enableLWITwoStepsOnboarding = u));
  },
  98,
);
