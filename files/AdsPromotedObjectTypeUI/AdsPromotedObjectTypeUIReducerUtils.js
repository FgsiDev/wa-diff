__d(
  "AdsPromotedObjectTypeUIReducerUtils",
  ["AdsUEditorHostIDs", "AdsUEditorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      return o("AdsUEditorUtils").shouldHostHandleAction(
        { hostID: t },
        r("AdsUEditorHostIDs").EDITING,
      )
        ? e.withMutations(function (e) {
            for (var t of n) e.set(t, a);
            return e;
          })
        : e;
    }
    l.setPromotedObjectTypeForCampaignIDs = e;
  },
  98,
);
