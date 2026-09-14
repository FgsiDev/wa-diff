__d(
  "SuggestedTagsStateUpdateAction",
  [
    "AdsSuggestedProductTagsInfoProvider",
    "AdsSuggestedProductTagsInfoReducerPlugins",
    "AdsSuggestedProductTagsOnStateUpdateReducerPlugin",
    "AdsSuggestedProductTagsProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsSuggestedProductTagsInfoReducerPlugins").onRemoveProductTags,
            n("AdsSuggestedProductTagsInfoProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsSuggestedProductTagsOnStateUpdateReducerPlugin"),
            n("AdsSuggestedProductTagsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SuggestedTagsStateUpdateActionPlugin",
    );
    a.exports = e;
  },
  null,
);
