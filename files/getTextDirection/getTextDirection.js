__d(
  "getTextDirection",
  ["Locale", "UnicodeBidi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("UnicodeBidi").isDirectionRTL(e),
        n = o("Locale").isRTL();
      return t && !n ? "rtl" : !t && n ? "ltr" : "";
    }
    l.default = e;
  },
  98,
);
