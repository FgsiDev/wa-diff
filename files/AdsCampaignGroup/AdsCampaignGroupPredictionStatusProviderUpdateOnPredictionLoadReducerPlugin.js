__d(
  "AdsCampaignGroupPredictionStatusProviderUpdateOnPredictionLoadReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "ReachFrequencyPredictionModes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e,
          n,
          o,
          a,
          i,
          l = s(t),
          u = t.target_frequency,
          c = t.target_frequency_reset_period,
          d = t.campaign_group_id;
        if (l == null || u == null || c == null || d == null) return null;
        var m = [];
        return (
          t.destination_id != null && m.push(t.destination_id),
          t.instagram_destination_id != null &&
            m.push(t.instagram_destination_id),
          {
            account_id: String(t.account_id),
            budget: t.external_budget,
            buying_type: t.buying_type,
            campaign_group_id: d,
            currency: t.currency,
            day_parting_schedule: t.day_parting_schedule,
            destination_ids: m,
            grp_buying: !1,
            is_balanced_frequency:
              (e = t.is_balanced_frequency) != null ? e : !0,
            is_higher_average_frequency:
              (n = t.is_higher_average_frequency) != null ? n : !1,
            is_reach_and_frequency_io_buying: (o = t.is_io) != null ? o : !1,
            is_reserved_buying: (a = t.is_trp) != null ? a : !1,
            objective:
              (i = t.odax_objective_name) != null ? i : t.objective_name,
            optimization_goal: l,
            prediction_mode: r("ReachFrequencyPredictionModes").BUDGET.value,
            source: "ADS_CREATION.AUCTION.CAMPAIGN_GROUP",
            start_time: t.campaign_time_start,
            stop_time: t.campaign_time_stop,
            target_frequency: u,
            target_frequency_reset_period: c,
            target_spec: JSON.parse(JSON.stringify(t.target_spec)),
            timezone: t.timezone_id,
          }
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
              var o;
              if (n.buying_type === r("AdsBuyingTypes").AUCTION) {
                var a = n.campaign_group_id;
                a != null &&
                  (t.has(a) ||
                    (t = t.set(a, {
                      error: n.error != null ? { message: n.error } : null,
                      params: e(n),
                      prediction_id: (o = n.id) != null ? o : null,
                      success: n.error == null,
                    })));
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
