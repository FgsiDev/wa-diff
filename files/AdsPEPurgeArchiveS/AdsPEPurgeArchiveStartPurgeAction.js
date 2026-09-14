__d(
  "AdsPEPurgeArchiveStartPurgeAction",
  ["AdsPEPurgeArchiveProvider", "AdsPEPurgeArchiveReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEPurgeArchiveReducerPlugins").startPurge,
            n("AdsPEPurgeArchiveProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.PURGE_ARCHIVE.START_PURGE",
    );
    a.exports = e;
  },
  null,
);
