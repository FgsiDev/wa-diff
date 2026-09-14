__d(
  "AdsPESettingsActions",
  [
    "AdsPEFilterConfigStoreJSResource",
    "AdsPERouterHelper",
    "AdsPESettingsFilterLoadedAction",
    "createFilterSetFromAPIObject",
    "promiseDone",
    "remapIDsforIDFilters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("AdsPERouterHelper")
        .getRouteBuilder()
        .filters(r("remapIDsforIDFilters")(e))
        .navSource("user_settings_loaded")
        .action(t)
        .navigate();
    }
    function s(t, n, o) {
      var a = function () {
          r("AdsPESettingsFilterLoadedAction").dispatch(
            { settingsID: t, accountID: n, filters: o },
            { line: "42", module: "AdsPESettingsActions.js", moduleID: i.id },
          );
        },
        l = null,
        s = r("AdsPERouterHelper").isLoadingSettings();
      r("AdsPERouterHelper").setLoadingSettings(!1);
      var u = null;
      o &&
        s &&
        r("promiseDone")(
          r("AdsPEFilterConfigStoreJSResource").load(),
          function (t) {
            t.getFilterFieldConfig != null &&
              ((u = t.getFilterFieldConfig()),
              (l = r("createFilterSetFromAPIObject")(o, u)),
              l ? e(l, a) : a());
          },
        );
    }
    l.filtersLoaded = s;
  },
  98,
);
