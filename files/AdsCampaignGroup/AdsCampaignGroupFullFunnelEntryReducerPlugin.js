__d(
  "AdsCampaignGroupFullFunnelEntryReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignStructureInitCreationAction",
    "AdsDataAtom",
    "AdsFullFunnelEntryActionFlux",
    "AdsMutators",
    "AdsObjectTypes",
    "AdsPECreationSource",
    "AdsUEditorCampaignGroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return (
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  var e;
                  n.campaignGroupIDs == null ||
                    n.campaignGroupIDs.length === 0 ||
                    r("AdsCampaignStructureInitCreationAction").dispatch(
                      {
                        isCreating: !0,
                        objectID: (e = n.campaignGroupIDs[0]) != null ? e : "",
                        objectType: r("AdsObjectTypes").CAMPAIGN,
                        creationSource: r("AdsPECreationSource")
                          .FULL_FUNNEL_SALES_CREATION,
                      },
                      {
                        line: "49",
                        module:
                          "AdsCampaignGroupFullFunnelEntryReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                },
              ),
              o("AdsMutators").mutateEach(t, n.campaignGroupIDs, function (e) {
                return o("AdsMutators").chain(
                  r("AdsCampaignGroupRecordAccessors").is_full_funnel.set(
                    n.isFullFunnel,
                  ),
                  r("AdsCampaignGroupRecordAccessors").objective.set(
                    r("AdsAPIObjectives").OUTCOME_SALES,
                  ),
                )(e);
              })
            );
          },
          r("AdsFullFunnelEntryActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
