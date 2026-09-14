__d(
  "AdsMetadataCombinedWebsiteHighlightsPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAccountSettingsIdProvider",
    "AdsConnectedSourcesCatalogEnrollStatusUtils",
    "AdsConnectedSourcesCloseNestedViewAction",
    "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesFbt",
    "AdsConnectedSourcesModalSaveStateAction",
    "AdsFluxHooks",
    "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
    "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastAction",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionUtils",
    "AdsMetadataWebsiteMediaUtils",
    "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
    "AdsUEditorHooks",
    "CometPlaceholder.react",
    "JSResource",
    "SEFunnelLogger",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsMediaPickerImageHashSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector",
    "adsUEditorFeaturedOfferingEligibilityWithDataSelector",
    "adsUEditorInjectEditingCampaignContext",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "adsUserSettingsSelector",
    "justknobx",
    "lazyLoadComponent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m() {
      var e,
        t = r("AdsAccountSettingsIdProvider").toFluxSelector()();
      return t == null
        ? null
        : (e = o("adsUserSettingsSelector").adsUserSettingsSelector()(t)) ==
            null
          ? void 0
          : e.getValue();
    }
    function p() {
      var e,
        t = o("react-compiler-runtime").c(2),
        n = o("AdsUEditorHooks").useUEditorAdgroupAdsSelector(
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
        ),
        a = n == null || (e = n[0]) == null ? void 0 : e.promoted_object,
        i;
      return (
        t[0] !== a
          ? ((i = a != null ? JSON.stringify(a) : null), (t[0] = a), (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    function _() {
      return o("AdsUEditorHooks").useUEditorAdgroupAdsSelector(
        r("adsMediaPickerImageHashSelector"),
      );
    }
    function f(e, t, n, r) {
      t.forEach(function (t) {
        var a = {
            adgroup_id: t,
            campaign_group_id: n,
            campaign_id: r,
            object_level: "ad_level",
          },
          i = o("SEFunnelLogger").getSEGKBlocklistFields();
        e
          ? o("SEFunnelLogger").logL1DataConsentUserOn(
              a,
              babelHelpers.extends(
                {
                  data_consent_status: "USER_ON",
                  user_opt_out: !1,
                  is_combined: !0,
                },
                i,
              ),
            )
          : o("SEFunnelLogger").logL1DataConsentUserOff(
              a,
              babelHelpers.extends(
                {
                  data_consent_status: "USER_OFF",
                  user_opt_out: !0,
                  is_combined: !0,
                },
                i,
              ),
            );
      });
    }
    function g() {
      var e = o("react-compiler-runtime").c(10),
        t = p(),
        n = _(),
        a = o("AdsUEditorHooks").useUEditorAdgroupAdsSelector(
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        ),
        i;
      e[0] !== a ? ((i = a.map(h)), (e[0] = a), (e[1] = i)) : (i = e[1]);
      var l = i,
        u;
      e[2] !== l || e[3] !== a[0]
        ? ((u = function (t) {
            var e,
              n,
              r,
              o = (e = a[0]) != null ? e : null;
            f(
              t,
              l,
              o == null || (n = o.campaignGroup) == null ? void 0 : n.id,
              o == null || (r = o.campaign) == null ? void 0 : r.id,
            );
          }),
          (e[2] = l),
          (e[3] = a[0]),
          (e[4] = u))
        : (u = e[4]);
      var c = u,
        d;
      return (
        e[5] !== n || e[6] !== l || e[7] !== c || e[8] !== t
          ? ((d = s.jsx(R, {
              adImageHash: n,
              adgroupIDs: l,
              onDataConsentUserChange: c,
              promotedObjectSpec: t,
            })),
            (e[5] = n),
            (e[6] = l),
            (e[7] = c),
            (e[8] = t),
            (e[9] = d))
          : (d = e[9]),
        d
      );
    }
    function h(e) {
      return e.adgroup.id;
    }
    var y = o("AdsFluxHooks").adsFluxContainer(g);
    function C() {
      var e = o("react-compiler-runtime").c(3),
        t = p(),
        n = _(),
        a;
      return (
        e[0] !== n || e[1] !== t
          ? ((a = s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(E, { adImageHash: n, promotedObjectSpec: t }),
            })),
            (e[0] = n),
            (e[1] = t),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    var b = o("AdsFluxHooks").adsFluxContainer(C);
    function v() {
      var e = o("react-compiler-runtime").c(2),
        t = p(),
        n;
      return (
        e[0] !== t
          ? ((n = s.jsx(L, { promotedObjectSpec: t })), (e[0] = t), (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    var S = o("AdsFluxHooks").adsFluxContainer(v),
      R = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataCombinedWebsiteHighlightsMainView.react",
        ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
      ),
      L = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataCombinedWebsiteHighlightsOptInBadge.react",
        ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
      ),
      E = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataCombinedWebsiteHighlightsSelectedItems.react",
        ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
      ),
      k = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSiteExtensionManagedLinksContainer.react",
        ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
      ),
      I = r("lazyLoadComponent")(
        r("JSResource")("AdsConnectedSourcesModalFooterAddon.react").__setRef(
          "AdsMetadataCombinedWebsiteHighlightsPlugin",
        ),
      ),
      T = {
        key: "combinedWebsiteHighlights",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsMetadataCombinedWebsiteHighlightsMainView.react",
          ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
          r("JSResource")(
            "AdsMetadataCombinedWebsiteHighlightsOptInBadge.react",
          ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
          r("JSResource")(
            "AdsMetadataCombinedWebsiteHighlightsSelectedItems.react",
          ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
          r("JSResource")(
            "AdsMetadataSiteExtensionManagedLinksContainer.react",
          ).__setRef("AdsMetadataCombinedWebsiteHighlightsPlugin"),
          r("JSResource")("AdsConnectedSourcesModalFooterAddon.react").__setRef(
            "AdsMetadataCombinedWebsiteHighlightsPlugin",
          ),
        ],
        getSortOrder: function () {
          return 4;
        },
        getHeading: function () {
          return o("AdsConnectedSourcesFbt")
            .WEBSITE_HIGHLIGHTS_COMBINED_HEADING;
        },
        getSubheading: function () {
          return o("AdsConnectedSourcesFbt")
            .WEBSITE_HIGHLIGHTS_COMBINED_SUBTITLE;
        },
        getTooltip: function () {
          return o("AdsConnectedSourcesFbt")
            .WEBSITE_MEDIA_TOOLTIP_ADDITIONAL_SOURCES;
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: r("adsCreateSelector")(
              [
                o(
                  "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector",
                )
                  .adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector,
                o(
                  "adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector",
                ).adsUEditorAdgroupConnectedSourcesSiteLinkEligibilitySelector,
                o("adsUEditorFeaturedOfferingEligibilityWithDataSelector")
                  .adsUEditorFeaturedOfferingEligibilityWithDataSelector,
                r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
                o("adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector")
                  .adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector,
              ],
              function (t, n, r, a, i) {
                var e =
                  (a == null ? void 0 : a[0]) != null &&
                  o("AdsAPIAdgroupRecordUtils").isExistingPostAd(a[0]);
                return o(
                  "AdsMetadataWebsiteMediaUtils",
                ).isEligibleForCombinedWebsiteHighlightsExperience({
                  fromExistingPostFlow: e,
                  exposure: "expose",
                  isCatalogEligible: i,
                })
                  ? t || n || r
                  : !1;
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
        MainComponent: function () {
          return s.jsx(y, {});
        },
        OptInComponent: function () {
          return s.jsx(S, {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(b, {});
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
            p,
            _,
            f = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).getInitialSiteExtensionStateFromAdgroup(t),
            g = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).getInitialFeaturedOfferingStateFromAdgroup(
              t,
              o("AdsMetadataConnectedSourcesUtils").isSiteLinksOptedIn(t),
            ),
            h =
              f.siteLinks != null &&
              f.siteLinks.size > 0 &&
              ((e = f.siteLinksDataConsented) == null
                ? void 0
                : e.enrollStatus) === "OPT_IN",
            y =
              ((n = g.featuredOfferingSpec) == null ? void 0 : n.media) !=
                null &&
              g.featuredOfferingSpec.media.length > 0 &&
              ((r = g.featuredOfferingSpec) == null
                ? void 0
                : r.enrollStatus) === "OPT_IN";
          return (
            o("SEFunnelLogger").logL1PluginInitialState(
              { adgroup_id: t.id, object_level: "ad_level" },
              babelHelpers.extends(
                {
                  source: "from_adgroup",
                  enroll_status:
                    (a = f.siteExtension) == null ? void 0 : a.enrollStatus,
                  enroll_action_type:
                    (i = f.siteExtension) == null ? void 0 : i.enrollActionType,
                  consent_enroll_status:
                    (l = f.siteLinksDataConsented) == null
                      ? void 0
                      : l.enrollStatus,
                  consent_action_type:
                    (s = f.siteLinksDataConsented) == null
                      ? void 0
                      : s.enrollActionType,
                  dynamic_se_enroll_status:
                    (u = f.dynamicSiteLinksSpec) == null
                      ? void 0
                      : u.enrollStatus,
                  is_shopping_links: f.is_shopping_links === !0,
                  site_links_count:
                    (c = (d = f.siteLinks) == null ? void 0 : d.size) != null
                      ? c
                      : 0,
                  has_existing_l1_site_links:
                    ((p =
                      (_ = t.creative) == null ||
                      (_ = _.creative_sourcing_spec) == null ||
                      (_ = _.site_links_spec) == null
                        ? void 0
                        : _.length) != null
                      ? p
                      : 0) > 0,
                  is_combined: !0,
                },
                o("SEFunnelLogger").getSEGKBlocklistFields(),
              ),
            ),
            babelHelpers.extends(
              { adgroupHasSiteLinksSpec: h, adgroupHasFeaturedOfferingSpec: y },
              f,
              o(
                "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
              ).getInitialWebsiteMediaStateFromAdgroup(t, null, m()),
              g,
            )
          );
        },
        getInitialStateFromModalOpenAction: function (t) {
          var e,
            n,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            p,
            _ = m(),
            f = r("adsUEditorAccountIDSelector")(),
            g = o("AdsMetadataConnectedSourcesUtils").getSiteLinksDefaultOnType(
              t.siteLinks,
            ),
            h =
              (e =
                (n = r("adsUEditorInjectEditingCampaignContext")(
                  r("adsUEditorSelectedCampaignPlainObjectsSelector"),
                )()[0]) == null
                  ? void 0
                  : n.optimization_goal) != null
                ? e
                : null,
            y =
              r("justknobx")._("850") &&
              o(
                "AdsConnectedSourcesCatalogEnrollStatusUtils",
              ).isCatalogDefaultedOn(
                r("AdsConnectedSourcesDataProvider")().pluginState,
              ),
            C = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).getInitialSiteExtensionStateFromModalOpenAction(t, f, _, g, h, y);
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
                  enroll_status:
                    (i = C.siteExtension) == null ? void 0 : i.enrollStatus,
                  enroll_action_type:
                    (l = C.siteExtension) == null ? void 0 : l.enrollActionType,
                  consent_enroll_status:
                    (s = C.siteLinksDataConsented) == null
                      ? void 0
                      : s.enrollStatus,
                  consent_action_type:
                    (u = C.siteLinksDataConsented) == null
                      ? void 0
                      : u.enrollActionType,
                  dynamic_se_enroll_status:
                    (c = C.dynamicSiteLinksSpec) == null
                      ? void 0
                      : c.enrollStatus,
                  is_shopping_links: C.is_shopping_links === !0,
                  site_links_count:
                    (d = (p = C.siteLinks) == null ? void 0 : p.size) != null
                      ? d
                      : 0,
                  is_combined: !0,
                },
                o("SEFunnelLogger").getSEGKBlocklistFields(),
              ),
            ),
            C
          );
        },
        mutateAdgroup: function (t, n) {
          if (
            (n == null ? void 0 : n.isCombinedWebsiteHighlightsVisible) !== !0
          )
            return t;
          var e = t;
          (n == null ? void 0 : n.featuredOfferingSpec) != null &&
            (e = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).mutateFeaturedOfferingAdgroup(e, n));
          var a = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
            i = o("adsUserSettingsSelector").adsUserSettingsSelector(),
            l = null,
            s = null;
          if (a != null) {
            var u,
              c,
              d = i(a);
            ((l =
              (u = d.getValue()) == null
                ? void 0
                : u.ads_cs_dynamic_se_opt_out_timestamp),
              (s =
                (c = d.getValue()) == null
                  ? void 0
                  : c.ads_cs_sitelinks_opt_out_timestamp));
          }
          return (
            (e = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).mutateSiteExtensionAdgroup(e, n, a, l, s)),
            (e = o(
              "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
            ).mutateWebsiteMediaAdgroup(e, n, a)),
            (e = o(
              "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
            ).removeDefaultFeaturedOfferingWhenSiteLinksOptedIn(e)),
            e
          );
        },
        FooterAddonComponent: I,
        getNestedViewTitle: function () {
          return o("AdsConnectedSourcesFbt").DISCOVERY_LINKS_MANAGE_BUTTON;
        },
        getNestedViewDescription: function () {
          return o("AdsConnectedSourcesFbt")
            .DISCOVERY_LINKS_MANAGE_VIEW_DESCRIPTION;
        },
        NestedViewComponent: function () {
          return s.jsx(k, {});
        },
        getNestedViewPrimaryButtonLabel: function () {
          return o("AdsConnectedSourcesFbt").SITE_LINKS_MANAGE_VIEW_BACK_BUTTON;
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
            (t.visibleNestedViewComponentPluginKey ===
              "combinedWebsiteHighlights" &&
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
                  line: "492",
                  module: "AdsMetadataCombinedWebsiteHighlightsPlugin.js",
                  moduleID: i.id,
                },
              ),
              r("AdsConnectedSourcesCloseNestedViewAction").dispatch(
                {},
                {
                  line: "500",
                  module: "AdsMetadataCombinedWebsiteHighlightsPlugin.js",
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
                    ).DISCOVERY_LINKS_MANAGE_APPLY_SUCCESS_TOAST_BODY(l),
                  },
                  {
                    line: "503",
                    module: "AdsMetadataCombinedWebsiteHighlightsPlugin.js",
                    moduleID: i.id,
                  },
                ));
          };
        },
        getNestedViewSecondaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e !== "combinedWebsiteHighlights"
            ? null
            : o("AdsConnectedSourcesFbt").SITE_LINKS_MANAGE_DISMISS_BUTTON;
        },
        getNestedViewSecondaryClickHandler: function (t) {
          var e = t.adgroupIDs,
            n = t.visibleNestedViewComponentPluginKey;
          return n !== "combinedWebsiteHighlights"
            ? null
            : (e == null ||
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
                    line: "542",
                    module: "AdsMetadataCombinedWebsiteHighlightsPlugin.js",
                    moduleID: i.id,
                  },
                );
              });
        },
        nestedViewType: "dynamic-handlers",
      },
      D = T;
    l.default = D;
  },
  98,
);
