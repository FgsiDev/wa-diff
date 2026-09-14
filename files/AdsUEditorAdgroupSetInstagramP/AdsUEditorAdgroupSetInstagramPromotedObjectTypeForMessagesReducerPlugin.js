__d(
  "AdsUEditorAdgroupSetInstagramPromotedObjectTypeForMessagesReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignSetInstagramPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getShouldEnableAutomaticFlowByDefault,
              l = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n,
                  s = e,
                  u = r("nullthrows")(l.get(t)),
                  c = u.campaign,
                  d = u.campaignGroup,
                  m = u.specPlugin,
                  p = (n = c.promoted_object) == null ? void 0 : n.page_id,
                  _ = r(
                    "AdsAdgroupSemanticFields",
                  ).multiShareEndCard.isSupported(m, s),
                  f = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    d.objective,
                    c,
                  ),
                  g = o("AdsODAXUtils").maybeTranslateObjective(
                    d.objective,
                    f,
                    c.optimization_goal,
                  );
                if (
                  ((s = o(
                    "adsAutomaticFlowMutationSetDoFSpec",
                  ).adsAutomaticFlowLiteSpecMutator(
                    a,
                    { campaign: c, campaignGroup: d, adgroup: s },
                    i,
                  )),
                  o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(s))
                ) {
                  var h,
                    y,
                    C =
                      (h =
                        (y = s.creative_asset_groups_spec) == null ||
                        (y = y.toJS()) == null
                          ? void 0
                          : y.groups) != null
                        ? h
                        : [];
                  C.forEach(function (e, t) {
                    var n = e.texts;
                    n != null &&
                      ((n = n.filter(function (e) {
                        return e.text_type !== "description";
                      })),
                      (s = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setSpecsInCagGroup(s, t, n, "texts")));
                  });
                }
                return o(
                  "AdsUEditorInstagramMutators",
                ).setFieldsForSelectingPromotedObjectType({
                  adgroup: s,
                  campaignPromotedPageID: p,
                  objective: g,
                  specPlugin: m,
                  supportPageEndCard: _,
                  campaign: c,
                  campaignGroup: d,
                });
              },
            );
          },
          o("AdsUEditorCampaignSetInstagramPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
