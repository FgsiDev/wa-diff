__d(
  "AdsUEditorAdgroupSetGroupReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetGroupDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              if (
                ((n = e.creative) == null || (n = n.object_story_spec) == null
                  ? void 0
                  : n.video_data) != null
              ) {
                var i, l;
                return o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.video_data.call_to_action.value.link.set(
                    (i = t.group) == null ? void 0 : i.groupURL,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.video_data.call_to_action.value.group_id.set(
                    (l = t.group) == null ? void 0 : l.groupID,
                  ),
                )(e);
              } else {
                var s, u, c;
                return o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.link.set(
                    (s = t.group) == null ? void 0 : s.groupURL,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.call_to_action.value.link.set(
                    (u = t.group) == null ? void 0 : u.groupURL,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.call_to_action.value.group_id.set(
                    (c = t.group) == null ? void 0 : c.groupID,
                  ),
                  function (n) {
                    var o;
                    return r("AdsAdgroupSemanticFields").imageURL.set(
                      a.get(e.id),
                      n,
                      (o = t.group) == null ? void 0 : o.groupCoverPhoto,
                    );
                  },
                )(e);
              }
            });
          },
          r("AdsUEditorAdgroupSetGroupDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
