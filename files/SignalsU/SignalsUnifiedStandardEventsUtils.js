__d(
  "SignalsUnifiedStandardEventsUtils",
  [
    "ix",
    "AdsEventsManagerAllowedOnsiteConversionTypes",
    "AdsEventsManagerCustomAttributionHoldoutUtils",
    "AdsEventsManagerOnsiteConversionConstants",
    "SignalsAppEventConstants",
    "SignalsAppEventsUnifiedTypeEnum",
    "StandardEventsEnum",
    "UnifiedAutomaticEventDetails",
    "UnifiedStandardEventDetails",
    "coerceStringToStandardEventEnum",
    "immutable",
    "meta-brand-circle-star-outline-16",
    "meta-brand-tag-star-outline-16",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s("824289"),
      u = r("immutable").Map(r("UnifiedStandardEventDetails")),
      c = r("immutable").Map(r("UnifiedAutomaticEventDetails"));
    function d(e) {
      return u.has(e);
    }
    function m(e) {
      return Object.values(r("SignalsAppEventsUnifiedTypeEnum")).includes(e);
    }
    function p(e) {
      return m(e) || o("SignalsAppEventConstants").APP_CUTOM_EVENT_SET.has(e);
    }
    function _(e) {
      return Object.values(
        r("AdsEventsManagerAllowedOnsiteConversionTypes"),
      ).includes(e);
    }
    function f(e, t) {
      var n = u.get(e);
      if (n == null) return !1;
      var r = n.supportedDataSources;
      return r.includes(t);
    }
    function g(e, t) {
      return v(e, t).name;
    }
    function h(e, t) {
      if (
        (t === void 0 &&
          (t = o(
            "meta-brand-tag-star-outline-16",
          ).metaBrandTagStarTagStarOutline16),
        m(e))
      ) {
        var n, r;
        return (n =
          (r = o("SignalsAppEventConstants").APP_STANDARD_EVENT_ICON_MAP.get(
            e,
          )) == null
            ? void 0
            : r.vector) != null
          ? n
          : t;
      }
      if (_(e)) {
        var a, i;
        return (a =
          (i = o(
            "AdsEventsManagerOnsiteConversionConstants",
          ).ONSITE_CONVERSION_EVENTS_ICON_MAP.get(e)) == null
            ? void 0
            : i.vector) != null
          ? a
          : t;
      }
      if (d(e)) {
        var l = u.get(e);
        if (l != null) return l.icon.vector;
      }
      if (c.has(e)) {
        var s = c.get(e);
        if (s != null) return s.icon.vector;
      }
      if (
        o(
          "AdsEventsManagerCustomAttributionHoldoutUtils",
        ).isCustomAttributionScenario(e)
      ) {
        var p,
          f = u.get("AppendAttribution");
        return (p = f == null ? void 0 : f.icon.vector) != null ? p : t;
      }
      return t;
    }
    function y(t, n) {
      if ((n === void 0 && (n = e), m(t))) {
        var r, a;
        return (r =
          (a = o("SignalsAppEventConstants").APP_STANDARD_EVENT_ICON_MAP.get(
            t,
          )) == null
            ? void 0
            : a.raster) != null
          ? r
          : n;
      }
      if (_(t)) {
        var i, l;
        return (i =
          (l = o(
            "AdsEventsManagerOnsiteConversionConstants",
          ).ONSITE_CONVERSION_EVENTS_ICON_MAP.get(t)) == null
            ? void 0
            : l.raster) != null
          ? i
          : n;
      }
      if (d(t)) {
        var s = u.get(t);
        if (s != null) return s.icon.raster;
      }
      if (c.has(t)) {
        var p = c.get(t);
        if (p != null) return p.icon.raster;
      }
      if (
        o(
          "AdsEventsManagerCustomAttributionHoldoutUtils",
        ).isCustomAttributionScenario(t)
      ) {
        var f,
          g = u.get("AppendAttribution");
        return (f = g == null ? void 0 : g.icon.raster) != null ? f : n;
      }
      return n;
    }
    function C(e) {
      if (!Array.from(Object.values(r("StandardEventsEnum"))).includes(e))
        return null;
      switch (e) {
        case "AchievementUnlocked":
          return "fb_mobile_achievement_unlocked";
        case "ActivateApp":
          return "fb_mobile_activate_app";
        case "AddPaymentInfo":
          return "fb_mobile_add_payment_info";
        case "AddToCart":
          return "fb_mobile_add_to_cart";
        case "AddToWishlist":
          return "fb_mobile_add_to_wishlist";
        case "CompleteRegistration":
          return "fb_mobile_complete_registration";
        case "Contact":
          return "Contact";
        case "CustomizeProduct":
          return "CustomizeProduct";
        case "Donate":
          return "Donate";
        case "FindLocation":
          return "FindLocation";
        case "InitiateCheckout":
          return "fb_mobile_initiated_checkout";
        case "LevelAchieved":
          return "fb_mobile_level_achieved";
        case "Purchase":
          return "fb_mobile_purchase";
        case "Rate":
          return "fb_mobile_rate";
        case "Schedule":
          return "Schedule";
        case "Search":
          return "fb_mobile_search";
        case "SpentCredits":
          return "fb_mobile_spent_credits";
        case "StartTrial":
          return "StartTrial";
        case "SubmitApplication":
          return "SubmitApplication";
        case "Subscribe":
          return "Subscribe";
        case "TutorialCompletion":
          return "fb_mobile_tutorial_completion";
        case "ViewContent":
          return "fb_mobile_content_view";
        case "AdClick":
          return "AdClick";
        case "AdImpression":
          return "AdImpression";
        default:
          return null;
      }
    }
    function b(e) {
      var t = r("coerceStringToStandardEventEnum")(e);
      if (t !== null) return t;
      if (!p(e)) return null;
      switch (e) {
        case "fb_mobile_achievement_unlocked":
          return "AchievementUnlocked";
        case "fb_mobile_activate_app":
          return "ActivateApp";
        case "fb_mobile_add_payment_info":
          return "AddPaymentInfo";
        case "fb_mobile_add_to_cart":
          return "AddToCart";
        case "fb_mobile_add_to_wishlist":
          return "AddToWishlist";
        case "fb_mobile_complete_registration":
          return "CompleteRegistration";
        case "Contact":
          return "Contact";
        case "CustomizeProduct":
          return "CustomizeProduct";
        case "Donate":
          return "Donate";
        case "FindLocation":
          return "FindLocation";
        case "fb_mobile_initiated_checkout":
          return "InitiateCheckout";
        case "fb_mobile_level_achieved":
          return "LevelAchieved";
        case "fb_mobile_purchase":
          return "Purchase";
        case "fb_mobile_rate":
          return "Rate";
        case "Schedule":
          return "Schedule";
        case "fb_mobile_search":
          return "Search";
        case "fb_mobile_spent_credits":
          return "SpentCredits";
        case "StartTrial":
          return "StartTrial";
        case "SubmitApplication":
          return "SubmitApplication";
        case "Subscribe":
          return "Subscribe";
        case "fb_mobile_tutorial_completion":
          return "TutorialCompletion";
        case "fb_mobile_content_view":
          return "ViewContent";
        case "AdClick":
          return "AdClick";
        case "AdImpression":
          return "AdImpression";
        default:
          return null;
      }
    }
    function v(e, t) {
      var n = null,
        r = null;
      if (p(e)) {
        if (
          ((n = o("SignalsAppEventConstants").APP_EVENT_DESCRIPTION_MAP.get(e)),
          o("SignalsAppEventConstants").APP_EVENT_DISPLAY_NAME.has(e))
        ) {
          var a = o("SignalsAppEventConstants").APP_EVENT_DISPLAY_NAME.get(e);
          a != null && (r = a.toString());
        }
        return {
          description: n,
          icon: h(e),
          name: r != null ? r : e,
          offsiteCustomEvent: null,
          supportedDataSources: null,
        };
      }
      if (_(e)) {
        if (
          o(
            "AdsEventsManagerOnsiteConversionConstants",
          ).ONSITE_CONVERSION_EVENTS_DISPLAY_NAME.has(e)
        ) {
          var i = o(
            "AdsEventsManagerOnsiteConversionConstants",
          ).ONSITE_CONVERSION_EVENTS_DISPLAY_NAME.get(e);
          i != null && (r = i.toString());
        }
        return {
          description: null,
          icon: h(e),
          name: r != null ? r : e,
          offsiteCustomEvent: null,
          supportedDataSources: null,
        };
      }
      if (
        o(
          "AdsEventsManagerCustomAttributionHoldoutUtils",
        ).isCustomAttributionScenario(e)
      ) {
        var l = u.get("AppendAttribution");
        if (l != null) {
          var s = t == null || e === t;
          return {
            description: l.description,
            icon: l.icon.vector,
            name: s ? l.name : e,
            offsiteCustomEvent: l.offsiteCustomEvent,
            supportedDataSources: l.supportedDataSources,
          };
        }
      }
      var c = u.get(e);
      if (c == null)
        return {
          description: null,
          icon: h(e),
          name: e,
          offsiteCustomEvent: null,
          supportedDataSources: null,
        };
      var d = c.offsiteCustomEvent,
        m = c.supportedDataSources;
      return {
        description: c.description,
        icon: h(e),
        name: c.name,
        offsiteCustomEvent: d,
        supportedDataSources: m,
      };
    }
    function S(e) {
      var t = R(e);
      return t == null ? void 0 : t.name;
    }
    function R(e) {
      var t;
      return (t = r("objectValues")(r("UnifiedStandardEventDetails")).find(
        function (t) {
          var n = t.offsiteCustomEvent;
          return n === e;
        },
      )) != null
        ? t
        : null;
    }
    function L(e) {
      switch (e) {
        case "ADD_PAYMENT_INFO":
          return "AddPaymentInfo";
        case "ADD_TO_CART":
          return "AddToCart";
        case "ADD_TO_WISHLIST":
          return "AddToWishlist";
        case "COMPLETE_REGISTRATION":
          return "CompleteRegistration";
        case "CONTACT":
          return "Contact";
        case "CUSTOMIZE_PRODUCT":
          return "CustomizeProduct";
        case "DONATE":
          return "Donate";
        case "FIND_LOCATION":
          return "FindLocation";
        case "INITIATED_CHECKOUT":
          return "InitiateCheckout";
        case "LEAD":
          return "Lead";
        case "PURCHASE":
          return "Purchase";
        case "SCHEDULE":
          return "Schedule";
        case "SEARCH":
          return "Search";
        case "START_TRIAL":
          return "StartTrial";
        case "SUBMIT_APPLICATION":
          return "SubmitApplication";
        case "SUBSCRIBE":
          return "Subscribe";
        case "CONTENT_VIEW":
          return "ViewContent";
        default:
          return null;
      }
    }
    ((l.CUSTOM_EVENT_ICON = o(
      "meta-brand-tag-star-outline-16",
    ).metaBrandTagStarTagStarOutline16),
      (l.CUSTOM_EVENT_ICON_RASTER = e),
      (l.CUSTOM_CONVERSION_ICON = o(
        "meta-brand-circle-star-outline-16",
      ).metaBrandCircleStarStarCircleOutline16),
      (l.isStandardEvent = d),
      (l.isAppStandardEvent = m),
      (l.isFacebookPageMessengerEvent = _),
      (l.isStandardEventByDataSourceType = f),
      (l.getEventDisplayName = g),
      (l.getEventIcon = h),
      (l.getEventIconRaster = y),
      (l.convertStandardEventsToAppEventEnumType = C),
      (l.convertAppEventToStandardEventsEnumType = b),
      (l.getEventDetailsByName = v),
      (l.getEventDisplayNameFromOffsiteCustomEvent = S),
      (l.getEventDetailsFromOffsiteCustomEvent = R),
      (l.getAdsSignalEventType = L));
  },
  98,
);
