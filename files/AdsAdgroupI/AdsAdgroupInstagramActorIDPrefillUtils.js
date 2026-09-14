__d(
  "AdsAdgroupInstagramActorIDPrefillUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIInstagramPosition",
    "AdsAdgroupPrefillerUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
          e,
          r("AdsUnifiedCreativeAPIFields").instagramActorID,
        ),
        n = t.current,
        a = t.original,
        i = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(e.current.campaign),
        l = r("objectValues")(r("AdsAPIInstagramPosition"));
      return !n ||
        !a ||
        !l.some(function (e) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            i,
            e,
          );
        })
        ? []
        : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.original.adgroup)
          ? [
              {
                current: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID,
                original: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID,
              },
            ]
          : [{ current: n, original: a }];
    }
    l.genPaths = e;
  },
  98,
);
