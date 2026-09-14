__d(
  "AdsAdgroupRemoveWhatsAppBusinessPhoneNumberIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupRemoveWhatsAppBusinessPhoneNumberIDActionFlux",
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
              ).creative.whatsapp_business_phone_number_id.delete(e);
            });
          },
          r("AdsAdgroupRemoveWhatsAppBusinessPhoneNumberIDActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
