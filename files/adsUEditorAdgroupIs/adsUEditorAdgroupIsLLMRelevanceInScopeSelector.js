__d(
  "adsUEditorAdgroupIsLLMRelevanceInScopeSelector",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("20844");
    }
    function s(t) {
      return (
        t === r("AdsAPIObjectives").OUTCOME_SALES ||
        (e() && t === r("AdsAPIObjectives").LINK_CLICKS)
      );
    }
    function u(e, t) {
      return (
        (e == null ||
          e === r("AdCampaignDestination").UNDEFINED ||
          e === r("AdCampaignDestination").WEBSITE) &&
        o("AdsPCAUnifiedFormatEligibilityUtils").isWebsiteConversionLocation(t)
      );
    }
    function c(e, t, n) {
      return s(e) && u(t, n);
    }
    var d = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        return t.every(function (e) {
          var t, n;
          return c(
            (t = e.campaignGroup) == null ? void 0 : t.objective,
            (n = e.campaign) == null ? void 0 : n.destination_type,
            o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e),
          );
        });
      },
      { name: i.id + ".adsUEditorAdgroupIsLLMRelevanceInScopeSelector" },
    );
    ((l.isOutcomeTrafficInScopeEnabled = e),
      (l.isLLMRelevanceObjectiveInScope = s),
      (l.isWebsiteConversionLocationForLLMRelevance = u),
      (l.isInLLMRelevanceScope = c),
      (l.adsUEditorAdgroupIsLLMRelevanceInScopeSelector = d));
  },
  98,
);
