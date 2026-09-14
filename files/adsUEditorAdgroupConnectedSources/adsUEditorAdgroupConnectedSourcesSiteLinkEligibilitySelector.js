__d(
  "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
  [
    "AdsMetadataConnectedSourcesUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        return !t.some(function (e) {
          var t = e.adgroup,
            n = e.campaign,
            r = e.campaignGroup;
          return !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForSiteExtensionsByCampaignAndAdgroup(n, r, t);
        });
      },
      {
        name:
          i.id +
          ".adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector = e;
  },
  98,
);
