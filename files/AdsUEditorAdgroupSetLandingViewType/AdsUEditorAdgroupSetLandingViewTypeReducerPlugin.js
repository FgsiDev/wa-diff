__d(
  "AdsUEditorAdgroupSetLandingViewTypeReducerPlugin",
  [
    "invariant",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsLandingViewTypeUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLandingViewTypeDataActionFlux",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorWebsiteMutators",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.campaign,
                  u = i.campaignGroup,
                  c = i.specPlugin,
                  d = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(u),
                  m = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: l, campaignGroup: u }),
                  p = o("AdsODAXUtils").maybeTranslateObjective(
                    u.objective,
                    m,
                    l.optimization_goal,
                  ),
                  _ = r("AdsAdgroupSemanticFields").pageID.get(c, e),
                  f = t.pages.get(r("nullthrows")(_));
                f || s(0, 3092);
                var g = o("AdsLandingViewTypeUtils").linkFromType(
                  t.landingViewType,
                  f,
                );
                return o("AdsUEditorWebsiteMutators").setWebsiteURLInChildren({
                  adgroup: e,
                  campaignGroupPromotedPageID: d,
                  objective: p,
                  promotedObjectType: m,
                  specPlugin: c,
                  websiteURL: g,
                });
              },
            );
          },
          o("AdsUEditorAdgroupSetLandingViewTypeDataActionFlux").actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
