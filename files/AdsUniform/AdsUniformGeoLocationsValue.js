__d(
  "AdsUniformGeoLocationsValue",
  ["AdsUniformValue", "adsTargetingLocationAreLocationSpecEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.create = function (n) {
          var e = n[0];
          if (!e || typeof e != "object") return null;
          for (var o = 1; o < n.length; o++)
            if (
              !n[o] ||
              typeof n[o] != "object" ||
              !r("adsTargetingLocationAreLocationSpecEqual")(n[o], e)
            )
              return null;
          return new t(e);
        }));
      var n = t.prototype;
      return (
        (n.map = function (n, r) {
          return new t(n.call(r, this.getValue(), 0));
        }),
        t
      );
    })(r("AdsUniformValue"));
    l.default = e;
  },
  98,
);
