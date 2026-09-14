__d(
  "AdsPreviewConsistencyLoggerPlugin",
  ["immutable", "submitSavedConsistencySamples"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map(),
      s = {
        log: function (n) {
          var t;
          ((t = n.selection) != null ? t : e)
            .get("ad", r("immutable").OrderedSet())
            .forEach(function (e) {
              return r("submitSavedConsistencySamples")(e, "AD_PUBLISH");
            });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
