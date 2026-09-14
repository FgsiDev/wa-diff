__d(
  "SignalsConversionAdAccountPixelsLoadingAction",
  [
    "Laminar",
    "SignalsConversionAdAccountPixelDataProvider",
    "SignalsConversionAdAccountPixelsLoadingReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("SignalsConversionAdAccountPixelsLoadingReducerPlugin"),
            n("SignalsConversionAdAccountPixelDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "SIGNALS_CONVERSION_ADACCOUNT_PIXEL_DATA_LOADING",
    );
    a.exports = e;
  },
  null,
);
