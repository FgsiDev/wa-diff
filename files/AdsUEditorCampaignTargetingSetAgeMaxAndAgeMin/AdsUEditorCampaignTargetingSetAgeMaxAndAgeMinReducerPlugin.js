__d(
  "AdsUEditorCampaignTargetingSetAgeMaxAndAgeMinReducerPlugin",
  [
    "AdsAdvantageAudienceReducerUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetAgeMaxAndAgeMinActionFlux",
    "CapaUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.triggerAgeRangeAction
              ? t.campaignIDs == null || t.hostID == null
                ? e
                : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                    return o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").targeting.age_range.set(
                        r("immutable").fromJS([t.ageMin, t.ageMax]),
                      ),
                      o(
                        "AdsTargetingPGDIndividualSettingUtils",
                      ).maybeDisableIndividualSettingAge(
                        t.ageMin,
                        t.defaultMinAge,
                      ),
                    )(e);
                  })
              : t.campaignIDs == null || t.hostID == null
                ? e
                : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                    return o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").targeting.age_max.set(
                        t.ageMax,
                      ),
                      r("AdsCampaignRecordAccessors").targeting.age_min.set(
                        t.ageMin,
                      ),
                      function (e) {
                        return o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).alignAgeRangeWithAgeMin(
                          e,
                          t.ageMin,
                          t.allowAgeRangeField,
                        );
                      },
                      function (e) {
                        return r("CapaUtils").isCapaEnabledInCampaign(e) ||
                          r("CapaUtils").isCapaL0EnabledInCampaign(e)
                          ? e
                          : o(
                              "AdsTargetingPGDIndividualSettingUtils",
                            ).maybeEnableIndividualSettingAge(
                              t.ageMin,
                              t.defaultMinAge,
                              t.ageMax,
                            )(e);
                      },
                    )(e);
                  });
          },
          o("AdsUEditorCampaignTargetingSetAgeMaxAndAgeMinActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
