__d(
  "AdsUEditorAdgroupSetShowEndCardReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupMultiProductMutatorUtils",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsClickToCallAdsUtils",
    "AdsLocalUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetShowEndCardDataActionFlux",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorWebsiteMutators",
    "adsPlacementAssetMutationUpdateAllCarousels",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "",
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getPage: r("AdsPageStore").getSelector,
          },
          function (t, n, a) {
            var i = a.getPage,
              l = a.parentData;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var s = l.get(a),
                  u = s.campaign,
                  c = s.campaignGroup,
                  d = s.specPlugin,
                  m = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(c),
                  p = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: u, campaignGroup: c }),
                  _ = o("AdsODAXUtils").maybeTranslateObjective(
                    c.objective,
                    p,
                    u.optimization_goal,
                  ),
                  f = o("AdsAPIAdgroupRecordUtils").getPageID(t, d),
                  g = t;
                if (
                  o("AdsLocalUtils").isLocalObjective(c.objective) &&
                  f != null &&
                  f !== e
                ) {
                  var h = i(f),
                    y = e;
                  h != null && h.website != null && (y = h.website);
                  var C = n.showEndCard ? y : e;
                  g = o("AdsUEditorWebsiteMutators").setWebsiteURL({
                    adgroup: t,
                    campaignGroupPromotedPageID: m,
                    objective: _,
                    promotedObjectType: p,
                    specPlugin: d,
                    websiteURL: C,
                  });
                }
                if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t))
                  return r("adsPlacementAssetMutationUpdateAllCarousels")(
                    t,
                    function (e) {
                      return e.set("multi_share_end_card", n.showEndCard);
                    },
                  );
                if (n.showEndCard)
                  return o(
                    "AdsAdgroupMultiProductMutatorUtils",
                  ).enableShowEndCard(g, d);
                var b =
                  !r("AdsAppUtils").isAppObjective(_, p) &&
                  !o("AdsClickToCallAdsUtils").getIsCallAdsLeadGenObjective(
                    _,
                    p,
                  );
                return o(
                  "AdsAdgroupMultiProductMutatorUtils",
                ).disableShowEndCard(g, d, b);
              },
            );
          },
          o("AdsUEditorAdgroupSetShowEndCardDataActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
