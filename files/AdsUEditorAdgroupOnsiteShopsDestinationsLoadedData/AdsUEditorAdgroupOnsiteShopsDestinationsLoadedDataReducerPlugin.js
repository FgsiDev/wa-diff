__d(
  "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            identityToStorefrontMap: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).adsUEditorAdgroupWebsiteAndShopIdentityToStorefrontSelector,
            destinationLinkType: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorBulkSelectedLinkTypeSelector,
          },
          function (e, t, n) {
            var a = n.destinationLinkType,
              i = n.identityToStorefrontMap,
              l = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(
                  l.get(e.id),
                  "Parent ad object data must exist for the adgroup being updated.",
                ),
                s = n.campaign,
                u = n.specPlugin,
                c = t.onsiteDestination,
                d = o("AdsBulkValueUtils").getUniformValue(a),
                m = o(
                  "AdsUEditorAdgroupOnsiteDestinationsMutators",
                ).getStorefrontsForAdgroup(e, u, i.getValue());
              return o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).updateOnsiteDestinationsWithLinkType(
                e,
                s,
                d,
                m,
                (c == null ? void 0 : c.destinationType) ===
                  "storefront_shop_id"
                  ? null
                  : c,
                !1,
                !0,
                t.source,
              );
            });
          },
          r("AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
