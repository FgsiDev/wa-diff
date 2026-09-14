__d(
  "AdsConversionPixelStore",
  [
    "AdsAccountStore",
    "AdsBaseDataStore_LEGACY",
    "AdsConversionPixelBatchLoadErrorDataActionFlux",
    "AdsConversionPixelBatchLoadedDataActionFlux",
    "AdsConversionPixelDataDispatcher",
    "AdsConversionPixelDataManager",
    "AdsConversionPixelUpdatePixelsDataActionFlux",
    "AdsLoadState_LEGACY",
    "AdsPixelConversionTypes",
    "ImmutableObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.$AdsConversionPixelStoreClass$p_1 = {}),
            (t.$AdsConversionPixelStoreClass$p_2 = r(
              "AdsLoadState_LEGACY",
            ).NOT_LOADED),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsConversionPixelDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsConversionPixelBatchLoadedDataActionFlux").actionType,
              o("AdsConversionPixelBatchLoadErrorDataActionFlux").actionType,
              o("AdsConversionPixelUpdatePixelsDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsConversionPixelBatchLoadedDataActionFlux").actionType:
                this.__handleData(
                  n.conversionPixels,
                  r("AdsLoadState_LEGACY").LOADED,
                );
                break;
              case o("AdsConversionPixelBatchLoadErrorDataActionFlux")
                .actionType:
                ((this.$AdsConversionPixelStoreClass$p_2 = r(
                  "AdsLoadState_LEGACY",
                ).ERROR),
                  this.__handleData(n.errors, r("AdsLoadState_LEGACY").ERROR));
                break;
              case o("AdsConversionPixelUpdatePixelsDataActionFlux").actionType:
                (n.pixels.forEach(function (t) {
                  ((t.type = r("AdsPixelConversionTypes").LEGACY),
                    (t.value = t.tag),
                    (t.pixelID = t.id),
                    (e.$AdsConversionPixelStoreClass$p_1[t.id] = new (r(
                      "ImmutableObject",
                    ))(t)));
                }),
                  (this.$AdsConversionPixelStoreClass$p_2 = r(
                    "AdsLoadState_LEGACY",
                  ).LOADED),
                  this.__emitChange());
                break;
            }
          }),
          (n.getKeyedPixels = function () {
            var e = r("AdsAccountStore").getSelectedAccountID();
            return (
              e != null &&
                this.$AdsConversionPixelStoreClass$p_2 ===
                  r("AdsLoadState_LEGACY").NOT_LOADED &&
                ((this.$AdsConversionPixelStoreClass$p_2 = r(
                  "AdsLoadState_LEGACY",
                ).LOADING),
                r("AdsConversionPixelDataDispatcher").loadPixels(e)),
              this.$AdsConversionPixelStoreClass$p_1
            );
          }),
          (n.getPixelswithDeprecation = function (t) {
            var e = {};
            return (
              Object.keys(t).forEach(function (n) {
                var o = t[n];
                o.type !== r("AdsPixelConversionTypes").LEGACY && (e[n] = o);
              }),
              new (r("ImmutableObject"))(e)
            );
          }),
          (n.getPixels = function () {
            var e = this.getKeyedPixels();
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          }),
          (n.getPixel = function (t) {
            if (!t) return null;
            var e = this.getKeyedPixels();
            return e[t];
          }),
          (n.getLoadState = function () {
            return this.$AdsConversionPixelStoreClass$p_2;
          }),
          (n.isListLoaded = function () {
            return (
              this.$AdsConversionPixelStoreClass$p_2 ===
              r("AdsLoadState_LEGACY").LOADED
            );
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
