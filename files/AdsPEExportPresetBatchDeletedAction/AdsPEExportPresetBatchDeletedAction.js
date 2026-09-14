__d(
  "AdsPEExportPresetBatchDeletedAction",
  [
    "AdsPEExportPresetBatchDeletedReducerPlugin",
    "AdsPEExportPresetProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEExportPresetBatchDeletedReducerPlugin"),
            n("AdsPEExportPresetProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.EXPORT_PRESET.BATCH_DELETED",
    );
    a.exports = e;
  },
  null,
);
