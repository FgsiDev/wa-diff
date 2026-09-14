__d(
  "getHTMLMediaElementMutedState",
  ["HTMLMediaElementReadyStates"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.readyState >= r("HTMLMediaElementReadyStates").HAVE_METADATA
        ? e.muted
        : e.hasAttribute("muted") || e.muted;
    }
    l.default = e;
  },
  98,
);
