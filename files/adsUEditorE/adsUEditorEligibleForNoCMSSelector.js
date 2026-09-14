__d(
  "adsUEditorEligibleForNoCMSSelector",
  ["adsUEditorCMSRemovalSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("adsUEditorCMSRemovalSelector").isEligibleForCMSRemoval({
          campaignID: e.campaignID,
          logExposureForCMSRemoval: e.logExposureForCMSRemoval,
        }),
        !0
      );
    }
    l.isEligibleForNoCMS = e;
  },
  98,
);
