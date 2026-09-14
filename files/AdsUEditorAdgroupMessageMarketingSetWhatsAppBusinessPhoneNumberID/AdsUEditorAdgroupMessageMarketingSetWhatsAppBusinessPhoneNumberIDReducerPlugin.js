__d(
  "AdsUEditorAdgroupMessageMarketingSetWhatsAppBusinessPhoneNumberIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetWhatsAppBusinessPhoneNumberIDActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.whats_app_business_phone_number_id.set(
                  t.whatsAppBusinessPhoneNumberID,
                ),
              )(e);
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingSetWhatsAppBusinessPhoneNumberIDActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
