__d(
  "AdsPageStoreUtils",
  ["AdsPageStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = r("AdsPageStore").get(e)) == null
        ? void 0
        : t.ig_lva_default_duration_s;
    }
    function s(e) {
      var t;
      return (t = r("AdsPageStore").get(e)) == null
        ? void 0
        : t.ig_lva_live_block_reason;
    }
    function u(e) {
      return r("AdsPageStore").getLoadObject(e).getValue();
    }
    ((l.getPageIGLVADefaultDurationS = e),
      (l.getPageIGLVALiveBlockReason = s),
      (l.getPageFromPageStore = u));
  },
  98,
);
