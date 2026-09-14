__d(
  "adsPlacementAssetCustomizableFields",
  ["AdsAPIAdgroupPaths", "AdsUnifiedCreativeAPIFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        {
          assetFeedField: "images",
          targetingRuleField: "image_label",
          assetPath: (e = r("AdsAPIAdgroupPaths")).CREATIVE.ASSET_FEED_SPEC
            .IMAGES,
          specField: (s = r("AdsUnifiedCreativeAPIFields")).imageHash,
          labelField: "adlabels",
        },
        {
          assetFeedField: "videos",
          targetingRuleField: "video_label",
          assetPath: e.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
          specField: s.videoID,
          labelField: "adlabels",
        },
        {
          assetFeedField: "bodies",
          targetingRuleField: "body_label",
          assetPath: e.CREATIVE.ASSET_FEED_SPEC.BODIES,
          specField: s.message,
          labelField: "adlabels",
        },
        {
          assetFeedField: "titles",
          targetingRuleField: "title_label",
          assetPath: e.CREATIVE.ASSET_FEED_SPEC.TITLES,
          specField: s.headline,
          labelField: "adlabels",
        },
        {
          assetFeedField: "link_urls",
          targetingRuleField: "link_url_label",
          assetPath: e.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
          specField: s.linkURL,
          labelField: "adlabels",
        },
      ];
    l.default = u;
  },
  98,
);
