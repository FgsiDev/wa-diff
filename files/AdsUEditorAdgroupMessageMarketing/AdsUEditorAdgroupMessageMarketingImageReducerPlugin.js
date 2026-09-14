__d(
  "AdsUEditorAdgroupMessageMarketingImageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetImageActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "getMergedHeaderAndBodyTextForTemplate",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.image.getAdAccountHash(),
              a = r("getMergedHeaderAndBodyTextForTemplate")(
                t.headline,
                t.body,
              ),
              i = r("isStringNullOrEmpty")(t.headline) ? t.body : a;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.image_hash.set(n),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.message.set(i),
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .link_data.name.delete,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingSetImageActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
