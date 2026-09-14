__d(
  "SignalsLoadObjectStore",
  [
    "AdsDataAtom",
    "FluxLoadObjectStore",
    "SignalsHomeLoggedDispatcher",
    "abstractMethod",
    "adsCoalesceLoads",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$SignalsLoadObjectStore$p_1 = r("adsCoalesceLoads")(
              function (e) {
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(new Set(e), function (e) {
                    return n.__getLoader(e);
                  }).then(function (e) {
                    var t = Array.from(e)
                      .filter(function (e) {
                        var t = e[0],
                          n = e[1];
                        return n.hasValueWithoutError();
                      })
                      .map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return { key: t, result: n.getValueEnforcing() };
                      });
                    t.length &&
                      o(
                        "SignalsHomeLoggedDispatcher",
                      ).handleUpdateFromServerResponse({
                        results: t,
                        type: n.__getName() + "-success",
                      });
                    var r = Array.from(e)
                      .filter(function (e) {
                        var t = e[0],
                          n = e[1];
                        return n.hasError();
                      })
                      .map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return { error: n.getErrorEnforcing(), key: t };
                      });
                    r.length &&
                      o(
                        "SignalsHomeLoggedDispatcher",
                      ).handleUpdateFromServerResponse({
                        errors: r,
                        type: n.__getName() + "-error",
                      });
                  }),
                );
              },
            )),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.reduce = function (t, n) {
            var e = this,
              r = n.action;
            switch (r.type) {
              case this.__getName() + "-success":
                return (
                  r.results != null
                    ? r.results.forEach(function (n) {
                        t = e.__handleOne(t, n.key, n.result);
                      })
                    : r.result != null &&
                      (t = this.__handleOne(t, r.key, r.result)),
                  t
                );
              case this.__getName() + "-error":
                return (
                  r.errors != null
                    ? r.errors.forEach(function (n) {
                        t = e.__handleOne(t, n.key, n.error);
                      })
                    : r.error != null &&
                      (t = this.__handleOne(t, r.key, r.error)),
                  t
                );
              case this.__getName() + "-clear":
                return t.delete(r.key);
              default:
                return this.__customReduce(t, n);
            }
          }),
          (a.clearKeyLater = function (t) {
            var e = this;
            setTimeout(function () {
              o("SignalsHomeLoggedDispatcher").handleUpdateFromServerResponse({
                key: t,
                type: e.__getName() + "-clear",
              });
            }, 0);
          }),
          (a.__customReduce = function (t, n) {
            return t;
          }),
          (a.__load = function (t) {
            this.$SignalsLoadObjectStore$p_1(t);
          }),
          (a.__loadAll = function (t) {
            var e = this,
              n = this.__getBatchLoader(t);
            if (n == null) for (var a of t) this.__load(a);
            else
              r("promiseDone")(
                n,
                function (n) {
                  var r = e.__parseBatchResults(t, n);
                  for (var a of t)
                    r.has(a)
                      ? o(
                          "SignalsHomeLoggedDispatcher",
                        ).handleUpdateFromServerResponse({
                          key: a,
                          result: r.get(a),
                          type: e.__getName() + "-success",
                        })
                      : e.__load(a);
                },
                function (n) {
                  for (var r of t) e.__load(r);
                },
              );
          }),
          (a.__getName = function () {
            return r("abstractMethod")("SignalsLoadObjectStore", "__getName");
          }),
          (a.__getLoader = function (t) {
            return r("abstractMethod")("SignalsLoadObjectStore", "__getLoader");
          }),
          (a.__getBatchLoader = function (t) {
            return null;
          }),
          (a.__parseBatchResults = function (t, n) {
            return n;
          }),
          n
        );
      })(r("FluxLoadObjectStore"));
    ((s.__moduleID = i.id), (l.default = s));
  },
  98,
);
