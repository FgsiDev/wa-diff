__d(
  "AdsValidationUtils",
  [
    "errorCode",
    "AdsError",
    "AdsValidationConfig.experimental",
    "Random",
    "distinctArray",
    "getByPath",
    "getFieldPaths",
    "immutable",
    "nullthrows",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {},
      c = [],
      d = new Set(
        r("AdsValidationConfig.experimental").clientOverrideErrorCodes,
      ),
      m = new Set(
        r("AdsValidationConfig.experimental").clientWhitelistErrorCodes,
      ),
      p = new Set(
        r("AdsValidationConfig.experimental").serverSuppressErrorCodes,
      ),
      _ = ["account", "__gk_DO_NOT_USE"],
      f = new Set();
    function g(e, t, n) {
      var o;
      return e;
      var a, i;
    }
    function h(e) {
      var t = e.getDependencies();
      return { fieldPaths: r("getFieldPaths")(t), rootFields: Object.keys(t) };
    }
    function y(t, n, a) {
      var i =
        o("Random").random() >=
        1 - r("AdsValidationConfig.experimental").getErrorsSamplingRate;
      if (i)
        var l = r("immutable").Set(
            n.map(function (e) {
              return e.key;
            }),
          ),
          s = r("immutable").Set(
            t.map(function (e) {
              return e.key;
            }),
          ),
          u = l.size + s.size - 2 * l.intersect(s).size;
      if (n.length === 0 && !a) {
        var _ = t.filter(function (e) {
          return (
            d.has(e.key) ||
            e.level === r("AdsError").Level.RECOMMEND ||
            e.number === 2061049
          );
        });
        return _.length ? _ : c;
      }
      var g = n.filter(function (e) {
          return !p.has(e.key);
        }),
        h = {},
        y = {};
      if (
        (t.forEach(function (e) {
          return (h[e.key] = e);
        }),
        g.forEach(function (e) {
          var t = e.key;
          (e.errorPlacementType != null && (t = e.key + e.errorPlacementType),
            (y[t] = e));
        }),
        y[1487470])
      )
        return t;
      a ||
        g.forEach(function (e) {
          h[e.key]
            ? (y[e.key].path || (y[e.key].path = h[e.key].path),
              (y[e.key].cta = h[e.key].cta),
              (y[e.key].shouldRenderPathCTA = h[e.key].shouldRenderPathCTA),
              f.delete(e.key.toString()))
            : f.add(e.key.toString());
        });
      var C = (e || (e = r("distinctArray")))(
        [].concat(
          Object.keys(h),
          Object.keys(y).filter(function (e) {
            return !a || f.has(e.toString());
          }),
        ),
      );
      return C.map(function (e) {
        return m.has(parseInt(e, 10)) && !f.has(e.toString())
          ? h[e]
          : (!a && y[e]) || !h[e]
            ? y[e]
            : h[e];
      });
    }
    function C() {
      f.clear();
    }
    ((l.prepareData = g),
      (l.getValidatorPaths = h),
      (l.reconcileClientAndServerErrors = y),
      (l.resetServerOnlyErrors = C));
  },
  98,
);
