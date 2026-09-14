__d(
  "AdsPEErrorDismissAction",
  ["AdsPEErrorDismissReducerPlugin", "AdsPEErrorProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEErrorDismissReducerPlugin"),
            n("AdsPEErrorProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.ERROR.DISMISS",
    );
    a.exports = e;
  },
  null,
);
