__d(
  "AdsUEditorAdgroupCampaignResetAdgroupSpecReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignPromotedObjectDeletePlacePageSetIDDataActionFlux",
    "AdsUEditorCampaignPromotedObjectSetPlacePageSetIDDataActionFlux",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignsMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            specialAdCategoriesMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t.special_ad_categories;
            }),
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var r;
            return t.adgroupIDs == null ||
              ((r = t.adgroupIDs) == null ? void 0 : r.length) === 0
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, r) {
                  var a,
                    i,
                    l = n.parentData.get(r);
                  if (l == null) return e;
                  var s =
                    (a = l.campaign.promoted_object) == null
                      ? void 0
                      : a.full_funnel_objective;
                  return o(
                    "AdsODAXAdgroupReducerUtils",
                  ).getDefaultAdgroupForNewMappedObjective(
                    e,
                    r,
                    babelHelpers.extends({}, n, {
                      shouldDefaultForAwarenessPageL2Change:
                        t.shouldDefaultForAwarenessPageL2Change === !0,
                      businessWhatsAppBusinessAccountsLoadObject:
                        t.businessWhatsAppBusinessAccountsLoadObject,
                      placePageSetParentPageID:
                        (i = t.placePageSetID) != null ? i : t.pageID,
                      mappedObjective: o(
                        "AdsODAXUtils",
                      ).maybeTranslateObjective(
                        s || l.campaignGroup.objective,
                        o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                          l.campaignGroup.objective,
                          l.campaign,
                        ),
                        l.campaign.optimization_goal,
                      ),
                    }),
                  );
                });
          },
          [
            r("AdsUEditorCampaignPromotedObjectSetPlacePageSetIDDataActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignPromotedObjectDeletePlacePageSetIDDataActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
