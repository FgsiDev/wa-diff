__d(
  "ProductsFluxMultiParamLoadObjectStore",
  ["FluxLoadObjectStore", "RelayRuntime", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(o)) || this),
          (t.getForSelector = r("adsCreateStoreThunkSelector")(
            babelHelpers.assertThisInitialized(t),
            function () {
              var e;
              return (e = t).getFor.apply(e, arguments);
            },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getAllFor = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return this.__getAll.apply(this, [t].concat(n)).mapKeys(function (e) {
            return JSON.parse(e)[0];
          });
        }),
        (n.getFor = function () {
          return this.__get.apply(this, arguments);
        }),
        (n.getKey = function (t) {
          return JSON.stringify(r("RelayRuntime").stableCopy(t));
        }),
        (n.__handle = function (t, n) {
          for (
            var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2;
            o < e;
            o++
          )
            r[o - 2] = arguments[o];
          return this.__handleOne(t, this.getKey(r), n);
        }),
        (n.__handleMany = function (t, n) {
          for (
            var e = this,
              r = arguments.length,
              o = new Array(r > 2 ? r - 2 : 0),
              a = 2;
            a < r;
            a++
          )
            o[a - 2] = arguments[a];
          return this.__handleMap(
            t,
            n.mapKeys(function (t) {
              return e.getKey([t].concat(o));
            }),
          );
        }),
        (n.__load = function (t) {
          this.__loadImpl.apply(this, JSON.parse(t));
        }),
        (n.__get = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.get(this.getKey(t));
        }),
        (n.__getAll = function (t) {
          for (
            var e = this,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return this.getAll(
            t.map(function (t) {
              return e.getKey([t].concat(r));
            }),
          );
        }),
        t
      );
    })(r("FluxLoadObjectStore"));
    ((e.__moduleID = i.id), (l.default = e));
  },
  98,
);
