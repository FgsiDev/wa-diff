__d(
  "AdsUEditorAdgroupTransformDynamicToStaticSingleMediaReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPCAUnifiedFormatAdSetupUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTransformDynamicToStaticSingleMediaActionFlux",
    "FBLogger",
    "adsUEditorCampaignIsShopAdsConsolidatedFlowSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isShopAdsConsolidatedFlow: r(
              "adsUEditorCampaignIsShopAdsConsolidatedFlowSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.isShopAdsConsolidatedFlow,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n)),
                  s = l.campaign,
                  u = l.campaignGroup;
                if (u == null)
                  return (
                    r("FBLogger")("dpa").mustfix(
                      "Parent campaign group in reducer should not have been null",
                    ),
                    e
                  );
                var c = o("AdsODAXUtils").maybeTranslateObjective(
                    u.objective,
                    o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                      u.objective,
                      s,
                    ),
                    s.optimization_goal,
                  ),
                  d = o(
                    "AdsUEditorAdgroupDynamicMutators",
                  ).transformAdgroupFromTemplateToSingleMediaLinkData(
                    e,
                    s,
                    u,
                    c,
                  );
                if (a) {
                  var m = "website_and_shops",
                    p = t.linkType === "external" ? m : null;
                  d = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).updateOnsiteDestinationsWithLinkType(
                    d,
                    s,
                    p,
                    t.storefronts,
                    null,
                    !0,
                    !0,
                  );
                }
                if (
                  o(
                    "AdsPCAUnifiedFormatAdSetupUtils",
                  ).shouldSetupAdGroupAsPcaUnified(u)
                ) {
                  ((d = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.optimization_type.delete(d)),
                    (d = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.ad_formats.delete(d)));
                  var _ = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.format_transformation_spec.get(d);
                  if (_ != null) {
                    var f = _.filter(function (e) {
                      return e.get("format") !== "da_collection";
                    });
                    d = f.isEmpty()
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.format_transformation_spec.delete(d)
                      : r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.format_transformation_spec.set(f)(d);
                  }
                }
                return d;
              },
            );
          },
          o("AdsUEditorAdgroupTransformDynamicToStaticSingleMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
