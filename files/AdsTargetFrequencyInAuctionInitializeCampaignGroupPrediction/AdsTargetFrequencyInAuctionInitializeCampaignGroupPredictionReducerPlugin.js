__d(
  "AdsTargetFrequencyInAuctionInitializeCampaignGroupPredictionReducerPlugin",
  [
    "AdsDataAtom",
    "AdsTargetFrequencyInAuctionInitializeCampaignGroupPredictionActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorHostIDs",
    "adsUEditorAccountSelector",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")(
        "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
      ).__setRef(
        "AdsTargetFrequencyInAuctionInitializeCampaignGroupPredictionReducerPlugin",
      ),
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (t, n, a) {
            var i = a.account,
              l = a.campaignIDToCampaignGroupMap,
              u = function (u) {
                var a = o(
                  "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
                ).buildInitialCampaignGroupPredictionParams(
                  u,
                  n.campaignIDs,
                  n.frequencyControlSpecs,
                  l,
                  t,
                  i,
                );
                a != null &&
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      s.onReadyImmediately(function (e) {
                        e.dispatch({
                          campaignGroupIDs: [u],
                          params: a,
                          hostID: r("AdsUEditorHostIDs").EDITING,
                          source: "cg_direct",
                        });
                      });
                    },
                  );
              };
            for (var c of n.campaignGroupIDs) u(c);
            return t;
          },
          o(
            "AdsTargetFrequencyInAuctionInitializeCampaignGroupPredictionActionFlux",
          ).actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
