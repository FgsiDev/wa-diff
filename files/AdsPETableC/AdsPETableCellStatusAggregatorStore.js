__d(
  "AdsPETableCellStatusAggregatorStore",
  [
    "AdsDataAtom",
    "AdsManagerTableQPLFlowLoggingUtils",
    "FluxStore",
    "adsPEFilterAndSortGetErrorSelector",
    "adsPEFilterAndSortIsLoadingSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPETableCellStatusAggregatorStore$p_1 = !0),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [];
          }),
          (a.__getDependencyStores = function () {
            return [].concat(
              r("adsPEFilterAndSortIsLoadingSelector").getStores(),
              r("adsPEFilterAndSortGetErrorSelector").getStores(),
            );
          }),
          (a.__onDispatch = function (n) {
            this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
            var t = r("adsPEFilterAndSortIsLoadingSelector")();
            if (this.$AdsPETableCellStatusAggregatorStore$p_1 !== t) {
              this.$AdsPETableCellStatusAggregatorStore$p_1 = t;
              var a = r("adsPEFilterAndSortGetErrorSelector")();
              !this.$AdsPETableCellStatusAggregatorStore$p_1 &&
                a != null &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    o(
                      "AdsManagerTableQPLFlowLoggingUtils",
                    ).emitNonCellStatusError(a, "id_list");
                  },
                );
            }
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
