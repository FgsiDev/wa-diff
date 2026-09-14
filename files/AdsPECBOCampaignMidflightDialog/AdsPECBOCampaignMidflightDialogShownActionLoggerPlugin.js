__d(
  "AdsPECBOCampaignMidflightDialogShownActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("cbo_campaign_toggle_off_dialog_show", {
            campaign_id: t.objectID,
            message: t.midflightActionType + "_" + t.unifiedIssueType,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
