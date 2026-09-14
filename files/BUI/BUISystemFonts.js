__d(
  "BUISystemFonts",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = "Arial, sans-serif";
      return (
        r("UserAgent").isPlatform("iOS >= 9") ||
        (r("UserAgent").isPlatform("Mac OS X >= 10.11") &&
          !r("UserAgent").isBrowser("Firefox < 55"))
          ? (e = r("UserAgent").isBrowser("Chrome 81 - 82")
              ? '"SF Pro Text", "SF UI Text", -apple-system, Arial, sans-serif'
              : "-apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif")
          : r("UserAgent").isPlatform("Chrome OS") &&
            (e = "Roboto, Arial, sans-serif"),
        e
      );
    }
    var s = e(),
      u = "normal";
    ((l.FONT_FAMILY = s), (l.LETTER_SPACING = u));
  },
  98,
);
