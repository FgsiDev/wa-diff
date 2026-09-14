__d(
  "AdsUEditorAdgroupPromotedObjectSetPageIdReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConvergenceAdgroupUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux",
    "AdsUEditorWebsiteMutators",
    "AdsUEditorWhatsAppMutators",
    "adsAuthorizationCategoryMutate",
    "adsPagesInAuthorizationSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
    "adsUEditorIsPoliticalCategoryAvailableSelector",
    "isTruthy",
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
            isPolitcalCategoryAvailable: r(
              "adsUEditorIsPoliticalCategoryAvailableSelector",
            ),
            pagesInAuthorization: r("adsPagesInAuthorizationSelector"),
            regulatedCategories: o(
              "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
            ).adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
          },
          function (e, t, n) {
            var a = n.getPage,
              i = n.isPolitcalCategoryAvailable,
              l = n.pagesInAuthorization,
              s = n.parentData,
              u = n.regulatedCategories;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var c,
                  d = s.get(n);
                if (d == null) return e;
                var m = d.campaign,
                  p = d.campaignGroup,
                  _ = d.specPlugin,
                  f = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    p.objective,
                    m,
                  ),
                  g = o("AdsODAXUtils").maybeTranslateObjective(
                    p.objective,
                    f,
                    null,
                  ),
                  h = (c = p.promoted_object) == null ? void 0 : c.page_id,
                  y = a(t.pageID),
                  C = m.destination_type,
                  b =
                    m.optimization_goal ===
                    r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
                  v = C === r("AdCampaignDestination").MESSENGER,
                  S = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e),
                  R = r("isTruthy")(m.source_adset_id),
                  L = S && v && b && R;
                return o("AdsMutators").chain(
                  function (e) {
                    var n;
                    return g === r("AdsAPIObjectives").PAGE_LIKES &&
                      ((n = e.creative) == null ? void 0 : n.object_id) !==
                        t.pageID
                      ? o("AdsUEditorWebsiteMutators").setWebsiteURL({
                          adgroup: e,
                          campaignGroupPromotedPageID: h,
                          objective: g,
                          promotedObjectType: f,
                          specPlugin: _,
                          websiteURL: "",
                        })
                      : e;
                  },
                  function (e) {
                    return C === r("AdCampaignDestination").WHATSAPP
                      ? o(
                          "AdsUEditorWhatsAppMutators",
                        ).setWhatsAppDefaultLinkURLToAdgroup(e, _)
                      : e;
                  },
                  function (e) {
                    var n,
                      r =
                        ((n = e.creative) == null ||
                        (n = n.object_story_id) == null
                          ? void 0
                          : n.split("_")[0]) === t.pageID,
                      a = r && L;
                    return o("AdsUEditorAdgroupMutators").setPageID(
                      t.pageID,
                      y,
                      e,
                      h,
                      g,
                      a,
                    );
                  },
                  function (e) {
                    return r("adsAuthorizationCategoryMutate")(
                      e,
                      i,
                      t.pageID,
                      l,
                      u,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsConvergenceAdgroupUtils",
                    ).maybeEnableContextualDiscoveryAdsExperience(e);
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
