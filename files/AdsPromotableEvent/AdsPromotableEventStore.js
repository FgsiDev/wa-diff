__d(
  "AdsPromotableEventStore",
  [
    "AdsAccountStore",
    "AdsBaseConnectionObjectStore",
    "AdsConnectionObjectUtils",
    "AdsLoadState_LEGACY",
    "AdsPromotableEventBatchLoadErrorDataActionFlux",
    "AdsPromotableEventBatchLoadedDataActionFlux",
    "AdsPromotableEventDataManager",
    "AdsPromotableEventListBatchLoadedDataActionFlux",
    "AdsPromotableEventsSearchCompletedDataActionFlux",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "https://www.facebook.com/events/",
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o)) || this),
            (e.getForSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              e.getFor.bind(babelHelpers.assertThisInitialized(e)),
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getFor = function (t, n) {
            return (
              this.getAllFor(t, [n]),
              this.getCached(this.__computeStorageKey(t, n))
            );
          }),
          (a.getAllFor = function (n, o) {
            var e = this,
              a = [];
            o.forEach(function (t) {
              a.push(e.__computeStorageKey(n, t));
            });
            var i = [];
            return (
              this.__updateLoading(a).forEach(function (e) {
                i.push(e.split("_")[1]);
              }),
              i.length > 0 &&
                r("AdsPromotableEventDataManager").loadAllFor(n, i),
              t.prototype.getAllCached.call(this, a)
            );
          }),
          (a.getAllCachedFor = function (t, n) {
            var e = this;
            return this.getAllCached(
              n.map(function (n) {
                return e.__computeStorageKey(t, n);
              }),
            );
          }),
          (a.__getActionTypes = function () {
            var e;
            return [].concat(
              (e = t.prototype.__getActionTypes.call(this)) != null ? e : [],
              [
                o("AdsPromotableEventBatchLoadErrorDataActionFlux").actionType,
                o("AdsPromotableEventBatchLoadedDataActionFlux").actionType,
                o("AdsPromotableEventListBatchLoadedDataActionFlux").actionType,
                o("AdsPromotableEventsSearchCompletedDataActionFlux")
                  .actionType,
              ],
            );
          }),
          (a.__getDependencyStores = function () {
            var e;
            return [].concat(
              (e = t.prototype.__getDependencyStores.call(this)) != null
                ? e
                : [],
              [r("AdsAccountStore")],
            );
          }),
          (a.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.type) {
              case o("AdsPromotableEventBatchLoadedDataActionFlux").actionType:
              case o("AdsPromotableEventListBatchLoadedDataActionFlux")
                .actionType:
                this.$AdsPromotableEventStoreClass$p_1(
                  n.accountID,
                  n.promotableEvents,
                );
                break;
              case o("AdsPromotableEventsSearchCompletedDataActionFlux")
                .actionType:
                (this.getDispatcher().waitFor(
                  this.getDependencyDispatchTokens(),
                ),
                  this.$AdsPromotableEventStoreClass$p_1(
                    r("AdsAccountStore").getSelectedAccountIDX(),
                    n.events,
                  ));
                break;
              case o("AdsPromotableEventBatchLoadErrorDataActionFlux")
                .actionType:
                var a = new Map();
                (n.errors.forEach(function (t, r) {
                  var o = e.__computeStorageKey(n.accountID, r);
                  a.set(o, t);
                }),
                  this.__handleData(a, r("AdsLoadState_LEGACY").ERROR));
                break;
            }
          }),
          (a.$AdsPromotableEventStoreClass$p_2 = function (n) {
            n.url = e + n.id;
          }),
          (a.__filterConnectionObject = function (t) {
            return o("AdsConnectionObjectUtils").isEvent(t);
          }),
          (a.$AdsPromotableEventStoreClass$p_1 = function (t, n) {
            var e = this,
              o = new Map();
            (n.forEach(function (n) {
              var r = e.__computeStorageKey(t, n.id);
              (e.$AdsPromotableEventStoreClass$p_2(n), o.set(r, n));
            }),
              this.__handleData(o, r("AdsLoadState_LEGACY").LOADED));
          }),
          n
        );
      })(r("AdsBaseConnectionObjectStore")),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
