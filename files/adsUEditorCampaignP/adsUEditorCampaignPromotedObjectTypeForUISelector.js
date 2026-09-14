__d(
  "adsUEditorCampaignPromotedObjectTypeForUISelector",
  [
    "AdsAPICampaignRecordUtils",
    "AdsBulkValueUtils",
    "AdsPromotedObjectTypeOmnichannelVariationUtils",
    "AdsPromotedObjectUtils",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            var t = e.campaign;
            return o("AdsAPICampaignRecordUtils").getDestinationType(t);
          });
        }),
        { name: i.id + ".adsUEditorCampaignDerivedDestinationTypeSelector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"), e],
        function (t, n) {
          return o("AdsBulkValueUtils").parallelIterator(
            function (e) {
              var t = e[0],
                n = e[1];
              return o(
                "AdsPromotedObjectTypeOmnichannelVariationUtils",
              ).addVariation(o("AdsPromotedObjectUtils").getTypeForUI(t), n);
            },
            [t, n],
          );
        },
        { name: i.id + ".adsUEditorCampaignPromotedObjectTypeForUISelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
