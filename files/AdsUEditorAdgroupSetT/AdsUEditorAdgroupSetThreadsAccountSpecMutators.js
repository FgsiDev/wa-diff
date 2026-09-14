__d(
  "AdsUEditorAdgroupSetThreadsAccountSpecMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUsernameStoreUtils",
    "AdsLoadState_LEGACY",
    "AdsUEditorAdgroupMutators",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = t;
      i = o("AdsUEditorAdgroupMutators").removeThreadsUserID(i, n);
      var l = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        e,
        "threads",
      );
      return (
        l &&
          r("gkx")("5403") &&
          r("AdsAdgroupSemanticFields").threadsUserID.isSupported(n, i) &&
          (i = r("isTruthy")(a)
            ? r("AdsAdgroupSemanticFields").threadsUserID.set(n, i, a)
            : r("AdsAdgroupSemanticFields").threadsUserID.delete(n, i)),
        i
      );
    }
    function s(e, t, n) {
      var a,
        i,
        l = r("AdsAdgroupSemanticFields").threadsUserID.isSupported(t, e)
          ? r("AdsAdgroupSemanticFields").threadsUserID.get(t, e)
          : (a = e.creative) == null || (a = a.object_story_spec) == null
            ? void 0
            : a.threads_user_id,
        s = o(
          "AdsIGIDv2SemanticFields",
        ).IGIDV2SemanticFields.instagramUserID.isSupported(t, e)
          ? r("AdsAdgroupSemanticFields").instagramActorID.get(t, e)
          : (i = e.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.instagram_actor_id,
        u = s != null ? s : n;
      if (l != null || u == null) return e;
      var c = o("AdsInstagramUsernameStoreUtils").loadInstagramUsernameByID(u),
        d =
          (c == null ? void 0 : c.loadState) === r("AdsLoadState_LEGACY").LOADED
            ? c == null
              ? void 0
              : c.threads_user_id
            : null;
      return r("AdsAdgroupSemanticFields").threadsUserID.isSupported(t, e)
        ? r("AdsAdgroupSemanticFields").threadsUserID.set(t, e, d)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.threads_user_id.set(d, e);
    }
    ((l.setThreadsUserIDFieldIfTargetThreadsPlacementOnL2 = e),
      (l.maybeSetAdgroupCreativeThreadsUserID = s));
  },
  98,
);
