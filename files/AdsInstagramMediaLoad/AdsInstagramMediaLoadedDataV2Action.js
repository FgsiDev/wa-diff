__d(
  "AdsInstagramMediaLoadedDataV2Action",
  [
    "AdsInstagramMediaV2DataProvider",
    "AdsInstagramMediaV2LoadedDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsInstagramMediaV2LoadedDataReducerPlugin"),
            n("AdsInstagramMediaV2DataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "INSTAGRAM_MEDIA.LOADED_V2",
    );
    a.exports = e;
  },
  null,
);
