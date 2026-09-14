__d(
  "isAdaptImagesDefaultOptInBlocked",
  ["AdsAPlusCFastTrackV2Utils", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("justknobx")._("1963")) {
        var t = e == null ? void 0 : e.da_adapt_images_opt_in_status;
        if (t === "OPTED_OUT") return !0;
      }
      return r("justknobx")._("5171") &&
        o("AdsAPlusCFastTrackV2Utils").isAccountInSensitiveVerticals()
        ? !0
        : r("gkx")("9459") || r("gkx")("20425");
    }
    l.default = e;
  },
  98,
);
