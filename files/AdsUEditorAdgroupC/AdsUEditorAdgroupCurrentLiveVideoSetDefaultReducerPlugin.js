__d(
  "AdsUEditorAdgroupCurrentLiveVideoSetDefaultReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCurrentLiveVideoSetDefaultActionFlux",
    "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
    "AdsUEditorAdgroupReducerUtils",
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
              function (e, t) {
                var n,
                  a,
                  i,
                  l,
                  s,
                  u,
                  c,
                  d,
                  m,
                  p,
                  _ = r.get(t);
                if (
                  (_ == null || (n = _.campaignGroup.promoted_object) == null
                    ? void 0
                    : n.live_video_destination) === "INSTAGRAM"
                )
                  return e;
                var f =
                    (a =
                      (i = e.creative) == null ||
                      (i = i.object_story_spec) == null
                        ? void 0
                        : i.page_id) != null
                      ? a
                      : (l = e.creative) == null
                        ? void 0
                        : l.object_id,
                  g =
                    (s =
                      (u = e.creative) == null ||
                      (u = u.object_story_spec) == null
                        ? void 0
                        : u.instagram_actor_id) != null
                      ? s
                      : (c = e.creative) == null
                        ? void 0
                        : c.instagram_actor_id,
                  h =
                    (d =
                      (m = e.creative) == null ||
                      (m = m.object_story_spec) == null
                        ? void 0
                        : m.instagram_user_id) != null
                      ? d
                      : (p = e.creative) == null
                        ? void 0
                        : p.instagram_user_id;
                return f != null &&
                  (_ == null ? void 0 : _.campaign) != null &&
                  (_ == null ? void 0 : _.campaignGroup) != null
                  ? o(
                      "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
                    ).initExistingPostAd(
                      f,
                      g,
                      h,
                      e,
                      _.campaign,
                      _.campaignGroup,
                      _.specPlugin,
                    )
                  : e;
              },
            );
          },
          r("AdsUEditorAdgroupCurrentLiveVideoSetDefaultActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
