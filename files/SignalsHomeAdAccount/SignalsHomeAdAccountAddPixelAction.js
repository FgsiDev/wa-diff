__d(
  "SignalsHomeAdAccountAddPixelAction",
  [
    "Laminar",
    "SignalsHomeAdAccountPixelDataProvider",
    "SignalsHomeAdAccountPixelReducerPlugins",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("SignalsHomeAdAccountPixelReducerPlugins").onAddPixel,
            n("SignalsHomeAdAccountPixelDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SIGNALS_HOME.AD_ACCOUNT.ADD_PIXEL",
    );
    a.exports = e;
  },
  null,
);
