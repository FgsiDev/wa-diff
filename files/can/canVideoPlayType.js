__d(
  "canVideoPlayType",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      return (
        (e = e || document.createElement("video")),
        "canPlayType" in e ? e.canPlayType(t) : ""
      );
    }
    i.default = l;
  },
  66,
);
