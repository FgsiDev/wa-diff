__d(
  "AdsInsightsTableComputedPropertiesStore",
  [
    "AdsDataAtom",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsColumnUtil",
    "AdsInsightsTableRowStore",
    "AdsInsightsViewSpecUtil",
    "FluxStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$TableStore$p_1 = {}),
            (n.$TableStore$p_2 = 0),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getStores = function () {
            return [].concat(
              r("AdsInsightsColumnPresetStoreUtil").resolve.stores,
              [r("AdsInsightsTableRowStore")],
            );
          }),
          (a.getStatsFields = function (t) {
            return this.getRecord(t).statsFields;
          }),
          (a.getRecord = function (t) {
            var e = this.$TableStore$p_3(t);
            return (
              e.freshness < this.$TableStore$p_2 &&
                (this.constructor.computeRecord(e),
                (e.freshness = this.$TableStore$p_2)),
              e
            );
          }),
          (a.$TableStore$p_3 = function (t) {
            var e = o("AdsInsightsViewSpecUtil").toKey(t);
            return (
              e in this.$TableStore$p_1 ||
                (Object.keys(this.$TableStore$p_1).length === 10 &&
                  (this.$TableStore$p_1 = {}),
                (this.$TableStore$p_1[e] = {
                  view: t,
                  statsFields: [],
                  freshness: -1,
                })),
              this.$TableStore$p_1[e]
            );
          }),
          (n.computeRecord = function (t) {
            var e = t.view,
              n = r("AdsInsightsColumnPresetStoreUtil").resolve(e.columns),
              a = n.attributionWindows,
              i = n.ids;
            t.statsFields = o("AdsInsightsColumnUtil").getFields(
              i,
              a,
              e.objectType,
              e.navSection,
              !1,
              null,
            );
          }),
          (a.__getActionTypes = function () {
            return [];
          }),
          (a.__getDependencyStores = function () {
            return [].concat(
              r("AdsInsightsColumnPresetStoreUtil").resolve.stores,
              [r("AdsInsightsTableRowStore")],
            );
          }),
          (a.__onDispatch = function (t) {
            var e = t.$TableStore4;
            (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              this.getDependencyStores().some(function (e) {
                return e.hasChanged();
              }) && ((this.$TableStore$p_2 += 1), this.__emitChange()));
          }),
          n
        );
      })(r("FluxStore"));
    s.__moduleID = i.id;
    var u = new s();
    l.default = u;
  },
  98,
);
