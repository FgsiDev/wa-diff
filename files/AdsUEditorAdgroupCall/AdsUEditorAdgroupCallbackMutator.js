__d(
  "AdsUEditorAdgroupCallbackMutator",
  ["AdsAdgroupRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      return t === "callback_form"
        ? ((n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.callback_type.set(
            "FORM",
            e,
          )),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.set(
            "PHONE",
            n,
          ))
        : t === "callback_msg"
          ? ((n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.callback_type.set(
              "MESSENGER",
              e,
            )),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.set(
              "PHONE",
              n,
            ))
          : t === "callback_not_enabled"
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_ads_configuration.callback_type.set(
                "NOT_ENABLED",
                e,
              )
            : e;
    }
    function s(e) {
      return e;
    }
    function u(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.callback_type.delete(e);
    }
    function c(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.delete(e);
    }
    ((l.setCallbackType = e),
      (l.defaultCallbackTypeToForm = s),
      (l.cleanCallbackType = u),
      (l.cleanCallAdsConfiguration = c));
  },
  98,
);
