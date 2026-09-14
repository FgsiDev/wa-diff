__d(
  "AdsUEditorCampaignSetSpecialObjectivesReducerPlugin",
  [
    "AdsDataAtom",
    "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
    "AdsTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignGroupSetSpecialObjectivesActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignSetObjectiveReduceFn",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t;
            }),
          },
          function (t, n, a) {
            var l = r("adsUEditorCampaignSetObjectiveReduceFn")(t, n, a),
              s = n.campaignIDs.filter(function (e) {
                var t,
                  n =
                    (t = l.get(e)) == null || (t = t.getValue()) == null
                      ? void 0
                      : t.optimization_goal;
                return (
                  n != null &&
                  o(
                    "AdsTargetFrequencyInAuctionUtils",
                  ).shouldEnableTargetFrequencyByDefault(n)
                );
              });
            return (
              s.length > 0 &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r(
                      "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
                    ).dispatch(
                      { campaignIDs: s, hostID: n.hostID },
                      {
                        line: "60",
                        module:
                          "AdsUEditorCampaignSetSpecialObjectivesReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
              l
            );
          },
          o("AdsUEditorCampaignGroupSetSpecialObjectivesActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
