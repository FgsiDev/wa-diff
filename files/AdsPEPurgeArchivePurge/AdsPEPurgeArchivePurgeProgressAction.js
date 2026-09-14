__d(
  "AdsPEPurgeArchivePurgeProgressAction",
  ["AdsPEPurgeArchiveProvider", "AdsPEPurgeArchiveReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEPurgeArchiveReducerPlugins").purgeProgress,
            n("AdsPEPurgeArchiveProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.PURGE_ARCHIVE.PURGE_PROGRESS",
    );
    a.exports = e;
  },
  null,
);
