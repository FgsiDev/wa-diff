__d(
  "adsAdgroupCreativeWizardIsPreSetupSelector",
  [
    "AdsCreativeEndStateV2Utils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsVideoUploadInFlightSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        o("adsVideoUploadInFlightSelectors").isVideoUploadInFlight,
      ],
      function (t, n) {
        return t.some(function (e) {
          var t = e.adgroup,
            r = e.campaign,
            a = e.campaignGroup;
          return o(
            "AdsCreativeEndStateV2Utils",
          ).isPreWizardSetupAndEligibleByExperiment(r, t, a, n);
        });
      },
      { name: i.id + ".adsAdgroupCreativeWizardIsPreSetupSelector" },
    );
    l.adsAdgroupCreativeWizardIsPreSetupSelector = e;
  },
  98,
);
