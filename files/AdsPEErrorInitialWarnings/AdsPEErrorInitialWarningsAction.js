__d(
  "AdsPEErrorInitialWarningsAction",
  ["AdsPEErrorInitialWarningsReducerPlugin", "AdsPEErrorProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEErrorInitialWarningsReducerPlugin"),
            n("AdsPEErrorProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.ERROR.INITIAL_WARNINGS",
    );
    a.exports = e;
  },
  null,
);
