__d(
  "AdsMetadataSourceCatalogPlugin",
  [
    "fbt",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupAIRelevancyMutators",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsConnectedSourcesCloseNestedViewAction",
    "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesModalSaveStateAction",
    "AdsFlexibleFormatAdexUtils",
    "AdsInterfacesLogger",
    "AdsMetadataConnectedSourcesUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPromotedObjectTypes",
    "AdsSetAdExtensionsRelevancySpecAction",
    "CatalogAdoptionExperimentationUtils",
    "JSResource",
    "ODS",
    "PECreativeSetupCooldown",
    "PEFunnelLogger",
    "PERelevanceUtils",
    "PEShowProductsOptOutSurveyUtils",
    "PEVisibleProductsFbtStrings",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupCatalogExtensionEligibilitySelector",
    "adsUserSettingsSelector",
    "catalogEnrollTypesToIgnoreForPE",
    "gkx",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = o("react")),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceCatalogPluginContainer.react",
        ).__setRef("AdsMetadataSourceCatalogPlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceCatalogPluginItemHeaderContainer.react",
        ).__setRef("AdsMetadataSourceCatalogPlugin"),
      ),
      p = r("lazyLoadComponent")(
        r("JSResource")("AdsConnectedSourcesCatalogOptInBadge.react").__setRef(
          "AdsMetadataSourceCatalogPlugin",
        ),
      ),
      _ = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsConnectedSourcesCatalogSelectedItemsContainer.react",
        ).__setRef("AdsMetadataSourceCatalogPlugin"),
      ),
      f = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceCatalogPluginNestedView.react",
        ).__setRef("AdsMetadataSourceCatalogPlugin"),
      ),
      g = function (t, n) {
        return n === r("AdsPromotedObjectTypes").PIXEL &&
          t === r("AdsAPIObjectives").OUTCOME_LEADS &&
          o(
            "CatalogAdoptionExperimentationUtils",
          ).checkExpForCatalogAdoptionExperimentationOrIBT(
            "pe_expansion_leads_website",
            "offsite_leadgen_pe",
            { silent: !0 },
          )
          ? s._(/*BTDS*/ "Products and services")
          : s._(/*BTDS*/ "Products");
      };
    function h(e, t, n) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES
        ? s._(
            /*BTDS*/ "Drive sales by showing relevant products to people who see your ad.",
          )
        : t === r("AdsPromotedObjectTypes").PIXEL &&
            e === r("AdsAPIObjectives").OUTCOME_LEADS &&
            o(
              "CatalogAdoptionExperimentationUtils",
            ).checkExpForCatalogAdoptionExperimentationOrIBT(
              "pe_expansion_leads_website",
              "offsite_leadgen_pe",
              { silent: !0 },
            )
          ? n === !0
            ? s._(
                /*BTDS*/ "Show more of what you offer so people can find what's relevant to them. Each image links to your website.",
              )
            : s._(
                /*BTDS*/ "Connect a catalog to show more of what you offer so people can find what's relevant to them. Each image links to your website.",
              )
          : t === r("AdsPromotedObjectTypes").ON_AD &&
              e === r("AdsAPIObjectives").OUTCOME_LEADS &&
              o(
                "CatalogAdoptionExperimentationUtils",
              ).checkExpForCatalogAdoptionExperimentationNoBundles(
                "pe_expansion_leads_instant_form",
                "onsite_leadgen_pe",
                { silent: !0 },
              )
            ? n === !0
              ? s._(
                  /*BTDS*/ "Show more of what you offer so people can find what's relevant to them. Each image opens your instant form.",
                )
              : s._(
                  /*BTDS*/ "Connect a catalog to show more of what you offer so people can find what's relevant to them. Each image opens your instant form.",
                )
            : t === r("AdsPromotedObjectTypes").PIXEL &&
                e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
              ? s._(
                  /*BTDS*/ "Show relevant products and services to people most likely to engage with your ad. Each product will link to your website.",
                )
              : e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
                  t != null &&
                  o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).ON_YOUR_AD_PROMOTED_OBJECT_TYPES.includes(t) &&
                  o(
                    "CatalogAdoptionExperimentationUtils",
                  ).checkExpForCatalogAdoptionExperimentationNoBundles(
                    "pe_expansion_engagement_on_your_ad",
                    "engagement_on_your_ad_pe",
                    { silent: !0 },
                  )
                ? n === !0
                  ? s._(
                      /*BTDS*/ "Your ad can use info from these products. Review the selection to make sure it's relevant.",
                    )
                  : s._(
                      /*BTDS*/ "Connect a catalog to let your ad use your product info.",
                    )
                : s._(
                    /*BTDS*/ "Achieve your goals by showing relevant products to people who see your ad.",
                  );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
        key: "catalog",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsMetadataSourceCatalogPluginContainer.react",
          ).__setRef("AdsMetadataSourceCatalogPlugin"),
          r("JSResource")(
            "AdsMetadataSourceCatalogPluginItemHeaderContainer.react",
          ).__setRef("AdsMetadataSourceCatalogPlugin"),
          r("JSResource")(
            "AdsConnectedSourcesCatalogOptInBadge.react",
          ).__setRef("AdsMetadataSourceCatalogPlugin"),
          r("JSResource")(
            "AdsConnectedSourcesCatalogSelectedItemsContainer.react",
          ).__setRef("AdsMetadataSourceCatalogPlugin"),
          r("JSResource")(
            "AdsMetadataSourceCatalogPluginNestedView.react",
          ).__setRef("AdsMetadataSourceCatalogPlugin"),
        ],
        getHeading: g,
        getSubheading: function (t, n, r) {
          return h(t, n, r);
        },
        getSortOrder: function () {
          return 6;
        },
        iconURI: "/images/ads/ads_manager/metadata/Catalog-Icon-Thumbnail.svg",
        isCollapsed: function (t) {
          return (t === void 0 && (t = 0), t != null && t > 0);
        },
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: o(
              "adsUEditorAdgroupCatalogExtensionEligibilitySelector",
            ).adsUEditorAdgroupCatalogExtensionEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        HeaderComponent: function () {
          return c.jsx(m, {});
        },
        MainComponent: function (t) {
          var e = t.onEditSourcesClick;
          return c.jsx(d, { onEditSourcesClick: e });
        },
        nestedViewType: "dynamic-handlers",
        NestedViewComponent: function () {
          return c.jsx(f, {});
        },
        getNestedViewTitle: function () {
          return o("PEVisibleProductsFbtStrings")
            .PE_VISIBLE_PRODUCTS_MODAL_TITLE;
        },
        getNestedViewDescription: function () {
          return o("PEVisibleProductsFbtStrings").PE_SELECT_PRODUCTS_SUBTITLE;
        },
        getNestedViewPrimaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "catalog"
            ? o("PEVisibleProductsFbtStrings").PE_SAVE_BUTTON_LABEL
            : null;
        },
        getNestedViewPrimaryClickHandler: function (t) {
          return function () {
            var e = r("AdsConnectedSourcesDataProvider")().pluginState,
              t = e == null ? void 0 : e.strategy;
            if ((t == null ? void 0 : t.selectedStrategyID) != null) {
              var n;
              r("AdsSetAdExtensionsRelevancySpecAction").dispatch(
                {
                  adgroupIDs: t.adgroupIDs,
                  aiRelevancyEntId: t.sessionID,
                  catalogActionType: "MANUAL",
                  extensionSpecs: [
                    {
                      extension_type: "product_extensions",
                      selected_strategy_id: t.selectedStrategyID,
                      virtual_pset_id: (n = t.virtualPsetID) != null ? n : null,
                    },
                  ],
                },
                {
                  line: "317",
                  module: "AdsMetadataSourceCatalogPlugin.js",
                  moduleID: i.id,
                },
              );
            } else
              t != null &&
                r("AdsSetAdExtensionsRelevancySpecAction").dispatch(
                  {
                    adgroupIDs: t.adgroupIDs,
                    aiRelevancyEntId: t.sessionID,
                    extensionSpecs: [],
                  },
                  {
                    line: "331",
                    module: "AdsMetadataSourceCatalogPlugin.js",
                    moduleID: i.id,
                  },
                );
            (r("AdsConnectedSourcesModalSaveStateAction").dispatch(
              { state: babelHelpers.extends({}, e) },
              {
                line: "338",
                module: "AdsMetadataSourceCatalogPlugin.js",
                moduleID: i.id,
              },
            ),
              r("AdsConnectedSourcesCloseNestedViewAction").dispatch(
                {},
                {
                  line: "343",
                  module: "AdsMetadataSourceCatalogPlugin.js",
                  moduleID: i.id,
                },
              ));
          };
        },
        getNestedViewSecondaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "catalog"
            ? s._(/*BTDS*/ "Back to creative setup")
            : null;
        },
        getNestedViewSecondaryClickHandler: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "catalog"
            ? function () {
                var e,
                  t,
                  n,
                  o = r("AdsConnectedSourcesDataProvider")();
                (r("AdsInterfacesLogger").logOnce({
                  eventName: "ai_relevancy_back_to_creative_setup_clicked",
                  data: {
                    adgroup_id:
                      (e =
                        (t = o.pluginState) == null ||
                        (t = t.strategy) == null ||
                        (t = t.adgroupIDs) == null
                          ? void 0
                          : t[0]) != null
                        ? e
                        : null,
                    subsequent_data: JSON.stringify({
                      ai_relevancy_session_id:
                        (n = o.session_id) != null ? n : null,
                    }),
                  },
                }),
                  r(
                    "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
                  ).dispatch(
                    {},
                    {
                      line: "373",
                      module: "AdsMetadataSourceCatalogPlugin.js",
                      moduleID: i.id,
                    },
                  ));
              }
            : null;
        },
        getItemCount: function (t) {
          var e, n, r;
          if (
            (t == null || (e = t.appInfoSpec) == null
              ? void 0
              : e.enrollStatus) === "OPT_OUT"
          )
            return 0;
          if (
            (t == null || (n = t.catalog) == null ? void 0 : n.productData) !=
            null
          ) {
            var o;
            return t == null || (o = t.catalog) == null
              ? void 0
              : o.productData.length;
          }
          return (t == null || (r = t.catalog) == null
            ? void 0
            : r.productSetID) != null
            ? 1
            : 0;
        },
        getInitialStateFromAdgroup: function (t) {
          var e,
            n,
            a,
            i,
            l,
            s,
            c,
            d,
            m,
            p,
            _ =
              t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.product_extensions) == null
                ? void 0
                : e.enroll_status,
            f =
              (n = t.creative) == null ||
              (n = n.creative_sourcing_spec) == null ||
              (n = n.catalog) == null ||
              (n = n.action_metadata) == null
                ? void 0
                : n.type,
            g =
              f != null &&
              o(
                "catalogEnrollTypesToIgnoreForPE",
              ).CATALOG_ENROLL_TYPES_TO_IGNORE.includes(f),
            h =
              (a = t.creative) == null ||
              (a = a.creative_sourcing_spec) == null ||
              (a = a.catalog) == null
                ? void 0
                : a.enroll_status;
          h == null &&
            _ === "OPT_IN" &&
            ((i = t.creative) == null || (i = i.creative_sourcing_spec) == null
              ? void 0
              : i.associated_product_set_id) != null &&
            !g &&
            (u || (u = o("ODS"))).bumpEntityKey(
              8427,
              "AdsMetadataSourceCatalogPlugin",
              "catalog_enroll_null_pe_opt_in_with_pset",
            );
          var y = o("AdsFlexibleFormatAdexUtils").passQEForReactiveControlPESE(
              !0,
            )
              ? h !== "OPT_IN" &&
                _ === "OPT_IN" &&
                ((l = t.creative) == null ||
                (l = l.creative_sourcing_spec) == null
                  ? void 0
                  : l.associated_product_set_id) != null &&
                !g
                ? "OPT_IN"
                : h
              : g || (_ === "OPT_OUT" && h !== "OPT_IN")
                ? "OPT_OUT"
                : _ === "OPT_IN" || h === "OPT_IN"
                  ? "OPT_IN"
                  : h,
            C =
              (s = t.creative) == null || (s = s.creative_sourcing_spec) == null
                ? void 0
                : s.associated_product_set_id,
            b =
              (c =
                (d = t.creative) == null ||
                (d = d.object_story_spec) == null ||
                (d = d.product_data) == null ||
                (d = d.filter(function (e) {
                  return e.product_id !== "0";
                })) == null
                  ? void 0
                  : d
                      .map(function (e) {
                        return String(e.product_id);
                      })
                      .filter(Boolean)) != null
                ? c
                : null,
            v = t == null ? void 0 : t.product_set_optimization_setting,
            S =
              o("PERelevanceUtils").getLLMStrategySelectionFromRelevancySpec(
                (m = t.creative) == null ||
                  (m = m.creative_sourcing_spec) == null
                  ? void 0
                  : m.ad_extensions_relevancy_spec,
              ) != null,
            R =
              h == null &&
              ((p = t.creative) == null ||
              (p = p.degrees_of_freedom_spec) == null ||
              (p = p.creative_features_spec) == null ||
              (p = p.product_extensions) == null ||
              (p = p.customizations) == null ||
              (p = p.pe_carousel) == null
                ? void 0
                : p.enroll_status) === "OPT_IN" &&
              C != null &&
              !g;
          return (
            o("PEFunnelLogger").logL1DataConsentState(
              { adgroup_id: t.id, object_level: "ad_level", product_set_id: C },
              babelHelpers.extends(
                {
                  consent_state: y === "OPT_IN" ? "ON" : "OFF",
                  consent_surface: "plugin_init",
                  is_existing_post: o(
                    "AdsAPIAdgroupRecordUtils",
                  ).isExistingPostAd(t),
                  is_initial_default: h == null,
                },
                o("PEFunnelLogger").getPEGKBlocklistFields(),
              ),
            ),
            {
              catalog: {
                enrollActionType: f,
                enrollStatus: y,
                isCarouselPEOptInWithoutCatalogConsent: R,
                isLLMStrategySelected: S,
                isProductExtensionOptOut: r("gkx")("25146") && _ === "OPT_OUT",
                productSetID: C,
                productData: b,
                productSetOptimizationSetting: v,
              },
            }
          );
        },
        OptInComponent: function () {
          return c.jsx(p, {});
        },
        SelectedItemsComponent: function () {
          return c.jsx(_, {});
        },
        mutateAdgroup: function (t, n, a, i) {
          var e,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g = n == null ? void 0 : n.strategy,
            h =
              g != null &&
              o(
                "PERelevanceUtils",
              ).isPELLMProductsSectionInCreativeSetupEnabled(),
            y =
              h && g != null
                ? o(
                    "AdsAdgroupAIRelevancyMutators",
                  ).adsAdgroupApplyLLMStrategySelectionMutator(t, g)
                : t;
          if (h) {
            var C;
            o("PECreativeSetupCooldown").applyPendingCooldown(
              g == null ? void 0 : g.pendingCooldown,
              {
                accountID: y.account_id,
                adgroupID:
                  g == null || (C = g.adgroupIDs) == null ? void 0 : C[0],
                objective: a == null ? void 0 : a.objective,
                pageID: a == null ? void 0 : a.pageId,
                urlType: a == null ? void 0 : a.urlType,
                userSettingsID: r(
                  "AdsAccountSettingsIdProvider",
                ).toFluxSelector()(),
              },
            );
          }
          var b = o(
            "PEShowProductsOptOutSurveyUtils",
          ).isInPeAiRelevancyOptOutCooldown(void 0, {
            accountID: y.account_id,
            objective: a == null ? void 0 : a.objective,
            pageId: a == null ? void 0 : a.pageId,
            urlType: a == null ? void 0 : a.urlType,
          });
          if (
            (n == null || (e = n.strategy) == null
              ? void 0
              : e.virtualPsetID) != null &&
            b
          ) {
            var v, S, R, L;
            r("AdsInterfacesLogger").log({
              eventName: "ai_relevancy_virtual_pset_opt_in_skipped",
              data: {
                adgroup_id:
                  (v =
                    n == null ||
                    (S = n.strategy) == null ||
                    (S = S.adgroupIDs) == null
                      ? void 0
                      : S[0]) != null
                    ? v
                    : null,
                subsequent_data: JSON.stringify({
                  reason: "llm_cooldown",
                  source: "catalog_plugin_mutate_adgroup",
                  ai_relevancy_session_id:
                    (R =
                      n == null || (L = n.strategy) == null
                        ? void 0
                        : L.sessionID) != null
                      ? R
                      : null,
                }),
              },
            });
          }
          if (
            (n == null || (l = n.strategy) == null
              ? void 0
              : l.virtualPsetID) != null &&
            !b
          ) {
            var E,
              k,
              I,
              T,
              D,
              x,
              $,
              P,
              N = "MANUAL",
              M = o("PERelevanceUtils").applyVirtualPsetCatalogAndFormatOptIn(
                y,
                N,
              );
            return (
              r("AdsInterfacesLogger").log({
                eventName: "ai_relevancy_virtual_pset_opt_in_applied",
                data: {
                  adgroup_id:
                    (E =
                      (k =
                        n == null ||
                        (I = n.strategy) == null ||
                        (I = I.adgroupIDs) == null
                          ? void 0
                          : I[0]) != null
                        ? k
                        : y.id) != null
                      ? E
                      : null,
                  subsequent_data: JSON.stringify({
                    source: "catalog_plugin_mutate_adgroup",
                    ai_relevancy_session_id:
                      (T =
                        n == null || (D = n.strategy) == null
                          ? void 0
                          : D.sessionID) != null
                        ? T
                        : null,
                    catalog_action_type: N,
                    selected_strategy_id:
                      (x =
                        n == null || ($ = n.strategy) == null
                          ? void 0
                          : $.selectedStrategyID) != null
                        ? x
                        : null,
                    virtual_pset_id:
                      n == null || (P = n.strategy) == null
                        ? void 0
                        : P.virtualPsetID,
                  }),
                },
              }),
              M
            );
          }
          if (
            o(
              "AdsPCAUnifiedFormatEligibilityUtils",
            ).isEligiblePCAUnifiedAdgroup(y) ||
            (n == null ? void 0 : n.catalog) == null
          )
            return y;
          var w = n.catalog,
            A = w.enrollActionType,
            F = w.enrollStatus,
            O = w.productData,
            B = w.productSetID,
            W = w.productSetOptimizationSetting,
            q = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
            U = o("adsUserSettingsSelector").adsUserSettingsSelector(),
            V =
              (s =
                (u = y.creative) == null ||
                (u = u.object_story_spec) == null ||
                (u = u.product_data) == null ||
                (u = u.filter(function (e) {
                  return e.get("product_id") !== "0";
                })) == null
                  ? void 0
                  : u
                      .map(function (e) {
                        return String(e.get("product_id"));
                      })
                      .filter(Boolean)
                      .toArray()) != null
                ? s
                : null,
            H = null;
          if (q != null) {
            var G,
              z = U(q);
            H =
              (G = z.getValue()) == null
                ? void 0
                : G.ads_cs_catalog_opt_out_timestamp;
          }
          var j =
              (c = y.creative) == null || (c = c.creative_sourcing_spec) == null
                ? void 0
                : c.associated_product_set_id,
            K =
              (d = y.creative) == null ||
              (d = d.creative_sourcing_spec) == null ||
              (d = d.catalog) == null ||
              (d = d.action_metadata) == null
                ? void 0
                : d.type,
            Q =
              (m = y.creative) == null ||
              (m = m.creative_sourcing_spec) == null ||
              (m = m.catalog) == null
                ? void 0
                : m.enroll_status,
            X =
              (y == null ||
              (p = y.creative) == null ||
              (p = p.degrees_of_freedom_spec) == null ||
              (p = p.creative_features_spec) == null ||
              (p = p.product_extensions) == null
                ? void 0
                : p.enroll_status) === "OPT_OUT",
            Y = r("gkx")("16980") || A != null ? A : "MANUAL",
            J = y == null ? void 0 : y.product_set_optimization_setting,
            Z = K !== "SITE_LINKS_GENERATED";
          if (X && Z && B === j && F === "OPT_OUT") {
            var ee, te;
            if (Q == null || Q === "OPT_OUT") {
              var ne, re;
              r("AdsInterfacesLogger").log({
                eventName: "pe_catalog_reenroll_without_consent",
                data:
                  ((re = {}),
                  (re.adgroup_id = y.id),
                  (re.ad_account_id = (ne = y.account_id) != null ? ne : null),
                  (re.product_set_id = B != null ? B : null),
                  re),
              });
            }
            return (
              r("AdsInterfacesLogger").log({
                eventName: "pe_catalog_enroll_mutation_total",
                data:
                  ((te = {}),
                  (te.adgroup_id = y.id),
                  (te.ad_account_id = (ee = y.account_id) != null ? ee : null),
                  (te.product_set_id = B != null ? B : null),
                  (te.subsequent_data = JSON.stringify({
                    should_opt_in: !0,
                    action_source: Y,
                  })),
                  te),
              }),
              o(
                "AdsAdgroupConnectedSourcesMutators",
              ).setConnectedSourcesCatalogEnrollStatusMutator(
                y,
                B,
                !0,
                Y,
                q,
                H,
                null,
                W,
                !1,
                a == null ? void 0 : a.objective,
                a == null ? void 0 : a.pageId,
                a == null ? void 0 : a.urlType,
                i,
              )
            );
          }
          if (
            (B === j || (B == null && j == null)) &&
            (Y === K || (Y == null && K == null)) &&
            (O == null ||
              V == null ||
              JSON.stringify(O) === JSON.stringify(V)) &&
            (W === J || (W == null && J == null)) &&
            F === Q
          )
            return y;
          var oe = null;
          if (
            (O != null && O.length !== 0
              ? (oe =
                  O == null
                    ? void 0
                    : O.map(function (e) {
                        return { product_id: e, product_source: "MANUAL" };
                      }))
              : O != null &&
                O.length === 0 &&
                (oe = [{ product_id: "0", product_source: "MANUAL" }]),
            Y === "MANUAL" && F == null)
          ) {
            var ae, ie;
            r("AdsInterfacesLogger").log({
              eventName: "pe_catalog_enroll_manual_null_mismatch",
              data:
                ((ie = {}),
                (ie.adgroup_id = y.id),
                (ie.ad_account_id = (ae = y.account_id) != null ? ae : null),
                (ie.product_set_id = B != null ? B : null),
                ie),
            });
          }
          r("AdsInterfacesLogger").log({
            eventName: "pe_catalog_enroll_mutation_total",
            data:
              ((f = {}),
              (f.adgroup_id = y.id),
              (f.ad_account_id = (_ = y.account_id) != null ? _ : null),
              (f.product_set_id = B != null ? B : null),
              (f.subsequent_data = JSON.stringify({
                should_opt_in: F === "OPT_IN",
                action_source: Y,
              })),
              f),
          });
          var le = o(
            "AdsAdgroupConnectedSourcesMutators",
          ).setConnectedSourcesCatalogEnrollStatusMutator(
            y,
            B,
            F === "OPT_IN",
            Y,
            q,
            H,
            oe,
            W,
            !1,
            a == null ? void 0 : a.objective,
            a == null ? void 0 : a.pageId,
            a == null ? void 0 : a.urlType,
            i,
          );
          return F === "OPT_OUT"
            ? o("PERelevanceUtils").applyVirtualPsetCatalogAndFormatOptOut(
                le,
                Y != null ? Y : "MANUAL",
              )
            : le;
        },
      },
      C = y;
    l.default = C;
  },
  226,
);
