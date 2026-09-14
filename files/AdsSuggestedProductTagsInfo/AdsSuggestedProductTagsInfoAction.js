__d(
  "AdsSuggestedProductTagsInfoAction",
  [
    "AdsSuggestedProductTagsInfoProvider",
    "AdsSuggestedProductTagsInfoReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsSuggestedProductTagsInfoReducerPlugins")
              .AdsSuggestedProductTagsInfoReducerPlugin,
            n("AdsSuggestedProductTagsInfoProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SUGGESTED_PRODUCT_TAGS.SHOW_INFO",
    );
    a.exports = e;
  },
  null,
);
