__d(
  "WebBloksCAAOpenAppIntent",
  ["UserAgent", "goURI"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o) {
      var a = function (r) {
          window.setTimeout(function () {
            e.executeCatch(o, [r, t]);
          });
        },
        i =
          r("UserAgent").isPlatform("Android") &&
          typeof n == "string" &&
          n.startsWith("intent://");
      if (!i) {
        a("OpenAppIntent: no usable intent_url");
        return;
      }
      try {
        r("goURI")(n, !0);
      } catch (e) {
        a("OpenAppIntent: navigation failed");
      }
    }
    l.default = e;
  },
  98,
);
