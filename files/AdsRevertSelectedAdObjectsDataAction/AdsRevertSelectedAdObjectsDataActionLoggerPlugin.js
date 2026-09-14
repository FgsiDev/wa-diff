__d(
  "AdsRevertSelectedAdObjectsDataActionLoggerPlugin",
  [
    "AdsPERevertLoggerHelper",
    "adsMgmtAdgroupSelectedIdsByLevelSelector",
    "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
    "adsMgmtCampaignSelectedIdsByLevelSelector",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function () {
          var e = {
              campaignGroupIDs: r(
                "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
              )(),
              campaignIDs: r("adsMgmtCampaignSelectedIdsByLevelSelector")(),
              adgroupIDs: r("adsMgmtAdgroupSelectedIdsByLevelSelector")(),
            },
            t = o("AdsPERevertLoggerHelper").getRevertEvent(e),
            n = t[0],
            a = t[1];
          r("adsMgmtLogger")(
            n,
            o("AdsPERevertLoggerHelper").getRevertData(e),
            a,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
