__d(
  "AdsUEditorAdgroupSetVideoFormatReducerPlugin",
  [
    "AdFLEXConfig",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupTypeUtils",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupStartLocalVideoUploadActionFlux",
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
              function (e, t) {
                var n,
                  i,
                  l = r("nullthrows")(a.get(t)),
                  s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin;
                if (
                  !o("AdsAdgroupTypeUtils").isVideoAd(e) &&
                  ((n =
                    r("AdFLEXConfig") == null ||
                    (i = r("AdFLEXConfig").get()) == null
                      ? void 0
                      : i.shouldUpdateAdSpecOnLocalVideoUpload) == null ||
                    n)
                ) {
                  var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                      u.objective,
                      s,
                    ),
                    m = o("AdsODAXUtils").maybeTranslateObjective(
                      u.objective,
                      d,
                      s.optimization_goal,
                    );
                  return o("AdsMediaFormatMutators").setMediaFormat(
                    "VIDEO",
                    e,
                    c,
                    m,
                  );
                }
                return e;
              },
            );
          },
          o("AdsUEditorAdgroupStartLocalVideoUploadActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
