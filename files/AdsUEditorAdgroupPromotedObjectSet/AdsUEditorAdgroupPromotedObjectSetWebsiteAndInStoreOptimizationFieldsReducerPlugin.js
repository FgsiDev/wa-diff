__d(
  "AdsUEditorAdgroupPromotedObjectSetWebsiteAndInStoreOptimizationFieldsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataActionFlux",
    "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsDataActionFlux",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAdgroupLocalStoreExtensionDefaultOptInStatusSelector",
    "adsUEditorAdgroupPromotedObjectSetWebsiteAndInStoreOptimizationLocalStoreExtensionEligbilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            adGroupIDToInitOptInStatus: r(
              "adsUEditorAdgroupLocalStoreExtensionDefaultOptInStatusSelector",
            ),
            adGroupIDIsEligible: r(
              "adsUEditorAdgroupPromotedObjectSetWebsiteAndInStoreOptimizationLocalStoreExtensionEligbilitySelector",
            ),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
          },
          function (e, t, n) {
            var a = n.adGroupIDIsEligible,
              i = n.adGroupIDToInitOptInStatus,
              l = n.bizAIEligibility,
              s = t.adgroupIDs;
            return o("AdsMutators").mutateEach(e, s, function (e) {
              var t,
                n = e,
                s = (t = a.get(e.id)) != null ? t : !1;
              if (!s)
                n = o("AdsMutators").chain(
                  r("AdsAdgroupRecordAccessors").creative
                    .degrees_of_freedom_spec.creative_features_spec
                    .local_store_extension.enroll_status.delete,
                  r("AdsAdgroupRecordAccessors").creative
                    .degrees_of_freedom_spec.creative_features_spec
                    .local_store_extension.action_metadata.type.delete,
                )(n);
              else {
                var u,
                  c = (u = i.get(e.id)) != null ? u : !1;
                n = o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.local_store_extension.enroll_status.set(
                    c ? "OPT_IN" : "OPT_OUT",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.local_store_extension.action_metadata.type.set(
                    "DEFAULT",
                  ),
                )(n);
              }
              return (
                l != null &&
                  (n = o(
                    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                  ).updateBizAIDefaultOptIn(
                    n,
                    l,
                    o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                      .BizAIDefaultOptInCallSite
                      .SET_WEBSITE_AND_IN_STORE_OPTIMIZATION,
                  )),
                n
              );
            });
          },
          [
            r(
              "AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataActionFlux",
            ).actionType,
            o(
              "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsDataActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
