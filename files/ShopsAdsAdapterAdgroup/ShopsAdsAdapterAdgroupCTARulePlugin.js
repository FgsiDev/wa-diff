__d(
  "ShopsAdsAdapterAdgroupCTARulePlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorUnifiedCreationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_set_cta_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_set_cta_rule" },
        transform: function (t, n) {
          var e = n.cachedStoreState,
            a = n.campaign,
            i = n.campaignGroup,
            l = n.effectiveObjective,
            s = n.specPlugin,
            u = "SHOP_NOW",
            c = o(
              "AdsUEditorMultiDestinationAdgroupMutators",
            ).cleanMultiDestAdSpecOnConversionLocationChange(t);
          if (
            o(
              "AdsUEditorUnifiedCreationUtils",
            ).isMultiDestinationMessagingFromAdSpec(t)
          ) {
            var d, m, p, _;
            ((c =
              (d = r("AdsAdgroupRecordAccessors").creative.object_story_spec) ==
                null ||
              (d = d.link_data) == null ||
              (d = d.call_to_action) == null ||
              (d = d.value) == null ||
              (d = d.app_destination) == null
                ? void 0
                : d.delete(c)),
              (c =
                (m = r("AdsAdgroupRecordAccessors").creative
                  .object_story_spec) == null ||
                (m = m.link_data) == null ||
                (m = m.call_to_action) == null ||
                (m = m.value) == null ||
                (m = m.link) == null
                  ? void 0
                  : m.delete(c)),
              (c =
                (p = r("AdsAdgroupRecordAccessors").creative
                  .object_story_spec) == null ||
                (p = p.link_data) == null ||
                (p = p.link) == null
                  ? void 0
                  : p.delete(c)),
              (c =
                (_ = r("AdsAdgroupRecordAccessors").creative
                  .object_story_spec) == null ||
                (_ = _.link_data) == null ||
                (_ = _.page_welcome_message) == null
                  ? void 0
                  : _.delete(c)));
          }
          var f = o("AdsUEditorAdgroupCachedUtils").getCachedCallToActionLink(
              e,
              c.id,
              u,
            ),
            g = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(i),
            h = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
              campaign: a,
              campaignGroup: i,
            });
          return o("AdsUEditorCallToActionMutators").setCallToAction({
            callToActionType: u,
            cachedCallToActionLink: f,
            adgroup: c,
            campaignGroupPromotedPageID: g,
            objective: l,
            promotedObjectType: h,
            specPlugin: s,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
