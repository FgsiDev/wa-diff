__d(
  "AdsPlacePageSetPageSetsLoadSuccessDataAction",
  [
    "AdsPlacePageSetPageSetsLoadSuccessDataReducerPlugin",
    "AdsPlacePageSetProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPlacePageSetPageSetsLoadSuccessDataReducerPlugin"),
            n("AdsPlacePageSetProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPlacePageSetActionsType.PAGE_SETS_LOAD_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
