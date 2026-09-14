__d(
  "AdsAdgroupBwPMutators",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
    "AdsUEditorAdgroupACOMutators",
    "AdsUEditorAdgroupShopAdsBundleUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
    "CatalogVertical",
    "adsUEditorAdgroupCampaignGroupSetPromotedCatalogMutator",
    "adsUEditorAdgroupCampaignSelectWebsitePromotedObjectMutator",
    "adsUEditorAdgroupPlacementResetMutator",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = e.adAccount,
        i = e.adgroup,
        l = e.bwpEligiblePixelsLO,
        s = e.campaign,
        u = e.campaignGroup,
        c = e.defaultInstagramID,
        d = e.defaultProductSet,
        m = e.eligibilityInformation,
        p = e.getPage,
        _ = e.getShouldEnableAutomaticFlowByDefault,
        f = r("AdsCampaignGroupRecordAccessors").objective.get(u),
        g = o("AdsAPICampaignRecordUtils").getPromotedObjectType(f, s),
        h = o("AdsUEditorAdgroupShopAdsBundleUtils").isShopAdsBundleAvailable(
          s,
        ),
        y = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin({ campaign: s, campaignGroup: u }),
        C = r("immutable").Map(
          ((t = {}),
          (t[i.id] = { campaign: s, campaignGroup: u, specPlugin: y }),
          t),
        ),
        b = l.getValue() || [],
        v = {
          fb_pixel: (n = b[0]) == null ? void 0 : n.id,
          "action.type": ["offsite_conversion"],
        };
      return o("AdsMutators").chain(
        function (e) {
          return r("adsUEditorAdgroupCampaignGroupSetPromotedCatalogMutator")(
            e,
            y,
            u,
          );
        },
        function (e) {
          return m != null
            ? r("adsUEditorAdgroupPlacementResetMutator")({
                account: a,
                campaignGroup: u,
                campaign: s,
                adgroup: e,
                eligibilityInformation: m,
                getShouldEnableAutomaticFlowByDefault: _,
              }).mutatedAdgroup
            : e;
        },
        function (e) {
          return o("AdsUEditorAdgroupACOMutators").transformFromACOTemplateData(
            e,
            h,
            !1,
          );
        },
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .degrees_of_freedom_type.delete,
        function (e) {
          return o(
            "AdsAdgroupLinkPostFormatMutators",
          ).changeToSingleLinkPostFormat(f, e, g, s, u, a);
        },
        function (e) {
          var t;
          return r(
            "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
          )({
            adAccount: a,
            adgroup: e,
            catalogItemType: d == null ? void 0 : d.catalog_item_type,
            disablePAC: !0,
            getPage: p,
            isShopAdsBundleAvailable: h,
            parentData: C,
            productSetID: d == null ? void 0 : d.id,
            productSetVertical:
              (t = d == null ? void 0 : d.vertical) != null
                ? t
                : r("CatalogVertical").NONE,
          });
        },
        function (e) {
          return r("AdsAdgroupRecordAccessors").creative.product_set_id.set(
            d == null ? void 0 : d.id,
            e,
          );
        },
        r("AdsAdgroupRecordAccessors").creative.contextual_multi_ads.delete,
        function (e) {
          return o(
            "adsUEditorAdgroupCampaignSelectWebsitePromotedObjectMutator",
          ).selectWebsitePromotedObjectCommonMutator(
            a,
            e,
            y,
            s,
            u,
            c,
            _,
            "SHOP_NOW",
            void 0,
          );
        },
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .automated_product_tags.delete,
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .description.delete,
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .name.delete,
        function (e) {
          return o(
            "AdsUEditorAdgroupTrackingSpecMutators",
          ).setMobileAppTracking(null, e);
        },
        r("AdsAdgroupRecordAccessors").creative.template_url_spec.delete,
        function (e) {
          return o("AdsUEditorAdgroupTrackingSpecMutators").setTrackingSpec(
            v,
            e,
            "offsite_conversion",
          );
        },
      )(i);
    }
    function s(t) {
      return e(t);
    }
    function u(t) {
      return e(t);
    }
    ((l.enableBwPForSales = s), (l.enableBwPForTraffic = u));
  },
  98,
);
