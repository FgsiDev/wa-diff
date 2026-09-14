__d(
  "adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackGetValueSelector",
  ["AdsAPlusCFastTrackV2Utils", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o(
        "AdsAPlusCFastTrackV2Utils",
      ).isAccountEligbleForTextOptimizationsFastTrackV2();
      return o("AdsAPlusCFastTrackV2Utils").isAccountSensitiveForFastTrackV2()
        ? !1
        : e;
    }
    var s = r("adsCreateSelector")(
      [],
      function () {
        var t = o(
          "AdsAPlusCFastTrackV2Utils",
        ).passTextOptimizationsFastTrackV2GK(!1);
        return t && e();
      },
      {
        name:
          i.id +
          ".adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackGetValueSelector",
      },
    );
    ((l.adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackWithoutGKGetValue =
      e),
      (l.adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackGetValueSelector =
        s));
  },
  98,
);
