__d(
  "getFullScreenElement",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      if (document.fullscreenElement != null) return document.fullscreenElement;
      var e = document.webkitFullscreenElement;
      if (e != null) return e;
      var t = document.mozFullScreenElement;
      return t != null ? t : document.msFullscreenElement;
    }
    i.default = e;
  },
  66,
);
