__d(
  "AdsReviewViewQuickSwitchToEditFieldDataTriggerReducerPlugin",
  ["AdsAPICampaignPaths", "AdsAdditionalOptionsConsts", "shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsAPICampaignPaths").TARGETING.AGE_MIN,
        r("AdsAPICampaignPaths").TARGETING.LOCALES,
        r("AdsAPICampaignPaths").TARGETING.EXCLUDED_CUSTOM_AUDIENCES,
      ],
      s = {
        reduce: function (n, a) {
          return a.isUnifiedTestVariation === !0 &&
            e.some(function (e) {
              var t;
              return r("shallowEqual")(
                e,
                (t = a.quickSwitchFieldPath) == null ? void 0 : t.toArray(),
              );
            })
            ? n.set(
                o("AdsAdditionalOptionsConsts").AdditionalOptionsSections
                  .audienceSectionF2,
                "visible",
              )
            : n;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
