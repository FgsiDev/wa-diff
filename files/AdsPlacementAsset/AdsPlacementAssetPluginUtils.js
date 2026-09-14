__d(
  "AdsPlacementAssetPluginUtils",
  [
    "AdsPlacementPlatformPlugins",
    "AdsPlacementPluginList",
    "AdsPlacementPositionGroupPlugins",
    "AdsPlacementPositionPlugins",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsPlacementPluginList")
        .getAllPlatforms()
        .filter(function (t) {
          var n = t.positions;
          return n.some(function (t) {
            var n = t.key;
            return n === e;
          });
        })
        .map(function (e) {
          var t = e.key;
          return t;
        })
        .first();
    }
    function s(e) {
      return u(e).apiPosition;
    }
    function u(e) {
      return r("AdsPlacementPositionPlugins").get(e);
    }
    function c(e) {
      return r("AdsPlacementPositionPlugins")
        .filter(function (t) {
          var n = t.apiPosition,
            o = t.platformKey;
          return (
            e.platform ===
              r("AdsPlacementPlatformPlugins").get(o).apiPublisherPlatform &&
            e.position === n
          );
        })
        .getArray()[0];
    }
    function d(e) {
      return {
        platform: r("AdsPlacementPlatformPlugins").get(e.platformKey)
          .apiPublisherPlatform,
        position: r("nullthrows")(
          e.apiPosition,
          "getPlacementForPositionPlugin: apiPosition must exist for a valid position plugin.",
        ),
      };
    }
    function m(e) {
      return r("AdsPlacementPositionGroupPlugins")
        .filter(function (t) {
          return t.positions.some(function (t) {
            var n = t.key;
            return e === n;
          });
        })
        .getOne();
    }
    ((l.getPlatformKeyFromPositionKey = e),
      (l.getAPIPositionForPlacementPosition = s),
      (l.getPositionPluginForPlacementPosition = u),
      (l.getPositionPluginForPlacement = c),
      (l.getPlacementForPositionPlugin = d),
      (l.getPositionGroupPluginForPosition = m));
  },
  98,
);
