__d(
  "AdsUEditorAdgroupInstagramExistingPostSetCallToActionAppLinkReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupInstagramExistingPostMutators",
    "AdsUEditorAdgroupInstagramExistingPostSetCallToActionAppLinkDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "gkx",
    "justknobx",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l,
                  s = o(
                    "AdsUEditorAdgroupInstagramExistingPostMutators",
                  ).setIGCTAAppLinkMultiCreator(e, t.appLink);
                if (!r("gkx")("5824")) return s;
                var u = a.get(n);
                if (u == null) return s;
                var c = u.campaign,
                  d = u.campaignGroup,
                  m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    d.objective,
                    c,
                  );
                if (
                  d.objective !== r("AdsAPIObjectives").OUTCOME_SALES ||
                  m !== r("AdsPromotedObjectTypes").MOBILE_APP
                )
                  return s;
                var p =
                  (i = c.promoted_object) == null ? void 0 : i.object_store_url;
                p != null &&
                  r("AdsAppUrlUtils").isAppStoreURL(p) &&
                  (s = o(
                    "AdsUEditorAdgroupInstagramExistingPostMutators",
                  ).setCTALink(s, p));
                var _ =
                  (l = c.promoted_object) == null
                    ? void 0
                    : l.object_store_urls;
                return (
                  _ != null &&
                    r("AdsAppUtils").hasUnifiedAppStoreForSalesObjective(
                      d.objective,
                      m,
                    ) &&
                    r("justknobx")._("2939") &&
                    (s = o(
                      "AdsUEditorAdgroupInstagramExistingPostMutators",
                    ).setCTAObjectStoreURLs(s, _.toArray())),
                  s
                );
              },
            );
          },
          o(
            "AdsUEditorAdgroupInstagramExistingPostSetCallToActionAppLinkDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
