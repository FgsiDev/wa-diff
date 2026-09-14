__d(
  "AdsUEditorAdgroupSetDynamicAdVoiceReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsCallToActionTypesUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetDynamicAdVoiceDataActionFlux",
    "AdsUEditorCallToActionMutators",
    "adsCallToActionFilterTypesByDynamicAdVoice",
    "adsCallToActionGetDefaultCallToActionType",
    "isTruthy",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
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
                  ),
                  m = r("adsCallToActionFilterTypesByDynamicAdVoice")(
                    o("AdsCallToActionTypesUtils").typesForObjective(d),
                    t.dynamicAdVoice,
                  ).map(function (e) {
                    return e.name;
                  }),
                  p = o(
                    "AdsAssetFeedFieldUtils",
                  ).firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
                    r("AdsAdgroupSemanticFields").callToActionType.get(u, e),
                  ),
                  _ = e;
                if (r("isTruthy")(p) && m.indexOf(p) === -1) {
                  var f = r("adsCallToActionGetDefaultCallToActionType")(
                    d,
                    null,
                    !0,
                  );
                  r("isTruthy")(f) && m.indexOf(f) !== -1
                    ? ((_ = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionType(_, f, u)),
                      (_ = o(
                        "AdsUEditorCallToActionMutators",
                      ).resetCallToActionValue(_, u)))
                    : (_ = o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToAction(_, u));
                }
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.dynamic_ad_voice.set(t.dynamicAdVoice, _);
              },
            );
          },
          o("AdsUEditorAdgroupSetDynamicAdVoiceDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
