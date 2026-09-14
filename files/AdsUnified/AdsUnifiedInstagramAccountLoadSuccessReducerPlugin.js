__d(
  "AdsUnifiedInstagramAccountLoadSuccessReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.selectedInstagramAccount != null
            ? r("LoadObject").withValue(n.selectedInstagramAccount, {
                creatorModuleID: i.id,
              })
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
