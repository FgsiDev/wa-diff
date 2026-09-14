__d(
  "AdsUEditorAdgroupMessageMarketingAutoReplyImageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingAutoReplySetImageActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.image.getAdAccountHash();
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.autoreply.image_hash.set(
                n,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingAutoReplySetImageActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
