__d(
  "catalogSegmentGetPredefinedUTMsString",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = [];
      return (
        e != null && r.push("utm_source=" + e),
        t != null && r.push("utm_medium=" + t),
        n != null && r.push("utm_campaign=" + n),
        r.length > 0 ? r.join("&") : null
      );
    }
    i.default = e;
  },
  66,
);
