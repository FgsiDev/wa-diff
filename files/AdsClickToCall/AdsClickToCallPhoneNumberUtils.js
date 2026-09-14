__d(
  "AdsClickToCallPhoneNumberUtils",
  [
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsUEditorCallToActionMutators",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.account,
        n = e.adgroup,
        a = e.objective,
        i = e.page,
        l = e.prefillPhoneNumber,
        s = e.promotedObjectType,
        u = e.specPlugin,
        c = r("AdsAdgroupSemanticFields").callToActionType.get(u, n);
      return c !== "CALL_NOW" ||
        r("isTruthy")(o("AdsAdgroupSpecUtils").getCallToActionValue(n))
        ? n
        : o(
            "AdsUEditorCallToActionMutators",
          ).setCachedOrDefaultCallToActionLink({
            account: t,
            adgroup: n,
            cachedCallToActionLink: null,
            callToActionType: c,
            campaignGroupPromotedPageID: i == null ? void 0 : i.id,
            objective: a,
            page: i,
            prefillPhoneNumber: l,
            promotedObjectType: s,
            specPlugin: u,
          });
    }
    l.maybeSetDefaultPhoneNumberForCallNowCTA = e;
  },
  98,
);
