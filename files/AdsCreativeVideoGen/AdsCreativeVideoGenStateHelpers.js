__d(
  "AdsCreativeVideoGenStateHelpers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [];
      for (var n of e.generatedVideos.entrySeq()) {
        var r = n[0],
          o = n[1];
        o.isSelected && o.entVideoID != null && t.push(o.entVideoID);
      }
      return t;
    }
    i.getSelectedEntVideos = e;
  },
  66,
);
