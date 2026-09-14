__d(
  "onLoadedMetadataHTMLMediaElement",
  ["EventListener", "HTMLMediaElementReadyStates", "setImmediate"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e >= r("HTMLMediaElementReadyStates").HAVE_METADATA;
    }
    function s(t, n) {
      return (
        e(t.readyState) && r("setImmediate")(n),
        r("EventListener").listen(t, "loadedmetadata", n)
      );
    }
    ((s.once = function (e, t) {
      var n = s(e, function (e) {
        (n.remove(), t(e));
      });
    }),
      (l.default = s));
  },
  98,
);
