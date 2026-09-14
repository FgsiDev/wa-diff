__d(
  "AdsPromotableAppStore",
  [
    "AdsAccountPromotableAppStore",
    "AdsBaseConnectionObjectStore",
    "AdsConnectionObjectUtils",
    "AdsLoadState_LEGACY",
    "AdsPromotableAppListDataManager",
    "AdsPromotableApplicationListBatchLoadedDataActionFlux",
    "AdsPromotableApplicationLoadErrorDataActionFlux",
    "AdsPromotableApplicationLoadedDataActionFlux",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.getForSelector = r("adsCreateStoreThunkSelector")(
              t,
              function (e, n) {
                return t.getFor(e, n);
              },
            )),
            (t.getAllForSelector = r("adsCreateStoreThunkSelector")(
              t,
              function (e, n) {
                return t.getAllFor(e, n);
              },
            )),
            (t.getAllCachedForSelector = r("adsCreateStoreThunkSelector")(
              t,
              function (e, n) {
                return t.getAllCachedFor(e, n);
              },
            )),
            (t.$AdsPromotableAppStoreClass$p_1 = new Map()),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFor = function (t, n) {
            return this.getAllFor(t, [n]).get(this.__computeStorageKey(t, n));
          }),
          (n.$AdsPromotableAppStoreClass$p_2 = function (t, n) {
            n.length > 0 &&
              (this.$AdsPromotableAppStoreClass$p_1.has(t)
                ? r("AdsPromotableAppListDataManager").loadIDsFor(
                    t,
                    n.map(function (e) {
                      return e.split("_")[1];
                    }),
                  )
                : (this.$AdsPromotableAppStoreClass$p_1.set(t, n),
                  r("AdsPromotableAppListDataManager").loadFor(t)));
          }),
          (n.getAllFor = function (n, r) {
            var t = this,
              o = r.map(function (e) {
                return t.__computeStorageKey(n, e);
              }),
              a = [];
            return (
              this.__updateLoading(o).forEach(function (e) {
                a.push(e);
              }),
              this.$AdsPromotableAppStoreClass$p_2(n, a),
              e.prototype.getAllCached.call(this, o)
            );
          }),
          (n.getAllCachedFor = function (t, n) {
            var e = this;
            return this.getAllCached(
              n.map(function (n) {
                return e.__computeStorageKey(t, n);
              }),
            );
          }),
          (n.__getActionTypes = function () {
            var t;
            return [].concat(
              (t = e.prototype.__getActionTypes.call(this)) != null ? t : [],
              [
                o("AdsPromotableApplicationListBatchLoadedDataActionFlux")
                  .actionType,
                o("AdsPromotableApplicationLoadErrorDataActionFlux").actionType,
                o("AdsPromotableApplicationLoadedDataActionFlux").actionType,
              ],
            );
          }),
          (n.__getDependencyStores = function () {
            var t;
            return [].concat(
              (t = e.prototype.__getDependencyStores.call(this)) != null
                ? t
                : [],
              [r("AdsAccountPromotableAppStore")],
            );
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action,
              a = new Map();
            switch (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              n.actionType)
            ) {
              case o("AdsPromotableApplicationListBatchLoadedDataActionFlux")
                .actionType: {
                n.responses.forEach(function (t, n) {
                  (t.data.forEach(function (t) {
                    var r = e.__computeStorageKey(n, t.id);
                    a.set(r, t);
                  }),
                    e.__handleData(a, r("AdsLoadState_LEGACY").LOADED),
                    e.__getAllForMissingKeys(n, a));
                });
                break;
              }
              case o("AdsPromotableApplicationLoadedDataActionFlux")
                .actionType: {
                var i = n.accountID,
                  l = n.promotableApplication;
                (a.set(this.__computeStorageKey(i, l.id), l),
                  this.__handleData(a, r("AdsLoadState_LEGACY").LOADED));
                break;
              }
              case o("AdsPromotableApplicationLoadErrorDataActionFlux")
                .actionType: {
                var s = n.accountID,
                  u = n.error,
                  c = n.id;
                (a.set(this.__computeStorageKey(s, c), u),
                  this.__handleData(a, r("AdsLoadState_LEGACY").ERROR));
                break;
              }
            }
          }),
          (n.__getAllForMissingKeys = function (t, n) {
            var e = this,
              r = this.$AdsPromotableAppStoreClass$p_1.get(t) || [],
              o = r.filter(function (e) {
                return !n.has(e);
              });
            (o.forEach(function (t) {
              return e.__invalidate(t);
            }),
              this.$AdsPromotableAppStoreClass$p_1.set(t, Array.from(n.keys())),
              this.getAllFor(
                t,
                o.map(function (e) {
                  return e.split("_")[1];
                }),
              ));
          }),
          (n.__filterConnectionObject = function (t) {
            return o("AdsConnectionObjectUtils").isApp(t);
          }),
          t
        );
      })(r("AdsBaseConnectionObjectStore")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
