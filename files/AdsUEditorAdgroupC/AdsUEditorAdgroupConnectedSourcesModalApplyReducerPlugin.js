__d(
  "AdsUEditorAdgroupConnectedSourcesModalApplyReducerPlugin",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAppExperiencesUtils",
    "AdsBulkValueUtils",
    "AdsCTWAAutogenCatalogSelectionMutators",
    "AdsConnectedSourcesModalApplyAndCloseActionFlux",
    "AdsCreativeFeaturesUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionUtils",
    "AdsMetadataSourceExtensionPlugins",
    "AdsMutators",
    "AdsSensitiveVerticalUtils",
    "AdsSiteLinksFormatDefaultOnUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "PECatalogStickyOptOutInputs",
    "PERelevanceUtils",
    "ProductBrowsingAdsUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "SEFunnelLogger",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "appExperienceContainerSourceManifest",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_spec) == null
            ? void 0
            : t.toArray(),
        i =
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.site_links_data_consented) == null
            ? void 0
            : n.enroll_status,
        l =
          (r = e.creative) == null ||
          (r = r.creative_sourcing_spec) == null ||
          (r = r.dynamic_site_links_spec) == null
            ? void 0
            : r.enroll_status,
        s = (o = a == null ? void 0 : a.length) != null ? o : 0;
      return i !== "OPT_OUT" && (s > 0 || l === "OPT_IN");
    }
    function s(e) {
      return o("AdsFlexibleFormatAdexUtils").isWHConsentedWithMedia(e);
    }
    function u(e) {
      var t, n;
      return (
        (((t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_IN" &&
          ((n = e.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.associated_product_set_id) != null) ||
        o("PERelevanceUtils").hasVirtualProductSetId(e)
      );
    }
    function c(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.app_info_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function d(e) {
      var t,
        n,
        r,
        a,
        i,
        l = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec;
      return (
        ((n =
          l == null ||
          (r = l.website_media_spec) == null ||
          (r = r.media) == null
            ? void 0
            : r.size) != null
          ? n
          : 0) > 0 ||
        (o("AdsAppExperiencesUtils").isAppExperiencesM3MoreAdSourcesEnabled(
          !0,
        ) &&
          ((a =
            l == null ||
            (i = l.featured_offering_spec) == null ||
            (i = i.media) == null
              ? void 0
              : i.size) != null
            ? a
            : 0) > 0)
      );
    }
    function m(e, t) {
      switch (e) {
        case "website_media":
          return (
            d(t) &&
            (o("AdsAppExperiencesUtils").isWebsiteMediaOptedIn(t) ||
              (o(
                "AdsAppExperiencesUtils",
              ).isAppExperiencesM3MoreAdSourcesEnabled(!0) &&
                o("AdsAppExperiencesUtils").isFeaturedOfferingOptedIn(t)))
          );
        case "app_info":
          return o("AdsAppExperiencesUtils").isAppInfoOptedIn(t);
        case "app_reviews":
          return o("AdsAppExperiencesUtils").isAppReviewsOptedIn(t);
        case "products":
          return o("AdsAppExperiencesUtils").isCatalogOptedIn(t);
        default:
          return !1;
      }
    }
    var p = new Set(["website_media", "app_info", "app_reviews", "products"]);
    function _(e) {
      switch (e) {
        case "details_to_ad_layout":
          return o(
            "AdsAppExperiencesUtils",
          ).isAppExperiencesM3MoreAdSourcesEnabled(!0)
            ? r("AdsAdgroupRecordAccessors").creative.app_experience_spec
                .details_to_ad_layout
            : null;
        case "reveal_details":
          return r("AdsAdgroupRecordAccessors").creative.app_experience_spec
            .reveal_details;
        case "show_spotlights":
          return r("AdsAdgroupRecordAccessors").creative.app_experience_spec
            .show_spotlights;
        default:
          return null;
      }
    }
    function f(e) {
      var t,
        n,
        o =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.website_summary_spec) == null
            ? void 0
            : t.subfeatures,
        a =
          (n =
            o == null
              ? void 0
              : o.some(function (e) {
                  return (
                    (e.get("feature_name") === "reviews" ||
                      e.get("feature_name") === "selling_points") &&
                    e.get("enroll_status") === "OPT_IN"
                  );
                })) != null
            ? n
            : !1;
      if (!a) return e;
      var i = r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.show_summary.enroll_status.set(
        "OPT_IN",
        e,
      );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.show_summary.action_metadata.type.set(
        "DEFAULT",
        i,
      );
    }
    function g(e) {
      var t = e;
      for (var n of Object.keys(
        o("appExperienceContainerSourceManifest")
          .APP_EXPERIENCE_CONTAINER_SOURCES,
      ))
        if (
          !(
            n === "show_spotlights" &&
            !o("AdsAppExperiencesUtils").isAppExperiencesM3MoreAdSourcesEnabled(
              !0,
            )
          )
        ) {
          var a = _(n);
          if (a != null) {
            var i = function (n) {
                var e;
                if (!p.has(n)) return 0;
                var i = m(n, t),
                  l = a.data_sources.get(t),
                  s =
                    (e =
                      l == null
                        ? void 0
                        : l.findIndex(function (e) {
                            return e.get("feature_name") === n;
                          })) != null
                      ? e
                      : -1,
                  u = s >= 0 ? (l == null ? void 0 : l.get(s)) : null,
                  c = u == null ? void 0 : u.get("enroll_status"),
                  _ = u == null ? void 0 : u.getIn(["action_metadata", "type"]);
                if (n === "website_media" && !d(t) && s >= 0 && l != null) {
                  var f = l.delete(s);
                  return (
                    (t = f.isEmpty() ? a.delete(t) : a.data_sources.set(f)(t)),
                    0
                  );
                }
                var g = o(
                  "AdsAppExperiencesUtils",
                ).computeAdditionalSourceCascadeEnrollStatus(i, c, _);
                if (g == null) return 0;
                var h = r("immutable").fromJS({
                    action_metadata: { type: "DEFAULT" },
                    enroll_status: g,
                    feature_name: n,
                  }),
                  y =
                    s >= 0 && l != null
                      ? l.set(s, h)
                      : (l != null ? l : r("immutable").List()).push(h);
                t = a.data_sources.set(y)(t);
              },
              l;
            for (var s of o("appExperienceContainerSourceManifest")
              .APP_EXPERIENCE_CONTAINER_SOURCES[n])
              l = i(s);
          }
        }
      return t;
    }
    function h(e) {
      var t,
        n,
        a,
        i,
        l,
        s =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.website_summary_spec) == null
            ? void 0
            : t.subfeatures,
        u =
          (n =
            s == null ||
            (a = s.find(function (e) {
              return e.get("feature_name") === "selling_points";
            })) == null
              ? void 0
              : a.get("enroll_status")) != null
            ? n
            : "OPT_OUT",
        c =
          (i =
            s == null ||
            (l = s.find(function (e) {
              return e.get("feature_name") === "reviews";
            })) == null
              ? void 0
              : l.get("enroll_status")) != null
            ? i
            : "OPT_OUT",
        d = u === "OPT_IN" || c === "OPT_IN" ? "OPT_IN" : "OPT_OUT",
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.app_experience_spec.website_summary.selling_points.enroll_status.get(
          e,
        ),
        p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.app_experience_spec.website_summary.selling_points.action_metadata.type.get(
          e,
        ),
        _ = o(
          "AdsAppExperiencesUtils",
        ).computeAdditionalSourceCascadeEnrollStatus(d === "OPT_IN", m, p);
      if (_ == null) return e;
      var f = _ === "OPT_IN" ? "OPT_IN" : "OPT_OUT",
        g = r(
          "AdsAdgroupRecordAccessors",
        ).creative.app_experience_spec.website_summary.selling_points.enroll_status.set(
          f,
          e,
        );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.app_experience_spec.website_summary.selling_points.action_metadata.type.set(
        "DEFAULT",
        g,
      );
    }
    function y(e, t, n, a, i) {
      var l,
        s,
        u,
        c =
          (l =
            (s = e.creative) == null || (s = s.creative_sourcing_spec) == null
              ? void 0
              : s.source_url) != null
            ? l
            : "",
        d =
          i != null && (u = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, i)) != null
            ? u
            : "",
        m = d === "" || d === c,
        p = o(
          "AdsAdgroupConnectedSourcesMutators",
        ).setSourceUrlAndDestinationUrlMutator(e, n, a, i, t);
      return (
        m &&
          t !== c &&
          (p = o(
            "AdsAdgroupConnectedSourcesMutators",
          ).clearDefaultSourcedCatalogMutator(p)),
        p
      );
    }
    function C(e) {
      var t,
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.delete(
          e,
        ),
        o =
          (t = n.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.product_extensions) == null
            ? void 0
            : t.customizations;
      return (o == null || o.isEmpty == null ? void 0 : o.isEmpty()) === !0
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.delete(
            n,
          )
        : n;
    }
    function b(e) {
      var t, n;
      return (t =
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e)) == null
          ? void 0
          : n.some(function (e) {
              if (e.get("format") !== "video_slideshow") return !1;
              var t = e.get("data_source"),
                n = Array.isArray(t)
                  ? t
                  : t instanceof r("immutable").List
                    ? t.toArray()
                    : [];
              return n.includes("app_information") || n.includes("none");
            })) != null
        ? t
        : !1;
    }
    function v(e, t, n, a, i, l, s, u, d) {
      var m = e;
      if (a && (l !== s || l)) {
        var p,
          _ = r("gkx")("25052") === !0,
          f = r("gkx")("19033") === !0,
          g = f
            ? (p = n.stickyMap) == null
              ? void 0
              : p.update("carousel", function (e) {
                  return e == null
                    ? void 0
                    : e.filter(function (e) {
                        return e.data_source !== "catalog";
                      });
                })
            : n.stickyMap;
        ((m = o(
          "AdsAdgroupFormatTransformationMutators",
        ).adsAdgroupFormatTransformationDataSourceDefaultOnMutator(
          m,
          "catalog",
          l,
          n.eligibleFormatDataSourceMap,
          g,
          _
            ? o("AdsFlexibleFormatAdexUtils")
                .withSASingleCollageGate(
                  o("AdsFlexibleFormatAdexUtils")
                    .SA_SINGLE_PE_SUPPORTED_FORMATS,
                  m,
                )
                .filter(function (e) {
                  return e !== "carousel";
                })
            : o("AdsFlexibleFormatAdexUtils").withSASingleCollageGate(
                o("AdsFlexibleFormatAdexUtils").SA_SINGLE_PE_SUPPORTED_FORMATS,
                m,
              ),
          u || d,
          o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
            n.reactiveControlUxVersion,
          ),
        )),
          _ &&
            (m = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDataSourceDefaultOnMutator(
              m,
              "catalog",
              l,
              n.eligibleFormatDataSourceMap,
              g,
              ["carousel"],
              !0,
              o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
                n.reactiveControlUxVersion,
              ),
            )));
      }
      if (!i) return m;
      var h = c(m),
        y = c(t),
        C = b(m);
      return h !== y || (h && !C)
        ? o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceDefaultOnMutator(
            m,
            "app_information",
            h,
            n.eligibleFormatDataSourceMap,
            n.stickyMap,
            o("AdsFlexibleFormatAdexUtils")
              .SA_SINGLE_APP_INFO_SUPPORTED_FORMATS,
            u,
            o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
              n.reactiveControlUxVersion,
            ),
          )
        : m;
    }
    function S(t, n) {
      var o,
        a,
        i =
          (o = n.creative) == null ||
          (o = o.degrees_of_freedom_spec) == null ||
          (o = o.creative_features_spec) == null
            ? void 0
            : o.site_extensions,
        l = e(n),
        s = e(t);
      return r("gkx")("4221") &&
        l &&
        s &&
        (i == null ? void 0 : i.enroll_status) === "OPT_IN" &&
        ((a = t.creative) == null ||
        (a = a.degrees_of_freedom_spec) == null ||
        (a = a.creative_features_spec) == null ||
        (a = a.site_extensions) == null
          ? void 0
          : a.enroll_status) !== "OPT_IN"
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.set(
            i,
            t,
          )
        : t;
    }
    var R = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.account,
              l = a.parentData,
              c = o("AdsBulkValueUtils").getUniformValue(n.sourceUrl);
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var d,
                  m,
                  p = t,
                  _ = r("nullthrows")(l.get(a)),
                  b = _.campaign,
                  R = _.campaignGroup,
                  L = _.specPlugin,
                  E = o(
                    "PECatalogStickyOptOutInputs",
                  ).resolveGranularStickyOptOutInputs(
                    R == null ? void 0 : R.objective,
                    o("PECatalogStickyOptOutInputs").resolveStickyOptOutPageID(
                      t,
                      L,
                    ),
                    r("AdsAPIAdgroupRecordGetWebsiteURL")(t, L),
                  ),
                  k =
                    b != null &&
                    R != null &&
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isEngagementOnYourAdSetup(b, R),
                  I = (d = n.pluginState) == null ? void 0 : d.catalog,
                  T = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.associated_product_set_id.get(
                    p,
                  );
                if (
                  (I != null &&
                    o(
                      "AdsMetadataConnectedSourcesUtils",
                    ).isCTWADestinationByCampaign(b) &&
                    T !== I.productSetID &&
                    (p = o(
                      "AdsCTWAAutogenCatalogSelectionMutators",
                    ).clearCTWAAutogenCatalogProductData(p)),
                  r("AdsMetadataSourceExtensionPlugins")
                    .getNonEmptyArray()
                    .forEach(function (e) {
                      e.mutateAdgroup != null &&
                        (p = e.mutateAdgroup(p, n.pluginState, E, k));
                    }),
                  o("AdsFlexibleFormatAdexUtils").passQEForReactiveControlPESE(
                    !0,
                  ) ||
                    o("AdsFlexibleFormatAdexUtils").isEligibleForEPAFDOSurface(
                      t,
                    ))
                ) {
                  var D,
                    x,
                    $,
                    P = e(t),
                    N = e(p),
                    M = s(t),
                    w = s(p),
                    A = N || w,
                    F = u(t),
                    O = u(p),
                    B =
                      (D = p.creative) == null ||
                      (D = D.creative_sourcing_spec) == null ||
                      (D = D.site_links_spec) == null
                        ? void 0
                        : D.toArray(),
                    W =
                      ((x = r("gkx")("3384")) != null ? x : !1) ||
                      (($ = r("gkx")("18509")) != null ? $ : !1),
                    q = o(
                      "AdsFlexibleFormatAdexUtils",
                    ).shouldBlockReactiveControlDefaultOn(W),
                    U = r("immutable").List(
                      B == null
                        ? void 0
                        : B.map(function (e) {
                            return e.toJS();
                          }),
                    ),
                    V = o("AdsFlexibleFormatAdexUtils").getEligibleDataSources(
                      p,
                      b,
                      R,
                    );
                  if (V.includes("site_links")) {
                    var H = N !== P || w !== M;
                    if (H)
                      p = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceDefaultOnMutator(
                        p,
                        "site_links",
                        A,
                        n.eligibleFormatDataSourceMap,
                        n.stickyMap,
                        o("AdsFlexibleFormatAdexUtils").withSASingleCollageGate(
                          o("AdsFlexibleFormatAdexUtils")
                            .SA_SINGLE_SE_SUPPORTED_FORMATS,
                          p,
                        ),
                        q ||
                          !(
                            o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(
                              U,
                            ) || N !== P
                          ) ||
                          r("gkx")("1857"),
                        o(
                          "AdsFlexibleFormatAdexUtils",
                        ).SIMPLIFIED_FORMATS.includes(
                          n.reactiveControlUxVersion,
                        ),
                        w,
                        q,
                      );
                    else {
                      var G,
                        z = (G = o(
                          "AdsSiteLinksFormatDefaultOnUtils",
                        )).getSESiteLinksConsentState(p),
                        j = G.getSESiteLinksConsentState(t),
                        K = G.getWHSiteLinksConsentState(p),
                        Q = G.getWHSiteLinksConsentState(t),
                        X = G.computeSiteLinksFormatActions(p, {
                          seCurrentState: z,
                          sePriorState: j,
                          whCurrentState: K,
                          whPriorState: Q,
                        });
                      if (X.length > 0 && r("gkx")("6023")) {
                        var Y = q || r("gkx")("1857"),
                          J = K === "on";
                        for (var Z of X) {
                          var ee = Z.consented,
                            te = Z.format;
                          p = o(
                            "AdsAdgroupFormatTransformationMutators",
                          ).adsAdgroupFormatTransformationDataSourceDefaultOnMutator(
                            p,
                            "site_links",
                            ee,
                            n.eligibleFormatDataSourceMap,
                            n.stickyMap,
                            [te],
                            Y,
                            o(
                              "AdsFlexibleFormatAdexUtils",
                            ).SIMPLIFIED_FORMATS.includes(
                              n.reactiveControlUxVersion,
                            ),
                            J,
                            q,
                          );
                        }
                      }
                    }
                  }
                  p = v(
                    p,
                    t,
                    n,
                    V.includes("catalog"),
                    V.includes("app_information"),
                    O,
                    F,
                    q,
                    k,
                  );
                }
                ((p = S(p, t)),
                  c != null && (p = y(p, c, b, R, L)),
                  (p = o(
                    "ProductBrowsingAdsUtils",
                  ).maybeUpdateProductBrowsingSpec(
                    p,
                    !1,
                    null,
                    R,
                    b,
                    "connected_sources_modal_apply",
                  )),
                  o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).isCTWADestinationByCampaign(b) && (p = C(p)));
                var ne = o(
                  "AdsAppExperiencesUtils",
                ).isAdSetupEligibleForAppExperiences(
                  R == null || (m = R.special_ad_categories) == null
                    ? void 0
                    : m.toArray(),
                  R == null ? void 0 : R.buying_type,
                  o("AdsAPIAdgroupRecordUtils").isExistingPostAd(p),
                  !o(
                    "AdsSensitiveVerticalUtils",
                  ).isAccountInSensitiveVerticals(),
                  null,
                );
                return (
                  o("AdsAppExperiencesUtils").isWebsiteSummaryDataOptedIn(p) &&
                    ne &&
                    (p = h(p)),
                  o("AdsAPIAdgroupRecordUtils").isExistingPostAd(p) &&
                    !o(
                      "AdsCreativeFeaturesUtils",
                    ).isFeatureEnrollStatusSetInAdgroup(p, "show_summary") &&
                    (p = f(p)),
                  ne && (p = g(p)),
                  o(
                    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                  ).isPromoAdOptedInWithProductCatalogForAdgroup(p) &&
                    (p = o(
                      "AdsUEditorAdgroupPromoAdMutators",
                    ).refreshPromotionalMetadataOnCatalogChange(
                      { adgroup: p, campaign: b, campaignGroup: R },
                      i,
                      L,
                    )),
                  o(
                    "PromoAdsEmailCaptureUnificationGatingUtils",
                  ).isEmailCaptureOfferUnificationEnabled() &&
                    o(
                      "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                    ).isEmailCaptureOptedInForAdgroup(p, b, R) &&
                    (p = o(
                      "AdsUEditorAdgroupEmailCaptureMutators",
                    ).refreshEmailCaptureMetadataOnCatalogChange(
                      { adgroup: p, campaign: b, campaignGroup: R },
                      i,
                    )),
                  o("SEFunnelLogger").logConsentDivergenceCheck(
                    a,
                    p,
                    "modal_apply",
                  ),
                  p
                );
              },
            );
          },
          [r("AdsConnectedSourcesModalApplyAndCloseActionFlux").actionType],
        ),
      },
      L = R;
    l.default = L;
  },
  98,
);
