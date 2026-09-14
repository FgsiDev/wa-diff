__d(
  "AdsUEditorAdgroupSetMediaSetupTypeReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupPCAUnifiedFormatCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMediaSetupTypeActionFlux",
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
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.product_set_id.get(e);
                if (t.media_source === null) {
                  var i = o("AdsUEditorAdgroupMutators").unsetMediaSource(e);
                  return o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative_asset_groups_spec
                      .groups.delete,
                    o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators")
                      .deleteAllOrigins,
                    function (e) {
                      return o(
                        "AdsAdgroupPCAUnifiedFormatCreativeAssetGroupsSpecMutators",
                      ).setDOFToggleSpecForPCAU(e, !1);
                    },
                  )(i);
                }
                var l = o("AdsUEditorAdgroupMutators").setMediaSource(
                  e,
                  t.media_source,
                );
                return (
                  a == null &&
                    t.productSetID != null &&
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.product_set_id.set(t.productSetID, l)),
                  o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                      ).setOrigins(e, [
                        "pca_unification_alpha_experiment_full_format",
                      ]);
                    },
                    r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .template_data.delete,
                    function (e) {
                      return o(
                        "AdsAdgroupPCAUnifiedFormatCreativeAssetGroupsSpecMutators",
                      ).setDOFToggleSpecForPCAU(e, !0);
                    },
                  )(l)
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetMediaSetupTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
