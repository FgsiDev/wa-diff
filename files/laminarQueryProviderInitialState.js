__d(
  "laminarQueryProviderInitialState",
  [
    "invariant",
    "LoadObject",
    "LoadObjectMap",
    "RelayFBEnvironment",
    "RelayModern",
    "immutable",
    "mapSet",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n) {
      return r("LoadObjectMap").createKeyed(
        function (e) {
          (t(function (t) {
            return t.merge(
              r("mapSet")(e, function (e) {
                return [e, r("LoadObject").loading({ creatorModuleID: i.id })];
              }),
            );
          }),
            e.forEach(function (e) {
              return r("promiseDone")(
                n(e),
                function (n) {
                  return t(function (t) {
                    return t.set(
                      e,
                      r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                    );
                  });
                },
                function (n) {
                  return t(function (t) {
                    return t.set(
                      e,
                      r("LoadObject").withError(n, { creatorModuleID: i.id }),
                    );
                  });
                },
              );
            }));
        },
        function (e) {
          return r("immutable").Iterable.isIterable(e)
            ? e
            : r("immutable").fromJS(e);
        },
      );
    };
    function u(t, n) {
      n != null || s(0, 20855);
      var a = function (t) {
        return o("RelayModern").fetchQuery(
          r("RelayFBEnvironment"),
          n,
          t != null ? t : {},
          { force: !0 },
        );
      };
      return e(t, a);
    }
    function c(t, n) {
      return (n != null || s(0, 20856), e(t, n));
    }
    function d(t, n) {
      return (n != null || s(0, 20856), e(t, n));
    }
    ((l.callback = d), (l.graphAPI = c), (l.graphQL = u));
  },
  98,
);
