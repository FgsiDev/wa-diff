__d(
  "AdsFlatPageSetLoadedAction",
  ["AdsFlatPageSetLoadedReducerPlugin", "AdsPageSetProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsFlatPageSetLoadedReducerPlugin"),
            n("AdsPageSetProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsFlatPageSetLoadedAction",
    );
    a.exports = e;
  },
  null,
);
