__d(
  "adsUEditorAdgroupIsEngagementOnYourAdSetupSelector",
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
        return t.some(function (e) {
          var t = e.campaign,
            n = e.campaignGroup;
          return o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEngagementOnYourAdSetup(t, n);
        });
      },
      { name: i.id + ".adsUEditorAdgroupIsEngagementOnYourAdSetupSelector" },
    );
    l.adsUEditorAdgroupIsEngagementOnYourAdSetupSelector = e;
  },
  98,
);
