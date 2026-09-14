__d(
  "AdsPostDefaultingAction",
  ["AdsPostDefaultingProvider", "AdsPostDefaultingReducerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPostDefaultingReducerPlugin"),
            n("AdsPostDefaultingProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_POST_DEFAULTING_ACTION",
    );
    a.exports = e;
  },
  null,
);
