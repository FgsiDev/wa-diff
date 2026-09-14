__d(
  "AdsPEUploadStoreUtils",
  ["AdsPEDraftSelectors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Map(
        ((e = {}), (e.campaign = null), (e.ad_set = null), (e.ad = null), e),
      );
    function u(e) {
      var t = o(
        "AdsPEDraftSelectors",
      ).fragmentsNotPublishing_UNSAFE_NOT_REALLY_A_SELECTOR[e]();
      return t.keySeq().toOrderedSet();
    }
    function c() {
      var e = s.map(function (e, t) {
        return u(t);
      });
      return { selection: e };
    }
    l.createSelection = c;
  },
  98,
);
