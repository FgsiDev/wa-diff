__d(
  "AdsPEPurgeArchiveProviderState",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(
      r("immutable").Record({
        account: null,
        deletedCount: 0,
        isDeleting: !1,
        isDialogShown: !1,
        totalItemsToPurge: 0,
      }),
    );
    l.default = e;
  },
  98,
);
