__d(
  "AdsObjectIDLevelRegistry",
  ["FBLogger", "Random", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = r("Random").coinflip(100);
    function u(t, n) {
      for (var o of t) {
        var a = e.get(o);
        if (a != null && a !== n) {
          r("FBLogger")("ads_object_id_level_registry").warn(
            "Duplicate ID registration conflict: id=%s existingLevel=%s newLevel=%s",
            o,
            a,
            n,
          );
          continue;
        }
        e.set(o, n);
      }
    }
    function c(t, n, o) {
      var a = e.get(t);
      return a == null || a === n
        ? !0
        : (s &&
            r("FBLogger")("ads_object_id_level_registry").warn(
              "CombinedStore ID level mismatch: id=%s registeredLevel=%s expectedLevel=%s store=%s",
              t,
              a,
              n,
              o,
            ),
          !1);
    }
    function d(e, t, n) {
      return c(e, t, n) ? !1 : r("gkx")("11997");
    }
    ((l.registerIDs = u),
      (l.checkIDLevel = c),
      (l.shouldBlockOnIDMismatch = d));
  },
  98,
);
