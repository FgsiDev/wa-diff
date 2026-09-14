__d(
  "adsUEditorEpaCreativeFlexDefaultOnSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsCreativeFlexConstants",
    "AdsCreativeFlexMediaUtils",
    "AdsCreativeFlexTargetMediaIdentifierUtils",
    "AdsUEditorAdgroupInstagramSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupConfirmedPostsSelector",
    "adsUEditorCFDefaultOnAccountEligibilitySelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "buildCreativeFlexRelatedMediaQueryInput",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("adsUEditorAdgroupConfirmedPostsSelector")
            .adsUEditorAdgroupConfirmedPostsSelector,
          r("adsUEditorCFDefaultOnAccountEligibilitySelector"),
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          r("adsUEditorSelectedCampaignIDsSelector"),
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupInstagramSelectors")
              .bulkInstagramAccountIDSelector,
            null,
          ),
        ],
        function (t, n, r, a, i, l, s, u) {
          var e,
            c,
            d,
            m = i[0],
            p =
              m != null && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(m)
                ? m
                : null,
            _ = o(
              "AdsCreativeFlexTargetMediaIdentifierUtils",
            ).resolveExistingPostTargetMedia(p, n);
          return {
            adgroupIDs: a,
            hasUserOptedOutMedia:
              o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
                o("AdsCreativeFlexMediaUtils").FilterType.DESELECT,
                i,
              ).length > 0,
            isAccountDefaultOnEligible: r,
            pagePostID:
              m != null &&
              (e =
                (c = o("AdsAPIAdgroupRecordUtils").getInstagramSourceMediaID(
                  m,
                )) != null
                  ? c
                  : (d = m.creative) == null
                    ? void 0
                    : d.object_story_id) != null
                ? e
                : null,
            queryInput: o(
              "buildCreativeFlexRelatedMediaQueryInput",
            ).buildCreativeFlexRelatedMediaQueryInput({
              accountID: t.account_id,
              adgroupIDs: a,
              adgroupSpec: m,
              callsite: "UI__AM_L1_PUBLISH_VIEW",
              campaignGroupIDs: s,
              campaignIDs: l,
              isExistingPostAd: !0,
              l1SelectedIgAccountId: u,
              maxRecCap: o("AdsCreativeFlexConstants")
                .RELATED_MEDIA_DEFAULT_COUNT,
              targetMediaIdentifier: o(
                "AdsCreativeFlexTargetMediaIdentifierUtils",
              ).existingPostAnchor(_),
              targetMediaFbPostId: _.targetMediaFbPostId,
              targetMediaIgPostId: _.targetMediaIgPostId,
            }),
            relatedMediaUserOptedOut:
              m == null ? void 0 : m.related_media_user_opted_out,
          };
        },
        { name: i.id + ".adsUEditorEpaCreativeFlexDefaultOnSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
