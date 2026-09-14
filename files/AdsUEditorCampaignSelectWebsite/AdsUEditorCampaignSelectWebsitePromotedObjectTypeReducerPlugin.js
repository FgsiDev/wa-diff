__d(
  "AdsUEditorCampaignSelectWebsitePromotedObjectTypeReducerPlugin",
  [
    "invariant",
    "AdsMutators",
    "AdsProfileVisitSABRBudgetRestoreUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
    "adsCampaignSelectWebsitePromotedObjectTypeMutation",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignGroupsSelector")],
        function (t) {
          return r("immutable").Map(
            t.map(function (e) {
              return [e.id, e];
            }),
          );
        },
        { name: i.id + ".campaignGroupsByIDSelector" },
      ),
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { campaignGroupsByID: e, account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupsByID,
              l = t.campaignIDs,
              u = o("AdsMutators").mutateEach(e, l, function (e) {
                var t = e.campaign_id,
                  n = r("isTruthy")(t) ? i.get(t) : i.first();
                return (
                  n || s(0, 1636),
                  r("adsCampaignSelectWebsitePromotedObjectTypeMutation")(
                    e,
                    n,
                    a,
                  )
                );
              });
            return o(
              "AdsProfileVisitSABRBudgetRestoreUtils",
            ).restoreSABRDefaultedBudgets(u, l);
          },
          o("AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
