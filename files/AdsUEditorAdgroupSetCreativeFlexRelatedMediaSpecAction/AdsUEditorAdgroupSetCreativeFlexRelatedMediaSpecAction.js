__d(
  "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecAction",
  [
    "AdsCFAdgroupDataProvider",
    "AdsCFClearPendingGlobalishOnManualInteractionReducerPlugin",
    "AdsCreativeFlexDataProvider",
    "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecSilentDropLoggerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCFClearPendingGlobalishOnManualInteractionReducerPlugin"),
            n("AdsCreativeFlexDataProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecReducerPlugin",
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
            "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecSilentDropLoggerPlugin",
            n(
              "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecSilentDropLoggerPlugin",
            ),
            { adgroupState: n("AdsCFAdgroupDataProvider") },
          ),
        ];
      },
      "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecActionPlugin",
    );
    a.exports = e;
  },
  null,
);
