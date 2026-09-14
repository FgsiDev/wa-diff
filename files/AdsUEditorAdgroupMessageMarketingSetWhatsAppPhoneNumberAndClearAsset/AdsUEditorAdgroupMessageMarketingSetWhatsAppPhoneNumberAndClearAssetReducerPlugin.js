__d(
  "AdsUEditorAdgroupMessageMarketingSetWhatsAppPhoneNumberAndClearAssetReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetWhatsAppPhoneNumberAndClearAssetActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "applyWhatsAppPhoneNumberAndClearAssetIDMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r("applyWhatsAppPhoneNumberAndClearAssetIDMutator")(
                e,
                t.whatsAppPhoneNumberID,
              );
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingSetWhatsAppPhoneNumberAndClearAssetActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
