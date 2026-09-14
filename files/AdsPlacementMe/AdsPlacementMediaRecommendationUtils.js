__d(
  "AdsPlacementMediaRecommendationUtils",
  [
    "AdsAspectRatioTypes",
    "AdsImageAspectRatioUtils",
    "AdsPlacementAssetPluginUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementPositionPlugins",
    "AdsVideoAspectRatioUtils",
    "immutable",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = s(e);
      return o("AdsImageAspectRatioUtils").getAspectRatioTypeFromCropKey(t);
    }
    function s(e) {
      var t;
      return (t = o(
        "AdsPlacementAssetPluginUtils",
      ).getPositionPluginForPlacement(e)) == null ||
        (t = t.mediaRecommendation) == null
        ? void 0
        : t.imageCrop;
    }
    function u(e, t) {
      return r("AdsPlacementPositionPlugins")
        .filter(function (t) {
          return t.isActive(e);
        })
        .getSet()
        .map(function (e) {
          var n = e.mediaRecommendation;
          return t === "image"
            ? o("AdsImageAspectRatioUtils").getAspectRatioTypeFromCropKey(
                n == null ? void 0 : n.imageCrop,
              )
            : o("AdsVideoAspectRatioUtils").getAspectRatioTypeFromCropKey(
                n == null ? void 0 : n.videoCrop,
              );
        })
        .filter(Boolean);
    }
    function c(e) {
      var t = o("AdsImageAspectRatioUtils").getCropKeyFromAspectRatioType(e);
      return r("AdsPlacementPositionPlugins")
        .filter(function (e) {
          var n;
          return (
            ((n = e.mediaRecommendation) == null ? void 0 : n.imageCrop) === t
          );
        })
        .getList()
        .map(o("AdsPlacementAssetPluginUtils").getPlacementForPositionPlugin);
    }
    function d(e) {
      var t = o("AdsVideoAspectRatioUtils").getCropKeyFromAspectRatio(e);
      return r("AdsPlacementPositionPlugins")
        .filter(function (e) {
          var n;
          return (
            ((n = e.mediaRecommendation) == null ? void 0 : n.videoCrop) === t
          );
        })
        .getList()
        .map(o("AdsPlacementAssetPluginUtils").getPlacementForPositionPlugin);
    }
    function m() {
      return r("immutable")
        .Set(r("objectValues")(r("AdsAspectRatioTypes")))
        .toMap()
        .map(function (e, t) {
          return o("AdsPlacementAssetUtils")
            .getAssetGroupsFromPlacements(c(t))
            .toSet();
        });
    }
    function p() {
      return r("immutable")
        .Set(r("objectValues")(r("AdsAspectRatioTypes")))
        .toMap()
        .map(function (e, t) {
          return o("AdsPlacementAssetUtils")
            .getAssetGroupsFromPlacements(d(t))
            .toSet();
        });
    }
    ((l.getRecommendedAspectRatioTypeFromPlacement = e),
      (l.getRecommendedAspectRatiosFromPlacementSpec = u),
      (l.getPlacementsFromImageRecommendedAspectRatio = c),
      (l.getPlacementsFromVideoRecommendedAspectRatio = d),
      (l.getImageAssetCustomizationPlacementsByAspectRatioType = m),
      (l.getVideoAssetCustomizationPlacementsByAspectRatioType = p));
  },
  98,
);
