__d(
  "AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataAction",
  [
    "AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataReducerPlugin",
    "AdsPlacePageSetInfoProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataReducerPlugin"),
            n("AdsPlacePageSetInfoProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPlacePageSetInfoActionType.PAGE_SETS_LOAD_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
