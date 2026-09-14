__d(
  "adsPlacementCustomizationAssetFeedSpecFieldsToCopyToAdWithPost",
  ["AdsAPIAdgroupPaths", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("immutable").Map(
        ((e = {}),
        (e.ad_formats = (s =
          r("AdsAPIAdgroupPaths")).CREATIVE.ASSET_FEED_SPEC.AD_FORMATS),
        (e.images = s.CREATIVE.ASSET_FEED_SPEC.IMAGES),
        (e.videos = s.CREATIVE.ASSET_FEED_SPEC.VIDEOS),
        (e.bodies = s.CREATIVE.ASSET_FEED_SPEC.BODIES),
        (e.call_to_actions = s.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS),
        (e.call_to_action_types =
          s.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES),
        (e.captions = s.CREATIVE.ASSET_FEED_SPEC.CAPTIONS),
        (e.carousels = s.CREATIVE.ASSET_FEED_SPEC.CAROUSELS),
        (e.descriptions = s.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS),
        (e.groups = s.CREATIVE.ASSET_FEED_SPEC.GROUPS),
        (e.link_urls = s.CREATIVE.ASSET_FEED_SPEC.LINK_URLS),
        (e.posts = s.CREATIVE.ASSET_FEED_SPEC.POSTS),
        (e.titles = s.CREATIVE.ASSET_FEED_SPEC.TITLES),
        e),
      ),
      c = u;
    l.default = c;
  },
  98,
);
