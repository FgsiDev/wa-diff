__d(
  "AdsUEditorAdgroupSetEmailCaptureOfferDetailsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetEmailCaptureOfferDetailsActionFlux",
    "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.isOptedIn,
                r = t.isShopifyMerchant,
                a = t.productCatalogId;
              return n === !1
                ? o(
                    "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
                  ).turnOffEmailCapture(e, !1, "manual")
                : r
                  ? o(
                      "AdsUEditorAdgroupEmailCaptureMutators",
                    ).optInEmailCaptureForUniqueCode(e, !1, null, a)
                  : o(
                      "AdsUEditorAdgroupEmailCaptureMutators",
                    ).optInEmailCaptureForGenericCode(e, !1, null, a);
            });
          },
          r("AdsUEditorAdgroupSetEmailCaptureOfferDetailsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
