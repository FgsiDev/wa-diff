__d(
  "adsPlacementIsAllCheckboxesSelectedUnificationUtil",
  [
    "AdsAPIDevicePlatform",
    "AdsPlacementUtils",
    "AdsPlacementsPositionsToDisableUtil",
    "AdsPlacementsThreadsFeedPositionPlugin",
    "AdsPlacementsWhatsAppStatusPositionPlugin",
    "AdsUniformValue",
    "BUIThreeStateCheckboxEnum",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i = o(
          "AdsPlacementsPositionsToDisableUtil",
        ).AdsPlacementsPositionsToDisableUtil(e, void 0, void 0, n),
        l = (a = r("qex")._("3361")) != null ? a : !1;
      return !e.some(function (e) {
        return e.positions.some(function (e, n) {
          var o =
              e.selectionStatus === r("BUIThreeStateCheckboxEnum").UNCHECKED &&
              !i.has(n),
            a = n === r("AdsPlacementsThreadsFeedPositionPlugin").key,
            s = n === "whatsapp/marketing_messages",
            u = n === r("AdsPlacementsWhatsAppStatusPositionPlugin").key;
          if ((!l && a) || s || u) return !1;
          var c =
            (e == null ? void 0 : e.isInactiveByDefault) &&
            (e == null || e.isInactiveByDefault == null
              ? void 0
              : e.isInactiveByDefault(t));
          return o && !c;
        });
      });
    }
    function s(e) {
      var t = r("AdsPlacementUtils").getDevicePlatformsSpec([e]),
        n =
          (t == null ? void 0 : t.value) instanceof r("AdsUniformValue")
            ? t == null
              ? void 0
              : t.value.getValue()
            : null,
        o =
          n == null ||
          (n &&
            n.includes(r("AdsAPIDevicePlatform").DESKTOP) &&
            n.includes(r("AdsAPIDevicePlatform").MOBILE));
      return o;
    }
    ((l.adsPlacementIsAllCheckboxesSelectedUtil = e),
      (l.adsPlacementAreAllDevicesSelectedOrNullUtil = s));
  },
  98,
);
