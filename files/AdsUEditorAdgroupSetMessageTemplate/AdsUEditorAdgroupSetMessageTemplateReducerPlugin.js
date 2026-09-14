__d(
  "AdsUEditorAdgroupSetMessageTemplateReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMessageTemplateDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.destination_spec.message_destination.template_id.set(
                t.messageTemplateID,
                e,
              );
            });
          },
          o("AdsUEditorAdgroupSetMessageTemplateDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
