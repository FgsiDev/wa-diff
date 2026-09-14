__d(
  "AdAccountReminderAdsDataResolver.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { vultureHash: "2pisDVFw2lCUEejQRBixEaKfNRY=" },
      name: "AdAccountReminderAdsDataResolver",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBReminderAdsAdAccountData",
          kind: "LinkedField",
          name: "reminder_ad_account_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "manual_opt_out_count",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cool_down_end_date_time",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
