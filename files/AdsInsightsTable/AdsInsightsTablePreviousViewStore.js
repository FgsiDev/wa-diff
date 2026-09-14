__d(
  "AdsInsightsTablePreviousViewStore",
  [
    "AdsDataAtom",
    "AdsInsightsTableViewStore",
    "AdsPEReportProvider",
    "FluxStore",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPEReportProvider").toFluxStore(),
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsInsightsTablePreviousViewStore$p_4 = void 0),
            (n.$AdsInsightsTablePreviousViewStore$p_2 = void 0),
            (n.$AdsInsightsTablePreviousViewStore$p_3 = void 0),
            (n.$AdsInsightsTablePreviousViewStore$p_1 = r(
              "AdsInsightsTableViewStore",
            ).getOrNull()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function () {
            return r("nullthrows")(this.getOrNull());
          }),
          (o.getOrNull = function () {
            return this.$AdsInsightsTablePreviousViewStore$p_2;
          }),
          (o.getReportSpecID = function () {
            return this.$AdsInsightsTablePreviousViewStore$p_4;
          }),
          (o.__getActionTypes = function () {
            return [];
          }),
          (o.__getDependencyStores = function () {
            return [r("AdsInsightsTableViewStore")];
          }),
          (o.__onDispatch = function (t) {
            var e = t.$AdsInsightsTablePreviousViewStore5;
            (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              r("AdsInsightsTableViewStore").hasChanged() &&
                ((this.$AdsInsightsTablePreviousViewStore$p_2 =
                  this.$AdsInsightsTablePreviousViewStore$p_1),
                (this.$AdsInsightsTablePreviousViewStore$p_1 = r(
                  "AdsInsightsTableViewStore",
                ).getOrNull()),
                (this.$AdsInsightsTablePreviousViewStore$p_4 =
                  this.$AdsInsightsTablePreviousViewStore$p_3),
                (this.$AdsInsightsTablePreviousViewStore$p_3 =
                  s.getState().selectedID),
                this.__emitChange()));
          }),
          n
        );
      })(r("FluxStore"));
    u.__moduleID = i.id;
    var c = new u();
    l.default = c;
  },
  98,
);
