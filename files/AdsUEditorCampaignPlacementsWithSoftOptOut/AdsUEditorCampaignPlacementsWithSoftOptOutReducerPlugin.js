__d(
  "AdsUEditorCampaignPlacementsWithSoftOptOutReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPositionPlugins",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignPlacementsWithSoftOptOutActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation,
              i = t.campaignIDs,
              l = t.positionPluginKeysToRemove,
              s = t.softOptOutPlacements,
              u = o("AdsMutators").mutateEach(e, i, function (e) {
                var t = e;
                return (
                  l.forEach(function (e) {
                    var n = r("AdsPlacementPositionPlugins").get(e);
                    if (n != null) {
                      var i = o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).getPositionFieldFromPositionPlugin(n);
                      t = o("AdsPlacementAPISpecWriterUtils").removeGroup(
                        t,
                        e,
                        a,
                        i,
                        n.platformKey,
                      );
                    }
                  }),
                  o("AdsPlacementReducerUtils").updatePlacementSoftOptOut(t, s)
                );
              });
            return u;
          },
          r("AdsUEditorCampaignPlacementsWithSoftOptOutActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
