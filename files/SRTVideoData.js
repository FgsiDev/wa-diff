__d(
  "SRTVideoData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = (function () {
        function t() {
          ((this.$1 = null), (this.$2 = null));
        }
        t.getInstance = function () {
          return (e || (e = new t()), e);
        };
        var n = t.prototype;
        return (
          (n.setJobID = function (t) {
            this.$1 = t;
          }),
          (n.setJobTrackingID = function (t) {
            this.$2 = t;
          }),
          (n.unsetJobID = function () {
            this.$1 = null;
          }),
          (n.getJobID = function () {
            return this.$1;
          }),
          (n.getJobTrackingID = function () {
            return this.$2;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
