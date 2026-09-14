__d(
  "AdsUEditorCreateDuplicateCampaignByTargetingReducerPlugin",
  [
    "AdsAudienceSplittingUtils",
    "AdsCampaignRecordAccessors",
    "AdsCopyDataManager",
    "AdsCopySource",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCreateDuplicateCampaignByTargetingActionFlux",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        { account: r("adsUEditorAccountSelector") },
        function (e, t, n) {
          var r = n.account,
            a = t.audienceSplittingSpecs,
            i = t.budget,
            l = t.campaignIDs,
            u = t.draftID;
          return o("AdsMutators").mutateEach(e, l, function (e) {
            return s(e, u, a, i, r.account_id);
          });
        },
        o("AdsUEditorCreateDuplicateCampaignByTargetingActionFlux").actionType,
      ),
    };
    function s(e, t, n, a, i) {
      var l = n[0];
      if (t != null) {
        var s = { audienceSplittingSpecs: [].concat(n), budget: a },
          c = { audiences: s, count: n.length },
          d = {
            ids: [e.id],
            accountID: i,
            draftID: t,
            newParentID: null,
            extraData: c,
            requestID: 0,
          };
        o("AdsCopyDataManager").copy(
          [d],
          r("AdsCopySource").DUPLICATE_CAMPAIGN_BY_TARGETING,
          "ad_set",
        );
      }
      return u(e, l, a);
    }
    function u(e, t, n) {
      var a = o("AdsAudienceSplittingUtils").applySplittingSpec(e, t, n);
      return o("AdsMutators").chain(
        function (e) {
          return a.daily_budget != null
            ? r("AdsCampaignRecordAccessors").daily_budget.set(
                a.daily_budget,
                e,
              )
            : e;
        },
        function (e) {
          return a.lifetime_budget != null
            ? r("AdsCampaignRecordAccessors").lifetime_budget.set(
                a.lifetime_budget,
                e,
              )
            : e;
        },
        function (e) {
          return a.name != null
            ? r("AdsCampaignRecordAccessors").name.set(a.name, e)
            : e;
        },
        function (e) {
          return a.saved_audience != null
            ? r("AdsCampaignRecordAccessors").saved_audience.set(
                a.saved_audience,
                e,
              )
            : e;
        },
        function (e) {
          return a.saved_audience_id != null
            ? r("AdsCampaignRecordAccessors").saved_audience_id.set(
                a.saved_audience_id,
                e,
              )
            : e;
        },
        function (e) {
          return a.targeting != null
            ? r("AdsCampaignRecordAccessors").targeting.set(a.targeting, e)
            : e;
        },
      )(e);
    }
    var c = e;
    l.default = c;
  },
  98,
);
