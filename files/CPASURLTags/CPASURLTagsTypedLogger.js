__d(
  "CPASURLTagsTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:CPASURLTagsLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:CPASURLTagsLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:CPASURLTagsLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setAdvertiserAccountID = function (t) {
            return ((this.$1.advertiser_account_id = t), this);
          }),
          (t.setAdvertiserBusinessID = function (t) {
            return ((this.$1.advertiser_business_id = t), this);
          }),
          (t.setBusinessID = function (t) {
            return ((this.$1.business_id = t), this);
          }),
          (t.setCatalogSegmentID = function (t) {
            return ((this.$1.catalog_segment_id = t), this);
          }),
          (t.setComponent = function (t) {
            return ((this.$1.component = t), this);
          }),
          (t.setDebugMessage = function (t) {
            return ((this.$1.debug_message = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setEventSeverity = function (t) {
            return ((this.$1.event_severity = t), this);
          }),
          (t.setEventType = function (t) {
            return ((this.$1.event_type = t), this);
          }),
          (t.setNewURLTags = function (t) {
            return ((this.$1.new_url_tags = t), this);
          }),
          (t.setOldURLTags = function (t) {
            return ((this.$1.old_url_tags = t), this);
          }),
          e
        );
      })(),
      l = {
        advertiser_account_id: !0,
        advertiser_business_id: !0,
        business_id: !0,
        catalog_segment_id: !0,
        component: !0,
        debug_message: !0,
        event: !0,
        event_severity: !0,
        event_type: !0,
        new_url_tags: !0,
        old_url_tags: !0,
      };
    i.default = e;
  },
  66,
);
