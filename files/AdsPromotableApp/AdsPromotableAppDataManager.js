__d(
  "AdsPromotableAppDataManager",
  [
    "AdsAppFluxUtils",
    "AdsBaseDataManager",
    "AdsPromotableAppListDataManager",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAll = function (t) {
            var e = this;
            t.length !== 0 &&
              t.forEach(function (t) {
                return e.load(t);
              });
          }),
          (n.load = function (t) {
            var e = o("AdsAppFluxUtils").parseKey(t);
            if (!e) {
              r("FBLogger")("ads").mustfix("Failed to parse fluxKey: %s", t);
              return;
            }
            var n = e.accountID;
            r("AdsPromotableAppListDataManager").loadFor(n);
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
