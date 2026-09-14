__d(
  "AdsCreativeFeaturesPlatformMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupMultiProductMutatorUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupWebAndAppPACMutatorUtils",
    "AdsAplusCAnimationUtils",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsClickToCallAdsUtils",
    "AdsCreativeFeaturesUtils",
    "AdsDAAdaptImagesMutators",
    "AdsDAAddTextOverlaySpecMutators",
    "AdsDynamicAdsUtils",
    "AdsInteractiveComponentConstants",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsProductTagsAdGroupMutatorUtils",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsVideoBundleMutator",
    "AdsWithBenefitsTopReviewsState",
    "ApiDynamicCreativeOptimizationTypes",
    "DAAddTextOverlaySpecUtils",
    "PERelevanceUtils",
    "SEFunnelLogger",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsObjectiveSelector",
    "adsPlacementAssetMutationUpdateAllCarousels",
    "adsUEditorCTMCatalogProductMutatorUtils",
    "adsUseProductTagsUtils",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.enroll_status === "OPT_IN" ? "OPT_IN" : "OPT_OUT";
    }
    function s(e, t) {
      return e === "OPT_IN" &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(t)
        ? "OPT_OUT"
        : e;
    }
    function u(e) {
      var t = r("adsObjectiveSelector")({ adgroup: e });
      return t === o("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY ? 6 : 4;
    }
    function c(e, t) {
      var n,
        a,
        i,
        l = e,
        s = !!(
          (n = e.creative) != null &&
          (n = n.degrees_of_freedom_spec) != null &&
          n.creative_features_spec
        ),
        u =
          (a = e.creative) == null ||
          (a = a.degrees_of_freedom_spec) == null ||
          (a = a.creative_features_spec) == null
            ? void 0
            : a.standard_enhancements;
      l = s
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.delete(l)
        : l;
      var c = (i = e.creative) == null ? void 0 : i.degrees_of_freedom_spec;
      return (
        c != null &&
          c.isEmpty() &&
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.delete(l)),
        t === !1 &&
          (l = o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(l)),
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.set(
          u,
          l,
        )),
        o("AdsAdgroupFormatTransformationMutators").syncFTSFromCFS(l)
      );
    }
    function d(e, t, n, r) {
      var a,
        i,
        l,
        s,
        c = e,
        d = r,
        p =
          (a = e.creative) == null ||
          (a = a.degrees_of_freedom_spec) == null ||
          (a = a.creative_features_spec) == null ||
          (a = a.standard_enhancements) == null ||
          (a = a.action_metadata) == null
            ? void 0
            : a.type,
        _ =
          ((i = e.creative) == null ||
          (i = i.degrees_of_freedom_spec) == null ||
          (i = i.creative_features_spec) == null ||
          (i = i.standard_enhancements) == null
            ? void 0
            : i.enroll_status) === "OPT_IN",
        f =
          ((l = t.dynamic_experience) == null ? void 0 : l.enroll_status) ===
          "OPT_IN";
      if ((_ === f && p === "MANUAL" && (d = p != null ? p : d), f)) {
        var g = o(
          "AdsCreativeFeaturesUtils",
        ).areSESubFeaturesPresentInChangeSet(t)
          ? "ignore-subfeatures"
          : "update-subfeatures";
        return o(
          "adsAutomaticFlowMutationSetDoFSpec",
        ).adsOptInStandardEnhancementsMutator(c, d, u(e), g);
      }
      return m(
        e,
        (s = t.dynamic_experience) == null ? void 0 : s.enroll_status,
        n,
        d,
      );
    }
    function m(e, t, n, a) {
      if (t !== "OPT_OUT") return e;
      var i = e;
      if (n != null) {
        var l = o("AdsUEditorAdgroupCachedUtils").getCFPDoFSpec(n, e.id);
        l != null &&
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
            l.degrees_of_freedom_type,
            e,
          ));
      }
      return o(
        "adsAutomaticFlowMutationSetDoFSpec",
      ).adsStandardEnhancementsMutator(
        i,
        { shouldOptIn: !1, optInSource: a },
        u(e),
      );
    }
    function p(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.video_highlights != null)) {
        var i = n.video_highlights;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.video_highlights.enroll_status.set(
            e(i),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.video_highlights.action_metadata.type.set(
            a,
          ),
        )(t);
      }
      return t;
    }
    function _(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.description_automation != null)) {
        var i,
          l,
          s = n.description_automation,
          u = a,
          c =
            (i = t.creative) == null ||
            (i = i.degrees_of_freedom_spec) == null ||
            (i = i.creative_features_spec) == null ||
            (i = i.description_automation) == null ||
            (i = i.action_metadata) == null
              ? void 0
              : i.type,
          d = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "description_automation",
          ),
          m =
            ((l = n.description_automation) == null
              ? void 0
              : l.enroll_status) === "OPT_IN";
        return (
          d === m && (u = c != null ? c : u),
          o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.description_automation.enroll_status.set(
              e(s),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.description_automation.action_metadata.type.set(
              u,
            ),
          )(t)
        );
      }
      return t;
    }
    function f(t, n, a) {
      if (
        (a === void 0 && (a = "DEFAULT"), n.product_metadata_automation != null)
      ) {
        var i = n.product_metadata_automation;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_metadata_automation.enroll_status.set(
            e(i),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_metadata_automation.action_metadata.type.set(
            a,
          ),
        )(t);
      }
      return t;
    }
    function g(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.biz_ai != null)) {
        var i = n.biz_ai;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.enroll_status.set(
            e(i),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.action_metadata.type.set(
            a,
          ),
        )(t);
      }
      return t;
    }
    function h(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.image_animation != null)) {
        var i,
          l,
          s = n.image_animation,
          u = a,
          c =
            (i = t.creative) == null ||
            (i = i.degrees_of_freedom_spec) == null ||
            (i = i.creative_features_spec) == null ||
            (i = i.image_animation) == null ||
            (i = i.action_metadata) == null
              ? void 0
              : i.type,
          d = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "image_animation",
          ),
          m =
            ((l = n.image_animation) == null ? void 0 : l.enroll_status) ===
            "OPT_IN";
        d === m && c === "MANUAL" && (u = c);
        var p = e(s);
        u !== "MANUAL" &&
          p === "OPT_OUT" &&
          o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "image_animation",
          ) &&
          (u = "STICKY");
        var _ = p,
          f = u;
        if (o("AdsAplusCAnimationUtils").passAnimationUnificationGK()) {
          var g;
          return o("AdsMutators").chain(
            (g = r(
              "AdsAdgroupRecordAccessors",
            )).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.enroll_status.set(
              _,
            ),
            g.creative.degrees_of_freedom_spec.creative_features_spec.image_animation.action_metadata.type.set(
              f,
            ),
            g.creative.degrees_of_freedom_spec.creative_features_spec.cv_transformation.enroll_status.set(
              _,
            ),
            g.creative.degrees_of_freedom_spec.creative_features_spec.cv_transformation.action_metadata.type.set(
              f,
            ),
          )(t);
        } else
          return o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.enroll_status.set(
              _,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.action_metadata.type.set(
              f,
            ),
          )(t);
      }
      return t;
    }
    function y(t, n, a) {
      if (n.product_extensions != null) {
        var i = e(n.product_extensions),
          l = o(
            "AdsCreativeFeaturesUtils",
          ).isProductExtensionsOptedInFromAdgroup(t)
            ? "OPT_IN"
            : "OPT_OUT";
        return i === l
          ? t
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                i,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                a,
              ),
            )(t);
      }
      return t;
    }
    function C(t, n, a) {
      var i = t;
      if (n.ads_with_benefits != null) {
        var l,
          s,
          u = n.ads_with_benefits,
          c = a,
          d =
            (l = t.creative) == null ||
            (l = l.degrees_of_freedom_spec) == null ||
            (l = l.creative_features_spec) == null ||
            (l = l.ads_with_benefits) == null ||
            (l = l.action_metadata) == null
              ? void 0
              : l.type,
          m = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "ads_with_benefits",
          ),
          p =
            ((s = n.ads_with_benefits) == null ? void 0 : s.enroll_status) ===
            "OPT_IN";
        (m === p && d === "MANUAL" && (c = d != null ? d : c),
          (i = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.ads_with_benefits.enroll_status.set(
              e(u),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.ads_with_benefits.action_metadata.type.set(
              c,
            ),
          )(i)));
      }
      var _ = o("AdsWithBenefitsTopReviewsState").getPendingTopReviews();
      if (_ != null && _.length > 0) {
        var f,
          g,
          h =
            (f = i.creative) == null ||
            (f = f.creative_sourcing_spec) == null ||
            (f = f.app_info_spec) == null
              ? void 0
              : f.enroll_status,
          y =
            (g = i.creative) == null ||
            (g = g.creative_sourcing_spec) == null ||
            (g = g.app_info_spec) == null ||
            (g = g.ratings_and_reviews) == null
              ? void 0
              : g.enroll_status,
          C = o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "ads_with_benefits",
          )
            ? "OPT_OUT"
            : "OPT_IN";
        i = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.app_info_spec.enroll_status.set(
            h != null ? h : C,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.enroll_status.set(
            y != null ? y : C,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.top_reviews.set(
            r("immutable").List(
              _.map(function (e) {
                var t, n, o;
                return r("immutable").Map({
                  is_checked: (t = e.isChecked) != null ? t : !1,
                  is_featured: (n = e.isFeatured) != null ? n : !1,
                  review_text: (o = e.reviewText) != null ? o : "",
                });
              }),
            ),
          ),
        )(i);
      }
      return i;
    }
    function b(t, n, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h = t,
        y = (l = n.product_extensions) == null ? void 0 : l.product_set_id,
        C = n.product_extensions,
        b = C == null ? void 0 : C.product_tag_data,
        k = (s = n.product_extensions) == null ? void 0 : s.customizations;
      (C != null &&
        e(C) !==
          ((u = t.creative) == null ||
          (u = u.degrees_of_freedom_spec) == null ||
          (u = u.creative_features_spec) == null ||
          (u = u.product_extensions) == null
            ? void 0
            : u.enroll_status) &&
        (h = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            e(C),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            a,
          ),
        )(h)),
        C != null && k != null && (h = E(h, k)));
      var I = y != null;
      if (
        (I
          ? (h = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.associated_product_set_id.set(
                y,
              ),
            )(h))
          : C != null &&
            e(C) === "OPT_OUT" &&
            !o(
              "AdsMetadataConnectedSourcesUtils",
            ).isConnectedSourcesOptInForAdgroup(t) &&
            C.preserve_product_set_id !== !0 &&
            (h = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.associated_product_set_id.delete(
              h,
            )),
        C != null && (h = L(h, C)),
        r("justknobx")._("5119") &&
          ((c = h.creative) == null ||
          (c = c.degrees_of_freedom_spec) == null ||
          (c = c.creative_features_spec) == null ||
          (c = c.product_extensions) == null
            ? void 0
            : c.enroll_status) === "OPT_IN" &&
          !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "product_extensions",
          ) &&
          (((d = h.creative) == null || (d = d.creative_sourcing_spec) == null
            ? void 0
            : d.associated_product_set_id) != null ||
            o("PERelevanceUtils").hasVirtualProductSetId(h)) &&
          ((m = h.creative) == null ||
          (m = m.creative_sourcing_spec) == null ||
          (m = m.catalog) == null
            ? void 0
            : m.enroll_status) !== "OPT_IN" &&
          (h = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.catalog.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
              a,
            ),
          )(h)),
        (h = R(h, n)),
        b == null)
      )
        return h;
      var T =
          (p = o("adsUseProductTagsUtils").normalizeChangeSet(b.product_tag)) ==
          null
            ? void 0
            : p.get(
                o("AdsPlacementAssetCustomizationTypes").AdsPlacementAssetGroups
                  .INSTAGRAM,
              ),
        D =
          T != null
            ? o("adsUseProductTagsUtils").buildInteractiveComponentsSpec(T)
            : null,
        x = !1,
        $ =
          C != null &&
          e(C) === "OPT_IN" &&
          e(C) !==
            ((_ = t.creative) == null ||
            (_ = _.degrees_of_freedom_spec) == null ||
            (_ = _.creative_features_spec) == null ||
            (_ = _.product_extensions) == null
              ? void 0
              : _.enroll_status) &&
          D != null &&
          D.size > 0;
      if (C != null && e(C) === "OPT_IN") {
        var P;
        (C.is_enabled_by_product_tags === !0 ||
          (e(C) !==
            ((P = t.creative) == null ||
            (P = P.degrees_of_freedom_spec) == null ||
            (P = P.creative_features_spec) == null ||
            (P = P.product_extensions) == null
              ? void 0
              : P.enroll_status) &&
            D != null &&
            D.size > 0)) &&
          (x = !0);
      }
      return (
        x &&
          (h = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            "PRODUCT_TAG_GUIDED",
            h,
          )),
        (((f = n.product_extensions) == null
          ? void 0
          : f.should_opt_into_connected_sources) === !0 ||
          $) &&
          !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "product_extensions",
          ) &&
          ((h = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.enroll_status.set(
            "OPT_IN",
            h,
          )),
          (h = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
            "AWPT_MIGRATION_ENABLE_PE",
            h,
          ))),
        ((g = t.creative) == null || (g = g.asset_feed_spec) == null
          ? void 0
          : g.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
          ? (h = v(h, t, i, D))
          : (h = S(h, D)),
        h
      );
    }
    function v(e, t, n, a) {
      var i,
        l,
        s = n == null ? void 0 : n.get(t.id);
      if (s == null) return e;
      var u = e;
      return (
        ((i = t.creative) == null || (i = i.asset_feed_spec) == null
          ? void 0
          : i.images) != null &&
          (u = o(
            "AdsProductTagsAdGroupMutatorUtils",
          ).updateAdgroupWithProductTags(
            u,
            s.specPlugin,
            "image_label",
            a != null ? a : r("immutable").List(),
          )),
        ((l = t.creative) == null || (l = l.asset_feed_spec) == null
          ? void 0
          : l.videos) != null &&
          (u = o(
            "AdsProductTagsAdGroupMutatorUtils",
          ).updateAdgroupWithProductTags(
            u,
            s.specPlugin,
            "video_label",
            a != null ? a : r("immutable").List(),
          )),
        r("justknobx")._("4166") &&
          (u = o(
            "AdsAdgroupWebAndAppPACMutatorUtils",
          ).addOmniChannelLinkSpecForPACMutator(
            s.campaignGroup,
            s.campaign,
            s.specPlugin,
            u,
          )),
        u
      );
    }
    function S(e, t) {
      var n,
        a,
        i =
          (n =
            (a = e.creative) == null ||
            (a = a.interactive_components_spec) == null ||
            (a = a.components) == null
              ? void 0
              : a.filter(function (e) {
                  return (
                    e != null &&
                    e.get("type") !==
                      o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG
                  );
                })) != null
            ? n
            : r("immutable").List();
      return t != null && t.size > 0
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.components.set(
            o("AdsCreativeFeaturesUtils")
              .getProductTagComponentsSpec(t)
              .concat(i),
            e,
          )
        : i.size !== 0
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.interactive_components_spec.components.set(i, e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.interactive_components_spec.delete(e);
    }
    function R(e, t) {
      var n,
        a,
        i,
        l = (n = t.product_extensions) == null ? void 0 : n.product_data;
      if (l == null) return e;
      var s =
          ((a = t.product_extensions) == null ? void 0 : a.is_existing_post) ===
          !0,
        u =
          ((i = t.product_extensions) == null ? void 0 : i.is_pac) === !0 &&
          r("gkx")("12583"),
        c =
          s || u
            ? r("AdsAdgroupRecordAccessors").creative.product_data
            : r("AdsAdgroupRecordAccessors").creative.object_story_spec
                .product_data;
      if (l.length === 0)
        return c.set(
          o(
            "adsUEditorCTMCatalogProductMutatorUtils",
          ).getPlaceholderProductData(),
          e,
        );
      var d = r("immutable").List(
        Array.from(l).map(function (e) {
          return r("immutable").Map({
            product_id: e.product_id,
            product_source: e.product_source,
            product_decision: e.product_decision,
          });
        }),
      );
      return c.set(d, e);
    }
    function L(t, n) {
      var a,
        i = e(n),
        l = i === "OPT_OUT",
        s = i === "OPT_IN";
      if (!l && !s) return t;
      var u = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t),
        c = u
          ? r("AdsAdgroupRecordAccessors").creative.product_data
          : r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .product_data,
        d = c.get(t);
      if (d == null) return t;
      var m =
        d.size > 0 &&
        !(
          d.size === 1 &&
          ((a = d.get(0)) == null ? void 0 : a.get("product_id")) === "0"
        );
      if (!m) return t;
      var p = l ? "REJECT" : "ACCEPT",
        _ = d.map(function (e) {
          return e.set("product_decision", p);
        });
      return c.set(_, t);
    }
    function E(e, t) {
      var n,
        a,
        i = (n = t.pe_carousel) == null ? void 0 : n.enroll_status,
        l =
          (a = t.pe_carousel) == null || (a = a.action_metadata) == null
            ? void 0
            : a.type;
      return i != null
        ? o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.customizations.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
              i,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
              l != null ? l : "DEFAULT",
            ),
          )(e)
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.customizations.delete,
          )(e);
    }
    function k(t, n, a) {
      if (n.site_extensions != null) {
        var i,
          l = n.site_extensions,
          s = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "site_extensions",
          ),
          u =
            ((i = n.site_extensions) == null ? void 0 : i.enroll_status) ===
            "OPT_IN";
        if (s !== u) {
          var c = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              e(l),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              a,
            ),
          )(t);
          if (
            r("justknobx")._("1566") &&
            !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
              "site_extensions",
            )
          ) {
            var d,
              m =
                (d = c.creative) == null ||
                (d = d.creative_sourcing_spec) == null ||
                (d = d.site_links_data_consented) == null
                  ? void 0
                  : d.enroll_status;
            m == null &&
              (c = o("AdsMutators").chain.apply(
                o("AdsMutators"),
                [
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                    "OPT_IN",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                    "DEFAULT",
                  ),
                ].concat(
                  o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout()
                    ? [
                        r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
                          "DATA_CONSENT_ELIGIBLE",
                        ),
                      ]
                    : [],
                ),
              )(c));
          }
          return (
            o("SEFunnelLogger").logConsentDivergenceCheck(
              t.id,
              c,
              "a_plus_c_site_extensions",
            ),
            c
          );
        }
        o("SEFunnelLogger").logConsentDivergenceCheck(
          t.id,
          t,
          "a_plus_c_site_extensions_no_change",
        );
      }
      return t;
    }
    function I(t, n, a) {
      if (n.wa_mm_image_filtering != null) {
        var i,
          l = n.wa_mm_image_filtering,
          s = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "wa_mm_image_filtering",
          ),
          u =
            ((i = n.wa_mm_image_filtering) == null
              ? void 0
              : i.enroll_status) === "OPT_IN";
        if (s !== u)
          return o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.wa_mm_image_filtering.enroll_status.set(
              e(l),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.wa_mm_image_filtering.action_metadata.type.set(
              a,
            ),
          )(t);
      }
      return t;
    }
    function T(t, n, a) {
      if (n.local_store_extension != null) {
        var i,
          l,
          s = n.local_store_extension,
          u = a,
          c =
            (i = t.creative) == null ||
            (i = i.degrees_of_freedom_spec) == null ||
            (i = i.creative_features_spec) == null ||
            (i = i.local_store_extension) == null ||
            (i = i.action_metadata) == null
              ? void 0
              : i.type,
          d = o(
            "AdsCreativeFeaturesUtils",
          ).isAPlusCLocalStoreExtensionOptedInFromAdgroup(t),
          m =
            ((l = n.local_store_extension) == null
              ? void 0
              : l.enroll_status) === "OPT_IN";
        return (
          d === m && c === "MANUAL" && (u = c != null ? c : u),
          o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.local_store_extension.enroll_status.set(
              e(s),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.local_store_extension.action_metadata.type.set(
              u,
            ),
          )(t)
        );
      }
      return t;
    }
    function D(e, t, n) {
      return t.media_music != null
        ? n === "existing_post_audio_swap"
          ? o("AdsUEditorAdgroupAudiosAdsMutators").updateAudiosForSwap(
              e,
              t.media_music.type,
              t.media_music.selected_audios,
            )
          : o("AdsUEditorAdgroupAudiosAdsMutators").maybeUpdateAudios(
              e,
              t.media_music.type,
              t.media_music.selected_audios,
            )
        : e;
    }
    function x(t, n, a, i) {
      if (n.profile_card != null) {
        var l = n.profile_card,
          s = n.profile_card.enroll_status === "OPT_IN",
          u = o(
            "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
          ).getAdgroupSpecPathPlugin(i),
          c = t;
        return (
          (c = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.profile_card.enroll_status.set(
              e(l),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.profile_card.action_metadata.type.set(
              a,
            ),
          )(c)),
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(c) &&
            (c = r("adsPlacementAssetMutationUpdateAllCarousels")(
              c,
              function (e) {
                return e.set("multi_share_end_card", s);
              },
            )),
          s
            ? o("AdsAdgroupMultiProductMutatorUtils").enableShowEndCard(c, u)
            : o("AdsAdgroupMultiProductMutatorUtils").disableShowEndCard(
                c,
                u,
                $(c, i),
              )
        );
      }
      return t;
    }
    function $(e, t) {
      var n = t.campaign,
        a = t.campaignGroup,
        i = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: n,
          campaignGroup: a,
        }),
        l = o("AdsODAXUtils").maybeTranslateObjective(
          a.objective,
          i,
          n.optimization_goal,
        );
      return (
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
        !r("AdsAppUtils").isAppObjective(l, i) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsClickToCallAdsUtils").getIsCallAdsLeadGenObjective(l, i)
      );
    }
    function P(t, n, a, i) {
      if (n.media_order != null) {
        var l = n.media_order,
          s = n.media_order.enroll_status === "OPT_IN",
          u = o(
            "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
          ).getAdgroupSpecPathPlugin(i),
          c = t;
        return (
          (c = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.media_order.enroll_status.set(
              e(l),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.media_order.action_metadata.type.set(
              a,
            ),
          )(c)),
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(c)
            ? r("adsPlacementAssetMutationUpdateAllCarousels")(c, function (e) {
                return e.set("multi_share_optimized", s);
              })
            : r("AdsAdgroupSemanticFields").multiShareOptimized.set(u, c, s)
        );
      }
      return t;
    }
    function N(e, t, n) {
      return o("AdsMutators").chain.apply(
        o("AdsMutators"),
        [
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec[n].customizations.delete,
        ].concat(
          Object.entries(t != null ? t : {}).map(function (e) {
            var t = e[0],
              o = e[1];
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec[
              n
            ].customizations[t].set(o);
          }),
        ),
      )(e);
    }
    function M(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.image_background_gen != null)) {
        var i = n.image_background_gen;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.image_background_gen.enroll_status.set(
            e(i),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.image_background_gen.action_metadata.type.set(
            a,
          ),
        )(t);
      }
      return t;
    }
    function w(t, n, a) {
      if (n.adapt_to_placement != null) {
        var i,
          l,
          s = n.adapt_to_placement,
          u = a,
          c =
            (i = t.creative) == null ||
            (i = i.degrees_of_freedom_spec) == null ||
            (i = i.creative_features_spec) == null ||
            (i = i.adapt_to_placement) == null ||
            (i = i.action_metadata) == null
              ? void 0
              : i.type,
          d = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "adapt_to_placement",
          ),
          m =
            ((l = n.adapt_to_placement) == null ? void 0 : l.enroll_status) ===
            "OPT_IN";
        return (
          d === m && c === "MANUAL" && (u = c != null ? c : u),
          o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.adapt_to_placement.enroll_status.set(
              e(s),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.adapt_to_placement.action_metadata.type.set(
              u,
            ),
            function (e) {
              return o(
                "AdsDAAdaptImagesMutators",
              ).mutateCreativeFeatureCustomizationsForAdaptToPlacement(
                e,
                s.customizations,
              );
            },
          )(t)
        );
      }
      return t;
    }
    function A(t, n, a) {
      var i = n.da_add_text_overlay;
      if (i != null) {
        var l,
          s = a,
          u =
            (l = t.creative) == null ||
            (l = l.degrees_of_freedom_spec) == null ||
            (l = l.creative_features_spec) == null ||
            (l = l.add_text_overlay) == null ||
            (l = l.action_metadata) == null
              ? void 0
              : l.type,
          c = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "add_text_overlay",
          ),
          d = i.enroll_status === "OPT_IN";
        c === d && u === "MANUAL" && (s = u != null ? u : s);
        var m = o("DAAddTextOverlaySpecUtils").getUpdatedImageLayerSpec(t, n),
          p = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec.add_text_overlay;
        return o("AdsMutators").chain(
          p.enroll_status.set(e(i)),
          p.action_metadata.type.set(s),
          function (e) {
            return m != null
              ? o("AdsDAAddTextOverlaySpecMutators").setImageLayerSpecMutator(
                  e,
                  m,
                )
              : o(
                  "AdsDAAddTextOverlaySpecMutators",
                ).removeImageLayerSpecMutator(e);
          },
        )(t);
      }
      return t;
    }
    function F(t, n, a, i) {
      if (n != null) {
        var l,
          s,
          u = i,
          c =
            (l = t.creative) == null ||
            (l = l.degrees_of_freedom_spec) == null ||
            (l = l.creative_features_spec) == null ||
            (l = l[a]) == null ||
            (l = l.action_metadata) == null
              ? void 0
              : l.type,
          d = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(t, a),
          m = n.enroll_status === "OPT_IN";
        d === m && c === "MANUAL" && (u = c != null ? c : u);
        var p = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec[a],
          _ =
            ((s = t.creative) == null ||
            (s = s.degrees_of_freedom_spec) == null ||
            (s = s.creative_features_spec) == null ||
            (s = s[a]) == null
              ? void 0
              : s.customizations) != null;
        return o("AdsMutators").chain(
          p.enroll_status.set(e(n)),
          p.action_metadata.type.set(u),
          function (e) {
            return n.customizations != null
              ? N(e, n.customizations, a)
              : _
                ? p.customizations.delete(e)
                : e;
          },
        )(t);
      }
      return t;
    }
    function O(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.video_auto_crop != null)) {
        var i,
          l,
          u = n.video_auto_crop,
          c = a,
          d =
            (i = t.creative) == null ||
            (i = i.degrees_of_freedom_spec) == null ||
            (i = i.creative_features_spec) == null ||
            (i = i.video_auto_crop) == null ||
            (i = i.action_metadata) == null
              ? void 0
              : i.type,
          m = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "video_auto_crop",
          ),
          p =
            ((l = n.video_auto_crop) == null ? void 0 : l.enroll_status) ===
            "OPT_IN";
        return (
          m === p && d != null && (c = d != null ? d : c),
          o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.enroll_status.set(
              e(u),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.action_metadata.type.set(
              c,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_uncrop.enroll_status.set(
              s(e(u), "video_uncrop"),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_uncrop.action_metadata.type.set(
              a,
            ),
          )(t)
        );
      }
      return t;
    }
    function B(t, n, a, i) {
      if (n.image_touchups != null) {
        var l,
          s,
          u,
          c,
          d = n.image_touchups,
          m = a,
          p =
            (l = t.creative) == null ||
            (l = l.degrees_of_freedom_spec) == null ||
            (l = l.creative_features_spec) == null ||
            (l = l.image_touchups) == null ||
            (l = l.action_metadata) == null
              ? void 0
              : l.type,
          _ = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "image_touchups",
          ),
          f =
            ((s = n.image_touchups) == null ? void 0 : s.enroll_status) ===
            "OPT_IN";
        _ === f && p === "MANUAL" && (m = p != null ? p : m);
        var g = i == null || (u = i.get(t.id)) == null ? void 0 : u.isNew,
          h = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "image_uncrop",
          ),
          y =
            r("justknobx")._("2369") &&
            g === !1 &&
            h &&
            !o("AdsDynamicAdsUtils").isDynamicAd(t),
          C =
            ((c = t.creative) == null ||
            (c = c.degrees_of_freedom_spec) == null ||
            (c = c.creative_features_spec) == null ||
            (c = c.image_touchups) == null
              ? void 0
              : c.customizations) != null;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.enroll_status.set(
            e(d),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.action_metadata.type.set(
            m,
          ),
          function (e) {
            return y
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.delete(
                  e,
                )
              : e;
          },
          function (e) {
            var t;
            return ((t = n.image_touchups) == null
              ? void 0
              : t.customizations) != null
              ? N(e, n.image_touchups.customizations, "image_touchups")
              : C
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.customizations.delete(
                    e,
                  )
                : e;
          },
        )(t);
      }
      return t;
    }
    function W(t, n, a) {
      var i = r("immutable").List([
        "DUPLICATION_UPGRADE",
        "PFR_GUIDANCE",
        "MANUAL",
        "SYD_GUIDANCE",
        "RECOMMENDATION_COLUMN_GUIDANCE",
        "AMA",
        "AUTORULE",
        "CIC_GUIDANCE",
      ]);
      if (n.image_uncrop != null) {
        var l,
          s,
          u = n.image_uncrop,
          c = a,
          d =
            (l = t.creative) == null ||
            (l = l.degrees_of_freedom_spec) == null ||
            (l = l.creative_features_spec) == null ||
            (l = l.image_uncrop) == null ||
            (l = l.action_metadata) == null
              ? void 0
              : l.type,
          m = o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
            t,
            "image_uncrop",
          ),
          p =
            ((s = n.image_uncrop) == null ? void 0 : s.enroll_status) ===
            "OPT_IN";
        return (
          m === p && d != null && i.contains(d) && (c = d != null ? d : c),
          o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.enroll_status.set(
              e(u),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.action_metadata.type.set(
              c,
            ),
          )(t)
        );
      }
      return t;
    }
    function q(t, n, a) {
      if (n.carousel_to_video != null) {
        var i = n.carousel_to_video,
          l = t;
        return (
          (l = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.enroll_status.set(
              e(i),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.carousel_to_video.action_metadata.type.set(
              a,
            ),
          )(l)),
          l
        );
      }
      return t;
    }
    function U(t, n, a) {
      if (n.multi_photo_to_video != null) {
        var i = n.multi_photo_to_video,
          l = t;
        return (
          (l = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.multi_photo_to_video.enroll_status.set(
              e(i),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.multi_photo_to_video.action_metadata.type.set(
              a,
            ),
          )(l)),
          l
        );
      }
      return t;
    }
    function V(t, n, a) {
      if ((a === void 0 && (a = "DEFAULT"), n.translate_voiceover != null)) {
        var i = n.translate_voiceover;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.translate_voiceover.enroll_status.set(
            e(i),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.translate_voiceover.action_metadata.type.set(
            a,
          ),
        )(t);
      }
      return t;
    }
    function H(e) {
      if (!r("justknobx")._("2315")) return e;
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.enroll_status.get(
          e,
        ),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.action_metadata.type.get(
          e,
        );
      if (t !== "OPT_IN" || n !== "DEFAULT") return e;
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.enroll_status.set(
        "OPT_OUT",
        e,
      );
      return (
        (a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.action_metadata.type.set(
          "DEFAULT",
          a,
        )),
        o("AdsAplusCAnimationUtils").passAnimationUnificationGK("silent") &&
          ((a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.cv_transformation.enroll_status.set(
            "OPT_OUT",
            a,
          )),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.cv_transformation.action_metadata.type.set(
            "DEFAULT",
            a,
          ))),
        a
      );
    }
    function G(e, t) {
      if (!r("justknobx")._("2315")) return e;
      var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.enroll_status.get(
          e,
        ),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.action_metadata.type.get(
          e,
        );
      if (n !== "OPT_OUT" || a !== "DEFAULT" || !t().shouldOptIn) return e;
      var i = r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.enroll_status.set(
        "OPT_IN",
        e,
      );
      return (
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_animation.action_metadata.type.set(
          "DEFAULT",
          i,
        )),
        o("AdsAplusCAnimationUtils").passAnimationUnificationGK("silent") &&
          ((i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.cv_transformation.enroll_status.set(
            "OPT_IN",
            i,
          )),
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.cv_transformation.action_metadata.type.set(
            "DEFAULT",
            i,
          ))),
        i
      );
    }
    function z(e, t, n) {
      return r("AdsVideoBundleMutator")(e, t, n);
    }
    ((l.maybeDeleteDOFCFPSpec = c),
      (l.mutateAdgroupForDynamicExperience = d),
      (l.mutateAdgroupForVideoHighlights = p),
      (l.mutateAdgroupForDescriptionAutomation = _),
      (l.mutateAdgroupForProductMetadataAutomation = f),
      (l.mutateAdgroupForBizAI = g),
      (l.mutateAdgroupForImageAnimation = h),
      (l.mutateAdgroupForProductExtensions = y),
      (l.mutateAdgroupForAPlusCAdsWithBenefits = C),
      (l.mutateAdgroupForAPlusCProductExtensions = b),
      (l.mutateAdgroupForAPlusCSiteExtensions = k),
      (l.mutateAdgroupForAPlusCImageFiltering = I),
      (l.mutateAdgroupForAPlusLocalStoreExtensions = T),
      (l.mutateAdgroupForMediaMusic = D),
      (l.mutateAdgroupForCarouselEndCard = x),
      (l.mutateAdgroupForCarouselReorderCard = P),
      (l.mutateAdgroupForImageBackgroundGen = M),
      (l.mutateAdgroupForAdaptToPlacement = w),
      (l.mutateAdgroupForDynamicAdTextOverlay = A),
      (l.mutateAdgroupForFeature = F),
      (l.mutateAdgroupForVideoTouchup = O),
      (l.mutateAdgroupForImageTouchups = B),
      (l.mutateAdgroupForImageUncrop = W),
      (l.mutateAdgroupForCarouselToVideo = q),
      (l.mutateAdgroupForMultiPhotoToVideo = U),
      (l.mutateAdgroupForTranslateVoiceover = V),
      (l.maybeDisableDefaultOnImageAnimationForPartnershipAd = H),
      (l.maybeRestoreDefaultOnImageAnimationForPartnershipAd = G),
      (l.mutateAdgroupForVideoBundleRecommendation = z));
  },
  98,
);
