__d(
  "AdsUEditorAdgroupRemoveLinkDescriptionAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveLinkDescriptionAtIndexDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
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
            isMultiUploadEligible: o(
              "adsUEditorIsAdgroupMultiUploadEligibleSelector",
            ).adsUEditorIsAdgroupMSSMultiTextEligibleSelector,
          },
          function (e, t, n) {
            var a = n.isMultiUploadEligible,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = e;
                a === !0 &&
                  (i = r("AdsAdgroupRecordAccessors")
                    .creative.media_sourcing_spec.descriptions.at(t.assetIndex)
                    .delete(i));
                var l = r("AdsAdgroupRecordAccessors")
                  .creative.asset_feed_spec.descriptions.at(t.assetIndex)
                  .delete(i);
                if (
                  o(
                    "AdsDCODegreesOfFreedomUtils",
                  ).isDOFAdgroupWithUniqueDOFAssets(l)
                ) {
                  var s =
                    o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(i);
                  l = o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertFromDOFAssetFeedSpec(l, s);
                }
                return l;
              },
            );
          },
          o("AdsUEditorAdgroupRemoveLinkDescriptionAtIndexDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
