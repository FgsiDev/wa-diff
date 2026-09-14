__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionBudgetAndScheduleUpdateReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignTargetFrequencyInAuctionBudgetAndScheduleUpdateActionFlux",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")(
        "AdsUEditorCampaignDeliveryChangeBudgetModeAction",
      ).__setRef(
        "AdsUEditorCampaignTargetFrequencyInAuctionBudgetAndScheduleUpdateReducerPlugin",
      ),
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              var e = n.effectiveLifetimeBudget;
              e != null &&
                s.onReadyImmediately(function (t) {
                  t.dispatch({
                    hostID: n.hostID,
                    campaignGroupIDs: n.campaignGroupIDs,
                    campaignIDs: n.campaignIDs,
                    campaignIDsToUpdate: n.campaignIDs,
                    budgetAmount: e,
                    budgetMode: "lifetime",
                    defaultEndDate: n.effectiveEndDateValue,
                  });
                });
            });
            var a = n.startOfNextDayDate,
              i = n.effectiveEndDateValue;
            return o("AdsMutators").mutateEach(
              t,
              n.campaignIDs,
              function (e, t) {
                return o("AdsMutators").chain(
                  function (e) {
                    return a != null
                      ? r("AdsCampaignRecordAccessors").start_time.set(
                          a.toISOString(),
                          e,
                        )
                      : e;
                  },
                  function (e) {
                    return n.isCampaignTooShort && i != null
                      ? r("AdsCampaignRecordAccessors").end_time.set(
                          i.toISOString(),
                          e,
                        )
                      : e;
                  },
                )(e);
              },
            );
          },
          r(
            "AdsUEditorCampaignTargetFrequencyInAuctionBudgetAndScheduleUpdateActionFlux",
          ).actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
