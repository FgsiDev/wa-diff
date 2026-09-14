__d(
  "AdsVideoSpecsUtils",
  [
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsPlacementAPISpecReaderUtils",
    "AdsVideoConfig.experimental",
    "AdsVideoSpecs",
    "getObjectValues",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("getObjectValues")(r("AdsVideoSpecs")),
      u = r("immutable").Map([
        [
          "audience_networkinstream_video",
          new Set([(e = r("AdsAPIObjectives")).VIDEO_VIEWS]),
        ],
      ]),
      c = r("immutable").Map([
        [
          "audience_networkinstream_video",
          new Set([e.VIDEO_VIEWS, e.REACH, e.BRAND_AWARENESS]),
        ],
      ]);
    function d(e, t, n) {
      return s.filter(function (r) {
        return !r.placementChecker(e) ||
          (r.supportsCarousel !== void 0 && r.supportsCarousel === !n)
          ? !1
          : p(r, t);
      });
    }
    function m(e, t, n) {
      return s.filter(function (r) {
        return !r.assetCustomizationPlacementChecker(e) ||
          (r.supportsCarousel !== void 0 && r.supportsCarousel === !n)
          ? !1
          : f(r, t);
      });
    }
    function p(e, t) {
      var n = u.get(e.platform.toString() + e.position);
      return n ? n.has(t) : !0;
    }
    function _(e, t, n) {
      if (n !== r("AdsBuyingTypes").RESERVED) return t;
      var a = !!(
        e &&
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveFacebookInstreamVideosPlacement(e)
      );
      return a
        ? t.map(function (e) {
            var t =
              e.platform === "facebook" && e.position === "instream_video";
            return t
              ? babelHelpers.extends({}, e, {
                  minWarningAspectRatio: r("AdsVideoConfig.experimental")
                    .instreamPACMinWarningAspectRatio,
                  maxWarningAspectRatio: r("AdsVideoConfig.experimental")
                    .instreamPACMaxWarningAspectRatio,
                })
              : e;
          })
        : t;
    }
    function f(e, t) {
      var n = c.get(e.platform.toString() + e.position);
      return n ? n.has(t) : !0;
    }
    ((l.getVideoSpecsForPlacementObjective = d),
      (l.getVideoSpecsForAssetCustomizationPlacementObjective = m),
      (l.transformVideoSpecsBasedOnBuyingType = _));
  },
  98,
);
