__d(
  "AdsReportBuilderCustomMetricKey",
  ["AdsReportBuilderScopeType", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getHash = function () {
          return t.hashCode(this);
        }),
        (t.hashCode = function (t) {
          return [t.scopeType, t.scopeID].join(":");
        }),
        t
      );
    })(
      r("immutable").Record({
        scopeType: r("AdsReportBuilderScopeType").ACCOUNT,
        scopeID: "",
      }),
    );
    l.default = e;
  },
  98,
);
