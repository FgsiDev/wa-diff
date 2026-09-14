__d(
  "AdsConnectedSourcesLayoutReducerPlugins",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPlusCSCJUtils",
    "AdsBulkValueUtils",
    "AdsConnectedSourcesDisplayUrlFallbackCatalog",
    "AdsConnectedSourcesSourceUrlFallbackCatalog",
    "AdsEPAWebsiteUrlPEDefaultOn",
    "AdsEditingAdgroupEditorContext",
    "AdsMetadataAppInfoDefaultOnUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSourceExtensionPlugins",
    "AdsMetadataWebsiteMediaUtils",
    "AdsUniformValue",
    "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
    "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupIsEngagementOnYourAdSetupSelector",
    "adsUEditorAdgroupWebsiteUrlValueSelector",
    "adsUEditorAppInfoStickyOptInSelector",
    "adsUEditorGetShouldEnableConnectedSourcesCatalogByDefaultGetValueSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "fetchWebsiteMediaImages",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ncsTestimonial"];
    function s(e) {
      var t = e.featuredOfferingSpec,
        n = e.preloadedFanoutLinks;
      if (
        t != null &&
        n != null &&
        n.length > 0 &&
        t.enrollStatus === "OPT_IN" &&
        t.enrollActionType === "DEFAULT" &&
        (t.media == null || t.media.length === 0)
      ) {
        var r, o, a, i;
        e.featuredOfferingSpec = babelHelpers.extends({}, t, {
          media: n,
          hadData: !0,
          featuredOfferingAssetId:
            (r = (o = n[0]) == null ? void 0 : o.featured_offering_asset_id) !=
            null
              ? r
              : null,
          mgenaiWebsiteEntityId:
            (a = (i = n[0]) == null ? void 0 : i.mgenai_website_entity_id) !=
            null
              ? a
              : null,
        });
      }
    }
    var u = {
      reduce: function (t, n) {
        var e, r;
        return babelHelpers.extends({}, t, {
          expandedPluginKeys: null,
          scrollToPluginKey: null,
          isModalVisible: !1,
          productSetMode: "empty",
          promoAdsModuleData: {
            promoAdsOfferManagementMode: void 0,
            geoFormSubmit: null,
            isViewTriggerDefaultOptIn:
              (e = t.promoAdsModuleData) == null
                ? void 0
                : e.isViewTriggerDefaultOptIn,
            manualToggledAdgroupIds:
              (r = t.promoAdsModuleData) == null
                ? void 0
                : r.manualToggledAdgroupIds,
          },
          visibleNestedViewComponentPluginKey: null,
          pluginState:
            t.pluginState != null
              ? babelHelpers.extends({}, t.pluginState, {
                  preloadedFanoutLinks: null,
                  websiteMediaImages: null,
                })
              : t.pluginState,
        });
      },
    };
    function c(e, t) {
      var n,
        o,
        a,
        i = e.source_url !== void 0 && e.source_url !== "",
        l = new (r("AdsUniformValue"))(
          (n =
            (o = t.creative) == null || (o = o.creative_sourcing_spec) == null
              ? void 0
              : o.source_url) != null
            ? n
            : "",
        ),
        s = new (r("AdsUniformValue"))((a = e.source_url) != null ? a : "");
      return e.caller === "CONNECTED_SOURCE_L1_SITE_LINKS_BUTTON"
        ? l
        : i
          ? s
          : l;
    }
    var d = [
      "DOMAIN_MISMATCH_WARNING_GUIDANCE",
      "DOMAIN_MISMATCH_WARNING_GUIDANCE_OPT_OUT",
    ];
    function m(e) {
      return e != null && d.includes(e);
    }
    function p(e, t) {
      var n,
        a,
        i,
        l = "empty",
        s = o("AdsBulkValueUtils").getUniformValueOrDefault(
          o("adsUEditorAdgroupWebsiteUrlValueSelector").websiteUrlValueSelector(
            r("AdsEditingAdgroupEditorContext"),
          ),
          null,
        ),
        u = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(
          r("AdsEditingAdgroupEditorContext"),
        )[0],
        c =
          (s == null || s === "") && u != null
            ? o("AdsEPAWebsiteUrlPEDefaultOn").getEPAWebsiteUrlCandidate(u)
            : null,
        d = function () {
          return c != null &&
            o("AdsEPAWebsiteUrlPEDefaultOn").isEPAWebsiteUrlPEDefaultOnEnabled()
            ? c
            : s;
        };
      if (
        !o(
          "AdsConnectedSourcesSourceUrlFallbackCatalog",
        ).isEditingExistingAdgroup() &&
        (((e == null || (n = e.catalog) == null ? void 0 : n.productSetID) ==
          null &&
          (e == null || (a = e.catalog) == null ? void 0 : a.enrollStatus) ==
            null) ||
          o("AdsMetadataConnectedSourcesUtils").shouldRefetchCatalog(
            e == null || (i = e.catalog) == null ? void 0 : i.enrollActionType,
            t === "MEDIA_PICKER_DIALOG_INIT",
            d(),
          ) ||
          m(t))
      ) {
        var p = o(
          "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
        ).adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector(
          r("AdsEditingAdgroupEditorContext"),
        );
        if (p) {
          var _ = o(
              "adsUEditorGetShouldEnableConnectedSourcesCatalogByDefaultGetValueSelector",
            ).adsUEditorGetShouldEnableConnectedSourcesCatalogByDefaultGetValueSelector(
              r("AdsEditingAdgroupEditorContext"),
            ),
            f = r(
              "adsUEditorAdgroupAPlusCProductExtensionFirstEligibleProductSetSelector",
            )(r("AdsEditingAdgroupEditorContext")),
            g = _ == null ? void 0 : _();
          if (g != null) {
            var h,
              y,
              C =
                !g.shouldOptIn &&
                ((h = e.catalog) == null ? void 0 : h.productSetID) != null &&
                ((y = e.catalog) == null ? void 0 : y.enrollActionType) ===
                  "DEFAULT";
            (C ||
              (e.catalog = {
                enrollActionType: g.optInSource,
                enrollStatus: g.shouldOptIn ? "OPT_IN" : "OPT_OUT",
                productSetID: g.shouldOptIn ? g.productSetID : null,
              }),
              (l = f.isLoading() ? "loading" : "loaded"));
          } else f.isLoading() && (l = "loading");
        }
      } else l = "loaded";
      return l;
    }
    function _(e, t, n) {
      var a, i, l, s, u;
      if (
        (e == null || (a = e.catalog) == null ? void 0 : a.productSetID) !=
          null ||
        ((e == null || (i = e.catalog) == null
          ? void 0
          : i.enrollActionType) === "MANUAL" &&
          (e == null || (l = e.catalog) == null ? void 0 : l.enrollStatus) ===
            "OPT_OUT") ||
        o(
          "adsUEditorAdgroupIsEngagementOnYourAdSetupSelector",
        ).adsUEditorAdgroupIsEngagementOnYourAdSetupSelector(
          r("AdsEditingAdgroupEditorContext"),
        )
      )
        return null;
      var c = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(
        r("AdsEditingAdgroupEditorContext"),
      )[0];
      if (n === "display") {
        if (
          o(
            "AdsConnectedSourcesDisplayUrlFallbackCatalog",
          ).getDisplayUrlFallbackCandidateOpts(t) == null ||
          !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isPECatalogUrlWaterfallEnabled()
        )
          return null;
      } else {
        var d =
          c == null
            ? null
            : o("AdsEPAWebsiteUrlPEDefaultOn").resolveEPAPECatalogMatchRung(
                c,
                t != null ? t : "",
                !1,
              );
        if (d != null && (d.rung !== "source" || !d.isEnabled)) return null;
      }
      var m =
          n === "display"
            ? o(
                "AdsConnectedSourcesDisplayUrlFallbackCatalog",
              ).getDisplayUrlFallbackCatalogProductSetLO(t)
            : o(
                "AdsConnectedSourcesSourceUrlFallbackCatalog",
              ).getSourceUrlFallbackCatalogProductSetLO(t),
        p = n === "display" ? m.isLoadingOrEmpty() : m.isLoading();
      if (p) return "loading";
      if (!m.hasValueWithoutError()) return null;
      var _ = m.getValue();
      return _ == null || _.id == null
        ? null
        : ((e.catalog = babelHelpers.extends({}, e.catalog, {
            enrollActionType: "DEFAULT",
            enrollStatus: "OPT_IN",
            productSetID: _.id,
          })),
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).logPESourceUrlFallbackCatalogDefaulted(
            (s = c == null ? void 0 : c.account_id) != null ? s : null,
            (u = c == null ? void 0 : c.id) != null ? u : null,
            _.id,
            t,
            "modal",
            n,
          ),
          "loaded");
    }
    function f(e, t) {
      var n = babelHelpers.extends({}, e, t);
      return (
        e.dynamicDataRefreshSpec != null &&
          t.dynamicDataRefreshSpec != null &&
          (n.dynamicDataRefreshSpec = babelHelpers.extends(
            {},
            e.dynamicDataRefreshSpec,
            t.dynamicDataRefreshSpec,
          )),
        n
      );
    }
    function g(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null
            ? void 0
            : t.site_extensions;
      if ((r == null ? void 0 : r.enroll_status) === "OPT_IN") return !0;
      var o = r == null || (n = r.action_metadata) == null ? void 0 : n.type;
      return o === "MANUAL" || o === "STICKY";
    }
    var h = {
        reduce: function (t, n) {
          var e,
            a,
            i,
            l,
            u,
            d,
            m,
            h,
            y,
            C,
            b,
            v,
            S,
            R = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(
              r("AdsEditingAdgroupEditorContext"),
            )[0],
            L = c(n, R),
            E =
              ((e = (a = n.siteLinks) == null ? void 0 : a.size) != null
                ? e
                : 0) > 0,
            k = (i = t.pluginState) == null ? void 0 : i.websiteMediaImages,
            I = (l = t.pluginState) == null ? void 0 : l.websiteMediaSpec,
            T = (u = t.pluginState) == null ? void 0 : u.preloadedFanoutLinks,
            D = r("AdsMetadataSourceExtensionPlugins")
              .getNonEmptyArray()
              .reduce(function (e, t) {
                if (
                  t.key === "site_links" &&
                  E &&
                  !g(R) &&
                  t.getInitialStateFromModalOpenAction
                )
                  return f(e, t.getInitialStateFromModalOpenAction(n));
                if (t.key === "website_media" && t.getInitialStateFromAdgroup) {
                  var r =
                    k != null
                      ? { websiteMediaImages: k, websiteMediaSpec: I }
                      : null;
                  return babelHelpers.extends(
                    {},
                    f(e, t.getInitialStateFromAdgroup(R, r)),
                    { websiteMediaImages: k },
                  );
                }
                if (
                  t.key === "combinedWebsiteHighlights" &&
                  t.getInitialStateFromAdgroup
                ) {
                  var o =
                      k != null
                        ? { websiteMediaImages: k, websiteMediaSpec: I }
                        : null,
                    a = t.getInitialStateFromAdgroup(R, o),
                    i =
                      E && t.getInitialStateFromModalOpenAction
                        ? t.getInitialStateFromModalOpenAction(n)
                        : {},
                    l = babelHelpers.extends({}, a, i);
                  return babelHelpers.extends({}, f(e, l), {
                    websiteMediaImages: k,
                    preloadedFanoutLinks: T,
                  });
                }
                return t.getInitialStateFromAdgroup
                  ? f(e, t.getInitialStateFromAdgroup(R))
                  : e;
              }, {}),
            x = o(
              "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
            ).adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector(
              r("AdsEditingAdgroupEditorContext"),
            );
          if (
            ((D.isCombinedWebsiteHighlightsVisible = o(
              "AdsMetadataWebsiteMediaUtils",
            ).isEligibleForCombinedWebsiteHighlightsExperience({
              fromExistingPostFlow: o(
                "AdsAPIAdgroupRecordUtils",
              ).isExistingPostAd(R),
              exposure: "silent",
              isCatalogEligible: x,
            })),
            (D.isPECatalogEligible = x),
            k == null)
          ) {
            var $ = o("AdsBulkValueUtils").getUniformValueOrDefault(L, ""),
              P = R.account_id;
            $ !== "" &&
              P != null &&
              o("fetchWebsiteMediaImages").fetchWebsiteMediaImages(
                P,
                $,
                String(R.id),
              );
          }
          var N = p(D, n.caller),
            M =
              (d = o("AdsBulkValueUtils").getUniformValue(L)) != null
                ? d
                : null,
            w =
              (m =
                (h = _(
                  D,
                  o(
                    "AdsConnectedSourcesDisplayUrlFallbackCatalog",
                  ).getAdgroupDisplayUrl(),
                  "display",
                )) != null
                  ? h
                  : _(D, M, "source")) != null
                ? m
                : N,
            A = o(
              "adsUEditorAppInfoStickyOptInSelector",
            ).adsUEditorAppInfoStickyOptInSelector();
          ((D.appInfoSpec = o(
            "AdsMetadataAppInfoDefaultOnUtils",
          ).getAppInfoSpecWithDefaultOn(D.appInfoSpec, {
            isEligibleForAppInfo: o(
              "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector",
            ).adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector(
              r("AdsEditingAdgroupEditorContext"),
            ),
            isFastTrackBackfillEligible: o(
              "AdsAPlusCSCJUtils",
            ).isAdEligibleForSCJAppInfoFastTrackBackfill(null, R),
            passesDefaultOnGK: r("gkx")("18391"),
            persistedActionType:
              (y = R.creative) == null ||
              (y = y.creative_sourcing_spec) == null ||
              (y = y.app_info_spec) == null ||
              (y = y.action_metadata) == null
                ? void 0
                : y.type,
            stickyValue:
              A != null && A.hasValueWithoutError() ? A.getValue() : null,
          })),
            s(D));
          var F = babelHelpers.extends({}, t, {
            initialPluginState: babelHelpers.extends({}, D),
            expandedPluginKeys: (C = n.expandedPluginKeys) != null ? C : null,
            scrollToPluginKey: (b = n.scrollToPluginKey) != null ? b : null,
            isModalVisible: n.caller !== "MEDIA_PICKER_DIALOG_INIT",
            pluginState: D,
            sourceUrl: L,
            promotionsMode: (v = n.promotionsMode) != null ? v : "empty",
            siteLinksmode: (S = n.siteLinksmode) != null ? S : "empty",
            productSetMode: w,
            hasSourceUrlChanged: !1,
            caller: n.caller,
            visibleNestedViewComponentPluginKey: null,
          });
          return F;
        },
      },
      y = {
        reduce: function (t, n) {
          var e,
            a = babelHelpers.extends({}, t.pluginState, n.state),
            i = (e = t.pluginState) == null ? void 0 : e.websiteMediaSpec;
          if (n.state.websiteMediaImages != null) {
            var l,
              u,
              c =
                (l =
                  (u = n.state.websiteMediaSpec) == null
                    ? void 0
                    : u.imageClusters) != null
                  ? l
                  : [];
            ((i =
              i != null
                ? babelHelpers.extends({}, i, { imageClusters: c })
                : { imageClusters: c }),
              (a.websiteMediaSpec = i));
          }
          var d = a.websiteMediaImages;
          if (n.state.websiteMediaImages != null && d != null) {
            var m = o(
                "AdsMetadataWebsiteMediaUtils",
              ).getValidMediaForCreativeSetup(d.toArray()),
              p = t.hasSourceUrlChanged === !0;
            if (m.length > 0) {
              var _,
                f,
                g,
                h,
                y,
                C,
                b,
                v = "OPT_IN",
                S = "DEFAULT";
              ((_ = i) == null ? void 0 : _.enrollStatus) != null &&
                i.enrollActionType != null &&
                ((v = i.enrollStatus), (S = i.enrollActionType));
              var R =
                (f = (g = i) == null ? void 0 : g.media) != null
                  ? f
                  : r("immutable").List(m);
              (p && (R = r("immutable").List(m)),
                v === "OPT_OUT" && (R = r("immutable").List()),
                (a.websiteMediaSpec = babelHelpers.extends({}, i, {
                  enrollStatus: v,
                  enrollActionType: S,
                  media: R,
                  hadData: !0,
                  hadImpression: p
                    ? !1
                    : (h = (y = i) == null ? void 0 : y.hadImpression) != null
                      ? h
                      : !1,
                  imageClusters:
                    v === "OPT_OUT"
                      ? []
                      : (C = (b = i) == null ? void 0 : b.imageClusters) != null
                        ? C
                        : [],
                })));
            } else {
              var L, E, k, I, T;
              a.websiteMediaSpec = {
                hadData: p
                  ? !1
                  : (L = (E = i) == null ? void 0 : E.hadData) != null
                    ? L
                    : !1,
                hadImpression: p
                  ? !1
                  : (k = (I = i) == null ? void 0 : I.hadImpression) != null
                    ? k
                    : !1,
                isExistingPost: (T = i) == null ? void 0 : T.isExistingPost,
              };
            }
          }
          return (
            s(a),
            babelHelpers.extends({}, t, {
              hasSourceUrlChanged: !1,
              pluginState: a,
              promotionsMode: "confirmed",
              siteLinksmode: "confirmed",
              productSetMode:
                t.productSetMode === "loading" &&
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isPECatalogUrlWaterfallEnabled(!0)
                  ? "loading"
                  : "confirmed",
            })
          );
        },
      },
      C = {
        reduce: function (n, o) {
          if (
            !r("gkx")("952") ||
            !o.isBrandedContentToggleOn ||
            n.pluginState == null
          )
            return n;
          var t = n.pluginState,
            a = t.ncsTestimonial,
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
          return babelHelpers.extends({}, n, { pluginState: i });
        },
      },
      b = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            pluginState: babelHelpers.extends({}, t.pluginState, n.state),
            promotionsMode: "confirmed",
            siteLinksmode: "confirmed",
            productSetMode: "confirmed",
          });
        },
      },
      v = {
        reduce: function (t, n) {
          var e,
            r,
            a =
              (e = o("AdsBulkValueUtils").getUniformValue(n.sourceUrl)) != null
                ? e
                : null,
            i = babelHelpers.extends({}, t.pluginState),
            l = i.websiteMediaSpec;
          ((i.websiteMediaImages = null),
            (i.websiteMediaSpec = {
              hadData: !1,
              hadImpression: !1,
              isExistingPost: l == null ? void 0 : l.isExistingPost,
            }));
          var s =
            (r = _(
              i,
              o(
                "AdsConnectedSourcesDisplayUrlFallbackCatalog",
              ).getAdgroupDisplayUrl(),
              "display",
            )) != null
              ? r
              : _(i, a, "source");
          return babelHelpers.extends({}, t, {
            sourceUrl: n.sourceUrl,
            hasSourceUrlChanged: !0,
            promotionsMode: "loading",
            siteLinksmode: "loading",
            pluginState: i,
            productSetMode: s === "loaded" ? "loaded" : "loading",
          });
        },
      },
      S = {
        reduce: function (t, n) {
          var e,
            a,
            i,
            l = babelHelpers.extends({}, t.pluginState, n.state);
          if (
            ((e = l.catalog) == null ? void 0 : e.enrollActionType) ===
              "DEFAULT" &&
            o(
              "adsUEditorAdgroupIsEngagementOnYourAdSetupSelector",
            ).adsUEditorAdgroupIsEngagementOnYourAdSetupSelector(
              r("AdsEditingAdgroupEditorContext"),
            )
          ) {
            var s;
            l.catalog = (s = t.pluginState) == null ? void 0 : s.catalog;
          }
          var u =
              (a = o("AdsBulkValueUtils").getUniformValue(t.sourceUrl)) != null
                ? a
                : null,
            c =
              (i = _(
                l,
                o(
                  "AdsConnectedSourcesDisplayUrlFallbackCatalog",
                ).getAdgroupDisplayUrl(),
                "display",
              )) != null
                ? i
                : _(l, u, "source");
          return babelHelpers.extends({}, t, {
            pluginState: l,
            productSetMode: c != null ? c : "loaded",
          });
        },
      },
      R = {
        reduce: function (t, n) {
          var e, o, a, i, l, s, u;
          return babelHelpers.extends({}, t, {
            promoAdsModuleData: {
              promoAdsOfferManagementMode:
                (e = t.promoAdsModuleData) == null
                  ? void 0
                  : e.promoAdsOfferManagementMode,
              geoFormSubmit:
                (o = t.promoAdsModuleData) == null ? void 0 : o.geoFormSubmit,
              navigateBackToMainView:
                (a = t.promoAdsModuleData) == null
                  ? void 0
                  : a.navigateBackToMainView,
              selectOfferUponCreation:
                (i = t.promoAdsModuleData) == null
                  ? void 0
                  : i.selectOfferUponCreation,
              isSaveInFlight:
                (l = t.promoAdsModuleData) == null ? void 0 : l.isSaveInFlight,
              isViewTriggerDefaultOptIn: !1,
              manualToggledAdgroupIds:
                (s = t.promoAdsModuleData) != null && s.manualToggledAdgroupIds
                  ? (u = t.promoAdsModuleData) == null
                    ? void 0
                    : u.manualToggledAdgroupIds.concat(n.adgroupIDs)
                  : r("immutable").Set(n.adgroupIDs),
            },
          });
        },
      },
      L = {
        reduce: function (t, n) {
          var e, o;
          return babelHelpers.extends({}, t, {
            emailCaptureModuleData: {
              isViewTriggerDefaultOptedIn: !1,
              manualToggledAdgroupIds:
                (e = t.emailCaptureModuleData) != null &&
                e.manualToggledAdgroupIds
                  ? (o = t.emailCaptureModuleData) == null
                    ? void 0
                    : o.manualToggledAdgroupIds.concat(n.adgroupIDs)
                  : r("immutable").Set(n.adgroupIDs),
            },
          });
        },
      };
    ((l.onConnectedSourcesModalClose = u),
      (l.onConnectedSourcesModalOpen = h),
      (l.onConnectedSourcesModalSaveState = y),
      (l.onBrandedContentToggleClearNcsTestimonial = C),
      (l.onConnectedSourcesModalSavePromotion = b),
      (l.onConnectedSourcesModalSetSourceUrl = v),
      (l.onConnectedSourcesModalLoadProductSet = S),
      (l.onPromoAdsManualToggle = R),
      (l.onEmailCaptureManualToggle = L));
  },
  98,
);
