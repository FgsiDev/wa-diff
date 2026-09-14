__d(
  "AdsUEditorAdgroupSetPlatformVideoIDReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPlatformVideoIDDataActionFlux",
    "AdsVideoStore",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { getVideo: r("AdsVideoStore").getSelector },
          function (e, t, n) {
            var a = n.getVideo,
              i = [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.PLATFORM_CUSTOMIZATIONS.path,
                [t.platform],
              ),
              l = [].concat(i, ["image_hash"]),
              s = [].concat(i, ["image_url"]),
              u = [].concat(i, ["thumbnail_source"]),
              c = [].concat(i, ["video_id"]);
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              if (((n = n.deleteIn(l)), t.videoID != null)) {
                var o = a(t.videoID);
                n = n.setIn(c, t.videoID);
                var d = r("getByPath")(o, ["preferredThumbnail", "uri"]);
                return ((n = n.setIn(u, "generated_default")), n.setIn(s, d));
              }
              return n
                .deleteIn(c)
                .deleteIn(s)
                .deleteIn(u)
                .deleteIn([].concat(i, ["caption_ids"]));
            });
          },
          o("AdsUEditorAdgroupSetPlatformVideoIDDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
