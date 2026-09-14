__d(
  "adsUEditorAdgroupArAdsIsEligibleSelector",
  [
    "AdsAPICampaignRecordUtils",
    "AdsArAdUtils",
    "AdsArLinkUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypeUIProvider",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdObjectsForSelectedCampaignsSelector"),
          r("AdsPromotedObjectTypeUIProvider").toFluxSelector(),
        ],
        function (t, n) {
          return t.every(function (e) {
            var t = e.campaign,
              r = e.campaignGroup,
              a = r.objective,
              i = n.get(t.id),
              l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t, i);
            return o("AdsArAdUtils").isEligibleCampaignSetup(
              o("AdsODAXUtils").maybeTranslateObjective(
                r.objective,
                l,
                t.optimization_goal,
              ),
              l,
            );
          });
        },
        { name: i.id + ".isEligibleCampaignSetupSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          e,
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupBulkSelectors").pageID,
            null,
          ),
        ],
        function (t, n, r) {
          return (
            t.every(function (e) {
              return o("AdsArLinkUtils").getAdgroupArAdsIsEligible(e, n);
            }) && r != null
          );
        },
        { name: i.id + ".adsUEditorAdgroupArAdsIsEligibleSelector" },
      ),
      u = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationSelector],
        function (t) {
          return o("AdsArAdUtils").hasArAdCompatiblePlacement(t.spec);
        },
        { name: i.id + ".getAdgroupArAdsPlacementIsEligibleSelector" },
      );
    ((l.isEligibleCampaignSetupSelector = e),
      (l.adsUEditorAdgroupArAdsIsEligibleSelector = s),
      (l.getAdgroupArAdsPlacementIsEligibleSelector = u));
  },
  98,
);
