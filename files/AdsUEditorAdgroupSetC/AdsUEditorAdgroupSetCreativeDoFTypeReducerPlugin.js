__d(
  "AdsUEditorAdgroupSetCreativeDoFTypeReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupPCAUnifiedFormatCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupCreativeSetDoFTypeDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                (n = o("AdsMutators").chain(
                  function (e) {
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
                      t.dofType,
                      e,
                    );
                  },
                  function (e) {
                    var n,
                      r = t.dofType === "USER_ENROLLED_AUTOFLOW";
                    if (
                      o(
                        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                      ).hasSpecificOrigin(e, "creative_asset_groups") ||
                      o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e)
                    ) {
                      var a,
                        i =
                          ((a = e.creative) == null ||
                          (a = a.object_story_spec) == null
                            ? void 0
                            : a.link_data) != null;
                      return o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setDOFToggleSpecForCag(e, i, r);
                    } else if (
                      o(
                        "AdsPCAUnifiedFormatEligibilityUtils",
                      ).isGKEnableForUnifiedMediaSetupFlow() &&
                      o(
                        "AdsPCAUnifiedFormatEligibilityUtils",
                      ).isMediaSourcePCAUnifiedFormat(
                        (n = e.metadata) == null
                          ? void 0
                          : n.adgroup_media_source,
                      )
                    )
                      return o(
                        "AdsAdgroupPCAUnifiedFormatCreativeAssetGroupsSpecMutators",
                      ).setDOFToggleSpecForPCAU(e, r);
                    return e;
                  },
                )(n)),
                n
              );
            });
          },
          o("AdsUEditorAdgroupCreativeSetDoFTypeDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
