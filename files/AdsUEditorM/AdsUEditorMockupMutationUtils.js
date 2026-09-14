__d(
  "AdsUEditorMockupMutationUtils",
  [
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsAudienceDirectConfig",
    "AdsBrandAwarenessUtils",
    "AdsChildAttachmentsUtils",
    "AdsDLOLanguageMutators",
    "AdsDynamicAdCustomizationLanguageMutators",
    "AdsLinkTypeUtils",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorWebsiteMutators",
    "AdsUnifiedCreativeAPIFields",
    "AdsWhatsAppUtils",
    "AdsWildcardAdgroupSpecPathPlugin",
    "FBLogger",
    "adsCallToActionGetDefaultCallToActionType",
    "adsCallToActionGetTypesForAdgroup",
    "gkx",
    "immutable",
    "isMessageMarketingEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.objective,
        a = e.adgroup;
      return n !== r("AdsAPIObjectives").VIDEO_VIEWS ||
        !o("AdsAssetFeedUtils").hasPACAutomaticFormat(a)
        ? e
        : o("AdsAssetFeedUtils").doesAdgroupHaveImages(a)
          ? (r("FBLogger")("ads").mustfix(
              "Trying to set creative with images to single video. Adgroup: %s",
              a.id,
            ),
            e)
          : {
              campaignGroup: e.campaignGroup,
              campaign: e.campaign,
              adgroup: r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.ad_formats.set(
                r("immutable").List.of("SINGLE_VIDEO"),
                a,
              ),
            };
    }
    var s = [e];
    function u(e, t) {
      return s.reduce(function (e, n) {
        return n(e, t);
      }, e);
    }
    function c(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToActionType.get(t, e);
      return n != null && typeof n != "string"
        ? o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").callToAction,
            n
              .map(function (e) {
                var t;
                return r("immutable").Map(((t = {}), (t.type = e), t));
              })
              .toArray(),
          )
        : e;
    }
    function d(e) {
      var t = e.newAdgroup,
        n = e.specPlugin,
        a = e.websiteURL;
      if (
        !o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) ||
        o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t) ||
        o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(t)
      )
        return t;
      var i = r("AdsAdgroupSemanticFields").linkURL.get(n, t);
      if (!(i instanceof r("immutable").List)) return t;
      var l = [];
      return (
        i.forEach(function (e, t) {
          l.push(function (e) {
            return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              e,
              n,
              r("AdsUnifiedCreativeAPIFields").linkURL,
              t,
              "website_url",
              a,
            );
          });
        }),
        o("AdsMutators").chain.apply(o("AdsMutators"), l)(t)
      );
    }
    function m(e) {
      var t = e.campaignGroup,
        n = e.newAdgroup,
        r = e.promotedObjectType,
        a = e.specPlugin,
        i = e.websiteURL,
        l = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(t),
        s = t.objective;
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsUEditorWebsiteMutators").setWebsiteURL({
            adgroup: e,
            campaignGroupPromotedPageID: l,
            objective: s,
            promotedObjectType: r,
            specPlugin: a,
            websiteURL: i,
          });
        },
        function (e) {
          return o("AdsUEditorWebsiteMutators").setWebsiteURLInChildren({
            adgroup: e,
            campaignGroupPromotedPageID: l,
            objective: s,
            promotedObjectType: r,
            specPlugin: a,
            websiteURL: i,
          });
        },
        function (e) {
          return d({ newAdgroup: e, specPlugin: a, websiteURL: i });
        },
      )(n);
    }
    function p(e) {
      var t,
        n = e.campaign,
        a = e.campaignGroup,
        i = e.newAdgroup,
        l = e.promotedObjectType,
        s = e.specPlugin,
        u = (t = n.promoted_object) == null ? void 0 : t.object_store_url;
      return o("AdsMutators").chain(
        function (e) {
          var t,
            n = r("AdsAdgroupSemanticFields").callToActionType.get(s, e);
          if (n) return e;
          var i =
            (t = r("adsCallToActionGetDefaultCallToActionType")(
              a.objective,
              l,
            )) != null
              ? t
              : r("gkx")("14839")
                ? "SEE_DETAILS"
                : "LEARN_MORE";
          return o("AdsUEditorCallToActionMutators").setCallToActionType(
            e,
            i,
            s,
          );
        },
        function (e) {
          return m({
            newAdgroup: e,
            campaignGroup: a,
            promotedObjectType: l,
            specPlugin: s,
            websiteURL: u || "",
          });
        },
        function (e) {
          return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
            e,
            s,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            "adlabels",
          );
        },
      )(i);
    }
    function _(e) {
      var t = e.campaignGroup,
        n = e.newAdgroup,
        a = e.oldAdgroup,
        i = e.promotedObjectType,
        l = e.specPlugin,
        s = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(t),
        u =
          r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(l, a) ||
          o("AdsUEditorMessengerMutators").getDefaultPageWelcomeMessage(
            s,
            t.objective,
          );
      return o("AdsMutators").chain(
        function (e) {
          return c(e, l);
        },
        function (e) {
          return o(
            "AdsUEditorCallToActionMutators",
          ).setCallToActionValueAppDestination(e, l, "MESSENGER");
        },
        function (e) {
          return m({
            newAdgroup: e,
            campaignGroup: t,
            promotedObjectType: i,
            specPlugin: l,
            websiteURL: o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
          });
        },
        function (e) {
          return u != null
            ? o("AdsUEditorMessengerMutators").setPageWelcomeMessage({
                adgroup: e,
                specPlugin: l,
                message: u,
              })
            : e;
        },
      )(n);
    }
    function f(e) {
      var t = e.campaignGroup,
        n = e.newAdgroup,
        r = e.oldAdgroup,
        a = e.promotedObjectType,
        i = e.specPlugin,
        l = o("AdsAPIAdgroupRecordUtils").getLeadGenFormID(r, i);
      return o("AdsMutators").chain(
        function (e) {
          return c(e, i);
        },
        function (e) {
          return o(
            "AdsUEditorCallToActionMutators",
          ).setCallToActionValueLeadGenFormID(e, l, i);
        },
        function (e) {
          return m({
            newAdgroup: e,
            campaignGroup: t,
            promotedObjectType: a,
            specPlugin: i,
            websiteURL: "http://fb.me",
          });
        },
      )(n);
    }
    function g(e) {
      var t = e.newAdgroup;
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.link_data.link.delete(t);
    }
    function h(e) {
      var t = e.mockupAdgroup,
        n = e.newAdgroup,
        a = e.specPlugin,
        i = n,
        l = r("AdsAdgroupSemanticFields").callToActionType.get(a, i),
        s = r("AdsAdgroupSemanticFields").linkURL.get(a, i);
      if (l == null && s != null)
        return r("AdsAdgroupSemanticFields").callToActionType.set(
          a,
          i,
          "NO_BUTTON",
        );
      if (s == null) {
        var u = r("AdsAdgroupSemanticFields").callToActionValue.get(
            r("AdsWildcardAdgroupSpecPathPlugin"),
            t,
          ),
          c = r("AdsAPIAdgroupRecordGetWebsiteURL")(
            t,
            r("AdsWildcardAdgroupSpecPathPlugin"),
          );
        u != null
          ? (i = r("AdsAdgroupSemanticFields").callToActionValue.set(a, i, u))
          : c != null &&
            (i = r("AdsAdgroupSemanticFields").callToActionValue.set(
              a,
              i,
              o("AdsAPIAdgroupCallToActionValueRecord")
                .createEmptyCallToActionValueFromAdgroup(i)
                .set("link", c),
            ));
      }
      return i;
    }
    function y(e) {
      var t = e.campaign,
        n = e.campaignGroup,
        a = e.mockupAdgroup,
        i = e.newAdgroup,
        l = e.oldAdgroup,
        s = n.objective,
        u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          n.objective,
          t,
        ),
        c = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: s,
          promotedObjectType: u,
        });
      return u === r("AdsPromotedObjectTypes").MOBILE_APP ||
        u === r("AdsPromotedObjectTypes").CANVAS_APP
        ? p({
            newAdgroup: i,
            specPlugin: c,
            campaign: t,
            campaignGroup: n,
            promotedObjectType: u,
          })
        : u === r("AdsPromotedObjectTypes").MESSENGER
          ? _({
              oldAdgroup: l,
              newAdgroup: i,
              specPlugin: c,
              campaignGroup: n,
              promotedObjectType: u,
            })
          : s === r("AdsAPIObjectives").LEAD_GENERATION
            ? f({
                oldAdgroup: l,
                newAdgroup: i,
                specPlugin: c,
                campaignGroup: n,
                promotedObjectType: u,
              })
            : s === r("AdsAPIObjectives").EVENT_RESPONSES
              ? g({ newAdgroup: i })
              : s === r("AdsAPIObjectives").POST_ENGAGEMENT
                ? h({ newAdgroup: i, specPlugin: c, mockupAdgroup: a })
                : i;
    }
    function C(e) {
      var t = e.account,
        n = e.campaign,
        a = e.campaignGroup,
        i = e.newAdgroup,
        l = e.newAdgroupSpecPlugin,
        s = e.oldAdgroup,
        u = e.oldAdgroupSpecPlugin,
        c = i,
        d = o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(s, u);
      if (d) {
        var m = o("AdsChildAttachmentsUtils").isCarouselAd(s),
          p = o("AdsODAXUtils").maybeTranslateObjective(a.objective),
          _ = o("AdsBrandAwarenessUtils").isBrandObjective(p);
        if (_) {
          o("AdsAPIAdgroupRecordUtils").isTemplateCreative(c)
            ? (c = o(
                "AdsDynamicAdCustomizationLanguageMutators",
              ).removeCustomizationRuleSpec(c))
            : (c = o("AdsDLOLanguageMutators").removeAdgroupTranslations(c, l));
          var f =
            r("AdsAdgroupSemanticFields").callToActionValue.get(l, c) ||
            o(
              "AdsAPIAdgroupCallToActionValueRecord",
            ).createEmptyCallToActionValueFromAdgroup(c);
          ((f = f.set("app_destination", "WHATSAPP")),
            (f = f.set("link", o("AdsWhatsAppUtils").getDefaultCTALink())),
            (c = r("AdsAdgroupSemanticFields").callToActionValue.set(l, c, f)));
        } else {
          m &&
            (c = o(
              "AdsUEditorAdgroupChildAttachmentsMutators",
            ).mutateChildAttachments(l, c, function (e) {
              return e
                .deleteIn(["call_to_action", "value", "app_destination"])
                .deleteIn(["link"])
                .deleteIn(["call_to_action", "type"]);
            }));
          var g =
            r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS;
          if (c.getIn(g) != null) {
            var h, y;
            c = c.withMutations(function (e) {
              return e.deleteIn(g);
            });
            var C =
              ((h = c.creative) == null || (h = h.asset_feed_spec) == null
                ? void 0
                : h.link_urls) &&
              r("immutable").fromJS(
                (y = c.creative) == null || (y = y.asset_feed_spec) == null
                  ? void 0
                  : y.link_urls.map(function (e) {
                      return e.set("website_url", "");
                    }),
              );
            c = r("AdsAdgroupSemanticFields").linkURL.set(l, c, C);
          }
          if (
            r("AdsAdgroupSemanticFields").callToActionValue.get(l, c) != null
          ) {
            var b,
              v,
              S = r("AdsAdgroupSemanticFields").callToActionValue.get(l, c);
            ((S = (b = S) == null ? void 0 : b.delete("app_destination")),
              (S = (v = S) == null ? void 0 : v.delete("link")),
              (c = r("AdsAdgroupSemanticFields").callToActionValue.set(
                l,
                c,
                S,
              )));
          }
          var R =
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK;
          (c.getIn(R) != null &&
            (c = c.withMutations(function (e) {
              return e.deleteIn(R);
            })),
            (c = c.withMutations(function (e) {
              return e.deleteIn(R);
            })));
          var L = "WHATSAPP_MESSAGE",
            E = r("adsCallToActionGetTypesForAdgroup")(
              { adgroup: c, campaign: n, campaignGroup: a },
              t.capabilities,
            );
          E.find(function (e) {
            return e.name === L;
          }) &&
            (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(c) &&
            !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(c) &&
            !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(c)
              ? (c = r("AdsAdgroupRecordAccessors")
                  .creative.asset_feed_spec.call_to_action_types.index(0)
                  .set(L, c))
              : (c = r("AdsAdgroupSemanticFields").callToActionType.isSupported(
                  l,
                  c,
                )
                  ? r("AdsAdgroupSemanticFields").callToActionType.set(l, c, L)
                  : c));
        }
      }
      return c;
    }
    function b(e) {
      var t = e.campaign,
        n = e.newAdgroup,
        a = e.oldAdgroup,
        i = n,
        l = o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(t);
      if (l) {
        var s;
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.marketing_message_structured_spec.set(
          (s = a.creative) == null
            ? void 0
            : s.marketing_message_structured_spec,
          i,
        );
      }
      return i;
    }
    ((l.prepareMockupAdObjects = u),
      (l.maybePerformPostConvertionActions = y),
      (l.maybeSetWhatsLinkType = C),
      (l.maybeSetMarketingMessageStructuredSpec = b));
  },
  98,
);
