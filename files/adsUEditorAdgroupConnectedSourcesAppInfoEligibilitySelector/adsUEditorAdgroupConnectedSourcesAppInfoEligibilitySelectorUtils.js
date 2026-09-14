__d(
  "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelectorUtils",
  ["AdsAutomaticFlowUtils", "AdsMetadataConnectedSourcesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t.length === 0) return !1;
      var n = t[0];
      return !(
        !o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(n) ||
        e.some(function (e) {
          var t = e.adgroup,
            n = e.campaign,
            r = e.campaignGroup;
          return !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForAppInformationByCampaignAndAdgroup(n, r, t);
        })
      );
    }
    l.adsUEditorAdgroupConnectedSourcesAppInfoEligibility = e;
  },
  98,
);
