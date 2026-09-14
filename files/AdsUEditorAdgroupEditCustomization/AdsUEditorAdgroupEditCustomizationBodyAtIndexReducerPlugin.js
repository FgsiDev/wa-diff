__d(
  "AdsUEditorAdgroupEditCustomizationBodyAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupEditCustomizationBodyAtIndexActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupsEligibleForEventDetectionSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "immutable",
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
              i = n.eligibleForEventDetection,
              l = n.linkTypeMap,
              s = n.ocrText,
              u = n.parentData,
              c = n.remindersAdsDefaultOptIn;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                function (e) {
                  var n,
                    i,
                    l,
                    s,
                    c = r("nullthrows")(u.get(e.id)),
                    d = c.specPlugin,
                    m = r(
                      "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                    )(e, d, a),
                    p = o(
                      "AdsPlacementAssetTargetingRuleUtils",
                    ).getLabelNameFromAssetCustomizationPlacement(
                      m,
                      t.placements,
                      "body_label",
                    ),
                    _ =
                      (n = o(
                        "AdsUEditorAdgroupBodyMutators",
                      ).getBodyAssetsFromLabel(m, p)) != null
                        ? n
                        : r("immutable").List(),
                    f =
                      (i =
                        (l = m.creative) == null ||
                        (l = l.asset_feed_spec) == null
                          ? void 0
                          : l.bodies) != null
                        ? i
                        : r("immutable").List(),
                    g = o("AdsAssetFeedFieldUtils").findTargetAssetsIndex(f, _),
                    h = g.get(t.assetIndex);
                  if (
                    h != null &&
                    ((s = m.creative) == null ||
                    (s = s.asset_feed_spec) == null ||
                    (s = s.bodies) == null ||
                    (s = s.get(h)) == null
                      ? void 0
                      : s.get("text")) === t.assetValue
                  )
                    return m;
                  if (h == null)
                    throw r("FBLogger")(
                      "ads_dynamic_creative_optimization",
                    ).mustfixThrow("oldAssetIndex cannot be identified");
                  var y =
                    f.findIndex(function (e) {
                      return e.get("text") === t.assetValue;
                    }) !== -1;
                  if (y) {
                    var C,
                      b,
                      v = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                        m,
                        d,
                        r("AdsUnifiedCreativeAPIFields").message,
                        h,
                        "adlabels",
                        p,
                        !1,
                      ),
                      S = v.adgroupWithIsolatedAsset,
                      R = v.isolatedAssetIndex;
                    return (
                      (m = r("AdsAdgroupRecordAccessors")
                        .creative.asset_feed_spec.bodies.at(R)
                        .delete(S)),
                      (m = o(
                        "AdsUEditorAdgroupBodyMutators",
                      ).updateBodyAssetLabelsAtIndex(
                        m,
                        d,
                        p,
                        ((C =
                          (b = m.creative) == null ||
                          (b = b.asset_feed_spec) == null
                            ? void 0
                            : b.bodies) != null
                          ? C
                          : r("immutable").List()
                        ).findIndex(function (e) {
                          return e.get("text") === t.assetValue;
                        }),
                        h,
                      )),
                      m
                    );
                  } else {
                    var L = o(
                        "AdsAssetFeedMutationUtils",
                      ).isolateAssetWithLabel(
                        m,
                        d,
                        r("AdsUnifiedCreativeAPIFields").message,
                        h,
                        "adlabels",
                        p,
                        !0,
                      ),
                      E = L.adgroupWithIsolatedAsset,
                      k = L.isolatedAssetIndex;
                    m = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      E,
                      d,
                      r("AdsUnifiedCreativeAPIFields").message,
                      k,
                      "text",
                      t.assetValue,
                    );
                  }
                  return m;
                },
                function (e) {
                  var n = r("nullthrows")(u.get(e.id)),
                    a = n.campaign,
                    d = n.campaignGroup,
                    m = n.specPlugin;
                  return o(
                    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                  ).updateAdForUpcomingEventMetadata(
                    e,
                    l == null ? void 0 : l[e.id],
                    t.assetValue,
                    o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
                      .DetectedDateExtractionField.PRIMARY_TEXT,
                    m,
                    c,
                    i,
                    d.objective,
                    a.optimization_goal,
                    s,
                    a,
                    d,
                  );
                },
              ),
            );
          },
          o("AdsUEditorAdgroupEditCustomizationBodyAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
