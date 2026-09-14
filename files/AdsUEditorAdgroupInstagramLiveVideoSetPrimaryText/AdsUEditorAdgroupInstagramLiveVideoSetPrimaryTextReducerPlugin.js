__d(
  "AdsUEditorAdgroupInstagramLiveVideoSetPrimaryTextReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupInstagramLiveVideoSetPrimaryTextActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                o = t == null ? void 0 : t.message;
              return (
                o != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.message.set(o, n)),
                n
              );
            });
          },
          r("AdsUEditorAdgroupInstagramLiveVideoSetPrimaryTextActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
