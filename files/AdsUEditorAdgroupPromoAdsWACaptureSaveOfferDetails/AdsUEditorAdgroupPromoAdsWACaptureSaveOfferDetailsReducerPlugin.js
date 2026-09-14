__d(
  "AdsUEditorAdgroupPromoAdsWACaptureSaveOfferDetailsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdsWACaptureMutator",
    "AdsUEditorAdgroupPromoAdsWACaptureSaveOfferDetailsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.isEditMode
                ? o(
                    "AdsUEditorAdgroupPromoAdsWACaptureMutator",
                  ).updateWACaptureOfferDetails(
                    e,
                    t.offerAmount,
                    t.privacyPolicyLink,
                    t.promoCode,
                  )
                : o(
                    "AdsUEditorAdgroupPromoAdsWACaptureMutator",
                  ).addWACaptureOfferDetails(
                    e,
                    t.offerAmount,
                    t.privacyPolicyLink,
                    t.promoCode,
                  );
            });
          },
          r("AdsUEditorAdgroupPromoAdsWACaptureSaveOfferDetailsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
