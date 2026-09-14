__d(
  "adsUEditorConvertLoadObjectMapToPromiseMapSelector",
  [
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "err",
    "immutable",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 &&
        (t = function (t) {
          return t.isLoadingOrEmpty();
        });
      var n = r("immutable").Map().asMutable();
      return r("adsCreateSelector")(
        [
          e,
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
        ],
        function (a, l) {
          var o = a.filter(t).map(function (t, o) {
            var a = n.get(o);
            return (
              a ||
                ((a = r("promiseStoreGet")(e.getStores(l), function () {
                  var t = e(l).get(o);
                  return t != null
                    ? t
                    : r("LoadObject").withError(
                        r("err")(
                          "Ad object " +
                            o +
                            " that previously had a mapped LoadObject no\n                    longer has an associated LoadObject to be used by promiseStoreGet",
                        ),
                        { creatorModuleID: i.id },
                      );
                }).finally(function () {
                  return n.delete(o);
                })),
                n.set(o, a)),
              a
            );
          });
          return o;
        },
        { name: i.id },
      );
    }
    l.default = e;
  },
  98,
);
