__d(
  "AdsPEPurgeArchivePurgeFinishedAction",
  ["AdsPEPurgeArchiveProvider", "AdsPEPurgeArchiveReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEPurgeArchiveReducerPlugins").purgeFinished,
            n("AdsPEPurgeArchiveProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.PURGE_ARCHIVE.PURGE_FINISHED",
    );
    a.exports = e;
  },
  null,
);
