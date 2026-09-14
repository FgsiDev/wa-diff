__d(
  "isProductSetRelayStoreOptInEnabled",
  [
    "AdAccountCatalogProviderUtils",
    "AdToCatalogUtils",
    "AdsInterfacesLogger",
    "CatalogVertical",
    "Promise",
    "asyncToGeneratorRuntime",
    "cr:9576",
    "gkx",
    "performance",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = c() ? "DEFAULT" : "default";
    function c() {
      return r("gkx")("13096");
    }
    var d = 1e4;
    function m() {
      return r("gkx")("24872")
        ? new (s || (s = n("Promise")))(function (e) {
            return r("setTimeout")(e, d);
          })
        : (s || (s = n("Promise"))).resolve();
    }
    var p = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
            s = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
              !0,
            )
              ? "pe_lat_q2_test"
              : "pe_lat_q2_control",
            c = t.hashCode();
          r("AdsInterfacesLogger").log({
            eventName: "da_catalog_match_fetch",
            data:
              ((l = {}),
              (l.ad_account_id = t.adAccountID),
              (l.subsequent_data = JSON.stringify({
                arm: s,
                key_hash: c,
                request_source: "DYNAMIC_ADS",
                is_bwp_campaign_group:
                  (a = t.isBwPCampaignGroup) != null ? a : !1,
                is_cpas_campaign: (i = t.isCPASCampaign) != null ? i : !1,
                is_latency_improvement_enabled_gk:
                  o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                    !0,
                  ),
              })),
              l),
          });
          var d = (e || (e = r("performance"))).now(),
            m = null,
            p = null;
          try {
            var _, f;
            return (
              (m = yield n("cr:9576").loadFirstEligibleFromAccount(
                t.adAccountID,
                null,
                null,
                (_ = t.isBwPCampaignGroup) != null ? _ : !1,
                !1,
                u,
                !1,
                !1,
                null,
                null,
                null,
                !1,
                "DYNAMIC_ADS",
                !1,
                null,
                null,
                (f = t.isCPASCampaign) != null ? f : !1,
                t.collaborationMerchantPartnerBusinessID,
              )),
              m
            );
          } catch (e) {
            throw (
              (p =
                e != null && typeof e == "object" && e.constructor != null
                  ? e.constructor.name
                  : "Unknown"),
              e
            );
          } finally {
            var g, h, y, C, b, v, S;
            r("AdsInterfacesLogger").log({
              eventName: "da_catalog_match_fetch_done",
              data:
                ((S = {}),
                (S.ad_account_id = t.adAccountID),
                (S.product_set_id =
                  (g = (h = m) == null ? void 0 : h.id) != null ? g : null),
                (S.subsequent_data = JSON.stringify({
                  arm: s,
                  key_hash: c,
                  latency_ms: (e || (e = r("performance"))).now() - d,
                  catalog_id:
                    (y = (C = m) == null ? void 0 : C.catalogID) != null
                      ? y
                      : null,
                  product_set_id:
                    (b = (v = m) == null ? void 0 : v.id) != null ? b : null,
                  error_type: p,
                  request_source: "DYNAMIC_ADS",
                  is_latency_improvement_enabled_gk:
                    o(
                      "AdToCatalogUtils",
                    ).isPEDefaultingLatencyImprovementEnabled(!0),
                })),
                S),
            });
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      _ = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
              !0,
            )
              ? "pe_lat_q2_test"
              : "pe_lat_q2_control",
            l = t.hashCode();
          r("AdsInterfacesLogger").log({
            eventName: "pe_catalog_match_fetch",
            data:
              ((a = {}),
              (a.ad_account_id = t.adAccountID),
              (a.adgroup_id = t.adgroupID),
              (a.page_id = t.pageID),
              (a.pixel_id = t.pixelID),
              (a.subsequent_data = JSON.stringify({
                arm: i,
                key_hash: l,
                request_source: t.requestSource,
                is_ctm_ad: t.isCTMAd,
                has_url: t.url != null && t.url !== "",
                is_latency_improvement_enabled_gk:
                  o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                    !0,
                  ),
              })),
              a),
          });
          var s = (e || (e = r("performance"))).now();
          yield m();
          var c = null,
            d = null;
          try {
            var p, _;
            return (
              (c = yield n("cr:9576").loadFirstEligibleFromAccount(
                t.adAccountID,
                null,
                [
                  (_ = r("CatalogVertical")).COMMERCE,
                  _.AUTOMOTIVE_MODELS,
                  _.DESTINATIONS,
                  _.FLIGHTS,
                  _.HOME_LISTINGS,
                  _.HOTELS,
                  _.VEHICLE_OFFERS,
                  _.VEHICLES,
                ],
                !1,
                !1,
                u,
                !0,
                o(
                  "AdAccountCatalogProviderUtils",
                ).getIsAllProductsProductSetOnlyWithLogging(
                  t.requestSource,
                  t.isEligibleForCtwaPe,
                  t.isEligibleForCtdPe,
                ),
                t.url,
                t.pageID,
                t.pixelID,
                !0,
                (p = t.requestSource) != null ? p : "PRODUCT_EXTENSIONS",
                t.isCTMAd,
                t.adgroupID,
              )),
              c
            );
          } catch (e) {
            throw (
              (d =
                e != null && typeof e == "object" && e.constructor != null
                  ? e.constructor.name
                  : "Unknown"),
              e
            );
          } finally {
            var f, g, h, y, C, b, v;
            r("AdsInterfacesLogger").log({
              eventName: "pe_catalog_match_fetch_done",
              data:
                ((v = {}),
                (v.ad_account_id = t.adAccountID),
                (v.adgroup_id = t.adgroupID),
                (v.page_id = t.pageID),
                (v.pixel_id = t.pixelID),
                (v.product_set_id =
                  (f = (g = c) == null ? void 0 : g.id) != null ? f : null),
                (v.subsequent_data = JSON.stringify({
                  arm: i,
                  key_hash: l,
                  latency_ms: (e || (e = r("performance"))).now() - s,
                  catalog_id:
                    (h = (y = c) == null ? void 0 : y.catalogID) != null
                      ? h
                      : null,
                  product_set_id:
                    (C = (b = c) == null ? void 0 : b.id) != null ? C : null,
                  error_type: d,
                  request_source: t.requestSource,
                  is_latency_improvement_enabled_gk:
                    o(
                      "AdToCatalogUtils",
                    ).isPEDefaultingLatencyImprovementEnabled(!0),
                })),
                v),
            });
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      f = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
              !0,
            )
              ? "pe_lat_q2_test"
              : "pe_lat_q2_control",
            l = t.hashCode();
          r("AdsInterfacesLogger").log({
            eventName: "da_catalog_match_fetch",
            data:
              ((a = {}),
              (a.ad_account_id = t.adAccountID),
              (a.subsequent_data = JSON.stringify({
                arm: i,
                key_hash: l,
                request_source: "DYNAMIC_ADS",
                is_bwp_campaign_group: !1,
                is_cpas_campaign: !1,
                has_commerce_merchant_settings_id:
                  t.commerceMerchantSettingsID != null,
                is_latency_improvement_enabled_gk:
                  o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                    !0,
                  ),
              })),
              a),
          });
          var s = (e || (e = r("performance"))).now(),
            c = null,
            d = null;
          try {
            return (
              (c = yield n("cr:9576").loadFirstEligibleFromAccount(
                t.adAccountID,
                t.commerceMerchantSettingsID,
                [r("CatalogVertical").COMMERCE],
                !1,
                !1,
                u,
                !1,
                !1,
                null,
                null,
                null,
                !1,
                "DYNAMIC_ADS",
                !1,
                null,
                !0,
              )),
              c
            );
          } catch (e) {
            throw (
              (d =
                e != null && typeof e == "object" && e.constructor != null
                  ? e.constructor.name
                  : "Unknown"),
              e
            );
          } finally {
            var m, p, _, f, g, h, y;
            r("AdsInterfacesLogger").log({
              eventName: "da_catalog_match_fetch_done",
              data:
                ((y = {}),
                (y.ad_account_id = t.adAccountID),
                (y.product_set_id =
                  (m = (p = c) == null ? void 0 : p.id) != null ? m : null),
                (y.subsequent_data = JSON.stringify({
                  arm: i,
                  key_hash: l,
                  latency_ms: (e || (e = r("performance"))).now() - s,
                  catalog_id:
                    (_ = (f = c) == null ? void 0 : f.catalogID) != null
                      ? _
                      : null,
                  product_set_id:
                    (g = (h = c) == null ? void 0 : h.id) != null ? g : null,
                  error_type: d,
                  request_source: "DYNAMIC_ADS",
                  is_latency_improvement_enabled_gk:
                    o(
                      "AdToCatalogUtils",
                    ).isPEDefaultingLatencyImprovementEnabled(!0),
                })),
                y),
            });
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      g = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
            s = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
              !0,
            )
              ? "pe_lat_q2_test"
              : "pe_lat_q2_control",
            c = t.hashCode();
          r("AdsInterfacesLogger").log({
            eventName: "da_catalog_match_fetch",
            data:
              ((l = {}),
              (l.ad_account_id = t.adAccountID),
              (l.subsequent_data = JSON.stringify({
                arm: s,
                key_hash: c,
                request_source: "DYNAMIC_ADS",
                is_bwp_campaign_group:
                  (a = t.isBwPCampaignGroup) != null ? a : !1,
                is_cpas_campaign: (i = t.isCPASCampaign) != null ? i : !1,
                is_latency_improvement_enabled_gk:
                  o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
                    !0,
                  ),
              })),
              l),
          });
          var d = (e || (e = r("performance"))).now(),
            m = null,
            p = null;
          try {
            return (
              (m = yield n("cr:9576").loadFirstEligibleFromAccount(
                t.adAccountID,
                null,
                [r("CatalogVertical").COMMERCE],
                !1,
                !1,
                u,
                !1,
                !1,
                null,
                null,
                null,
                !1,
                "DYNAMIC_ADS",
              )),
              m
            );
          } catch (e) {
            throw (
              (p =
                e != null && typeof e == "object" && e.constructor != null
                  ? e.constructor.name
                  : "Unknown"),
              e
            );
          } finally {
            var _, f, g, h, y, C, b;
            r("AdsInterfacesLogger").log({
              eventName: "da_catalog_match_fetch_done",
              data:
                ((b = {}),
                (b.ad_account_id = t.adAccountID),
                (b.product_set_id =
                  (_ = (f = m) == null ? void 0 : f.id) != null ? _ : null),
                (b.subsequent_data = JSON.stringify({
                  arm: s,
                  key_hash: c,
                  latency_ms: (e || (e = r("performance"))).now() - d,
                  catalog_id:
                    (g = (h = m) == null ? void 0 : h.catalogID) != null
                      ? g
                      : null,
                  product_set_id:
                    (y = (C = m) == null ? void 0 : C.id) != null ? y : null,
                  error_type: p,
                  request_source: "DYNAMIC_ADS",
                  is_latency_improvement_enabled_gk:
                    o(
                      "AdToCatalogUtils",
                    ).isPEDefaultingLatencyImprovementEnabled(!0),
                })),
                b),
            });
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    ((l.AdAccountFirstEligibleProductSetDataProviderPluginDefault = p),
      (l.AdAccountProductExtensionsMainProductSetDataProviderPluginDefault = _),
      (l.AdAccountFirstEligibleCommerceProductSetDataProviderPluginDefault = f),
      (l.AdAccountFirstEligibleCommerceProductSetWithoutOnsiteCMSFilterDataProviderPluginDefault =
        g));
  },
  98,
);
