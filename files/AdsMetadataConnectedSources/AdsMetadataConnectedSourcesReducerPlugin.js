__d(
  "AdsMetadataConnectedSourcesReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsCTWAAutogenCatalogSelectionMutators",
    "AdsFlexibleFormatAdexUtils",
    "AdsFormatTransformationUtils",
    "AdsMediaTypeAutomationMutators",
    "AdsMetadataConnectedSourcesProductSetActionFlux",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUserSettingsDataManager",
    "CatalogAdoptionExperimentationUtils",
    "PECatalogStickyOptOutInputs",
    "ProductBrowsingAdsUtils",
    "adsUEditorAccountIDSelector",
    "gkx",
    "isAdsCanvasLink",
    "justknobx",
    "nullthrows",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return e.catalogActionType != null
        ? e.catalogActionType
        : e.isEnablePEFromAwptPEMigration === !0
          ? "AWPT_MIGRATION_ENABLE_PE"
          : e.isEnableCatalogConsistencyFromAwptPEMigration === !0
            ? "AWPT_MIGRATION_ENBALE_CATALOG_CONSISTENCY"
            : (t = e.isSpecFixDispatch) != null && t
              ? "DEFAULT"
              : "MANUAL";
    }
    function s(e, t, n) {
      var r,
        a,
        i = e.adgroupIDs[0],
        l = i != null ? t.get(i) : null,
        s = i != null ? ((r = n.get(i)) == null ? void 0 : r.getValue()) : null;
      return o("PECatalogStickyOptOutInputs").resolveGranularStickyOptOutInputs(
        l == null || (a = l.campaignGroup) == null ? void 0 : a.objective,
        s != null && l != null
          ? o("PECatalogStickyOptOutInputs").resolveStickyOptOutPageID(
              s,
              l.specPlugin,
            )
          : null,
        e.adUrl,
      );
    }
    function u(e, t, n) {
      if (
        !o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(n, e)
      )
        return e;
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.creative_sourcing_spec.product_media_metadata_spec.format_option.set(
        "carousel_images_multi_items",
      )(e);
      ((a = o(
        "AdsMediaTypeAutomationMutators",
      ).changeMediaTypeAutomationOptinMutator(a, "OPT_IN", "DEFAULT")),
        t.shouldApplyWS2FormatDefaults === !0 &&
          ((a = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptInMutator(
            a,
            "carousel",
            "catalog",
          )),
          (a = o(
            "AdsAdgroupFormatTransformationMutators",
          ).defaultOffProductExtensionEnrollStatusMutator(a))));
      var i = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.link_data.link.get(a);
      return (
        r("isAdsCanvasLink")(i) &&
          ((a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.delete(a)),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.picture.delete(a))),
        a
      );
    }
    var c = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          accountID: r("adsUEditorAccountIDSelector"),
          userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        },
        function (t, n, a) {
          var i = a.accountID,
            l = a.parentData,
            c = a.userSettingsID,
            m = e(n),
            p = s(n, l, t),
            _ = p.objective,
            f = p.pageId,
            g = p.urlType,
            h = r("justknobx")._("1384");
          if (
            (c != null &&
              n.productExtensionsOnly !== !0 &&
              (!h || m === "MANUAL") &&
              (r(
                "AdsUserSettingsDataManager",
              ).setConnectedSourcesCatalogOptInStatus(
                c,
                n.productSetID != null,
              ),
              i != null &&
                m === "MANUAL" &&
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).updateConnectedSourceCatalogOptOutTimestamp(
                  n.currentCatalogOptOutTimestamp,
                  i,
                  n.productSetID,
                  c,
                  _,
                  f,
                  g,
                  n.adgroupIDs[0],
                )),
            n.deleteProductSetOnly === !0)
          )
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
              var t,
                n = (t = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.creative_sourcing_spec.associated_product_set_id.delete(
                  e,
                );
              return (
                (n =
                  t.creative.creative_sourcing_spec.product_media_metadata_spec.format_option.delete(
                    n,
                  )),
                (n =
                  t.creative.creative_sourcing_spec.catalog.enroll_status.set(
                    "OPT_OUT",
                    n,
                  )),
                (n =
                  t.creative.creative_sourcing_spec.catalog.action_metadata.type.set(
                    "MANUAL",
                    n,
                  )),
                (n = o(
                  "AdsMediaTypeAutomationMutators",
                ).removeMediaTypeAutomationFieldsMutator(n)),
                (n = o(
                  "AdsAdgroupFormatTransformationMutators",
                ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                  n,
                  "carousel",
                  "catalog",
                )),
                (n = o(
                  "AdsAdgroupFormatTransformationMutators",
                ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                  n,
                  "carousel",
                  "manual_uploads",
                )),
                (n = o(
                  "AdsAdgroupFormatTransformationMutators",
                ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                  n,
                  "sa_collection",
                  "catalog",
                )),
                (n = o("AdsMutators").chain(
                  t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                    "OPT_OUT",
                  ),
                  t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
                    "MANUAL",
                  ),
                  t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                    "OPT_OUT",
                  ),
                  t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                    "MANUAL",
                  ),
                )(n)),
                n
              );
            });
          if (n.productSetID == null) {
            if (n.productExtensionsOnly === !0) {
              var y;
              return o("AdsMutators").mutateEach(
                t,
                n.adgroupIDs,
                o("AdsMutators").chain(
                  (y = r(
                    "AdsAdgroupRecordAccessors",
                  )).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                    "OPT_OUT",
                  ),
                  y.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                    "MANUAL",
                  ),
                  y.creative.degrees_of_freedom_spec.creative_features_spec
                    .product_extensions.customizations.delete,
                  y.creative.creative_sourcing_spec.associated_product_set_id
                    .delete,
                ),
              );
            }
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
              var t,
                a,
                i = r("nullthrows")(l.get(e.id)),
                s = i.campaign,
                u = i.campaignGroup,
                c = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isCTWADestinationByCampaign(s)
                  ? o(
                      "AdsCTWAAutogenCatalogSelectionMutators",
                    ).clearCTWAAutogenCatalogProductData(e)
                  : e,
                d = o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                    "OPT_OUT",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                    (t = n.isSpecFixDispatch) != null && t
                      ? "DEFAULT"
                      : "MANUAL",
                  ),
                  r("AdsAdgroupRecordAccessors").creative
                    .degrees_of_freedom_spec.creative_features_spec
                    .product_extensions.customizations.delete,
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.catalog.enroll_status.set(
                    "OPT_OUT",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
                    (a = n.isSpecFixDispatch) != null && a
                      ? "DEFAULT"
                      : "MANUAL",
                  ),
                  r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                    .associated_product_set_id.delete,
                )(c);
              return (
                o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
                  u,
                  d,
                ) &&
                  ((d = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                    d,
                    "carousel",
                    "catalog",
                  )),
                  (d = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                    d,
                    "carousel",
                    "manual_uploads",
                  )),
                  (d = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                    d,
                    "sa_collection",
                    "catalog",
                  ))),
                d
              );
            });
          }
          return n.productExtensionsOnly === !0
            ? o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
                var t,
                  a = o("AdsMutators").chain(
                    (t = r(
                      "AdsAdgroupRecordAccessors",
                    )).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                      "OPT_IN",
                    ),
                    t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                      "DEFAULT",
                    ),
                    t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                      "OPT_IN",
                    ),
                    t.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
                      "DEFAULT",
                    ),
                    t.creative.creative_sourcing_spec.associated_product_set_id.set(
                      n.productSetID,
                    ),
                  )(e);
                return (
                  (a = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).dualWriteEPAFormatTransformationOptIn(a, "catalog")),
                  a
                );
              })
            : o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e) {
                var t = r("nullthrows")(l.get(e.id)),
                  a = t.campaign,
                  i = t.campaignGroup,
                  s = o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).isCTWADestinationByCampaign(a),
                  c = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.associated_product_set_id.get(
                    e,
                  ),
                  p =
                    s && c !== n.productSetID
                      ? o(
                          "AdsCTWAAutogenCatalogSelectionMutators",
                        ).clearCTWAAutogenCatalogProductData(e)
                      : e,
                  _ = o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).isEngagementOnYourAdSetup(a, i)
                    ? []
                    : [
                        r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                          "OPT_IN",
                        ),
                        r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                          n.catalogActionType === "MANUAL"
                            ? "MANUAL"
                            : "DEFAULT",
                        ),
                      ].concat(
                        s
                          ? []
                          : [
                              r(
                                "AdsAdgroupRecordAccessors",
                              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                                "OPT_IN",
                              ),
                              r(
                                "AdsAdgroupRecordAccessors",
                              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
                                "DEFAULT",
                              ),
                            ],
                      ),
                  f = o("AdsMutators").chain.apply(
                    o("AdsMutators"),
                    _.concat([
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.catalog.enroll_status.set(
                        "OPT_IN",
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
                        m != null ? m : "DEFAULT",
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.associated_product_set_id.set(
                        n.productSetID,
                      ),
                      r("AdsAdgroupRecordAccessors").creative
                        .creative_sourcing_spec.ad_extensions_relevancy_spec
                        .delete,
                    ]),
                  )(p);
                return (
                  _.length > 0 &&
                    (f = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).dualWriteEPAFormatTransformationOptIn(
                      f,
                      "catalog",
                      s ? ["sa_collection"] : ["sa_collection", "carousel"],
                    )),
                  (f = u(f, n, i)),
                  (f = d(f, a, i)),
                  (f = o(
                    "ProductBrowsingAdsUtils",
                  ).maybeUpdateProductBrowsingSpec(
                    f,
                    !1,
                    null,
                    i,
                    a,
                    "connected_sources_catalog_opt_in",
                  )),
                  f
                );
              });
        },
        [r("AdsMetadataConnectedSourcesProductSetActionFlux").actionType],
      ),
    };
    function d(e, t, n) {
      var a = e,
        i = o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
          n,
          e,
        );
      if (
        o(
          "AdsFlexibleFormatAdexUtils",
        ).isEligibleForReactiveControlPESEOrAppInfo(t, n, a, !0) &&
        !i
      ) {
        var l, s, u;
        a = o(
          "AdsAdgroupFormatTransformationMutators",
        ).adsAdgroupFormatTransformationDataSourceOptInMutator(
          a,
          "sa_collection",
          "catalog",
        );
        var c =
            ((l = r("qex")._("2720")) != null ? l : !1) ||
            ((s = r("gkx")("1583")) != null ? s : !1) ||
            o(
              "CatalogAdoptionExperimentationUtils",
            ).checkExpForCatalogAdoptionExperimentation(
              "meta_product_growth_2026_h2_launch_round_1",
              "pe_pfr_improvements",
              null,
              null,
              !0,
              !1,
              !1,
            ),
          d =
            (u = a.creative) == null ||
            (u = u.degrees_of_freedom_spec) == null ||
            (u = u.creative_features_spec) == null ||
            (u = u.product_extensions) == null ||
            (u = u.customizations) == null ||
            (u = u.pe_carousel) == null
              ? void 0
              : u.enroll_status;
        !c || d == null
          ? (a = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                "OPT_OUT",
              ),
            )(a))
          : d === "OPT_IN" &&
            (a = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDataSourceOptInMutator(
              a,
              "carousel",
              "catalog",
            ));
      }
      if (i) {
        if (m(a)) return a;
        a = o(
          "AdsAdgroupFormatTransformationMutators",
        ).adsAdgroupFormatTransformationDataSourceOptInMutator(
          a,
          "carousel",
          "catalog",
        );
        var p = o(
          "AdsFormatTransformationUtils",
        ).getPcaUnificationUploadedMediaPresent(a);
        p
          ? ((a = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDataSourceOptInMutator(
              a,
              "carousel",
              "manual_uploads",
            )),
            (a = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                "OPT_IN",
              ),
            )(a)),
            o(
              "AdsFormatTransformationUtils",
            ).getIsFormatEligiblePlacementsAvailable(
              null,
              "sa_collection",
              "catalog",
              t,
              !0,
            ) &&
              (a = o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator(
                a,
                "sa_collection",
                "catalog",
                "MANUAL",
              )))
          : (a = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                "OPT_OUT",
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                "OPT_OUT",
              ),
            )(a));
      }
      return a;
    }
    function m(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.product_extensions) == null ||
        (t = t.action_metadata) == null
          ? void 0
          : t.type) === "DUPLICATION_UPGRADE"
      );
    }
    var p = c;
    l.default = p;
  },
  98,
);
