__d(
  "AdsUEditorCampaignSetBlockListsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBlockListsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.blockListIDs;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(s(e, n));
            });
          },
          o("AdsUEditorCampaignSetBlockListsActionFlux").actionType,
        ),
      },
      s = function (t, n) {
        return r(
          "AdsCampaignRecordAccessors",
        ).targeting.excluded_publisher_list_ids.set(r("immutable").List(n), t);
      },
      u = e;
    l.default = u;
  },
  98,
);
