__d(
  "AdsInstagramMediaV2DataProviderPlugin",
  [
    "AdsInstagramMediaDataManagerV2",
    "LoadObjectMap",
    "mapSet",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.merge(
          r("mapSet")(t.ids, function (t) {
            return [t, e.get(t).loading()];
          }),
        );
      });
    }
    function s(e, t) {
      e(function (e) {
        return e.merge(t.medias);
      });
    }
    var u = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (e(n, { ids: t }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(
                  t,
                  r("AdsInstagramMediaDataManagerV2").loadFromV2ID,
                ),
                function (e) {
                  s(n, { medias: e });
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
