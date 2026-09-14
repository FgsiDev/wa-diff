__d(
  "AdsPEPinnedProductIdListUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 4;
    function l() {
      return e;
    }
    function s(e, t) {
      return e.includes(t)
        ? e.filter(function (e) {
            return e !== t;
          })
        : [].concat(e, [t]);
    }
    function u(e, t, n) {
      if (t === n || t < 0 || n < 0 || t >= e.length || n >= e.length) return e;
      var r = [].concat(e),
        o = r.splice(t, 1),
        a = o[0];
      return (r.splice(n, 0, a), r);
    }
    function c(e, t, n) {
      return t < 0 || t >= e.length
        ? e
        : e
            .map(function (e, r) {
              return r === t ? n : e;
            })
            .filter(function (e, r) {
              return e !== n || r === t;
            });
    }
    function d(e, t) {
      return e.filter(function (e) {
        return e !== t;
      });
    }
    function m(e, t) {
      return e.length >= t;
    }
    function p(e, t, n) {
      return e.includes(t) ? d(e, t) : m(e, n) ? e : s(e, t);
    }
    ((i.getAdsPEPinnedProductsCap = l),
      (i.movePinnedProductId = u),
      (i.replacePinnedProductIdAt = c),
      (i.removePinnedProductId = d),
      (i.isAdsPEPinnedProductsCapReached = m),
      (i.togglePinnedProductIdWithinCap = p));
  },
  66,
);
