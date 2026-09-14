__d(
  "AdsPECreateStartDuplicatingAction",
  ["AdsLoadDuplicationDialogLoggerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsLoadDuplicationDialogLoggerPlugin",
            n("AdsLoadDuplicationDialogLoggerPlugin"),
            {},
          ),
        ];
      },
      "PowerEditor.CREATE.START_DUPLICATING",
    );
    a.exports = e;
  },
  null,
);
