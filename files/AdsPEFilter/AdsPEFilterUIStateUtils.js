__d(
  "AdsPEFilterUIStateUtils",
  ["AdsAccountStore", "AdsGenericFilterSetUtil", "setByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "last_used";
    function s(e) {
      var t = r("AdsAccountStore").getSelectedAccountID();
      r("AdsAccountStore").hasChanged() &&
        e.selectedAccountID !== t &&
        (e.set("selectedAccountID", t), e.set("wasModified", !1));
    }
    function u(t, n) {
      if (t != null) {
        var o = n.filterSet != null ? n.filterSet.toAPI() : null,
          a = babelHelpers.extends({}, n.savedFilters);
        (r("setByPath")(a, [t, e], o), n.set("savedFilters", a));
      }
    }
    function c(e, t, n) {
      (n.set("filterSet", t), n.wasModified && u(e, n));
    }
    function d(e, t, n) {
      o("AdsGenericFilterSetUtil").matchesExactly(n.filterSet, t) || c(e, t, n);
    }
    function m(t, n, o) {
      var a = n;
      n && n.length === 0 && (a = null);
      var i = babelHelpers.extends({}, o.savedFilters);
      (r("setByPath")(i, [t + "", e], a), o.set("savedFilters", i));
    }
    ((l.updateSelectedAccount = s),
      (l.updateLastUsedFilterSet = u),
      (l.changeFilterSet = c),
      (l.maybeChangeFilterSet = d),
      (l.handleFiltersLoaded = m));
  },
  98,
);
