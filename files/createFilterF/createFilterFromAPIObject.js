__d(
  "createFilterFromAPIObject",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterFieldType",
    "FBLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t && (e.operator === "IN" || e.operator === "NOT_IN")) {
        var o = r("AdsGenericFilterFieldConfigUtil").getConfigByField(n, t),
          a = s(o.values);
        if (a.length && Array.isArray(e.value))
          return e.value.filter(function (e) {
            return a.includes(e);
          });
      }
      return e.value;
    }
    function s(e) {
      var t = [];
      return (
        Array.isArray(e) &&
          (t = e.map(function (e) {
            return typeof e == "object" && e.value ? e.value : e;
          })),
        t
      );
    }
    function u(e, t) {
      if (e == null) return e;
      if (t === r("AdsGenericFilterFieldType").NUMBER) {
        var n = Number(e);
        return isNaN(n)
          ? (r("FBLogger")("quick_views_number_conversion").warn(
              "Quick Views: Number conversion failed for value %s",
              e.toString(),
            ),
            e)
          : n;
      }
      return e;
    }
    function c(t, n, o) {
      if (
        (o === void 0 && (o = !1),
        !r("AdsGenericFilterFieldConfigUtil").isValidFieldName(n, t.field))
      )
        return null;
      var a = r("AdsGenericFilterFieldConfigUtil").getTypeByFieldName(
        n,
        t.field,
      );
      if (o) {
        var i = t.value;
        try {
          i = u(t.value, a);
        } catch (e) {
          i = t.value;
        }
        t.value = i;
      }
      var l = new (r("AdsGenericFilterField"))(t.field, a),
        s = e(t, l, n);
      if (Array.isArray(s) && s.length === 0) return null;
      if (!l || !t.operator || s == null)
        throw r("err")(
          "Trying to create filter with invalid specifications. This might indicate URL tempering, localStorage manipulation or deprecated filters, " +
            JSON.stringify(t),
        );
      return new (r("AdsGenericFilter"))(l, t.operator, s);
    }
    l.default = c;
  },
  98,
);
