__d(
  "SignalsTrackingRowConfig",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        (t === void 0 && (t = null),
          (this.isLoading = !1),
          (this.isMixedValue = !1),
          (this.selectedSources = r("immutable").List()),
          (this.sources = r("immutable").List()),
          (this.accountID = e),
          (this.businessID = t));
      }
      var t = e.prototype;
      return (
        (t.setSelectedSources = function (t) {
          return ((this.selectedSources = t), this);
        }),
        (t.setSources = function (t) {
          return ((this.sources = t), this);
        }),
        (t.setIsMixedValue = function (t) {
          return ((this.isMixedValue = t), this);
        }),
        (t.setIsLoading = function (t) {
          return ((this.isLoading = t), this);
        }),
        (t.getSelectedSources = function () {
          return this.selectedSources;
        }),
        (t.getSources = function () {
          return this.sources;
        }),
        (t.getIsLoading = function () {
          return this.isLoading;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
