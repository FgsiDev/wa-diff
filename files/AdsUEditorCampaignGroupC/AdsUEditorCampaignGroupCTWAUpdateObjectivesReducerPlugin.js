__d(
  "AdsUEditorCampaignGroupCTWAUpdateObjectivesReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsConvertCampaignGroupByObjectiveUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    var n = e;
                    return (
                      t.isChangingAllCampaigns !== !0 &&
                        e.budget_strategy === "CAMPAIGN_FLEX_BUDGET" &&
                        (n = o(
                          "AdsConvertCampaignGroupByObjectiveUtils",
                        ).disableBudgetFlex(e)),
                      t.shouldChangeToMessagesObjective === !0
                        ? o(
                            "AdsConvertCampaignGroupByObjectiveUtils",
                          ).convertCampaignGroup(
                            n,
                            t.isODAXCampaignGroup === !0
                              ? r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
                              : r("AdsAPIObjectives").MESSAGES,
                          )
                        : n
                    );
                  },
                );
          },
          [
            r(
              "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
