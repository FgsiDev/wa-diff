__d(
  "adsPlacementAssetMutationRemoveCustomizationCarousel",
  [
    "adsPlacementAssetMutationRemoveCarouselCard",
    "adsPlacementAssetMutationRemoveCustomizationAsset",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i;
      a === void 0 && (a = !0);
      var l =
        (i = e.creative) == null ||
        (i = i.asset_feed_spec) == null ||
        (i = i.carousels) == null ||
        (i = i.get(n)) == null
          ? void 0
          : i.get("child_attachments");
      if (!(l instanceof r("immutable").List)) return e;
      var s = e;
      return (
        l.forEach(function (e, t) {
          s = r("adsPlacementAssetMutationRemoveCarouselCard")(s, o, t, !0);
        }),
        r("adsPlacementAssetMutationRemoveCustomizationAsset")(
          s,
          t,
          o,
          "carousel",
          a,
          !1,
        )
      );
    }
    l.default = e;
  },
  98,
);
