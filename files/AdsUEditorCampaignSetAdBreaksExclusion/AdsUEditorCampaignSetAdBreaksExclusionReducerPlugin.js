__d(
  "AdsUEditorCampaignSetAdBreaksExclusionReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetAdBreaksExclusionActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                r("AdsCampaignRecordAccessors").is_ba_skip_delayed_eligible.set(
                  !t.value,
                  e,
                ),
              );
            });
          },
          o("AdsUEditorCampaignSetAdBreaksExclusionActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
