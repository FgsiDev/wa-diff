__d(
  "SignalsConversionAdAccountPixelsLoadedAction",
  [
    "Laminar",
    "SignalsConversionAdAccountPixelDataProvider",
    "SignalsConversionAdAccountPixelsLoadedReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("SignalsConversionAdAccountPixelsLoadedReducerPlugin"),
            n("SignalsConversionAdAccountPixelDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SIGNALS_CONVERSION_ADACCOUNT_PIXEL_DATA_LOADED",
    );
    a.exports = e;
  },
  null,
);
