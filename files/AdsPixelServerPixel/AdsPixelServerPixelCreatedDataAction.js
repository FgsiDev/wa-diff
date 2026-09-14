__d(
  "AdsPixelServerPixelCreatedDataAction",
  [
    "AdsPixelProvider",
    "AdsPixelServerUpdatePixelsDataReducerPlugins",
    "Laminar",
    "SignalsConversionAdAccountPixelCreatedReducerPlugin",
    "SignalsConversionAdAccountPixelDataProvider",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPixelServerUpdatePixelsDataReducerPlugins")
              .AdsPixelServerPixelCreatedDataReducerPlugin,
            n("AdsPixelProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("SignalsConversionAdAccountPixelCreatedReducerPlugin"),
            n("SignalsConversionAdAccountPixelDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PIXEL_CREATED",
    );
    a.exports = e;
  },
  null,
);
