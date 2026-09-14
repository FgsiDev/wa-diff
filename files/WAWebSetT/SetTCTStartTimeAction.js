__d(
  "SetTCTStartTimeAction",
  ["AdsSetTCTStartTimeReducerPlugin", "AdsTCTStartTimeProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsSetTCTStartTimeReducerPlugin"),
            n("AdsTCTStartTimeProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SetTCTStartTimeActionPlugin",
    );
    a.exports = e;
  },
  null,
);
