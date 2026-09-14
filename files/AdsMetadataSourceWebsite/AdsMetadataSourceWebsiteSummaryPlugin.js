__d(
  "AdsMetadataSourceWebsiteSummaryPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupRecordAccessors",
    "AdsConnectedSourcesFbt",
    "AdsEditingAdgroupEditorContext",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUserSettingsDataManager",
    "IGAdsSensitiveVerticalsUtils",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsRegulatedCategoriesContainHECRegulatedCategory",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
    "adsUserSettingsSelector",
    "gkx",
    "immutable",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsiteSummaryMainView.react").__setRef(
          "AdsMetadataSourceWebsiteSummaryPlugin",
        ),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataWebsiteSummarySelectedItems.react",
        ).__setRef("AdsMetadataSourceWebsiteSummaryPlugin"),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsiteSummaryOptInBadge.react").__setRef(
          "AdsMetadataSourceWebsiteSummaryPlugin",
        ),
      );
    function m(e, t) {
      var n,
        o,
        a = r("AdsAccountSettingsIdProvider").toFluxSelector()();
      if (a != null) {
        var i =
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.website_summary_spec) == null
            ? void 0
            : n.subfeatures;
        (o = t.subfeatures) == null ||
          o.forEach(function (e) {
            var t;
            if (
              ((t = e.action_metadata) == null ? void 0 : t.type) === "MANUAL"
            ) {
              var n =
                  i == null
                    ? void 0
                    : i.find(function (t) {
                        return (
                          t.asImmutable().get("feature_name") === e.feature_name
                        );
                      }),
                o = n == null ? void 0 : n.asImmutable().get("enroll_status"),
                l = e.enroll_status === "OPT_IN";
              if (!(o != null && l === (o === "OPT_IN"))) {
                var s = l ? "OPTED_IN" : "OPTED_OUT";
                e.feature_name === "reviews"
                  ? r(
                      "AdsUserSettingsDataManager",
                    ).setWebsiteReviewsDataOptInStatus(a, s)
                  : e.feature_name === "selling_points" &&
                    r(
                      "AdsUserSettingsDataManager",
                    ).setWebsiteSellingPointsDataOptInStatus(a, s);
              }
            }
          });
      }
    }
    var p = {
        key: "website_summary",
        type: "metadata/source_extension",
        hasAIBadge: !0,
        preloadableJSResources: [
          r("JSResource")("AdsMetadataWebsiteSummaryMainView.react").__setRef(
            "AdsMetadataSourceWebsiteSummaryPlugin",
          ),
          r("JSResource")(
            "AdsMetadataWebsiteSummarySelectedItems.react",
          ).__setRef("AdsMetadataSourceWebsiteSummaryPlugin"),
          r("JSResource")("AdsMetadataWebsiteSummaryOptInBadge.react").__setRef(
            "AdsMetadataSourceWebsiteSummaryPlugin",
          ),
        ],
        getSortOrder: function () {
          return 0;
        },
        getHeading: function () {
          return o("AdsConnectedSourcesFbt").WEBSITE_SUMMARY_HEADER;
        },
        getSubheading: function () {
          return o("AdsConnectedSourcesFbt").WEBSITE_SUMMARY_SUBHEADER;
        },
        getInitialStateFromAdgroup: function (t) {
          var e,
            n,
            a,
            i,
            l,
            s,
            u,
            c,
            d =
              (e = t.creative) == null || (e = e.creative_sourcing_spec) == null
                ? void 0
                : e.website_summary_spec,
            m = d == null ? void 0 : d.enroll_status,
            p = d == null ? void 0 : d.action_metadata,
            _ = p == null ? void 0 : p.type,
            f = (n = d == null ? void 0 : d.subfeatures) != null ? n : [],
            g = (a = d == null ? void 0 : d.selling_points) != null ? a : [],
            h = d == null ? void 0 : d.summary_text,
            y = d == null ? void 0 : d.page_text_signals_asset_id,
            C = d == null ? void 0 : d.mgenai_website_entity_id,
            b =
              (i = t.creative) == null ||
              (i = i.creative_sourcing_spec) == null ||
              (i = i.dynamic_data_refresh_spec) == null
                ? void 0
                : i.website_summary,
            v = {
              websiteSummary: {
                enrollStatus:
                  (l = b == null ? void 0 : b.enroll_status) != null ? l : null,
                enrollActionType:
                  (s =
                    b == null || (u = b.action_metadata) == null
                      ? void 0
                      : u.type) != null
                    ? s
                    : null,
              },
            },
            S = g.length > 0,
            R = h != null && h !== "";
          if (
            (m == null && f.length === 0) ||
            (_ !== "STICKY" && _ !== "MANUAL")
          ) {
            var L =
                r("IGAdsSensitiveVerticalsUtils")
                  .is_pharma_or_sensitive_vertical ||
                r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical,
              E = !1,
              k = r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")(
                r("AdsEditingAdgroupEditorContext"),
              );
            for (var I of k) {
              var T,
                D =
                  (T = I.campaignGroup) == null
                    ? void 0
                    : T.special_ad_categories;
              if (
                D != null &&
                r("adsRegulatedCategoriesContainHECRegulatedCategory")(D)
              ) {
                E = !0;
                break;
              }
            }
            if (!L && !E) {
              var x,
                $ = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
                P = o("adsUserSettingsSelector").adsUserSettingsSelector(),
                N = null;
              $ != null && (N = P($));
              var M = (x = N) == null ? void 0 : x.getValue(),
                w = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).websiteSellingPointsStickyOptIn(M),
                A = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).websiteSummaryTextStickyOptIn(M),
                F = w == null || A == null,
                O = F && r("gkx")("11360"),
                B = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).resolveStickyOrDefaultEnrollment(w, O),
                W = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).resolveStickyOrDefaultEnrollment(A, O),
                q = r("immutable").List();
              if (
                (B != null &&
                  (q = q.push({
                    enroll_status: B.enrollStatus,
                    action_metadata: { type: B.actionType },
                    feature_name: "selling_points",
                  })),
                W != null &&
                  (q = q.push({
                    enroll_status: W.enrollStatus,
                    action_metadata: { type: W.actionType },
                    feature_name: "reviews",
                  })),
                q.size > 0)
              ) {
                var U = q.some(function (e) {
                    return e.enroll_status === "OPT_IN";
                  }),
                  V = w != null || A != null;
                return {
                  dynamicDataRefreshSpec: v,
                  websiteSummarySpec: {
                    enrollStatus: U ? "OPT_IN" : "OPT_OUT",
                    enrollActionType: V ? "STICKY" : "DEFAULT",
                    subfeatures: q,
                    sellingPoints: r("immutable").List(g),
                    summaryText: h,
                    is_selling_points_available: S,
                    is_summary_text_available: R,
                    pageTextSignalsAssetId: y,
                    mgenaiWebsiteEntityId: C,
                  },
                };
              }
            }
          }
          return {
            dynamicDataRefreshSpec: v,
            websiteSummarySpec: {
              enrollStatus: m != null ? m : null,
              subfeatures: r("immutable").List(f),
              enrollActionType:
                (c = p == null ? void 0 : p.type) != null ? c : null,
              sellingPoints: r("immutable").List(g),
              summaryText: h,
              is_selling_points_available: S,
              is_summary_text_available: R,
              pageTextSignalsAssetId: y,
              mgenaiWebsiteEntityId: C,
            },
          };
        },
        mutateAdgroup: function (t, n) {
          var e,
            o,
            a,
            i = t,
            l =
              n == null || (e = n.dynamicDataRefreshSpec) == null
                ? void 0
                : e.websiteSummary;
          if ((l == null ? void 0 : l.enrollStatus) != null) {
            var s;
            ((i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.dynamic_data_refresh_spec.website_summary.enroll_status.set(
              l.enrollStatus,
            )(i)),
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.dynamic_data_refresh_spec.website_summary.action_metadata.type.set(
                (s = l.enrollActionType) != null ? s : "MANUAL",
              )(i)));
          }
          var u = n == null ? void 0 : n.websiteSummarySpec;
          if (u == null) return i;
          m(t, u);
          var c = u == null ? void 0 : u.subfeatures,
            d = r("immutable").List(),
            p = !1,
            _ = !1;
          c != null &&
            c.size > 0 &&
            c.forEach(function (e) {
              var t,
                n,
                r = e.feature_name,
                o = e.enroll_status,
                a =
                  r === "reviews"
                    ? (u == null ? void 0 : u.summaryText) != null &&
                      (u == null ? void 0 : u.summaryText) !== ""
                    : ((t =
                        u == null || (n = u.sellingPoints) == null
                          ? void 0
                          : n.size) != null
                        ? t
                        : 0) > 0;
              o === "OPT_OUT"
                ? ((d = d.push({
                    enroll_status: o,
                    action_metadata: e.action_metadata,
                    feature_name: r,
                  })),
                  a || (r === "reviews" ? (_ = !0) : (p = !0)))
                : a &&
                  (d = d.push({
                    enroll_status: o,
                    action_metadata: e.action_metadata,
                    feature_name: r,
                  }));
            });
          var f = u == null ? void 0 : u.enrollActionType;
          if (d.size > 0) {
            var g = u == null ? void 0 : u.enrollStatus;
            (g != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.enroll_status.set(
                g,
              )(i)),
              f != null &&
                (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.action_metadata.type.set(
                  f,
                )(i)),
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.set(
                d.map(function (e) {
                  return r("immutable").Map(e);
                }),
              )(i)));
          } else {
            var h = f != null || (u == null ? void 0 : u.enrollStatus) != null;
            h &&
              ((i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.delete(
                i,
              )),
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.enroll_status.delete(
                i,
              )),
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.action_metadata.type.delete(
                i,
              )));
          }
          var y = u == null ? void 0 : u.sellingPoints;
          if (y != null && y.size > 0 && !p) {
            var C = r("immutable").List(
              y.map(function (e) {
                return r("immutable").Map(
                  babelHelpers.extends(
                    {
                      text: e.text,
                      text_format: e.text_format,
                      anchor_text: e.anchor_text,
                      category: e.category,
                    },
                    e.is_checked !== void 0 ? { is_checked: e.is_checked } : {},
                    {
                      is_verbatim: e.is_verbatim,
                      metadata:
                        e.metadata != null
                          ? r("immutable").Map(e.metadata)
                          : null,
                    },
                  ),
                );
              }),
            );
            i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_summary_spec.selling_points.set(
              C,
            )(i);
            var b = u == null ? void 0 : u.pageTextSignalsAssetId;
            b != null
              ? (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.set(
                  b,
                )(i))
              : (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.delete(
                  i,
                ));
            var v = u == null ? void 0 : u.mgenaiWebsiteEntityId;
            v != null
              ? (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.set(
                  v,
                )(i))
              : (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.delete(
                  i,
                ));
          } else
            ((i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_summary_spec.selling_points.delete(
              i,
            )),
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.delete(
                i,
              )),
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.delete(
                i,
              )));
          var S = u == null ? void 0 : u.summaryText;
          return (
            S != null && !_
              ? (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.summary_text.set(
                  S,
                )(i))
              : (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.summary_text.delete(
                  i,
                )),
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_summary_spec.is_selling_points_available.set(
              p
                ? !1
                : (o = u == null ? void 0 : u.is_selling_points_available) !=
                    null
                  ? o
                  : !1,
            )(i)),
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_summary_spec.is_summary_text_available.set(
              _
                ? !1
                : (a = u == null ? void 0 : u.is_summary_text_available) != null
                  ? a
                  : !1,
            )(i)),
            i
          );
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: o(
              "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
            ).adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        MainComponent: function () {
          return s.jsx(u, {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(c, {});
        },
        OptInComponent: function () {
          return s.jsx(d, {});
        },
      },
      _ = p;
    l.default = _;
  },
  98,
);
