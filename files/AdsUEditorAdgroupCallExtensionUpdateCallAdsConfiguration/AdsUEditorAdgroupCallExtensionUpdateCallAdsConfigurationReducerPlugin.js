__d(
  "AdsUEditorAdgroupCallExtensionUpdateCallAdsConfigurationReducerPlugin",
  [
    "AdsCallAddonUtils",
    "AdsMutators",
    "AdsUEditorAdgroupCallExtensionUpdateCallAdsConfigurationActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = e;
                return (
                  (i = o("AdsCallAddonUtils").clearPhoneDataID(
                    i,
                    r("nullthrows")(a.get(n)),
                  )),
                  o("AdsCallAddonUtils").setPhoneNumberAndCallDestinationType(
                    i,
                    t.phoneNumber,
                  )
                );
              },
            );
          },
          r(
            "AdsUEditorAdgroupCallExtensionUpdateCallAdsConfigurationActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
