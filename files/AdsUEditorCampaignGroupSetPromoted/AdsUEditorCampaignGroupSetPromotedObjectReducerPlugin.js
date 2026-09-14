__d(
  "AdsUEditorCampaignGroupSetPromotedObjectReducerPlugin",
  [
    "AdsAutomatedAdSpecMutationReason",
    "AdsAutomatedAdSpecMutationUseCaseName",
    "AdsCampaignGroupRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetPromotedCatalogActionFlux",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
    "adsAutomatedAdSpecMutation",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (t, n) {
            var a = o("AdsMutators").mutateEach(
              t,
              n.campaignGroupIDs,
              function (e) {
                return n.catalogID != null
                  ? r(
                      "AdsCampaignGroupRecordAccessors",
                    ).promoted_object.product_catalog_id.set(n.catalogID, e)
                  : r(
                      "AdsCampaignGroupRecordAccessors",
                    ).promoted_object.product_catalog_id.delete(e);
              },
            );
            return (
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  o(
                    "adsAutomatedAdSpecMutation",
                  ).maybeHandleAutomatedAdSpecMutation(
                    r("justknobx")._("515"),
                    {
                      useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
                        .ADS_CAMPAIGN_MESSAGE_MARKETING_SET_OR_CLEAR_FROM_UPSTREAM_PROMOTED_OBJECT_REDUCER,
                      campaignIDs: [].concat(n.campaignIDs),
                      campaignGroupIDs: [].concat(n.campaignGroupIDs),
                      mutationFn: function () {
                        r(
                          "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
                        ).dispatch(
                          {
                            hostID: n.hostID,
                            campaignIDs: n.campaignIDs,
                            changedSettings: {
                              hasProductCatalog: n.catalogID != null,
                            },
                          },
                          {
                            line: "58",
                            module:
                              "AdsUEditorCampaignGroupSetPromotedObjectReducerPlugin.js",
                            moduleID: i.id,
                          },
                        );
                      },
                      reasons: new Set([
                        r("AdsAutomatedAdSpecMutationReason").MISSING_TRIGGER,
                      ]),
                    },
                  );
                },
              ),
              a
            );
          },
          o("AdsUEditorCampaignGroupSetPromotedCatalogActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
