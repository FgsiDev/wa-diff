__d(
  "adsMgmtGetWindowDimensions",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("nullthrows")(
        document.documentElement,
        "Expected there to be a document element.",
      );
      return {
        window_height: window.innerHeight || (e && e.clientHeight),
        window_width: window.innerWidth || (e && e.clientWidth),
      };
    }
    l.default = e;
  },
  98,
);
