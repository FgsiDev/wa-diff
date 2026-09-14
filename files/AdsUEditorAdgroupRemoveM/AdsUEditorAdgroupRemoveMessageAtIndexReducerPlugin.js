__d(
  "AdsUEditorAdgroupRemoveMessageAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsDLOLanguageUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveMessageAtIndexDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
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
                var l = e;
                if (
                  (a === !0 &&
                    (l = r("AdsAdgroupRecordAccessors")
                      .creative.media_sourcing_spec.bodies.at(t.assetIndex)
                      .delete(l)),
                  !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l))
                ) {
                  var s,
                    u = o("AdsAssetFeedUtils").isAAAFromRecord(l),
                    c = u
                      ? o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(
                          l,
                        )
                      : null;
                  u && c != null
                    ? ((s = o(
                        "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
                      ).deleteBodyText(l, c, t.assetIndex)),
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.autotranslate.delete(s)))
                    : (s = r("AdsAdgroupRecordAccessors")
                        .creative.asset_feed_spec.bodies.at(t.assetIndex)
                        .delete(l));
                  var d =
                    o("AdsAssetFeedUtils").isDofWithUCAAdgroupFromRecord(s);
                  if (
                    o(
                      "AdsDCODegreesOfFreedomUtils",
                    ).isDOFAdgroupWithUniqueDOFAssets(s)
                  ) {
                    if (d)
                      return (
                        (s = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.optimization_type.delete(s)),
                        s
                      );
                    var m =
                        o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(
                          s,
                        ),
                      p = o(
                        "AdsUEditorAdgroupAudiosAdsMutators",
                      ).getAudioDataSpecField(s);
                    ((s = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).convertFromDOFAssetFeedSpec(s, m)),
                      (s = o(
                        "AdsUEditorAdgroupAudiosAdsMutators",
                      ).updateAFSAudioSpecField(s, p)),
                      (s = o("AdsUEditorAdgroupBadges").restoreBadgeSets(
                        l,
                        s,
                      )));
                  }
                  return s;
                }
                var _ = l,
                  f = o(
                    "AdsPlacementAssetTargetingRuleUtils",
                  ).getDefaultTargetRuleLabel(_, "body_label"),
                  g = o("AdsUEditorAdgroupBodyMutators").getBodyAssetsFromLabel(
                    _,
                    f,
                  ),
                  h = g != null ? g.get(t.assetIndex) : null;
                if (h == null)
                  return (
                    r("FBLogger")("ads_dynamic_creative_optimization").mustfix(
                      "assetToRemove should never be null or undefined.",
                    ),
                    _
                  );
                var y = o("AdsAssetFeedFieldUtils").findAssetIndex(
                    _,
                    r("nullthrows")(i.get(_.id)),
                    r("AdsUnifiedCreativeAPIFields").message,
                    h,
                  ),
                  C = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                    _,
                    r("nullthrows")(i.get(l.id)),
                    r("AdsUnifiedCreativeAPIFields").message,
                    y,
                    "adlabels",
                    f,
                  ),
                  b = C.adgroupWithIsolatedAsset,
                  v = C.isolatedAssetIndex;
                return (
                  (_ = r("AdsAdgroupRecordAccessors")
                    .creative.asset_feed_spec.bodies.at(v)
                    .delete(b)),
                  _
                );
              },
            );
          },
          o("AdsUEditorAdgroupRemoveMessageAtIndexDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
