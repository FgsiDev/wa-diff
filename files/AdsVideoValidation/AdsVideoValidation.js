__d(
  "AdsVideoValidation",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAdgroupPaths",
    "AdsError",
    "AdsErrorUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsVideoBuyingStoreUtils",
    "AdsVideoSpecsUtils",
    "AdsVideoValidationPlugins",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = 0.8,
      c = [],
      d = [1815896, 2490087];
    function m(e, t, n, a, i, l, s) {
      var u = new Map(),
        c = o("AdsVideoSpecsUtils").getVideoSpecsForPlacementObjective(t, n, i),
        m = o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveFacebookInstreamVideosPlacement(t)
          ? r("AdsError").Level.WARN
          : r("AdsError").Level.RECOMMEND,
        p = o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveAudienceNetworkInstreamPlacement(t)
          ? r("AdsError").Level.WARN
          : r("AdsError").Level.RECOMMEND,
        _ = { facebookInstreamOnly: m, audienceNetworkInstreamOnly: p };
      return (
        e.forEach(function (e) {
          u.set(e.id, g(e, c, t, a, _, l, n, i, s));
        }),
        u.forEach(function (e) {
          return e.forEach(function (e) {
            e &&
              d.some(function (t) {
                return t === e.key;
              }) &&
              (e.level = r("AdsError").Level.RECOMMEND);
          });
        }),
        u
      );
    }
    function p(e, t, n, r, o, a, i) {
      var l = new Map();
      return (
        t
          .map(function (t) {
            return m(e, t, n, r, o, a, i);
          })
          .forEach(function (e) {
            e.forEach(function (e, t) {
              var n = l.get(t) || [];
              (e.forEach(function (e) {
                n.some(function (t) {
                  return t.key === e.key;
                }) || n.push(e);
              }),
                l.set(t, n));
            });
          }),
        l
      );
    }
    function _(e, t, n, r, a, i, l) {
      var s = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(t),
        u = m(e, s, n, r, a, i, l),
        c = t.get("optimization_goal");
      return (
        o("AdsVideoBuyingStoreUtils").addVideoBuyingVideoListErrors(e, u, [c]),
        u
      );
    }
    function f(e, t, n, a, i, l) {
      var s = o("AdsVideoSpecsUtils").getVideoSpecsForPlacementObjective(
          t,
          n,
          i,
        ),
        u = o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveFacebookInstreamVideosPlacement(t)
          ? r("AdsError").Level.WARN
          : r("AdsError").Level.RECOMMEND,
        c = o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveAudienceNetworkInstreamPlacement(t)
          ? r("AdsError").Level.WARN
          : r("AdsError").Level.RECOMMEND,
        d = { facebookInstreamOnly: u, audienceNetworkInstreamOnly: c };
      return g(e, s, t, a, d, l, n, i);
    }
    function g(t, n, a, i, l, s, c, d, m) {
      l === void 0 &&
        (l = {
          facebookInstreamOnly: r("AdsError").Level.RECOMMEND,
          audienceNetworkInstreamOnly: r("AdsError").Level.RECOMMEND,
        });
      var p = o("AdsVideoSpecsUtils").transformVideoSpecsBasedOnBuyingType(
          a,
          n,
          i,
        ),
        _ = [];
      if (
        (p.forEach(function (e) {
          _ = _.concat(h(t, e, l, s, c, d, m));
        }),
        a && (_ = o("AdsErrorUtils").giveRecommendationsForSoftErrors(_, [a])),
        t.height && t.width)
      ) {
        var f = t.width / t.height;
        f < e &&
          (d !== !0
            ? _.push(
                new (r("AdsError"))(
                  3858159,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "This video will be masked on Mobile News Feed, Instagram Feed, Instagram Explore, and Instagram Profile feed. The tallest supported aspect ratio for images without links and videos on these placements is vertical (4:5).",
                    );
                  }, {}),
                  {
                    level: r("AdsError").Level.RECOMMEND,
                    path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                      .VIDEO_DATA.VIDEO_ID,
                  },
                ),
              )
            : _.push(
                new (r("AdsError"))(
                  2446275,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "This video will be masked on Mobile News Feed. The tallest supported aspect ratio for images without links and videos on Mobile Feed is vertical (4:5).",
                    );
                  }, {}),
                  {
                    level: r("AdsError").Level.RECOMMEND,
                    path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                      .VIDEO_DATA.VIDEO_ID,
                  },
                ),
              ));
      }
      return _;
    }
    function h(e, t, n, o, a, i, l) {
      n === void 0 &&
        (n = {
          facebookInstreamOnly: r("AdsError").Level.RECOMMEND,
          audienceNetworkInstreamOnly: r("AdsError").Level.RECOMMEND,
        });
      var s = r("AdsVideoValidationPlugins")
        .withShape({ platform: t.platform, position: t.position })
        .getList()
        .first();
      return s ? s.getErrors(e, t, n, o, a, i, l) : c;
    }
    ((l.getValidationMapByPlacementForVideoList = m),
      (l.getValidationMapByPlacementsForVideoList = p),
      (l.getErrorMapByCampaignForVideoList = _),
      (l.validateVideoForPlacementBuyingTypeObjective = f),
      (l.validateVideo = g),
      (l.validateVideoForSpec = h));
  },
  226,
);
