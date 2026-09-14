__d(
  "AdsAutoFixTargetingDataManager",
  [
    "AdsAutoFixTargetingDataLoader",
    "AdsBaseDataManager",
    "AdsCampaignAutoFixBatchLoadErrorDataAction",
    "AdsCampaignAutoFixBatchLoadedDataAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (n.updateStatus = function (t, n, r) {
            this.$AdsAutoFixTargetingDataManager$p_1(
              o("AdsAutoFixTargetingDataLoader").updateBannerStatus(t, n, r),
              t,
            );
          }),
          (n.load = function (t) {
            this.$AdsAutoFixTargetingDataManager$p_1(
              o("AdsAutoFixTargetingDataLoader").fetchAutoFixStatus(t),
              t,
            );
          }),
          (n.$AdsAutoFixTargetingDataManager$p_1 = function (t, n) {
            var e = this;
            r("promiseDone")(
              t,
              function (t) {
                return e.__handleSuccess(["load"], n, null, t.payload);
              },
              this.__handleError.bind(this, ["load"], n, null),
            );
          }),
          (n.__onBatchLoaded = function (t) {
            r("AdsCampaignAutoFixBatchLoadedDataAction").dispatch(
              { responses: t },
              {
                line: "66",
                module: "AdsAutoFixTargetingDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("AdsCampaignAutoFixBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "77",
                module: "AdsAutoFixTargetingDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
