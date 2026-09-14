__d(
  "adsCallToActionGetTypesForAdgroup",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsBrandAwarenessUtils",
    "AdsBuyingTypes",
    "AdsCallToActionTypesUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsEditorPostEditMode",
    "AdsInstagramProfileUtils",
    "AdsLeadGenAdGroupUtils",
    "AdsLinkTypeUtils",
    "AdsODAXUtils",
    "AdsOfferState",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignShopAdsUtils",
    "AdsUEditorInstagramUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsWebsiteAdUtils",
    "AdsWebsiteExtensionTypeUtils",
    "AdsWhatsAppDestinationUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
    "adsCallToActionFilterTypesByAdgroupMediaFormat",
    "adsCallToActionFilterTypesByDynamicAdVoice",
    "adsCallToActionFilterTypesByOfferSupport",
    "adsCallToActionFilterTypesForCatalogVertical",
    "adsCallToActionFilterTypesForClickToMessagingAds",
    "adsCallToActionFilterTypesForConversionsObjective",
    "adsCallToActionFilterTypesForInstagramLiveVideoAds",
    "adsCallToActionFilterTypesForLeadFormAds",
    "adsCallToActionFilterTypesForLeadGenObjective",
    "adsCallToActionFilterTypesForMessagingDestinationAds",
    "adsCallToActionFilterTypesForReminderAds",
    "adsCallToActionFilterTypesForStoreVisitsObjective",
    "adsCallToActionFilterTypesForVideoViewObjective",
    "adsCallToActionFilterTypesIfAssetFeedAd",
    "adsCallToActionGetAdgroupLinkURL",
    "adsCallToActionGetOfferStateType",
    "gkx",
    "isInstagramARURL",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["MESSAGE_PAGE", "WHATSAPP_MESSAGE", "INSTAGRAM_MESSAGE"],
      u = s._(/*BTDS*/ "Send message").toString(),
      c = null;
    function d(e) {
      return (
        c == null &&
          (c = babelHelpers.extends({}, e, { short_text: u, text: u })),
        c
      );
    }
    function m(e, t) {
      if (e === r("AdsAPIObjectives").MESSAGES) return !0;
      var n =
        t === r("AdsPromotedObjectTypes").WHATSAPP ||
        t === r("AdsPromotedObjectTypes").MESSENGER ||
        t === r("AdsPromotedObjectTypes").INSTAGRAM;
      return !!(
        (e === r("AdsAPIObjectives").LINK_CLICKS && n) ||
        (e === r("AdsAPIObjectives").CONVERSIONS && n)
      );
    }
    function p(e, t) {
      return t === "INSTAGRAM_DIRECT"
        ? e.filter(function (e) {
            return (
              e.name !== "MESSAGE_PAGE" &&
              e.name !== "WHATSAPP_MESSAGE" &&
              e.name !== "CALL_NOW"
            );
          })
        : t === "MESSENGER"
          ? e.filter(function (e) {
              return (
                e.name !== "INSTAGRAM_MESSAGE" &&
                e.name !== "WHATSAPP_MESSAGE" &&
                e.name !== "CALL_NOW"
              );
            })
          : t === "WHATSAPP"
            ? e.filter(function (e) {
                return (
                  e.name !== "MESSAGE_PAGE" &&
                  e.name !== "INSTAGRAM_MESSAGE" &&
                  e.name !== "CALL_NOW"
                );
              })
            : e;
    }
    function _(e, t, n, a) {
      var i = o(
        "AdsUnifiedProfileVisitUtils",
      ).getIsUnifiedProfileVisitsConversionUnderODAXObjective(t, n);
      if (
        i &&
        a === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
      )
        return e.filter(function (e) {
          return (
            e.name === "VISIT_PROFILE" || e.name === "VIEW_INSTAGRAM_PROFILE"
          );
        });
      var l = e,
        s =
          o(
            "AdsInstagramProfileUtils",
          ).getIsInstagramProfileConversionUnderTrafficObjective(t, n) ||
          (i && a === r("AdCampaignDestination").INSTAGRAM_PROFILE);
      s
        ? (l = l.filter(function (e) {
            return e.name === "VIEW_INSTAGRAM_PROFILE";
          }))
        : (l = l.filter(function (e) {
            return e.name !== "VIEW_INSTAGRAM_PROFILE";
          }));
      var u = i && a === r("AdCampaignDestination").FACEBOOK_PAGE;
      return (
        u
          ? (l = l.filter(function (e) {
              return e.name === "VISIT_PROFILE";
            }))
          : (l = l.filter(function (e) {
              return e.name !== "VISIT_PROFILE";
            })),
        l
      );
    }
    function f(e, t, n, a, i) {
      return !!(
        e === r("AdsPromotedObjectTypes").MESSENGER ||
        e === r("AdsPromotedObjectTypes").INSTAGRAM ||
        e === r("AdsPromotedObjectTypes").WHATSAPP ||
        e === r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT ||
        t ||
        n ||
        (a && o("AdsLinkTypeUtils").isMessagingDestination(i))
      );
    }
    function g(e, t, n, o, a, i, l) {
      switch (t) {
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
          return e.filter(function (e) {
            return (
              (e.name !== "WHATSAPP_MESSAGE" || o) &&
              (e.name !== "CALL_NOW" || (!a && !i))
            );
          });
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          return e.filter(function (e) {
            return e.name !== "WHATSAPP_MESSAGE" || o;
          });
        case r("AdsAPIObjectives").REACH:
          return e.filter(function (e) {
            return (
              (e.name !== "DIAL_CODE" || n) &&
              (e.name !== "WHATSAPP_MESSAGE" || o)
            );
          });
        case r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY:
          return e.filter(function (e) {
            return e.name !== "DIAL_CODE" || n;
          });
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return r("adsCallToActionFilterTypesForLeadGenObjective")(e, l);
        default:
          return e;
      }
    }
    function h(e, t, n) {
      return t
        ? e.filter(function (e) {
            return e.name === n;
          })
        : e.filter(function (e) {
            return e.name !== n;
          });
    }
    function y(e, t, n, a, i, l, s) {
      var u = t.adgroup,
        c = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(t),
        d = e;
      return (
        a === r("AdsAPIObjectives").STORE_VISITS &&
          (d = r("adsCallToActionFilterTypesForStoreVisitsObjective")(
            d,
            u,
            c,
            a,
            s,
          )),
        a === r("AdsAPIObjectives").VIDEO_VIEWS &&
          (d = r("adsCallToActionFilterTypesForVideoViewObjective")(d, n, l)),
        i === r("AdsPromotedObjectTypes").PHONE_CALL &&
          a === r("AdsAPIObjectives").LINK_CLICKS &&
          (d = d.filter(function (e) {
            return e.name === "CALL_NOW";
          })),
        o("AdsBrandAwarenessUtils").isBrandObjective(a) &&
          (d = d.filter(function (e) {
            return e.name !== "CALL_NOW";
          })),
        d
      );
    }
    function C(t, n, a, i, l, s, u, c, C) {
      var b, v;
      (l === void 0 && (l = !1),
        s === void 0 && (s = !1),
        u === void 0 && (u = !1),
        c === void 0 && (c = !1));
      var S = t.adgroup,
        R = t.campaign,
        L = t.campaignGroup,
        E = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(t),
        k = o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(t),
        I = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(t),
        T = r("adsCallToActionGetAdgroupLinkURL")(S, E),
        D =
          (o("AdsBrandAwarenessUtils").isBrandObjective(k) &&
            L.is_odax_campaign_group === !0) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementVideoViews(I, k) ||
          (o("AdsAutomaticFlowUtils").isIGExistingPostAd(S) &&
            o(
              "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
            ).enableUnifiedCreationCTXMDL1(k, R.optimization_goal, !0)) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementPostEngagement(R.optimization_goal, k),
        x = o("AdsODAXUtils").maybeTranslateObjective(
          k,
          I,
          t.campaign.optimization_goal,
        ),
        $ = o("AdsCallToActionTypesUtils").typesForObjective(x, I, T);
      (($ = $.filter(function (e) {
        return e.name !== "BOOK_TEST_DRIVE" && e.name !== "CHECK_AVAILABILITY";
      })),
        ($ = r("adsCallToActionFilterTypesForCatalogVertical")($, a)),
        ($ = r("adsCallToActionFilterTypesByAdgroupMediaFormat")($, x, S)));
      var P = o("AdsAPIAdgroupRecordUtils").getCallToActionType(S, E),
        N =
          o("AdsWhatsAppDestinationUtils").isEligibleForL1WhatsAppDestination(
            x,
            null,
            I,
            t.campaign.optimization_goal,
          ) && o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(S, E);
      x === r("AdsAPIObjectives").CONVERSIONS &&
        ($ = r("adsCallToActionFilterTypesForConversionsObjective")($, I));
      var M =
          x === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY &&
          o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(S, E),
        w = o("AdsLinkTypeUtils").getCurrentMessagingType(S, E),
        A = m(x, I);
      (A &&
        !c &&
        ($ = r("adsCallToActionFilterTypesForClickToMessagingAds")(
          $,
          n,
          I,
          t.campaign,
        )),
        ($ = y($, t, n, x, I, w, s)),
        I === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL &&
          ($ = $.filter(function (e) {
            return (
              e.name !== "BUY_TICKETS" &&
              e.name !== "MESSAGE_PAGE" &&
              e.name !== "WHATSAPP_MESSAGE" &&
              e.name !== "INSTAGRAM_MESSAGE"
            );
          })),
        ($ = _($, x, I, R.destination_type)));
      var F = f(I, N, M, D, w);
      if (F) {
        var O = o("AdsAPIAdgroupRecordUtils").getCallToActionType(S, E);
        (($ = r("adsCallToActionFilterTypesForMessagingDestinationAds")($, O)),
          (N || M) &&
            ($ = $.filter(function (e) {
              return (
                e.name !== "MESSAGE_PAGE" &&
                e.name !== "INSTAGRAM_MESSAGE" &&
                e.name !== "CALL_NOW"
              );
            })),
          D && ($ = p($, w)));
      }
      var B = o(
        "AdsUEditorCampaignShopAdsUtils",
      ).isOmnichannelShopAutomaticCampaign(R);
      B &&
        ($ = $.filter(function (t) {
          return !e.includes(t.name);
        }));
      var W = k === r("AdsAPIObjectives").OUTCOME_SALES,
        q = k === r("AdsAPIObjectives").LINK_CLICKS,
        U =
          I === r("AdsPromotedObjectTypes").WEBSITE ||
          o("AdsWebsiteAdUtils").isWebsiteObjective(x, I),
        V = C === r("AdsEditorPostEditMode").EXISTING,
        H = o(
          "ClickToMessageCTDFeatureGating",
        ).isLeadsIGExistingPostCTAFilterFixEnabled(),
        G =
          (x === r("AdsAPIObjectives").MESSAGES ||
            x === r("AdsAPIObjectives").LINK_CLICKS ||
            x === r("AdsAPIObjectives").CONVERSIONS ||
            (x === r("AdsAPIObjectives").LEAD_GENERATION && H)) &&
          (R.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
            (R.destination_type ===
              r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
              H)) &&
          V,
        z =
          (x === r("AdsAPIObjectives").LINK_CLICKS ||
            x === r("AdsAPIObjectives").CONVERSIONS) &&
          R.destination_type === r("AdCampaignDestination").WHATSAPP &&
          V;
      z &&
        ($ = $.filter(function (e) {
          return e.name === "WHATSAPP_MESSAGE";
        }));
      var j =
        R.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
        o("ClickToMessageCTDFeatureGating").isCTDSingleDestCTAFixEnabled();
      (!G &&
        !o("AdsUEditorInstagramUtils").isEligibleForIGCTA(k, x, I, C, R) &&
        !o("AdsUEditorInstagramUtils").isInstagramDirectDestinationAd(S) &&
        !j &&
        ($ = $.filter(function (e) {
          return e.name !== "INSTAGRAM_MESSAGE" || P === "INSTAGRAM_MESSAGE";
        })),
        U &&
          !(
            V &&
            (W ||
              (q &&
                o(
                  "ClickToMessageCTMAdoptionFeatureGating",
                ).enableSMCTATrafficWebsite(!0))) &&
            I !== r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL
          ) &&
          ($ = $.filter(function (e) {
            return (
              (e.name !== "MESSAGE_PAGE" || P === "MESSAGE_PAGE") &&
              (e.name !== "WHATSAPP_MESSAGE" || P === "WHATSAPP_MESSAGE")
            );
          })),
        ($ = h($, I === r("AdsPromotedObjectTypes").DONATION, "DONATE")),
        o("AdsCampaignLiveVideoAdsUtils").isInstagramLiveVideoAd(
          R.destination_type,
        ) &&
        o("AdsCampaignLiveVideoAdsUtils").getIsCustomizableCTAIgLvaEnabled()
          ? ($ = r("adsCallToActionFilterTypesForInstagramLiveVideoAds")(
              $,
              S,
              E,
            ))
          : ($ = h(
              $,
              I === r("AdsPromotedObjectTypes").LIVE_VIDEO,
              "WATCH_LIVE_VIDEO",
            )),
        ($ = h(
          $,
          I === r("AdsPromotedObjectTypes").REMINDER &&
            o("AdsLinkTypeUtils").isLiveVideoLinkTypeSelected(S, E),
          "JOIN_LIVE_VIDEO",
        )),
        ($ = h($, r("isInstagramARURL")(T), "TRY_IN_CAMERA")),
        x !== r("AdsAPIObjectives").LEAD_GENERATION &&
          o("AdsLeadGenAdGroupUtils").isLeadGenFormEnabled(R, S, E) &&
          ($ = r("adsCallToActionFilterTypesForLeadFormAds")($)),
        l || ($ = r("adsCallToActionFilterTypesIfAssetFeedAd")(S, $)));
      var K = (b = S.creative) == null ? void 0 : b.dynamic_ad_voice;
      (($ = r("adsCallToActionFilterTypesByDynamicAdVoice")($, K)),
        u &&
          ($ = $.filter(function (e) {
            return e.name === "WHATSAPP_MESSAGE";
          })));
      var Q =
        r("adsCallToActionGetOfferStateType")(R, x, S) ===
        r("AdsOfferState").HAS_OFFER;
      $ = r("adsCallToActionFilterTypesByOfferSupport")($, [x], [Q]);
      var X = r("AdsAccountUtils").hasCapabilityFromList(
          n,
          "CAN_USE_DIAL_CODE_CTA",
        ),
        Y = r("AdsAccountUtils").hasCapabilityFromList(
          n,
          "CTW_ADS_FOR_NON_MESSAGES_OBJECTIVE",
        );
      (($ = g(
        $,
        x,
        X,
        Y,
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(S),
        o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(S),
        R.destination_type,
      )),
        i === r("AdsBuyingTypes").RESERVED &&
          ($ = $.filter(function (e) {
            return e.name !== "MESSAGE_PAGE" && e.name !== "WHATSAPP_MESSAGE";
          })));
      var J =
        ((v = L.collaborative_ads_partner_info) == null
          ? void 0
          : v.get("merchant_partner_business_id")) != null;
      (I === r("AdsPromotedObjectTypes").PRODUCT_SET &&
        J &&
        !r("gkx")("21597") &&
        ($ = $.filter(function (e) {
          return e.name !== "MESSAGE_PAGE" && e.name !== "WHATSAPP_MESSAGE";
        })),
        (!J || !r("gkx")("17085")) &&
          ($ = $.filter(function (e) {
            return e.name !== "SHOP_ON_RETAILER";
          })),
        (x === r("AdsAPIObjectives").LINK_CLICKS ||
          x === r("AdsAPIObjectives").CONVERSIONS) &&
          !r("gkx")("22269") &&
          ($ = $.filter(function (e) {
            return e.name !== "GET_EVENT_TICKETS";
          })),
        (x === r("AdsAPIObjectives").MOBILE_APP_INSTALLS ||
          x === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) &&
          ($ = $.filter(function (e) {
            return e.name !== "SEE_MENU" && e.name !== "START_ORDER";
          })),
        I === r("AdsPromotedObjectTypes").REMINDER &&
          ($ = o(
            "adsCallToActionFilterTypesForReminderAds",
          ).adsCallToActionFilterTypesForReminderAds($)),
        ($ = $.filter(function (e) {
          return e.name !== "REMIND_ME";
        })),
        k === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
          !o("AdsLinkTypeUtils").isMessagingAppsLinkTypeSelected(S, E) &&
          (o("AdsWebsiteExtensionTypeUtils").isWhatsAppExtensionTypeSelected(
            S,
          ) && r("gkx")("17392")
            ? ($ = $.filter(function (e) {
                return (
                  e.name !== "WHATSAPP_MESSAGE" &&
                  e.name !== "INSTAGRAM_MESSAGE" &&
                  e.name !== "MESSAGE_PAGE"
                );
              }))
            : o(
                "AdsWebsiteExtensionTypeUtils",
              ).isMessengerExtensionTypeSelected(S) &&
              ($ = $.filter(function (e) {
                return (
                  e.name !== "WHATSAPP_MESSAGE" &&
                  e.name !== "INSTAGRAM_MESSAGE" &&
                  e.name !== "MESSAGE_PAGE"
                );
              }))),
        R.destination_type ===
          r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM &&
          ($ = $.filter(function (e) {
            return e.name !== "MESSAGE_PAGE";
          })),
        x === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
          (o("AdsWebsiteExtensionTypeUtils").isMessengerExtensionTypeSelected(
            S,
          ) ||
            o("AdsWebsiteExtensionTypeUtils").isWhatsAppExtensionTypeSelected(
              S,
            )) &&
          ($ = $.filter(function (e) {
            return (
              e.name !== "WHATSAPP_MESSAGE" &&
              e.name !== "INSTAGRAM_MESSAGE" &&
              e.name !== "MESSAGE_PAGE"
            );
          })));
      var Z =
          o("AdsUEditorMessagingDestinationUtils").destinationIncludesMessenger(
            R.destination_type,
          ) ||
          o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
            R.destination_type,
          ),
        ee =
          !Z &&
          (o(
            "AdsUEditorMessagingDestinationUtils",
          ).destinationIncludesInstagram(R.destination_type) ||
            w === "INSTAGRAM_DIRECT");
      return (
        ee &&
          $.some(function (e) {
            return e.name === "INSTAGRAM_MESSAGE";
          }) &&
          r("gkx")("19593") &&
          ($ = $.map(function (e) {
            return e.name === "INSTAGRAM_MESSAGE" ? d(e) : e;
          })),
        $
      );
    }
    l.default = C;
  },
  226,
);
