__d(
  "AdsWebToAppUtils",
  ["AdsAppUtilsShared", "AdsPromotedObjectTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.web_destination_spec;
      return n != null;
    }
    function s(e) {
      var t, n;
      return (t =
        e == null ||
        (n = e.creative) == null ||
        (n = n.asset_feed_spec) == null ||
        (n = n.web_destination_spec) == null
          ? void 0
          : n.url) != null
        ? t
        : "";
    }
    function u(e, t) {
      return (
        o("AdsAppUtilsShared").isAppInstall(e) &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP &&
        r("gkx")("3477")
      );
    }
    ((l.hasWebDestinationUrlSet = e),
      (l.getWebLink = s),
      (l.isAdWebToAppEligible = u));
  },
  98,
);
