__d(
  "filterMarketingMessageWABA",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r,
        o,
        a =
          (r =
            e == null
              ? void 0
              : e.filter(function (e) {
                  return e.isEnabledForMessageMarketing === !0;
                })) != null
            ? r
            : [];
      return (o =
        a == null
          ? void 0
          : a.filter(function (e) {
              return (
                t === !0 ||
                (e.isReusedWABAOnAdsManager === !1 && e.ownerBusinessID === n)
              );
            })) != null
        ? o
        : [];
    }
    i.default = e;
  },
  66,
);
