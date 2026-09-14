__d(
  "AdsUEditorCampaignPartnerEventSourcesSelector",
  [
    "AdsAPIObjectives",
    "AdsAppUtils",
    "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
    "AdsCPASCatalogSegmentCheckProvider",
    "AdsCPASCustomConversionProvider",
    "AdsCPASParentCatalogEventSourcesDataProvider",
    "AdsCampaignGroupRecordAccessors",
    "AdsLoadObjectUtils",
    "AdsUEditorAppSearchSource",
    "AdsUEditorCampaignAppSelectors",
    "AdsUEditorCampaignPartnerEventSourcesSelectorUtils",
    "AdsUEditorSelectors",
    "CPASPromotableAppsProvider",
    "ExternalEventSourceTypes",
    "LoadObject",
    "SignalsOptimizationSourceContainer",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignPartnerEventSourcesInformationSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
    "catalogSegmentGetParentCatalogEventSourcesKey",
    "emptyFunction",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("AdsCPASParentCatalogEventSourcesDataProvider").toFluxSelector(),
      c = r("adsGetUniformValueSelector")(
        r("adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector"),
        o("AdsAPIObjectives").NONE,
      ),
      d = (e = r("adsCreateSelector"))(
        [
          (s = r("adsUEditorAccountSelector")),
          r("adsUEditorCampaignPartnerEventSourcesInformationSelector"),
          u,
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
            r("AdsCampaignGroupRecordAccessors").promoted_object
              .product_catalog_id.get,
          ),
        ],
        function (t, n, r, a) {
          return o(
            "AdsUEditorCampaignPartnerEventSourcesSelectorUtils",
          ).parentCatalogExternalEventSources(t, n, r, a);
        },
        { name: i.id + ".parentCatalogExternalEventSourcesSelector" },
      ),
      m = e(
        [
          s,
          u,
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
              r("AdsCampaignGroupRecordAccessors").promoted_object
                .product_catalog_id.get,
            ),
          ),
        ],
        function (t, n, o) {
          return o != null
            ? n.get(
                r("catalogSegmentGetParentCatalogEventSourcesKey")(
                  t.account_id,
                  o,
                ),
              )
            : r("LoadObject").withValue([], { creatorModuleID: i.id });
        },
        { name: i.id + ".catalogSalesPartnerExternalEventSourcesSelector" },
      ),
      p = e(
        [
          r("AdsCPASCatalogSegmentCheckProvider").toFluxSelector(),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
              r("AdsCampaignGroupRecordAccessors").promoted_object
                .product_catalog_id.get,
            ),
          ),
        ],
        function (t, n) {
          return o(
            "AdsUEditorCampaignPartnerEventSourcesSelectorUtils",
          ).checkIfCPASCatalog(t, n);
        },
        { name: i.id + ".checkIfCPASCatalogSelector" },
      ),
      _ = e(
        [m],
        function (t) {
          return t.mapValue(function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                var n;
                if (e.source_type === r("ExternalEventSourceTypes").PIXEL)
                  n = r("ExternalEventSourceTypes").PIXEL;
                else if (e.source_type === r("ExternalEventSourceTypes").APP)
                  n = r("ExternalEventSourceTypes").APP;
                else return;
                t.push({ id: e.id, name: e.name || "", source_type: n });
              }),
              r("immutable").List(t)
            );
          });
        },
        { name: i.id + ".parentCatalogAssociatePixelAndAppsSelector" },
      ),
      f = e(
        [d],
        function (t) {
          var e = t.mapValue(function (e) {
            return e.filter(function (e) {
              return e.source_type === r("ExternalEventSourceTypes").PIXEL;
            });
          });
          return e.mapValue(function (e) {
            return r("immutable").Map(
              e.map(function (e) {
                return [
                  e.id,
                  new (r("SignalsOptimizationSourceContainer"))(
                    e.id,
                  ).fromPixelRawData({
                    cluster: e.cluster || null,
                    hasBAPIDomains: e.has_verified_domains || !1,
                    id: e.id,
                    isEligibleForValueOptimization:
                      e.is_eligible_for_value_optimization || !1,
                    isUnavailable: e.is_unavailable || !1,
                    lastFiredTime:
                      e.last_fired_time != null ? e.last_fired_time : null,
                    name: e.name || "",
                    serverLastFiredTime:
                      e.server_last_fired_time != null
                        ? e.server_last_fired_time
                        : null,
                  }),
                ];
              }),
            );
          });
        },
        { name: i.id + ".parentCatalogAssociatePixelsSelector" },
      ),
      g = e(
        [d],
        function (t) {
          var e = t.mapValue(function (e) {
            return e.filter(function (e) {
              return (
                (e == null ? void 0 : e.has_verified_domains) === !0 &&
                (e == null ? void 0 : e.source_type) ===
                  r("ExternalEventSourceTypes").PIXEL
              );
            });
          });
          return e.mapValue(function (e) {
            return r("immutable").Map(
              e.map(function (e) {
                var t;
                return [
                  e.id,
                  new (r("SignalsOptimizationSourceContainer"))(
                    e.id,
                  ).fromPixelRawData({
                    hasBAPIDomains: e.has_verified_domains || !1,
                    id: e.id,
                    isEligibleForValueOptimization:
                      e.is_eligible_for_value_optimization || !1,
                    isUnavailable: e.is_unavailable || !1,
                    lastFiredTime:
                      e.last_fired_time != null ? e.last_fired_time : null,
                    name: e.name || "",
                    serverLastFiredTime:
                      (t = e.server_last_fired_time) != null ? t : null,
                  }),
                ];
              }),
            );
          });
        },
        { name: i.id + ".parentCatalogAssociateAEMPixelsSelector" },
      ),
      h = e(
        [m],
        function (t) {
          var e = t.mapValue(function (e) {
            return e.filter(function (e) {
              return e.source_type === r("ExternalEventSourceTypes").PIXEL;
            });
          });
          return e.mapValue(function (e) {
            return r("immutable").Map(
              e.map(function (e) {
                return [
                  e.id,
                  new (r("SignalsOptimizationSourceContainer"))(
                    e.id,
                  ).fromPixelRawData({
                    hasBAPIDomains: e.has_verified_domains || !1,
                    id: e.id,
                    isEligibleForValueOptimization:
                      e.is_eligible_for_value_optimization || !1,
                    isUnavailable: e.is_unavailable || !1,
                    lastFiredTime:
                      e.last_fired_time != null ? e.last_fired_time : null,
                    name: e.name || "",
                    serverLastFiredTime:
                      e.server_last_fired_time != null
                        ? e.server_last_fired_time
                        : null,
                  }),
                ];
              }),
            );
          });
        },
        { name: i.id + ".catalogSalesPartnerAssociatePixelsSelector" },
      ),
      y = e(
        [s, d, r("CPASPromotableAppsProvider").toFluxSelector()],
        function (t, n, a) {
          var e = n.mapValue(function (e) {
            return e
              .filter(function (e) {
                return e.source_type === r("ExternalEventSourceTypes").APP;
              })
              .map(function (e) {
                return e.id;
              });
          });
          if (e.isLoadingOrEmpty())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var l = e.getValue();
          if (l == null)
            return r("LoadObject").withValue([], { creatorModuleID: i.id });
          var s = l.map(function (e) {
            return a.get({ adAccountID: t.account_id, appID: e });
          });
          if (o("AdsLoadObjectUtils").anyLoadingOrEmpty(s))
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var u = o("AdsLoadObjectUtils")
            .getLoadedValues(s)
            .filter(function (e) {
              return e != null;
            });
          return r("LoadObject").withValue(u, { creatorModuleID: i.id });
        },
        { name: i.id + ".parentCatalogAssociatedAppsLoadObjectSelector" },
      ),
      C = e(
        [s, m, r("CPASPromotableAppsProvider").toFluxSelector()],
        function (t, n, a) {
          var e = n.mapValue(function (e) {
            return e
              .filter(function (e) {
                return e.source_type === r("ExternalEventSourceTypes").APP;
              })
              .map(function (e) {
                return e.id;
              });
          });
          if (e.isLoadingOrEmpty())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var l = e.getValue();
          if (l == null)
            return r("LoadObject").withValue([], { creatorModuleID: i.id });
          var s = l.map(function (e) {
            return a.get({ adAccountID: t.account_id, appID: e });
          });
          if (o("AdsLoadObjectUtils").anyLoadingOrEmpty(s))
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var u = o("AdsLoadObjectUtils").getLoadedValues(s);
          return r("LoadObject").withValue(u, { creatorModuleID: i.id });
        },
        { name: i.id + ".catalogSalesAssociatedAppsSelector" },
      ),
      b = e(
        [c, C, y],
        function (t, n, r) {
          switch (t) {
            case o("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
              return n;
            case o("AdsAPIObjectives").CONVERSIONS:
              return r;
            default:
              return r;
          }
        },
        { name: i.id + ".omniAssociatedAppsSelector" },
      ),
      v = e(
        [y, o("AdsUEditorCampaignAppSelectors").availablePlatforms],
        function (t, n) {
          var e = [];
          return (
            t
              .match({
                error: function () {
                  return [];
                },
                loaded: r("emptyFunction").thatReturnsArgument,
                loading: function () {
                  return [];
                },
              })
              .forEach(function (t) {
                if (t != null) {
                  var o = n.some(function (e) {
                    return r("AdsAppUtils").appHasPlatform(t, e);
                  });
                  o && e.push(t);
                }
              }),
            e
          );
        },
        { name: i.id + ".parentCatalogAssociatedAppsSelector" },
      ),
      S = e(
        [v],
        function (t) {
          return new (r("AdsUEditorAppSearchSource"))(t);
        },
        { name: i.id + ".parentCatalogAssociatedAppsSearchSourceSelector" },
      ),
      R = e(
        [f],
        function (t) {
          if (!t.hasValueWithoutError()) return !1;
          var e = t.getValueEnforcing();
          return e.some(function (e) {
            return e.hasBAPIDomains === !0;
          });
        },
        { name: i.id + ".hasAnyValidCPASPartnerPixelsSelectorForConversion" },
      ),
      L = e(
        [R],
        function (t) {
          return !t;
        },
        {
          name: i.id + ".associatedCPASPartnerPixelsUnselectableForPCMSelector",
        },
      ),
      E = r(
        "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
      ).toFluxSelector(),
      k = r("AdsCPASCustomConversionProvider").toFluxSelector();
    ((l.catalogSalesPartnerExternalEventSourcesSelector = m),
      (l.checkIfCPASCatalogSelector = p),
      (l.parentCatalogAssociatePixelAndAppsSelector = _),
      (l.parentCatalogAssociatePixelsSelector = f),
      (l.parentCatalogAssociateAEMPixelsSelector = g),
      (l.catalogSalesPartnerAssociatePixelsSelector = h),
      (l.parentCatalogAssociatedAppsLoadObjectSelector = y),
      (l.omniAssociatedAppsSelector = b),
      (l.parentCatalogAssociatedAppsSelector = v),
      (l.parentCatalogAssociatedAppsSearchSourceSelector = S),
      (l.associatedCPASPartnerPixelsUnselectableForPCMSelector = L),
      (l.associatedCPASPartnerEventSourcesInfoSelector = E),
      (l.fetchCPASCustomConversionSelector = k));
  },
  98,
);
