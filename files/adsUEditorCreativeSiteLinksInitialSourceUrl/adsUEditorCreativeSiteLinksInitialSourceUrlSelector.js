__d(
  "adsUEditorCreativeSiteLinksInitialSourceUrlSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsCreativePixelUrlDataProvider",
    "AdsInterfacesLogger",
    "AdsMetadataWebsiteSourceItemTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorSelectors",
    "LoadObject",
    "adsCampaignPromotedObjectSelector",
    "adsCreateSelector",
    "adsCreativePrefilledSiteLinksDefaultSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "first",
    "isStringNullOrEmpty",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1728e5,
      c = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessor(
              (e = r("AdsAdgroupRecordAccessors").creative) == null ||
                (e = e.creative_sourcing_spec) == null
                ? void 0
                : e.source_url.get,
            ),
          ),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessor(
              (s = r("AdsAdgroupRecordAccessors").creative) == null ||
                (s = s.creative_sourcing_spec) == null ||
                (s = s.site_links_spec) == null
                ? void 0
                : s.get,
            ),
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get,
          ),
          r("adsUEditorAccountIDSelector"),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupBulkSelectors").pageID,
            null,
          ),
          r("userSettingsSelector"),
          r("AdsCreativePixelUrlDataProvider").toFluxSelector(),
          r("adsCreativePrefilledSiteLinksDefaultSelector"),
          o(
            "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
          ).targetingCountrySelector,
          o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        ],
        function (t, n, a, l, s, c, d, m, p, _, f) {
          var e, g;
          if (t.length !== 1)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var h = f.get(t[0]);
          if (h == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var y = h.campaign,
            C = r("adsCampaignPromotedObjectSelector")(y.id),
            b = l.getValueForIndex(0),
            v = Date.now(),
            S =
              (e =
                d == null || (g = d.getValue()) == null
                  ? void 0
                  : g.url_prefill_removal_timestamp) != null
                ? e
                : 0,
            R = v - S < u,
            L = a != null && a.size > 0;
          if (!r("isStringNullOrEmpty")(n) && L) {
            var E;
            return (
              r("AdsInterfacesLogger").logOnce({
                data:
                  ((E = {}),
                  (E.adgroup_id = t[0]),
                  (E.message = JSON.stringify(a)),
                  (E.source = n),
                  E),
                eventName:
                  "ads_connected_sources_load_saved_site_links_from_spec",
              }),
              r("LoadObject").withValue(
                {
                  url: n,
                  source: o("AdsMetadataWebsiteSourceItemTypes").UrlSource.SPEC,
                },
                { creatorModuleID: i.id },
              )
            );
          }
          if (!r("isStringNullOrEmpty")(n) && !L) {
            var k = p({
              account_id: s,
              page_id: c,
              promoted_object: C,
              caller: "adsUEditorCreativePrefilledSiteLinksSelector",
              source_url: n,
              targeting_countries:
                o("AdsBulkValueUtils").getUniformValueOrDefault(_),
              adgroup_id: r("first")(t),
            });
            if (k.hasValueWithoutError()) {
              var I,
                T,
                D,
                x,
                $,
                P = (I = k.getValue()) == null ? void 0 : I.source_url,
                N = (T = k.getValue()) == null ? void 0 : T.site_links_spec;
              return (
                r("AdsInterfacesLogger").logOnce({
                  data:
                    ((D = {}),
                    (D.adgroup_id = t[0]),
                    (D.source = P),
                    (D.message = JSON.stringify(N)),
                    D),
                  eventName:
                    "ads_connected_sources_load_site_links_from_spec_source_url",
                }),
                r("LoadObject").withValue(
                  {
                    url: (x = k.getValue()) == null ? void 0 : x.source_url,
                    source: o("AdsMetadataWebsiteSourceItemTypes").UrlSource
                      .SPEC,
                    siteLinks:
                      ($ = k.getValue()) == null ? void 0 : $.site_links_spec,
                  },
                  { creatorModuleID: i.id },
                )
              );
            }
          }
          if (r("isStringNullOrEmpty")(n) && !R) {
            var M = p({
              account_id: s,
              page_id: c,
              promoted_object: C,
              caller: "adsUEditorSiteLinkFromPromotedObjectSelector",
              source_url: null,
              targeting_countries:
                o("AdsBulkValueUtils").getUniformValueOrDefault(_),
              adgroup_id: r("first")(t),
            });
            if (M.hasValueWithoutError()) {
              var w,
                A,
                F,
                O,
                B,
                W = (w = M.getValue()) == null ? void 0 : w.source_url,
                q = (A = M.getValue()) == null ? void 0 : A.site_links_spec;
              return (
                r("AdsInterfacesLogger").logOnce({
                  data:
                    ((F = {}),
                    (F.adgroup_id = t[0]),
                    (F.message = JSON.stringify(q)),
                    (F.subsequent_data = W),
                    F),
                  eventName:
                    "ads_connected_sources_site_links_domain_prediction",
                }),
                r("LoadObject").withValue(
                  {
                    url: (O = M.getValue()) == null ? void 0 : O.source_url,
                    source: o("AdsMetadataWebsiteSourceItemTypes").UrlSource
                      .DOMAIN_PREDICTION,
                    siteLinks:
                      (B = M.getValue()) == null ? void 0 : B.site_links_spec,
                  },
                  { creatorModuleID: i.id },
                )
              );
            }
          }
          if (r("isStringNullOrEmpty")(n) && !R && b != null) {
            var U = m.get({ pixelID: b });
            if (U.hasValueWithoutError()) {
              var V,
                H = U.getValue();
              r("AdsInterfacesLogger").logOnce({
                data:
                  ((V = {}),
                  (V.adgroup_id = t[0]),
                  (V.subsequent_data = JSON.stringify({ domains: H })),
                  V),
                eventName: "ads_connected_sources_site_links_pixel_domains",
              });
              var G = U.mapValue(function (e) {
                return e == null || e.length !== 1 ? null : e[0];
              });
              return r("LoadObject").withValue(
                {
                  url: G.getValue(),
                  source: o("AdsMetadataWebsiteSourceItemTypes").UrlSource
                    .PIXEL,
                },
                { creatorModuleID: i.id },
              );
            }
          }
          return r("LoadObject").withValue(
            {
              url: n,
              source: o("AdsMetadataWebsiteSourceItemTypes").UrlSource.SPEC,
            },
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".adsUEditorCreativePrefilledSiteLinksSelector" },
      ),
      d = c;
    l.default = d;
  },
  98,
);
