__d(
  "AdsUEditorAdgroupRemoveWhatsAppExtensionMultiNumberFieldsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveWhatsAppExtensionMultiNumberFieldsDataActionFlux",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).cleanWhatsAppExtensionMultiNumberFields(e);
            });
          },
          r(
            "AdsUEditorAdgroupRemoveWhatsAppExtensionMultiNumberFieldsDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
