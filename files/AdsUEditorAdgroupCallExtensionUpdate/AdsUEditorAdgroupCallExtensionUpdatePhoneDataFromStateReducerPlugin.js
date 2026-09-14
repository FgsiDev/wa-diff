__d(
  "AdsUEditorAdgroupCallExtensionUpdatePhoneDataFromStateReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsCallAddonUtils",
    "AdsClickToCallAdsUtils",
    "AdsMutators",
    "AdsUEditorAdgroupCallExtensionUpdateStateActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a,
              i = n.plugins;
            if ((t == null ? void 0 : t.checkboxValue) === !1) {
              var l = t.adgroupIDs || [];
              return o("AdsMutators").mutateEach(e, l, function (e, t) {
                return o("AdsCallAddonUtils").clearCallExtensionFields(
                  e,
                  r("nullthrows")(i.get(t)),
                );
              });
            }
            if (
              (t == null || (a = t.phoneNumberView) == null
                ? void 0
                : a.getError()) != null
            ) {
              var s = t.adgroupIDs || [];
              return o("AdsMutators").mutateEach(e, s, function (e, t) {
                return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(
                  e,
                ) || o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
                  ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      e,
                      r("nullthrows")(i.get(t)),
                      r("AdsUnifiedCreativeAPIFields").phoneDataID,
                      o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                        e,
                        "phone_data_ids",
                      ),
                      "id",
                      o("AdsClickToCallAdsUtils")
                        .CALL_EXTENSION_PHONE_DATA_ID_PLACEHOLDER,
                    )
                  : r("AdsAdgroupSemanticFields").phoneDataID.set(
                      r("nullthrows")(i.get(t)),
                      e,
                      o("AdsClickToCallAdsUtils")
                        .CALL_EXTENSION_PHONE_DATA_ID_PLACEHOLDER,
                    );
              });
            }
            return e;
          },
          o("AdsUEditorAdgroupCallExtensionUpdateStateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
