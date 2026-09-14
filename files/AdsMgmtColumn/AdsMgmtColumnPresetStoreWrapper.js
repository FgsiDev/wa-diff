__d(
  "AdsMgmtColumnPresetStoreWrapper",
  ["AdsInsightsSavedColumnsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getStores: function () {
          return [r("AdsInsightsSavedColumnsStore")];
        },
        findByContent: (e = r(
          "AdsInsightsSavedColumnsStore",
        )).findByContent.bind(e),
        findByName: e.findByName.bind(e),
        get: e.get.bind(e),
        getOrNull: e.getOrNull.bind(e),
        getBuiltin: e.getBuiltin.bind(e),
        getBuiltinOrNull: e.getBuiltinOrNull.bind(e),
        getColumnPresetsOrEmpty: function (t) {
          var e = r("AdsInsightsSavedColumnsStore").getColumnPresets(t);
          return e.hasValue() ? e.getValueEnforcing() : [];
        },
        getBuiltinColumnPresets: e.getBuiltinColumnPresets.bind(e),
        getAllColumnPresets: e.getAllColumnPresets.bind(e),
        makeTemporaryID: e.makeTemporaryID.bind(e),
        getIsAttributionSettingColumnAdded:
          e.isAttributionSettingColumnAddedToCustomPreset.bind(e),
      },
      u = s;
    l.default = u;
  },
  98,
);
