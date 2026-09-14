__d(
  "AdsPEExportPresetBatchCreateErrorAction",
  [
    "AdsPEErrorProvider",
    "AdsPEExportPresetBatchCreateErrorReducerPlugin",
    "AdsPEExportPresetBatchErrorReducerPlugin",
    "AdsPEExportPresetProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEExportPresetBatchCreateErrorReducerPlugin"),
            n("AdsPEErrorProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPEExportPresetBatchErrorReducerPlugin"),
            n("AdsPEExportPresetProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.EXPORT_PRESET.BATCH_CREATE_ERROR",
    );
    a.exports = e;
  },
  null,
);
