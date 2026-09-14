__d(
  "adsUEditorPcaUnificationSelectors",
  [
    "AdsPCAUnificationUtils",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = o(
        "AdsUEditorCampaignGroupSelectors",
      )).campaignGroups.somePlainObject(function (e) {
        var t;
        return (
          r("isTruthy")(e == null ? void 0 : e.is_pca_unified) &&
          r("isTruthy")(
            (t = e.promoted_object) == null ? void 0 : t.product_catalog_id,
          )
        );
      }),
      c = s.campaignGroups.somePlainObject(function (e) {
        var t;
        return (
          r("isFalsey")(e == null ? void 0 : e.is_pca_unified) &&
          r("isTruthy")(
            (t = e.promoted_object) == null ? void 0 : t.product_catalog_id,
          )
        );
      }),
      d = s.campaignGroups.somePlainObject(function (e) {
        var t;
        return r("isTruthy")(
          (t = e.promoted_object) == null ? void 0 : t.product_catalog_id,
        );
      }),
      m = s.campaignGroups.somePlainObject(function (e) {
        var t;
        return (
          r("isTruthy")(e == null ? void 0 : e.is_pca_unified) &&
          r("isFalsey")(
            (t = e.promoted_object) == null ? void 0 : t.product_catalog_id,
          )
        );
      }),
      p = o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
        function (e) {
          if (r("isTruthy")(e == null ? void 0 : e.is_pca_unified)) {
            var t;
            return (t = e.promoted_object) == null
              ? void 0
              : t.product_catalog_id;
          }
          return null;
        },
      ),
      _ = s.campaignGroups.somePlainObject(function (e) {
        return r("isTruthy")(e == null ? void 0 : e.is_pca_unified);
      }),
      f = (e = r("adsCreateSelector"))(
        [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
        function (t) {
          return !t.some(function (e) {
            return o("AdsPCAUnificationUtils").isPcaUnificationEnabled(e);
          });
        },
        { name: i.id + ".isNoneCampaignGroupSelectedPcaUnifiedSelector" },
      ),
      g = e(
        [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
        function (t) {
          return t.every(function (e) {
            return o("AdsPCAUnificationUtils").isPcaUnificationEnabled(e);
          });
        },
        { name: i.id + ".isEveryCampaignGroupSelectedPcaUnifiedSelector" },
      ),
      h = e(
        [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
        function (t) {
          var e;
          if (t.length === 0) return !0;
          var n =
            (e = t.at(0)) == null || (e = e.promoted_object) == null
              ? void 0
              : e.product_catalog_id;
          return t.every(function (e) {
            var t;
            return (
              ((t = e.promoted_object) == null
                ? void 0
                : t.product_catalog_id) === n
            );
          });
        },
        {
          name: i.id + ".isEveryCampaignGroupSelectedHavingSameCatalogSelector",
        },
      ),
      y = e(
        [g, f, h],
        function (t, n, r) {
          return (t && r) || n;
        },
        {
          name:
            i.id +
            ".arePcaUnifiedSelectedCampaignGroupsValidForDuplicationSelector",
        },
      );
    ((l.isPcaUnificationWs1EnabledAndL3CatalogPresentSelector = u),
      (l.isAdvantageCatalogAdsL3CatalogPresentSelector = c),
      (l.isL3ProductCatalogPresentSelector = d),
      (l.isPcaUnificationWs1EnabledAndL3CatalogNotPresentSelector = m),
      (l.bulkL3CatalogIDsForPcaUnificationSelector = p),
      (l.isPcaUnificationWs1EnabledSelector = _),
      (l.arePcaUnifiedSelectedCampaignGroupsValidForDuplicationSelector = y));
  },
  98,
);
