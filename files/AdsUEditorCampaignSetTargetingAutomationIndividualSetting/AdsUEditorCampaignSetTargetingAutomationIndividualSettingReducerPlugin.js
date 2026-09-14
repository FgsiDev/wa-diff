__d(
  "AdsUEditorCampaignSetTargetingAutomationIndividualSettingReducerPlugin",
  [
    "AdsAdvantageAudienceReducerUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetTargetingAutomationIndividualSettingActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t;
      },
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.campaignIDs, function (t) {
              return o("AdsMutators").chain(
                n.skipAdvantageAudienceUpdate === !0
                  ? e
                  : o("AdsAdvantageAudienceReducerUtils")
                      .maybeDisableAdvantageAudience,
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.targeting_automation.individual_setting[
                  n.individualSettingType
                ].set(n.individualSettingStatus),
                function (e) {
                  return n.individualSettingType === "age" &&
                    n.defaultMinAge != null
                    ? n.individualSettingStatus === 0
                      ? o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).turnAgeRangeIntoAgeMinMax(e)
                      : o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).turnAgeMinMaxIntoAgeRange(
                          e,
                          n.defaultMinAge,
                          n.defaultTargetingSpec,
                        )
                    : e;
                },
              )(t);
            });
          },
          r(
            "AdsUEditorCampaignSetTargetingAutomationIndividualSettingActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
