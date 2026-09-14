__d(
  "AdsPredictionStatusProviderUpdateOnPredictionLoadReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "AdsCampaignDraftFragmentStore",
    "ReachFrequencyPredictionModes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e,
          o,
          a,
          i,
          l,
          u = s(t),
          c = t.target_frequency,
          d = t.target_frequency_reset_period;
        if (u == null || c == null || d == null) return null;
        var m = [];
        (t.destination_id != null && m.push(t.destination_id),
          t.instagram_destination_id != null &&
            m.push(t.instagram_destination_id));
        var p = {
          account_id: String(t.account_id),
          budget: t.external_budget,
          buying_type: t.buying_type,
          campaign_group_id: t.campaign_group_id,
          currency: t.currency,
          day_parting_schedule: t.day_parting_schedule,
          destination_ids: m,
          grp_buying: !1,
          is_balanced_frequency: (e = t.is_balanced_frequency) != null ? e : !0,
          is_higher_average_frequency:
            (o = t.is_higher_average_frequency) != null ? o : !1,
          is_reach_and_frequency_io_buying: (a = t.is_io) != null ? a : !1,
          is_reserved_buying: (i = t.is_trp) != null ? i : !1,
          objective: (l = t.odax_objective_name) != null ? l : t.objective_name,
          optimization_goal: u,
          prediction_mode: r("ReachFrequencyPredictionModes").BUDGET.value,
          source: "ADS_CREATION.AUCTION.CAMPAIGN",
          start_time: t.campaign_time_start,
          stop_time: t.campaign_time_stop,
          target_frequency: c,
          target_frequency_reset_period: d,
          target_spec: JSON.parse(JSON.stringify(t.target_spec)),
          timezone: t.timezone_id,
        };
        return (
          n != null &&
            !r("AdsCampaignDraftFragmentStore").isNew(n) &&
            (p.existing_campaign_id = n),
          p
        );
      },
      s = function (t) {
        return t.optimization_goal_name ===
          r("AdsAPIOptimizationGoals").IMPRESSIONS
          ? r("AdsAPIOptimizationGoals").REACH
          : t.optimization_goal_name;
      },
      u = {
        reduce: function (n, o) {
          var t = n;
          return (
            o.predictions.forEach(function (n) {
              if (n.buying_type === r("AdsBuyingTypes").AUCTION) {
                var o = n.campaign_id;
                if (o == null) {
                  var a = r("AdsCampaignDraftFragmentStore")
                    .getState()
                    .fragments.value();
                  for (var i of a) {
                    var l,
                      s = i[0],
                      u = i[1],
                      c =
                        (l = u.getValue()) == null ||
                        (l = l.values.get("rf_prediction_id")) == null
                          ? void 0
                          : l.newValue;
                    c != null && n.id === c && (o = s);
                  }
                  if (o == null) return;
                }
                t.has(o) ||
                  (t = t.set(o, {
                    error: n.error != null ? { message: n.error } : null,
                    params: e(n, o),
                    success: n.error == null,
                  }));
              }
            }),
            t
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
