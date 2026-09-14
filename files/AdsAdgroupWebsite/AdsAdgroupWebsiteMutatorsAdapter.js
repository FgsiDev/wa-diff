__d(
  "AdsAdgroupWebsiteMutatorsAdapter",
  [
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAudienceDirectConfig",
    "AdsCampaignGroupPromotedPageIDSelector",
    "AdsDataAtom",
    "AdsUEditorWebsiteMutators",
    "adsObjectiveSelector",
    "adsPromotedObjectTypeSelector_LEGACY",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, a) {
        var t = r("AdsAudienceDirectConfig").accountType,
          i = a.adset_id,
          l = a.campaign_id,
          s = r("AdsCampaignGroupPromotedPageIDSelector")(l),
          u = r("adsObjectiveSelector")({ adgroup: a });
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor(
            r("adsPromotedObjectTypeSelector_LEGACY")
              .getStores()
              .map(function (e) {
                return e.getDispatchToken();
              }),
          );
        var c = r("adsPromotedObjectTypeSelector_LEGACY")(i),
          d = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: t,
            objective: u,
            promotedObjectType: c,
          });
        return o("AdsUEditorWebsiteMutators").setWebsiteURL({
          adgroup: a,
          campaignGroupPromotedPageID: s,
          objective: u,
          promotedObjectType: c,
          specPlugin: d,
          websiteURL: n,
        });
      };
    l.setWebsiteURL = s;
  },
  98,
);
