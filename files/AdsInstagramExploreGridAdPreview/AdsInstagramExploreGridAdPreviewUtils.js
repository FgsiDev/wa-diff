__d(
  "AdsInstagramExploreGridAdPreviewUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.5625,
      s = 0.01;
    function u(t) {
      if (t == null) return !1;
      var n = s;
      return t >= e * (1 - n) && t <= e * (1 + n);
    }
    var c = r("gkx")("21469"),
      d = r("gkx")("5365"),
      m = "ad-preview-instagram-explore-grid-ad-tile",
      p = "ad-preview-tall-explore-grid-video-tile",
      _ = "ad-preview-tall-explore-grid-image-tile";
    ((l.isFullscreenAspectRatio = u),
      (l.passExploreHomeAds2by2DeprecationGK = c),
      (l.passExploreHomeAdsTallGridGK = d),
      (l.exploreGridAdTileDataTestID = m),
      (l.tallGridVideoAdTileDataTestID = p),
      (l.tallGridImageAdTileDataTestID = _));
  },
  98,
);
