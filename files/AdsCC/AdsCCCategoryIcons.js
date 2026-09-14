__d(
  "AdsCCCategoryIcons",
  ["ix", "GeoNextAMUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = o("GeoNextAMUtils").isGeoNextEnabled(),
      c = {
        icon: s(u ? "1379191" : "1379083"),
        notifIcon: s(u ? "1379192" : "1379188"),
      },
      d = {
        icon: s(u ? "1207967" : "1207963"),
        notifIcon: s(u ? "1207968" : "1207964"),
      },
      m =
        ((e = {}),
        (e.ACTIVE_FEEDBACK = c),
        (e.ACTIVE_FEEDBACK_SUCCESS_MESSAGE = {
          icon: s("506114"),
          notifIcon: s("506115"),
        }),
        (e.ERROR = d),
        (e.HELP = { icon: s("596900"), notifIcon: s("596901") }),
        (e.LEGAL_AND_POLICY = { icon: s("503360"), notifIcon: s("503361") }),
        (e.NEW_PRODUCT = {
          icon: s("503370"),
          iconFilled: s("503365"),
          notifIcon: s("503371"),
        }),
        (e.NEW_PRODUCT_ACTIVE = { icon: s("503365"), notifIcon: s("503366") }),
        (e.RECOMMENDATION_BEST_PRACTICE = {
          icon: s("503332"),
          iconFilled: s("503329"),
          notifIcon: s("503333"),
        }),
        (e.RECOMMENDATION_PERSONALIZED = {
          icon: s("503353"),
          iconFilled: s("503350"),
          notifIcon: s("503354"),
        }),
        (e.RELEASE_NOTE = { icon: s("567577"), notifIcon: s("567578") }),
        (e.WARNING = { icon: s("480793"), notifIcon: s("480794") }),
        (e.MULTI_ADVERTISER_ADS = c),
        e),
      p = m;
    l.default = p;
  },
  98,
);
