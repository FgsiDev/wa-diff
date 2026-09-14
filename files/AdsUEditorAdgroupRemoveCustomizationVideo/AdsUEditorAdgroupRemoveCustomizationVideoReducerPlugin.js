__d(
  "AdsUEditorAdgroupRemoveCustomizationVideoReducerPlugin",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsPACSpecMutationAsyncLog",
    "AdsSelectedPreviewLoadScenarioLogger",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCustomizationVideoDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorAdgroupVideoMutators",
    "FBLogger",
    "adsPlacementAssetMutationRemoveCustomizationVideo",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupsEligibleForEventDetectionSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            remindersAdsDefaultOptIn: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            eligibleForEventDetection: r(
              "adsUEditorAdgroupsEligibleForEventDetectionSelector",
            ),
            ocrText: r("adsUEditorAdgroupOCRTextSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              l = n.eligibleForEventDetection,
              s = n.linkTypeMap,
              u = n.ocrText,
              c = n.parentData,
              d = n.plugins,
              m = n.remindersAdsDefaultOptIn,
              p = o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n, i, p, _, f;
                o("AdsPACSpecMutationAsyncLog").log(
                  e,
                  "REMOVE_VIDEO_START",
                  "REMOVE_CUSTOMIZATION_VIDEO",
                );
                var g = r("nullthrows")(d.get(e.id)),
                  h = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                    (n = e.creative) == null || (n = n.asset_feed_spec) == null
                      ? void 0
                      : n.videos,
                    t.label,
                    "video_id",
                  ).index;
                if (h == null)
                  throw r("FBLogger")("am_feature_pac").mustfixThrow(
                    "asset with given label must exist in asset feed",
                  );
                var y = o(
                    "AdsUEditorAdgroupVideoMutators",
                  ).isolateVideoAssetWithLabel(e, g, h, t.label),
                  C = y.adgroupWithIsolatedVideoAsset,
                  b = r("adsPlacementAssetMutationRemoveCustomizationVideo")(
                    C,
                    g,
                    t.label,
                    !0,
                    a,
                  );
                ((b = o("AdsUEditorAdgroupBadges").restoreBadgeSets(e, b)),
                  (b = o(
                    "AdsUEditorAdgroupUpcomingEventsMutator",
                  ).copyUpcomingEvent(e, b)),
                  o("AdsPACSpecMutationAsyncLog").log(
                    b,
                    "REMOVE_VIDEO_END",
                    "REMOVE_CUSTOMIZATION_VIDEO",
                  ));
                var v = c == null ? void 0 : c.get(e.id);
                return (
                  (b = o(
                    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                  ).updateAdForUpcomingEventMetadata(
                    b,
                    s == null ? void 0 : s[e.id],
                    null,
                    null,
                    g,
                    m,
                    l,
                    (i = v == null ? void 0 : v.campaignGroup.objective) != null
                      ? i
                      : null,
                    (p = v == null ? void 0 : v.campaign.optimization_goal) !=
                      null
                      ? p
                      : null,
                    u,
                    (_ = v == null ? void 0 : v.campaign) != null ? _ : null,
                    (f = v == null ? void 0 : v.campaignGroup) != null
                      ? f
                      : null,
                  )),
                  b
                );
              }),
              _ = p.findKey(function (e, t) {
                return (
                  e.hasValue() &&
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(
                    e.getValueEnforcing(),
                  )
                );
              });
            return (
              _ == null &&
                o(
                  "AdsSelectedPreviewLoadScenarioLogger",
                ).shouldStartPreviewLoadScenario(t.hostID) &&
                o("AdsSelectedPreviewLoadScenarioLogger").startScenario(
                  "switch_to_non_pac",
                  i.id,
                  t.adgroupIDs,
                ),
              p
            );
          },
          o("AdsUEditorAdgroupRemoveCustomizationVideoDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
