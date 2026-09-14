__d(
  "adsUEditorIsClickToMarketplaceAdgroupSelector",
  [
    "AdCampaignDestination",
    "AdsBulkValueUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
          return e.destination_type;
        }),
      ],
      function (t) {
        return (
          o("AdsBulkValueUtils").getUniformValue(t, "mixed") ===
          r("AdCampaignDestination").FACEBOOK
        );
      },
      { name: i.id },
    );
    l.default = e;
  },
  98,
);
