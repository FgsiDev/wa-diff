__d(
  "AdsUEditorAdgroupSetDisplayUrlReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsCAGAssetUtils",
    "AdsDLOFieldUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsInteractivePollLinkUtils",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetDisplayURLDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUnifiedCreativeAPIFields",
    "CreativeAssetGroupsFlowSafeUtils",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsUEditorAdgroupCreativeAssetGroupsIndexSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            selectedGroupIndex: r(
              "adsUEditorAdgroupCreativeAssetGroupsIndexSelector",
            ),
          },
          function (e, t, n) {
            var a = n.eligibilityInformation,
              i = n.plugins,
              l = n.selectedGroupIndex;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var s = r("nullthrows")(i.get(e.id)),
                  u = o("AdsAssetFeedUtils").isAutomaticFlow(e),
                  c = o(
                    "AdsDynamicAdCustomizationAssetFeedUtils",
                  ).isAssetFeedBasedMMDA(e);
                if (
                  (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(
                    e,
                  ) &&
                    !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                      e,
                    )) ||
                  u
                ) {
                  var d = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    e,
                    r("nullthrows")(i.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").displayURL,
                    o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                      e,
                      "link_urls",
                    ),
                    "display_url",
                    t.displayURL,
                  );
                  return (
                    (d = o("AdsInteractivePollLinkUtils").setDisplayLink(
                      d,
                      t.displayURL,
                      s,
                    )),
                    c
                      ? d
                      : o(
                          "AdsDLOFieldUtils",
                        ).setDisplayURLforNonDefaultLinkURLs(d, t.displayURL)
                  );
                }
                var m = e;
                return (
                  a != null &&
                    r("adsInteractivePollHasFbFeedVideoPollSpec")(m, a.spec) &&
                    (m = o("AdsInteractivePollLinkUtils").setDisplayLink(
                      m,
                      t.displayURL,
                      s,
                    )),
                  (m = o("AdsMutators").chain(
                    function (e) {
                      return r("AdsAdgroupSemanticFields").displayURL.set(
                        r("nullthrows")(i.get(n)),
                        e,
                        t.displayURL,
                      );
                    },
                    r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .link_data.call_to_action.value.caption.delete,
                    function (e) {
                      if (
                        o(
                          "CreativeAssetGroupsFlowSafeUtils",
                        ).isFormatCreativeAssetGroupsFromAdgroupRecord(m)
                      ) {
                        var n;
                        if (
                          o(
                            "AdsPCAUnifiedFormatEligibilityUtils",
                          ).isGKEnableForUnifiedMediaSetupFlow() &&
                          o(
                            "AdsPCAUnifiedFormatEligibilityUtils",
                          ).isMediaSourcePCAUnifiedFormat(
                            (n = e.metadata) == null
                              ? void 0
                              : n.adgroup_media_source,
                          )
                        ) {
                          for (
                            var r = e,
                              a =
                                o(
                                  "AdsCAGAssetUtils",
                                ).getCreativeAssetGroupCount(r),
                              i = 0;
                            i < a;
                            i++
                          )
                            r = o(
                              "AdsAdgroupCreativeAssetGroupsSpecMutators",
                            ).setCagCallToActionValueByValueType(
                              r,
                              i,
                              t.displayURL,
                              "link_caption",
                              s,
                            );
                          return r;
                        }
                        return o(
                          "AdsAdgroupCreativeAssetGroupsSpecMutators",
                        ).setCagCallToActionValueByValueType(
                          e,
                          l,
                          t.displayURL,
                          "link_caption",
                          s,
                        );
                      }
                      return e;
                    },
                    function (e) {
                      return e != null &&
                        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.call_to_action.value.link_caption.set(
                            t.displayURL,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupMediaSourcingSpecMutators",
                      ).maySetMediaSourcingL1Destination(e);
                    },
                  )(m)),
                  m
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetDisplayURLDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
