__d(
  "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupUtils",
    "AdsAssetFeedFieldUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsCreativeBadgeLoggingUtils",
    "AdsDynamicAdObjectsSelectors",
    "AdsEditingAdgroupEditorContext",
    "AdsLinkPostFormat",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPEUploadStore",
    "AdsPageStore",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementLoggerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsVideoStore",
    "AdsWebsiteAdUtils",
    "AdsWhatsAppNumberUtils",
    "PowerEditorConfig.experimental",
    "adsAdgroupSelector_LEGACY",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsMessageMarketingWABASelector",
    "adsMgmtLogger",
    "first",
    "getByPath",
    "immutable",
    "isMessageMarketingEnabledFromCampaign",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDynamicAdObjectsSelectors").getAdsDynamicAdgroupSelector(
        "delivery_status",
      ),
      s = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignSelector(
        "delivery_status",
      ),
      u = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignGroupSelector(
        "delivery_status",
      ),
      c = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "LOGGER"],
        {},
      ),
      d;
    r("requireWeak")("adsAdgroupValidationErrorsSelectors", function (e) {
      d = e;
    });
    var m = function (t, n, o) {
        r("adsMgmtLogger")(t, n, o);
      },
      p = function (t) {
        var e = o("AdsAdgroupUtils").getVideoIDsFromAdgroup(t),
          n = !1;
        return (
          e.forEach(function (e) {
            if (!n) {
              var t = r("AdsVideoStore").get(e);
              n = t.creator_product === 5;
            }
          }),
          n
        );
      },
      _ = function (t) {
        var e = t ? o("AdsAdgroupUtils").getVideoIDsFromAdgroup(t) : [],
          n = e.length;
        return n === 0
          ? "NON_VIDEO"
          : n === 1 && t && !o("AdsChildAttachmentsUtils").isCarouselAd(t)
            ? p(t)
              ? "SLIDESHOW_VIDEO"
              : "SINGLE_VIDEO"
            : "VIDEO_CAROUSEL";
      },
      f = function (t) {
        var e, n, a, l, s, u;
        if (t == null) return null;
        var c = o("AdsPECampaignSelectors")
          .getByFieldsSelector()(
            t.adset_id,
            { id: null, targeting: null },
            i.id,
          )
          .getValue();
        if (c == null) return null;
        var d = o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec(c);
        if (!r("adsInteractivePollHasFbFeedVideoPollSpec")(t, d)) return null;
        var m =
            (e = t.creative) == null || (e = e.asset_feed_spec) == null
              ? void 0
              : e.asset_customization_rules,
          p =
            m == null ||
            (n = m.filter(function (e) {
              var t, n;
              return (
                (e == null ||
                (t = e.customization_spec) == null ||
                (t = t.facebook_positions) == null
                  ? void 0
                  : t.includes("feed")) &&
                !(
                  e != null &&
                  (n = e.customization_spec) != null &&
                  (n = n.instagram_positions) != null &&
                  n.includes("story")
                )
              );
            })) == null
              ? void 0
              : n.map(function (e) {
                  var t;
                  return e == null || (t = e.video_label) == null
                    ? void 0
                    : t.name;
                }),
          _ =
            t == null ||
            (a = t.creative) == null ||
            (a = a.asset_feed_spec) == null
              ? void 0
              : a.videos,
          f =
            p != null &&
            p.length > 0 &&
            _ != null &&
            _.some(function (e) {
              var t,
                n = o("AdsAssetFeedFieldUtils").getAssetInteractivePollSpec(
                  r("immutable").fromJS(e),
                );
              return (
                n != null &&
                ((t = e.adlabels) == null
                  ? void 0
                  : t.some(function (e) {
                      return p.includes(e.name);
                    }))
              );
            }),
          g =
            t == null ||
            (l = t.creative) == null ||
            (l = l.object_story_spec) == null ||
            (l = l.video_data) == null ||
            (l = l.call_to_action) == null ||
            (l = l.value) == null
              ? void 0
              : l.link,
          h =
            t == null ||
            (s = t.creative) == null ||
            (s = s.asset_feed_spec) == null
              ? void 0
              : s.link_urls,
          y =
            h != null && h.length > 0
              ? (u = h[0]) == null
                ? void 0
                : u.website_url
              : null;
        return g != null || y != null
          ? f
            ? "POLL_TO_WATCH_AND_MORE_FACEBOOK_ONLY"
            : "POLL_TO_WATCH_AND_MORE"
          : f
            ? "POLL_ONLY_FACEBOOK_ONLY"
            : "POLL_ONLY";
      },
      g = function () {
        var e = r("AdsPEUploadStore").getPreviewSource();
        return e == null ? null : e;
      },
      h = function (t, n) {
        var e = [];
        d != null && (e = d.combinedErrorsSelector(t));
        var o = c.ENABLE_CLIENT_ERROR_MESSAGE
          ? e.map(function (e) {
              return e.message;
            })
          : [];
        return {
          action_session_id: r("AdsPEUploadStore").getSessionID(),
          ad_account_id_explicit: n,
          field_names: r("AdsAdgroupDraftFragmentStore")
            .getChangedFields(t)
            .toArray(),
          has_client_error: o.length > 0,
          client_error_messages: o,
          event_source: g(),
        };
      },
      y = function (t, n, a) {
        var e, i, l;
        a === void 0 && (a = null);
        var s = t.ad_object_id,
          u = o("AdsPEAdgroupSelectors").getSelector_LEGACY()(s).getValue(),
          c = o("AdsPlacementLoggerUtils").getPlacementsForLogging(
            u == null ? void 0 : u.targeting,
          ),
          d = c,
          m = u == null ? void 0 : u.creative,
          g = r("adsAdgroupSelector_LEGACY")(s).getValue(),
          y = g == null ? void 0 : g.objective,
          C =
            u == null ||
            (e = u.creative) == null ||
            (e = e.object_story_spec) == null ||
            (e = e.video_data) == null ||
            (e = e.call_to_action) == null ||
            (e = e.value) == null
              ? void 0
              : e.link_format,
          b = _(u),
          v = g == null ? void 0 : g.optimizationGoal,
          S = f(u),
          R =
            u == null ||
            (i = u.creative) == null ||
            (i = i.asset_feed_spec) == null
              ? void 0
              : i.optimization_type,
          L,
          E = o("AdsCreativeBadgeLoggingUtils").getCreativeBadgeTypesForLogging(
            u,
          );
        (y === r("AdsAPIObjectives").LINK_CLICKS ||
          y === r("AdsAPIObjectives").CONVERSIONS) &&
          (L = o("AdsCanvasAdUtils").getDestinationType(u));
        var k =
            a != null && a !== r("AdCampaignDestination").UNDEFINED
              ? a
              : g == null
                ? void 0
                : g.promotedObjectType,
          I = babelHelpers.extends(
            {
              adgroup_id: s,
              campaign_id: u == null ? void 0 : u.adset_id,
              campaign_group_id: u == null ? void 0 : u.campaign_id,
              campaign_destination_type: k,
              fragment_id: t.id,
              objective: y,
              link_post_destination: L,
              page_types: d,
              has_object_story_spec: !!(m && m.object_story_spec),
              has_slideshow_video: u ? p(u) : !1,
              call_to_action_link_format: C === void 0 ? null : C,
              media_format: b,
              optimization_goal: v,
              interactive_format: S,
              dco_optimization_type: R,
              ad_creative_badge: E,
              promoted_object_type_variation:
                g == null ? void 0 : g.promotedObjectTypeVariation,
            },
            h(s, n),
          );
        if (o("AdsCollectionsAdUtils").isCollectionsAd(m))
          I = babelHelpers.extends({}, I, {
            link_post_format: r("AdsLinkPostFormat").COLLECTIONS,
          });
        else if (
          u != null &&
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(u)
        ) {
          var T;
          I = babelHelpers.extends({}, I, {
            link_post_format: r("AdsLinkPostFormat").MULTIPLE,
            multi_end_card: o("AdsWebsiteAdUtils").getMultiProductEndCard(u),
            multi_product_count: o("AdsWebsiteAdUtils").getMultiProductCount(u),
            carousel_video_count:
              o("AdsWebsiteAdUtils").getMultiVideoProductCount(u),
            multi_product_optimized:
              (T = u.creative) == null ||
              (T = T.object_story_spec) == null ||
              (T = T.link_data) == null
                ? void 0
                : T.multi_share_optimized,
          });
        } else
          (u == null ||
          (l = u.creative) == null ||
          (l = l.object_story_spec) == null
            ? void 0
            : l.link_data) != null &&
            (I = babelHelpers.extends({}, I, {
              link_post_format: r("AdsLinkPostFormat").SINGLE,
            }));
        return (
          (I = babelHelpers.extends({}, I, {
            old_value: m && m.object_story_id,
            is_duplicated_object: (u == null ? void 0 : u.source_ad_id) != null,
          })),
          I
        );
      },
      C = function (t, n, a, i, l, s, u, c) {
        var e;
        (i === void 0 && (i = null),
          l === void 0 && (l = null),
          s === void 0 && (s = null),
          u === void 0 && (u = null),
          c === void 0 && (c = null));
        var d = t.ad_object_id,
          m = r("adsAdgroupSelector_LEGACY")(d).getValue(),
          p = m == null ? void 0 : m.objective,
          _,
          g = o("AdsPEAdgroupSelectors").getSelector_LEGACY()(d).getValue();
        n != null &&
          n.errorSubCode &&
          (p === r("AdsAPIObjectives").LINK_CLICKS ||
            p === r("AdsAPIObjectives").CONVERSIONS) &&
          (_ = o("AdsCanvasAdUtils").getDestinationType(g));
        var y = o("AdsWebsiteAdUtils").getMultiProductCount(g),
          C = f(g),
          v =
            g == null ||
            (e = g.creative) == null ||
            (e = e.asset_feed_spec) == null
              ? void 0
              : e.optimization_type,
          S = o("AdsCreativeBadgeLoggingUtils").getCreativeBadgeTypesForLogging(
            g,
          ),
          R = b(i, m);
        return babelHelpers.extends({}, h(d, a), {
          adgroup_id: d,
          campaign_destination_type: R,
          error_sub_code: n == null ? void 0 : n.errorSubCode,
          error_message: n == null ? void 0 : n.errorMessage,
          fragment_id: t.id,
          objective: p,
          link_post_destination: _,
          multi_product_count: y,
          link_post_format: g
            ? o("AdsWebsiteAdUtils").getLinkPostFormat(g)
            : null,
          interactive_format: C,
          dco_optimization_type: v,
          ad_creative_badge: S,
          optimization_goal: l,
          promoted_object_type_variation:
            m == null ? void 0 : m.promotedObjectTypeVariation,
          campaign_id: s,
          campaign_group_id: u,
          source: c,
        });
      },
      b = function (t, n) {
        return o(
          "AdsUnifiedProfileVisitUtils",
        ).getIsUnifiedProfileVisitsDestination(t) ||
          o("AdsUEditorMessagingDestinationUtils").isMultiDestination(t)
          ? t
          : n == null
            ? void 0
            : n.promotedObjectType;
      },
      v = function (t, n, o, a, i, l, s, u, c, d, m, p) {
        return {
          action_session_id: r("AdsPEUploadStore").getSessionID(),
          ad_account_id_explicit: t,
          campaign_destination_type: o,
          campaign_group_id: s,
          campaign_id: l,
          error_sub_code: a == null ? void 0 : a.errorSubCode,
          error_message: a == null ? void 0 : a.errorMessage,
          event_source: g(),
          fragment_id: i,
          immediate: u,
          is_default_placements: c,
          meta_message: d,
          object_creation_source: n,
          objective: m,
          page_types: p,
        };
      };
    function S(t, n, r) {
      var o = function (t) {
        var e,
          n = t === void 0 ? {} : t,
          r = n.status,
          o = r === void 0 ? "pending" : r,
          a = n.substatuses,
          i = a === void 0 ? ["in_draft"] : a;
        return ((e = {}), (e.status = o), (e.sub_status = i), e);
      };
      if (n) return o();
      var a;
      switch (r) {
        case "ad": {
          a = e(t).getValue();
          break;
        }
        case "ad_set": {
          a = s(t).getValue();
          break;
        }
        case "campaign": {
          a = u(t).getValue();
          break;
        }
      }
      return o(a || {});
    }
    var R = function (t, n) {
        var e,
          a,
          i =
            t == null ||
            (e = t.creative) == null ||
            (e = e.marketing_message_structured_spec) == null
              ? void 0
              : e.buttons,
          l = !1;
        Array.isArray(i)
          ? (l = i.some(function (e) {
              return e.type === "QUICK_REPLY";
            }))
          : i != null &&
            o("immutable").List.isList(i) &&
            (l = i.some(function (e) {
              return e.get("type") === "QUICK_REPLY";
            }));
        var s = n != null ? r("AdsPageStore").get(n) : null,
          u = s == null || (a = s.business) == null ? void 0 : a.id;
        return { hasPCR: l, pageOwnerBusinessID: u };
      },
      L = function (t) {
        var e,
          n =
            t == null || (e = t.promoted_object) == null
              ? void 0
              : e.whats_app_business_phone_number_id,
          a = !1,
          i = null,
          l = null,
          s = null;
        if (n != null) {
          var u,
            c,
            d =
              (u =
                (c = r("adsMessageMarketingWABASelector")()) == null
                  ? void 0
                  : c.getValue()) != null
                ? u
                : [],
            m = d.find(function (e) {
              return e.whatsAppNumberID === n;
            });
          ((a = o("AdsWhatsAppNumberUtils").isVirtualNumber(
            m == null ? void 0 : m.whatsAppNumber,
          )),
            (i = m == null ? void 0 : m.ownerBusinessID),
            (l =
              i != null && i === r("AdsAccountStore").getSelectedBusinessID()),
            (s = m == null ? void 0 : m.whatsAppBusinessAccountID));
        }
        return {
          is_mm_enabled: o(
            "isMessageMarketingEnabledFromCampaign",
          ).isMessageMarketingEnabledFromCampaign(t),
          whatsAppBusinessPhoneNumberID: n,
          isVirtualPhoneNumber: a,
          phoneNumberOwnerBusinessID: i,
          isPhoneNumberOwnedByEndBusiness: l,
          whatsAppBusinessAccountID: s,
        };
      },
      E = function (t) {
        var e = o("AdsUEditorAdgroupSelectors").adgroups.filterPlainObject(
            function (e) {
              return e.id === t.id;
            },
          ),
          n = o("AdsUEditorCampaignSelectors").campaigns.filterPlainObject(
            function (e) {
              return e.id === t.adset_id;
            },
          ),
          a = o(
            "AdsUEditorCampaignGroupSelectors",
          ).campaignGroups.filterPlainObject(function (e) {
            return e.id === t.campaign_id;
          }),
          i = r("first")(e(r("AdsEditingAdgroupEditorContext"))),
          l = r("first")(n(r("AdsEditingAdgroupEditorContext"))),
          s = r("first")(a(r("AdsEditingAdgroupEditorContext"))),
          u =
            i != null && l != null && s != null
              ? { adgroup: i, campaign: l, campaignGroup: s }
              : null;
        return {
          adObject: u,
          selectedAdgroup: i,
          selectedCampaign: l,
          selectedCampaignGroup: s,
        };
      };
    ((l.log = m),
      (l.getAdgroupSuccessDataForLogging = y),
      (l.getAdgroupFailureDataForLogging = C),
      (l.getCampaignFailureDataForLogging = v),
      (l.getDeliveryStatus = S),
      (l.getMessageMarketingAdgroupDataForLogging = R),
      (l.getMessageMarketingDataForLogging = L),
      (l.getSelectedAdObjectPlain = E));
  },
  98,
);
