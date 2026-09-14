__d(
  "SignalsHomeAdAccountPixelDataProviderPlugin",
  [
    "LoadObjectMap",
    "SignalSearchDataManager",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            r("promiseDone")(
              r("promiseLoadObjectsFromKeys")(
                e,
                o("SignalSearchDataManager").loadAdAccountPixels,
              ),
              function (e) {
                t(function (t) {
                  return t.merge(e);
                });
              },
            );
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
