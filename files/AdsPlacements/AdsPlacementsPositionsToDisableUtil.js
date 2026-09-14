__d(
  "AdsPlacementsPositionsToDisableUtil",
  [
    "AdsPlacementUIUtils",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "BUIThreeStateCheckboxEnum",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = d(e),
        l = r("immutable").Set(),
        c = s(t, i);
      c.isEmpty() || (l = l.union(c));
      var m = u(n, i);
      return (
        m.isEmpty() || (l = l.union(m)),
        a !== !0 &&
          (l = l.union([
            r("AdsPlacementsWhatsAppMarketingMessagePositionPlugin").key,
          ])),
        l.isEmpty()
          ? o("AdsPlacementUIUtils").getDisabledGroupingsFromUISpec(e).isEmpty()
            ? r("immutable").Set()
            : i.size === 1
              ? i
              : r("immutable").Set()
          : l
      );
    }
    function s(e, t) {
      if (r("isFalsey")(e)) return r("immutable").Set();
      var n = c("instagram", t);
      return n.size === 1 ? n : r("immutable").Set();
    }
    function u(e, t) {
      if (r("isFalsey")(e)) return r("immutable").Set();
      var n = c("facebook", t);
      return n.size === 1 ? n : r("immutable").Set();
    }
    function c(e, t) {
      return t
        .filter(function (t) {
          return t.includes(e);
        })
        .keySeq()
        .toSet();
    }
    function d(e) {
      return e
        .toSet()
        .map(function (e) {
          return e.positions;
        })
        .reduce(function (e, t) {
          return e.merge(t);
        }, r("immutable").OrderedMap())
        .filter(function (e) {
          return e.selectionStatus === r("BUIThreeStateCheckboxEnum").CHECKED;
        })
        .keySeq()
        .toSet();
    }
    ((l.AdsPlacementsPositionsToDisableUtil = e),
      (l.getActivePositionsFromUISpec = d));
  },
  98,
);
