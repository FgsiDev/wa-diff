__d(
  "AdsAdgroupPageActorOverridePrefiller",
  ["AdsAPIAdgroupPaths", "AdsAPICampaignRecordUtils", "AdsAppUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "page_actor_override",
        genPaths: function (t) {
          var e;
          if (
            ((e = t.original.adgroup.creative) == null
              ? void 0
              : e.use_page_actor_override) == null
          )
            return [];
          var n = t.current.campaignGroup.objective,
            a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              n,
              t.current.campaign,
            );
          return r("AdsAppUtils").isAppObjective(n, a)
            ? [
                {
                  current:
                    r("AdsAPIAdgroupPaths").CREATIVE.USE_PAGE_ACTOR_OVERRIDE,
                  original:
                    r("AdsAPIAdgroupPaths").CREATIVE.USE_PAGE_ACTOR_OVERRIDE,
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
