__d(
  "AdsAdBuilderDuplicateMockupReducerPlugins",
  ["isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: function (t, n) {
        var e = n.duplicatingAdGroupID;
        return t.add(e);
      },
    };
    function s(e, t) {
      return r("isTruthy")(t.duplicationSourceAdgroupID)
        ? e.remove(t.duplicationSourceAdgroupID)
        : e;
    }
    var u = {
      reduce: function (t, n) {
        return s(t, n);
      },
    };
    ((l.onMockupDuplicating = e), (l.onMockupDuplicated = u));
  },
  98,
);
