__d(
  "AdsAdgroupRemoveWhatsAppAccountIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupRemoveWhatsAppAccountIDActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
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
              ).creative.asset_feed_spec.additional_data.page_whatsapp_number_id.delete(
                e,
              );
            });
          },
          r("AdsAdgroupRemoveWhatsAppAccountIDActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
