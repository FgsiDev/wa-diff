__d(
  "AdsUEditorCampaignRFChangeDestinationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsReachFrequencyDestinationUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignRFChangeDestinationActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
          },
          function (e, t, n) {
            var a = n.objectives;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var i = t.isApp
                    ? o("AdsMutators").chain(
                        r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.application_id.set(t.destinationID),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.object_store_url.set(t.appStoreUrl),
                      )(e)
                    : e,
                  l = a.get(n);
                return l != null &&
                  o(
                    "AdsReachFrequencyDestinationUtils",
                  ).isDestinationPromotedObjectPage(l)
                  ? r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
                      t.destinationID,
                      i,
                    )
                  : i;
              },
            );
          },
          o("AdsUEditorCampaignRFChangeDestinationActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
