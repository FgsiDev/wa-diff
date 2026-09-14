__d(
  "SignalsConversionAdAccountPixelCreatedReducerPlugin",
  [
    "LoadObjectMap",
    "SignalsConversionAdAccountPixelsLoadedAction",
    "SignalsConversionAdAccountPixelsLoadingAction",
    "SignalsConversionDataManager",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return r("LoadObjectMap").create(function (e) {
            (r("SignalsConversionAdAccountPixelsLoadingAction").dispatch(
              { adAccountIDs: e },
              {
                line: "30",
                module:
                  "SignalsConversionAdAccountPixelCreatedReducerPlugin.js",
                moduleID: i.id,
              },
            ),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(
                  e,
                  o("SignalsConversionDataManager")
                    .loadAdAccountPixelsForConversion,
                ),
                function (e) {
                  r("SignalsConversionAdAccountPixelsLoadedAction").dispatch(
                    { adAccountPixelsMap: e },
                    {
                      line: "40",
                      module:
                        "SignalsConversionAdAccountPixelCreatedReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
