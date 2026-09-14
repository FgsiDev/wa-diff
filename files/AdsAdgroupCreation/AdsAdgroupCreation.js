__d(
  "AdsAdgroupCreation",
  [
    "fbt",
    "invariant",
    "AdsAPICampaignRecord",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsActionSpecUtils",
    "AdsAppUtils",
    "AdsBuyingTypes",
    "AdsCampaignBidUtils",
    "AdsConversionPixelStatusUI",
    "AdsConversionPixelStore",
    "AdsCreativeSpecTypes",
    "AdsLinkPostFormat",
    "AdsLoadStateUtils_LEGACY",
    "AdsLocalAwarenessUtils",
    "AdsLocalUtils",
    "AdsMessengerConstants",
    "AdsObjectTypeUtils",
    "AdsPixelPromotedObjectUtil",
    "AdsPixelProvider",
    "AdsPixelStatus",
    "AdsPixelStatusEnum",
    "AdsPixelStoreUtil",
    "AdsPromotedObjectTypes",
    "AdsTemplateDataDefaultsStoreUtils",
    "AdsTokensConstants",
    "AdsWhatsAppUtils",
    "DynamicTemplatePageFields",
    "OfferComposerConstants.react",
    "PowerEditorConfig.experimental",
    "adsCallToActionGetDefaultCallToActionType",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = ((e = {}), (e.status = "ACTIVE"), (e.display_sequence = 0), e);
    function d(e, t, n) {
      var r;
      return babelHelpers.extends(
        {},
        m(n),
        ((r = {}), (r.adset_id = e), (r.campaign_id = t), r),
      );
    }
    function m(e) {
      return babelHelpers.extends({}, c, { account_id: e.account_id });
    }
    function p(e, t, n, r, a, i, l, s, d) {
      var m;
      (n || u(0, 18952),
        r && o("AdsLoadStateUtils_LEGACY").enforceLoaded(r),
        d && o("AdsLoadStateUtils_LEGACY").enforceLoaded(d));
      var p = e.id,
        f = t.id;
      if (!p || !f) {
        var g = new Error(
          "[AdsAdgroupCreation.getDefaults] adsetID or campaignID are missing",
        );
        throw (g.stack, g);
      }
      return babelHelpers.extends(
        {},
        c,
        ((m = { account_id: n.account_id }),
        (m.adset_id = p),
        (m.campaign_id = f),
        (m.creative = _(t, e, a, i, l, s, d)),
        m),
        A(t),
        O(e, t, n),
      );
    }
    function _(e, t, n, a, i, l, s) {
      var u,
        c,
        d = {},
        m = e.objective;
      if (m) {
        var p = o("AdsObjectTypeUtils").getDefaultObjectType(m);
        p && (d.object_type = p);
      }
      var _ = (u = t.promoted_object) == null ? void 0 : u.product_set_id;
      if (
        (_ && (d.product_set_id = _), m === r("AdsAPIObjectives").PAGE_LIKES)
      ) {
        var g,
          h = (g = t.promoted_object) == null ? void 0 : g.page_id;
        h && (d.object_id = h);
      }
      var y = f(t, e, n, a, i, _, l, s);
      y && (d.object_story_spec = y);
      var C = w(t);
      if (
        (C && (d.link_url = C),
        o("AdsLocalAwarenessUtils").isADLACampaign(
          m,
          (c = e.promoted_object) == null ? void 0 : c.page_id,
        ))
      ) {
        if (m !== r("AdsAPIObjectives").STORE_VISITS) {
          var b;
          d.place_page_set_id =
            (b = t.promoted_object) == null ? void 0 : b.place_page_set_id;
        }
        d.dynamic_ad_voice = "STORY_OWNER";
      }
      return d;
    }
    function f(e, t, n, o, a, i, l, s) {
      var u = h(e, t, o, a, i, l, s),
        c = t.buying_type;
      if (c === r("AdsBuyingTypes").RESERVED && n) {
        var d = n.destination_id,
          m = t.objective;
        d &&
          !r("AdsAppUtils").isAppObjective(m, l) &&
          (u || (u = {}), (u.page_id = d));
        var p = n.instagram_destination_id;
        ((u = u || {}), (u.instagram_actor_id = p));
      }
      return u;
    }
    function g(e, t, n, o, a) {
      return a
        ? b(e, t, o, n)
        : n === r("AdsLinkPostFormat").MULTIPLE
          ? v(e, t, o)
          : n === r("AdsLinkPostFormat").SINGLE
            ? M(e, t, o)
            : {};
    }
    function h(e, t, n, a, i, l, s) {
      var u = t.objective,
        c = r("AdsAccountStore").get(e.account_id).getValue();
      switch (u) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").EVENT_RESPONSES:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").REACH:
          return {};
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
          return R(c);
        case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
        case r("AdsAPIObjectives").APP_INSTALLS:
          return g(e, t, n, a, i);
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return n === r("AdsLinkPostFormat").MULTIPLE ? k(e, t) : E(e, t);
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").CONVERSIONS:
          return r("AdsAppUtils").isAppObjective(u, l)
            ? g(e, t, n, a, i)
            : l === r("AdsPromotedObjectTypes").PRODUCT_SET
              ? R(c)
              : l === r("AdsPromotedObjectTypes").MESSENGER
                ? C(e, t, a, n)
                : l === r("AdsPromotedObjectTypes").WHATSAPP
                  ? y(e, t)
                  : n === r("AdsLinkPostFormat").MULTIPLE
                    ? F(e, t)
                    : {};
        case r("AdsAPIObjectives").OFFER_CLAIMS:
          return I(e, t, s);
        case o("AdsLocalUtils").isLocalObjectiveSwitch(u):
          return T(e, t, a, n);
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
          return D(a);
        case r("AdsAPIObjectives").MESSAGES:
          return l === r("AdsPromotedObjectTypes").WHATSAPP
            ? y(e, t)
            : C(e, t, a, n);
        case r("AdsAPIObjectives").PAGE_LIKES:
          return L(t);
      }
    }
    function y(e, t, n, a) {
      var i = n ? n.id : null,
        l = N(t, r("AdsPromotedObjectTypes").WHATSAPP),
        s = o("AdsWhatsAppUtils").getDefaultCTALink();
      return a === r("AdsLinkPostFormat").MULTIPLE
        ? {
            link_data: {
              link: s,
              multi_share_optimized: !1,
              call_to_action: babelHelpers.extends({}, l, {
                value: { app_destination: "WHATSAPP" },
              }),
              child_attachments: [
                {
                  link: s,
                  call_to_action: babelHelpers.extends({}, l, {
                    value: { app_destination: "WHATSAPP" },
                  }),
                },
                {
                  link: s,
                  call_to_action: babelHelpers.extends({}, l, {
                    value: { app_destination: "WHATSAPP" },
                  }),
                },
                {
                  link: s,
                  call_to_action: babelHelpers.extends({}, l, {
                    value: { app_destination: "WHATSAPP" },
                  }),
                },
              ],
            },
            page_id: i,
          }
        : {
            link_data: {
              link: s,
              multi_share_optimized: !1,
              call_to_action: babelHelpers.extends({}, l, {
                value: { app_destination: "WHATSAPP" },
              }),
            },
            page_id: i,
          };
    }
    function C(e, t, n, a) {
      var i = n ? n.id : null,
        l = N(t, r("AdsPromotedObjectTypes").MESSENGER),
        s = o("AdsMessengerConstants").EMPTY_MESSENGER_LINK;
      return a === r("AdsLinkPostFormat").MULTIPLE
        ? {
            link_data: {
              link: s,
              multi_share_optimized: !1,
              call_to_action: babelHelpers.extends({}, l, {
                value: { app_destination: "MESSENGER" },
              }),
              child_attachments: [
                {
                  link: s,
                  call_to_action: babelHelpers.extends({}, l, {
                    value: { app_destination: "MESSENGER" },
                  }),
                },
                {
                  link: s,
                  call_to_action: babelHelpers.extends({}, l, {
                    value: { app_destination: "MESSENGER" },
                  }),
                },
                {
                  link: s,
                  call_to_action: babelHelpers.extends({}, l, {
                    value: { app_destination: "MESSENGER" },
                  }),
                },
              ],
            },
            page_id: i,
          }
        : {
            link_data: {
              link: s,
              multi_share_optimized: !1,
              call_to_action: babelHelpers.extends({}, l, {
                value: { app_destination: "MESSENGER" },
              }),
            },
            page_id: i,
          };
    }
    function b(e, t, n, o) {
      var a,
        i,
        l,
        s = (a = e.promoted_object) == null ? void 0 : a.object_store_url,
        u = n ? n.id : null,
        c = r("AdsAccountStore").get(e.account_id).getValue();
      return (
        (l = {}),
        (l.template_data = babelHelpers.extends(
          {},
          S(o === r("AdsLinkPostFormat").MULTIPLE, c),
          ((i = {}), (i.link = s), i),
        )),
        (l.page_id = u),
        l
      );
    }
    function v(e, t, n) {
      var o,
        a = (o = e.promoted_object) == null ? void 0 : o.object_store_url,
        i = n ? n.id : null,
        l = N(t, r("AdsPromotedObjectTypes").MOBILE_APP);
      return a
        ? {
            link_data: {
              link: a,
              multi_share_optimized: !0,
              call_to_action: babelHelpers.extends({}, l, {
                value: { link: a },
              }),
              child_attachments: [
                { link: a, call_to_action: babelHelpers.extends({}, l) },
                { link: a, call_to_action: babelHelpers.extends({}, l) },
                { link: a, call_to_action: babelHelpers.extends({}, l) },
              ],
            },
            page_id: i,
          }
        : {
            link_data: {
              multi_share_optimized: !0,
              call_to_action: babelHelpers.extends({}, l),
              child_attachments: [
                { call_to_action: babelHelpers.extends({}, l) },
                { call_to_action: babelHelpers.extends({}, l) },
                { call_to_action: babelHelpers.extends({}, l) },
              ],
            },
            page_id: i,
          };
    }
    function S(e, t) {
      var n,
        r =
          ((n = {}),
          (n.multi_share_end_card = o(
            "AdsTemplateDataDefaultsStoreUtils",
          ).getMultiShareEndCardDefault()),
          (n.name = o("AdsTemplateDataDefaultsStoreUtils").getStringDefault(
            "name",
          )),
          (n.description = o(
            "AdsTemplateDataDefaultsStoreUtils",
          ).getStringDefault("description")),
          n);
      if (!e) {
        var a;
        return babelHelpers.extends(
          ((a = {}), (a.force_single_link = !0), a),
          r,
        );
      }
      return babelHelpers.extends({}, r);
    }
    function R(e) {
      var t;
      return (
        (t = {}),
        (t.template_data = babelHelpers.extends({}, S(!0, e))),
        t
      );
    }
    function L(e) {
      var t, n;
      return (
        (n = {}),
        (n.link_data =
          ((t = {}), (t.call_to_action = babelHelpers.extends({}, N(e))), t)),
        n
      );
    }
    function E(e, t) {
      var n,
        r = (n = e.promoted_object) == null ? void 0 : n.page_id,
        o = r ? { page_id: r } : {};
      return babelHelpers.extends(
        {
          link_data: {
            link: "http://fb.me",
            call_to_action: babelHelpers.extends({}, N(t)),
          },
        },
        o,
      );
    }
    function k(e, t) {
      var n,
        r = (n = e.promoted_object) == null ? void 0 : n.page_id,
        o = r ? { page_id: r } : {},
        a = {
          link: "http://fb.me",
          call_to_action: babelHelpers.extends({}, N(t)),
        };
      return babelHelpers.extends(
        {
          link_data: babelHelpers.extends({}, a, {
            multi_share_optimized: !0,
            child_attachments: [
              babelHelpers.extends({}, a),
              babelHelpers.extends({}, a),
              babelHelpers.extends({}, a),
            ],
          }),
        },
        o,
      );
    }
    function I(e, t, n) {
      var a;
      r("vulture")("qdlh7d-dhIRcfw2B5HKPm9DL5Sk=");
      var i = (a = e.promoted_object) == null ? void 0 : a.page_id,
        l = n ? n.id : void 0,
        s = void 0;
      if (n) {
        var u = n.redemption_link;
        (n.location_type === "offline" &&
          (u = o("OfferComposerConstants.react").IN_STORE_OFFER_URL),
          (s = u));
      }
      return {
        link_data: {
          multi_share_optimized: !1,
          multi_share_end_card: !1,
          offer_id: l,
          call_to_action: babelHelpers.extends({}, N(t)),
          link: s,
        },
        page_id: i,
      };
    }
    function T(e, t, n, o) {
      var a,
        i,
        l,
        s,
        u = (a = t.promoted_object) == null ? void 0 : a.page_id,
        c = (i = e.promoted_object) == null ? void 0 : i.page_id,
        d = u || c,
        m = d ? { page_id: d } : {},
        p = {},
        _ = {},
        f = !1;
      return (
        n && (u ? ((f = !0), (_ = $(e, t, n, o))) : c && (p = P(e, t, n, o))),
        f
          ? babelHelpers.extends(
              ((l = {}), (l[r("AdsCreativeSpecTypes").TEMPLATE_DATA] = _), l),
              m,
            )
          : babelHelpers.extends(
              ((s = {}), (s[r("AdsCreativeSpecTypes").LINK_DATA] = p), s),
              m,
            )
      );
    }
    function D(e) {
      return e ? { page_id: e.id } : {};
    }
    function x() {
      var e = o("AdsTokensConstants").NAMESPACES.PAGE,
        t = r("DynamicTemplatePageFields").LOCATION,
        n = t.CITY,
        a = t.STREET_ADDRESS,
        i = "{{" + e + "." + a + "}}",
        l = "{{" + e + "." + n + "}}";
      return s
        ._(/*BTDS*/ "Visit us at {streetAddress}, {city}.", [
          s._param("streetAddress", i),
          s._param("city", l),
        ])
        .toString();
    }
    function $(e, t, n, o) {
      var a,
        i,
        l,
        s = o === r("AdsLinkPostFormat").MULTIPLE,
        u =
          ((a = {}),
          (a.description = " "),
          (a.call_to_action = babelHelpers.extends({}, N(t))),
          (a.link = n.link),
          a),
        c = babelHelpers.extends(((i = {}), (i.message = x()), i), u);
      if (!s) {
        var d;
        return babelHelpers.extends(
          {},
          c,
          ((d = {}), (d.force_single_link = !0), d),
        );
      }
      var m = [
        babelHelpers.extends({}, u),
        babelHelpers.extends({}, u),
        babelHelpers.extends({}, u),
      ];
      return babelHelpers.extends(
        {},
        c,
        ((l = {}), (l.child_attachments = m), l),
      );
    }
    function P(e, t, n, o) {
      var a,
        i,
        l = o === r("AdsLinkPostFormat").MULTIPLE,
        s = ((a = {}), (a.link = n.link), (a.description = " "), a),
        u = babelHelpers.extends({}, s);
      if (!l) return u;
      var c = [
        babelHelpers.extends({}, s),
        babelHelpers.extends({}, s),
        babelHelpers.extends({}, s),
      ];
      return babelHelpers.extends(
        {},
        u,
        ((i = {}), (i.child_attachments = c), (i.multi_share_end_card = !1), i),
      );
    }
    function N(e, t) {
      var n = e.objective,
        o = r("adsCallToActionGetDefaultCallToActionType")(n, t);
      return o ? { type: o } : {};
    }
    function M(e, t, n) {
      var o,
        a = (o = e.promoted_object) == null ? void 0 : o.object_store_url,
        i = n ? n.id : null,
        l = N(t, r("AdsPromotedObjectTypes").MOBILE_APP);
      return a
        ? {
            link_data: {
              link: a,
              call_to_action: babelHelpers.extends({}, l, {
                value: { link: a },
              }),
            },
            page_id: i,
          }
        : {
            link_data: { call_to_action: babelHelpers.extends({}, l) },
            page_id: i,
          };
    }
    function w(e) {
      var t,
        n = (t = e.promoted_object) == null ? void 0 : t.object_store_url;
      if (n) return n;
    }
    function A(e) {
      var t = e.objective;
      return t !== r("AdsAPIObjectives").VIDEO_VIEWS
        ? {}
        : { engagement_audience: !0 };
    }
    function F(e, t) {
      return {
        link_data: {
          multi_share_end_card: !0,
          multi_share_optimized: !0,
          child_attachments: [{}, {}, {}],
        },
      };
    }
    function O(e, t, n) {
      var a,
        i = [],
        l = [],
        s = t.objective,
        u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          s,
          new (r("AdsAPICampaignRecord"))(e),
        ),
        c = e.promoted_object;
      if (c) {
        var d = r(
          "AdsPixelPromotedObjectUtil",
        ).getDefaultTrackingSpecFromPromotedObject(c);
        l = o("AdsActionSpecUtils").mergeOffsiteConversionToTrackingSpec([], d);
      }
      if (!c || !c.custom_event_type || !c.pixel_id) {
        var m = n.account_id,
          p = n.offsite_pixels_tos_accepted;
        if (m) {
          var _ = !1,
            f = o("AdsPixelStoreUtil").getPixelIDs(
              r("AdsPixelProvider").toFluxStore().getState(),
            );
          if (f[0]) {
            var g = new (r("AdsPixelStatus"))(
              o("AdsPixelStoreUtil").getPixelLastFiringTime(
                r("AdsPixelProvider").toFluxStore().getState(),
                f[0],
              ),
            );
            g.getStatus() === r("AdsPixelStatusEnum").ACTIVE &&
              ((l = o("AdsActionSpecUtils").setFacebookPixelID(l, f[0])),
              (_ = !0));
          }
          if (!_ && p) {
            var h = [],
              y = r("AdsConversionPixelStore").getPixels();
            (y.forEach(function (e) {
              var t = e.pixelID,
                n = r("AdsConversionPixelStore").getPixel(t);
              n &&
                o("AdsConversionPixelStatusUI").getStatus(n) === "Active" &&
                h.push(t);
            }),
              h.length <=
                r("PowerEditorConfig.experimental").config
                  .MAX_AUTO_TRACKED_OFFSITE_PIXELS &&
                (l = o("AdsActionSpecUtils").setPixelIDs(l, h)));
          }
        }
      }
      var C = (a = e.promoted_object) == null ? void 0 : a.application_id;
      if (C) {
        var b;
        if (
          (s === r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT
            ? (b =
                o("AdsActionSpecUtils").makeDesktopAppEngagementTrackingSpecs(
                  C,
                ))
            : r("AdsAppUtils").isCanvasAppInstall(s, u)
              ? (b =
                  o("AdsActionSpecUtils").makeDesktopAppInstallTrackingSpecs(C))
              : s === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT
                ? (b =
                    o(
                      "AdsActionSpecUtils",
                    ).makeMobileAppEngagementTrackingSpecs(C))
                : r("AdsAppUtils").isMobileAppInstall(s, u) &&
                  (b =
                    o("AdsActionSpecUtils").makeMobileAppInstallTrackingSpecs(
                      C,
                    )),
          b)
        ) {
          var v = o("AdsCampaignBidUtils").campaignHasBidOnActions(t, e, s);
          if (v) {
            var S = b.shift();
            S != null && i.push(S);
          }
          l = l.concat(b);
        }
      }
      return (
        (i = o("AdsActionSpecUtils").unifyValues(i)),
        (i = o("AdsActionSpecUtils").withoutDuplicates(i)),
        (l = o("AdsActionSpecUtils").unifyValues(l)),
        (l = o("AdsActionSpecUtils").withoutDuplicates(l)),
        { conversion_specs: i, tracking_specs: l }
      );
    }
    ((l.getDefaultsForCreateFlow = d),
      (l.getL1DefaultWithoutParentObjectIDs = m),
      (l.getDefaults = p),
      (l.getDefaultCreative = _),
      (l.getDefaultObjectStorySpec = f),
      (l.getDefaultAppObjectStorySpec = g),
      (l._getBasicObjectStorySpec = h),
      (l.getDefaultWhatsAppObjectStorySpec = y),
      (l.getDefaultMessagesObjectStorySpec = C),
      (l.getDefaultAppDynamicObjectStorySpec = b),
      (l.getDefaultAppMPAObjectStorySpec = v),
      (l.getDefaultTemplateData = S),
      (l.getDefaultProductCatalogSalesObjectStorySpec = R),
      (l.getDefaultPageLikeObjectStorySpec = L),
      (l.getDefaultLeadGenLPPObjectStorySpec = E),
      (l.getDefaultLeadGenMPAObjectStorySpec = k),
      (l.getDefaultOfferClaimsObjectStorySpec = I),
      (l.getDefaultLocalAwarenessObjectStorySpec = T),
      (l.getDefaultPostEngagementObjectStorySpec = D),
      (l.getDefaultSVOMessage = x),
      (l.getDefaultDLATemplateData = $),
      (l.getDefaultLALinkData = P),
      (l.getDefaultCallToActionType = N),
      (l.getDefaultAppLPPObjectStorySpec = M),
      (l.getDefaultLinkURL = w),
      (l.getDefaultEngagementAudience = A),
      (l.getDefaultWebsiteMPAObjectStorySpec = F),
      (l.getDefaultTrackingSpecs = O));
  },
  226,
);
