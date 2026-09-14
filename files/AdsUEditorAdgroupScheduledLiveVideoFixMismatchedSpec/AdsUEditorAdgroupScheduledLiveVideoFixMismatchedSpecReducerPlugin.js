__d(
  "AdsUEditorAdgroupScheduledLiveVideoFixMismatchedSpecReducerPlugin",
  [
    "AdsAdgroupScheduledLiveVideoFixSpecMutators",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupScheduledLiveVideoFixMismatchedSpecActionFlux",
    "AdsUEditorAdgroupSelectors",
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
            var r = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a = r.get(n),
                  i = e;
                return (
                  t.mismatchCase.has(
                    o("AdsLiveVideoAdUtils").ScheduledLiveVideoMismatchCase
                      .CTX_MISMATCH,
                  ) &&
                    (i = o(
                      "AdsAdgroupScheduledLiveVideoFixSpecMutators",
                    ).fixCTXMDMismatchForScheduledLiveVideoAdIfExist(
                      e,
                      a == null ? void 0 : a.campaign,
                    )),
                  t.mismatchCase.has(
                    o("AdsLiveVideoAdUtils").ScheduledLiveVideoMismatchCase
                      .CLEAR_VIDEO_SELECTION,
                  ) &&
                    (i = o(
                      "AdsAdgroupScheduledLiveVideoFixSpecMutators",
                    ).clearSelectedVideoForScheduledLiveVideoAd(e)),
                  (i = o(
                    "AdsAdgroupScheduledLiveVideoFixSpecMutators",
                  ).restorePageIDForScheduledLiveVideoAd(i, t.pageID)),
                  i
                );
              },
            );
          },
          r("AdsUEditorAdgroupScheduledLiveVideoFixMismatchedSpecActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
