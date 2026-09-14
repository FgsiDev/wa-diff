__d(
  "AdsUEditorLiveVideoUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (!(e == null || e.username == null)) {
        var t = e.username.toString(),
          n = l(t);
        return n;
      }
    }
    var l = function (t) {
      return "http://instagram.com/" + t + "/live";
    };
    function s(e) {
      return "instagram://user?username=" + e;
    }
    ((i.getInstagramLiveLink = e),
      (i.getExternalLinkForInstagramLive = l),
      (i.getInstagramLiveFallbackAppLink = s));
  },
  66,
);
