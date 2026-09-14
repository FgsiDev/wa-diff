__d(
  "AdsPECampaignGroupCollaborativeAdsPartnerInfoChangeActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("collaborative_ads_toggle_change", {
            new_value: t.collaborativeAdsPartnerInfo,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
