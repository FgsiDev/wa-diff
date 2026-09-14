__d(
  "AdsUEditorAdgroupSetInstagramAccountDataAction",
  [
    "AdsInstagramMediaQueryProvider",
    "AdsInstagramMediaSourceSetAccountOnAccountChangeReducerPlugin",
    "AdsUnifiedInstagramAccountLoadSuccessReducerPlugin",
    "AdsUnifiedInstagramAccountProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsInstagramMediaSourceSetAccountOnAccountChangeReducerPlugin"),
            n("AdsInstagramMediaQueryProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSetInstagramAccountReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsUnifiedInstagramAccountLoadSuccessReducerPlugin"),
            n("AdsUnifiedInstagramAccountProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_ADGROUP_EDITOR_SET_INSTAGRAM_ACCOUNT",
    );
    a.exports = e;
  },
  null,
);
