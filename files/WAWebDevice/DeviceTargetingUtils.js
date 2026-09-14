__d(
  "DeviceTargetingUtils",
  ["AdsPromotedObjectTypes", "DeviceTargetingConfig", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return !(
        e == null ||
        !r("DeviceTargetingConfig").eligible_objectives.includes(e) ||
        t === r("AdsPromotedObjectTypes").MOBILE_APP ||
        (t === r("AdsPromotedObjectTypes").WEB_AND_APP && n)
      );
    }
    function s() {
      return r("gkx")("12622");
    }
    function u() {
      return (c(), r("gkx")("7359"));
    }
    function c() {
      return r("gkx")("22044");
    }
    function d() {
      return r("gkx")("10699");
    }
    function m() {
      return r("gkx")("19285");
    }
    function p() {
      return r("qex")._("113") === !0;
    }
    function _() {
      return r("qex")._("210") === !0;
    }
    var f = {
      isAdoptDeviceAutomationPFRIBT2EnabledWithLogging: p,
      isAdoptDeviceAutomationPFRIBT2EnabledWithoutLogging: _,
      isAplusDeviceDraftAutoOptInGKEnabledWithLogging: m,
      isAplusDeviceGuidanceGKEnabledWithoutLogging: d,
      isAplusDeviceTargetingGKEnabledWithLogging: u,
      isAplusDeviceTargetingGKEnabledWithoutLogging: s,
      isAplusDeviceTargetingNewQEGKEnabledWithLogging: c,
      isEligibleForAdvantagePlusDeviceWithoutGKCheck: e,
    };
    l.default = f;
  },
  98,
);
