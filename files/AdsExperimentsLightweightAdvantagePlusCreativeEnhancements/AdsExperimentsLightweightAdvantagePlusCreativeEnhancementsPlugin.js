__d(
  "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
  [
    "fbt",
    "AdsAPlusCFastTrackV2Utils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFeaturesUtils",
    "AdsEditingAdgroupContext",
    "AdsExperimentsAdAccountSalesSegmentCategories",
    "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsStrings",
    "AdsMutators",
    "AdsUEditorContextFactory",
    "FBLogger",
    "JSResource",
    "adsExperimentsEligibilityGetMultipleAdgroupsIneligibility",
    "adsExperimentsEligibilityGetMultipleCampaignsWithL3TestIneligibility",
    "adsUEditorGetShouldEnableAPlusCEnhanceCTAInfoLabelSignalSegmentFastTrackGetValue",
    "adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackGetValueSelector",
    "getByPath",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("JSResource")("AdsCreativeFeaturesTopLevelStatesUtils").__setRef(
        "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
      ),
      u = r("JSResource")("adsUEditorAdgroupCFPFieldSelector").__setRef(
        "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
      ),
      c = r("JSResource")("AdsCreativeOptimizationToolsPlugins").__setRef(
        "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
      ),
      d = {
        getAdObjectLevel: function () {
          return "ad";
        },
        eligibilityConfig: r("immutable").Map({
          multi_L2_in_L3_test: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "Make sure your campaign only includes one ad set to run this test.",
              );
            },
            getIneligibleData: r(
              "adsExperimentsEligibilityGetMultipleCampaignsWithL3TestIneligibility",
            ),
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          non_skinny_ad_set: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "Make sure your ad set only includes one ad to run this test.",
              );
            },
            getIneligibleData: r(
              "adsExperimentsEligibilityGetMultipleAdgroupsIneligibility",
            ),
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          enhancement_opt_in_status: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "Ensure your ad set does not already have Advantage+ creative enhancements turned on to run this type of A\/B test.",
              );
            },
            getIneligibleData: h,
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
        }),
        getEntryLabelContentOverride: function (t) {
          var e = p(t == null ? void 0 : t.sales_segment_v2);
          return e ===
            r("AdsExperimentsAdAccountSalesSegmentCategories")
              .SBG_OR_GBG_UNMANAGED
            ? o(
                "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsStrings",
              )
                .ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS_ENTRY_LABEL_FOR_ALL_ENHANCEMENTS
            : o(
                "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsStrings",
              )
                .ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS_ENTRY_LABEL_FOR_SUGGESTED_ENHANCEMENTS;
        },
        getEntryDescriptionContent: function (t) {
          var e,
            n,
            o = t.adAccount,
            a = t.lightweightABTestContextValue,
            i = p(o == null ? void 0 : o.sales_segment_v2),
            l =
              a == null || (e = a.creativeEnhancementsData) == null
                ? void 0
                : e.optedInTopLevelStates,
            u =
              a == null || (n = a.creativeEnhancementsData) == null
                ? void 0
                : n.totalTopLevelStates,
            c = C(l, u);
          if (
            i !== r("AdsExperimentsAdAccountSalesSegmentCategories").REST_OF_GBG
          )
            return null;
          var d = c
            .filter(function (e) {
              return m.includes(e);
            })
            .map(b);
          if (d.length === 0) return null;
          if (d.length === 1)
            return s._(/*BTDS*/ "Suggested enhancement is {enhancement}.", [
              s._param("enhancement", d[0]),
            ]);
          if (d.length === 2)
            return s._(
              /*BTDS*/ "Suggested enhancements are {enhancement1} and {enhancement2}.",
              [s._param("enhancement1", d[0]), s._param("enhancement2", d[1])],
            );
          var _ = d.pop();
          return s._(
            /*BTDS*/ "Suggested enhancements are {enhancementList}, and {lastEnhancement}.",
            [
              s._param("enhancementList", d.join(", ")),
              s._param("lastEnhancement", _),
            ],
          );
        },
        getLoggingEntryPoint: function () {
          return "LightweightCheckboxAdvantageCreativeEnhancements";
        },
        getPillLabelOverride: function () {
          return o(
            "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsStrings",
          ).ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS_PILL_LABEL;
        },
        getTooltipContentOverride: function () {
          return o(
            "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsStrings",
          ).ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS_TOOLTIP_CONTENT;
        },
        isVisibleForAdvertiser: function (t) {
          return !1;
        },
        key: "ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS",
        mutationConfig: {
          getAdgroupMutator: function (t, n, o) {
            var e = o.adAccountLoader,
              a = e.getValue();
            return a == null
              ? (r("FBLogger")(
                  "ads_experiments",
                  "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
                ).mustfix(
                  "Expected adAccount to be available but was not. This is likely due to a race condition.",
                ),
                t)
              : v(t, n, p(a.sales_segment_v2));
          },
          hasClientSideMutation: function () {
            return !0;
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "Advantage+ Creative Enhancements");
        },
        type: "lightweightABTest",
      },
      m = ["enhanceCTA", "imageTouchup", "textOptimization"],
      p = function (t) {
        return _(t) || f(t)
          ? r("AdsExperimentsAdAccountSalesSegmentCategories")
              .SBG_OR_GBG_UNMANAGED
          : g(t)
            ? r("AdsExperimentsAdAccountSalesSegmentCategories").REST_OF_GBG
            : r("AdsExperimentsAdAccountSalesSegmentCategories").OTHER;
      };
    function _(e) {
      return e == null ? !1 : e.includes("SBG");
    }
    function f(e) {
      return e == null ? !1 : e.includes("GBG Unmanaged");
    }
    function g(e) {
      return e == null ? !1 : e.includes("GBG") && !f(e);
    }
    function h(e, t) {
      var n,
        o = e.adgroup;
      if (o == null || o.id == null) return null;
      var a = y(o);
      if (a == null) return { adgroupIDs: new Set([o.id]) };
      var i = p(
          t == null || (n = t.adAccount) == null ? void 0 : n.sales_segment_v2,
        ),
        l = a.optedInTopLevelStates,
        s = a.totalTopLevelStates;
      switch (i) {
        case r("AdsExperimentsAdAccountSalesSegmentCategories")
          .SBG_OR_GBG_UNMANAGED:
          return l.length < s.size ? null : { adgroupIDs: new Set([o.id]) };
        case r("AdsExperimentsAdAccountSalesSegmentCategories").REST_OF_GBG:
          return C(l, s).length > 0 ? null : { adgroupIDs: new Set([o.id]) };
        default:
          return null;
      }
    }
    function y(t) {
      var n,
        a,
        l,
        s,
        c,
        d,
        m,
        p,
        _ = o("AdsUEditorContextFactory").getForIDs(
          r("AdsEditingAdgroupContext"),
          [t.id],
          i.id,
        ),
        f = u.getModuleIfRequireable(),
        g = e.getModuleIfRequireable();
      if (f == null || g == null)
        return (
          f == null &&
            (u.preload(),
            r("FBLogger")(
              "ads_experiments",
              "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
            ).mustfix(
              "expected adsUEditorAdgroupCFPFieldSelector to be available but was not",
            )),
          g == null &&
            (e.preload(),
            r("FBLogger")(
              "ads_experiments",
              "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
            ).mustfix(
              "expected adsCreativeFeaturesTopLevelStatesUtils to be available but was not",
            )),
          null
        );
      var h = f(_),
        y = h.cfpSortedTransformationStates,
        C = h.cfpTopLevelTransformationStates,
        b = h.isDAHidePriceFastTrackEligible,
        v = h.isEligibleForDAAddOverlaysDefaultOnExpansion,
        S = h.isEligibleForInfoLabelDefaultOnExpansion,
        R = h.isFlexMediaSegementFastTrackEligible,
        L = h.isGlobalishStatus,
        E = h.isInfoLabelFastTrackEligible,
        k = h.isVideoFilteringSegmentFastTrackEligible,
        I = h.isVideoVisualTouchupsSegmentFastTrackEligible,
        T = h.stickySettingOptInStatusMap,
        D = T(),
        x = o(
          "adsUEditorGetShouldEnableAPlusCEnhanceCTAInfoLabelSignalSegmentFastTrackGetValue",
        ).adsUEditorGetShouldEnableAPlusCEnhanceCTAInfoLabelSignalSegmentFastTrackGetValue(),
        $ =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                S || x,
                "enhance_cta",
                (D == null || (n = D.get("enhanceCTA")) == null
                  ? void 0
                  : n.shouldOptIn) === !1,
              )
            : !1,
        P =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                v,
                "add_text_overlay",
                (D == null || (a = D.get("DAAddTextOverlays")) == null
                  ? void 0
                  : a.shouldOptIn) === !1,
              )
            : !1,
        N =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                R,
                "pac_relaxation",
                (D == null || (l = D.get("pacRelaxationAPlusC")) == null
                  ? void 0
                  : l.shouldOptIn) === !1,
              )
            : !1,
        M =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                o(
                  "adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackGetValueSelector",
                ).adsUEditorGetShouldEnableAPlusCTextOptimizationSegmentFastTrackWithoutGKGetValue() &&
                  o(
                    "AdsAPlusCFastTrackV2Utils",
                  ).passTextOptimizationsFastTrackV2GK(!1),
                "text_optimizations",
                (D == null || (s = D.get("textOptimization")) == null
                  ? void 0
                  : s.shouldOptIn) === !1,
              )
            : !1,
        w =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                k,
                "video_filtering",
                (D == null || (c = D.get("videoFiltering")) == null
                  ? void 0
                  : c.shouldOptIn) === !1,
              )
            : !1,
        A =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                I,
                "video_auto_crop",
                (D == null || (d = D.get("videoAutoCrop")) == null
                  ? void 0
                  : d.shouldOptIn) === !1,
              )
            : !1,
        F =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                b,
                "hide_price",
                (D == null || (m = D.get("DAHidePrice")) == null
                  ? void 0
                  : m.shouldOptIn) === !1,
              )
            : !1,
        O =
          t != null
            ? o("AdsCreativeFeaturesUtils").shouldOverrideAplusCFeatureAsOn(
                t,
                E,
                "product_metadata_automation",
                (D == null || (p = D.get("DAProductMetadataAutomation")) == null
                  ? void 0
                  : p.shouldOptIn) === !1,
              )
            : !1,
        B = g.filterActiveAndOnFeatures(L, y),
        W = g.getTotalTopLevelStates(B, C),
        q = g.getOptedInTopLevelStates(
          W,
          y.availableRootLevelStates,
          $,
          P,
          N,
          F,
          !1,
          O,
          M,
          w,
          A,
          t,
        );
      return { optedInTopLevelStates: q, totalTopLevelStates: W };
    }
    function C(e, t) {
      return e == null || t == null
        ? []
        : m.slice().filter(function (n) {
            return !e.includes(n) && t.has(n);
          });
    }
    function b(e) {
      switch (e) {
        case "enhanceCTA":
          return s._(/*BTDS*/ "enhance CTA");
        case "imageTouchup":
          return s._(/*BTDS*/ "visual touch-ups");
        case "textOptimization":
          return s._(/*BTDS*/ "text improvements");
        default:
          return s._(/*BTDS*/ "enhancement");
      }
    }
    function v(e, t, n) {
      return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
        var t = y(e);
        if (t == null) return e;
        var a = t.optedInTopLevelStates,
          i = t.totalTopLevelStates,
          l = [];
        n ===
        r("AdsExperimentsAdAccountSalesSegmentCategories").SBG_OR_GBG_UNMANAGED
          ? (l = Array.from(i.keys()).filter(function (e) {
              return !a.includes(e);
            }))
          : n ===
              r("AdsExperimentsAdAccountSalesSegmentCategories").REST_OF_GBG &&
            (l = m.slice().filter(function (e) {
              return !a.includes(e) && i.has(e);
            }));
        var s = e,
          u = c.getModuleIfRequireable();
        return u == null
          ? (r("FBLogger")(
              "ads_experiments",
              "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
            ).mustfix(
              "expected AdsCreativeOptimizationToolsPlugins to be available but was not",
            ),
            e)
          : (l.forEach(function (e) {
              var t,
                n = (t = u.get(e)) == null ? void 0 : t.creativeFeatureName,
                a = n == null ? void 0 : n.toString();
              if (a == null || n == null) {
                r("FBLogger")(
                  "ads_experiments",
                  "AdsExperimentsLightweightAdvantagePlusCreativeEnhancementsPlugin",
                ).mustfix(
                  "expected AdsCreativeOptimizationToolsPlugins to return plugin creativeFeatureName for feature %s but was null",
                  e,
                );
                return;
              }
              if (a === "audio")
                s = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.audios.set(
                  r("immutable").fromJS([
                    r("immutable").Map({ type: "random" }),
                  ]),
                  s,
                );
              else {
                if (
                  o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
                    n,
                  )
                )
                  return;
                var i = r("getByPath")(
                  r("AdsAdgroupRecordAccessors").creative
                    .degrees_of_freedom_spec.creative_features_spec,
                  [a],
                );
                s = o("AdsMutators").chain(
                  i.enroll_status.set("OPT_IN"),
                  i.action_metadata.type.set("DEFAULT"),
                )(s);
              }
            }),
            s);
      });
    }
    var S = d;
    l.default = S;
  },
  226,
);
