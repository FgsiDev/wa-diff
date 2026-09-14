__d(
  "AdsUEditorAdgroupWebsiteAndCallDefaultingMutator",
  ["AdsAdgroupRecordAccessors", "AdsCallAddonUtils", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "AdsUEditorAdgroupCallAdsConfigurationUtils",
      ).__setRef("AdsUEditorAdgroupWebsiteAndCallDefaultingMutator"),
      s = r("requireDeferred")(
        "AdsUEditorAdgroupCallBusinessHoursStoreUtils",
      ).__setRef("AdsUEditorAdgroupWebsiteAndCallDefaultingMutator");
    o("AdsCallAddonUtils").isWebCallBusinessHoursEnabled({ logExposure: !1 }) &&
      (e.load(), s.load());
    function u(t, n, a) {
      if (
        (a === void 0 && (a = { skipIfAlreadySet: !1 }),
        a.skipIfAlreadySet &&
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.business_hours.get(
            t,
          ) != null)
      )
        return t;
      var i = e.getModuleIfRequired(),
        l = s.getModuleIfRequired();
      return !o("AdsCallAddonUtils").isWebCallBusinessHoursEnabled({
        logExposure: !1,
      }) ||
        i == null ||
        l == null
        ? t
        : i.setBusinessHours(t, l.getDefaultBusinessHoursForPage(n));
    }
    l.applyWebsiteAndCallDefaultBusinessHours = u;
  },
  98,
);
