__d(
  "AdsUEditorAdgroupOnPartnershipAdToggleDynamicPartnerContentReducerPlugin",
  [
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsLinkPostFormat",
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnPartnershipAdToggleDynamicPartnerContentDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "CatalogVertical",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "isTruthy",
    "nullthrows",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            remindersAdsDefaultOptIn: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            userSettings: r("userSettingsSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.linkTypeMap,
              l = n.parentData,
              s = n.remindersAdsDefaultOptIn,
              u = n.userSettings;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var c = e;
                if (r("isTruthy")(t.shouldUseDynamicPartnerContent)) {
                  var d = r("nullthrows")(l.get(n)),
                    m = d.campaign,
                    p = d.campaignGroup,
                    _ = d.specPlugin;
                  ((c = o(
                    "AdsAdgroupLinkPostFormatMutators",
                  ).setLinkPostFormat_UNPURE(
                    r("AdsLinkPostFormat").SINGLE,
                    i == null ? void 0 : i[e.id],
                    s,
                    c,
                    m,
                    p,
                    t.hostID,
                    r("CatalogVertical").NONE,
                    a,
                    u == null ? void 0 : u.getValue(),
                  )),
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ad_format.set(1, c)),
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.instagram_branded_content.delete(c)),
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.facebook_branded_content.delete(c)),
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.partners.delete(c)),
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.force_single_link.delete(
                      c,
                    )),
                    (c = r(
                      "AdsAdgroupSemanticFields",
                    ).catalogAssetFormatOption.set(_, c, "single_video")),
                    (c = o(
                      "AdsMediaTypeAutomationMutators",
                    ).changeMediaTypeAutomationOptinMutator(
                      c,
                      "OPT_IN",
                      "DEFAULT",
                    )));
                }
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.branded_content.deliver_dynamic_partner_content.set(
                  t.shouldUseDynamicPartnerContent,
                  c,
                );
              },
            );
          },
          o(
            "AdsUEditorAdgroupOnPartnershipAdToggleDynamicPartnerContentDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
