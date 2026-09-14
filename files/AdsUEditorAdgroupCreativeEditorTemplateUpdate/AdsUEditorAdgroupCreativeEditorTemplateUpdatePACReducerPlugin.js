__d(
  "AdsUEditorAdgroupCreativeEditorTemplateUpdatePACReducerPlugin",
  [
    "AdsAssetFeedUtils",
    "AdsCreativeEditorTemplateRenderPACSucceededActionFlux",
    "AdsCreativeFormatMutatorUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsVideoStore",
    "FBLogger",
    "adsPlacementAssetMutationUpdateMediaAsset",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getVideo: r("AdsVideoStore").getSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.parentData,
              l = t.thumbnailURL,
              s = t.videoID,
              u = {
                format: "video",
                videoID: s,
                thumbnailURL: l,
                thumbnailSource: "generated_default",
              };
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                l =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.asset_customization_rules;
              if (
                !o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                  e,
                ) ||
                !l
              )
                return e;
              var s = o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getMediaAssetTypeFromTargetRuleLabel(l, t.existingLabel);
              if (s === "carousel")
                return (
                  r("FBLogger")("am_feature_pac").mustfix(
                    "Unexpected fromMediaType carousel in AdsUEditorAdgroupCreativeEditorTemplateUpdatePACReducerPlugin",
                  ),
                  e
                );
              var c = i.get(e.id);
              if (c == null)
                return (
                  r("FBLogger")("am_feature_pac").mustfix(
                    "Could not find parent ad object data in AdsUEditorAdgroupCreativeEditorTemplateUpdatePACReducerPlugin",
                  ),
                  e
                );
              var d = c.specPlugin;
              return o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsCreativeFormatMutatorUtils",
                  ).mutateCreativeFormat(e, "PAC");
                },
                function (e) {
                  return r("adsPlacementAssetMutationUpdateMediaAsset")(
                    a,
                    e,
                    d,
                    t.existingLabel,
                    s,
                    u,
                  );
                },
              )(e);
            });
          },
          r("AdsCreativeEditorTemplateRenderPACSucceededActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
