__d(
  "AdsUEditorAdgroupEditCustomizationHeadlineAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEditCustomizationHeadlineAtIndexActionFlux",
    "AdsUEditorAdgroupHeadlineMutators",
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
                    s = r("nullthrows")(u.get(e.id)),
                    c = s.specPlugin,
                    d = r(
                      "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                    )(e, c, a),
                    m = o(
                      "AdsPlacementAssetTargetingRuleUtils",
                    ).getLabelNameFromAssetCustomizationPlacement(
                      d,
                      t.placements,
                      "title_label",
                    ),
                    p =
                      (n = o(
                        "AdsUEditorAdgroupHeadlineMutators",
                      ).getHeadlineAssetsFromLabel(d, m)) != null
                        ? n
                        : r("immutable").List(),
                    _ =
                      (i =
                        (l = d.creative) == null ||
                        (l = l.asset_feed_spec) == null
                          ? void 0
                          : l.titles) != null
                        ? i
                        : r("immutable").List(),
                    f = o("AdsAssetFeedFieldUtils").findTargetAssetsIndex(_, p),
                    g = f.get(t.assetIndex);
                  if (g == null)
                    throw r("FBLogger")(
                      "ads_dynamic_creative_optimization",
                    ).mustfixThrow("oldAssetIndex cannot be identified");
                  var h =
                    _.findIndex(function (e) {
                      return e.get("text") === t.assetValue;
                    }) !== -1;
                  if (h) {
                    var y,
                      C,
                      b = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                        d,
                        c,
                        r("AdsUnifiedCreativeAPIFields").headline,
                        g,
                        "adlabels",
                        m,
                        !1,
                      ),
                      v = b.adgroupWithIsolatedAsset,
                      S = b.isolatedAssetIndex;
                    ((d = r("AdsAdgroupRecordAccessors")
                      .creative.asset_feed_spec.titles.at(S)
                      .delete(v)),
                      (_ =
                        (y =
                          (C = d.creative) == null ||
                          (C = C.asset_feed_spec) == null
                            ? void 0
                            : C.titles) != null
                          ? y
                          : r("immutable").List()));
                    var R = _.findIndex(function (e) {
                        return e.get("text") === t.assetValue;
                      }),
                      L = _.get(R);
                    if (L == null)
                      throw r("FBLogger")(
                        "ads_dynamic_creative_optimization",
                      ).mustfixThrow("existingAssetIndex cannot be identified");
                    var E = L.update("adlabels", function (e) {
                      var t;
                      if (!(e instanceof r("immutable").List))
                        throw r("FBLogger")(
                          "ads_dynamic_creative_optimization",
                        ).mustfixThrow(
                          "adlabels on title asset must be a list",
                        );
                      return e.push(
                        r("immutable").Map(((t = {}), (t.name = m), t)),
                      );
                    });
                    ((_ = _.splice(g + 1, 0, E)),
                      (_ = _.delete(R > g ? R + 1 : R)),
                      (d = r("AdsAdgroupSemanticFields").headline.set(
                        c,
                        d,
                        _,
                      )));
                  } else {
                    var k = o(
                        "AdsAssetFeedMutationUtils",
                      ).isolateAssetWithLabel(
                        d,
                        c,
                        r("AdsUnifiedCreativeAPIFields").headline,
                        g,
                        "adlabels",
                        m,
                        !0,
                      ),
                      I = k.adgroupWithIsolatedAsset,
                      T = k.isolatedAssetIndex;
                    d = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      I,
                      c,
                      r("AdsUnifiedCreativeAPIFields").headline,
                      T,
                      "text",
                      t.assetValue,
                    );
                  }
                  return d;
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
                      .DetectedDateExtractionField.HEADLINE,
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
          o("AdsUEditorAdgroupEditCustomizationHeadlineAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
