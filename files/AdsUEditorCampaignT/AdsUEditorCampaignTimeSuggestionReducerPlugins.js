__d(
  "AdsUEditorCampaignTimeSuggestionReducerPlugins",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCreateHighDemandPeriodsActionFlux",
    "AdsUEditorDeleteHighDemandPeriodsActionFlux",
    "AdsUEditorInitTimeSuggestionActionFlux",
    "AdsUEditorSetTimeSuggestionStateActionFlux",
    "AdsUEditorUpdateHighDemandPeriodsActionFlux",
    "TimeSuggestionReducerUtils",
    "adsUEditorAccountSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: (e = o("AdsUEditorCampaignReducerUtils")).createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return t.campaignIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).time_suggestion.is_enabled.set(!0),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).time_suggestion.high_demand_periods.set(
                      r("immutable").fromJS(
                        o("TimeSuggestionReducerUtils").getPeriodsAfterCreation(
                          e,
                          t,
                          a.timezone_id,
                        ),
                      ),
                    ),
                  )(e);
                });
          },
          r("AdsUEditorInitTimeSuggestionActionFlux").actionType,
        ),
      },
      u = {
        reduce: e.createReducer(
          {},
          function (e, t) {
            return t.campaignIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).time_suggestion.is_enabled.set(t.isEnabled, e);
                });
          },
          r("AdsUEditorSetTimeSuggestionStateActionFlux").actionType,
        ),
      },
      c = {
        reduce: e.createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return t.campaignIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n = o("TimeSuggestionReducerUtils").getPeriodsAfterUpdate(
                    e,
                    t,
                    a.timezone_id,
                  );
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).time_suggestion.high_demand_periods.set(
                    r("immutable").fromJS(n),
                    e,
                  );
                });
          },
          r("AdsUEditorUpdateHighDemandPeriodsActionFlux").actionType,
        ),
      },
      d = {
        reduce: e.createReducer(
          {},
          function (e, t) {
            return t.campaignIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n = o(
                    "TimeSuggestionReducerUtils",
                  ).getPeriodsAfterDeletion(e, t);
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).time_suggestion.high_demand_periods.set(
                    r("immutable").fromJS(n),
                    e,
                  );
                });
          },
          r("AdsUEditorDeleteHighDemandPeriodsActionFlux").actionType,
        ),
      },
      m = {
        reduce: e.createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return t.campaignIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n = o(
                    "TimeSuggestionReducerUtils",
                  ).getPeriodsAfterCreation(e, t, a.timezone_id);
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).time_suggestion.high_demand_periods.set(
                    r("immutable").fromJS(n),
                    e,
                  );
                });
          },
          r("AdsUEditorCreateHighDemandPeriodsActionFlux").actionType,
        ),
      };
    ((l.AdsUEditorCampaignInitTimeSuggestionReducerPlugin = s),
      (l.AdsUEditorCampaignSetTimeSuggestionStateReducerPlugin = u),
      (l.AdsUEditorCampaignUpdateHighDemandPeriodsReducerPlugin = c),
      (l.AdsUEditorCampaignDeleteHighDemandPeriodsReducerPlugin = d),
      (l.AdsUEditorCampaignCreateHighDemandPeriodsReducerPlugin = m));
  },
  98,
);
