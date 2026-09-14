__d(
  "AdsUEditorErrorSelectorUtils",
  [
    "AdsError",
    "AdsUEditorSelectorUtils",
    "concatArrays",
    "immutable",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (n) {
        return r("concatArrays")(n.valueSeq().toArray()).filter(function (n) {
          var o = n.level,
            a = n.path,
            i =
              t == null ||
              o === t ||
              (Array.isArray(t) && o != null && t.includes(o));
          return i && a != null
            ? e instanceof r("immutable").List
              ? e.some(function (e) {
                  return r("shallowArrayEqual")(a, e);
                })
              : r("shallowArrayEqual")(a, e)
            : !1;
        });
      });
    }
    function s(e) {
      var t,
        n = e.getValues();
      if (!(n instanceof Array) || n.length < 0) return null;
      var o = null,
        a = null;
      for (var i of n)
        if (
          (i.errorPlacementType !== "RIGHT_HAND_CARD" &&
          i.level === r("AdsError").Level.WARN &&
          !o
            ? (o = i)
            : i.errorPlacementType !== "RIGHT_HAND_CARD" &&
              i.level === r("AdsError").Level.NOTIFY &&
              !a &&
              (a = i),
          o && a)
        )
          break;
      return (t = o != null ? o : a) != null ? t : n[0];
    }
    ((l.getBulkErrorObjectByPath = e), (l.getFirstInlineError = s));
  },
  98,
);
