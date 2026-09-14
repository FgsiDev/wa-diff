__d(
  "AdsCampaignGroupSetStatusDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.status !== "ACTIVE" &&
            r("adsMgmtLogger")(
              "campaign_group_set_pause",
              { object_ids: t.ids },
              "run_status",
            );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
