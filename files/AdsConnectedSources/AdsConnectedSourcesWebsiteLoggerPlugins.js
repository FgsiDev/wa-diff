__d(
  "AdsConnectedSourcesWebsiteLoggerPlugins",
  [
    "AdsAppExperiencesUtils",
    "AdsBulkValueUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsInterfacesLogger",
    "AdsMetadataBrandKitUtils",
    "adsUEditorMetadataBrandkitStickyOptInSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e,
            n = r("AdsEditingAdgroupEditorContext"),
            a = (e = t.caller) != null ? e : "",
            i = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(n),
            l = o(
              "adsUEditorMetadataBrandkitStickyOptInSelector",
            ).adsUEditorMetadataBrandkitStickyOptInSelector(n);
          i.forEach(function (e) {
            var n;
            r("AdsInterfacesLogger").logOnce({
              data:
                ((n = { message: t.siteLinksmode }),
                (n.adgroup_id = e.id),
                (n.caller = a),
                n),
              eventName: "ads_connected_sources_website_modal_open",
            });
          });
          var s = t.adgroupIDs;
          if (
            o("AdsMetadataBrandKitUtils").isEligibleForBrandKitStickyOptIn() &&
            l.hasValue() &&
            l.getValue() &&
            s != null
          ) {
            var u = l.getValue() === !0 ? "OPT_IN" : "OPT_OUT";
            o("AdsMetadataBrandKitUtils").logBrandKitAdoptionChange(
              s,
              "creative_wizard",
              u ? "on" : "off",
              "sticky",
            );
          }
        },
      },
      s = {
        log: function (t) {
          var e,
            n = t.state.siteLinks,
            o = r("AdsEditingAdgroupEditorContext"),
            a = (e = t.caller) != null ? e : "",
            i = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(o);
          i.forEach(function (e) {
            var t, o;
            r("AdsInterfacesLogger").logOnce({
              data:
                ((o = {
                  message: JSON.stringify(
                    Array.from(
                      (t = n == null ? void 0 : n.values()) != null
                        ? t
                        : new Map(),
                    ),
                  ),
                }),
                (o.adgroup_id = e.id),
                (o.caller = a),
                o),
              eventName: "ads_connected_sources_website_modal_save_site_links",
            });
          });
        },
      },
      u = {
        log: function (t) {
          var e = r("AdsEditingAdgroupEditorContext"),
            n = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(e);
          n.forEach(function (e) {});
        },
      },
      c = {
        log: function (t) {
          var e,
            n,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p = t.sourceUrl,
            _ = t.adgroupIDs,
            f = t.pluginState,
            g = f == null ? void 0 : f.featuredOfferingSpec,
            h = f == null ? void 0 : f.websiteMediaSpec,
            y = f == null ? void 0 : f.websiteSummarySpec,
            C =
              y == null ||
              (e = y.subfeatures) == null ||
              (e = e.find(function (e) {
                return e.feature_name === "selling_points";
              })) == null
                ? void 0
                : e.enroll_status,
            b =
              y == null ||
              (n = y.subfeatures) == null ||
              (n = n.find(function (e) {
                return e.feature_name === "reviews";
              })) == null
                ? void 0
                : n.enroll_status,
            v = C === "OPT_IN" || b === "OPT_IN" ? "OPT_IN" : "OPT_OUT",
            S = JSON.stringify({
              siteLinks:
                f == null || (a = f.siteLinks) == null ? void 0 : a.size,
              promotions:
                f == null || (i = f.promotions) == null ? void 0 : i.size,
              catalog: JSON.stringify(f == null ? void 0 : f.catalog),
              site_link_spec: JSON.stringify(f == null ? void 0 : f.siteLinks),
              sourceUrl: o("AdsBulkValueUtils").getUniformValue(p),
              featuredOfferingEnrollStatus: g == null ? void 0 : g.enrollStatus,
              featuredOfferingEnrollActionType:
                g == null ? void 0 : g.enrollActionType,
              featuredOfferingMediaCount:
                (l = g == null || (s = g.media) == null ? void 0 : s.length) !=
                null
                  ? l
                  : 0,
              websiteMediaEnrollStatus: h == null ? void 0 : h.enrollStatus,
              websiteMediaEnrollActionType:
                h == null ? void 0 : h.enrollActionType,
              websiteMediaMediaCount:
                (u = h == null || (c = h.media) == null ? void 0 : c.size) !=
                null
                  ? u
                  : 0,
              sellingPointsEnrollStatus: C,
              reviewsEnrollStatus: b,
              sellingPointsCount:
                (d =
                  y == null || (m = y.sellingPoints) == null
                    ? void 0
                    : m.size) != null
                  ? d
                  : 0,
              websiteSummaryEnrollStatus: y == null ? void 0 : y.enrollStatus,
            }),
            R = r("AdsEditingAdgroupEditorContext"),
            L = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(R);
          L.forEach(function (e) {
            var t, n;
            r("AdsInterfacesLogger").logOnce({
              data:
                ((t = {}),
                (t.message = o("AdsBulkValueUtils").getUniformValue(p)),
                (t.adgroup_id = e.id),
                (t.caller = "CONNECTED_SOURCE"),
                (t.subsequent_data = S),
                t),
              eventName:
                "ads_connected_sources_website_modal_apply_and_close_action",
            });
            var a =
              ((n = e.creative) == null ||
              (n = n.creative_sourcing_spec) == null ||
              (n = n.brand) == null ||
              (n = n.action_metadata) == null
                ? void 0
                : n.type) === "DEFAULT_OPT_IN";
            if (
              (a === !0 &&
                o("AdsMetadataBrandKitUtils").logBrandKitAdoptionChange(
                  _,
                  "creative_wizard",
                  "on",
                  "default_on",
                ),
              o("AdsAppExperiencesUtils").isWebsiteSummaryDataOptedIn(e))
            ) {
              var i,
                l =
                  (i = e.creative) == null ||
                  (i = i.app_experience_spec) == null ||
                  (i = i.website_summary) == null ||
                  (i = i.selling_points) == null
                    ? void 0
                    : i.enroll_status;
              if (v === "OPT_IN" && l == null) {
                var s;
                r("AdsInterfacesLogger").log({
                  eventName: "app_experiences_selling_points_sync",
                  data:
                    ((s = {}),
                    (s.adgroup_id = e.id),
                    (s.event_source = "connected_sources_modal"),
                    (s.status = "DEFAULT_ON"),
                    s),
                });
              } else if (v === "OPT_OUT" && l === "OPT_IN") {
                var u;
                r("AdsInterfacesLogger").log({
                  eventName: "app_experiences_selling_points_sync",
                  data:
                    ((u = {}),
                    (u.adgroup_id = e.id),
                    (u.event_source = "connected_sources_modal"),
                    (u.status = "DEFAULT_OFF"),
                    u),
                });
              }
            }
          });
        },
      },
      d = {
        log: function (t) {
          var e = t.sourceUrl,
            n = r("AdsEditingAdgroupEditorContext"),
            o = r("adsUEditorSelectedAdgroupPlainObjectsSelector")(n);
          o.forEach(function (n) {
            var o;
            r("AdsInterfacesLogger").logOnce({
              data:
                ((o = { message: e }),
                (o.adgroup_id = n.id),
                (o.caller = "CONNECTED_SOURCE"),
                (o.subsequent_data = JSON.stringify({
                  isRemovingPrefilledUrl: t.isRemovingPrefilledUrl,
                  prefilledUrl: t.prefilledUrl,
                  url: e,
                })),
                o),
              eventName: "ads_connected_sources_website_l1_url_set",
            });
          });
        },
      };
    ((l.AdsConnectedSourcesModalOpenLoggerPlugin = e),
      (l.AdsConnectedSourcesModalSaveSiteLinksLoggerPlugin = s),
      (l.AdsConnectedSourcesModalSavePromotionsLoggerPlugin = u),
      (l.AdsConnectedSourcesModalApplyAndCloseActionLoggerPlugin = c),
      (l.AdsConnectedSourcesL1SetSourceUrlLoggerPlugin = d));
  },
  98,
);
