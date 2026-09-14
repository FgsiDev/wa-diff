__d(
  "AdsPECreationUICreateCompletedReducerPlugin",
  ["AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = !!n.createdInCF,
            o = n.buyingType === r("AdsBuyingTypes").RESERVED,
            a = o && e && !t.quickCreateStarted;
          return t.merge({
            isCreationOpen: !1,
            isReachFrequencyConfirmDialogOpen: a,
            quickCreateStarted: !1,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
