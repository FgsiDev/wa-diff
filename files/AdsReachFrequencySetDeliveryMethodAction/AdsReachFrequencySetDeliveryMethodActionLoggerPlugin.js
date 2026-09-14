__d(
  "AdsReachFrequencySetDeliveryMethodActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "ads_sequencing_change_delivery",
            { rf_action_value: t.deliverySelection },
            "reach_frequency",
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
