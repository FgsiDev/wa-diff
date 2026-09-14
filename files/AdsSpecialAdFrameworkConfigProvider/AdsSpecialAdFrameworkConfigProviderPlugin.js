__d(
  "AdsSpecialAdFrameworkConfigProviderPlugin",
  [
    "AdsSpecialAdFrameworkConfigDataLoader",
    "LoadObjectMap",
    "LoadObjectOperation",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.setLoading(t.regulatedCategories);
      });
    }
    var s = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              (e(n, {
                regulatedCategories: t,
                operation: r("LoadObjectOperation").LOADING,
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(
                    t,
                    o("AdsSpecialAdFrameworkConfigDataLoader").genContent,
                  ),
                  function (e) {
                    n(function (t) {
                      return t.merge(e);
                    });
                  },
                ));
            },
            function (e) {
              return JSON.stringify(e);
            },
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
