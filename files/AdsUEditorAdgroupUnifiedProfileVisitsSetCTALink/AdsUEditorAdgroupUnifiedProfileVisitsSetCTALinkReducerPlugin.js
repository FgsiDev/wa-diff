__d(
  "AdsUEditorAdgroupUnifiedProfileVisitsSetCTALinkReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUnifiedProfileVisitsSetCTALinkActionFlux",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getPage: r("AdsPageStore").getSelector,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (e, t, n) {
            var a = n.getInstagramAccount,
              i = n.getPage,
              l = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n,
                  s = r("nullthrows")(l.get(t)),
                  u = s.campaign,
                  c = s.campaignGroup,
                  d = s.specPlugin,
                  m = o("AdsAPICampaignRecordUtils").getDestinationType(u);
                if (
                  m !==
                  r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
                )
                  return e;
                var p = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e),
                  _ = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    c.objective,
                    u,
                  ),
                  f = o("AdsODAXUtils").maybeTranslateObjective(
                    c.objective,
                    _,
                    u.optimization_goal,
                  ),
                  g = r("AdsAdgroupSemanticFields").pageID.get(d, e),
                  h = new Map();
                g != null && h.set(g, i(g));
                var y = r("AdsAdgroupSemanticFields").instagramActorID.get(
                    d,
                    e,
                  ),
                  C = y != null ? a(y, t) : null;
                return o(
                  "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
                ).setUnifiedProfileVisitsMultiDestinationCTAFields({
                  adgroup: e,
                  pages: h,
                  specPlugin: d,
                  campaignGroupPromotedPageID:
                    (n = c.promoted_object) == null ? void 0 : n.page_id,
                  objective: f,
                  instagramAccount: C,
                  postEditMode: p,
                  pageID: g,
                });
              },
            );
          },
          r("AdsUEditorAdgroupUnifiedProfileVisitsSetCTALinkActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
