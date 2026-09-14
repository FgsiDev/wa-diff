__d(
  "AdsUEditorAdgroupSetHasCanvasLinkReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCallAddonUtils",
    "AdsCanvasConstants",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdCustomizationFieldMutators",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetHasCanvasLinkDataActionFlux",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignShopAdsUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsWhatsAppDestinationUtils",
    "ApiAdObjectTypes",
    "IsReminderAd",
    "ProductBrowsingAdsUtils",
    "adsL1AdCanSinglePhotoHaveCTA",
    "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
    "adsUEditorAccountSelector",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "";
    function s(e, t, n) {
      var a = e;
      if (n)
        ((a = r("AdsAdgroupSemanticFields").callToActionType.set(
          t,
          a,
          r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
        )),
          (a = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, a, function (e) {
            return e
              .setIn(
                ["call_to_action", "type"],
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              )
              .deleteIn(["link"])
              .deleteIn(["call_to_action", "value", "lead_gen_form_id"]);
          })),
          (a = r("AdsAdgroupSemanticFields").multiShareEndCard.isSupported(t, a)
            ? r("AdsAdgroupSemanticFields").multiShareEndCard.set(t, a, !0)
            : a));
      else {
        var i = r("nullthrows")(
          r("AdsUnifiedCreativeAPIFields").callToActionValue.getPath(a, t),
        ).slice(0, -1);
        ((a = a.deleteIn(i)),
          (a = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, a, function (e) {
            return e
              .deleteIn(["call_to_action"])
              .setIn(["link"], o("AdsCanvasConstants").EMPTY_CANVAS_LINK);
          })),
          (a = r("AdsAdgroupSemanticFields").multiShareEndCard.delete(t, a)));
      }
      return a;
    }
    function u(e, t) {
      return o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
        o("AdsAdgroupTypeUtils").isVideoAd(e)
          ? r("ApiAdObjectTypes").VIDEO
          : o("AdsAPIAdgroupRecordUtils").getObjectType(e),
        e,
        t,
      );
    }
    function c(e, t, n) {
      return n
        ? o(
            "AdsAdgroupWebsiteLinkPostTypeMutators",
          ).convertToHasNoWebsiteLinkFormat(e, t)
        : o(
            "AdsAdgroupWebsiteLinkPostTypeMutators",
          ).convertToHasWebsiteLinkFormat(e, t);
    }
    function d(t, n, a) {
      var i = t;
      if (!a)
        ((i = o("AdsDynamicAdCustomizationFieldMutators").removeAllCanvasLink(
          i,
        )),
          (i = o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").callToActionType.set(
                n,
                e,
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              );
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").linkURL.set(
                n,
                e,
                o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
              );
            },
          )(i)));
      else {
        var l = n.getDefaultCallToActionType(i);
        if (l === "NO_BUTTON") {
          var s = r("nullthrows")(
              r("AdsUnifiedCreativeAPIFields").callToActionType.getPath(i, n),
            ),
            u = r("nullthrows")(s.slice(0, -1));
          return i.deleteIn(u);
        } else
          i = o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").callToActionType.set(
                n,
                e,
                l,
              );
            },
            function (t) {
              return r("AdsAdgroupSemanticFields").linkURL.set(n, t, e);
            },
          )(i);
      }
      return i;
    }
    function m(t, n, a) {
      var i = t;
      if (!a)
        ((i = o("AdsDynamicAdCustomizationFieldMutators").removeAllCanvasLink(
          i,
        )),
          (i = r("AdsAdgroupSemanticFields").callToActionType.set(
            n,
            i,
            r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
          )),
          (i = r("AdsAdgroupSemanticFields").linkURL.set(
            n,
            i,
            o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
          )));
      else {
        var l = n.getDefaultCallToActionType(i);
        l !== "NO_BUTTON" &&
          ((i = r("AdsAdgroupSemanticFields").callToActionType.set(n, i, l)),
          (i = r("AdsAdgroupSemanticFields").linkURL.set(n, i, e)));
      }
      return i;
    }
    function p(e, t, n) {
      var a,
        i = e,
        l = t.campaign,
        s = t.specPlugin,
        u = (a = l.promoted_object) == null ? void 0 : a.object_store_url;
      if (u == null) {
        var c,
          d = (c = l.promoted_object) == null ? void 0 : c.object_store_urls;
        u = d != null ? d.first() : null;
      }
      var m = n ? u : o("AdsCanvasConstants").EMPTY_CANVAS_LINK;
      i = o("AdsUEditorCallToActionMutators").setCallToActionLink({
        link: m,
        adgroup: i,
        specPlugin: s,
      });
      var p = s.getDefaultCallToActionType(i);
      return o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").linkURL.set(s, e, m);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").callToActionType.set(s, e, p);
        },
      )(i);
    }
    function _(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d = e,
        m = (s = e.creative) == null ? void 0 : s.asset_feed_spec,
        p = m == null ? void 0 : m.link_urls,
        _ = (p || []).reduce(function (e, t) {
          var n = e;
          return (
            t.get("adlabels") != null && (n = n.concat(t.get("adlabels"))),
            n
          );
        }, r("immutable").List()),
        f = (u = n.promoted_object) == null ? void 0 : u.object_store_url,
        g = a ? (i ? f : "") : o("AdsCanvasConstants").EMPTY_CANVAS_LINK,
        h = r("immutable").fromJS([
          ((c = {}),
          (c.website_url = g),
          (c.display_url = ""),
          (c.adlabels = _),
          c),
        ]);
      d = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.link_urls.set(
        h,
        d,
      );
      var y = t.getDefaultCallToActionType(e);
      if (
        ((m == null ? void 0 : m.call_to_actions) != null &&
          (o("AdsWhatsAppDestinationUtils").isEligibleForL1WhatsAppDestination(
            l,
            t,
          ) && o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(e, t)
            ? (d = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_actions.delete(d))
            : (d = d.updateIn(
                [].concat(
                  r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                    .CALL_TO_ACTIONS,
                  ["0"],
                ),
                function (e) {
                  return e.set("type", y).setIn(["value", "link"], g);
                },
              ))),
        y !== "NO_BUTTON" &&
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_action_types.set(
            r("immutable").List([y]),
            d,
          )),
        !a)
      ) {
        var C = m == null ? void 0 : m.asset_customization_rules;
        if (C == null) return d;
        var b = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).convertTargetingRulesListToPlacementList(C, null, !0),
          v = b.filter(function (e) {
            return o(
              "AdsPlacementAssetEligibilityUtils",
            ).isEligiblePlacementForIXPlacementAssetCustomization(e);
          }),
          S = r("immutable").Set(b).subtract(v);
        d = r(
          "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
        )(d, t, S.toList());
      }
      return d;
    }
    var f = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l = e,
                  f = r("nullthrows")(a.get(n)),
                  g = f.campaign,
                  h = f.campaignGroup,
                  y = f.specPlugin;
                if (
                  (!o("IsReminderAd").isReminderAdFromSpecPlugin(y) &&
                    !t.isChecked &&
                    (l = o(
                      "AdsUEditorAdgroupUpcomingEventsMutator",
                    ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                      l,
                      o("AdsUEditorAdgroupUpcomingEventsMutator")
                        .ResetUpcomingEventSpecReason
                        .INCOMPATIBLE_DESTINATION_TYPE,
                    )),
                  t.useMultiLanguageDialog === !0)
                )
                  return l;
                l = o("ProductBrowsingAdsUtils").maybeUpdateProductBrowsingSpec(
                  l,
                  !1,
                  null,
                  h,
                  g,
                  "canvas_toggle",
                  t.isChecked ? null : "instant_experience",
                );
                var C = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: g, campaignGroup: h }),
                  b = o("AdsODAXUtils").maybeTranslateObjective(
                    h.objective,
                    C,
                    g.optimization_goal,
                  ),
                  v = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(h),
                  S = r("AdsAppUtils").isMobileAppObjective(h.objective, C);
                if (
                  o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(l)
                ) {
                  if (
                    o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l) &&
                    !o("AdsAssetFeedUtils").hasCarouselFormat(l)
                  )
                    return _(l, y, g, t.isChecked, S, b);
                  !o("AdsAssetFeedUtils").isDofAdgroupFromSpec(l) &&
                    !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                      l,
                    ) &&
                    (l = u(l, b));
                }
                if (
                  ((r("adsL1AdCanSinglePhotoHaveCTA")(b) ||
                    !r("AdsAdgroupSemanticFields").linkURL.isSupported(y, l)) &&
                    !o("AdsChildAttachmentsUtils").isCarouselAd(l) &&
                    (l = c(l, y, t.isChecked)),
                  r("AdsAdgroupSemanticFields").callToActionValue.isSupported(
                    y,
                    l,
                  ))
                ) {
                  var R, L;
                  ((l = r("AdsAdgroupSemanticFields").callToActionValue.set(
                    y,
                    l,
                    (R = r("AdsAdgroupSemanticFields").callToActionValue.get(
                      y,
                      l,
                    )) == null
                      ? void 0
                      : R.delete("lead_gen_form_id"),
                  )),
                    ((o(
                      "AdsWhatsAppDestinationUtils",
                    ).isEligibleForL1WhatsAppDestination(
                      h.objective,
                      null,
                      C,
                      g.optimization_goal,
                    ) &&
                      o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(l, y)) ||
                      (o("AdsBrandAwarenessUtils").isBrandObjective(
                        h.objective,
                      ) &&
                        o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(
                          l,
                          y,
                        ) &&
                        h.is_odax_campaign_group === !0)) &&
                      ((l = o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueAppLink(l, y)),
                      (l = o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueLink(l, y))),
                    (l = r("AdsAdgroupSemanticFields").callToActionValue.set(
                      y,
                      l,
                      (L = r("AdsAdgroupSemanticFields").callToActionValue.get(
                        y,
                        l,
                      )) == null
                        ? void 0
                        : L.delete("app_destination"),
                    )),
                    (l = o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueWhatsAppNumber(l, y)));
                }
                return (
                  (l = o("AdsCallAddonUtils").clearCallExtensionFields(l, y)),
                  (l = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).cleanWebsiteExtensionFields(l)),
                  (l = o(
                    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                  ).cleanLeadNurtureChannelsField(l)),
                  (l = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.playable_asset_id.delete(l)),
                  o(
                    "AdsUEditorCampaignShopAdsUtils",
                  ).isOmnichannelShopAutomaticCampaign(g) &&
                    (l = o(
                      "AdsUEditorAdgroupShopAdsUtils",
                    ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(l)),
                  ((i = l.creative) == null || (i = i.branded_content) == null
                    ? void 0
                    : i.promoted_page_id) != null &&
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.promoted_page_id.delete(l)),
                  o("AdsChildAttachmentsUtils").isCarouselAd(l)
                    ? ((l = m(l, y, t.isChecked)), (l = s(l, y, t.isChecked)))
                    : r(
                        "AdsAdgroupSemanticFields",
                      ).callToActionType.isSupported(y, l) &&
                      (S
                        ? (l = p(
                            l,
                            {
                              campaign: g,
                              campaignGroupPromotedPageID: v,
                              promotedObjectType: C,
                              specPlugin: y,
                            },
                            t.isChecked,
                          ))
                        : o("AdsAdgroupTypeUtils").isVideoAd(l)
                          ? (l = d(l, y, t.isChecked))
                          : (l = m(l, y, t.isChecked))),
                  l
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetHasCanvasLinkDataActionFlux").actionType,
        ),
      },
      g = f;
    l.default = g;
  },
  98,
);
