__d(
  "AdsDuplicateOptimalGoodCampaignsExperimentUtils",
  ["AdsDuplicateOptimalLoggingUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("17407");
    }
    function s() {
      return e() ? !0 : r("gkx")("5114") ? r("gkx")("6413") : !0;
    }
    function u(t) {
      if (e()) return !0;
      var n = !1;
      return (
        r("gkx")("5114") ? (n = r("gkx")("5434")) : (n = !0),
        o(
          "AdsDuplicateOptimalLoggingUtils",
        ).logOptimalStartExpansionExposurePoint(t, n),
        n
      );
    }
    function c(e, t) {
      if (e != null && e.silent) return r("qex")._("5582") === !0;
      var n = r("qex")._("5583") === !0;
      return (
        o(
          "AdsDuplicateOptimalLoggingUtils",
        ).logOptimalStartExpansionExposurePoint(
          "optimal_start_creation_modal",
          n,
          t,
        ),
        n
      );
    }
    ((l.isEligibleForOptimalStartExpansionSilent = s),
      (l.isEligibleForOptimalStartExpansion = u),
      (l.isEligibleOptimalStartCreation = c));
  },
  98,
);
