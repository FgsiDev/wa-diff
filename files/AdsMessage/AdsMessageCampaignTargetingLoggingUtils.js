__d(
  "AdsMessageCampaignTargetingLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      r("AdsInterfacesLogger").log({
        data: {
          ad_account_id: n,
          campaign_id: a[0],
          business_id: o,
          targeting_ui_event_data: JSON.stringify(t),
        },
        eventName: e,
        eventCategory: "user_action",
      });
    }
    function s(e) {
      return e
        .map(function (e) {
          var t;
          return (t = e.id) != null ? t : "";
        })
        .filter(function (e) {
          return e.length > 0;
        });
    }
    function u(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.targeting) == null
              ? void 0
              : n.custom_audiences) != null
            ? t
            : [];
      return s(r);
    }
    function c(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.targeting) == null
              ? void 0
              : n.excluded_custom_audiences) != null
            ? t
            : [];
      return s(r);
    }
    ((l.logEditCustomAudience = e),
      (l.getIncludedCustomAudienceIDs = u),
      (l.getExcludedCustomAudienceIDs = c));
  },
  98,
);
