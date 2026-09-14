__d(
  "AdsInsightsTableViewStoreImpl",
  [
    "AdsDataAtom",
    "AdsPEManageCampaignsConstants",
    "AdsPETableViewSelectors",
    "FluxStore",
    "adsPENavStateSelector",
    "areEqual",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            r("gkx")("21201") ||
              ((n.$AdsInsightsTableViewStoreImpl$p_1 = r(
                "AdsPETableViewSelectors",
              ).tableViewSpecSelector()),
              (n.$AdsInsightsTableViewStoreImpl$p_2 = r(
                "AdsPETableViewSelectors",
              ).getVersion())),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getDependencyStores = function () {
            return r(
              "AdsPETableViewSelectors",
            ).tableViewSpecSelector.getStores();
          }),
          (a.get = function () {
            return r("nullthrows")(this.getOrNull());
          }),
          (a.getOrNull = function () {
            return r("AdsPETableViewSelectors").tableViewSpecSelector();
          }),
          (a.isFirstNavigationState_LEGACY = function () {
            return null;
          }),
          (a.viewspecHasChanged = function () {
            var e = r("adsPENavStateSelector")(),
              t = e.tool;
            return o(
              "AdsPEManageCampaignsConstants",
            ).MANAGE_CAMPAIGNS_TOOLS.includes(t) || t === "CREATIVE_REPORTING"
              ? this.$AdsInsightsTableViewStoreImpl$p_2 !==
                  r("AdsPETableViewSelectors").getVersion()
              : !1;
          }),
          (a.__onDispatch = function (t) {
            var e = t.$AdsInsightsTableViewStoreImpl3;
            if (this.viewspecHasChanged()) {
              var n = r("AdsPETableViewSelectors").tableViewSpecSelector();
              (s || (s = r("areEqual")))(
                this.$AdsInsightsTableViewStoreImpl$p_1,
                n,
              ) ||
                ((this.$AdsInsightsTableViewStoreImpl$p_1 = n),
                this.__emitChange());
            }
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
