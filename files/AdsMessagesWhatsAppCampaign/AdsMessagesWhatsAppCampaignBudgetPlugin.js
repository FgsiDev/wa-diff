__d(
  "AdsMessagesWhatsAppCampaignBudgetPlugin",
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
    var e = 500,
      s = 35e3,
      u = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "messages/whatsapp",
        pivots: {
          objective: r("AdsAPIObjectives").MESSAGES,
          promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
        },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e;
        },
        getDefaultDailyBudgetUSD: function () {
          var t = null;
          return (
            (t = o(
              "AdsMessagesCampaignBudgetPluginCommon",
            ).setDefaultDailyBudgetForCTXAtEditing(
              o("AdsMessagesCampaignBudgetPluginCommon").CTXBudgetPluginsType
                .WHATSAPP,
            )),
            r("isTruthy")(t) ? t : e
          );
        },
        getDefaultLifetimeBudgetUSD: function (t, n) {
          var e = null;
          return (
            (e = o(
              "AdsMessagesCampaignBudgetPluginCommon",
            ).setDefaultLifetimeBudgetForCTXAtEditing(
              o("AdsMessagesCampaignBudgetPluginCommon").CTXBudgetPluginsType
                .WHATSAPP,
              n,
            )),
            r("isTruthy")(e) ? e : s
          );
        },
        getDefaultEndDate: function (t, n, r, a) {
          return o(
            "AdsMessagesCampaignBudgetPluginEndDateCommon",
          ).getMessagesDefaultEndDate(t, r, a);
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);
