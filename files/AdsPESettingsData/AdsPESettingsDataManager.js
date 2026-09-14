__d(
  "AdsPESettingsDataManager",
  [
    "AdsGraphAPI",
    "AdsMgmtPreloadingUtils",
    "AdsPESettingsActions",
    "AdsPESettingsDataFields.experimental",
    "AdsPESettingsDataManagerPreloader",
    "FBLogger",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadFilters = function (t) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("user_settings", t)
                .preloadedBy(
                  r("AdsPESettingsDataManagerPreloader").preloader,
                  o("AdsMgmtPreloadingUtils").defaultConfig,
                )
                .get({
                  fields: r("AdsPESettingsDataFields.experimental")
                    .filterFields,
                }),
              function (e) {
                var n = e.ad_account;
                o("AdsPESettingsActions").filtersLoaded(
                  t,
                  n.account_id,
                  e.last_used_pe_filters,
                );
              },
              function (e) {},
            );
          }),
          (t.updateLastUsedFilterSet = function (t, n) {
            var e = {};
            ((e.last_used_pe_filters = n),
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(t)
                .edge("user_settings")
                .post(e)
                .catch(function (e) {
                  r("FBLogger")("ads_manager_ui_platform")
                    .catching(r("getErrorSafe")(e))
                    .mustfix("Failed to update last used filter set");
                }));
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
