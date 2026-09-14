__d(
  "AdsPEPurgeArchiveShowDialogAction",
  ["AdsPEPurgeArchiveProvider", "AdsPEPurgeArchiveReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEPurgeArchiveReducerPlugins").showDialog,
            n("AdsPEPurgeArchiveProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.PURGE_ARCHIVE.SHOW_DIALOG",
    );
    a.exports = e;
  },
  null,
);
