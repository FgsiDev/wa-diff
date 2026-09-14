__d(
  "AdsMessengerExistingPostPageWelcomeMessageDataProviderPlugin",
  [
    "AdsMessengerExistingPostPageWelcomeMessageDataManager",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjects",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            var n = new Map();
            (e.forEach(function (e) {
              return n.set(
                e,
                r(
                  "AdsMessengerExistingPostPageWelcomeMessageDataManager",
                ).getPageWelcomeMessage(e),
              );
            }),
              r("promiseDone")(r("promiseLoadObjects")(n), function (e) {
                t(function (t) {
                  return t.merge(e);
                });
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
