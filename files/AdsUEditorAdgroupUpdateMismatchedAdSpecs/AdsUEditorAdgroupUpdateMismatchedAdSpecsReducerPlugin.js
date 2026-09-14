__d(
  "AdsUEditorAdgroupUpdateMismatchedAdSpecsReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramConstants",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUpdateMismatchedAdSpecsActionFlux",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsWhatsAppConstants",
    "ApiDynamicCreativeOptimizationTypes",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessagingStrings",
    "gkx",
    "immutable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaignDestination,
        n = "MESSENGER",
        a = o("AdsMessengerConstants").MESSENGER_PREFIX,
        i = "MESSAGE_PAGE",
        l = o("AdsMessengerConstants").DEFAULT_HEADLINE.toString();
      return (
        e.isCTWAMismatched ||
        t === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
          ? ((n = "WHATSAPP"),
            (a = o("AdsWhatsAppConstants").WHATSAPP_API_LINK),
            (i = "WHATSAPP_MESSAGE"),
            (l = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(t)
              ? o("ClickToMessagingStrings").DEFAULT_HEADLINE.toString()
              : o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString()))
          : e.isCTDMismatched || e.isCTDMessagesAdWithInvalidCreative
            ? ((n = "INSTAGRAM_DIRECT"),
              (a = o("ClickToMessagingStrings").DEFAULT_INSTAGRAM_LINK),
              (i = "INSTAGRAM_MESSAGE"),
              o(
                "ClickToMessageCTDFeatureGating",
              ).shouldShowCTDCustomHeadline() &&
                (l = o("AdsInstagramConstants").DEFAULT_HEADLINE.toString()))
            : e.isNonPacMultiDestAdWithInvalidOptimizationType &&
              (l = o("ClickToMessagingStrings").DEFAULT_HEADLINE.toString()),
        {
          callToActionAppDestination: n,
          callToActionType: i,
          defaultHeadline: l,
          linkURL: a,
        }
      );
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.parentData;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var l,
                  s,
                  u,
                  c = r("nullthrows")(i.get(a)),
                  d = c.specPlugin,
                  m = n.isCTDMismatched,
                  p = n.isCTMMismatched,
                  _ = n.isCTWAMismatched,
                  f = n.isCTMMessagesAdWithInvalidCreative,
                  g = n.isCTDMessagesAdWithInvalidCreative,
                  h = n.isNonPacMultiDestAdWithInvalidOptimizationType,
                  y = n.isMultiDestAdWithInvalidIsClickToMessageFlag,
                  C = n.isMultiDestAdWithInvalidAppDestinations,
                  b = n.isMultiDestAdWithMissingToplineCTAType,
                  v = n.isSingleDestWithInvalidAFS,
                  S = n.uniformInstagramActorID,
                  R = n.uniformInstagramUserID,
                  L = o("AdsChildAttachmentsUtils").isCarouselAd(t),
                  E = n.campaignDestination,
                  k = e(n),
                  I = k.callToActionAppDestination,
                  T = k.callToActionType,
                  D = k.defaultHeadline,
                  x = k.linkURL,
                  $ = T,
                  P =
                    (l =
                      (s = t.creative) == null ||
                      (s = s.asset_feed_spec) == null ||
                      (s = s.call_to_action_types) == null
                        ? void 0
                        : s.first()) != null
                      ? l
                      : (u = t.creative) == null ||
                          (u = u.object_story_spec) == null ||
                          (u = u.link_data) == null ||
                          (u = u.call_to_action) == null
                        ? void 0
                        : u.type;
                return (
                  P != null &&
                    o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).isCustomizedCTA(P) &&
                    ($ = P),
                  o("AdsMutators").chain(
                    function (e) {
                      return v
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.asset_feed_spec.delete(e)
                        : e;
                    },
                    function (e) {
                      return f || g
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.link_data.attachment_style.delete(
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionValueAppDestination(e, d, I);
                    },
                    function (e) {
                      return (
                        r("gkx")("15865") ? r("isTruthy")(R) : r("isTruthy")(S)
                      )
                        ? o(
                            "AdsIGIDv2SemanticFields",
                          ).IGIDV2SemanticFields.instagramUserID.set(d, e, S, R)
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsUEditorMessagingDestinationUtils",
                      ).isMultiDestination(E) &&
                        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                        ? e
                        : r("AdsAdgroupSemanticFields").linkURL.set(d, e, x);
                    },
                    function (e) {
                      return _ || p || m
                        ? o(
                            "AdsUEditorCallToActionMutators",
                          ).setCallToActionType(e, T, d)
                        : e;
                    },
                    function (e) {
                      return _ ||
                        p ||
                        f ||
                        (o(
                          "ClickToMessageCTDFeatureGating",
                        ).shouldShowCTDCustomHeadline() &&
                          (m || g)) ||
                        h
                        ? r("AdsAdgroupSemanticFields").headline.set(d, e, D)
                        : o(
                              "AdsUEditorMessagingDestinationUtils",
                            ).isMultiDestination(E)
                          ? e
                          : r("AdsAdgroupSemanticFields").headline.delete(d, e);
                    },
                    function (e) {
                      return _ || p || f
                        ? o(
                            "AdsUEditorCallToActionMutators",
                          ).deleteCallToActionValueAppLink(e, d)
                        : e;
                    },
                    function (e) {
                      return L
                        ? o(
                            "AdsUEditorAdgroupMultiProductMutators",
                          ).setInEachChild(
                            r("AdsAPIChildAttachmentPaths").LINK,
                            x,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return L && (_ || p || f || h)
                        ? o(
                            "AdsUEditorAdgroupMultiProductMutators",
                          ).setInEachChild(
                            r("AdsAPIChildAttachmentPaths").NAME,
                            D,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return L && m
                        ? o(
                            "AdsUEditorAdgroupMultiProductMutators",
                          ).deleteInEachChild(
                            r("AdsAPIChildAttachmentPaths").NAME,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return h &&
                        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
                        !o("AdsAssetFeedUtils").isDofAdgroupFromSpec(e)
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.asset_feed_spec.optimization_type.set(
                            r("ApiDynamicCreativeOptimizationTypes")
                              .DOF_MESSAGING_DESTINATION,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return h || y
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.asset_feed_spec.additional_data.is_click_to_message.set(
                            !0,
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      return b || C
                        ? o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                          ? r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.asset_feed_spec.call_to_action_types.set(
                              r("immutable").List([$]),
                              e,
                            )
                          : r("AdsAdgroupSemanticFields").callToActionType.set(
                              d,
                              e,
                              $,
                            )
                        : e;
                    },
                    function (e) {
                      return h || C
                        ? o(
                            "AdsUEditorUnifiedCreationAdgroupMutators",
                          ).setCTAValues(
                            e,
                            E,
                            $,
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.object_story_spec.page_id.get(e),
                          )
                        : e;
                    },
                  )(t)
                );
              },
            );
          },
          o("AdsUEditorAdgroupUpdateMismatchedAdSpecsActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
