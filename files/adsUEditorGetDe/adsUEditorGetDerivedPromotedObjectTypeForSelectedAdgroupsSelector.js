__d(
  "adsUEditorGetDerivedPromotedObjectTypeForSelectedAdgroupsSelector",
  [
    "AdsAPICampaignRecordUtils",
    "AdsPromotedObjectTypeUIProvider",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r("AdsPromotedObjectTypeUIProvider").toFluxSelector(),
        ],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t) {
          return e.map(function (e) {
            var n = e.campaign,
              r = e.campaignGroup;
            return o("AdsAPICampaignRecordUtils").getDerivedPromotedObjectType(
              n,
              r,
              t.get(n.id),
            );
          });
        }),
        {
          name:
            i.id +
            ".adsUEditorGetDerivedPromotedObjectTypeForSelectedAdgroupSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
