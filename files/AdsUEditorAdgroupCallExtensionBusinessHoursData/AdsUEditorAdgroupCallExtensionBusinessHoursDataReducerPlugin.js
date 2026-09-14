__d(
  "AdsUEditorAdgroupCallExtensionBusinessHoursDataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCallAdsConfigurationUtils",
    "AdsUEditorAdgroupCallExtensionBusinessHoursDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.businessHours == null
                ? o(
                    "AdsUEditorAdgroupCallAdsConfigurationUtils",
                  ).clearBusinessHours(e)
                : o(
                    "AdsUEditorAdgroupCallAdsConfigurationUtils",
                  ).setBusinessHours(e, t.businessHours);
            });
          },
          r("AdsUEditorAdgroupCallExtensionBusinessHoursDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
