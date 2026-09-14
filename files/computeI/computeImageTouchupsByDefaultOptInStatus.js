__d(
  "computeImageTouchupsByDefaultOptInStatus",
  ["adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i) {
      return e
        ? o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
            .overrideWithSalesSegmentationDefaultOn(t, n)
            .mapValue(function (e) {
              return o(
                "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
              ).overrideWithPersonalizedRecommendation(e, r);
            })
            .mapValue(function (e) {
              return o(
                "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
              ).overrideWithPACUpfunnelDefaultOn(e, a, i);
            })
        : o(
            "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
          ).mergeStickyOptInWithDefaultOn(t, !1);
    }
    l.default = e;
  },
  98,
);
