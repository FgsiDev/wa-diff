__d(
  "AdsPlacePageSetInfoPageSetsInfoLoadErrorDataAction",
  [
    "AdsPlacePageSetInfoPageSetsInfoLoadErrorDataReducerPlugin",
    "AdsPlacePageSetInfoProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPlacePageSetInfoPageSetsInfoLoadErrorDataReducerPlugin"),
            n("AdsPlacePageSetInfoProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPlacePageSetInfoActionType.PAGE_SETS_LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
