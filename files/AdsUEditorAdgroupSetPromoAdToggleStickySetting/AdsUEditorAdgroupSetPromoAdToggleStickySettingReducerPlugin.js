__d(
  "AdsUEditorAdgroupSetPromoAdToggleStickySettingReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.adgroupIDs.reduce(function (e, t) {
            return n.isToggledOff ? e.add(t) : e.delete(t);
          }, t);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
