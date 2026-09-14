__d(
  "AdsUEditorAdgroupRemoveWhatsAppAccountReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveWhatsAppAccountDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = r(
                "AdsAdgroupRecordAccessors",
              ).creative.whatsapp_business_profile_id.delete(e);
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.page_whatsapp_number_id.delete(t);
            });
          },
          o("AdsUEditorAdgroupRemoveWhatsAppAccountDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
