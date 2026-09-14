__d(
  "MediaController",
  ["EventEmitter", "Style"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getRootNode = function () {
          return this.$MediaController$p_1;
        }),
        (n.setDimensions = function (t, n) {
          var e = this.getRootNode();
          r("Style").apply(e, { width: t + "px", height: n + "px" });
        }),
        (n.getMediaID = function () {
          return this.$MediaController$p_2;
        }),
        (n.isLiveVideo = function () {
          return !1;
        }),
        (n.isVideo = function () {
          return !1;
        }),
        t
      );
    })(r("EventEmitter"));
    l.default = e;
  },
  98,
);
