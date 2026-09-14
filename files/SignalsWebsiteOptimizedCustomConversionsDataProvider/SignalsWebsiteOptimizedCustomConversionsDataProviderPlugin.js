__d(
  "SignalsWebsiteOptimizedCustomConversionsDataProviderPlugin",
  [
    "LoadObjectMap",
    "SignalsConversionDataManager",
    "mapSet",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return function (e) {
          return e.merge(t);
        };
      },
      s = function (t) {
        return function (e) {
          return e.merge(
            r("mapSet")(t, function (t) {
              return [t, e.get(t).loading()];
            }),
          );
        };
      },
      u = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (n(s(t)),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(
                  t,
                  o("SignalsConversionDataManager")
                    .loadWebsiteCustomConversionsByAdAccount,
                ),
                function (t) {
                  n(e(t));
                },
              ));
          });
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
