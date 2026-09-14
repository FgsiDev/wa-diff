__d(
  "clearMessageMarketingPlacementAndDownstreamSettingsMutator",
  [
    "AdsAPITargetFields",
    "AdsAdgroupStoreUtils",
    "AdsAutomaticPlacementMutationBehavior",
    "AdsDataAtom",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementReducerUtils",
    "AdsUEditorAdgroupMessageMarketingClearSettingsAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      return (
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("promiseDone")(
            o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([t.id]),
            function (e) {
              r(
                "AdsUEditorAdgroupMessageMarketingClearSettingsAction",
              ).dispatch(
                { adgroupIDs: e, hostID: n },
                {
                  line: "36",
                  module:
                    "clearMessageMarketingPlacementAndDownstreamSettingsMutator.js",
                  moduleID: i.id,
                },
              );
            },
          );
        }),
        o("AdsPlacementReducerUtils").updatePlacementSpec(
          o("AdsPlacementAPISpecWriterUtils").removeGroupAnyway(
            t,
            "whatsapp/marketing_messages",
            a,
            r("AdsAPITargetFields").WHATSAPP_POSITIONS,
            "whatsapp",
            r("AdsAutomaticPlacementMutationBehavior").KEEP_AUTOMATIC,
          ),
        )
      );
    }
    l.default = s;
  },
  98,
);
