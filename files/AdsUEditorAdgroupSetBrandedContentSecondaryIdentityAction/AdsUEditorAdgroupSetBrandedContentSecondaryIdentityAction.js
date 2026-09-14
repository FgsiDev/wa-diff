__d(
  "AdsUEditorAdgroupSetBrandedContentSecondaryIdentityAction",
  [
    "AdsBrandedContentIdentityModalErrorsProcessedProvider",
    "AdsBrandedContentIdentityModalErrorsProcessedResetReducerPlugin",
    "AdsUEditorSetBrandedContentSecondaryIdentityLoggerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsBrandedContentIdentityModalErrorsProcessedResetReducerPlugin",
            ),
            n("AdsBrandedContentIdentityModalErrorsProcessedProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSetBrandedContentSecondaryIdentityReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsUEditorSetBrandedContentSecondaryIdentityLoggerPlugin",
            n("AdsUEditorSetBrandedContentSecondaryIdentityLoggerPlugin"),
            {},
          ),
        ];
      },
      "ADS_ADGROUP_EDITOR_SET_BRANDED_CONTENT_SECONDARY_IDENTITY",
    );
    a.exports = e;
  },
  null,
);
