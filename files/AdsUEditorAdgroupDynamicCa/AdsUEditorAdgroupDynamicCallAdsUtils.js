__d(
  "AdsUEditorAdgroupDynamicCallAdsUtils",
  ["AdsAdgroupRecordAccessors", "AdsClickToCallDynamicAdsUtils", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, i) {
      if (o("AdsClickToCallDynamicAdsUtils").isDynamicCallAdEligible(t, n)) {
        var e,
          l =
            (e = a.creative) == null || (e = e.asset_feed_spec) == null
              ? void 0
              : e.call_ads_configuration;
        return l != null
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_ads_configuration.set(l, i)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.set(
                "PHONE",
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_ads_configuration.callback_type.set(
                "NOT_ENABLED",
              ),
            )(i);
      }
      return i;
    };
    l.maybePersistCallAdsConfigurationForCallAds = e;
  },
  98,
);
