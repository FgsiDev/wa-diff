__d(
  "SignalsAdAccountPixelIDListStore",
  [
    "AdsGraphAPI",
    "GraphAPIPaging",
    "Promise",
    "SignalsLoadObjectStore",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.__getName = function () {
            return i.id;
          }),
          (l.__getLoader = function (a) {
            return new (e || (e = n("Promise")))(function (e, t) {
              r("promiseDone")(
                o("AdsGraphAPI")
                  .get(i.id)
                  .adaccount(a)
                  .edge("adspixels")
                  .get({
                    fields: ["id"],
                    limit: 300,
                    sort_by: "LAST_FIRED_TIME",
                  })
                  .then(o("GraphAPIPaging").allPages()),
                function (t) {
                  e(
                    r("immutable").List(
                      t.data.map(function (e) {
                        return e.id;
                      }),
                    ),
                  );
                },
                t,
              );
            });
          }),
          a
        );
      })(r("SignalsLoadObjectStore")),
      u = new s();
    l.default = u;
  },
  98,
);
