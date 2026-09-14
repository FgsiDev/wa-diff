__d(
  "AdsUEditorAdgroupSetBackedThreadsAccountReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetBackedThreadsAccountActionFlux",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
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
                  s = e,
                  u = (i = a.get(n)) == null ? void 0 : i.campaign,
                  c = (l = a.get(n)) == null ? void 0 : l.specPlugin;
                if (u == null) return s;
                var d = o(
                  "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
                ).convertCampaignRecordToPlacementSpec(u);
                return (
                  r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
                    d,
                    "threads",
                  ) &&
                    c != null &&
                    (s = r("AdsAdgroupSemanticFields").threadsUserID.set(
                      c,
                      s,
                      t.threadsUserID,
                    )),
                  s
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetBackedThreadsAccountActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
