__d(
  "adsUEditorAdgroupConnectedSourcesMediaPickerEligibilitySelector",
  [
    "AdsMetadataConnectedSourcesUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        o("adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector,
      ],
      function (t, n) {
        return t.some(function (e) {
          var t = e.adgroup,
            r = e.campaign,
            a = e.campaignGroup;
          return (
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForConnectedCatalogsByCatalogEligibility(r, a, n) &&
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForMediaPickerByCampaignAndAdgroupAndExperiment(r, a, t)
          );
        });
      },
      {
        name:
          i.id +
          ".adsUEditorAdgroupConnectedSourcesMediaPickerEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupConnectedSourcesMediaPickerEligibilitySelector = e;
  },
  98,
);
