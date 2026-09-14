__d(
  "AdsAdgroupURLTagsPrefiller",
  ["AdsAPIAdgroupPaths", "AdsAPICampaignRecordUtils", "AdsAdgroupURLTagsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "trackings",
        genPaths: function (t) {
          var e = t.current.campaignGroup.objective,
            n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              e,
              t.current.campaign,
            );
          return o("AdsAdgroupURLTagsUtils").supportsURLTags(
            e,
            n,
            t.current.campaign.optimization_goal,
          )
            ? [
                {
                  current: r("AdsAPIAdgroupPaths").CREATIVE.URL_TAGS,
                  original: r("AdsAPIAdgroupPaths").CREATIVE.URL_TAGS,
                },
              ]
            : [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
