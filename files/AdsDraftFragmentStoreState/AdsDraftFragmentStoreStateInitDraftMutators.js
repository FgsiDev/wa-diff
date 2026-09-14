__d(
  "AdsDraftFragmentStoreStateInitDraftMutators",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsDraftConstants",
    "AdsDraftFragmentListStore",
    "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
    "AdsDraftSelectionStore",
    "AdsLoadState_LEGACY",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("AdsDataAtom"))).waitFor([
        r("AdsAccountStore").getDispatchToken(),
      ]);
      var n = t,
        a = r("AdsAccountStore").getSelectedAccountID();
      if (!a) return n;
      var i = r("AdsDraftSelectionStore").getOrCreateFor(a, t.adsApplicationID);
      if (i === o("AdsDraftConstants").EMPTY_DRAFT_LOADOBJECT)
        return (
          (n = o(
            "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
          ).updateFragments(n, [])),
          n
        );
      var l = i.hasError();
      if (
        (l !== n.draftHasError && (n = n.set("draftHasError", l)),
        i.isLoading() || i.hasError() || !i.value)
      )
        return n.isLoading
          ? n
          : n
              .set("isLoading", !0)
              .set("loadState", r("AdsLoadState_LEGACY").LOADING);
      var s = r("AdsDraftFragmentListStore").getFor(
        i.value,
        t.adsApplicationID,
      );
      return (
        (n = n.set("draftID", i.value)),
        s.loadState !== r("AdsLoadState_LEGACY").LOADED
          ? n.isLoading
            ? n
            : n
                .set("isLoading", !0)
                .set("loadState", r("AdsLoadState_LEGACY").LOADING)
          : ((n = o(
              "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
            ).updateFragments(n, s.list, !0)),
            n)
      );
    }
    l.initDraft = s;
  },
  98,
);
