__d(
  "AdsManagerCampaignTableLocalStorageUtils",
  ["WebStorage", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        var t,
          o =
            (t = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null
              ? void 0
              : t.getItem(n);
        return o != null ? o : "";
      },
      u = function (n, o) {
        try {
          var t;
          (t = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null ||
            t.setItem(n, o);
        } catch (e) {
          return r("getErrorSafe")(e);
        }
      },
      c = function (t, n) {
        var e = s(t),
          r = n(e);
        return u(t, r);
      };
    ((l.getLocalStorage = s),
      (l.setLocalStorage = u),
      (l.updateLocalStorage = c));
  },
  98,
);
