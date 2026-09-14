__d(
  "adsCampaignChangeAdCreationMethodMutator",
  [
    "AdsAPIObjectives",
    "AdsEditorPostEditMode",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorSetPostEditModeMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = t.cachedStoreState,
        l = null,
        s = null;
      return (
        i != null &&
          ((l = o("AdsUEditorAdgroupCachedUtils").getCreative(
            i,
            n,
            r("AdsEditorPostEditMode").INLINE,
          )),
          (s = o("AdsUEditorAdgroupCachedUtils").getMetadata(i, n))),
        o("AdsUEditorSetPostEditModeMutators").setToUsingInlineCreation({
          adgroup: e,
          cachedCreative: l,
          cachedMetadata: s,
          campaign: t.campaignsMap.get(e.id),
          campaignGroup: null,
          objective: r("AdsAPIObjectives").LINK_CLICKS,
          specPathPlugin: a,
          promotedObjectType: r("AdsPromotedObjectTypes").REMINDER,
          enableNewBrandedContentFlow: !1,
          account: t.account,
          promoAdDefaultOptinStatus: void 0,
        })
      );
    }
    l.default = e;
  },
  98,
);
