__d(
  "BigPipePlugins",
  ["cr:6669"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      return (
        (e.runPluginOnPagelet = function (n) {
          e.getPluginList().forEach(function (e) {
            e(n);
          });
        }),
        (e.getPluginList = function () {
          return [
            function (t) {
              return e.moveAdsTokens(t);
            },
          ];
        }),
        (e.moveAdsTokens = function (n) {
          if (n)
            for (
              var t = n.querySelectorAll("div[data-fte]"), r = 0, o = t.length;
              r < o;
              r++
            )
              e.$1(t[r], "data-ft", "data-ft");
        }),
        (e.$1 = function (t, r, o) {
          var e = t.getAttribute(r);
          e && (n("cr:6669").set(t, o, e), t.removeAttribute(r));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
