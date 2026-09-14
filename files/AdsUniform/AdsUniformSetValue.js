__d(
  "AdsUniformSetValue",
  ["AdsUniformValue", "areSpecsEqual"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.create = function (n) {
          for (var e = n[0], o = 1; o < n.length; o++)
            if (!r("areSpecsEqual")(n[o], e)) return null;
          return new t(e);
        }));
      var n = t.prototype;
      return (
        (n.map = function (n) {
          return new t(n(this.getValue(), 0));
        }),
        t
      );
    })(r("AdsUniformValue"));
    l.default = e;
  },
  98,
);
