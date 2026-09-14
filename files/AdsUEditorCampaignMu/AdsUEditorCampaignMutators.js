__d(
  "AdsUEditorCampaignMutators",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignPaths",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountLevelPlacementExclusionsUtils",
    "AdsAccountUtils",
    "AdsAppUtils",
    "AdsBiddingOptimizationUtils",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsBrandSafetyUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsFrequencyControlEditorUtils",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementBrandSafetyUtils",
    "AdsPlacementsFacebookReelsOverlayPositionPlugin",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsCampaignGetBudgetMode",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "adsDeliveryUpdateEngagedVideoViewAttributionWindow",
    "adsDeliveryUpdateViewThroughAttributionWindow",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActiveInstagramPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(i, n),
        m = o("AdsBiddingOptimizationUtils").shouldFlipAutobidValue(
          u,
          t,
          i,
          d,
          l,
          s,
          n,
        );
      if (m) {
        var p = !u,
          _ = e.currency,
          f = e.business_country_code;
        (c(r("AdsAPICampaignPaths").IS_AUTOBID, [a], p),
          c(
            r("AdsAPICampaignPaths").BID_AMOUNT,
            [a],
            p
              ? null
              : r("AdsCampaignOptimizationPluginResolver")
                  .resolve({
                    objective: i,
                    promotedObjectType: d,
                    destinationType: n.destination_type,
                  })
                  .getDefaultBidAmount(l, s, n, _, f),
          ));
      }
    }
    function s(t, n, a, i, l, s) {
      s(r("AdsAPICampaignPaths").OPTIMIZATION_GOAL, [a], l);
      var u = i.objective,
        c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(u, n),
        d = !r("adsCampaignGetBudgetMode")(n.daily_budget, n.lifetime_budget),
        m = r("adsBillingEventGetDefaultDEPRECATED")(i.buyingType, u, l, c, t);
      if ((s(r("AdsAPICampaignPaths").BILLING_EVENT, [a], m), !d)) {
        var p;
        (s(
          (p = r("AdsAPICampaignPaths")).BID_STRATEGY,
          [a],
          r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        ),
          s(p.IS_AVERAGE_PRICE_PACING, [a], !1),
          s(p.IS_AUTOBID, [a], !0),
          s(p.BID_AMOUNT, [a], null));
      }
      m && e(t, i.buyingType, n, a, u, l, m, !0, s);
      var _ = o(
        "AdsFrequencyControlEditorUtils",
      ).computeDefaultFrequencyControlSpecs(u, l, c, t);
      s(r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS, [a], _);
      var f = n.optimization_goal,
        g =
          r("AdsAppUtils").isMobileAppInstall(u, c) ||
          (u === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT &&
            f === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS);
      g &&
        s(
          r("AdsAPICampaignPaths").PROMOTED_OBJECT.CUSTOM_EVENT_TYPE,
          [a],
          void 0,
        );
      var h = r("AdsCampaignOptimizationPluginResolver").resolve({
        objective: u,
        promotedObjectType: c,
        destinationType: n.destination_type,
      });
      if (
        !o("AdsBiddingOptimizationUtils").canUseAveragePricePacing(
          h,
          l,
          m || r("AdsAPIBillingEvents").NONE,
          d,
          t,
        )
      ) {
        var y = n.is_average_price_pacing;
        y != null &&
          s(r("AdsAPICampaignPaths").IS_AVERAGE_PRICE_PACING, [a], !1);
      }
      var C = h.getDefaultConversionWindowLength(l, t);
      n.attribution_spec &&
        s(
          r("AdsAPICampaignPaths").ATTRIBUTION_SPEC,
          [a],
          r("adsDeliveryUpdateClickThroughAttributionWindow")(
            n.attribution_spec.toJS(),
            C,
          ),
        );
    }
    function u(e, t, n) {
      var o,
        a =
          (o = e.optimization_goal) != null
            ? o
            : r("AdsAPIOptimizationGoals").NONE,
        i = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: t,
          promotedObjectType: n,
          destinationType: e.destination_type,
        }),
        l = i.getDefaultConversionWindowLength(a),
        s = i.getDefaultViewConversionWindowLength(),
        u = r("adsDeliveryUpdateClickThroughAttributionWindow")(
          e.attribution_spec ? e.attribution_spec.toJS() : [],
          l,
        ),
        c = i.getDefaultEngagedVideoViewWindowLength();
      return (
        (u = r("adsDeliveryUpdateEngagedVideoViewAttributionWindow")(u, c)),
        r("AdsCampaignRecordAccessors").attribution_spec.set(
          r("immutable").fromJS(
            r("adsDeliveryUpdateViewThroughAttributionWindow")(u, s),
          ),
          e,
        )
      );
    }
    function c(e, t, n) {
      if (
        t === r("AdsAPIObjectives").CONVERSIONS ||
        t === r("AdsAPIObjectives").LINK_CLICKS ||
        t === r("AdsAPIObjectives").STORE_VISITS
      ) {
        var o,
          a = r("AdsCampaignOptimizationPluginResolver").resolve({
            objective: t,
            promotedObjectType: n,
            destinationType: e.destination_type,
          }),
          i = a.getDefaultOptimizationGoal({
            hasBackingApplication: !!(
              (o = e.promoted_object) != null && o.application_id
            ),
          });
        return r("AdsCampaignRecordAccessors").optimization_goal.set(i, e);
      }
      return e;
    }
    function d(e, t) {
      var n = t;
      for (var a of e) {
        var i = a[0],
          l = a[1];
        e: {
          if (i === "facebook") {
            var s,
              u,
              c =
                (s =
                  (u = n.targeting.facebook_positions) == null
                    ? void 0
                    : u.toArray()) != null
                  ? s
                  : [],
              d = o("AdsAccountLevelPlacementExclusionsUtils").filterPositions(
                c,
                l.excludedPositions,
              );
            d.length === 0
              ? (n = o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").targeting.facebook_positions
                    .delete,
                )(n))
              : (n = o("AdsMutators").chain(
                  r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.facebook_positions.set(r("immutable").List(d)),
                )(n));
            break e;
          }
          if (i === "audience_network") {
            var m,
              p,
              _ =
                (m =
                  (p = n.targeting.audience_network_positions) == null
                    ? void 0
                    : p.toArray()) != null
                  ? m
                  : [],
              f = o("AdsAccountLevelPlacementExclusionsUtils").filterPositions(
                _,
                l.excludedPositions,
              );
            if (f.length === 0) {
              if (
                ((n = o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").targeting
                    .audience_network_positions.delete,
                )(n)),
                _.length > 0 && l.excludedPositions.length > 0)
              ) {
                var g;
                n = r(
                  "AdsCampaignRecordAccessors",
                ).targeting.publisher_platforms.set(
                  r("immutable").List(
                    ((g = n.toJS().targeting.publisher_platforms) != null
                      ? g
                      : []
                    ).filter(function (e) {
                      return e !== "audience_network";
                    }),
                  ),
                  n,
                );
              }
            } else
              n = o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.audience_network_positions.set(
                  r("immutable").List(f),
                ),
              )(n);
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              i,
          );
        }
      }
      return n;
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c = t == null ? void 0 : t.accountPlacementExclusions,
        m = o(
          "AdsAccountLevelPlacementExclusionsUtils",
        ).getAccountLevelPlacementExclusionsPerPlatform(c),
        _ = e.targeting.publisher_platforms,
        f =
          (n =
            (a = e.targeting.facebook_positions) == null ? void 0 : a.toJS()) !=
          null
            ? n
            : [],
        g = e.targeting.instagram_positions,
        h = e.targeting.threads_positions,
        y = babelHelpers.extends({}, t, {
          spec: babelHelpers.extends({}, t.spec, {
            publisher_platforms: _ ? _.toJS() : [],
            facebook_positions: f,
            instagram_positions: g ? g.toJS() : [],
            threads_positions: h ? h.toJS() : [],
          }),
        }),
        C = e,
        b = r("AdsAccountUtils").hasCapabilityFromList(
          t.capabilities,
          "CAN_SEE_FEED_IF",
        ),
        v = o("AdsPlacementBrandSafetyUtils").isThreadsFeedIfAdAccount(),
        S = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          y.spec,
          "instream_video",
        ),
        R = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          y.spec,
          "audience_network",
        ),
        L = r("AdsPlacementsFacebookReelsOverlayPositionPlugin").isActive(
          y.spec,
        ),
        E = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          y.spec,
          "feed",
        ),
        k = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
          y.spec,
          "stream",
        ),
        I = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          y.spec,
          "facebook_reels",
        ),
        T = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
          y.spec,
          "reels",
        ),
        D = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
          y.spec,
          "reels_overlay",
        ),
        x = o("AdsPlacementAPISpecReaderUtils").isActiveThreadsPosition(
          y.spec,
          "threads_stream",
        );
      ((C = p(
        C,
        S || L || D,
        R,
        E || k,
        I || T,
        x,
        b,
        v,
        t.isReelsTrendingAds === !0,
      )),
        (C = d(m, C)));
      var $ =
          (i =
            (l = C.toJS().targeting) == null
              ? void 0
              : l.brand_safety_content_filter_levels) != null
            ? i
            : [],
        P = [
          o("AdsBrandSafetyContentFilterLevelConstants")
            .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_RELAXED,
          o("AdsBrandSafetyContentFilterLevelConstants")
            .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_STANDARD,
          o("AdsBrandSafetyContentFilterLevelConstants")
            .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_STRICT,
        ],
        N = $.filter(function (e) {
          return P.includes(e);
        }),
        M = m.get("audience_network");
      return (
        M != null &&
          M.excludedPositions.length > 0 &&
          N.length > 0 &&
          (C = r(
            "AdsCampaignRecordAccessors",
          ).targeting.brand_safety_content_filter_levels.set(
            r("immutable").List(
              $.filter(function (e) {
                return P.includes(e);
              }),
            ),
            C,
          )),
        ((s = C.toJS().targeting.brand_safety_content_filter_levels) != null
          ? s
          : []
        ).length === 0 &&
          (C = r(
            "AdsCampaignRecordAccessors",
          ).targeting.brand_safety_content_filter_levels.delete(C)),
        ((u = C.toJS().targeting.publisher_platforms) != null ? u : [])
          .length === 0 &&
          (C = r(
            "AdsCampaignRecordAccessors",
          ).targeting.publisher_platforms.delete(C)),
        (C = r("AdsCampaignRecordAccessors").placement.set(
          r("immutable").fromJS(
            o(
              "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
            ).convertCampaignRecordToPlacementSpec(C),
          ),
        )(C)),
        C
      );
    }
    function p(e, t, n, o, a, i, l, s, u) {
      return (
        u === void 0 && (u = !1),
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.brand_safety_content_filter_levels.set(
          r("AdsBrandSafetyUtils").getNextCampaignContentFilterRecord(
            e,
            t,
            n,
            o,
            a,
            i,
            l,
            s,
            u,
          ),
          e,
        )
      );
    }
    ((l.setOptimizationGoal = s),
      (l.updateConversionWindowLength = u),
      (l.updateOptimizationGoal = c),
      (l.updateBundledSettings = m));
  },
  98,
);
