__d(
  "AdsPixelStoreSetPixelListLoadingAction",
  [
    "AdsPixelProvider",
    "AdsPixelStoreSetPixelListLoadingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPixelStoreSetPixelListLoadingReducerPlugin"),
            n("AdsPixelProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPixelStoreSetPixelListLoadingActionPlugin",
    );
    a.exports = e;
  },
  null,
);
