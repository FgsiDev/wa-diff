__d(
  "AdsInstagramAccountPageCreatePageBackedSuccessDataAction",
  ["Laminar", "ifRequired_FOR_LAMINAR_CODEGEN"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsAdgroupDraftFragmentsInstagramAccountPageCreatePageBackedSuccessReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsAdgroupDraftFragmentsDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsCFAdgroupInstagramAccountPageCreatePageBackedSuccessReducerPlugin",
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
        return [];
      },
      "AdsInstagramAccounts.PAGE.CREATE_PAGE_BACKED_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
