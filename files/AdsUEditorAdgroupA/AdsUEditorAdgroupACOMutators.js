__d(
  "AdsUEditorAdgroupACOMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsArLinkUtils",
    "AdsAssetFeedUtils",
    "AdsDAAddTextOverlayDefaultOnMutator",
    "AdsDAAplusCImageUncropDefaultOnMutator",
    "AdsDAAplusCInfoLabelDefaultOnMutator",
    "AdsDynamicAdCustomizationCustomizationSpecUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupShopAdsBundle",
    "AdsUEditorAdgroupShopAdsBundleMutators",
    "AdsUEditorAdgroupShopAdsUtils",
    "ProductBrowsingAdsUtils",
    "adsACOConvertToACOAd",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCollectionAdClearCanvasLinkURL",
    "adsCollectionAdRemoveCollectionRetailersItemIDs",
    "adsCollectionAdRemoveCollectionThumbnails",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, u, c, d) {
      var m = e;
      return (
        (o("AdsAssetFeedUtils").isAutomaticFlowLiteAdgroup(e) ||
          o("AdsAssetFeedUtils").hasCreativeFeaturesAdgroup(e)) &&
          (m = o("adsAutomaticFlowMutationSetDoFSpec").adsDeleteDoFSpecMutator(
            m,
          )),
        i === !0 &&
          (m = o(
            "AdsUEditorAdgroupShopAdsBundleMutators",
          ).processShopAdsBundleEditorState(
            m,
            o("AdsUEditorAdgroupShopAdsBundle")
              .SHOP_ADS_BUNDLE_DISBLED_EDITOR_STATE,
          )),
        (m = s(
          m,
          {
            objective: t,
            productSetID: r,
            productSetVertical: a,
            adgroupSpecPathPlugin: n,
            catalogItemType: c,
          },
          l,
          u,
        )),
        (d == null ? void 0 : d.shouldDefaultProductBrowsing) === !1 ||
        (d == null ? void 0 : d.campaignGroup) == null ||
        (d == null ? void 0 : d.campaign) == null
          ? m
          : o("ProductBrowsingAdsUtils").maybeUpdateProductBrowsingSpec(
              m,
              !1,
              void 0,
              d.campaignGroup,
              d.campaign,
              "aco_transform_to_daa_plus_c",
            )
      );
    }
    function s(e, t, n, a) {
      var i = t.adgroupSpecPathPlugin,
        l = t.catalogItemType,
        s = t.objective,
        u = t.productSetID,
        c = t.productSetVertical;
      return o("AdsMutators").chain(
        function (e) {
          return e.deleteIn(
            o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).getCustomizationSpecPathFromAdgroup(e),
          );
        },
        function (e) {
          return r("adsCollectionAdRemoveCollectionThumbnails")(e, i);
        },
        function (e) {
          return r("adsCollectionAdRemoveCollectionRetailersItemIDs")(e, i, s);
        },
        function (e) {
          return r("adsCollectionAdClearCanvasLinkURL")(e, i, s, "");
        },
        function (e) {
          return o(
            "AdsAssetFeedUtils",
          ).hasLanguageOrPlacementCustomizationFromRecord(e)
            ? o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
                o("AdsAPIAdgroupRecordUtils").getObjectType(e),
                e,
                r("nullthrows")(i.pivots.objective),
              )
            : e;
        },
        function (e) {
          var t;
          return (t = e.creative) != null &&
            (t = t.object_story_spec) != null &&
            t.link_data
            ? o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupFromLinkToCarouselTemplateData(
                e,
                s,
                i.pivots.promotedObjectType,
                u,
                c,
                void 0,
                void 0,
                void 0,
                l,
              )
            : e;
        },
        function (e) {
          var t;
          return (t = e.creative) != null &&
            (t = t.object_story_spec) != null &&
            t.video_data
            ? o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupFromVideoToSingleMediaTemplateData(
                e,
                s,
                u,
                c,
                l,
              )
            : e;
        },
        function (e) {
          var t;
          return (t = e.creative) != null &&
            (t = t.object_story_spec) != null &&
            t.template_data
            ? o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupTemplateDataFromStaticToDynamic(
                e,
                s,
                u,
                c,
                o(
                  "AdsUEditorAdgroupDynamicLocalAdsUtils",
                ).getDefaultProductSalesChannel(e),
                l,
              )
            : e;
        },
        function (e) {
          var t;
          return ((t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.template_data) == null
            ? o(
                "AdsUEditorAdgroupDynamicMutators",
              ).addDefaultCommonTemplateDataFields(e, s, u, c, !0, void 0, l)
            : e;
        },
        function (e) {
          var t;
          return ((t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null
            ? void 0
            : t.automated_product_tags) !== null
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.automated_product_tags.delete(
                e,
              )
            : e;
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
          ).removeInteractiveComponent(e, i);
        },
        function (e) {
          return o("AdsArLinkUtils").isArAd(e, i)
            ? r("AdsAdgroupSemanticFields").linkURL.set(i, e, "")
            : e;
        },
        function (e) {
          return o("adsACOConvertToACOAd").adsACOConvertToACOAd(e, a);
        },
        n === !0
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements_catalog.enroll_status.set(
              "OPT_IN",
            )
          : r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.standard_enhancements_catalog.delete,
        function (e) {
          return o(
            "AdsDAAplusCInfoLabelDefaultOnMutator",
          ).adsDAAplusCInfoLabelDefaultOnMutator(e);
        },
        function (e) {
          return o(
            "AdsDAAddTextOverlayDefaultOnMutator",
          ).adsDAAddTextOverlayDefaultOnMutator(e);
        },
        function (e) {
          return o(
            "AdsDAAplusCImageUncropDefaultOnMutator",
          ).adsDAAplusCImageUncropDefaultOnMutator(e);
        },
      )(e);
    }
    function u(e, t, n, a, i) {
      var l = r("adsACORemoveACOSpec")(e, i);
      if (a === !0) {
        var s;
        ((l = (s = r(
          "AdsAdgroupRecordAccessors",
        )).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements_catalog.enroll_status.set(
          "OPT_OUT",
          l,
        )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.product_metadata_automation.enroll_status.set(
              "OPT_OUT",
              l,
            )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.image_background_gen.enroll_status.set(
              "OPT_OUT",
              l,
            )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.enroll_status.set(
              "OPT_OUT",
              l,
            )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.dynamic_partner_content.enroll_status.set(
              "OPT_OUT",
              l,
            )));
      } else {
        var s;
        ((l = (s = r(
          "AdsAdgroupRecordAccessors",
        )).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements_catalog.delete(
          l,
        )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.product_metadata_automation.delete(
              l,
            )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.image_background_gen.delete(
              l,
            )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.delete(
              l,
            )),
          (l =
            s.creative.degrees_of_freedom_spec.creative_features_spec.dynamic_partner_content.delete(
              l,
            )));
      }
      return t === !0
        ? o(
            "AdsUEditorAdgroupShopAdsBundleMutators",
          ).processShopAdsBundleEditorState(l, { mode: "automatic" })
        : n !== !0
          ? l
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.automated_product_tags.set(
              n,
              l,
            );
    }
    ((l.transformAdgroupToDAAPlusC = e), (l.transformFromACOTemplateData = u));
  },
  98,
);
