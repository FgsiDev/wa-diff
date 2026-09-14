__d(
  "AdsUEditorAdgroupCreativeAssetGroupsAddDynamicGroupReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsPCAUnifiedFormatAdSetupUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCreativeAssetGroupsAddDynamicGroupActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l,
                  s,
                  u = r("nullthrows")(a.get(n)),
                  c = u.specPlugin,
                  d = e,
                  m = t.index,
                  p =
                    (i =
                      (l = d.creative_asset_groups_spec) == null ||
                      (l = l.groups) == null
                        ? void 0
                        : l.size) != null
                      ? i
                      : 0,
                  _ = null;
                if (p > 0) {
                  var f;
                  _ =
                    (f = d.creative_asset_groups_spec) == null ||
                    (f = f.groups) == null ||
                    (f = f.get(0)) == null
                      ? void 0
                      : f.toJS();
                }
                if (m === p) {
                  if (((m = 0), p === 1 && _)) {
                    var g;
                    d = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setNewGroupSpecAtStart(
                      d,
                      (g = t.origin) != null ? g : "creative_asset_groups",
                      p,
                      _,
                    );
                  } else {
                    var h;
                    d = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setNewGroupSpec(
                      d,
                      (h = t.origin) != null ? h : "creative_asset_groups",
                    );
                  }
                  var y = r("AdsAdgroupSemanticFields").callToActionType.get(
                    c,
                    e,
                  );
                  d = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setDefaultCagCallToActionTypeAtIndex(d, m, y);
                }
                if (
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isMediaSourcePCAUnifiedFormat(
                    (s = e.metadata) == null ? void 0 : s.adgroup_media_source,
                  ) &&
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isGKEnableForUnifiedMediaSetupFlow()
                ) {
                  var C;
                  if (
                    ((d = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setGroupTypeforCagGroup(d, m, "dynamic")),
                    (d = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).removeImagesFromCagGroup(d, m)),
                    (d = o(
                      "AdsPCAUnifiedFormatAdSetupUtils",
                    ).addDestinationUrlToCagGroup(d, c, m)),
                    (e == null || (C = e.creative) == null
                      ? void 0
                      : C.product_set_id) != null)
                  ) {
                    var b = ["carousel", "da_collection", "single_media"];
                    (b.forEach(function (e) {
                      d = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                        d,
                        e,
                        "catalog",
                      );
                    }),
                      p > 0 &&
                        ((d = o(
                          "AdsAdgroupFormatTransformationMutators",
                        ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                          d,
                          "carousel",
                          "manual_uploads",
                        )),
                        (d = o(
                          "AdsAdgroupFormatTransformationMutators",
                        ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                          d,
                          "da_collection",
                          "manual_uploads",
                        ))));
                  }
                }
                return d;
              },
            );
          },
          r("AdsUEditorAdgroupCreativeAssetGroupsAddDynamicGroupActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
