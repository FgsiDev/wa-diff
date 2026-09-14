__d(
  "AdsUEditorAdgroupMessageMarketingUpstreamSettingsDefaultSpecReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupSemanticFields",
    "AdsAutomaticFlowUtils",
    "AdsBulkEditUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPostClickUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupMessageMarketingSetDefaultSettingsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLinkTypeMutator",
    "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
    "adsAdvertiserProfileMessageMarketingDefaultWACSIDSelector",
    "adsGetIsMessageMarketingEnabledFromAdgroupIDSelector",
    "adsMessageMarketingWabaListSelector",
    "adsUEditorAccountSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "applyMessageMarketingDefaultsAdgroupMutator",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          getIsMMEnabledForAdgroup: r(
            "adsGetIsMessageMarketingEnabledFromAdgroupIDSelector",
          ),
          activationStatus: r(
            "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
          ),
          defaultWhatsAppNumberIDFromAdvertiserProfileLO: r(
            "adsAdvertiserProfileMessageMarketingDefaultWACSIDSelector",
          ),
          messageMarketingWabaList: o("adsMessageMarketingWabaListSelector")
            .adsMessageMarketingWabaListSelector,
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          adAccount: r("adsUEditorAccountSelector"),
          linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
            .adsUEditorAdsAdObjectLinkTypeMapSelector,
        },
        function (e, t, n) {
          var a = n.activationStatus,
            i = n.adAccount,
            l = n.defaultWhatsAppNumberIDFromAdvertiserProfileLO,
            c = n.getIsMMEnabledForAdgroup,
            d = n.linkTypeMap,
            m = n.messageMarketingWabaList,
            p = n.parentData;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n,
              _,
              f,
              g = (n = a.getValue()) != null ? n : !1,
              h =
                !c(e.id) &&
                t.bulkEditSource !==
                  o("AdsBulkEditUtils")
                    .AdsBulkEditSourceForMarketingMessagesType.BULK_EDIT_DIALOG;
            if (h || !g) return e;
            var y = l == null ? void 0 : l.getValue(),
              C = (_ = t.selectedWhatsAppNumberID) != null ? _ : y,
              b = m.find(function (e) {
                return e.whatsAppNumberID === C;
              }),
              v = r("nullthrows")(
                p.get(e.id),
                "Expected parent data for adgroup ID: " + e.id,
              ),
              S = v.campaign,
              R = v.campaignGroup,
              L = v.specPlugin,
              E = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
                campaign: S,
                campaignGroup: R,
              }),
              k = o("AdsDynamicAdsUtils").isDynamicAd(e),
              I = o("AdsODAXUtils").maybeTranslateObjective(
                R.objective,
                E,
                S.optimization_goal,
              ),
              T = r("AdsAdgroupSemanticFields").callToActionType.get(L, e),
              D = d[e.id],
              x =
                !o(
                  "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
                ).isOldLinkTypeWebsiteOrWebsiteAndShop(D) &&
                !o(
                  "AdsUEditorAdgroupSetLinkTypeMutatorUtils",
                ).getIsConversionsWebsiteDynamicFlow(I, E, k),
              $ = o("AdsPostClickUtils").isEligibleForPostClickExperience(
                i,
                I,
                e,
                S,
              ),
              P = (f = R.is_odax_campaign_group) != null ? f : !1;
            return o("AdsMutators").chain(
              function (e) {
                return r("applyMessageMarketingDefaultsAdgroupMutator")(e, b);
              },
              function (e) {
                return s(e)
                  ? e
                  : o(
                      "AdsAdgroupLinkPostFormatMutators",
                    ).changeToSingleLinkPostFormat(I, e, E, S, R);
              },
              function (e) {
                return u(D)
                  ? e
                  : o(
                      "AdsUEditorAdgroupSetLinkTypeMutator",
                    ).setExternalLinkType(
                      e,
                      i,
                      R,
                      S,
                      $,
                      o("AdsChildAttachmentsUtils").isCarouselAd(e),
                      L,
                      I,
                      P,
                      x,
                      E,
                      T,
                    );
              },
              function (e) {
                return k && !r("gkx")("13496")
                  ? o(
                      "AdsUEditorAdgroupDynamicMutators",
                    ).transformAdgroupFromTemplateToSingleMediaLinkData(
                      e,
                      S,
                      R,
                      I,
                    )
                  : e;
              },
            )(e);
          });
        },
        [
          r("AdsUEditorAdgroupMessageMarketingSetDefaultSettingsActionFlux")
            .actionType,
        ],
      ),
    };
    function s(e) {
      return o("AdsCanvasAdUtils").isCanvasAd(e)
        ? !0
        : o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
            o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e) ||
            o(
              "AdsAPIAdgroupRecordUtils",
            ).isFlexibleFormatAdOrCreativeAssetGroup(e);
    }
    function u(e) {
      var t = [
        "external",
        "phone_call",
        "instant_experience",
        "event",
        "whatsapp",
      ];
      return t.includes(e);
    }
    var c = e;
    l.default = c;
  },
  98,
);
