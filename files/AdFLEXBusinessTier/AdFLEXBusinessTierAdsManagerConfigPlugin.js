__d(
  "AdFLEXBusinessTierAdsManagerConfigPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "flexBusinessTierConfig",
        key: "adsManager",
        tool: "MANAGE_ADS",
        getBusinessTierForCampaignGroups: function (t, n) {
          return r("LoadObject").withValue("ADS", { creatorModuleID: i.id });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
