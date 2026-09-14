__d(
  "AdsPEExportPresetBatchLoadedAction",
  [
    "AdsPEExportPresetBatchLoadedReducerPlugin",
    "AdsPEExportPresetProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEExportPresetBatchLoadedReducerPlugin"),
            n("AdsPEExportPresetProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.EXPORT_PRESET.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
