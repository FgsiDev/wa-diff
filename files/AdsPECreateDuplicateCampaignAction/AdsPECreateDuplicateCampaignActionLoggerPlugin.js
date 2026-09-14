__d(
  "AdsPECreateDuplicateCampaignActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("duplicate_campaigns", {
            duplicate_campaign_group_mode: t.campaignGroupCreationData.mode,
            object_creation_source: t.commonCreationData.source,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
