__d(
  "adsMgmtSupportedAttributionWindowsUtil",
  ["AdsInsightsAttributionWindows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (e == null ? void 0 : e.supportAttributionWindow) !== !0
        ? !1
        : (e == null ? void 0 : e.supportedAttributionWindows) == null
          ? !0
          : (n =
                t == null
                  ? void 0
                  : t.some(function (t) {
                      var n;
                      return (
                        (n =
                          e == null ? void 0 : e.supportedAttributionWindows) !=
                        null
                          ? n
                          : []
                      ).includes(t);
                    })) != null
            ? n
            : !1;
    }
    function s(e, t) {
      return e.supportAttributionWindow !== !0 ||
        e.supportedAttributionWindows == null
        ? t
        : t.filter(function (t) {
            var n;
            return (
              t === o("AdsInsightsAttributionWindows").getDefault() ||
              ((n = e.supportedAttributionWindows) == null
                ? void 0
                : n.includes(t)) === !0
            );
          });
    }
    ((l.getColumnSupportsAttributionWindowAndValidAttributionWindowsSelected =
      e),
      (l.filteredAttributionWindows = s));
  },
  98,
);
