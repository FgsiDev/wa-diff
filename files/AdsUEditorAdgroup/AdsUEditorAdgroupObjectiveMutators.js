__d(
  "AdsUEditorAdgroupObjectiveMutators",
  [
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCreation",
    "AdsAdgroupCreativePluginResolver",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupPrefillerUtils",
    "AdsAdgroupPrefillers",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsAudienceDirectConfig",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsConvergenceAdgroupUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsDCOUtils",
    "AdsDataAtom",
    "AdsLinkTypeUtils",
    "AdsMediaFormatMutators",
    "AdsMixedFormatsConstants",
    "AdsMutators",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPrefillAdgroupMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupTextTransformationMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUIMediaFormat",
    "AdsUIMediaFormatUtils",
    "AdsUnifiedCreativeAPIFields",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "CatalogVertical",
    "NonURLLinkCTATypesUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCallToActionGetDefaultCallToActionType",
    "adsCallToActionGetTypesForAdgroup",
    "adsCampaignGetOfferStateType",
    "adsRegulatedCategoryIsPoliticalCategorySelected",
    "adsRemoveIncompatiblePACCustomizations",
    "adsUEditorIsAccountDefaultOptedIntoTextSwappingSelector",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      var a = n.objective,
        i = n.buying_type,
        l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t),
        s = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: a,
          promotedObjectType: l,
        }),
        u = r("AdsAdgroupCreativePluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: a,
          offerStateType: r("adsCampaignGetOfferStateType")(t),
          promotedObjectType: l,
          catalogVertical: r("CatalogVertical").NONE,
        });
      return {
        adgroupCreativePlugin: u,
        adgroupSpecPathPlugin: s,
        campaign: t,
        campaignGroup: n,
        objective: a,
        buyingType: i,
        promotedObjectType: l,
      };
    }
    function u(e, t, n) {
      if (o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)) {
        var a = n.account,
          i = n.newAdgroupExtraData,
          l = n.oldAdgroupExtraData,
          s = o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
            o("AdsAPIAdgroupRecordUtils").getObjectType(e),
            e,
            l.objective,
          ),
          u = d(s, t, n);
        if (o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e))
          if (
            o("AdsDCOUtils").isSupportedObjectiveForRegularDCO(
              i.buyingType,
              i.objective,
            )
          ) {
            var m;
            return o("AdsDCOUtils").convertStorySpecAdToDCOAd(u, i.objective, {
              hostID: n.hostID,
              oldImages:
                (m = e.creative) == null || (m = m.asset_feed_spec) == null
                  ? void 0
                  : m.images,
            });
          } else return u;
        else if (
          k(e, u) &&
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
          c(n)
        ) {
          var p,
            _,
            f = o("AdsUEditorAdgroupAssetFeedMutators").convertToAssetFeedSpec(
              o("AdsAPIAdgroupRecordUtils").getObjectType(u),
              u,
              i.objective,
              r("ApiDynamicCreativeOptimizationTypes").PLACEMENT,
            );
          if (
            ((f = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
              (p = e.creative) == null ? void 0 : p.asset_feed_spec,
              f,
            )),
            (f = r("adsRemoveIncompatiblePACCustomizations")(
              f,
              n.newAdgroupExtraData.campaign,
              n.newAdgroupExtraData.adgroupSpecPathPlugin,
            )),
            !o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(f))
          )
            return d(
              f,
              t,
              babelHelpers.extends({}, n, {
                oldAdgroupExtraData: n.newAdgroupExtraData,
              }),
            );
          var g = r("adsCallToActionGetTypesForAdgroup")(
              {
                adgroup: e,
                campaign: i.campaign,
                campaignGroup: i.campaignGroup,
              },
              a.capabilities,
            ),
            h =
              (_ = f.creative) == null ||
              (_ = _.asset_feed_spec) == null ||
              (_ = _.call_to_action_types) == null
                ? void 0
                : _.first(),
            y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              i.objective,
              i.campaign,
            ),
            C = r("AdsAdgroupSpecPathPluginResolver").resolve({
              accountType: r("AdsAudienceDirectConfig").accountType,
              objective: i.objective,
              promotedObjectType: y,
            });
          if (
            !g.find(function (e) {
              return e.name === h;
            })
          ) {
            var b = C.getDefaultCallToActionType(f);
            (o("NonURLLinkCTATypesUtils").isUnsupportedCTA(b, a) &&
              (b = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE"),
              (f = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_action_types.set(
                r("immutable").List([b]),
                f,
              )));
          }
          if (
            l.objective === r("AdsAPIObjectives").LEAD_GENERATION &&
            i.objective !== r("AdsAPIObjectives").LEAD_GENERATION
          ) {
            var v;
            f = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_to_actions.set(
              (v = f.creative) == null ||
                (v = v.asset_feed_spec) == null ||
                (v = v.call_to_actions) == null
                ? void 0
                : v.map(function (e) {
                    return e.delete("value");
                  }),
              f,
            );
          }
          if (i.objective === r("AdsAPIObjectives").LEAD_GENERATION) {
            var S,
              R,
              L =
                (S = f.creative) == null ||
                (S = S.asset_feed_spec) == null ||
                (S = S.call_to_action_types) == null
                  ? void 0
                  : S.first();
            L &&
              !(
                (R = f.creative) != null &&
                (R = R.asset_feed_spec) != null &&
                R.call_to_actions
              ) &&
              (f = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_actions.set(
                r("immutable").List.of(r("immutable").Map({ type: L })),
                f,
              ));
          }
          if (
            !o("AdsMixedFormatsConstants").ALLOWED_OBJECTIVES.includes(
              i.objective,
            ) &&
            o("AdsAssetFeedUtils").hasPACAutomaticFormat(e)
          )
            if (!o("AdsAssetFeedUtils").doesAdgroupHaveImages(e))
              f = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.ad_formats.set(
                r("immutable").List.of("SINGLE_VIDEO"),
                f,
              );
            else if (!o("AdsAssetFeedUtils").doesAdgroupHaveVideos(e))
              f = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.ad_formats.set(
                r("immutable").List.of("SINGLE_IMAGE"),
                f,
              );
            else return u;
          return o("AdsDCOUtils").isSupportedObjectiveForTextDOF(
            i.buyingType,
            i.objective,
          )
            ? f
            : ((f = o(
                "AdsAssetFeedMutationUtils",
              ).removeDofOptionAssetsFromPACAssetFeed(
                f,
                "body_label",
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES,
                "bodies",
              )),
              o(
                "AdsAssetFeedMutationUtils",
              ).removeDofOptionAssetsFromPACAssetFeed(
                f,
                "title_label",
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.TITLES,
                "titles",
              ));
        } else return u;
      } else return d(e, t, n);
    }
    function c(e) {
      var t,
        n = e.account,
        r = e.accountBlockList,
        a = e.newAdgroupExtraData,
        i =
          (t = a.campaign.promoted_object) == null
            ? void 0
            : t.object_store_url,
        l = o(
          "AdsPlacementEligibilityInfoUtils",
        ).buildEligibilityInformationFromCampaignSpec(
          a.campaign,
          a.buyingType,
          n.capabilities,
          a.objective,
          r,
          i,
          null,
          !1,
          n,
        );
      return o(
        "AdsPlacementAssetEligibilityUtils",
      ).isCampaignEligibleForPlacementAssetCustomizationPhase2(a.campaign, l);
    }
    function d(e, t, n) {
      var a = n.account,
        i = n.hostID,
        l = n.newAdgroupExtraData,
        s = n.oldAdgroupExtraData,
        u = n.prefillersExtraData,
        c = r("AdsAdgroupRecordAccessors").name.set(e.name, C(a, e, t, l, s));
      return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
        ? T(c, e, l, s, u, n.account)
        : v(a, e, c, l, s)
          ? o("AdsMutators").chain(
              function (t) {
                return L(t, e, l, s, i);
              },
              function (t) {
                return E(t, e, l);
              },
              function (t) {
                return I(t, e, l, s);
              },
              function (e) {
                var t;
                return o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
                  e,
                  Array.from(
                    ((t = l.campaignGroup.special_ad_categories) != null
                      ? t
                      : []
                    ).values(),
                  ),
                );
              },
              function (e) {
                return N(e, l);
              },
              function (t) {
                return x(t, e, l, s, u);
              },
              function (t) {
                return D(t, e, l, s);
              },
              function (t) {
                return g(t, e, l);
              },
              function (t) {
                return f(t, e, l, s);
              },
              function (e) {
                return p(e, n, a);
              },
              function (e) {
                return _(e, n);
              },
              function (t) {
                return m(t, e, l, s, a);
              },
            )(c)
          : c;
    }
    function m(e, t, n, a, i) {
      if (
        a.campaignGroup.objective !==
        r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY
      )
        return e;
      var l = {
          adgroup: e,
          campaign: n.campaign,
          campaignGroup: n.campaignGroup,
        },
        s = o("AdsAutomaticFlowUtils").isEligibleForAutomaticFlowLite(i, l);
      if (s) {
        var u, c, d;
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec.set(
            (u = t.creative) == null ? void 0 : u.degrees_of_freedom_spec,
          ),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
            (c = t.creative) == null || (c = c.asset_feed_spec) == null
              ? void 0
              : c.audios,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).metadata.ad_standard_enhancements_edit_source.set(
            (d = t.metadata) == null
              ? void 0
              : d.ad_standard_enhancements_edit_source,
          ),
        )(e);
      }
      return e;
    }
    function p(e, t, n) {
      var r = t.getShouldEnableAutomaticFlowByDefault,
        a = t.newAdgroupExtraData,
        i = a.campaign,
        l = a.campaignGroup,
        s = { campaign: i, campaignGroup: l, adgroup: e },
        u = o("AdsAutomaticFlowUtils").isEligibleForAutomaticFlowLite(n, s);
      return u && r != null
        ? o(
            "adsAutomaticFlowMutationSetDoFSpec",
          ).adsStandardEnhancementsMutator(e, r())
        : e;
    }
    function _(e, t) {
      if (t.contextualDiscoveryAdsEligibilityState == null) return e;
      var n = t.contextualDiscoveryAdsEligibilityState;
      return o(
        "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
      ).updateContextualDiscoveryAdsEligibilitySpec(e, {
        shouldOptIn: n.shouldOptIn === !0,
        isExplicitOptOut: n.isExplicitOptOut,
        shouldRenderCheckbox: n.shouldRenderCheckbox,
        actionMetadataType: n.actionMetadataType,
      });
    }
    function f(t, n, a, i) {
      var l = o(
        "AdsDCODegreesOfFreedomUtils",
      ).isObjectiveEligibleForStandardFlowTextLiquidity(
        a.objective,
        a.campaign,
      );
      if (!l) return t;
      var s = o(
          "AdsDCODegreesOfFreedomUtils",
        ).isObjectiveEligibleForStandardFlowTextLiquidity(
          i.objective,
          i.campaign,
        ),
        u;
      if (s) {
        var c;
        u =
          (c = n.creative) == null || (c = c.degrees_of_freedom_spec) == null
            ? void 0
            : c.text_transformation_types;
      } else {
        var d;
        (e || (e = r("AdsDataAtom"))).waitFor(
          r("adsUEditorIsAccountDefaultOptedIntoTextSwappingSelector")
            .getStores()
            .map(function (e) {
              return e.getDispatchToken();
            }),
        );
        var m = r("adsRegulatedCategoryIsPoliticalCategorySelected")(
            (d = a.campaignGroup.special_ad_categories) == null
              ? void 0
              : d.toArray(),
          ),
          p = !m;
        u = p ? r("immutable").List(["TEXT_LIQUIDITY"]) : null;
      }
      return u == null || u.size === 0
        ? t
        : o(
            "AdsUEditorAdgroupTextTransformationMutators",
          ).addTextTransformations(t, u);
    }
    function g(e, t, n) {
      var o = r("AdsAdgroupRecordAccessors").creative.ad_disclaimer_spec.get(t);
      return o != null && h(n)
        ? r("AdsAdgroupRecordAccessors").creative.ad_disclaimer_spec.set(o, e)
        : e;
    }
    function h(e) {
      var t = e.objective,
        n = e.promotedObjectType;
      return !!(
        [
          r("AdsAPIObjectives").BRAND_AWARENESS,
          r("AdsAPIObjectives").REACH,
          r("AdsAPIObjectives").POST_ENGAGEMENT,
          r("AdsAPIObjectives").LEAD_GENERATION,
          r("AdsAPIObjectives").STORE_VISITS,
          r("AdsAPIObjectives").VIDEO_VIEWS,
        ].includes(t) ||
        (t === r("AdsAPIObjectives").LINK_CLICKS &&
          n === r("AdsPromotedObjectTypes").WEBSITE) ||
        (t === r("AdsAPIObjectives").CONVERSIONS &&
          n === r("AdsPromotedObjectTypes").PIXEL)
      );
    }
    function y(e, t, n, r) {
      return {
        current: {
          adgroup: e,
          campaign: n.campaign,
          campaignGroup: n.campaignGroup,
        },
        original: {
          adgroup: t,
          campaign: r.campaign,
          campaignGroup: r.campaignGroup,
        },
      };
    }
    function C(e, t, n, a, i) {
      var l = a.campaignGroup.toJS(),
        s = a.campaign.toJS(),
        u = new (r("AdsAPIAdgroupRecord"))(
          o("AdsAdgroupCreation").getDefaults(
            s,
            l,
            e,
            null,
            null,
            null,
            i.page,
            a.promotedObjectType,
            null,
          ),
        );
      return b(u, t);
    }
    function b(e, t) {
      var n = t.tracking_specs;
      return !n || !n.size
        ? r("AdsAdgroupRecordAccessors").tracking_specs.delete(e)
        : r("AdsAdgroupRecordAccessors").tracking_specs.set(
            r("immutable").fromJS(Array(n.size).fill({})),
            e,
          );
    }
    function v(e, t, n, r, o) {
      var a = R(t, o.adgroupSpecPathPlugin),
        i = S(e, n, r.campaign, r.adgroupCreativePlugin);
      return i.has(a);
    }
    function S(e, t, n, r) {
      var a = r.getSupportedMediaFormats({
        account: e,
        adgroup: t,
        campaign: n,
      });
      return o("AdsUIMediaFormatUtils").getSupportedUIMediaFormats(
        a,
        a.has("CAROUSEL"),
        !0,
        !1,
        !1,
      );
    }
    function R(e, t) {
      return o("AdsUIMediaFormatUtils").getUIFormat(e, t, !1);
    }
    function L(e, t, n, a, i) {
      var l,
        s = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(
          e,
          n.adgroupSpecPathPlugin,
        ),
        u = r("AdsAdgroupSemanticFields").multiShareOptimized.get(
          a.adgroupSpecPathPlugin,
          t,
        ),
        c = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(
          t,
          a.adgroupSpecPathPlugin,
        );
      if (s === c) return e;
      var d = n.campaignGroup.objective,
        m = (l = n.campaignGroup.promoted_object) == null ? void 0 : l.page_id;
      return o(
        "AdsAdgroupLinkPostFormatMutators",
      ).setLinkPostFormatWithExtraData_UNPURE(c, e, null, {
        objective: d,
        campaignGroupPromotedPageID: m,
        multiShareOptimized: u,
        promotedObjectType: n.promotedObjectType,
        hostID: i,
        campaign: n.campaign,
        campaignGroup: n.campaignGroup,
      });
    }
    function E(e, t, n) {
      var r;
      if (k(e, t)) return e;
      var a = o("AdsAPIAdgroupRecordUtils").getSingleMediaType(t);
      return o("AdsMediaFormatMutators").setMediaFormat(
        a,
        e,
        n.adgroupSpecPathPlugin,
        n.objective,
        null,
        {
          objective: n.objective,
          promotedObjectType: n.promotedObjectType,
          campaignGroupPromotedPageID:
            (r = n.campaignGroup.promoted_object) == null ? void 0 : r.page_id,
        },
      );
    }
    function k(e, t) {
      var n = o("AdsAPIAdgroupRecordUtils").getSingleMediaType(e),
        r = o("AdsAPIAdgroupRecordUtils").getSingleMediaType(t);
      return n === r;
    }
    function I(e, t, n, a) {
      if (
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
        (n.campaignGroup.objective === r("AdsAPIObjectives").MESSAGES &&
          a.campaignGroup.objective !==
            r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY) ||
        a.campaignGroup.objective === r("AdsAPIObjectives").MESSAGES ||
        !r("AdsAdgroupSemanticFields").childAttachments.isSupported(
          n.adgroupSpecPathPlugin,
          e,
        ) ||
        !r("AdsAdgroupSemanticFields").childAttachments.isSupported(
          a.adgroupSpecPathPlugin,
          t,
        )
      )
        return e;
      var i = r("AdsAdgroupSemanticFields").childAttachments.get(
        a.adgroupSpecPathPlugin,
        t,
      );
      return !i || !i.size
        ? r("AdsAdgroupSemanticFields").childAttachments.delete(
            n.adgroupSpecPathPlugin,
            e,
          )
        : r("AdsAdgroupSemanticFields").childAttachments.set(
            n.adgroupSpecPathPlugin,
            e,
            o("AdsChildAttachmentsUtils").getDefaultChildAttachments(i.size),
          );
    }
    function T(e, t, n, r, a, i) {
      if (!n.adgroupCreativePlugin.allowUsingExistingPost()) return e;
      var l = o("AdsUEditorSetPostEditModeMutators").setToUsingExistingPost({
        adgroup: e,
        cachedCreative: null,
        cachedPageID: null,
        defaultPagePost: null,
        specPathPlugin: n.adgroupSpecPathPlugin,
        account: i,
      });
      return x(l, t, n, r, a);
    }
    function D(e, t, n, a) {
      var i,
        l = r("adsCallToActionGetDefaultCallToActionType")(
          n.objective,
          n.promotedObjectType,
        );
      if (
        n.objective === r("AdsAPIObjectives").EVENT_RESPONSES ||
        (n.objective === r("AdsAPIObjectives").LINK_CLICKS &&
          a.objective === r("AdsAPIObjectives").EVENT_RESPONSES &&
          r("AdsAdgroupSemanticFields").callToActionType.get(
            n.adgroupSpecPathPlugin,
            e,
          ) == null)
      )
        return r("AdsAdgroupSemanticFields").callToActionType.set(
          n.adgroupSpecPathPlugin,
          e,
          l,
        );
      var s =
        (i = e.creative) == null || (i = i.object_story_spec) == null
          ? void 0
          : i.video_data;
      if (s && a.objective === r("AdsAPIObjectives").EVENT_RESPONSES)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.call_to_action.value.event_id.delete(
          e,
        );
      var u = R(t, a.adgroupSpecPathPlugin),
        c = o("AdsLinkTypeUtils").isPhoneCallLinkTypeSelected(
          t,
          a.adgroupSpecPathPlugin,
        );
      if (
        n.objective === r("AdsAPIObjectives").LINK_CLICKS &&
        a.objective === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY &&
        c
      ) {
        var d = r("AdsAdgroupSemanticFields").callToActionValue.get(
          a.adgroupSpecPathPlugin,
          t,
        );
        return r("AdsAdgroupSemanticFields").callToActionValue.set(
          n.adgroupSpecPathPlugin,
          e,
          d,
        );
      } else if (
        n.objective === r("AdsAPIObjectives").LINK_CLICKS &&
        n.promotedObjectType === r("AdsPromotedObjectTypes").PHONE_CALL
      )
        return r("AdsAdgroupSemanticFields").callToActionType.set(
          n.adgroupSpecPathPlugin,
          e,
          l,
        );
      if (
        n.objective === r("AdsAPIObjectives").PAGE_LIKES &&
        u === r("AdsUIMediaFormat").SINGLE_VIDEO
      ) {
        var m,
          p = (m = a.page) == null ? void 0 : m.id;
        if (
          r("AdsAdgroupSemanticFields").callToActionValue.isSupported(
            n.adgroupSpecPathPlugin,
            e,
          ) &&
          p != null
        ) {
          var _ =
            r("AdsAdgroupSemanticFields").callToActionValue.get(
              n.adgroupSpecPathPlugin,
              e,
            ) ||
            o(
              "AdsAPIAdgroupCallToActionValueRecord",
            ).createEmptyCallToActionValueFromAdgroup(e);
          return r("AdsAdgroupSemanticFields").callToActionValue.set(
            n.adgroupSpecPathPlugin,
            e,
            _.set("page", p),
          );
        }
      }
      var f = r("AdsAdgroupSemanticFields").callToActionType.get(
        a.adgroupSpecPathPlugin,
        t,
      );
      return f === "NO_BUTTON"
        ? r("AdsAdgroupSemanticFields").callToActionType.set(
            n.adgroupSpecPathPlugin,
            e,
            f,
          )
        : e;
    }
    function x(e, t, n, r, a) {
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsAdgroupPrefillerUtils").prefillUsingPrefillers(
            y(e, t, n, r),
            o("AdsAdgroupPrefillers").orderedPrefillers,
            a,
          );
        },
        function (e) {
          return $(e, t, n, r);
        },
        function (e) {
          return o("AdsAdgroupPrefillerUtils").prefillUsingPrefillers(
            y(e, t, n, r),
            o("AdsAdgroupPrefillers").unorderedPrefillers,
            a,
          );
        },
      )(e);
    }
    function $(e, t, n, a) {
      var i,
        l = r("immutable").Set(
          [
            (i = r("AdsUnifiedCreativeAPIFields")).callToAction,
            i.callToActionType,
            i.callToActionValue,
            i.childAttachments,
            i.imageCrops,
            i.instagramActorID,
            i.instagramUserID,
            i.threadsUserID,
            i.linkURL,
            i.offerID,
            i.pageID,
            i.pageWelcomeMessage,
            i.productSetID,
            i.threadsUserID,
          ].map(function (e) {
            return e.name;
          }),
        ),
        s = Object.keys(i).reduce(function (t, o) {
          return r("AdsUnifiedCreativeAPIFields")[o].isSupported(
            e,
            n.adgroupSpecPathPlugin,
          ) && !l.has(r("AdsUnifiedCreativeAPIFields")[o].name)
            ? t.concat(r("AdsUnifiedCreativeAPIFields")[o])
            : t;
        }, []);
      return o("AdsPrefillAdgroupMutators").mutateAdgroupToPrefill(
        e,
        n.adgroupSpecPathPlugin,
        t,
        a.adgroupSpecPathPlugin,
        s,
      );
    }
    function P(e) {
      var t = e.tracking_specs;
      if (!t) return e;
      var n = t.filter(function (e) {
        return !e.isEmpty();
      });
      return n.isEmpty()
        ? r("AdsAdgroupRecordAccessors").tracking_specs.delete(e)
        : r("AdsAdgroupRecordAccessors").tracking_specs.set(n, e);
    }
    function N(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.object_type,
        i = t.objective;
      return i === r("AdsAPIObjectives").BRAND_AWARENESS &&
        a === r("ApiAdObjectTypes").PHOTO
        ? o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
            r("ApiAdObjectTypes").PHOTO,
            r("ApiAdObjectTypes").SHARE,
            e,
          )
        : e;
    }
    ((l.getAdgroupExtraData = s),
      (l.convertAdgroup = u),
      (l.removeEmptyTrackingSpec = P));
  },
  98,
);
