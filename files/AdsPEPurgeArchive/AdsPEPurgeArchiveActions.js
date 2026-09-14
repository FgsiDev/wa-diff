__d(
  "AdsPEPurgeArchiveActions",
  [
    "AdsPEPurgeArchiveHideDialogAction",
    "AdsPEPurgeArchivePurgeFinishedAction",
    "AdsPEPurgeArchivePurgeProgressAction",
    "AdsPEPurgeArchiveShowDialogAction",
    "AdsPEPurgeArchiveStartPurgeAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("AdsPEPurgeArchiveHideDialogAction").dispatch(
        {},
        { line: "21", module: "AdsPEPurgeArchiveActions.js", moduleID: i.id },
      );
    }
    function s() {
      r("AdsPEPurgeArchivePurgeFinishedAction").dispatch(
        {},
        { line: "25", module: "AdsPEPurgeArchiveActions.js", moduleID: i.id },
      );
    }
    function u(e) {
      r("AdsPEPurgeArchivePurgeProgressAction").dispatch(
        { count: e },
        { line: "29", module: "AdsPEPurgeArchiveActions.js", moduleID: i.id },
      );
    }
    function c(e, t) {
      r("AdsPEPurgeArchiveShowDialogAction").dispatch(
        { account: e, totalItemsToPurge: t },
        { line: "38", module: "AdsPEPurgeArchiveActions.js", moduleID: i.id },
      );
    }
    function d(e) {
      r("AdsPEPurgeArchiveStartPurgeAction").dispatch(
        { account: e },
        { line: "45", module: "AdsPEPurgeArchiveActions.js", moduleID: i.id },
      );
    }
    ((l.hideDialog = e),
      (l.purgeFinished = s),
      (l.purgeProgress = u),
      (l.showDialog = c),
      (l.startPurge = d));
  },
  98,
);
