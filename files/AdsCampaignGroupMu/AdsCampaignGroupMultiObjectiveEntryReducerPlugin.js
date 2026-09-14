__d(
  "AdsCampaignGroupMultiObjectiveEntryReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignStructureInitCreationAction",
    "AdsDataAtom",
    "AdsMultiObjectiveEntryActionFlux",
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
                          .MULTI_OBJECTIVE_CREATION,
                      },
                      {
                        line: "41",
                        module:
                          "AdsCampaignGroupMultiObjectiveEntryReducerPlugin.js",
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
                    r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
                  ),
                )(e);
              })
            );
          },
          r("AdsMultiObjectiveEntryActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
