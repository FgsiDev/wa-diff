__d(
  "AdsDofTextSelectors",
  [
    "$InternalEnum",
    "AdsDynamicAdsUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupHasPollSpecSelector",
    "adsUEditorAdgroupIsPostSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "isDofTextEligibleSelectorLogic",
    "isOnlyWAMOStatusSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["TEXT_SUGGESTIONS"]);
    function s(e, t) {
      return r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          o("AdsUEditorAdgroupSelectors").isSingularSelector,
          r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
          r("adsUEditorAdgroupHasPollSpecSelector"),
          o("AdsUEditorAdgroupSelectors").adgroups.every(function (e) {
            return !o("AdsDynamicAdsUtils").isDynamicAd(e);
          }),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          r("isOnlyWAMOStatusSelector"),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.full_funnel_objective;
            }),
            null,
          ),
          o("adsUEditorAdgroupIsPostSelector")
            .adsUEditorAdgroupIsExistingPostAdSelector,
        ],
        function (r, a, i, l, s, u, c, d, m) {
          return o(
            "isDofTextEligibleSelectorLogic",
          ).isDofTextEligibleSelectorLogic(r, a, i, l, s, u, c, e, t, d, m);
        },
        { name: i.id },
      );
    }
    ((l.DofTextEligibilityCallsite = e),
      (l.createIsDofTextEligibleSelector = s));
  },
  98,
);
