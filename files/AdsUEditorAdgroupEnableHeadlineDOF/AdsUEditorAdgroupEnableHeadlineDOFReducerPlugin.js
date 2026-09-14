__d(
  "AdsUEditorAdgroupEnableHeadlineDOFReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupEnableHeadlineDOFDataActionFlux",
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
                      o("AdsMultiMediaUtils").MultiMediaTextType.HEADLINE,
                      (u = t.headline) != null ? u : "",
                      1,
                    )),
                    s
                  );
                }
                var c = r("adsConvertAdObjectRecordToPlainJS")(s);
                if (
                  o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(s) &&
                  !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(s) &&
                  !o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(
                    c,
                  ) &&
                  !o("AdsAssetFeedUtils").isClickToMultiDestAds(s)
                )
                  return (
                    r("FBLogger")("ads-dof").mustfix(
                      "Unexpected to enable DOF headline on adgroup using asset feed",
                    ),
                    s
                  );
                if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(s)) {
                  var d;
                  return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    s,
                    i.get(s.id),
                    r("AdsUnifiedCreativeAPIFields").headline,
                    1,
                    "text",
                    (d = t.headline) != null ? d : "",
                    !0,
                  );
                }
                var m = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                  o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertToDOFAssetFeedSpec(s, !1),
                  i.get(s.id),
                  r("AdsUnifiedCreativeAPIFields").headline,
                  1,
                  "text",
                  (l = t.headline) != null ? l : "",
                  !0,
                );
                return t.assetSource != null
                  ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      m,
                      i.get(s.id),
                      r("AdsUnifiedCreativeAPIFields").headline,
                      1,
                      "asset_source",
                      t.assetSource,
                    )
                  : m;
              },
            );
          },
          o("AdsUEditorAdgroupEnableHeadlineDOFDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
