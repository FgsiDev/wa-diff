__d(
  "AdsUEditorAdgroupSetUseDynamicReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetUseDynamicDataActionFlux",
    "ApiAdObjectTypes",
    "CatalogVertical",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.link.set(
          (l = e.creative) == null ||
            (l = l.object_story_spec) == null ||
            (l = l.video_data) == null ||
            (l = l.call_to_action) == null ||
            (l = l.value) == null
            ? void 0
            : l.link,
        ),
        r("AdsAdgroupRecordAccessors").creative.object_type.set(
          r("ApiAdObjectTypes").SHARE,
        ),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
          .delete,
        o("AdsUEditorAdgroupDynamicMutators").removeThumbnail,
        function (e) {
          return o(
            "AdsUEditorAdgroupDynamicMutators",
          ).addDefaultCarouselTemplateDataFields(
            e,
            t,
            null,
            a === r("CatalogVertical").COMMERCE ? a : null,
            !0,
            n,
            i !== "PRODUCT" ? i : null,
          );
        },
      )(e);
    }
    function s(e, t) {
      var n = e.adgroupProductSetCatalogItemTypesMap,
        o = e.adgroupProductSetVerticalsMap,
        a = o != null && o.get(t) !== e.vertical,
        i =
          e.vertical === r("CatalogVertical").COMMERCE &&
          (n == null ? void 0 : n.get(t)) !== e.catalogItemType;
      return a || i;
    }
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.parentData;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var l = t,
                  u = i.get(a),
                  c = u.campaign,
                  d = u.campaignGroup,
                  m = u.specPlugin,
                  p = d.objective,
                  _ = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    p,
                    c,
                  ),
                  f = o("AdsODAXUtils").maybeTranslateObjective(
                    p,
                    _,
                    c.optimization_goal,
                  ),
                  g = o("AdsAPIAdgroupRecordUtils").isTemplateCreative(l);
                if (g)
                  s(n, a) &&
                    (l = o(
                      "AdsUEditorAdgroupDynamicMutators",
                    ).addDefaultCommonTemplateDataFields(
                      l,
                      f,
                      n.productSetID,
                      n.vertical,
                      !0,
                      c,
                      n.catalogItemType,
                    ));
                else if (o("AdsAdgroupTypeUtils").isVideoAd(l)) {
                  var h, y;
                  l = e(
                    l,
                    f,
                    c,
                    (h = n.vertical) != null ? h : null,
                    (y = n.catalogItemType) != null ? y : null,
                  );
                } else
                  l = o(
                    "AdsUEditorAdgroupDynamicMutators",
                  ).transformAdgroupFromLinkToCarouselTemplateData(
                    l,
                    f,
                    _,
                    n.productSetID,
                    n.vertical,
                    void 0,
                    c,
                    void 0,
                    n.catalogItemType,
                  );
                return (
                  (l = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).maybeRemoveCagSpec(l)),
                  r("AdsAdgroupSemanticFields").productSetID.set(
                    m,
                    l,
                    n.productSetID,
                  )
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetUseDynamicDataActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
