__d(
  "AdsValueAdjustmentRuleRemoveTargetingControlsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetingConstants",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsValueAdjustmentRuleRemoveTargetingControlsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.campaignIDs == null || t.hostID == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n = e;
                  return (
                    t.hasGenderControl &&
                      (n = r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.genders.set(r("immutable").List(), n)),
                    t.hasAgeControl &&
                      (n = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").targeting.age_max.set(
                          o("AdsTargetingConstants").DEFAULT_MAX_SELECTABLE_AGE,
                        ),
                        r("AdsCampaignRecordAccessors").targeting.age_min.set(
                          t.defaultMinAge,
                        ),
                      )(n)),
                    n
                  );
                });
          },
          o("AdsValueAdjustmentRuleRemoveTargetingControlsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
