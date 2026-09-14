__d(
  "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataAction",
  [
    "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataLoggerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataReducerPlugin",
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
            "AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataLoggerPlugin",
            n("AdsUEditorAdgroupOnsiteShopsDestinationsLoadedDataLoggerPlugin"),
            {},
          ),
        ];
      },
      "Adgroup.ONSITE_SHOPS_DESTINATIONS.LOADED",
    );
    a.exports = e;
  },
  null,
);
