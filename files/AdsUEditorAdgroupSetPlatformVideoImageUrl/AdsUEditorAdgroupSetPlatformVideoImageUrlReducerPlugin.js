__d(
  "AdsUEditorAdgroupSetPlatformVideoImageUrlReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPlatformTypes",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPlatformVideoImageUrlDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.platform;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.platform_customizations.instagram.image_url.set(
                  t.imageURL,
                ),
                function (e) {
                  var o;
                  return n === r("AdsPlatformTypes").INSTAGRAM
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.platform_customizations.instagram.thumbnail_source.set(
                        (o = t.thumbnailSource) != null
                          ? o
                          : "generated_default",
                        e,
                      )
                    : e;
                },
                r("AdsAdgroupRecordAccessors").creative.platform_customizations
                  .instagram.image_hash.delete,
              ),
            );
          },
          o("AdsUEditorAdgroupSetPlatformVideoImageUrlDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
