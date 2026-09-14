__d(
  "AdsAPlusCChangeLevelViewAction",
  ["AdsAPlusCLevelViewProvider", "AdsAPlusCLevelViewReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAPlusCLevelViewReducerPlugins").changeLevelViewReducer,
            n("AdsAPlusCLevelViewProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsAPlusCChangeLevelViewActionPlugin",
    );
    a.exports = e;
  },
  null,
);
