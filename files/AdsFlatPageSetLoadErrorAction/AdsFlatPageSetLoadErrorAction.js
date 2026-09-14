__d(
  "AdsFlatPageSetLoadErrorAction",
  ["AdsFlatPageSetLoadErrorReducerPlugin", "AdsPageSetProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsFlatPageSetLoadErrorReducerPlugin"),
            n("AdsPageSetProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsFlatPageSetLoadError",
    );
    a.exports = e;
  },
  null,
);
