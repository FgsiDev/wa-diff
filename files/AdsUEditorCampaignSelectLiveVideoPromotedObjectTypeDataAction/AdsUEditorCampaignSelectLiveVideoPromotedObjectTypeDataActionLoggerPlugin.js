__d(
  "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionLoggerPlugin",
  ["AdsPromotedObjectTypes", "AdsUEditorHostIDs", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LiveBoostingFalcoEvent").__setRef(
        "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionLoggerPlugin",
      ),
      s = {
        log: function (n) {
          n.hostID === r("AdsUEditorHostIDs").EDITING &&
            e.onReady(function (e) {
              return e.log(function () {
                var e;
                return {
                  event: "conversion_location_change",
                  surface: "ads_manager",
                  ui_component: "conversion_location_field",
                  extra_data: {
                    old_value:
                      (e = n.logData.oldPromotedObjectType) != null ? e : "",
                    new_value: r("AdsPromotedObjectTypes").LIVE_VIDEO,
                    ad_account_id: n.logData.accountID,
                    objective: n.logData.objective,
                  },
                };
              });
            });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
