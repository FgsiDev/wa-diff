__d(
  "supportsHTML5Video",
  ["DOM", "memoize"],
  function (t, n, r, o, a, i, l) {
    var e = r("memoize")(function () {
      return "canPlayType" in r("DOM").create("video");
    });
    l.default = e;
  },
  98,
);
