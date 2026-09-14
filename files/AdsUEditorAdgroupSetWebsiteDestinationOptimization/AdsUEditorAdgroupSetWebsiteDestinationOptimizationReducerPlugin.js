__d(
  "AdsUEditorAdgroupSetWebsiteDestinationOptimizationReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetWebsiteDestinationOptimizationDataActionFlux",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorDestinationOptimizationUtils",
    "DestinationOptimizationUtils.react",
    "adsUEditorAccountIDSelector",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            accountID: r("adsUEditorAccountIDSelector"),
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
            userSettings: r("userSettingsSelector"),
          },
          function (e, t, n) {
            var r = n.accountID,
              a = n.userSettings,
              i = n.userSettingsID;
            if (
              (t == null ? void 0 : t.isFromCheckBox) === !0 &&
              i != null &&
              r != null &&
              o("DestinationOptimizationUtils.react").passDOStickySettingGK(!1)
            ) {
              var l;
              o(
                "AdsUEditorDestinationOptimizationUtils",
              ).updatedStickySettingForDOToggle(
                t.turnOn,
                t.currentDOStickyOptOutTimestamp,
                r,
                i,
                (l = t.adgroupIDs[0]) != null ? l : null,
              );
            }
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              return o(
                "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
              ).setWebsiteDestinationOptimizationStatus(
                e,
                t.turnOn,
                !1,
                t.isFromCheckBox,
                t.editSource,
                (n = a == null ? void 0 : a.getValue()) != null ? n : null,
              );
            });
          },
          r("AdsUEditorAdgroupSetWebsiteDestinationOptimizationDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
