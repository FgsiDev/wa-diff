__d(
  "AdsVideoValidationPlugins",
  [
    "AdsAudienceNetworkRewardedVideoValidationPlugin",
    "AdsAudienceNetworkVideoValidationPlugin",
    "AdsFBStoryVideoValidationPlugin",
    "AdsFacebookInstreamVideoValidationPlugin",
    "AdsFacebookReelsOverlayVideoValidationPlugin",
    "AdsInstagramExploreHomeVideoValidationPlugin",
    "AdsInstagramProfileFeedVideoValidationPlugin",
    "AdsInstagramReelsVideoValidationPlugin",
    "AdsInstagramSearchFeedVideoValidationPlugin",
    "AdsInstagramStoryVideoValidationPlugin",
    "AdsInstagramStreamVideoValidationPlugin",
    "AdsMessengerInboxVideoValidationPlugin",
    "AdsThreadsStreamVideoValidationPlugin",
    "AdsWhatsAppStatusVideoValidationPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsAudienceNetworkVideoValidationPlugin"),
        n("AdsAudienceNetworkRewardedVideoValidationPlugin"),
        n("AdsFacebookInstreamVideoValidationPlugin"),
        n("AdsFacebookReelsOverlayVideoValidationPlugin"),
        n("AdsFBStoryVideoValidationPlugin"),
        n("AdsInstagramExploreHomeVideoValidationPlugin"),
        n("AdsInstagramProfileFeedVideoValidationPlugin"),
        n("AdsInstagramReelsVideoValidationPlugin"),
        n("AdsInstagramSearchFeedVideoValidationPlugin"),
        n("AdsInstagramStoryVideoValidationPlugin"),
        n("AdsInstagramStreamVideoValidationPlugin"),
        n("AdsMessengerInboxVideoValidationPlugin"),
        n("AdsThreadsStreamVideoValidationPlugin"),
        n("AdsWhatsAppStatusVideoValidationPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
