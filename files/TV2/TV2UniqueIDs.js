__d(
  "TV2UniqueIDs",
  ["guid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      var n,
        r = (n = e.get(t)) != null ? n : 0;
      return (e.set(t, r + 1), "" + t + r.toString(36));
    }
    function u() {
      return s("id_tv2_vcr_");
    }
    function c() {
      return s("id_tv2_veqe_");
    }
    function d() {
      return s("id_tv2_toast_");
    }
    function m() {
      return s("id_tv2_rvr_");
    }
    function p() {
      return r("guid")();
    }
    ((l.makeTV2VideoCastRequestID = u),
      (l.makeTV2VideoExperienceQueueEntryID = c),
      (l.makeTV2ToastID = d),
      (l.makeTV2RelatedVideosRequestID = m),
      (l.makeTV2ChainingSessionID = p));
  },
  98,
);
