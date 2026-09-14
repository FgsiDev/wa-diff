__d(
  "AdsCampaignSetStatusDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            t.status === "ACTIVE"
              ? "campaign_set_active"
              : "campaign_set_pause",
            { object_ids: t.campaignIDs },
            "run_status",
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
