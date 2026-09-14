__d(
  "AbstractVideoPlayerApi",
  ["invariant", "EventEmitter", "FBLogger", "VideoPlayerApiEvents"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addListener = function () {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (t = e.prototype.addListener).call.apply(t, [this].concat(r));
        }),
        (n.emit = function () {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (t = e.prototype.emit).call.apply(t, [this].concat(r));
        }),
        (n.setRelativeSphericalOrientation = function (t, n) {}),
        (t.isImplementationUnavailable = function () {
          return !0;
        }),
        (n.isDrm = function () {
          return !1;
        }),
        (n.setup = function () {}),
        t
      );
    })(r("EventEmitter"));
    l.default = e;
  },
  98,
);
