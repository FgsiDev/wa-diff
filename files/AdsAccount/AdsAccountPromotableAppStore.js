__d(
  "AdsAccountPromotableAppStore",
  [
    "invariant",
    "AdsAppFluxUtils",
    "AdsBaseDataStore_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPromotableAppDataManager",
    "AdsPromotableApplicationListBatchLoadErrorDataActionFlux",
    "AdsPromotableApplicationListBatchLoadedDataActionFlux",
    "AdsPromotableApplicationListPartialLoadDataActionFlux",
    "AdsPromotableApplicationLoadErrorDataActionFlux",
    "AdsPromotableApplicationLoadedDataActionFlux",
    "FBLogger",
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
            (t.getCachedSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e, n) {
                return t.getCachedFor(e, n);
              },
            )),
            (t.getAllCachedSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e, n) {
                return t.getAllCachedFor(e, n);
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
            return r("AdsPromotableAppDataManager");
          }),
          (n.getCachedFor = function (t, n) {
            return this.getAllCachedFor(t, [n]).get(n);
          }),
          (n.getAllCachedFor = function (n, r) {
            var t = e.prototype.getAllCached.call(
                this,
                r.map(function (e) {
                  return o("AdsAppFluxUtils").getFluxKey(n, e);
                }),
              ),
              a = new Map();
            return (
              t.forEach(function (e, t) {
                a.set(e.id, e);
              }),
              a
            );
          }),
          (n.get = function (t) {
            s(0, 11826);
          }),
          (n.getAll = function (t) {
            s(0, 11826);
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsPromotableApplicationListBatchLoadErrorDataActionFlux")
                .actionType,
              o("AdsPromotableApplicationListBatchLoadedDataActionFlux")
                .actionType,
              o("AdsPromotableApplicationListPartialLoadDataActionFlux")
                .actionType,
              o("AdsPromotableApplicationLoadErrorDataActionFlux").actionType,
              o("AdsPromotableApplicationLoadedDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.actionType) {
              case o("AdsPromotableApplicationListPartialLoadDataActionFlux")
                .actionType:
                var n = new Map();
                (e.promotableApplications.forEach(function (t) {
                  n.set(o("AdsAppFluxUtils").getFluxKey(e.accountID, t.id), t);
                }),
                  this.__handleData(n, r("AdsLoadState_LEGACY").LOADED));
                break;
              case o("AdsPromotableApplicationListBatchLoadedDataActionFlux")
                .actionType:
                var a = new Map();
                (e.responses.forEach(function (e, t) {
                  e.data.forEach(function (e) {
                    a.set(o("AdsAppFluxUtils").getFluxKey(t, e.id), e);
                  });
                }),
                  this.__handleData(a, r("AdsLoadState_LEGACY").LOADED));
                break;
              case o("AdsPromotableApplicationListBatchLoadErrorDataActionFlux")
                .actionType:
                r("FBLogger")("ads").mustfix(
                  "This isn't handled gracefully yet",
                );
                break;
              case o("AdsPromotableApplicationLoadedDataActionFlux")
                .actionType: {
                var i = e.accountID,
                  l = e.promotableApplication,
                  s = new Map([[o("AdsAppFluxUtils").getFluxKey(i, l.id), l]]);
                this.__handleData(s, r("AdsLoadState_LEGACY").LOADED);
                break;
              }
              case o("AdsPromotableApplicationLoadErrorDataActionFlux")
                .actionType: {
                var u = e.accountID,
                  c = e.error,
                  d = e.id,
                  m = new Map([[o("AdsAppFluxUtils").getFluxKey(u, d), c]]);
                this.__handleData(m, r("AdsLoadState_LEGACY").ERROR);
                break;
              }
            }
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      u = new e(),
      c = u;
    l.default = c;
  },
  98,
);
