__d(
  "AdsUEditorCampaignTargetingSetGendersReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetGendersActionFlux",
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
                  return o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").targeting.genders.set(
                      r("immutable").List(t.genders),
                    ),
                    o(
                      "AdsTargetingPGDIndividualSettingUtils",
                    ).maybeEnableIndividualSettingGender(t.genders),
                  )(e);
                });
          },
          o("AdsUEditorCampaignTargetingSetGendersActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
