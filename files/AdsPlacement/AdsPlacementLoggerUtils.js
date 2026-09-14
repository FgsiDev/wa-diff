__d(
  "AdsPlacementLoggerUtils",
  [
    "AdDraftFragmentSource",
    "AdsAPITargetFields",
    "AdsBuyingTypes",
    "AdsCFNewCampaignFBID",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsInterfacesLogger",
    "AdsPlacementStrictlyPlacementFields",
    "AdsPlacementViewExpandAdvancedOptionBlockListDataActionFlux",
    "AdsPlacementViewExpandAdvancedOptionDeviceDataActionFlux",
    "AdsPlacementViewSwitchToManualDataActionFlux",
    "AdsUEditorCampaignPlacementCollapseAndExpandPositionGroupActionFlux",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementResetActionFlux",
    "AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectOfflinePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSetBlockListsActionFlux",
    "AdsUEditorCampaignSetBrandSafetyCampaignConfigActionFlux",
    "AdsUEditorCampaignSetBrandSafetyContentFilterLevelActionFlux",
    "AdsUEditorCampaignSetDevicePlatformActionFlux",
    "AdsUEditorCampaignSetDeviceTypeActionFlux",
    "AdsUEditorCampaignSetExcludedContentTypesActionFlux",
    "AdsUEditorCampaignSetGranularDevicesActionFlux",
    "AdsUEditorCampaignSetMaxOsVersionDataActionFlux",
    "AdsUEditorCampaignSetMinOsVersionDataActionFlux",
    "AdsUEditorCampaignSetOfflineFromPageSetPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSetPageSetFromOfflinePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSetWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignToggleWifiOnlyDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        ((e = {}),
        (e[(u = r("AdsAPITargetFields")).PUBLISHER_PLATFORMS] =
          "publisher_platforms"),
        (e[u.DEVICE_PLATFORMS] = "device_platforms"),
        (e[u.AUDIENCE_NETWORK_POSITIONS] = "audience_network_positions"),
        (e[u.FACEBOOK_POSITIONS] = "facebook_positions"),
        (e[u.INSTAGRAM_POSITIONS] = "instagram_positions"),
        (e[u.MESSENGER_POSITIONS] = "messenger_positions"),
        (e[u.WHATSAPP_POSITIONS] = "whatsapp_positions"),
        (e[u.USER_DEVICE] = "user_device"),
        (e[u.EXCLUDED_PUBLISHER_LIST_IDS] = "excluded_publisher_list_ids"),
        (e[u.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES] =
          "excluded_brand_safety_content_types"),
        e),
      d =
        ((s = {}),
        (s[o("AdsPlacementViewSwitchToManualDataActionFlux").actionType] =
          "placement_switch_to_manual"),
        (s[
          o(
            "AdsPlacementViewExpandAdvancedOptionBlockListDataActionFlux",
          ).actionType
        ] = "placement_expand_advanced_option_block_list"),
        (s[
          o(
            "AdsPlacementViewExpandAdvancedOptionDeviceDataActionFlux",
          ).actionType
        ] = "placement_expand_advanced_option_device"),
        (s[
          o(
            "AdsUEditorCampaignPlacementCollapseAndExpandPositionGroupActionFlux",
          ).actionType
        ] = {
          expand: "placement_expand_platform",
          collapse: "placement_collapse_platform",
        }),
        s);
    function m(e) {
      if (e == null) return [];
      var t = [];
      for (var n of r("AdsPlacementStrictlyPlacementFields")) {
        var o,
          a = (o = e[n]) != null ? o : [];
        t = t.concat(a);
      }
      return t;
    }
    function p(e, t) {
      var n = [],
        o = [],
        a = [],
        i = [],
        l = function () {
          var r,
            l,
            u = (r = e[s]) != null ? r : [],
            c = (l = t[s]) != null ? l : [];
          (n.concat(u), o.concat(c));
          var d = new Set(u),
            m = new Set(c);
          (d.forEach(function (e) {
            m.has(e) || (i = i.concat(e));
          }),
            m.forEach(function (e) {
              d.has(e) || (a = a.concat(e));
            }));
        };
      for (var s of r("AdsPlacementStrictlyPlacementFields")) l();
      return {
        oldPlacements: n,
        newPlacements: o,
        addedPlacements: a,
        removedPlacements: i,
      };
    }
    function _(e, t, n, r) {
      var o = {};
      return (
        t.forEach(function (t) {
          var a = c[t];
          if (a) {
            var i = e(n[t], r[t]);
            o[a] = i;
          }
        }),
        o
      );
    }
    function f(e, t) {
      return t == null ? [] : t.slice();
    }
    function g(e, t) {
      if (t == null) return [];
      if (e === null) return t.slice();
      var n = new Set(e);
      return t.filter(function (e) {
        return !n.has(e);
      });
    }
    function h(e, t) {
      if (e == null) return [];
      if (t === null) return e.slice();
      var n = new Set(t);
      return e.filter(function (e) {
        return !n.has(e);
      });
    }
    function y(e, t, n) {
      var o,
        a = e.eventCategory,
        i = e.eventName,
        l = babelHelpers.extends(
          {},
          e.data,
          ((o = {}),
          (o.campaign_id = C(t)),
          (o.custom_event_type = t.pluginType),
          o),
        );
      n
        ? n.log(i, l)
        : r("AdsInterfacesLogger").log(
            { eventName: i, eventCategory: a, data: l },
            r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
          );
    }
    function C(e) {
      return e.ids != null && e.ids.length > 0
        ? e.ids[0].includes(r("AdsCFNewCampaignFBID"))
          ? null
          : e.ids[0]
        : e.campaignIDs != null && e.campaignIDs.length > 0
          ? e.campaignIDs[0].includes(r("AdsCFNewCampaignFBID"))
            ? null
            : e.campaignIDs[0]
          : null;
    }
    function b(e, t) {
      var n, r;
      switch (e.type) {
        case o("AdsPlacementViewExpandAdvancedOptionBlockListDataActionFlux")
          .actionType:
        case o("AdsPlacementViewExpandAdvancedOptionDeviceDataActionFlux")
          .actionType:
        case o("AdsPlacementViewSwitchToManualDataActionFlux").actionType:
          y({ eventCategory: "user_action", eventName: d[e.type] }, e, t);
          return;
        case o(
          "AdsUEditorCampaignPlacementCollapseAndExpandPositionGroupActionFlux",
        ).actionType:
          y(
            {
              eventCategory: "user_action",
              eventName: d[e.type][e.action],
              data: ((n = {}), (n.publisher_platforms = [e.value]), n),
            },
            e,
            t,
          );
          return;
        case o("AdsUEditorCampaignSetBrandSafetyCampaignConfigActionFlux")
          .actionType:
          y(
            {
              eventCategory: "user_action",
              eventName: "placement_set_brand_safety_config",
              data:
                ((r = {}), (r.new_value = [e.brandSafetyCampaignConfig]), r),
            },
            e,
            t,
          );
          return;
        default:
          return;
      }
    }
    function v(e, t, n, a) {
      var i,
        l,
        s,
        u,
        c,
        d = "user_action",
        m,
        p;
      switch (e.type) {
        case o("AdsCampaignPlacementAddDataActionFlux").actionType:
          ((m = "placement_add"),
            (p = _(g, r("AdsPlacementStrictlyPlacementFields"), t, n)),
            y({ eventName: m, eventCategory: d, data: p }, e, a));
          return;
        case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
          ((m = "placement_remove"),
            (p = _(h, r("AdsPlacementStrictlyPlacementFields"), t, n)),
            y({ eventName: m, eventCategory: d, data: p }, e, a));
          return;
        case o("AdsUEditorCampaignSetDevicePlatformActionFlux").actionType:
          ((m = "placement_set_device_platform"),
            (p =
              ((i = {}),
              (i.device_platforms =
                n[r("AdsAPITargetFields").DEVICE_PLATFORMS]),
              i)),
            y(
              { eventName: m, eventCategory: d, data: p },
              babelHelpers.extends({}, e, { ids: e.campaignIDs }),
              a,
            ));
          return;
        case o("AdsUEditorCampaignSetDeviceTypeActionFlux").actionType:
          ((m = "placement_set_device_type"),
            (p = ((l = {}), (l.user_device = [e.value]), l)),
            y({ eventName: m, eventCategory: d, data: p }, e, a));
          return;
        case o("AdsUEditorCampaignSetGranularDevicesActionFlux").actionType:
          ((p = _(g, [r("AdsAPITargetFields").USER_DEVICE], t, n)),
            L(p, "user_device") &&
              ((m = "placement_add_device"),
              y(
                { eventName: m, eventCategory: d, data: p },
                babelHelpers.extends({}, e, { ids: e.campaignIDs }),
                a,
              )),
            (p = _(h, [r("AdsAPITargetFields").USER_DEVICE], t, n)),
            L(p, "user_device") &&
              ((m = "placement_remove_device"),
              y(
                { eventName: m, eventCategory: d, data: p },
                babelHelpers.extends({}, e, { ids: e.campaignIDs }),
                a,
              )));
          return;
        case o("AdsUEditorCampaignSetMinOsVersionDataActionFlux").actionType:
        case o("AdsUEditorCampaignSetMaxOsVersionDataActionFlux").actionType:
          ((m =
            e.type ===
            o("AdsUEditorCampaignSetMinOsVersionDataActionFlux").actionType
              ? "placement_set_min_os_version"
              : "placement_set_max_os_version"),
            (p =
              ((s = {}), (s.user_os = n[r("AdsAPITargetFields").USER_OS]), s)),
            y({ eventName: m, eventCategory: d, data: p }, e, a));
          return;
        case o("AdsUEditorCampaignToggleWifiOnlyDataActionFlux").actionType:
          ((m = "placement_set_wireless_carrier"),
            (p =
              ((u = {}),
              (u.wireless_carrier =
                n[r("AdsAPITargetFields").WIRELESS_CARRIER]),
              u)),
            y({ eventName: m, eventCategory: d, data: p }, e, a));
          return;
        case o("AdsUEditorCampaignPlacementResetActionFlux").actionType:
        case o(
          "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
        ).actionType:
        case o(
          "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
        ).actionType:
        case o("AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux")
          .actionType:
        case o("AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux")
          .actionType:
        case o(
          "AdsUEditorCampaignSelectOfflinePromotedObjectTypeDataActionFlux",
        ).actionType:
        case o("AdsUEditorCampaignSetWhatsAppPromotedObjectTypeDataActionFlux")
          .actionType:
        case o(
          "AdsUEditorCampaignSetOfflineFromPageSetPromotedObjectTypeDataActionFlux",
        ).actionType:
        case o(
          "AdsUEditorCampaignSetPageSetFromOfflinePromotedObjectTypeDataActionFlux",
        ).actionType:
          ((m = "placement_reset"),
            y(
              { eventName: m, eventCategory: d, data: p },
              babelHelpers.extends({}, e, { ids: e.campaignIDs }),
              a,
            ));
          return;
        case o("AdsUEditorCampaignSetBlockListsActionFlux").actionType:
          ((p = _(
            g,
            [r("AdsAPITargetFields").EXCLUDED_PUBLISHER_LIST_IDS],
            t,
            n,
          )),
            L(p, "excluded_publisher_list_ids") &&
              ((m = "placement_add_block_list"),
              y(
                { eventName: m, eventCategory: d, data: p },
                babelHelpers.extends({}, e, { ids: e.campaignIDs }),
                a,
              )),
            (p = _(
              h,
              [r("AdsAPITargetFields").EXCLUDED_PUBLISHER_LIST_IDS],
              t,
              n,
            )),
            L(p, "excluded_publisher_list_ids") &&
              ((m = "placement_remove_block_list"),
              y(
                { eventName: m, eventCategory: d, data: p },
                babelHelpers.extends({}, e, { ids: e.campaignIDs }),
                a,
              )));
          return;
        case o("AdsUEditorCampaignSetBrandSafetyContentFilterLevelActionFlux")
          .actionType:
          ((m = "placement_content_filter_select"),
            (p =
              ((c = {}),
              (c.new_value = e.newLevel),
              (c.brand_safety_content_filters =
                n.brand_safety_content_filter_levels),
              c)),
            y(
              { eventName: m, eventCategory: d, data: p },
              babelHelpers.extends({}, e, { ids: e.campaignIDs }),
              a,
            ));
          return;
        case o("AdsUEditorCampaignSetExcludedContentTypesActionFlux")
          .actionType:
          ((p = _(
            g,
            [r("AdsAPITargetFields").EXCLUDED_BRAND_SAFETY_CONTENT_TYPES],
            t,
            n,
          )),
            L(p, "excluded_brand_safety_content_types") &&
              ((m = "placement_add_excluded_brand_safety_content_types"),
              y(
                { eventName: m, eventCategory: d, data: p },
                babelHelpers.extends({}, e, { ids: e.campaignIDs }),
                a,
              )),
            (p = _(
              h,
              [r("AdsAPITargetFields").EXCLUDED_BRAND_SAFETY_CONTENT_TYPES],
              t,
              n,
            )),
            L(p, "excluded_brand_safety_content_types") &&
              ((m = "placement_remove_excluded_brand_safety_content_types"),
              y(
                { eventName: m, eventCategory: d, data: p },
                babelHelpers.extends({}, e, { ids: e.campaignIDs }),
                a,
              )));
          return;
        default:
          return;
      }
    }
    function S(e) {
      if (!e) return !1;
      var t = e.publisher_platforms || [];
      return t.some(function (e) {
        return e === "audience_network";
      });
    }
    function R(e, t, n, o, a, i, l) {
      var s = null,
        u = !1,
        c = S(o);
      if (
        (t.wasEnabledEvent != null && S(a) === !0 && (u = !0),
        c === !0 && t.isEnabledEvent !== null && (s = t.isEnabledEvent),
        c === !1 &&
          u === !0 &&
          t.wasEnabledEvent !== null &&
          t.wasEnabledEvent !== void 0 &&
          (s = t.wasEnabledEvent),
        s != null)
      ) {
        var d = _(f, r("AdsPlacementStrictlyPlacementFields"), {}, o);
        ((d.buying_type = l),
          y({ eventCategory: n, eventName: s, data: d }, e, i));
      }
    }
    function L(e, t) {
      return e[t] && e[t].length > 0;
    }
    function E(e) {
      return e
        ? Array.from(e).every(function (e) {
            return e && e.includes(r("AdsCFNewCampaignFBID"));
          })
        : !1;
    }
    function k(e) {
      return e ? e.buyingType === r("AdsBuyingTypes").RESERVED : !1;
    }
    function I(e) {
      var t = e.toArray().some(function (e) {
        return e.includes("object_story_spec");
      });
      return t ? r("AdDraftFragmentSource").STATIC_AD_TO_PAC : null;
    }
    ((l.getPlacementsForLogging = m),
      (l.getPlacementsDiff = p),
      (l.logPlacementsViewAction = b),
      (l.logPlacements = v),
      (l.logANPlacementChanges = R),
      (l.inCreation = E),
      (l.isReachFrequency = k),
      (l.getPACAdEditSourceType = I));
  },
  98,
);
