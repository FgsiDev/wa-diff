__d(
  "AdsPELastUpdatedStore",
  [
    "AdsDataAtom",
    "AdsInsightsTableViewStore",
    "AdsPERefreshTableViewActionFlux",
    "AdsTableInteractionEndActionFlux",
    "AdsTableUpdateInteractionEndActionFlux",
    "FluxReduceStore",
    "LocalDateTime",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return { last_updated: null };
          }),
          (n.getState = function () {
            return e.prototype.getState.call(this);
          }),
          (n.getLastUpdated = function () {
            return this.getState().last_updated;
          }),
          (n.$AdsPELastUpdatedStore$p_1 = function (t) {
            return t.last_updated == null ? t : { last_updated: null };
          }),
          (n.$AdsPELastUpdatedStore$p_2 = function (t) {
            if (t.last_updated != null) return t;
            var e = o("Timezone").getEnvironmentTimezoneID();
            return { last_updated: r("LocalDateTime").now(e) };
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsPERefreshTableViewActionFlux").actionType,
              o("AdsTableInteractionEndActionFlux").actionType,
              o("AdsTableUpdateInteractionEndActionFlux").actionType,
            ];
          }),
          (n.__getDependencyStores = function () {
            return [r("AdsInsightsTableViewStore")];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
            var a = r("AdsInsightsTableViewStore").getOrNull();
            return a
              ? r("AdsInsightsTableViewStore").hasChanged() ||
                e.type === o("AdsPERefreshTableViewActionFlux").actionType
                ? this.$AdsPELastUpdatedStore$p_1(t)
                : this.getLastUpdated() == null &&
                    (e.type ===
                      o("AdsTableInteractionEndActionFlux").actionType ||
                      e.type ===
                        o("AdsTableUpdateInteractionEndActionFlux").actionType)
                  ? this.$AdsPELastUpdatedStore$p_2(t)
                  : t
              : t;
          }),
          t
        );
      })(r("FluxReduceStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
