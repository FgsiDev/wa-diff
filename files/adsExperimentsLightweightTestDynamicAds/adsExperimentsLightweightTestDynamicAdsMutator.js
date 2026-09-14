__d(
  "adsExperimentsLightweightTestDynamicAdsMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
    "CatalogVertical",
    "adsExperimentsLightweightTestDynamicAdsProductStoreUtils",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = n.adAccountLoader,
        i = n.getPage,
        l = n.isShopAdsBundleAvailable,
        s = n.parentData,
        u = a == null ? void 0 : a.getValue();
      return u == null
        ? e
        : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n,
              a = (n = t.lightweightOptions) != null ? n : {},
              c = a.description,
              d = a.headline,
              m = a.primaryText,
              p = a.productCatalogID,
              _ = a.productSetID,
              f = r("CatalogVertical").COMMERCE;
            if (p !== "MIXED" && p != null) {
              var g = o(
                "adsExperimentsLightweightTestDynamicAdsProductStoreUtils",
              ).adsExperimentsGetLightweightTestDynamicAdsProductStoreUtils(p);
              f = g.vertical || r("CatalogVertical").COMMERCE;
            }
            var h = r(
              "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
            )({
              adAccount: u,
              adgroup: e,
              disablePAC: null,
              getPage: i,
              isShopAdsBundleAvailable: l,
              parentData: s,
              productSetID: _,
              productSetVertical: f,
            });
            return (
              r("isFalsey")(c) ||
                (h = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.description.set(
                  c,
                  h,
                )),
              r("isFalsey")(d) ||
                (h = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.name.set(d, h)),
              r("isFalsey")(m) ||
                (h = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.message.set(m, h)),
              h
            );
          });
    }
    l.default = e;
  },
  98,
);
