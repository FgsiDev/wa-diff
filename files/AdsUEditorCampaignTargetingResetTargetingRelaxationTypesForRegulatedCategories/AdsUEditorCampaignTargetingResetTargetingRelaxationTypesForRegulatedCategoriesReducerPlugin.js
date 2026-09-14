__d(
  "AdsUEditorCampaignTargetingResetTargetingRelaxationTypesForRegulatedCategoriesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsHECAdvantageAudienceUtils",
    "AdsMutators",
    "AdsTargetingAsSignalUtils",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingResetTargetingRelaxationTypesForRegulatedCategoriesActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = t.campaignIDs,
              i =
                (n = t == null ? void 0 : t.regulatedCategories) != null
                  ? n
                  : [];
            return a == null ||
              t.hostID == null ||
              i == null ||
              !o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(
                t.regulatedCategories,
              )
              ? e
              : o("AdsMutators").mutateEach(e, a, function (e) {
                  var t,
                    n = o(
                      "AdsHECAdvantageAudienceUtils",
                    ).isCampaignGroupRegulatedAndEligibleForAdvantageAudience(
                      i,
                    );
                  if (n) {
                    var a;
                    return (a = r("AdsCampaignRecordAccessors").targeting) ==
                      null ||
                      (a = a.targeting_relaxation_types) == null ||
                      (a = a.lookalike) == null
                      ? void 0
                      : a.delete(e);
                  }
                  return (t = r("AdsCampaignRecordAccessors").targeting) ==
                    null || (t = t.targeting_relaxation_types) == null
                    ? void 0
                    : t.delete(e);
                });
          },
          o(
            "AdsUEditorCampaignTargetingResetTargetingRelaxationTypesForRegulatedCategoriesActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
