__d(
  "AdsMessagesInstagramCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsMessagesCampaignBudgetPluginCommon",
    "AdsMessagesCampaignBudgetPluginEndDateCommon",
    "AdsPromotedObjectTypes",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "messages/instagram",
        pivots: {
          objective: r("AdsAPIObjectives").MESSAGES,
          promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
        },
        getBaseDefaultDailyBudgetUSD: function () {
          return o("AdsMessagesCampaignBudgetPluginEndDateCommon")
            .DEFAULT_DAILY_BUDGET;
        },
        getDefaultDailyBudgetUSD: function () {
          var e = null;
          return (
            (e = o(
              "AdsMessagesCampaignBudgetPluginCommon",
            ).setDefaultDailyBudgetForCTXAtEditing(
              o("AdsMessagesCampaignBudgetPluginCommon").CTXBudgetPluginsType
                .INSTAGRAM,
            )),
            r("isTruthy")(e)
              ? e
              : o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                  .DEFAULT_DAILY_BUDGET
          );
        },
        getDefaultLifetimeBudgetUSD: function (t, n) {
          var e = null;
          return (
            (e = o(
              "AdsMessagesCampaignBudgetPluginCommon",
            ).setDefaultLifetimeBudgetForCTXAtEditing(
              o("AdsMessagesCampaignBudgetPluginCommon").CTXBudgetPluginsType
                .INSTAGRAM,
              n,
            )),
            r("isTruthy")(e)
              ? e
              : o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                  .DEFAULT_LIFETIME_BUDGET
          );
        },
        getDefaultEndDate: function (t, n, r, a) {
          return o(
            "AdsMessagesCampaignBudgetPluginEndDateCommon",
          ).getMessagesDefaultEndDate(t, r, a);
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
