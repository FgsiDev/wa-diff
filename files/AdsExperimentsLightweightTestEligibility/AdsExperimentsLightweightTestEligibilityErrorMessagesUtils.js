__d(
  "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
      return s._(
        /*BTDS*/ "Ensure your ad set is not using {recommended setting name} to run this A\/B test.",
        [s._param("recommended setting name", t)],
      );
    };
    l.getOptInL2TestErrorMessage = e;
  },
  226,
);
