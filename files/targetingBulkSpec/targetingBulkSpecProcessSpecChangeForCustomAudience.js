__d(
  "targetingBulkSpecProcessSpecChangeForCustomAudience",
  [
    "AdsBulkValueUtils",
    "FBLogger",
    "isEmpty",
    "targetingBulkSpecGetCustomAudiencesFromFlexibleSpec",
    "targetingBulkSpecProcessSpecChangedOnCustomAudienceBulkValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n = e
          .map(function (e) {
            return e.custom_audiences;
          })
          .filter(Boolean);
      return n.length > 1
        ? (r("FBLogger")("dpa_dfca_union").mustfix(
            "Encountered multiple custom audiences in flexible spec in mutator that should only handle 0 or 1",
          ),
          [])
        : (t = n[0]) != null
          ? t
          : [];
    }
    function u(e, t) {
      return e.map(function (e) {
        return e.custom_audiences == null
          ? e
          : babelHelpers.extends({}, e, { custom_audiences: t });
      });
    }
    function c() {
      for (
        var t = [], n = arguments.length, a = new Array(n), i = 0;
        i < n;
        i++
      )
        a[i] = arguments[i];
      return (
        a.filter(Boolean).forEach(function (n) {
          return n.getValues().forEach(function (n, o) {
            if ((e || (e = r("isEmpty")))(t[o])) {
              t[o] = n;
              return;
            }
            (e || (e = r("isEmpty")))(n) ||
              r("FBLogger")("dpa_dfca_union").mustfix(
                "Encountered targeting spec with both custom audience and flexible spec custom audience",
              );
          });
        }),
        o("AdsBulkValueUtils").aggregate(t)
      );
    }
    function d(e, t, n) {
      var r = [],
        a = [],
        i = Math.max(
          e != null ? e.getValues().length : 0,
          t != null ? t.getValues().length : 0,
        );
      if (i === 0) return { customAudiences: n };
      for (var l = 0; l < i; l++) {
        var c,
          d = (c = n.getValueForIndex(l)) != null ? c : [],
          m = e != null ? e.getValueForIndex(l) : [],
          p = t != null ? t.getValueForIndex(l) : [];
        ((a[l] = p != null ? p : []), (r[l] = m != null ? m : []));
        var _ = p != null ? s(p) : null;
        p != null && p.length > 0 && _ != null && _.length > 0
          ? (a[l] = u(p, d))
          : (r[l] = d);
      }
      return {
        customAudiences: o("AdsBulkValueUtils").aggregate(r),
        flexibleSpec: o("AdsBulkValueUtils").aggregate(a),
      };
    }
    function m(e, t, n, a) {
      var i = c(
          e,
          o(
            "targetingBulkSpecGetCustomAudiencesFromFlexibleSpec",
          ).targetingBulkSpecGetCustomAudiencesFromFlexibleSpec(t),
        ),
        l = r("targetingBulkSpecProcessSpecChangedOnCustomAudienceBulkValue")(
          i,
          n,
          a,
        );
      return l == null ? { customAudiences: null } : d(e, t, l);
    }
    l.default = m;
  },
  98,
);
