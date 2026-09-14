__d(
  "PartnerPlatformEventTrackingRowConfig",
  ["SignalsStatusEnum", "SignalsTrackingRowConfig", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          n === void 0 && (n = null),
          (r = e.call(this, t, n) || this),
          (r.isDisableEditing = !1),
          (r.adgroupIDs = []),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setSelectableSources = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              var n = {
                cluster: null,
                id: t.id,
                name: t.name,
                seller_identifier: t.seller_identifier,
                status: r("SignalsStatusEnum").ACTIVE,
              };
              e.push(n);
            }),
            this.setSources(r("immutable").List(e))
          );
        }),
        (n.setAdgroupIDs = function (t) {
          return ((this.adgroupIDs = t), this);
        }),
        (n.updateSelectedSourcesFromTrackingSpecsValue = function (t, n) {
          return this.setAdgroupIDs(n).setSelectedSources(
            r("immutable").List(r("immutable").List(t)),
          );
        }),
        (n.setIsDisableEditing = function (t) {
          return ((this.isDisableEditing = t), this);
        }),
        (n.getIsDisableEditing = function () {
          return this.isDisableEditing;
        }),
        (n.getAdgroupIDs = function () {
          return this.adgroupIDs;
        }),
        (n.toJSObject = function () {
          return {
            accountID: this.accountID,
            adgroupIDs: this.adgroupIDs,
            businessID: this.businessID,
            isDisableEditing: this.isDisableEditing,
            isLoading: this.isLoading,
            isMixedValue: this.isMixedValue,
            selectedSources: this.selectedSources,
            sources: this.sources,
          };
        }),
        t
      );
    })(r("SignalsTrackingRowConfig"));
    l.default = e;
  },
  98,
);
