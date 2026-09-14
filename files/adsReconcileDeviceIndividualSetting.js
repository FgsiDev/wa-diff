__d(
  "adsReconcileDeviceIndividualSetting",
  [
    "AdsCampaignRecordAccessors",
    "adsTargetingIsAdvantagePlusDeviceDefaultOptIn",
    "adsTargetingIsEligibleForAdvantagePlusDevice",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e
        ? t
          ? "keep"
          : r("adsTargetingIsAdvantagePlusDeviceDefaultOptIn")()
            ? "seed_opt_in"
            : "keep"
        : t
          ? "delete"
          : "keep";
    }
    var s = function (n) {
        return function (t) {
          var o = r("adsTargetingIsEligibleForAdvantagePlusDevice")(
              n,
              r("AdsCampaignRecordAccessors").conversion_locations.get(t),
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.digital_store_object_id.get(t) != null,
            ),
            a = e(
              o,
              r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_automation.individual_setting.device.get(
                t,
              ) != null,
            );
          return a === "delete"
            ? r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_automation.individual_setting.device.delete(
                t,
              )
            : a === "seed_opt_in"
              ? r(
                  "AdsCampaignRecordAccessors",
                ).targeting.targeting_automation.individual_setting.device.set(
                  1,
                  t,
                )
              : t;
        };
      },
      u = s;
    l.default = u;
  },
  98,
);
