__d(
  "AdsUEditorAdgroupEnableLinkDescriptionDOFReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupEnableLinkDescriptionDOFDataActionFlux",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsConvertAdObjectRecordToPlainJS",
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
                var l,
                  s = e;
                if (a === !0) {
                  var u;
                  return (
                    (s = o(
                      "AdsUEditorAdgroupMultiMediaSpecMutators",
                    ).maySetMultiTextInMSSForMultiMediaAtIndex(
                      s,
                      o("AdsMultiMediaUtils").MultiMediaTextType.DESCRIPTION,
                      (u = t.linkDescription) != null ? u : "",
                      1,
                    )),
                    s
                  );
                }
                var c = r("adsConvertAdObjectRecordToPlainJS")(s);
                if (
                  o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(s) &&
                  !o("AdsAssetFeedUtils").canPacAdgroupUsingDOF(s) &&
                  !o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(
                    c,
                  ) &&
                  !o("AdsAssetFeedUtils").isClickToMultiDestAds(s)
                )
                  return (
                    r("FBLogger")("ads-dof").mustfix(
                      "Unexpected to enable DOF link description on adgroup using asset feed",
                    ),
                    s
                  );
                var d = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                  o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertToDOFAssetFeedSpec(s, !1),
                  i.get(s.id),
                  r("AdsUnifiedCreativeAPIFields").linkDescription,
                  1,
                  "text",
                  (l = t.linkDescription) != null ? l : "",
                  !0,
                );
                return d;
              },
            );
          },
          o("AdsUEditorAdgroupEnableLinkDescriptionDOFDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
