__d(
  "AdsUEditorAdgroupSetCallToActionTypeAssetsReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCallToActionTypeAssetsDataActionFlux",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToAction.get(t, e);
      if (!(n instanceof r("immutable").List)) return null;
      var o = n.first().get("value");
      return o instanceof r("immutable").Map ? o : null;
    }
    function s(e, t) {
      return e.map(function (e) {
        var n;
        if (t) {
          var o;
          return r("immutable").Map(((o = {}), (o.type = e), (o.value = t), o));
        }
        return r("immutable").Map(((n = {}), (n.type = e), n));
      });
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
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a = r("nullthrows")(i.get(t.id)),
                l = a.campaign,
                u = a.campaignGroup,
                c = a.specPlugin,
                d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  u.objective,
                  l,
                ),
                m = o("AdsODAXUtils").maybeTranslateObjective(
                  u.objective,
                  d,
                  null,
                );
              return o("AdsMutators").chain(
                function (e) {
                  return o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                    e,
                    c,
                    r("AdsUnifiedCreativeAPIFields").callToActionType,
                    n.callToActionTypes,
                  );
                },
                function (t) {
                  return m !== r("AdsAPIOptimizationGoals").LEAD_GENERATION
                    ? t
                    : o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                        t,
                        c,
                        r("AdsUnifiedCreativeAPIFields").callToAction,
                        s(n.callToActionTypes, e(t, c)),
                      );
                },
              )(t);
            });
          },
          o("AdsUEditorAdgroupSetCallToActionTypeAssetsDataActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
