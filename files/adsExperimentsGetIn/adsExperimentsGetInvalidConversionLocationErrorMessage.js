__d(
  "adsExperimentsGetInvalidConversionLocationErrorMessage",
  ["fbt", "adsExperimentsDoesCampaignObjectiveRequireUnification"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.featureName,
        n = e.objective,
        o = e.unificationName;
      return n != null &&
        r("adsExperimentsDoesCampaignObjectiveRequireUnification")(n) &&
        o != null
        ? u(o)
        : c(t);
    }
    function u(e) {
      return s._(
        /*BTDS*/ "We're not able to turn on Advantage+ for {feature name} due to your conversion location.",
        [s._param("feature name", e)],
      );
    }
    function c(e) {
      return s._(
        /*BTDS*/ "We're not able to turn on {feature name} due to your conversion location.",
        [s._param("feature name", e)],
      );
    }
    l.default = e;
  },
  226,
);
