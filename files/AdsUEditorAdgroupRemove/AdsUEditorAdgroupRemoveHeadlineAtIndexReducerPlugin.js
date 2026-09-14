__d(
  "AdsUEditorAdgroupRemoveHeadlineAtIndexReducerPlugin",
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
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveHeadlineAtIndexDataActionFlux",
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
                      .creative.media_sourcing_spec.titles.at(t.assetIndex)
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
                  if (
                    (u && c != null
                      ? ((s = o(
                          "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
                        ).deleteTitleText(l, c, t.assetIndex)),
                        (s = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.autotranslate.delete(s)))
                      : (s = r("AdsAdgroupRecordAccessors")
                          .creative.asset_feed_spec.titles.at(t.assetIndex)
                          .delete(l)),
                    o(
                      "AdsDCODegreesOfFreedomUtils",
                    ).isDOFAdgroupWithUniqueDOFAssets(s))
                  ) {
                    var d =
                      o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(s);
                    ((s = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).convertFromDOFAssetFeedSpec(s, d)),
                      (s = o("AdsUEditorAdgroupBadges").restoreBadgeSets(
                        l,
                        s,
                      )));
                  }
                  return s;
                }
                var m = l,
                  p = o(
                    "AdsPlacementAssetTargetingRuleUtils",
                  ).getDefaultTargetRuleLabel(m, "title_label"),
                  _ = o(
                    "AdsUEditorAdgroupHeadlineMutators",
                  ).getHeadlineAssetsFromLabel(m, p),
                  f = _ != null ? _.get(t.assetIndex) : null;
                if (f == null)
                  return (
                    r("FBLogger")("ads_dynamic_creative_optimization").mustfix(
                      "assetToRemove should never be null or undefined.",
                    ),
                    m
                  );
                var g = o("AdsAssetFeedFieldUtils").findAssetIndex(
                    m,
                    r("nullthrows")(i.get(m.id)),
                    r("AdsUnifiedCreativeAPIFields").headline,
                    f,
                  ),
                  h = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                    m,
                    r("nullthrows")(i.get(l.id)),
                    r("AdsUnifiedCreativeAPIFields").headline,
                    g,
                    "adlabels",
                    p,
                  ),
                  y = h.adgroupWithIsolatedAsset,
                  C = h.isolatedAssetIndex;
                return (
                  (m = r("AdsAdgroupRecordAccessors")
                    .creative.asset_feed_spec.titles.at(C)
                    .delete(y)),
                  m
                );
              },
            );
          },
          o("AdsUEditorAdgroupRemoveHeadlineAtIndexDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
