__d(
  "AdsUEditorAdgroupSetLinkTypeDataAction",
  [
    "AdsUEditorAdgroupCallExtensionProvider",
    "AdsUEditorAdgroupCallExtensionRemoveStateWhenUnsupportedReducerPlugins",
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
              "AdsUEditorAdgroupCallExtensionRemoveStateWhenUnsupportedReducerPlugins",
            )
              .AdsUEditorAdgroupCallExtensionRemoveStateWhenLinkTypeReducerPlugin,
            n("AdsUEditorAdgroupCallExtensionProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSetLinkTypeReducerPlugin",
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
      "ADS_ADGROUP_EDITOR_SET_LINK_TYPE",
    );
    a.exports = e;
  },
  null,
);
