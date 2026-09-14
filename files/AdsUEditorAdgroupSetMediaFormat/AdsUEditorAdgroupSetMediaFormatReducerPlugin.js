__d(
  "AdsUEditorAdgroupSetMediaFormatReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMediaFormatDataActionFlux",
    "adsStoreToSelector",
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
          },
          function (e, t, n) {
            var r = n.cachedStoreState,
              a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = a.get(n),
                  l = i.campaign,
                  s = i.campaignGroup,
                  u = i.specPlugin,
                  c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    s.objective,
                    l,
                  ),
                  d = o("AdsODAXUtils").maybeTranslateObjective(
                    s.objective,
                    c,
                    l.optimization_goal,
                  );
                return o("AdsMediaFormatMutators").setMediaFormat(
                  t.mediaFormat,
                  e,
                  u,
                  d,
                  r,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetMediaFormatDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
