__d(
  "AdsSFLiveClipsIndicatorBaseAssetTriggerReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, r;
          return ((e = t.selectedBaseAssetID) == null ? void 0 : e.id) !==
            ((r = n.selectedBaseAssetID) == null ? void 0 : r.id)
            ? { selectedBaseAssetID: n.selectedBaseAssetID, isSelected: null }
            : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
