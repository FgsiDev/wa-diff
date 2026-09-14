__d(
  "AdsMetadataSourceSiteExtensionPlugin",
  [
    "fbt",
    "AdsAPIAdgroupRecordUtils",
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsConnectedSourcesCatalogEnrollStatusUtils",
    "AdsConnectedSourcesCloseNestedViewAction",
    "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesFbt",
    "AdsConnectedSourcesModalSaveStateAction",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
    "AdsMetadataConnectedSourcesConstants",
    "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastAction",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionUtils",
    "AdsMetadataWebsiteMediaUtils",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUserSettingsDataManager",
    "GeoBaseText.react",
    "GeoHintText.react",
    "GeoPopover.react",
    "GeoTooltip.react",
    "GeoVStack.react",
    "IGAdsSensitiveVerticalsUtils",
    "JSResource",
    "SEFunnelLogger",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUserSettingsSelector",
    "gkx",
    "immutable",
    "justknobx",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsiteSourceContainer.react").__setRef(
          "AdsMetadataSourceSiteExtensionPlugin",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceSiteLinkPluginItemHeaderContainer.react",
        ).__setRef("AdsMetadataSourceSiteExtensionPlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")("AdsConnectedSourcesModalFooterAddon.react").__setRef(
          "AdsMetadataSourceSiteExtensionPlugin",
        ),
      ),
      p = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataSiteLinksSelectedItems.react").__setRef(
          "AdsMetadataSourceSiteExtensionPlugin",
        ),
      ),
      _ = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSiteExtensionManagedLinksContainer.react",
        ).__setRef("AdsMetadataSourceSiteExtensionPlugin"),
      ),
      f = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataSiteLinksOptInBadge.react").__setRef(
          "AdsMetadataSourceSiteExtensionPlugin",
        ),
      ),
      g = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataSiteLinksOptInToggle.react").__setRef(
          "AdsMetadataSourceSiteExtensionPlugin",
        ),
      ),
      h = function () {
        return s._(/*BTDS*/ "Site links {tooltip}", [
          s._param(
            "tooltip",
            u.jsx(r("GeoTooltip.react"), {
              content: o("AdsConnectedSourcesFbt").SITE_LINKS_EXTENSION_TOOLTIP,
            }),
          ),
        ]);
      },
      y = function () {
        var e,
          t = s._(
            /*BTDS*/ "Potentially help increase conversions by giving people more ways to learn and buy.",
          );
        return s._(/*BTDS*/ "{icon}", [
          s._param(
            "icon",
            u.jsxs("div", {
              children: [
                t,
                u.jsx(r("GeoPopover.react"), {
                  align: "middle",
                  content: [
                    u.jsxs(
                      r("GeoVStack.react"),
                      {
                        children: [
                          u.jsx(r("GeoBaseText.react"), {
                            color: "value",
                            size: "valueDescription",
                            children: (e = o("AdsConnectedSourcesFbt"))
                              .SITE_LINKS_STAT_DISCLAIMER,
                          }),
                          u.jsx(r("GeoHintText.react"), {
                            heading: e.SITE_LINKS_STAT_HOW_THIS_WORKS_TITLE,
                            children: e.SITE_LINKS_STAT_HOW_THIS_WORKS_CONTENT,
                          }),
                          u.jsx(r("GeoHintText.react"), {
                            heading: e.SITE_LINKS_STAT_CALCULATION_METHOD_TITLE,
                            children:
                              e.SITE_LINKS_STAT_CALCULATION_METHOD_CONTENT,
                          }),
                        ],
                      },
                      "content",
                    ),
                  ],
                  heading: e.SITE_LINKS_STAT_CSBQRT_HEADING,
                  isSticky: !1,
                  position: "below",
                  renderDelay: 0,
                }),
              ],
            }),
          ),
        ]);
      },
      C = {
        key: "site_links",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")("AdsMetadataWebsiteSourceContainer.react").__setRef(
            "AdsMetadataSourceSiteExtensionPlugin",
          ),
          r("JSResource")(
            "AdsMetadataSourceSiteLinkPluginItemHeaderContainer.react",
          ).__setRef("AdsMetadataSourceSiteExtensionPlugin"),
          r("JSResource")("AdsConnectedSourcesModalFooterAddon.react").__setRef(
            "AdsMetadataSourceSiteExtensionPlugin",
          ),
          r("JSResource")("AdsMetadataSiteLinksSelectedItems.react").__setRef(
            "AdsMetadataSourceSiteExtensionPlugin",
          ),
          r("JSResource")(
            "AdsMetadataSiteExtensionManagedLinksContainer.react",
          ).__setRef("AdsMetadataSourceSiteExtensionPlugin"),
          r("JSResource")("AdsMetadataSiteLinksOptInBadge.react").__setRef(
            "AdsMetadataSourceSiteExtensionPlugin",
          ),
          r("JSResource")("AdsMetadataSiteLinksOptInToggle.react").__setRef(
            "AdsMetadataSourceSiteExtensionPlugin",
          ),
        ],
        getHeading: h,
        getSubheading: y,
        getSortOrder: function () {
          return 4;
        },
        iconURI:
          "/images/ads/ads_manager/metadata/SiteLinks-Icon-Thumbnail.svg",
        FooterAddonComponent: m,
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: r("adsCreateSelector")(
              [
                o(
                  "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
                ).adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector,
                r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
                o("adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector")
                  .adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector,
              ],
              function (t, n, r) {
                var e =
                  (n == null ? void 0 : n[0]) != null &&
                  o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n[0]);
                return o(
                  "AdsMetadataWebsiteMediaUtils",
                ).isEligibleForCombinedWebsiteHighlightsExperience({
                  fromExistingPostFlow: e,
                  exposure: "silent",
                  isCatalogEligible: r,
                })
                  ? !1
                  : t;
              },
              { name: i.id + ".isEligible" },
            ),
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        HeaderComponent: function () {
          return u.jsx(d, {});
        },
        MainComponent: function () {
          return u.jsx(c, {});
        },
        SelectedItemsComponent: function () {
          return u.jsx(p, {});
        },
        getItemCount: function (t) {
          var e, n;
          return (e =
            t == null || (n = t.siteLinks) == null ? void 0 : n.size) != null
            ? e
            : 0;
        },
        isCollapsed: function (t) {
          return (t === void 0 && (t = 0), t != null && t > 0);
        },
        getInitialStateFromAdgroup: function (t) {
          var e,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).getInitialSiteExtensionStateFromAdgroup(t),
            p =
              ((e =
                (n = t.creative) == null ||
                (n = n.creative_sourcing_spec) == null ||
                (n = n.site_links_spec) == null
                  ? void 0
                  : n.length) != null
                ? e
                : 0) > 0;
          return (
            o("SEFunnelLogger").logL1PluginInitialState(
              { adgroup_id: t.id, object_level: "ad_level" },
              babelHelpers.extends(
                {
                  source: "from_adgroup",
                  enroll_status:
                    m == null || (r = m.siteExtension) == null
                      ? void 0
                      : r.enrollStatus,
                  enroll_action_type:
                    m == null || (a = m.siteExtension) == null
                      ? void 0
                      : a.enrollActionType,
                  consent_enroll_status:
                    m == null || (i = m.siteLinksDataConsented) == null
                      ? void 0
                      : i.enrollStatus,
                  consent_action_type:
                    m == null || (l = m.siteLinksDataConsented) == null
                      ? void 0
                      : l.enrollActionType,
                  dynamic_se_enroll_status:
                    m == null || (s = m.dynamicSiteLinksSpec) == null
                      ? void 0
                      : s.enrollStatus,
                  is_shopping_links:
                    (m == null ? void 0 : m.is_shopping_links) === !0,
                  site_links_count:
                    (u =
                      m == null || (c = m.siteLinks) == null
                        ? void 0
                        : c.size) != null
                      ? u
                      : 0,
                  has_existing_l1_site_links: p,
                },
                o("SEFunnelLogger").getSEGKBlocklistFields(),
              ),
            ),
            o("SEFunnelLogger").logL1DataConsentState(
              { adgroup_id: t.id, object_level: "ad_level" },
              babelHelpers.extends(
                {
                  consent_state:
                    (m == null || (d = m.siteLinksDataConsented) == null
                      ? void 0
                      : d.enrollStatus) === "OPT_IN"
                      ? "ON"
                      : "OFF",
                  is_initial_default: !p,
                  modal_state: "collapsed",
                },
                o("SEFunnelLogger").getSEGKBlocklistFields(),
              ),
            ),
            m
          );
        },
        getInitialStateFromModalOpenAction: function (t) {
          var e,
            n,
            a,
            i,
            l =
              (e = (n = t.siteLinks) == null ? void 0 : n.size) != null ? e : 0,
            s =
              r("IGAdsSensitiveVerticalsUtils")
                .is_pharma_or_sensitive_vertical ||
              r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical ||
              !o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(
                t.siteLinks,
              ) ||
              r("gkx")("1857"),
            u =
              r("justknobx")._("850") &&
              o(
                "AdsConnectedSourcesCatalogEnrollStatusUtils",
              ).isCatalogDefaultedOn(
                r("AdsConnectedSourcesDataProvider")().pluginState,
              ),
            c = l > 0 && !s && !u ? "OPT_IN" : null,
            d = c === "OPT_IN" ? "DEFAULT" : null,
            m =
              !s &&
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).isDynamicSEDefaultOptInEnabled()
                ? "OPT_IN"
                : null,
            p = !1;
          if (c === "OPT_IN") {
            var _,
              f = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
              g = o("adsUserSettingsSelector").adsUserSettingsSelector(),
              h = null;
            f != null && (h = g(f));
            var y = r("adsUEditorAccountIDSelector")();
            ((p = o(
              "AdsMetadataConnectedSourcesUtils",
            ).sitelinkShouldStickyOptOut(
              y,
              (_ = h) == null ? void 0 : _.getValue(),
            )),
              p && ((c = null), (d = "STICKY")));
          }
          if (m === "OPT_IN") {
            var C,
              b = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
              v = o("adsUserSettingsSelector").adsUserSettingsSelector(),
              S = null;
            b != null && (S = v(b));
            var R = r("adsUEditorAccountIDSelector")(),
              L = o(
                "AdsMetadataConnectedSourcesUtils",
              ).dynamicSEShouldStickyOptOutByGK(
                R,
                (C = S) == null ? void 0 : C.getValue(),
              );
            L && (m = null);
          }
          var E = d != null ? (d === "DEFAULT" ? "DEFAULT" : "STICKY") : null,
            k = !!(t.is_shopping_links == null && r("gkx")("12472")),
            I =
              t.shopping_links_randomized_order == null && r("gkx")("12472")
                ? !1
                : t.shopping_links_randomized_order,
            T =
              u || (t == null ? void 0 : t.siteLinksDataConsented) === !1 || p
                ? "OPT_OUT"
                : l > 0
                  ? "OPT_IN"
                  : "OPT_OUT";
          return (
            o("SEFunnelLogger").logL1PluginInitialState(
              {
                adgroup_id: (a = t.adgroupIDs) == null ? void 0 : a[0],
                object_level: "ad_level",
              },
              babelHelpers.extends(
                {
                  source: "from_modal_open_action",
                  caller: t.caller,
                  enroll_status: c,
                  enroll_action_type: d,
                  consent_enroll_status: T,
                  consent_action_type: E,
                  dynamic_se_enroll_status: m,
                  is_shopping_links: k,
                  site_links_count: l,
                },
                o("SEFunnelLogger").getSEGKBlocklistFields(),
              ),
            ),
            o("SEFunnelLogger").logL1DataConsentState(
              {
                adgroup_id: (i = t.adgroupIDs) == null ? void 0 : i[0],
                object_level: "ad_level",
              },
              babelHelpers.extends(
                {
                  consent_state: T === "OPT_IN" ? "ON" : "OFF",
                  is_initial_default: E === "DEFAULT",
                  modal_state: "expanded",
                },
                o("SEFunnelLogger").getSEGKBlocklistFields(),
              ),
            ),
            {
              siteLinks: t.siteLinks,
              is_shopping_links: k,
              shopping_links_randomized_order: I,
              siteExtension: { enrollStatus: c, enrollActionType: d },
              dynamicSiteLinksSpec: { enrollStatus: m },
              siteLinksDataConsented: babelHelpers.extends(
                { enrollStatus: T, enrollActionType: E },
                o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout()
                  ? { scope: "DATA_CONSENT_ELIGIBLE" }
                  : {},
              ),
            }
          );
        },
        mutateAdgroup: function (t, n) {
          var e, a, i, l, s, u;
          if (
            (n == null ? void 0 : n.isCombinedWebsiteHighlightsVisible) === !0
          )
            return t;
          var c = t,
            d = n == null ? void 0 : n.siteLinks,
            m = n == null ? void 0 : n.siteExtension,
            p = n == null ? void 0 : n.dynamicSiteLinksSpec,
            _ =
              n == null || (e = n.siteLinksDataConsented) == null
                ? void 0
                : e.enrollStatus,
            f =
              (a =
                n == null || (i = n.siteExtension) == null
                  ? void 0
                  : i.enrollActionType) != null
                ? a
                : "MANUAL",
            g =
              (l =
                n == null || (s = n.siteLinksDataConsented) == null
                  ? void 0
                  : s.enrollActionType) != null
                ? l
                : "MANUAL",
            h = m == null ? void 0 : m.enrollStatus,
            y =
              (u = t.creative) == null ||
              (u = u.degrees_of_freedom_spec) == null ||
              (u = u.creative_features_spec) == null ||
              (u = u.site_extensions) == null
                ? void 0
                : u.enroll_status,
            C = p == null ? void 0 : p.enrollStatus,
            b = n == null ? void 0 : n.is_shopping_links,
            v = n == null ? void 0 : n.shopping_links_randomized_order,
            S =
              r("IGAdsSensitiveVerticalsUtils")
                .is_pharma_or_sensitive_vertical ||
              r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical ||
              !o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(d) ||
              r("gkx")("1857");
          if (C != null) {
            c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.dynamic_site_links_spec.enroll_status.set(
              C,
              c,
            );
            var R = null,
              L = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
              E = o("adsUserSettingsSelector").adsUserSettingsSelector();
            if (L != null) {
              var k,
                I = E(L);
              R =
                (k = I.getValue()) == null
                  ? void 0
                  : k.ads_cs_dynamic_se_opt_out_timestamp;
            }
            var T = C === "OPT_OUT";
            L != null &&
              (r(
                "AdsUserSettingsDataManager",
              ).setConnectedSourcesDynamicSEOptInStatus(L, !T),
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).updateConnectedSourceDynamicSEOptOutTimestamp(
                R,
                t.account_id,
                !T,
                L,
              ));
          }
          var D = r("AdsAccountSettingsIdProvider").toFluxSelector()();
          if (D != null) {
            var x =
              h === "OPT_OUT" &&
              (o("AdsFlexibleFormatAdexUtils").passQEForReactiveControlPESE(
                !0,
              ) ||
                (d != null &&
                  (d == null ? void 0 : d.size) >=
                    o("AdsMetadataConnectedSourcesConstants")
                      .SITE_LINKS_COUNT_LOWER_LIMIT));
            if ((m == null ? void 0 : m.userModifiedEnrollStatus) === !0) {
              var $;
              (r(
                "AdsUserSettingsDataManager",
              ).setConnectedSourcesSitelinksOptInStatus(D, !x),
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).updateConnectedSourceSitelinksOptOutTimestamp(
                  ($ = o("adsUserSettingsSelector")
                    .adsUserSettingsSelector()(D)
                    .getValue()) == null
                    ? void 0
                    : $.ads_cs_sitelinks_opt_out_timestamp,
                  t.account_id,
                  !x,
                  D,
                ));
            }
          }
          if (d) {
            var P = r("immutable").List(
                Array.from(d.values())
                  .filter(function (e) {
                    return e != null;
                  })
                  .map(function (e) {
                    return r("immutable").Map({
                      site_link_title: e.site_link_title,
                      site_link_url: e.site_link_url,
                      site_link_image_hash: e.site_link_image_hash,
                      site_link_image_url: e.site_link_image_url,
                      site_link_recommendation_type:
                        e.site_link_recommendation_type,
                      site_link_hash: e.site_link_hash,
                      is_site_link_sticky: e.is_site_link_sticky,
                      site_link_id: e.site_link_id,
                      site_link_language: e.site_link_language,
                      site_link_extra_metadata: e.site_link_extra_metadata,
                      site_link_url_anchor: e.site_link_url_anchor,
                      site_link_url_recommender_type:
                        e.site_link_url_recommender_type,
                      site_link_website_data_source:
                        e.site_link_website_data_source,
                      is_defaulting_eligible: e.is_defaulting_eligible,
                    });
                  }),
              ),
              N =
                y === "OPT_IN" &&
                h === "OPT_OUT" &&
                !o("AdsFlexibleFormatAdexUtils").passQEForReactiveControlPESE(
                  !0,
                );
            (N &&
              (P = P.filter(function (e) {
                return e.get("site_link_id") != null;
              })),
              (c =
                P.size > 0
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.site_links_spec.set(P, c)
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.site_links_spec.delete(
                      c,
                    )));
            var M = h != null ? h : C,
              w = M != null ? M : !S && P.size > 0 ? "OPT_IN" : "OPT_OUT",
              A =
                _ === "OPT_OUT" || h === "OPT_OUT"
                  ? "OPT_OUT"
                  : P.size > 0 || C === "OPT_IN"
                    ? "OPT_IN"
                    : "OPT_OUT",
              F = A === "OPT_OUT",
              O = F ? "OPT_OUT" : w;
            (F &&
              (c = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.dynamic_site_links_spec.enroll_status.set(
                "OPT_OUT",
                c,
              )),
              o("AdsFlexibleFormatAdexUtils").isEligibleForEPAFDOSurface(c) ||
                ((c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                  O,
                  c,
                )),
                (c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                  f,
                  c,
                ))),
              (c = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                A,
                c,
              )),
              (c = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                g,
                c,
              )),
              o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout() &&
                (c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
                  "DATA_CONSENT_ELIGIBLE",
                  c,
                )),
              P.size > 0 &&
                ((c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.customizations.is_shopping_links.set(
                  r("gkx")("12472") && (b == null || b === void 0) ? !0 : b,
                  c,
                )),
                (c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.customizations.shopping_links_randomized_order.set(
                  r("gkx")("12472") && (v == null || v === void 0) ? !1 : v,
                  c,
                ))));
          } else
            c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_spec.delete(c);
          return (
            (c = o("AdsAdgroupFormatTransformationMutators").syncFTSFromCFS(c)),
            c
          );
        },
        NestedViewComponent: function () {
          return u.jsx(_, {});
        },
        getNestedViewPrimaryClickHandler: function (t) {
          return function () {
            var e,
              n,
              a = (e = t.adgroupIDs) != null ? e : [];
            a.forEach(function (e) {
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).logSiteExtensionManagedLinksClick(
                e,
                "back_to_metadata_button_click",
                JSON.stringify({ adgroupID: e }),
              );
            });
            var l =
              (n = t.pluginState) == null ||
              (n = n.managedSiteLinksLocalState) == null
                ? void 0
                : n.size;
            (t.visibleNestedViewComponentPluginKey === "site_links" &&
              r("AdsConnectedSourcesModalSaveStateAction").dispatch(
                {
                  state: babelHelpers.extends(
                    {},
                    t.pluginState,
                    o(
                      "AdsMetadataSiteExtensionUtils",
                    ).getManagedLinksApplyState(t.pluginState),
                  ),
                },
                {
                  line: "702",
                  module: "AdsMetadataSourceSiteExtensionPlugin.js",
                  moduleID: i.id,
                },
              ),
              r("AdsConnectedSourcesCloseNestedViewAction").dispatch(
                {},
                {
                  line: "710",
                  module: "AdsMetadataSourceSiteExtensionPlugin.js",
                  moduleID: i.id,
                },
              ),
              l != null &&
                r(
                  "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastAction",
                ).dispatch(
                  {
                    showAdsToast: !0,
                    toastHeader: o("AdsConnectedSourcesFbt")
                      .SITE_LINKS_MANAGE_APPLY_SUCCESS_TOAST_HEADER,
                    toastDescription: o(
                      "AdsConnectedSourcesFbt",
                    ).SITE_LINKS_MANAGE_APPLY_SUCCESS_TOAST_BODY(l),
                  },
                  {
                    line: "713",
                    module: "AdsMetadataSourceSiteExtensionPlugin.js",
                    moduleID: i.id,
                  },
                ));
          };
        },
        getNestedViewSecondaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "site_links"
            ? o("AdsConnectedSourcesFbt").SITE_LINKS_MANAGE_DISMISS_BUTTON
            : null;
        },
        getNestedViewSecondaryClickHandler: function (t) {
          var e = t.adgroupIDs,
            n = t.visibleNestedViewComponentPluginKey;
          return n === "site_links"
            ? (e == null ||
                e.forEach(function (e) {
                  o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).logSiteExtensionManagedLinksClick(
                    e,
                    "back_to_metadata_without_saving_click",
                    JSON.stringify({ adgroupID: e }),
                  );
                }),
              function () {
                r(
                  "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
                ).dispatch(
                  {},
                  {
                    line: "748",
                    module: "AdsMetadataSourceSiteExtensionPlugin.js",
                    moduleID: i.id,
                  },
                );
              })
            : null;
        },
        OptInComponent: function () {
          return u.jsx(f, {});
        },
        MasterToggleComponent: function () {
          return u.jsx(g, {});
        },
        getNestedViewTitle: function () {
          return o("AdsConnectedSourcesFbt").SITE_LINKS_MANAGE_BUTTON;
        },
        getNestedViewDescription: function () {
          return o("AdsConnectedSourcesFbt").SITE_LINKS_MANAGE_VIEW_DESCRIPTION;
        },
        getNestedViewPrimaryButtonLabel: function () {
          return o("AdsConnectedSourcesFbt").SITE_LINKS_MANAGE_VIEW_BACK_BUTTON;
        },
        nestedViewType: "dynamic-handlers",
      },
      b = C;
    l.default = b;
  },
  226,
);
