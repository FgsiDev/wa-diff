__d(
  "AdsUEditorAdgroupApplyCFPChangeSetReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCFPApplyChangeSetMutators",
    "AdsCreativeFeaturesPlatformMutators",
    "AdsCreativeGenAIEligibilityUtils",
    "AdsMutators",
    "AdsUEditorAdgroupApplyCFPChangeSetActionFlux",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsWithBenefitsTopReviewsState",
    "adsStoreToSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetAdsCreativeMGenAIBackendTestValueSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("AdsCreativeGenAIEligibilityUtils")).GenAIBackendTestPurpose
          .TEST_WITH_DELIVERY,
        e.GenAIBackendTestPurpose.TEST_WITHOUT_DELIVERY,
        e.GenAIBackendTestPurpose.TEST_MULTI_ASSETS_WITHOUT_DELIVERY,
        e.GenAIBackendTestPurpose.EMPLOYEE_TEST,
      ];
    function u(e, t, n) {
      var o,
        a,
        i,
        l,
        s = r("immutable").Map(
          t
            .filter(function (e) {
              return e !== "productExtensions";
            })
            .map(function (e) {
              return [e, "DEFAULT"];
            }),
        );
      return s
        .merge(e)
        .merge(
          r("immutable").Map({
            dynamicExperiences: e.has("dynamicExperiences") ? "MANUAL" : n,
            imageTemplate: (o = e.get("imageTemplate")) != null ? o : n,
            imageTouchup: (a = e.get("imageTouchup")) != null ? a : n,
            textOptimization: (i = e.get("textOptimization")) != null ? i : n,
            videoAutoCrop: (l = e.get("videoAutoCrop")) != null ? l : n,
          }),
        );
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            creativeFeaturesEligibility: r(
              "adsUEditorCreativeFeaturesEligibilitySelector",
            ),
            getDefaultAutoflowOptInStatus: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            getGenAIBackendTestEligibilityStatus: r(
              "adsUEditorGetAdsCreativeMGenAIBackendTestValueSelector",
            ),
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.creativeFeaturesEligibility,
              l = n.getDefaultAutoflowOptInStatus,
              c = n.getGenAIBackendTestEligibilityStatus,
              d = o("AdsWithBenefitsTopReviewsState").getPendingTopReviews(),
              m = o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n = Array.from(
                    t.adsCFPTransformationState.allToolStates.keys(),
                  ),
                  m = u(t.toolsEdit, n, l().optInSource),
                  p = t.adsCFPTransformationState.allToolStates.every(
                    function (e) {
                      return e.state === "on";
                    },
                  ),
                  _ = e,
                  f = c();
                r("isTruthy")(f.shouldInTest) &&
                  f.testPurpose != null &&
                  s.includes(f.testPurpose) &&
                  (_ = c().updatedAdgroupSpec);
                var g = o(
                    "AdsCFPApplyChangeSetMutators",
                  ).applyChangeSetByAvailablePlugin(
                    _,
                    t.globalChangeSet,
                    a,
                    n,
                    p,
                    m,
                    t.extraDataAPlusC,
                    t.entryPoint,
                  ),
                  h = i.hasValue()
                    ? i.getValueEnforcing().features_eligibility_map
                        .eligible_features
                    : null,
                  y = t.isAdAlreadyPublished === !0;
                if (
                  ((g = o(
                    "AdsCreativeFeaturesPlatformMutators",
                  ).mutateAdgroupForVideoBundleRecommendation(g, h, y)),
                  d != null && d.length > 0)
                ) {
                  var C,
                    b,
                    v =
                      (C = g.creative) == null ||
                      (C = C.creative_sourcing_spec) == null ||
                      (C = C.app_info_spec) == null
                        ? void 0
                        : C.enroll_status,
                    S =
                      (b = g.creative) == null ||
                      (b = b.creative_sourcing_spec) == null ||
                      (b = b.app_info_spec) == null ||
                      (b = b.ratings_and_reviews) == null
                        ? void 0
                        : b.enroll_status;
                  g = o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.app_info_spec.enroll_status.set(
                      v != null ? v : "OPT_IN",
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.enroll_status.set(
                      S != null ? S : "OPT_IN",
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.top_reviews.set(
                      r("immutable").List(
                        d.map(function (e) {
                          var t, n, o;
                          return r("immutable").Map({
                            is_checked: (t = e.isChecked) != null ? t : !1,
                            is_featured: (n = e.isFeatured) != null ? n : !1,
                            review_text: (o = e.reviewText) != null ? o : "",
                          });
                        }),
                      ),
                    ),
                  )(g);
                }
                return g;
              });
            return (
              d != null &&
                d.length > 0 &&
                o("AdsWithBenefitsTopReviewsState").clearPendingTopReviews(),
              m
            );
          },
          r("AdsUEditorAdgroupApplyCFPChangeSetActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
