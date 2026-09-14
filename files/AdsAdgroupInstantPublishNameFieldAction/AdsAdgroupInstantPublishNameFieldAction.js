__d(
  "AdsAdgroupInstantPublishNameFieldAction",
  [
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsAdgroupDraftFragmentInstantPublishNameFieldReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsAdgroupDraftFragmentsDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins")
              .AdgroupInstantPublishReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADGROUP.INSTANT_PUBLISH_NAME",
    );
    a.exports = e;
  },
  null,
);
