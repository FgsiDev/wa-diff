__d(
  "AdsUEditorAdgroupSetPageMutators",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPageDataActionFlux",
    "AdsUEditorAdgroupSetPageUtils",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorAdgroupReducerUtils").createReducer(
      { extraData: r("adsUEditorAdgroupSetPageReducerExtraDataSelector") },
      function (e, t, n) {
        var r = n.extraData,
          a = {};
        return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
          return o("AdsUEditorAdgroupSetPageUtils").setAdgroupPage(
            e,
            n,
            t.adgroupIDs,
            t.hostID,
            t.pageID,
            t.identityToStorefront,
            a,
            r,
            t.setInstagramDefaulting,
            null,
            null,
          );
        });
      },
      o("AdsUEditorAdgroupSetPageDataActionFlux").actionType,
    );
    l.setAdgroupPageReducer = e;
  },
  98,
);
