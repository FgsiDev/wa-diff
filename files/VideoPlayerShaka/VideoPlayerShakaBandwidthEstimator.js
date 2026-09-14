__d(
  "VideoPlayerShakaBandwidthEstimator",
  ["CacheStorage", "Run", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    var e;
    r("requireWeak")("Shaka", function (t) {
      e = t.util.EWMACacheBandwidthEstimator;
    });
    var s = null,
      u = !1,
      c = 30,
      d = 2e6,
      m = 25e4,
      p = 123034,
      _ = (function () {
        function t() {
          var t = this,
            n = new (r("CacheStorage"))("localstorage", "_video_"),
            a = n.get("bandwidthEstimate");
          ((this.$1 = {
            isMockObject: !0,
            getBandwidth: function (t) {
              return a;
            },
            getFastMovingBandwidth: function () {
              return a;
            },
          }),
            e &&
              ((this.$1 = new e(c, d, function () {}, a)),
              (this.$1.isMockObject = !1)),
            o("Run").onUnload(function () {
              n.set("bandwidthEstimate", t.$1.getBandwidth());
            }));
        }
        var n = t.prototype;
        return (
          (n.getEstimator = function () {
            return this.$1;
          }),
          (t.getInstance = function () {
            return (
              (s === null || (s.getEstimator().isMockObject && e)) &&
                (s = new t()),
              s
            );
          }),
          (t.getEstimator = function () {
            return t.getInstance().getEstimator();
          }),
          (t.getBandwidth = function (n) {
            var e = t.getEstimator();
            return e.getBandwidth(n);
          }),
          (t.getBandwidthByVideoType = function (n) {
            return t.getBandwidth(t.getBandwidthModel(n));
          }),
          (t.getBandwidthModel = function (t) {
            return t === !0 ? "aggressive" : "conservative";
          }),
          (t.isAutoplayBandwidthRestrained = function (n) {
            var e = t.getEstimator(),
              r;
            u ? (r = e.getFastMovingBandwidth()) : (r = e.getBandwidth());
            var o = n === !0 ? m : p;
            return (r === null || r >= o ? (u = !1) : (u = !0), u);
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);
