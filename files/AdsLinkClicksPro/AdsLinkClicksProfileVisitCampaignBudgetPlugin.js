__d(
  "AdsLinkClicksProfileVisitCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsInterfacesLogger",
    "AdsLinkClicksCampaignBudgetPlugin",
    "AdsProfileVisitSABRCreationUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsLinkClicksCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "link-clicks/profile-visit",
        pivots: {
          objective: r("AdsAPIObjectives").LINK_CLICKS,
          promotedObjectType: r("AdsPromotedObjectTypes")
            .IG_PROFILE_AND_FB_PAGE,
        },
        getDefaultDailyBudgetUSD: function (t, n, a, i, l, s) {
          if (
            l != null &&
            o("AdsProfileVisitSABRCreationUtils").getIsProfileVisitSABREnabled(
              l.account_id,
              r("AdsAPIObjectives").LINK_CLICKS,
              r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE,
              !0,
              "getDefaultDailyBudgetUSD",
            )
          ) {
            var e = o(
              "AdsProfileVisitSABRCreationUtils",
            ).getProfileVisitDefaultDailyBudgetInUSD(l.account_id);
            if (e != null)
              return (
                r("AdsInterfacesLogger").log({
                  eventName: "profile_visit_budget_defaulting",
                  data: { message: "budget_defaulted", new_value: e },
                }),
                e * 100
              );
          }
          return r(
            "AdsLinkClicksCampaignBudgetPlugin",
          ).getDefaultDailyBudgetUSD(t, n, a, i, l, s);
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
