__d(
  "adsUEditorGetShouldEnableCropAndExpandSegmentDefaultOnGetValueSelector",
  ["AdsAPlusCFastTrackV2Utils", "AdsAccountStore", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          var e = t.getValue(),
            n = e == null ? void 0 : e.sales_segment_v2;
          return o("AdsAPlusCFastTrackV2Utils").isSBGSegment(n)
            ? !0
            : o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(n) ||
                o("AdsAPlusCFastTrackV2Utils").isGBGScaleSegment(n);
        },
        {
          name:
            i.id +
            ".adsUEditorGetShouldEnableCropAndExpandSegmentDefaultOnGetValueSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
