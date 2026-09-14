__d(
  "AdsPlacementPlatformUtils",
  [
    "AdsPageTypes",
    "AdsPlacementAPIMigrationUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementPluginList",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.some(function (e) {
        return (
          e ===
            o("AdsPlacementAPIMigrationUtils").deprecate(
              r("AdsPageTypes").DESKTOP_FEED,
            ) ||
          e ===
            o("AdsPlacementAPIMigrationUtils").deprecate(
              r("AdsPageTypes").MOBILE_FEED,
            ) ||
          e ===
            o("AdsPlacementAPIMigrationUtils").deprecate(
              r("AdsPageTypes").RIGHT_COLUMN,
            ) ||
          e ===
            o("AdsPlacementAPIMigrationUtils").deprecate(
              r("AdsPageTypes").HOME,
            ) ||
          e ===
            o("AdsPlacementAPIMigrationUtils").deprecate(
              r("AdsPageTypes").LOGOUT,
            )
        );
      });
    }
    function s(e) {
      return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
        e,
        "instream_video",
      );
    }
    function u(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "story",
      );
    }
    function c(e) {
      return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        "facebook",
      );
    }
    function d(e, t) {
      return o("AdsPlacementPluginList")
        .getAllPlatforms()
        .find(function (n) {
          return t === "placements/platform"
            ? n.key === e
            : n.positions.find(function (t) {
                return t.key === e;
              });
        });
    }
    ((l.hasAnyFacebookPlacement_DEPRECATED = e),
      (l.hasAnyInstreamVideoPlacement = s),
      (l.hasInstagramStoriesPlacement = u),
      (l.campaignHasAnyFacebookPlacement = c),
      (l.getPlatformPluginForPluginKey = d));
  },
  98,
);
