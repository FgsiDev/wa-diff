__d(
  "AdsUEditorCampaignSetPlacementDataActionLoggerPlugin",
  ["AdsUEditorCampaignSetPlacementDataActionFlux", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "campaign_set_placement_from_mixed",
            babelHelpers.extends(
              {
                action_type: o("AdsUEditorCampaignSetPlacementDataActionFlux")
                  .actionType,
                adgroup_ids: t.adgroupIDs,
                campaign_ids: t.campaignIDs,
                is_switch_to_bulk_placement_editing_from_mixed:
                  t.isSwitchToBulkPlacementEditingFromMixed,
              },
              t.logData,
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
