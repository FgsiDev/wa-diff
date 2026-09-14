__d(
  "filterAdsManagerWABAV2",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.filter(function (e) {
        return e.isReusedWABAOnAdsManager !== !0
          ? !0
          : e.whatsAppNumberConnectionStatus === "linked".toUpperCase() &&
              e.whatsAppNumberPlatformType === "CLOUD_API";
      });
    }
    i.default = e;
  },
  66,
);
