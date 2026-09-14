__d(
  "seekHTMLMediaElementTo",
  ["EventListener", "onLoadedMetadataHTMLMediaElement", "setImmediate"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e.currentTime == t) return n && r("setImmediate")(n);
      try {
        e.currentTime = t;
      } catch (e) {}
      if (e.currentTime)
        var o = r("EventListener").listen(e, "seeked", function () {
          (o.remove(), n && n());
        });
      else
        r("onLoadedMetadataHTMLMediaElement")(e, function () {
          e.currentTime = t;
          var o = r("EventListener").listen(e, "seeked", function () {
            (o.remove(), n && n());
          });
        });
    }
    l.default = e;
  },
  98,
);
