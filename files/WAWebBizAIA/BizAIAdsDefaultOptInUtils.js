__d(
  "BizAIAdsDefaultOptInUtils",
  ["AdsAPlusCFastTrackV2Utils", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(e),
        a = o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(e),
        i = n || a;
      return r("justknobx")._("3690")
        ? !!(i && (t = r("qex")._("338")) != null && t)
        : !1;
    }
    l.shouldEnableBizAIToggleByDefault = e;
  },
  98,
);
