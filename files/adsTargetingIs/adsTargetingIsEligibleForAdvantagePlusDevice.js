__d(
  "adsTargetingIsEligibleForAdvantagePlusDevice",
  ["DeviceTargetingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
        return (
          r(
            "DeviceTargetingUtils",
          ).isEligibleForAdvantagePlusDeviceWithoutGKCheck(t, n, o) &&
          r(
            "DeviceTargetingUtils",
          ).isAplusDeviceTargetingGKEnabledWithoutLogging()
        );
      },
      s = e;
    l.default = s;
  },
  98,
);
