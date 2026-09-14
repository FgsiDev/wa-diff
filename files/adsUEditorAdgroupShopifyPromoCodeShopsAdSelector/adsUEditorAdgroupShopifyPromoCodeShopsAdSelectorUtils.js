__d(
  "adsUEditorAdgroupShopifyPromoCodeShopsAdSelectorUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsInstagramUsernameStore",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPageStore",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorSelectors",
    "AdsUniformValue",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
    "adsEnforcePureGetStores",
    "adsUEditorSelectedAdgroupIDsSelector",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsUEditorAdgroupBulkSelectors").selectorByAdgroupFn(function (e) {
        var t;
        return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
          ? e == null || (t = e.creative) == null
            ? void 0
            : t.instagram_actor_id
          : null;
      }),
      u = (e = r("adsCreateSelector"))(
        [
          o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
            r("AdsAdgroupSemanticFields").instagramActorID.get,
          ),
          s,
        ],
        function (t, n) {
          return t instanceof r("AdsEmptyValue") ? n : t;
        },
        { name: i.id + ".bulkInstagramActorIDSelector" },
      ),
      c = e(
        [
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          r("adsCreateStoreThunkSelector")(r("AdsPageStore"), function (e) {
            return r("AdsPageStore").getAll(e);
          }),
        ],
        function (t, n) {
          var e = t.getValues(),
            a = o("AdsLoadStateUtils_LEGACY").getLoadedValuesSingleMap(n(e));
          return t instanceof r("AdsEmptyValue")
            ? r("AdsEmptyValue").instance()
            : o("AdsBulkValueUtils").aggregate(a);
        },
        { name: i.id + ".bulkPage" },
      ),
      d = e(
        [c],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id + ".pageSelector" },
      ),
      m = r("adsEnforcePureGetStores")(
        e(
          [
            o("AdsUEditorCampaignInstagramSelectors").businessInstagramAccounts,
            u,
            r("AdsInstagramUsernameStore").getForAdgroupSelector,
            r("adsUEditorSelectedAdgroupIDsSelector"),
          ],
          function (t, n, a, i) {
            var e = n instanceof r("AdsUniformValue") ? n.getValue() : null;
            if (r("isFalsey")(e) || !o("AdsLoadStateUtils_LEGACY").isLoaded(t))
              return null;
            var l = t.data,
              s =
                l &&
                l.find(function (t) {
                  return t.id === e;
                });
            return s
              ? babelHelpers.extends(
                  { loadState: r("AdsLoadState_LEGACY").LOADED },
                  s,
                )
              : a(e, i[0]);
          },
          i.id + ".selectedInstagramAccountSelector",
        ),
      );
    ((l.pageSelector = d), (l.selectedInstagramAccountSelector = m));
  },
  98,
);
