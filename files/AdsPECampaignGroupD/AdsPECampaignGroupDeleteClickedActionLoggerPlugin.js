__d(
  "AdsPECampaignGroupDeleteClickedActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = "delete_clicked";
          t.campaignGroupIDs.forEach(function (t) {
            return r("adsMgmtLogger")(e, { campaign_group_id: t });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
