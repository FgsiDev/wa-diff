__d(
  "adsTextGenerationEligibilitySelector",
  [
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsAssetFeedUtils",
    "AdsDCOUtils",
    "AdsDPATextGenUtils",
    "AdsDofTextSelectors",
    "AdsDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsRegulatedCategory",
    "AdsTextEnhancementsLoggingUtils",
    "AdsTextGenerationLoggingUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorSelectors",
    "AdsUnifiedCreativeAPIFields",
    "ApiDynamicCreativeOptimizationTypes",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
    "adsUEditorSelectedAdgroupsSelector",
    "getIsInstantExperienceAd",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector"),
            null,
          ),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupBulkSelectors").selectorByAdgroupFn(
              o("AdsDynamicAdsUtils").isDynamicAd,
            ),
            null,
          ),
        ],
        function (t, n) {
          return t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES || n === !0;
        },
        { name: i.id + ".isUsingDynamicAdsSelector" },
      ),
      s = [
        r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS,
        r("AdsRegulatedCategory").CREDIT,
        r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES,
      ],
      u = function (t) {
        return !!s.some(function (e) {
          return t.includes(e);
        });
      },
      c = r("adsCreateSelector")(
        [
          e,
          r("adsUEditorAccountSelector"),
          r("adsUEditorSelectedAdgroupsSelector"),
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.buying_type;
            },
          ),
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.objective;
            },
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            return e.optimization_goal;
          }),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          o("adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector")
            .adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
          o("AdsDofTextSelectors").createIsDofTextEligibleSelector(
            r("AdsUnifiedCreativeAPIFields").message,
            o("AdsDofTextSelectors").DofTextEligibilityCallsite
              .TEXT_SUGGESTIONS,
          ),
          o("adsUEditorIsAdgroupMultiUploadEligibleSelector")
            .adsUEditorIsAdgroupMultiUploadEligibleSelector,
        ],
        function (t, n, a, i, l, s, c, d, m, p) {
          return {
            isEligible: function () {
              var e,
                p,
                _ =
                  (e = a == null || (p = a[0]) == null ? void 0 : p.id) != null
                    ? e
                    : "";
              if (u(d))
                return (
                  o("AdsTextEnhancementsLoggingUtils").logTextEnhancementsEvent(
                    o("AdsTextEnhancementsLoggingUtils")
                      .TextEnhancementsLogEvent
                      .TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK,
                    {
                      eligibilityResult: !1,
                      ineligibilityReason: o("AdsTextEnhancementsLoggingUtils")
                        .TextGenIneligibleCause.REGULATED_CATEGORY,
                    },
                    _,
                    !0,
                  ),
                  !1
                );
              if (r("gkx")("2098") && !r("gkx")("8958"))
                return (
                  o("AdsTextEnhancementsLoggingUtils").logTextEnhancementsEvent(
                    o("AdsTextEnhancementsLoggingUtils")
                      .TextEnhancementsLogEvent
                      .TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK,
                    {
                      eligibilityResult: !1,
                      ineligibilityReason: o("AdsTextEnhancementsLoggingUtils")
                        .TextGenIneligibleCause.SENSITIVE_VERTICAL,
                    },
                    _,
                    !0,
                  ),
                  !1
                );
              if (t) {
                var f =
                  a == null
                    ? void 0
                    : a.find(function (e) {
                        return !o("AdsDPATextGenUtils").isEligibleDPA(e);
                      });
                if (f != null)
                  return (
                    o(
                      "AdsTextEnhancementsLoggingUtils",
                    ).logTextEnhancementsEvent(
                      o("AdsTextEnhancementsLoggingUtils")
                        .TextEnhancementsLogEvent
                        .TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK,
                      {
                        eligibilityResult: !1,
                        ineligibilityReason: o(
                          "AdsTextEnhancementsLoggingUtils",
                        ).TextGenIneligibleCause.DYNAMIC_ADS_INELIGIBLE_DPA,
                      },
                      _,
                      !0,
                    ),
                    !1
                  );
              }
              var g =
                  l == null || l.getValues == null ? void 0 : l.getValues()[0],
                h =
                  s == null || s.getValues == null ? void 0 : s.getValues()[0],
                y =
                  i == null || i.getValues == null ? void 0 : i.getValues()[0],
                C = o("AdsODAXUtils").maybeTranslateObjective(g, c, h),
                b =
                  o("AdsDPATextGenUtils").isEligibleDPA(
                    a == null ? void 0 : a[0],
                  ) && o("AdsDCOUtils").isSupportedObjectiveForTextGen(y, C),
                v = m || b;
              if (!v) {
                var S;
                return (
                  o("AdsTextGenerationLoggingUtils").logTextGenEvent(
                    o("AdsTextGenerationLoggingUtils").TextGenLogEvent
                      .TEXTGEN_DOF_ELIGIBILITY_CHECK_FAILED,
                    {
                      adgroupID:
                        a == null || (S = a[0]) == null ? void 0 : S.id,
                      campaignBuyingType: y,
                      campaignObjective: g,
                      optimizationGoal: h,
                      promotedObjectType: c,
                      eventSource: o("AdsTextGenerationLoggingUtils")
                        .TextSuggestionsCallSite.ELIGIBILITY_CHECKED,
                      isDofMessageEligible: m,
                      isDAEligible: b,
                      isEligibleDPA: o("AdsDPATextGenUtils").isEligibleDPA(
                        a == null ? void 0 : a[0],
                      ),
                      isAdgroupUsingAssetFeedFromRecord: o(
                        "AdsAssetFeedUtils",
                      ).isAdgroupUsingAssetFeedFromRecord(
                        a == null ? void 0 : a[0],
                      ),
                      isSupportedObjectiveForTextGen: o(
                        "AdsDCOUtils",
                      ).isSupportedObjectiveForTextGen(y, C),
                    },
                    !0,
                  ),
                  o("AdsTextEnhancementsLoggingUtils").logTextEnhancementsEvent(
                    o("AdsTextEnhancementsLoggingUtils")
                      .TextEnhancementsLogEvent
                      .TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK,
                    {
                      eligibilityResult: !1,
                      ineligibilityReason: o("AdsTextEnhancementsLoggingUtils")
                        .TextGenIneligibleCause.DOF_TEXT_INELIGIBLE,
                    },
                    _,
                    !0,
                  ),
                  !1
                );
              }
              var R =
                a == null
                  ? void 0
                  : a.some(function (e) {
                      var t,
                        n =
                          ((t = e.creative) == null ||
                          (t = t.asset_feed_spec) == null
                            ? void 0
                            : t.optimization_type) ===
                          r("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
                      return n
                        ? r("getIsInstantExperienceAd")(e, !1)
                        : r("getIsInstantExperienceAd")(e, !0);
                    });
              if (R) {
                var L;
                return (
                  o("AdsTextGenerationLoggingUtils").logTextGenEvent(
                    o("AdsTextGenerationLoggingUtils").TextGenLogEvent
                      .TEXTGEN_IX_ELIGIBILITY_CHECK_FAILED,
                    {
                      adgroupID:
                        a == null || (L = a[0]) == null ? void 0 : L.id,
                      campaignBuyingType: y,
                      campaignObjective: g,
                      optimizationGoal: h,
                      promotedObjectType: c,
                      eventSource: o("AdsTextGenerationLoggingUtils")
                        .TextSuggestionsCallSite.ELIGIBILITY_CHECKED,
                    },
                    !0,
                  ),
                  o("AdsTextEnhancementsLoggingUtils").logTextEnhancementsEvent(
                    o("AdsTextEnhancementsLoggingUtils")
                      .TextEnhancementsLogEvent
                      .TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK,
                    {
                      eligibilityResult: !1,
                      ineligibilityReason: o("AdsTextEnhancementsLoggingUtils")
                        .TextGenIneligibleCause.INSTANT_EXPERIENCE_AD,
                    },
                    _,
                    !0,
                  ),
                  !1
                );
              }
              var E = r("AdsAccountUtils").hasCapability(
                  n,
                  "ELIGIBLE_FOR_TEXT_GEN",
                ),
                k = r("gkx")("13210") || E;
              return (
                o("AdsTextEnhancementsLoggingUtils").logTextEnhancementsEvent(
                  o("AdsTextEnhancementsLoggingUtils").TextEnhancementsLogEvent
                    .TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK,
                  {
                    eligibilityResult: k,
                    ineligibilityReason: k
                      ? null
                      : o("AdsTextEnhancementsLoggingUtils")
                          .TextGenIneligibleCause.NO_CAPABILITY_OR_DOGFOODING,
                  },
                  _,
                  !0,
                ),
                k
              );
            },
          };
        },
        { name: i.id + ".adsTextGenerationEligibilitySelector" },
      ),
      d = c;
    l.default = d;
  },
  98,
);
