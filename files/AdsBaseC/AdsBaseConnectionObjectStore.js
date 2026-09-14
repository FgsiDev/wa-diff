__d(
  "AdsBaseConnectionObjectStore",
  [
    "invariant",
    "AdsBaseDataStore_LEGACY",
    "AdsConnectionObjectBatchLoadErrorDataActionFlux",
    "AdsConnectionObjectBatchLoadedDataActionFlux",
    "AdsConnectionObjectDataManager",
    "AdsLoadState_LEGACY",
    "abstractMethod",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(o)) || this),
          (t.getSelector = r("adsCreateStoreThunkSelector")(
            babelHelpers.assertThisInitialized(t),
            function (e, n) {
              return t.getFor(e, n);
            },
          )),
          (t.getAllSelector = r("adsCreateStoreThunkSelector")(
            babelHelpers.assertThisInitialized(t),
            function (e, n) {
              return t.getAllFor(e, n);
            },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getDataManager = function () {
          return r("AdsConnectionObjectDataManager");
        }),
        (n.get = function (t) {
          s(0, 11828);
        }),
        (n.getAll = function (t) {
          s(0, 11829);
        }),
        (n.getFor = function (t, n) {
          return this.getAllFor(t, [n]).get(n);
        }),
        (n.getAllFor = function (t, n) {
          return this.__getAllConnectionObjectsFor(t, n);
        }),
        (n.getAllCachedFor = function (t, n) {
          return this.getAllCached(n);
        }),
        (n.__getAllConnectionObjectsFor = function (t, n) {
          var e = this.__updateLoading(n);
          return (
            e.length > 0 &&
              r("AdsConnectionObjectDataManager").loadAllFor(t, e),
            this.getAllCached(n)
          );
        }),
        (n.__getActionTypes = function () {
          return [
            o("AdsConnectionObjectBatchLoadErrorDataActionFlux").actionType,
            o("AdsConnectionObjectBatchLoadedDataActionFlux").actionType,
          ];
        }),
        (n.__onDispatch = function (t) {
          var e = t.action;
          switch (e.type) {
            case o("AdsConnectionObjectBatchLoadedDataActionFlux").actionType:
              this.__handleLoadedData(e.connectionObjects);
              break;
            case o("AdsConnectionObjectBatchLoadErrorDataActionFlux")
              .actionType:
              this.__handleData(e.errors, r("AdsLoadState_LEGACY").ERROR);
              break;
          }
        }),
        (n.__computeStorageKey = function (t, n) {
          return t + "_" + n;
        }),
        (n.__handleLoadedData = function (t) {
          var e = this,
            n = new Map(),
            o = new Map();
          (t.forEach(function (t, r) {
            e.__filterConnectionObject(t) ? n.set(r, t) : o.set(r, t);
          }),
            this.__handleData(n, r("AdsLoadState_LEGACY").LOADED),
            this.__handleData(o, r("AdsLoadState_LEGACY").ERROR));
        }),
        (n.__filterConnectionObject = function (t) {
          return r("abstractMethod")(
            "AdsBaseConnectionObjectStore",
            "__filterConnectionObject",
          );
        }),
        t
      );
    })(r("AdsBaseDataStore_LEGACY"));
    l.default = e;
  },
  98,
);
