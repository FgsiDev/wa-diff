__d(
  "AdsFormatTransformationCatalogPlugin",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAPlusCChangeLevelViewAction",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatPreviewVariationConfig",
    "AdsFlexibleFormatTransformationUtils",
    "AdsFormatTransformationUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsSensitiveVerticalUtils",
    "ApiAdObjectTypes",
    "DAFlexibleFormatUtils",
    "JSResource",
    "PERelevanceUtils",
    "gkx",
    "isTruthy",
    "justknobx",
    "lazyLoadComponent",
    "meta-brand-pencil-outline-16",
    "meta-brand-shopping-bag-outline-24",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsFlexibleFormatCarouselCatalogCustomize.react",
        ).__setRef("AdsFormatTransformationCatalogPlugin"),
      ),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsFlexibleFormatCollectionCustomize.react").__setRef(
          "AdsFormatTransformationCatalogPlugin",
        ),
      ),
      c = "ffCollectionFormat";
    function d(e) {
      var t,
        n = e.creative;
      if (
        (n == null || (t = n.creative_sourcing_spec) == null
          ? void 0
          : t.associated_product_set_id) != null ||
        (n == null ? void 0 : n.object_story_spec) != null
      )
        return !1;
      var o =
        (n == null ? void 0 : n.object_story_id) != null ||
        (n == null ? void 0 : n.source_instagram_media_id) != null ||
        (n == null ? void 0 : n.source_facebook_post_id) != null;
      return (
        o &&
        ((n == null ? void 0 : n.object_type) === r("ApiAdObjectTypes").SHARE ||
          (n == null ? void 0 : n.object_type) === r("ApiAdObjectTypes").STATUS)
      );
    }
    var m = {
        type: "format_transformation/data_source",
        key: "catalog",
        getDescription: function (t) {
          return null;
        },
        getIsCollapsed: function () {
          return !1;
        },
        getIsSelected: function (t, n, r) {
          if (
            t.uxVersion === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            n === "carousel" &&
            t.originalFormat === "da_carousel"
          )
            return !0;
          if (
            n === "single_media" &&
            o(
              "AdsFormatTransformationUtils",
            ).getIsEligibleForDACatalogSingleMediaFormatTransformation(t, !0)
          )
            return o(
              "AdsFormatTransformationUtils",
            ).getIsOptedInForDACatalogSingleMediaFormatTransformation(t);
          if (
            n != null &&
            (t.isPCAUnifiedOldFlow ||
              t.isEligibleForDACarouselNewDesign ||
              t.isPCAUnifiedScaledAlpha ||
              t.uxVersion === "modal_format_preview")
          ) {
            var e = o("AdsFormatTransformationUtils").shouldSelectDataSource(
              t,
              n,
              m.key,
            );
            if (
              (t == null ? void 0 : t.uxVersion) === "modal_format_preview" &&
              r != null
            ) {
              for (var a of r)
                if (
                  o("AdsFormatTransformationUtils").shouldSelectDataSource(
                    t,
                    n,
                    a,
                  )
                )
                  return !0;
            }
            return e;
          }
          return t.adObjectsList.some(function (e) {
            var r = e.adgroup;
            return n == null
              ? !1
              : o("AdsDynamicAdsUtils").isDynamicAd(r) && n === "da_collection"
                ? o(
                    "AdsFormatTransformationUtils",
                  ).getIsOptedInForDACarouselToCollectionTransformation(t)
                : o(
                    "AdsFlexibleFormatTransformationUtils",
                  ).getHasOptedInProductExtensionsForGivenTargetFormat(r, n);
          });
        },
        getIsEligible: function (t, n) {
          return r("isTruthy")(t.isPCAUnifiedScaledAlpha)
            ? n !== "single_media"
            : t.isPCAUnifiedOldFlow
              ? !0
              : (t.uxVersion === "modal_format_preview" &&
                    n === "single_media" &&
                    t.originalFormat === "sa_single_image") ||
                  (n === "collage" &&
                    t.adObjectsList.some(function (e) {
                      var n = e.adgroup;
                      return o(
                        "AdsFlexibleFormatAdexUtils",
                      ).isEligibleForEPAMultiMediaSurface(
                        n,
                        t.existingPostPhotoCount,
                      );
                    }))
                ? !1
                : n === "collage" &&
                    t.adObjectsList.some(function (e) {
                      var n = e.adgroup;
                      return o(
                        "AdsFlexibleFormatPreviewVariationConfig",
                      ).isEligibleForSASingleToCollage(n, t.originalFormat, !0);
                    })
                  ? t.adObjectsList.some(function (e) {
                      var t = e.adgroup;
                      return o("AdsFlexibleFormatAdexUtils")
                        .getEligibleMixedCollageDataSources(t)
                        .includes("catalog");
                    })
                  : n === "single_media" &&
                      o(
                        "AdsFormatTransformationUtils",
                      ).isDACatalogSingleMediaFormatTransformationContext(t)
                    ? o(
                        "AdsFormatTransformationUtils",
                      ).getIsEligibleForDACatalogSingleMediaFormatTransformation(
                        t,
                        !0,
                      )
                    : t.adObjectsList.every(function (e) {
                          return (
                            o("AdsDynamicAdsUtils").isDynamicAd(e.adgroup) &&
                            n !== "single_media"
                          );
                        })
                      ? !0
                      : t.adObjectsList.some(function (e) {
                          var a,
                            i,
                            l,
                            s,
                            u,
                            c,
                            m = e.adgroup,
                            p = e.campaign,
                            _ = e.campaignGroup,
                            f = o("PERelevanceUtils").hasVirtualProductSetId(m),
                            g =
                              (((a = m.creative) == null ||
                              (a = a.creative_sourcing_spec) == null ||
                              (a = a.catalog) == null
                                ? void 0
                                : a.enroll_status) === "OPT_IN" &&
                                ((i = m.creative) == null ||
                                (i = i.creative_sourcing_spec) == null
                                  ? void 0
                                  : i.associated_product_set_id) != null) ||
                              f,
                            h =
                              !g &&
                              t.firstEligibleProductSetId != null &&
                              o(
                                "AdsMetadataConnectedSourcesUtils",
                              ).isEligibleForCatalogByCampaignAndAdgroup(
                                p,
                                _,
                                m,
                              ) &&
                              o(
                                "AdsFlexibleFormatAdexUtils",
                              ).passGKForPEClawback(!0),
                            y = g || h,
                            C =
                              (l = m.creative) == null ||
                              (l = l.degrees_of_freedom_spec) == null
                                ? void 0
                                : l.creative_features_spec,
                            b =
                              (C == null || (s = C.product_extensions) == null
                                ? void 0
                                : s.enroll_status) === "OPT_IN" ||
                              (!y &&
                                (C == null ||
                                (u = C.product_extensions) == null ||
                                (u = u.customizations) == null ||
                                (u = u.pe_carousel) == null
                                  ? void 0
                                  : u.enroll_status) === "OPT_IN" &&
                                r("gkx")("22153")),
                            v = m.source_ad_id != null && !g,
                            S = d(m),
                            R =
                              !v &&
                              !S &&
                              _.objective !==
                                r("AdsAPIObjectives").APP_INSTALLS &&
                              b &&
                              !((c = r("gkx")("3384")) != null && c) &&
                              !o(
                                "AdsSensitiveVerticalUtils",
                              ).isAccountInSensitiveVerticals();
                          return n == null
                            ? o(
                                "AdsMetadataConnectedSourcesUtils",
                              ).isEligibleForCatalogByCampaignAndAdgroup(
                                p,
                                _,
                                m,
                              ) &&
                                (y || R)
                            : !y && !R
                              ? !1
                              : o(
                                  "AdsMetadataConnectedSourcesUtils",
                                ).isEligibleForCatalogByCampaignAndAdgroup(
                                  p,
                                  _,
                                  m,
                                );
                        });
        },
        getIsAvailable: function (t, n, a) {
          if ((t == null ? void 0 : t.uxVersion) === "modal_format_preview") {
            if (
              !t.isPCAUnifiedScaledAlpha &&
              t.originalFormat === "da_carousel"
            ) {
              if (n === "carousel") return !1;
              if (n === "da_collection") return !0;
              if (
                n === "single_media" &&
                o(
                  "AdsFormatTransformationUtils",
                ).isDACatalogSingleMediaFormatTransformationContext(t)
              )
                return o(
                  "AdsFormatTransformationUtils",
                ).getIsEligibleForDACatalogSingleMediaFormatTransformation(
                  t,
                  !0,
                );
            }
            var e = o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationUploadedMediaPresent(null, t),
              i = o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationDynamicMediaPresent(t);
            if (
              n === "sa_collection" &&
              t.isPCAUnifiedScaledAlpha &&
              (!r("isTruthy")(e) ||
                !r("isTruthy")(i) ||
                !o(
                  "AdsFormatTransformationUtils",
                ).getIsFormatEligiblePlacementsAvailable(t, n, "catalog"))
            )
              return !1;
            if (n === "carousel" && !r("isTruthy")(i)) {
              var l = m.getIsSelected(t, n, a);
              return !!l;
            }
            return !o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
              t,
              n,
              m,
              a,
            );
          }
          return !t.isPCAUnifiedOldFlow || t.isEligibleForDACarouselNewDesign
            ? !0
            : t.isPCAUnifiedOldFlow &&
                o(
                  "AdsFormatTransformationUtils",
                ).getPcaUnificationDynamicDataSourceEligibility(t)
              ? !(
                  t.isPCAUnifiedOldFlow &&
                  o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
                    t,
                    n,
                    m,
                  )
                )
              : !1;
        },
        unavailableMessage: function (t, n) {
          if (
            (t == null ? void 0 : t.uxVersion) === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            n === "carousel" &&
            (t == null ? void 0 : t.originalFormat) === "da_carousel"
          )
            return s._(
              /*BTDS*/ "The original format you chose for this ad must stay selected. You can change this selection in Format.",
            );
          if (
            t != null &&
            (t.isPCAUnifiedOldFlow || t.isPCAUnifiedScaledAlpha)
          ) {
            var e = t.isPCAUnifiedScaledAlpha,
              r =
                n != null
                  ? !o(
                      "AdsFormatTransformationUtils",
                    ).getIsFormatEligiblePlacementsAvailable(t, n, "catalog")
                  : !1;
            return o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
              t,
              n,
              m,
            )
              ? o("AdsFlexibleFormatConstants").LAST_SELECTED_FORMAT_LOCKED
              : e
                ? r
                  ? o("AdsFlexibleFormatConstants")
                      .REQUIRED_PLACEMENTS_OFF_FOR_PE
                  : o("AdsFlexibleFormatConstants").ADD_CATALOG_MEDIA
                : o("AdsFlexibleFormatConstants").CATALOG_MEDIA_UNAVAILABLE;
          }
        },
        getTitle: function (t, n, a) {
          if (
            a === !0 &&
            r("isTruthy")(n == null ? void 0 : n.isPCAUnifiedOldFlow)
          )
            return o("AdsFlexibleFormatConstants").CATALOG_FORMAT_HEADER_LABEL;
          if (
            n != null &&
            r("isTruthy")(n == null ? void 0 : n.isPCAUnifiedScaledAlpha)
          )
            return o("AdsFlexibleFormatConstants")
              .USE_CATALOG_FOR_PCAU_FORMAT_TRANSFORMATION_LABEL;
          if (n != null && n.isPCAUnifiedOldFlow)
            switch (t) {
              case "carousel":
                return o("AdsFlexibleFormatConstants")
                  .CATALOG_CAROUSEL_FORMAT_TRANSFORMATION_LABEL;
              case "da_collection":
                return o("AdsFlexibleFormatConstants")
                  .CATALOG_COLLECTION_FORMAT_TRANSFORMATION_LABEL;
              default:
                return o("AdsFlexibleFormatConstants")
                  .USE_CATALOG_FOR_FORMAT_TRANSFORMATION_LABEL;
            }
          return t == null
            ? o("AdsFlexibleFormatConstants").CATALOG_SECTION_HEADING
            : (n == null ? void 0 : n.uxVersion) === "modal_format_preview" &&
                !(n != null && n.isPCAUnifiedScaledAlpha) &&
                (t === "carousel" ||
                  t === "sa_collection" ||
                  t === "da_collection")
              ? o("AdsFlexibleFormatConstants")
                  .USE_CATALOG_FOR_FORMAT_TRANSFORMATION_LABEL
              : t === "da_collection" &&
                  n != null &&
                  n.isEligibleForDACarouselNewDesign
                ? o("AdsFlexibleFormatConstants")
                    .CATALOG_COLLECTION_FORMAT_TRANSFORMATION_LABEL_DA_REVAMP
                : (n == null ? void 0 : n.uxVersion) === "simplified_format_v2"
                  ? o("AdsFlexibleFormatConstants")
                      .WITH_CATALOG_FOR_FORMAT_TRANSFORMATION_LABEL
                  : (n == null ? void 0 : n.uxVersion) ===
                      "modal_format_preview"
                    ? o("AdsFlexibleFormatConstants")
                        .USE_CATALOG_FOR_FORMAT_TRANSFORMATION_LABEL_RC
                    : o("AdsFlexibleFormatConstants")
                        .USE_CATALOG_FOR_FORMAT_TRANSFORMATION_LABEL;
        },
        imageSrcs: function (t) {
          if (t.isEligibleForDACarouselNewDesign) return null;
          if (t.isPCAUnifiedOldFlow) {
            var e = o(
                "meta-brand-shopping-bag-outline-24",
              ).metaBrandShoppingBagOutline24,
              n = String(e);
            return [n];
          }
          return [];
        },
        linkedDataSources: function (t, n) {
          return n != null &&
            n === "carousel" &&
            t.isPCAUnifiedScaledAlpha &&
            o(
              "AdsFormatTransformationUtils",
            ).getPcaUnificationUploadedMediaPresent(null, t)
            ? ["manual_uploads"]
            : null;
        },
        formatModalPreviewConfig: function (n, a) {
          if (
            n === "single_media" &&
            (a == null ? void 0 : a.uxVersion) === "modal_format_preview" &&
            !(a != null && a.isPCAUnifiedScaledAlpha) &&
            (a == null ? void 0 : a.originalFormat) === "da_carousel"
          )
            return {
              tooltipMessage: o("AdsFlexibleFormatConstants")
                .PRODUCT_IMAGE_OR_VIDEO_TOOLTIP,
            };
          if (
            n === "carousel" &&
            (a == null ? void 0 : a.uxVersion) === "modal_format_preview" &&
            !(a != null && a.isPCAUnifiedScaledAlpha) &&
            (a == null ? void 0 : a.originalFormat) === "da_carousel"
          )
            return {
              getPreviewDescription: function (t, n) {
                return n === 1
                  ? o("AdsFlexibleFormatConstants")
                      .PE_CAROUSEL_INTRO_CARD_PREVIEW_DESCRIPTION
                  : o("AdsFlexibleFormatConstants")
                      .PE_CAROUSEL_PRODUCTS_ONLY_PREVIEW_DESCRIPTION;
              },
            };
          if (
            n === "da_collection" &&
            (a == null ? void 0 : a.uxVersion) === "modal_format_preview" &&
            !(a != null && a.isPCAUnifiedScaledAlpha) &&
            (a == null ? void 0 : a.originalFormat) === "da_carousel"
          ) {
            var t,
              l =
                a == null || (t = a.adObjectsList) == null || (t = t[0]) == null
                  ? void 0
                  : t.adgroup,
              d = l != null && o("DAFlexibleFormatUtils").hasDAIntroCard(l);
            return {
              previewDescription: d
                ? o("AdsFlexibleFormatConstants")
                    .PE_COLLECTION_PREVIEW_DESCRIPTION
                : s._(/*BTDS*/ "Show products as a cover and tiles."),
            };
          }
          if (n === "carousel") {
            var m = (a == null ? void 0 : a.isPCAUnifiedScaledAlpha) === !0,
              p =
                a != null
                  ? o(
                      "AdsFormatTransformationUtils",
                    ).getPcaUnificationDynamicMediaPresent(a)
                  : !1,
              _ = o("AdsFlexibleFormatAdexUtils").usesPECarouselIntroCardSplit(
                a == null ? void 0 : a.originalFormat,
              ),
              f = _ && r("justknobx")._("4416"),
              g = m ? p : f,
              h = function (t, n) {
                var e,
                  r =
                    a == null ||
                    (e = a.adObjectsList) == null ||
                    (e = e[0]) == null
                      ? void 0
                      : e.adgroup,
                  i =
                    r != null
                      ? o(
                          "AdsFlexibleFormatTransformationUtils",
                        ).getUseIntroCardCustomizationFromFTS(r)
                      : void 0,
                  l = i !== "OPT_OUT",
                  s = l && n === 0;
                return s
                  ? o("AdsFlexibleFormatConstants")
                      .PE_CAROUSEL_INTRO_CARD_PREVIEW_DESCRIPTION
                  : o("AdsFlexibleFormatConstants")
                      .PE_CAROUSEL_PRODUCTS_ONLY_PREVIEW_DESCRIPTION;
              };
            return babelHelpers.extends(
              { cfpToolKey: "ffCarouselFormat" },
              g
                ? babelHelpers.extends(
                    {
                      CustomizeComponent: e,
                      customizeAction: _
                        ? function () {}
                        : function () {
                            r("AdsAPlusCChangeLevelViewAction").dispatch(
                              { levelView: "aPlusCProductExtensions" },
                              {
                                line: "727",
                                module:
                                  "AdsFormatTransformationCatalogPlugin.js",
                                moduleID: i.id,
                              },
                            );
                          },
                    },
                    m
                      ? {
                          getPreviewDescription: function (t, n) {
                            return a != null &&
                              o(
                                "AdsFormatTransformationUtils",
                              ).isCarouselIntroCardPreviewVariant(
                                a,
                                n != null ? n : 0,
                              )
                              ? s._(
                                  /*BTDS*/ "Show uploaded media in the intro card, and product media in the other cards.",
                                )
                              : s._(
                                  /*BTDS*/ "Show product media in every card.",
                                );
                          },
                        }
                      : _
                        ? { getPreviewDescription: h }
                        : {
                            previewDescription: o(
                              "AdsFlexibleFormatAdexUtils",
                            ).isIneligibleForFDODueToMMU()
                              ? s._(
                                  /*BTDS*/ "Show product media in every card.",
                                )
                              : s._(
                                  /*BTDS*/ "Show the first media you selected from your uploaded media in the intro card, then product media in the other cards.",
                                ),
                          },
                  )
                : _ &&
                    (a == null ? void 0 : a.uxVersion) ===
                      "modal_format_preview"
                  ? { getPreviewDescription: h }
                  : {},
            );
          }
          if (n === "sa_collection") {
            var y =
                (a == null ? void 0 : a.uxVersion) === "modal_format_preview" &&
                (a == null ? void 0 : a.isPCAUnifiedScaledAlpha) !== !0 &&
                ((a == null ? void 0 : a.originalFormat) ===
                  "sa_single_image" ||
                  (a == null ? void 0 : a.originalFormat) === "sa_carousel") &&
                (a == null ? void 0 : a.isPEOptedIn) === !0 &&
                (r("gkx")("15447") || r("qex")._("4521") === !0),
              C = y
                ? {
                    cfpToolKey: c,
                    CustomizeComponent: u,
                    customizeAction: function () {},
                    customizeIcon: o("meta-brand-pencil-outline-16")
                      .metaBrandPencilOutline16,
                  }
                : {};
            return (a == null ? void 0 : a.uxVersion) ===
              "modal_format_preview" &&
              !(a != null && a.isPCAUnifiedScaledAlpha) &&
              (a == null ? void 0 : a.originalFormat) === "sa_single_image"
              ? babelHelpers.extends(
                  {
                    previewDescription: o("AdsFlexibleFormatConstants")
                      .PE_COLLECTION_PREVIEW_DESCRIPTION,
                  },
                  C,
                )
              : babelHelpers.extends(
                  {
                    previewDescription: o(
                      "AdsFlexibleFormatAdexUtils",
                    ).isIneligibleForFDODueToMMU()
                      ? s._(
                          /*BTDS*/ "Show uploaded media in the cover and product media in the tile images.",
                        )
                      : s._(
                          /*BTDS*/ "Show the first media you selected from your uploaded media in the cover and product media in the tile images.",
                        ),
                  },
                  C,
                );
          }
          return n === "collage"
            ? {
                previewDescription: s._(
                  /*BTDS*/ "Combine multiple product images into a single collage creative.",
                ),
              }
            : {};
        },
        tooltipMessage: function (t) {
          return (t != null && t.isPCAUnifiedScaledAlpha) ||
            ((t == null ? void 0 : t.uxVersion) === "modal_format_preview" &&
              !(t != null && t.isPCAUnifiedScaledAlpha) &&
              (t == null ? void 0 : t.originalFormat) === "da_carousel")
            ? null
            : o("AdsFlexibleFormatConstants").CATALOG_SECTION_HEADING_TOOLTIP;
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
