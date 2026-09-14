__d(
  "AdsPEErrorActions",
  [
    "AdsPEErrorDismissAccountErrorAction",
    "AdsPEErrorDismissAction",
    "AdsPEErrorInitialWarningsAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("AdsPEErrorDismissAccountErrorAction").dispatch(
        { accountID: e, errorKey: t },
        { line: "23", module: "AdsPEErrorActions.js", moduleID: i.id },
      );
    }
    function s() {
      r("AdsPEErrorDismissAction").dispatch(
        {},
        { line: "33", module: "AdsPEErrorActions.js", moduleID: i.id },
      );
    }
    function u(e) {
      r("AdsPEErrorInitialWarningsAction").dispatch(
        { warnings: e },
        { line: "37", module: "AdsPEErrorActions.js", moduleID: i.id },
      );
    }
    ((l.dismissAccountError = e),
      (l.dismissLatestError = s),
      (l.initialWarnings = u));
  },
  98,
);
