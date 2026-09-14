__d(
  "AdsCTVDevicePlatformChangeUtils",
  ["AdsAPIDevicePlatform"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e == null) return !1;
      var o = e.length === 1 && e[0] === r("AdsAPIDevicePlatform").CONNECTED_TV;
      return o
        ? !((n = t.device_platforms) != null ? n : []).includes(
            r("AdsAPIDevicePlatform").CONNECTED_TV,
          )
        : !1;
    }
    function s(e) {
      var t, n, r, o;
      return (
        ((t =
          (n = e.publisher_platforms) == null
            ? void 0
            : n.some(function (e) {
                return e !== "streaming_services";
              })) != null
          ? t
          : !1) ||
        ((r =
          (o = e.streaming_services_positions) == null
            ? void 0
            : o.some(function (e) {
                return e !== "ctv_instream_video";
              })) != null
          ? r
          : !1)
      );
    }
    ((l.isCTVDevicePlatformBeingAdded = e), (l.hasNonCTVPlacements = s));
  },
  98,
);
