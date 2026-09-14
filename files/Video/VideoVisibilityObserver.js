__d(
  "VideoVisibilityObserver",
  [
    "EventEmitter",
    "VideoPlayerExperiments",
    "intersectionObserverEntryIsIntersecting",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      s = 44,
      u = "-" + s + "px 0px 0px",
      c = (function (t) {
        function n(n) {
          var o;
          ((o = t.call(this) || this),
            (o.$VideoVisibilityObserver$p_4 = function (e) {
              var t = e[e.length - 1],
                n = o.$VideoVisibilityObserver$p_1,
                a = o.$VideoVisibilityObserver$p_2;
              ((o.$VideoVisibilityObserver$p_1 = t.intersectionRatio),
                (o.$VideoVisibilityObserver$p_2 = r(
                  "intersectionObserverEntryIsIntersecting",
                )(t)),
                (n !== o.$VideoVisibilityObserver$p_1 ||
                  a !== o.$VideoVisibilityObserver$p_2) &&
                  o.emit("visibilityChanged", o.$VideoVisibilityObserver$p_1));
            }),
            (o.$VideoVisibilityObserver$p_1 = 0),
            (o.$VideoVisibilityObserver$p_2 = !1));
          var a = e,
            i = r(
              "VideoPlayerExperiments",
            ).videoVisibilityObserverUseMinimumThreshold;
          return (
            i && (a = [0.5]),
            (o.$VideoVisibilityObserver$p_3 = new IntersectionObserver(
              o.$VideoVisibilityObserver$p_4,
              { threshold: a, rootMargin: u },
            )),
            o.$VideoVisibilityObserver$p_3.observe(n),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.destroy = function () {
            this.$VideoVisibilityObserver$p_3 &&
              (this.$VideoVisibilityObserver$p_3.disconnect(),
              (this.$VideoVisibilityObserver$p_3 = null));
          }),
          (o.getIsIntersecting = function () {
            return this.$VideoVisibilityObserver$p_2;
          }),
          (o.getCurrentIntersectionRatio = function () {
            return this.$VideoVisibilityObserver$p_1;
          }),
          n
        );
      })(r("EventEmitter"));
    l.default = c;
  },
  98,
);
