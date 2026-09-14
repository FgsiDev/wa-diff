__d(
  "AdsPEOnCloseDialogReducerPlugin",
  ["AdsDataAtom", "AdsPEReminderDialogProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPEReminderDialogProvider").toFluxStore(),
      u = s.getInitialState(),
      c = {
        reduce: function (n, o) {
          var t = n.callback;
          return (
            t && (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(t),
            u
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
