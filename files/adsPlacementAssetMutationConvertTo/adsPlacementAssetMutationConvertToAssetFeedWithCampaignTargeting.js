__d(
  "adsPlacementAssetMutationConvertToAssetFeedWithCampaignTargeting",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIObjectives",
    "AdsAdAssetSelectorTypes",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAppUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsMutators",
    "AdsPACSupportedLinkCTAs",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsPromotedObjectTypes",
    "AdsPromotedObjectUtilsShared",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsWhatsAppConstants",
    "AdsWhatsappDestinationAdgroupUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "NonURLLinkCTATypesUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "adsPlacementAssetMutationAddCarouselFromObjectStorySpec",
    "adsPlacementAssetMutationSetAdlabelForAllCustomizations",
    "adsPlacementAssetMutationSetInitialTargetingRule",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel
        ? "CAROUSEL"
        : t
          ? "AUTOMATIC_FORMAT"
          : e === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.image
            ? "SINGLE_IMAGE"
            : "SINGLE_VIDEO";
    }
    function s(t, n, a, i, l, s, u) {
      var c, d;
      s === void 0 && (s = !1);
      var m = e(l, u),
        p = r("AdsAdgroupRecordAccessors").creative.applink_treatment.get(t),
        _ = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.ad_formats.set(r("immutable").List.of(m)),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.optimization_type.set(
            r("ApiDynamicCreativeOptimizationTypes").PLACEMENT,
          ),
        )(
          o("AdsUEditorAdgroupAssetFeedMutators").convertToAssetFeedSpec(
            o("AdsAPIAdgroupRecordUtils").getObjectType(t),
            t,
            a.pivots.objective,
            r("ApiDynamicCreativeOptimizationTypes").PLACEMENT,
          ),
        ),
        f = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset();
      if (l === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel) {
        var g;
        ((_ = o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
          _,
          "CarouselPAC",
        )),
          (_ = r("adsPlacementAssetMutationAddCarouselFromObjectStorySpec")(
            _,
            t,
            f,
          )));
        var h =
          (g = _.creative) == null || (g = g.asset_feed_spec) == null
            ? void 0
            : g.bodies;
        h != null &&
          h.forEach(function (e, t) {
            t !== 0 &&
              (_ = r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.bodies.at(t)
                .delete(_));
          });
      } else
        l === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.image
          ? ((_ = o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
              _,
              "SingleImagePAC",
            )),
            (_ = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
              _,
              a,
              r("AdsUnifiedCreativeAPIFields").imageHash,
              0,
              f,
            )))
          : ((_ = o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
              _,
              "SingleVideoPAC",
            )),
            (_ = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
              _,
              a,
              r("AdsUnifiedCreativeAPIFields").videoID,
              0,
              f,
            )));
      var y = r("immutable").Map();
      if (
        s &&
        l !== o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel
      ) {
        var C = r("adsPlacementAssetMutationSetAdlabelForAllCustomizations")(
          _,
          a,
        );
        (C.newAdlabels.forEach(function (e, t) {
          var n;
          return (
            (y = y.set(t, r("immutable").Map(((n = {}), (n.name = e), n)))),
            !0
          );
        }),
          (_ = C.updatedAdgroup));
      }
      l !== o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel &&
        (_ = r("adsPlacementAssetMutationSetInitialTargetingRule")(
          _,
          l === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.image
            ? "image_label"
            : "video_label",
          f,
          y,
        ));
      var b =
          (c = t.creative) == null || (c = c.object_story_spec) == null
            ? void 0
            : c.link_data,
        v = o("AdsAssetFeedFieldUtils").firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
          r("AdsAdgroupSemanticFields").callToActionType.get(a, _),
        ),
        S = a.pivots.objective,
        R;
      if (S != null) {
        var L = o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(
          S,
        );
        R =
          a &&
          o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
            i,
            S,
            r("adsConvertAdObjectRecordToPlainJS")(n),
            L,
          );
      }
      var E =
          l === o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.carousel &&
          r("AdsPACSupportedLinkCTAs").includes(v),
        k =
          ((b != null && v == null) ||
            (v != null &&
              o("NonURLLinkCTATypesUtils").isUnsupportedCTA(v, i, R)) ||
            E) &&
          !(
            o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
              n.destination_type,
            ) ||
            o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
              o(
                "AdsUEditorUnifiedCreationAwarenessUtils",
              ).getSelectedMessagingType(t),
            )
          );
      if (k) {
        var I,
          T = a.getDefaultCallToActionType(_);
        (o("NonURLLinkCTATypesUtils").isUnsupportedCTA(T, i) &&
          (T = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE"),
          (_ = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_action_types.set(
            r("immutable").List([T]),
            _,
          )));
        var D =
          (I = _.creative) == null || (I = I.asset_feed_spec) == null
            ? void 0
            : I.call_to_actions;
        if (D != null)
          if (E)
            _ = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_to_actions.delete(_);
          else {
            var x, $;
            _ =
              (x =
                ($ = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.at(0).type) == null
                  ? void 0
                  : $.set(T, _)) != null
                ? x
                : _;
          }
      }
      if (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          n.destination_type,
        ) ||
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
          o("AdsUEditorUnifiedCreationAwarenessUtils").getSelectedMessagingType(
            t,
          ),
        )
      ) {
        var P;
        _ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(
          (P = t.creative) == null || (P = P.asset_feed_spec) == null
            ? void 0
            : P.call_to_actions,
          _,
        );
      }
      if (
        ((_ = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).filterOutPlacementsNotSupportedByPAC(
          _,
          (d = i == null ? void 0 : i.capabilities) != null ? d : [],
        )),
        o("AdsWhatsappDestinationAdgroupUtils").hasWhatsappCTAinAFS(_) &&
          a.pivots.objective === r("AdsAPIObjectives").VIDEO_VIEWS &&
          (_ = o("AdsUEditorAdgroupUrlMutators").updateWebsiteUrl(
            _,
            o("AdsWhatsAppConstants").WHATSAPP_API_LINK,
          )),
        o("AdsAssetFeedUtils").shouldAddObjectStoreURLForTrafficAndPromotedApp(
          a.pivots.objective,
          R,
        ))
      ) {
        var N,
          M =
            (N = t.creative) == null ||
            (N = N.object_story_spec) == null ||
            (N = N.link_data) == null ||
            (N = N.call_to_action) == null ||
            (N = N.value) == null
              ? void 0
              : N.object_store_urls;
        _ = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          _,
          a,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          0,
          "object_store_urls",
          M,
        );
      }
      if (
        a.pivots.objective != null &&
        r("AdsAppUtils").hasUnifiedAppStoreForTrafficObjective(
          a.pivots.objective,
          R,
        )
      ) {
        var w,
          A,
          F,
          O,
          B,
          W =
            (w =
              (A = t.creative) == null || (A = A.object_story_spec) == null
                ? void 0
                : A.link_data) != null
              ? w
              : (F = t.creative) == null || (F = F.object_story_spec) == null
                ? void 0
                : F.video_data,
          q =
            W == null || (O = W.call_to_action) == null || (O = O.value) == null
              ? void 0
              : O.android_url,
          U =
            W == null || (B = W.call_to_action) == null || (B = B.value) == null
              ? void 0
              : B.ios_url;
        _ = o("AdsUEditorAdgroupUrlMutators").updatePlatformDeeplinkURLs(
          q,
          U,
          _,
        );
      }
      if (
        (a.pivots.objective === r("AdsAPIObjectives").CONVERSIONS ||
          a.pivots.objective === r("AdsAPIObjectives").OUTCOME_SALES) &&
        R === r("AdsPromotedObjectTypes").WEB_AND_APP
      ) {
        var V,
          H = (V = t.creative) == null ? void 0 : V.omnichannel_link_spec;
        ((_ = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          _,
          a,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          0,
          "omnichannel_link_spec",
          H,
        )),
          (_ = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(p),
          )(_)));
      }
      return _;
    }
    l.default = s;
  },
  98,
);
