__d(
  "AdsAdgroupSelectWhatsAppAccountReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSelectWhatsAppAccountActionFlux",
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
              var n = e;
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.page_whatsapp_number_id.set(
                  t.pageWhatsAppNumberID,
                  n,
                )),
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.whatsapp_business_phone_number_id.set(
                  t.whatsAppBusinessPhoneNumberID,
                  n,
                )),
                n
              );
            });
          },
          r("AdsAdgroupSelectWhatsAppAccountActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
