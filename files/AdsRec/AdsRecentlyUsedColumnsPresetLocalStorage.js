__d(
  "AdsRecentlyUsedColumnsPresetLocalStorage",
  ["FBLogger", "WebStorage", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = r("WebStorage"))).getLocalStorage(),
      u = "ads_manager_recently_used_column_preset",
      c = 11;
    function d() {
      var e = s == null ? void 0 : s.getItem(u);
      if (e == null) return [];
      try {
        return JSON.parse(e);
      } catch (e) {
        return (
          r("FBLogger")("AdsInsightsColumnDropdownMenuSelectors")
            .catching(r("getErrorSafe")(e))
            .warn(
              "Failed to get recently used column preset from local storage.",
            ),
          []
        );
      }
    }
    function m(e, t) {
      var n = e,
        r = n.length;
      if (r > 0) {
        var o = n.indexOf(t);
        o !== -1 && n.splice(o, 1);
      }
      return n;
    }
    function p(e) {
      return (e.length > 0 && e.shift(), e);
    }
    function _(e, t) {
      return (e.push(t), e);
    }
    function f(e, t) {
      var n = e;
      return ((n = m(n, t)), n.length >= c && (n = p(n)), (n = _(n, t)), n);
    }
    function g() {
      var e = d();
      return e == null ? [] : e.reverse();
    }
    function h(e) {
      try {
        s == null || s.setItem(u, JSON.stringify(f(d(), e)));
      } catch (e) {
        (r("FBLogger")("AdsInsightsColumnDropdownMenuSelectors")
          .catching(r("getErrorSafe")(e))
          .warn(
            "local storage is exceeding its limit. please clean your local storage to enable the recently used feature",
          ),
          C());
      }
    }
    function y(e) {
      s == null || s.setItem(u, JSON.stringify(m(d(), e)));
    }
    function C() {
      s == null || s.removeItem(u);
    }
    ((l.LIST_LENGTH = c),
      (l.getLocalStorageRecentlyUsedColumnPresets = g),
      (l.updateLocalStorageRecentlyUsedColumnPresets = h),
      (l.deleteLocalStorageRecentlyUsedColumnPresets = y));
  },
  98,
);
