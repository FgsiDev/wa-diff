__d(
  "AdsUEditorAdgroupSetPagePrivateReplyReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPagePrivateReplyActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.pagePrivateReply,
                a = o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.additional_data.page_private_reply.set(
                    n,
                  ),
                )(e);
              return a;
            });
          },
          [r("AdsUEditorAdgroupSetPagePrivateReplyActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
