__d(
  "AdsAdBuilderCreateCompletedReducerPlugin",
  ["first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o = r("first")((e = n.adgroupIDs) != null ? e : []);
          return o == null || n.duplicationSourceAdgroupID != null
            ? t
            : babelHelpers.extends({}, t, { adgroupID: o });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
