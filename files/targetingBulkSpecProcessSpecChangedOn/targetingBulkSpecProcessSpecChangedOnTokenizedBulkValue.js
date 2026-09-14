__d(
  "targetingBulkSpecProcessSpecChangedOnTokenizedBulkValue",
  [
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsUniformValue",
    "nullthrows",
    "targetingBulkSpecGetAllSelectedValuesFromBulkSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return !e || e instanceof r("AdsEmptyValue")
        ? new (r("AdsUniformValue"))(t)
        : o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            return e
              ? [].concat(
                  e,
                  t.filter(function (t) {
                    return !e.some(function (e) {
                      return n(e) === n(t);
                    });
                  }),
                )
              : [].concat(t);
          });
    }
    function s(e, t, n) {
      return !e || e instanceof r("AdsEmptyValue")
        ? null
        : o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            return (
              e &&
              e.filter(function (e) {
                return !t.some(function (t) {
                  return n(t) === n(e);
                });
              })
            );
          });
    }
    function u(e, t, n) {
      return !e || e instanceof r("AdsEmptyValue")
        ? null
        : o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            return (
              e &&
              e.map(function (e) {
                var r = t(e),
                  o = n.get(r);
                return o == null ? e : o;
              })
            );
          });
    }
    function c(t, n, o, a) {
      var i = t
        ? r("targetingBulkSpecGetAllSelectedValuesFromBulkSpec")(t, o)
        : [];
      if (a) return u(t, o, a);
      var l = new Set(
        i.map(function (e) {
          return o(e);
        }),
      );
      if (i.length === n.length) return t;
      if (i.length < n.length) {
        var c = {},
          d = r("nullthrows")(
            n.filter(function (e) {
              return !l.has(o(e)) || c[o(e)] ? !0 : ((c[o(e)] = !0), !1);
            }),
          );
        return e(t, d, o);
      }
      var m = r("nullthrows")(
        i.filter(function (e) {
          return !n.some(function (t) {
            return o(t) === o(e);
          });
        }),
      );
      return s(t, m, o);
    }
    l.default = c;
  },
  98,
);
