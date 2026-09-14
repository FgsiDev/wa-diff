__d(
  "AdsUEditorCampaignPromotedObjectSetVariationReducerPlugin",
  [
    "AccountAttributionEvent",
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "AdsBwIUtils",
    "AdsCampaignPromotedObjectVariationMutators",
    "AdsCampaignRecordAccessors",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUECampaignIncrementalAttributionUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignPromotedObjectSetVariationDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsValueOptimizationUtils",
    "AdsVolumeROASUtils",
    "AppAndWebLPVUtils",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsUEditorAccountSelector",
    "gkx",
    "immutable",
    "isPCALoggingAndUIFix",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          campaignIDToCampaignGroupMap: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
        },
        function (e, t, n) {
          var a = n.account,
            i = n.campaignIDToCampaignGroupMap,
            l = n.eligibilityInformation;
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
            var n,
              s,
              m =
                ((n = e.promoted_object) == null
                  ? void 0
                  : n.full_funnel_objective) != null &&
                ((s = e.promoted_object) == null
                  ? void 0
                  : s.full_funnel_objective) !==
                  r("AdsAPIObjectives").OUTCOME_SALES;
            if (m) return e;
            var g = r("nullthrows")(i.get(e.id));
            if (t.variation === "PRODUCT_SET_AND_OMNICHANNEL")
              return u(e, t, a, g, l);
            if (t.variation === "PRODUCT_SET_AND_IN_STORE") return c(e, t, l);
            if (t.variation === "PRODUCT_SET_WEBSITE_APP_AND_INSTORE")
              return h(e, t, l);
            if (t.variation === "PRODUCT_SET_AND_WEBSITE")
              return d(e, t, a, g, l);
            if (t.variation === "PRODUCT_SET_AND_APP") return p(e, t, a, g, l);
            if (t.variation === "PRODUCT_SET_AND_PHONE_CALL") return _(e, t, l);
            if (t.variation === "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL")
              return o(
                "AdsCampaignPromotedObjectVariationMutators",
              ).setProductSetAndWebsiteAndPhoneCallVariation(
                e,
                t.pixelID,
                a,
                g,
                l,
              );
            if (t.clear === !0 || t.variation == null) {
              var y = g.is_full_funnel === !0;
              return f(e, l, y);
            }
            return e;
          });
        },
        o("AdsUEditorCampaignPromotedObjectSetVariationDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t) {
      return t.pixelID == null && t.appID == null
        ? !1
        : t.isCollaborativeAdsCatalogSegment === !0
          ? !0
          : t.variation === "PRODUCT_SET_AND_OMNICHANNEL"
            ? e
            : !0;
    }
    function u(e, t, n, a, i) {
      var l,
        u = e.optimization_goal,
        c = (l = e.promoted_object) == null ? void 0 : l.variation;
      t.originFromL3CatalogSelector === !0 &&
        (u = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS);
      var d = e;
      d = r(
        "AdsCampaignRecordAccessors",
      ).promoted_object.omnichannel_object.delete(d);
      var p =
        t.appID != null &&
        t.pixelID != null &&
        t.defaultUrls != null &&
        t.defaultUrls.length > 0;
      (p &&
        ((d = o(
          "AdsDeliveryOmnichannelUtils",
        ).setDefaultPixelForOmnichannelOnsitePixelObject(
          d,
          [t.pixelID].filter(Boolean),
        )),
        (d = o(
          "AdsDeliveryOmnichannelUtils",
        ).setDefaultAppForOmnichannelOnsiteAppObject(
          d,
          [t.appID].filter(Boolean),
        )),
        (d = o(
          "AdsDeliveryOmnichannelUtils",
        ).setObjectStoreUrlsForOmnichannelAppObject(d, t.defaultUrls))),
        o("isPCALoggingAndUIFix").isPCALoggingAndUIFix() &&
          (d = r("AdsCampaignRecordAccessors").conversion_locations.set(
            r("AdsPromotedObjectTypes").WEB_AND_APP,
            d,
          )),
        t.isCollaborativeAdsCatalogSegment === !0 &&
          (d = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("PURCHASE", d)));
      var _ = s(p, t),
        f =
          t.isCollaborativeAdsCatalogSegment === !0 &&
          e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE,
        g = m(e, a);
      g && (u = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS);
      var h = f
        ? r("AdsAPIOptimizationGoals").VALUE
        : c === t.variation || p
          ? u
          : o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
                e,
                n,
                a,
                _,
                "catalog_pfr_laser_based",
                !0,
              )
            ? r("AdsAPIOptimizationGoals").VALUE
            : _ || g
              ? r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
              : r("AdsAPIOptimizationGoals").LINK_CLICKS;
      (a.is_full_funnel === !0 &&
        (h = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS),
        r("gkx")("8736") &&
          o("AdsBwIUtils").isBwICampaignGroup(a) &&
          a.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
          (h = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS));
      var C = a.objective,
        b = a.is_autobid,
        v = a.is_average_price_pacing,
        S = a.bid_strategy,
        R = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          e,
        ),
        L = r("adsBillingEventGetDefaultDEPRECATED")(
          r("AdsBuyingTypes").AUCTION,
          C,
          h,
          R,
          n,
          S,
          !0,
          b,
          v,
        );
      return (
        L != null &&
          (d = r("AdsCampaignRecordAccessors").billing_event.set(L, d)),
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").destination_type.delete,
          r("AdsCampaignRecordAccessors").optimization_goal.set(h),
          r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
          r("AdsCampaignRecordAccessors").promoted_object.application_id.delete,
          r("AdsCampaignRecordAccessors").promoted_object.variation.set(
            t.variation,
          ),
          function (e) {
            return o(
              "AdsCampaignPromotedObjectVariationMutators",
            ).setDefaultAttributionSpec(e, n, a, h);
          },
          function (e) {
            return o(
              "AdsCampaignPromotedObjectVariationMutators",
            ).modifyAttributionSpecOnVariationSwitch(t.variation, h, e);
          },
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, i);
          },
          function (e) {
            return y(e, h);
          },
        )(d)
      );
    }
    function c(e, t, n) {
      var a,
        i = o(
          "AdsDeliveryOmnichannelUtils",
        ).setDefaultPixelForOmnichannelOnsitePixelObject(
          e,
          [t.pixelID].filter(Boolean),
        );
      i = o("AdsDeliveryOmnichannelUtils").setOfflineObjectForOmnichannelObject(
        i,
        t.offlineDatasetID,
      );
      var l = [
          {
            event_type: r("AccountAttributionEvent").CLICK_THROUGH,
            window_days: 7,
          },
          {
            event_type: r("AccountAttributionEvent").VIEW_THROUGH,
            window_days: 1,
          },
        ],
        s = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
      return o("AdsMutators").chain(
        (a = r("AdsCampaignRecordAccessors")).is_dynamic_creative.delete,
        a.is_dynamic_creative_optimization.delete,
        a.destination_type.delete,
        a.promoted_object.pixel_id.delete,
        a.promoted_object.application_id.delete,
        a.promoted_object.omnichannel_object.app.delete,
        a.promoted_object.variation.set(t.variation),
        a.optimization_goal.set(s),
        a.promoted_object.custom_event_type.set("PURCHASE"),
        a.attribution_spec.set(r("immutable").fromJS(l)),
        a.billing_event.set(r("AdsAPIBillingEvents").IMPRESSIONS),
        function (e) {
          return o(
            "AdsCampaignPromotedObjectVariationMutators",
          ).modifyAttributionSpecOnVariationSwitch(t.variation, s, e);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(e, n);
        },
        a.targeting.user_os.delete,
        a.targeting.user_device.delete,
        a.targeting.is_whatsapp_destination_ad.delete,
        a.targeting.app_install_state.delete,
      )(i);
    }
    function d(e, t, n, a, i) {
      var l = s(!1, t),
        u =
          t.isCollaborativeAdsCatalogSegment === !0 &&
          e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE,
        c =
          u ||
          (e.optimization_goal == null &&
            o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
              e,
              n,
              a,
              l,
              "catalog_pfr_laser_based",
              !0,
            )),
        d = m(e, a),
        p =
          t.pixelID != null
            ? c
              ? r("AdsAPIOptimizationGoals").VALUE
              : r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
            : d
              ? r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
              : r("AdsAPIOptimizationGoals").LINK_CLICKS,
        _ =
          d && e.optimization_goal === r("AdsAPIOptimizationGoals").LINK_CLICKS
            ? null
            : e.optimization_goal,
        f = g(_, p),
        h = e;
      return (
        a.is_full_funnel === !0 &&
          ((f = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS),
          (h = r("AdsCampaignRecordAccessors").conversion_locations.set(
            r("AdsPromotedObjectTypes").WEBSITE,
            h,
          ))),
        o("isPCALoggingAndUIFix").isPCALoggingAndUIFix() &&
          (h = r("AdsCampaignRecordAccessors").conversion_locations.set(
            r("AdsPromotedObjectTypes").WEBSITE,
            h,
          )),
        t.isCollaborativeAdsCatalogSegment === !0 &&
          (h = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("PURCHASE", h)),
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").destination_type.delete,
          r("AdsCampaignRecordAccessors").promoted_object.omnichannel_object
            .delete,
          r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(
            t.pixelID,
          ),
          r("AdsCampaignRecordAccessors").promoted_object.application_id.delete,
          r("AdsCampaignRecordAccessors").promoted_object.variation.set(
            t.variation,
          ),
          r("AdsCampaignRecordAccessors").optimization_goal.set(f),
          function (e) {
            return o(
              "AdsCampaignPromotedObjectVariationMutators",
            ).setDefaultAttributionSpec(e, n, a, f);
          },
          function (e) {
            return o(
              "AdsCampaignPromotedObjectVariationMutators",
            ).modifyAttributionSpecOnVariationSwitch(t.variation, f, e);
          },
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, i);
          },
          function (e) {
            return y(e, f);
          },
        )(h)
      );
    }
    function m(e, t) {
      var n = e.bid_strategy,
        a = t.bid_strategy;
      return (
        o("AdsVolumeROASUtils").isVolumeROASEnabled() &&
        (n === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS ||
          a === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS)
      );
    }
    function p(e, t, n, a, i) {
      var l =
          e.optimization_goal ===
            r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
          e.optimization_goal === r("AdsAPIOptimizationGoals").LINK_CLICKS ||
          e.optimization_goal === r("AdsAPIOptimizationGoals").REACH ||
          (o("AppAndWebLPVUtils").shouldUseAppLpvGA() &&
            e.optimization_goal ===
              r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS)
            ? e.optimization_goal
            : null,
        s =
          t.appID != null
            ? r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
            : r("AdsAPIOptimizationGoals").LINK_CLICKS,
        u = g(l, s),
        c = e;
      return (
        o("isPCALoggingAndUIFix").isPCALoggingAndUIFix() &&
          (c = r("AdsCampaignRecordAccessors").conversion_locations.set(
            r("AdsPromotedObjectTypes").MOBILE_APP,
            c,
          )),
        t.isCollaborativeAdsCatalogSegment === !0 &&
          (c = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("PURCHASE", c)),
        a.is_full_funnel === !0 &&
          (u = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS),
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").destination_type.delete,
          r("AdsCampaignRecordAccessors").promoted_object.omnichannel_object
            .delete,
          r("AdsCampaignRecordAccessors").promoted_object.application_id.set(
            t.appID,
          ),
          r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
          r("AdsCampaignRecordAccessors").promoted_object.variation.set(
            t.variation,
          ),
          r("AdsCampaignRecordAccessors").optimization_goal.set(u),
          function (e) {
            return o(
              "AdsCampaignPromotedObjectVariationMutators",
            ).setDefaultAttributionSpec(e, n, a, u);
          },
          function (e) {
            return o(
              "AdsCampaignPromotedObjectVariationMutators",
            ).modifyAttributionSpecOnVariationSwitch(t.variation, u, e);
          },
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, i);
          },
          function (e) {
            return y(e, u);
          },
        )(c)
      );
    }
    function _(e, t, n) {
      var a,
        i = r("AdsAPIOptimizationGoals").QUALITY_CALL,
        l = [
          {
            event_type: r("AccountAttributionEvent").CLICK_THROUGH,
            window_days: 1,
          },
        ];
      return o("AdsMutators").chain(
        (a = r("AdsCampaignRecordAccessors")).destination_type.delete,
        a.promoted_object.omnichannel_object.delete,
        a.promoted_object.application_id.delete,
        a.promoted_object.pixel_id.delete,
        a.promoted_object.variation.set(t.variation),
        a.optimization_goal.set(i),
        a.attribution_spec.set(r("immutable").fromJS(l)),
        function (e) {
          return o(
            "AdsCampaignPromotedObjectVariationMutators",
          ).modifyAttributionSpecOnVariationSwitch(t.variation, i, e);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(e, n);
        },
        a.billing_event.set(r("AdsAPIBillingEvents").IMPRESSIONS),
      )(e);
    }
    function f(e, t, n) {
      var a = e,
        i = g(e.optimization_goal, r("AdsAPIOptimizationGoals").LINK_CLICKS);
      return (
        n === !0 &&
          ((i = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS),
          (a = r("AdsCampaignRecordAccessors").conversion_locations.set(
            r("AdsPromotedObjectTypes").WEBSITE,
            a,
          ))),
        (a = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").destination_type.delete,
          r("AdsCampaignRecordAccessors").promoted_object.variation.delete,
          r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
          r("AdsCampaignRecordAccessors").promoted_object.application_id.delete,
          r("AdsCampaignRecordAccessors").optimization_goal.set(i),
          function (e) {
            return o("AdsPlacementReducerUtils").resetPlacement(e, t);
          },
          function (e) {
            return y(e, i);
          },
        )(a)),
        (a = r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.delete(a)),
        a
      );
    }
    function g(e, t) {
      return e === r("AdsAPIOptimizationGoals").QUALITY_CALL
        ? t
        : e != null
          ? e
          : t;
    }
    function h(e, t, n) {
      var a,
        i = [
          {
            event_type: r("AccountAttributionEvent").CLICK_THROUGH,
            window_days: 7,
          },
          {
            event_type: r("AccountAttributionEvent").VIEW_THROUGH,
            window_days: 1,
          },
        ],
        l = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
      return o("AdsMutators").chain(
        (a = r("AdsCampaignRecordAccessors")).is_dynamic_creative.delete,
        a.is_dynamic_creative_optimization.delete,
        a.destination_type.delete,
        a.promoted_object.omnichannel_object.delete,
        a.promoted_object.variation.set(t.variation),
        a.optimization_goal.set(l),
        a.promoted_object.custom_event_type.set("PURCHASE"),
        a.attribution_spec.set(r("immutable").fromJS(i)),
        a.billing_event.set(r("AdsAPIBillingEvents").IMPRESSIONS),
        function (e) {
          return o(
            "AdsCampaignPromotedObjectVariationMutators",
          ).modifyAttributionSpecOnVariationSwitch(t.variation, l, e);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(e, n);
        },
        a.targeting.user_os.delete,
        a.targeting.user_device.delete,
        a.targeting.is_whatsapp_destination_ad.delete,
        a.targeting.app_install_state.delete,
      )(e);
    }
    function y(e, t) {
      return t != null &&
        !o(
          "AdsUECampaignIncrementalAttributionUtils",
        ).isValidOptimizationGoalForIncrementalAttribution(t) &&
        e.is_incremental_attribution_enabled === !0
        ? r(
            "AdsCampaignRecordAccessors",
          ).is_incremental_attribution_enabled.set(!1, e)
        : e;
    }
    var C = e;
    l.default = C;
  },
  98,
);
