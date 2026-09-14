__d(
  "AdsMgmtColumnCategoriesCoversionCategoryUtils",
  [
    "fbt",
    "AdsGoalUtil",
    "AdsInsightsColumnCategory",
    "AdsInsightsFieldUtil",
    "AdsInsightsFields",
    "AdsMgmtColumnCategoriesOmniConversionUtils",
    "AdsMgmtColumnCategoriesUtilsMetricsKeys",
    "StandardEventsStoreUtils",
    "adsMemoizeWithArgs",
    "flatMapArray",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a) {
      var i;
      return [
        {
          id: (i = r("AdsInsightsColumnCategory")).CONVERSIONS,
          name: s._(/*BTDS*/ "Conversions"),
          parent: i.ROOT,
        },
        { id: i.ADD_PAYMENT_INFO, parent: i.STANDARD_EVENTS },
        { id: i.ADD_TO_CART, parent: i.STANDARD_EVENTS },
        { id: i.ADD_TO_WISHLIST, parent: i.STANDARD_EVENTS },
        { id: i.COMPLETE_REGISTRATION, parent: i.STANDARD_EVENTS },
        { id: i.INITIATE_CHECKOUT, parent: i.STANDARD_EVENTS },
        { id: i.LEAD, parent: i.STANDARD_EVENTS },
        { id: i.PURCHASE, parent: i.STANDARD_EVENTS },
        { id: i.SEARCH, parent: i.STANDARD_EVENTS },
        { id: i.VIEW_CONTENT, parent: i.STANDARD_EVENTS },
        { id: i.RATE, parent: i.STANDARD_EVENTS },
        { id: i.LEVEL_ACHIEVED, parent: i.STANDARD_EVENTS },
        { id: i.TUTORIAL_COMPLETION, parent: i.STANDARD_EVENTS },
        { id: i.ACHIEVEMENT_UNLOCKED, parent: i.STANDARD_EVENTS },
        { id: i.ACTIVATE_APP, parent: i.STANDARD_EVENTS },
        { id: i.OTHER, parent: i.STANDARD_EVENTS },
        { id: i.CONTACT, parent: i.STANDARD_EVENTS },
        { id: i.CUSTOMIZE_PRODUCT, parent: i.STANDARD_EVENTS },
        { id: i.DONATE, parent: i.STANDARD_EVENTS },
        { id: i.FIND_LOCATION, parent: i.STANDARD_EVENTS },
        { id: i.SCHEDULE, parent: i.STANDARD_EVENTS },
        { id: i.START_TRIAL, parent: i.STANDARD_EVENTS },
        { id: i.SUBMIT_APPLICATION, parent: i.STANDARD_EVENTS },
        { id: i.SUBSCRIBE, parent: i.STANDARD_EVENTS },
        { id: i.OTHER_APP_ACTIONS, parent: i.STANDARD_EVENTS },
        { id: i.ONSITE_CONVERSION_FLOW_COMPLETE, parent: i.STANDARD_EVENTS },
        { id: i.ONSITE_CONVERSION_LEAD_GROUPED, parent: i.STANDARD_EVENTS },
        { id: i.ONSITE_CONVERSION_MESSAGE_TO_BUY, parent: i.STANDARD_EVENTS },
        {
          id: i.ONSITE_CONVERSION_REFERRAL_SENDER_MESSAGE_SENT,
          parent: i.STANDARD_EVENTS,
        },
        {
          id: i.ONSITE_CONVERSION_REFERRAL_SENDER_INVITES_SENT,
          parent: i.STANDARD_EVENTS,
        },
        { id: i.LEADGEN, parent: i.STANDARD_EVENTS },
        { id: i.COMMERCE_EVENT_PURCHASE, parent: i.STANDARD_EVENTS },
        { id: i.COMMERCE_EVENT_ADD_TO_CART, parent: i.STANDARD_EVENTS },
        { id: i.COMMERCE_EVENT_VIEW_CONTENT, parent: i.STANDARD_EVENTS },
        { id: i.COMMERCE_EVENT_MESSAGE_TO_BUY, parent: i.STANDARD_EVENTS },
        { id: i.COMMERCE_EVENT_OTHER, parent: i.STANDARD_EVENTS },
        { id: i.COMMERCE_EVENT, parent: i.STANDARD_EVENTS },
        { id: i.APP_USE, parent: i.STANDARD_EVENTS },
        { id: i.APP_ENGAGEMENT, parent: i.STANDARD_EVENTS },
        { id: i.APP_STORY, parent: i.STANDARD_EVENTS },
        { id: i.APP_INSTALL, parent: i.STANDARD_EVENTS },
        { id: i.SPENT_CREDITS, parent: i.STANDARD_EVENTS },
        { id: i.LANDING_PAGE_VIEW, parent: i.STANDARD_EVENTS },
        {
          id: i.ONSITE_CONVERSION_ENGAGED_PAGE_VIEW,
          parent: i.STANDARD_EVENTS,
        },
        { id: i.GAME_PLAYS, parent: i.STANDARD_EVENTS },
        { id: i.PURCHASE_ROAS, parent: i.STANDARD_EVENTS },
        { id: i.MOBILE_D2_RETENTION, parent: i.STANDARD_EVENTS },
        { id: i.MOBILE_D7_RETENTION, parent: i.STANDARD_EVENTS },
        { id: i.AD_CLICK, parent: i.STANDARD_EVENTS },
        { id: i.AD_IMPRESSION, parent: i.STANDARD_EVENTS },
        {
          id: i.STANDARD_EVENTS,
          name: s._(/*BTDS*/ "Standard events"),
          parent: i.CONVERSIONS,
          hideToggleAllButton: !0,
        },
        { id: i.ONSITE_CONVERSION_CLICK_TO_CALL, parent: i.STANDARD_EVENTS },
        { id: i.ONSITE_CONVERSION_FIND_LOCATION, parent: i.STANDARD_EVENTS },
        {
          id: i.CUSTOM_CONVERSIONS,
          name: s._(/*BTDS*/ "Custom conversions"),
          parent: i.CONVERSIONS,
          hideToggleAllButton: !0,
        },
      ]
        .concat([
          {
            id: i.APPS_CONVERSIONS_OPTIMIZED_CUSTOM_EVENT,
            name: s._(/*BTDS*/ "Custom events"),
            parent: i.CONVERSIONS,
            hideToggleAllButton: !0,
          },
        ])
        .concat(
          n
            ? [
                {
                  id: r("AdsInsightsColumnCategory")
                    .ONSITE_CONVERSION_INITIATE_CHECKOUT,
                  parent: r("AdsInsightsColumnCategory").STANDARD_EVENTS,
                },
                {
                  id: r("AdsInsightsColumnCategory")
                    .ONSITE_CONVERSION_ADD_TO_WISHLIST,
                  parent: r("AdsInsightsColumnCategory").STANDARD_EVENTS,
                },
              ]
            : [],
        )
        .concat(
          a
            ? [
                {
                  id: r("AdsInsightsColumnCategory").DONATION_ROAS,
                  parent: r("AdsInsightsColumnCategory").STANDARD_EVENTS,
                },
              ]
            : [],
        );
    }
    var u = r("adsMemoizeWithArgs")(
        function (e, t) {
          var n = [],
            r = {
              action: "actions",
              costPerAction: "cost_per_action_type",
              conversionValue: "action_values",
            };
          return (
            e
              .filter(function (e) {
                return t || e.eventSourceType !== "multiple_sources";
              })
              .forEach(function (e) {
                var t, a;
                return n.push({
                  label: o(
                    "AdsInsightsFieldUtil",
                  ).getCustomConversionFieldLabel(
                    { customConversionName: e.name, isArchived: e.is_archived },
                    r.action,
                  ),
                  action: (t =
                    o("AdsInsightsFields")).makeCustomConversionField(
                    r.action,
                    e.id,
                    (a =
                      o(
                        "AdsGoalUtil",
                      )).getCustomConversionPrefixForEventSourceType(
                      e.eventSourceType,
                    ),
                  ),
                  costPerAction: t.makeCustomConversionField(
                    r.costPerAction,
                    e.id,
                    a.getCustomConversionPrefixForEventSourceType(
                      e.eventSourceType,
                    ),
                  ),
                  conversionValue: t.makeCustomConversionField(
                    r.conversionValue,
                    e.id,
                    a.getCustomConversionPrefixForEventSourceType(
                      e.eventSourceType,
                    ),
                  ),
                  id: t.makeCustomConversionField(
                    r.action,
                    e.id,
                    a.getCustomConversionPrefixForEventSourceType(
                      e.eventSourceType,
                    ),
                  ),
                });
              }),
            n
          );
        },
        function (e, t) {
          return JSON.stringify(e) + ":" + String(t);
        },
        i.id,
      ),
      c = r("adsMemoizeWithArgs")(
        function (e, t) {
          (e === void 0 && (e = !1), t === void 0 && (t = !1));
          var n = [];
          return (
            [
              "CONTACT",
              "CUSTOMIZE_PRODUCT",
              "DONATE",
              "FIND_LOCATION",
              "SCHEDULE",
              "START_TRIAL",
              "SUBMIT_APPLICATION",
              "SUBSCRIBE",
            ].forEach(function (r) {
              var a = o("StandardEventsStoreUtils").NEW_STANDARD_EVENT_MAP[r];
              [
                "conversions",
                "cost_per_conversion",
                "conversion_values",
              ].forEach(function (r) {
                n.push({
                  omniConversion: o("AdsInsightsFields").makeActionID(
                    r,
                    a + "_total",
                  ),
                  channels:
                    r !== "cost_per_conversion"
                      ? d(
                          r,
                          a,
                          ["mobile_app", "website", "offline", "on_facebook"],
                          e,
                          t,
                        )
                      : [],
                });
              });
            }),
            n
          );
        },
        function (e, t) {
          return (
            e === void 0 && (e = !1),
            t === void 0 && (t = !1),
            String(e) + ":" + String(t)
          );
        },
        i.id,
      );
    function d(e, t, n, r, a) {
      (r === void 0 && (r = !1), a === void 0 && (a = !1));
      var i = [];
      return (
        n.forEach(function (n) {
          (n !== "on_facebook" ||
            (t === "donate" && r) ||
            (t === "submit_application" && a)) &&
            i.push(o("AdsInsightsFields").makeActionID(e, t + "_" + n));
        }),
        i
      );
    }
    function m(e, t) {
      var n = e + "_total";
      return {
        label: t,
        action: o("AdsInsightsFields").makeActionID("conversions", n),
        costPerAction: o("AdsInsightsFields").makeActionID(
          "cost_per_conversion",
          n,
        ),
        conversionValue: o("AdsInsightsFields").makeActionID(
          "conversion_values",
          n,
        ),
        id: e,
      };
    }
    function p(e, t) {
      return babelHelpers.extends({}, m(e, t), {
        predictedLifetimeValue: o("AdsInsightsFields").makeActionID(
          "action_values",
          e + "_pltv_total",
        ),
      });
    }
    var _ = r("adsMemoizeWithArgs")(
      function (e) {
        e === void 0 && (e = !1);
        var t = [];
        return (
          [
            "add_payment_info",
            "omni_add_to_cart",
            "omni_add_to_wishlist",
            "lead",
            "omni_view_content",
            "omni_complete_registration",
            "omni_purchase",
            "omni_search",
            "omni_initiated_checkout",
            "omni_achievement_unlocked",
            "omni_activate_app",
            "omni_level_achieved",
            "omni_rate",
            "omni_tutorial_completion",
            "omni_custom",
          ].forEach(function (n) {
            [
              "actions",
              "unique_actions",
              "cost_per_action_type",
              "cost_per_unique_action_type",
              "action_values",
            ].forEach(function (r) {
              var a = [],
                i = g(r),
                l = n === "lead",
                s = n === "omni_initiated_checkout";
              (r !== "cost_per_action_type" &&
                r !== "cost_per_unique_action_type" &&
                !(l && i) &&
                (i
                  ? ["APPLICATION"]
                  : [
                      "APPLICATION",
                      "FB_PIXEL",
                      "OFFLINE_DATASET",
                      "ON_FACEBOOK",
                    ]
                ).forEach(function (t) {
                  if (!(!e && t === "ON_FACEBOOK" && s) && !f(t, n, r)) {
                    var i = o("StandardEventsStoreUtils")
                      .CURRENT_STANDARD_EVENT_CHANNEL_MAP[n][t];
                    i != null &&
                      a.push(o("AdsInsightsFields").makeActionID(r, i));
                  }
                }),
                t.push({
                  omniConversion: o("AdsInsightsFields").makeActionID(r, n),
                  channels: a,
                }));
            });
          }),
          t
        );
      },
      function (e) {
        return (e === void 0 && (e = !1), String(e));
      },
      i.id,
    );
    function f(e, t, n) {
      return (
        e === "ON_FACEBOOK" &&
        n === "action_values" &&
        (t === "omni_view_content" ||
          t === "omni_add_to_cart" ||
          t === "add_to_wishlist" ||
          t === "omni_initiated_checkout")
      );
    }
    function g(e) {
      return e === "unique_actions" || e === "cost_per_unique_action_type";
    }
    function h(e, t, n, a, i, l) {
      (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1));
      var s = o(
        "AdsMgmtColumnCategoriesOmniConversionUtils",
      ).getMergedOmniConversionChannelsMap(null, n, a, i, l);
      return r("flatMapArray")(e, function (e) {
        return s[e];
      })
        .filter(function (e) {
          return e != null && t[e] != null;
        })
        .map(function (e) {
          return t[e].label;
        });
    }
    function y(e, t, n, r, a, i) {
      (n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1));
      var l = [];
      return (
        o("AdsMgmtColumnCategoriesUtilsMetricsKeys").METRICS_KEYS.forEach(
          function (t) {
            Object.prototype.hasOwnProperty.call(e, t) &&
              e[t] != null &&
              l.push(e[t]);
          },
        ),
        h(l, t, n, r, a, i)
          .concat(
            l
              .filter(function (e) {
                return t[e] != null;
              })
              .map(function (e) {
                return t[e].label;
              }),
          )
          .map(function (e) {
            return e == null ? void 0 : e.toString();
          })
          .filter(Boolean)
      );
    }
    function C(e, t, n, a, i, l) {
      (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1));
      var s = [];
      o("AdsMgmtColumnCategoriesUtilsMetricsKeys").METRICS_KEYS.forEach(
        function (t) {
          Object.prototype.hasOwnProperty.call(e, t) &&
            e[t] != null &&
            s.push(e[t]);
        },
      );
      var u = o(
          "AdsMgmtColumnCategoriesOmniConversionUtils",
        ).getMergedOmniConversionChannelsMap(null, n, a, i, l),
        c = r("flatMapArray")(s, function (e) {
          return u[e];
        }).filter(function (e) {
          return e != null && t[e] != null;
        }),
        d = s.filter(function (e) {
          return t[e] != null;
        });
      return [].concat(c, d);
    }
    ((l.getMergedConversionCategoryProps = e),
      (l.getMergedCustomConversionCategoryColumns = u),
      (l.getNewConversionChannelMetrics = c),
      (l.getNewConversionTotalMetrics = m),
      (l.getNewConversionTotalMetricsIncludePLTV = p),
      (l.getCurrentConversionChannelMetrics = _),
      (l.getAllColumnLabelsByConversionCategory = y),
      (l.getAllColumnIDsByConversionCategory = C));
  },
  226,
);
