__d(
  "AdsFeedApplicabilityUtils",
  [
    "AdsPlacementAPISpecReaderUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        "facebook",
      );
    }
    function s(e) {
      return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        e,
        "facebook",
      );
    }
    function u(e) {
      return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
        e,
        "instream_video",
      );
    }
    function c(e) {
      return o(
        "AdsPlacementAPISpecReaderUtils",
      ).isOnlyActiveFacebookInstreamVideosPlacement(e);
    }
    ((l.hasFacebookPlacement = e),
      (l.placementSpecHasFacebookPlacement = s),
      (l.placementSpecHasFacebookInstreamVideoPlacement = u),
      (l.placementSpecHasFacebookInstreamVideosPlacementOnly = c));
  },
  98,
);
