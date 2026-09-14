__d(
  "adsUEditorAdgroupIsPVPartnershipAdsEligibleSelector",
  [
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "AdsUnifiedProfileVisitUtils",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [
          (e = r("adsGetUniformValueSelector"))(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.objective;
              },
            ),
          ),
          e(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          e(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              return e.destination_type;
            }),
          ),
          e(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              return e.optimization_goal;
            }),
          ),
        ],
        function (t, n, r, a) {
          return o(
            "AdsUnifiedProfileVisitUtils",
          ).getIsUnifiedProfileVisitsConversionAndPAEligible(t, n, r, a);
        },
        { name: i.id + ".adsUEditorAdgroupIsPVPartnershipAdsEligibleSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
