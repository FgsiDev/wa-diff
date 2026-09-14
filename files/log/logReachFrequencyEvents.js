__d(
  "logReachFrequencyEvents",
  ["AdsInterfacesLogger", "AdsReachFrequencySession"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t && t.rf_campaign_id;
      r("AdsInterfacesLogger").log(
        {
          eventCategory: "reach_frequency_sheet",
          eventName: e,
          data: babelHelpers.extends({}, t, {
            rf_session_id: r("AdsReachFrequencySession").get(),
            action_session_id: n,
            sub_session_id: n,
          }),
        },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    l.default = e;
  },
  98,
);
