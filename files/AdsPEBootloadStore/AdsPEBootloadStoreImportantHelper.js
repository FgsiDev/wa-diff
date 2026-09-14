__d(
  "AdsPEBootloadStoreImportantHelper",
  ["Bootloader", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("Bootloader").loadModules(
        [
          "AdsPETablePublishingStatusContainer.react",
          "adsAdgroupValidationErrorsSelectors",
          "adsCampaignGroupValidationErrorsSelectors",
          "adsCampaignValidationErrorsSelectors",
          "AdsAccountValidationStore",
        ],
        r("emptyFunction"),
        "AdsPEBootloadStoreImportantHelper",
      );
    }
    l.loadImportantBootloadModules = e;
  },
  98,
);
