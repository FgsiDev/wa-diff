__d(
  "AdsSettingsAdsSettingsLoadedReducerPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.data,
            o = e.accountID,
            a = e.settings,
            i = a.pinned_ad_object_ids;
          return i == null || !(i instanceof Array)
            ? t
            : t.set(o, r("immutable").Set(i));
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
