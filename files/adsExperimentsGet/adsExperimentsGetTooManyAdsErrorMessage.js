__d(
  "adsExperimentsGetTooManyAdsErrorMessage",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 150;
    function u(t) {
      return (
        t === void 0 && (t = e),
        s._(
          /*BTDS*/ "Only up to {maxAdCount} ads allowed. Delete ads so there are less than {maxAdCount} and publish the campaign again to run the test.",
          [s._param("maxAdCount", t)],
        )
      );
    }
    l.default = u;
  },
  226,
);
