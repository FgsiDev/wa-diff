__d(
  "AdsInsightsCompositeGroupKeyUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ":";
    function l(t, n) {
      return t + e + n;
    }
    function s(t) {
      return t.includes(e);
    }
    function u(t) {
      var n = t.indexOf(e);
      return n === -1
        ? { filterName: "", rawValue: t }
        : { filterName: t.substring(0, n), rawValue: t.substring(n + 1) };
    }
    function c(e) {
      return s(e) ? u(e).rawValue : e;
    }
    function d(e, t) {
      var n,
        r = (n = e.compositeKeyFilterNames) == null ? void 0 : n[t],
        o = r != null ? r : e.filterName,
        a;
      if (r != null) {
        var i = c(t),
          l = Number(i);
        a = i !== "" && !isNaN(l) ? l : i;
      } else {
        var s = e.groupKeys,
          u = Array.isArray(s)
            ? s.find(function (e) {
                return String(e.value) === t;
              })
            : null;
        a = u != null ? u.value : t;
      }
      return { filterName: o, filterValue: a };
    }
    ((i.makeCompositeKey = l),
      (i.isCompositeKey = s),
      (i.parseCompositeKey = u),
      (i.getRawValueFromKey = c),
      (i.resolveFilterForGroupKey = d));
  },
  66,
);
