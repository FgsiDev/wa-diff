__d(
  "AdsUEditorAdgroupODAXConversionLocationNCEOptoutReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorNonWebsiteConversionLocationSelectionActionFlux",
    "ProductBrowsingAdsUtils",
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
          },
          function (e, t, n) {
            var r = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r.get(t),
                  a = o("AdsMutators").chain(
                    o("AdsUEditorAdgroupMutators").setSAOffOptOut,
                    o("AdsUEditorAdgroupShopAdsUtils")
                      .deleteAssetFeedSpecOnsiteDestination,
                    o("AdsUEditorAdgroupMutators").setBizAIOff,
                  )(e);
                return (
                  (a = o(
                    "ProductBrowsingAdsUtils",
                  ).maybeUpdateProductBrowsingSpec(
                    a,
                    !1,
                    void 0,
                    n == null ? void 0 : n.campaignGroup,
                    n == null ? void 0 : n.campaign,
                    "conversion_location_change",
                  )),
                  a
                );
              },
            );
          },
          r("AdsUEditorNonWebsiteConversionLocationSelectionActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
