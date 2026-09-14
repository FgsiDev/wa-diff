__d(
  "FullScreen",
  [
    "ArbiterMixin",
    "CSS",
    "Event",
    "Keys",
    "UserAgent",
    "UserAgent_DEPRECATED",
    "mixin",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = !1;
    function u(e) {
      r("Event").getKeyCode(e) === r("Keys").ESC && e.stopPropagation();
    }
    function c() {
      s || (document.addEventListener("keydown", u, !0), (s = !0));
    }
    function d() {
      s && (document.removeEventListener("keydown", u, !0), (s = !1));
    }
    var m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.onChange = function () {
              var t = e.isFullScreen(),
                n = document.body;
              (n && o("CSS").conditionClass(n, "fullScreen", t),
                e.inform("changed"),
                t || d());
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.listenForEvent = function (n) {
            var t = r("throttle")(this.onChange, 0, this);
            e[n.id] ||
              ((e[n.id] = !0),
              r("Event").listen(n, {
                webkitfullscreenchange: t,
                mozfullscreenchange: t,
                MSFullscreenChange: t,
                fullscreenchange: t,
              }));
          }),
          (a.enableFullScreen = function (t) {
            this.listenForEvent(t);
            var e = t;
            if (e.webkitRequestFullScreen)
              o("UserAgent_DEPRECATED").chrome()
                ? e.webkitRequestFullScreen == null ||
                  e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                : e.webkitRequestFullScreen == null ||
                  e.webkitRequestFullScreen();
            else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
            else if (e.msRequestFullscreen)
              (c(), e.msRequestFullscreen == null || e.msRequestFullscreen());
            else if (e.requestFullScreen)
              e.requestFullScreen == null || e.requestFullScreen();
            else return !1;
            return !0;
          }),
          (a.disableFullScreen = function () {
            var e = document;
            if (e.webkitCancelFullScreen) e.webkitCancelFullScreen();
            else if (e.mozCancelFullScreen) e.mozCancelFullScreen();
            else if (e.msExitFullscreen) e.msExitFullscreen();
            else if (e.cancelFullScreen) e.cancelFullScreen();
            else if (e.exitFullScreen) e.exitFullScreen();
            else return !1;
            return !0;
          }),
          (a.isFullScreen = function () {
            var e = document;
            return !!(
              e.webkitIsFullScreen ||
              e.fullScreen ||
              e.mozFullScreen ||
              e.msFullscreenElement
            );
          }),
          (a.toggleFullScreen = function (t) {
            return this.isFullScreen()
              ? (this.disableFullScreen(), !1)
              : this.enableFullScreen(t);
          }),
          (a.isSupportedWithKeyboardInput = function () {
            return this.isSupported() && !r("UserAgent").isBrowser("Safari");
          }),
          (a.isSupported = function () {
            var e = document,
              t =
                e.webkitFullscreenEnabled ||
                e.mozFullScreenEnabled ||
                e.msFullscreenEnabled ||
                e.fullscreenEnabled;
            return !!(
              t ||
              e.webkitCancelFullScreen ||
              e.mozCancelFullScreen ||
              e.msExitFullscreen ||
              e.cancelFullScreen ||
              e.exitFullScreen
            );
          }),
          n
        );
      })(r("mixin")(r("ArbiterMixin"))),
      p = new m(),
      _ = r("throttle")(p.onChange, 0, p);
    r("Event").listen(document, {
      webkitfullscreenchange: _,
      mozfullscreenchange: _,
      MSFullscreenChange: _,
      fullscreenchange: _,
    });
    var f = p;
    l.default = f;
  },
  98,
);
