__d(
  "AdsUEditorCampaignGroupTimeSuggestionReducerPlugins",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
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
        reduce: (e = o("AdsUEditorCampaignGroupReducerUtils")).createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    return o("AdsMutators").chain(
                      r(
                        "AdsCampaignGroupRecordAccessors",
                      ).time_suggestion.is_enabled.set(!0),
                      r(
                        "AdsCampaignGroupRecordAccessors",
                      ).time_suggestion.high_demand_periods.set(
                        r("immutable").fromJS(
                          o(
                            "TimeSuggestionReducerUtils",
                          ).getPeriodsAfterCreation(e, t, a.timezone_id),
                        ),
                      ),
                    )(e);
                  },
                );
          },
          r("AdsUEditorInitTimeSuggestionActionFlux").actionType,
        ),
      },
      u = {
        reduce: e.createReducer(
          {},
          function (e, t) {
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    return r(
                      "AdsCampaignGroupRecordAccessors",
                    ).time_suggestion.is_enabled.set(t.isEnabled, e);
                  },
                );
          },
          r("AdsUEditorSetTimeSuggestionStateActionFlux").actionType,
        ),
      },
      c = {
        reduce: e.createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    var n = o(
                      "TimeSuggestionReducerUtils",
                    ).getPeriodsAfterUpdate(e, t, a.timezone_id);
                    return r(
                      "AdsCampaignGroupRecordAccessors",
                    ).time_suggestion.high_demand_periods.set(
                      r("immutable").fromJS(n),
                      e,
                    );
                  },
                );
          },
          r("AdsUEditorUpdateHighDemandPeriodsActionFlux").actionType,
        ),
      },
      d = {
        reduce: e.createReducer(
          {},
          function (e, t) {
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    var n = o(
                      "TimeSuggestionReducerUtils",
                    ).getPeriodsAfterDeletion(e, t);
                    return r(
                      "AdsCampaignGroupRecordAccessors",
                    ).time_suggestion.high_demand_periods.set(
                      r("immutable").fromJS(n),
                      e,
                    );
                  },
                );
          },
          r("AdsUEditorDeleteHighDemandPeriodsActionFlux").actionType,
        ),
      },
      m = {
        reduce: e.createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return t.campaignGroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignGroupIDs,
                  function (e) {
                    var n = o(
                      "TimeSuggestionReducerUtils",
                    ).getPeriodsAfterCreation(e, t, a.timezone_id);
                    return r(
                      "AdsCampaignGroupRecordAccessors",
                    ).time_suggestion.high_demand_periods.set(
                      r("immutable").fromJS(n),
                      e,
                    );
                  },
                );
          },
          r("AdsUEditorCreateHighDemandPeriodsActionFlux").actionType,
        ),
      };
    ((l.AdsUEditorCampaignGroupInitTimeSuggestionReducerPlugin = s),
      (l.AdsUEditorCampaignGroupSetTimeSuggestionStateReducerPlugin = u),
      (l.AdsUEditorCampaignGroupUpdateHighDemandPeriodsReducerPlugin = c),
      (l.AdsUEditorCampaignGroupDeleteHighDemandPeriodsReducerPlugin = d),
      (l.AdsUEditorCampaignGroupCreateHighDemandPeriodsReducerPlugin = m));
  },
  98,
);
