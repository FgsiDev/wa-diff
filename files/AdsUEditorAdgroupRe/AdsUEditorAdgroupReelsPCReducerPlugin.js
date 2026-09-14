__d(
  "AdsUEditorAdgroupReelsPCReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.shouldOpenMediaPicker === !0
            ? { shouldTrigger: !0, adgroupIDForReelsPCFilter: null }
            : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
