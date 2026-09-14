__d(
  "AdAccount-reminder_ads_data-resolver",
  ["AdAccountReminderAdsDataResolver.graphql", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a,
        i,
        l = o("RelayHooks").readFragment(
          e !== void 0
            ? e
            : (e = n("AdAccountReminderAdsDataResolver.graphql")),
          t,
        );
      return {
        cool_down_end_date_time:
          (r = l.reminder_ad_account_data) == null
            ? void 0
            : r.cool_down_end_date_time,
        manual_opt_out_count:
          (a =
            (i = l.reminder_ad_account_data) == null
              ? void 0
              : i.manual_opt_out_count) != null
            ? a
            : 0,
      };
    }
    l.reminder_ads_data = s;
  },
  98,
);
