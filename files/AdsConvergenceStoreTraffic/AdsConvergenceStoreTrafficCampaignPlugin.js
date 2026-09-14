__d(
  "AdsConvergenceStoreTrafficCampaignPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceDefaultCampaignPlugin",
    "AdsCustomAudienceType",
    "AdsMutators",
    "AdsOfflineConversionTargetingUtils",
    "AdsOptimizationMutationUtils",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementUtils",
    "AdsPromotedObjectTypes",
    "immutable",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o, a;
      if (e !== !0) return null;
      var i =
          (o = t.promoted_object) == null
            ? void 0
            : o.offline_conversion_data_set_id,
        l = (a = t.promoted_object) == null ? void 0 : a.custom_event_type;
      return r("objectValues")(n || {}).find(function (e) {
        var t, n, r, o;
        return (
          ((e == null || (t = e.data_set) == null ? void 0 : t.id) === i &&
            (e == null ||
            (n = e.data_set) == null ||
            (n = n.optimization_status) == null
              ? void 0
              : n.event) === l) ||
          (e == null ||
          (r = e.data_set) == null ||
          (r = r.optimization_status) == null
            ? void 0
            : r.status) === "ACTIVE" ||
          (e == null || (o = e.data_set) == null ? void 0 : o.source) ===
            "OFFLINE_CATALOG"
        );
      });
    }
    function s(e) {
      return e != null
        ? r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS
        : r("AdsAPIOptimizationGoals").REACH;
    }
    function u(e, t, n) {
      return e != null && n != null && _(t, n) ? c(e, t, n) : d(t, n);
    }
    function c(e, t, n) {
      var r = m(t, n);
      return o("AdsOfflineConversionTargetingUtils").setDefaultGeoTargeting(
        r,
        e,
      );
    }
    function d(e, t) {
      var n = o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").targeting.geo_locations.delete,
        r("AdsCampaignRecordAccessors").targeting.excluded_geo_locations.delete,
        r("AdsCampaignRecordAccessors").targeting.place_page_set_ids.set(
          r("immutable").List(),
        ),
      )(e);
      return (t == null ? void 0 : t.isUsingPageSetForTargeting) !== !0 ||
        t.pageSetID == null
        ? n
        : r("AdsCampaignRecordAccessors").targeting.place_page_set_ids.set(
            r("immutable").List([t.pageSetID]),
            n,
          );
    }
    function m(e, t) {
      var n = p(e, t);
      return n
        ? o("AdsOfflineConversionTargetingUtils").setCustomAudience(e, n)
        : e;
    }
    function p(t, n) {
      var o = e(
        n.isAccountEligibleForOfflineConversionOptimization,
        t,
        n.conversions,
      );
      if (!o) return null;
      var a = n.customAudiences;
      if (!a) return null;
      var i = o.data_set.owner_business_id,
        l = a.filter(function (e) {
          return e.owner_account_info.business_id === i;
        });
      if (l.length === 0) return null;
      var s = l.find(function (e) {
          return (
            e.subtype ===
            r("AdsCustomAudienceType").SUBTYPES.OFFLINE_REMARKETING
          );
        }),
        u = l[0];
      return s != null ? s : u;
    }
    function _(t, n) {
      var o,
        a = e(
          n.isAccountEligibleForOfflineConversionOptimization,
          t,
          n.conversions,
        ),
        i = s(a),
        l = i === r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS;
      if (!l) return !1;
      var u =
        (a == null || (o = a.data_set) == null ? void 0 : o.source) ===
        "OFFLINE_CATALOG";
      return !!u;
    }
    function f(t, n) {
      var a = n.account,
        i = n.conversions,
        l = n.eligibilityInfo,
        u = n.isAccountEligibleForOfflineConversionOptimization,
        c = e(u, t, i),
        d = s(c),
        m = t.optimization_goal;
      if (m === d) return t;
      var p = r("AdsCampaignRecordAccessors").optimization_goal.set(d, t),
        _ = d === r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS;
      if (_) {
        var f, g;
        if (
          ((p = o("AdsMutators").chain(
            r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.offline_conversion_data_set_id.set(
              c == null || (f = c.data_set) == null ? void 0 : f.id,
            ),
            r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.custom_event_type.set(
              c == null ? void 0 : c.custom_event_type,
            ),
          )(p)),
          (c == null || (g = c.data_set) == null ? void 0 : g.source) ===
            "OFFLINE_CATALOG")
        ) {
          var h;
          p = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.product_set_id.set(
            c == null || (h = c.data_set) == null ? void 0 : h.product_set_id,
            p,
          );
        }
      } else
        p = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object
            .offline_conversion_data_set_id.delete,
          r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
            .delete,
          r("AdsCampaignRecordAccessors").promoted_object.product_set_id.delete,
        )(p);
      if (
        ((p =
          a != null
            ? o("AdsOptimizationMutationUtils").resetOptimizationRelatedFields(
                a,
                p,
                r("AdsCampaignOptimizationPluginResolver").resolve({
                  objective: r("AdsAPIObjectives").STORE_VISITS,
                  promotedObjectType: _
                    ? r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET
                    : r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID,
                  destinationType: o(
                    "AdsAPICampaignRecordUtils",
                  ).getDestinationType(p),
                }),
                r("AdsAPIObjectives").STORE_VISITS,
                {
                  campaign: t,
                  hasBackingApplication: !1,
                  prefilledOptimizationGoal: d,
                  hasOfflineConversionSelected: _,
                },
              )
            : p),
        !l)
      )
        return p;
      var y = r("AdsPlacementUtils").refreshPlacements(l, d);
      return o("AdsCampaignRawSpecUtils").setCampaignPlacement(p, y);
    }
    var g = babelHelpers.extends({}, r("AdsConvergenceDefaultCampaignPlugin"), {
        type: "convergenceCampaign",
        key: "campaign/store-traffic",
        pivots: { objective: r("AdsAPIObjectives").STORE_VISITS },
        __mergeObjectiveSpecificStaticDefaults: function (t, n) {
          var e,
            a,
            i = n == null ? void 0 : n.account,
            l = i == null ? void 0 : i.capabilities,
            s =
              l != null
                ? o(
                    "AdsPlacementEligibilityInfoUtils",
                  ).buildEligibilityInformationFromCampaignSpec(
                    t,
                    r("AdsBuyingTypes").AUCTION,
                    l,
                    r("AdsAPIObjectives").STORE_VISITS,
                    void 0,
                    void 0,
                    n == null ||
                      (e = n.storeTrafficData) == null ||
                      (e = e.locationPage) == null
                      ? void 0
                      : e.id,
                  )
                : null,
            c = o("AdsMutators").chain(
              function (e) {
                return r(
                  "AdsCampaignRecordAccessors",
                ).targeting.geo_locations.delete(e);
              },
              r("AdsCampaignRecordAccessors").targeting.excluded_geo_locations
                .delete,
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.place_page_set_id.set(
                n == null || (a = n.storeTrafficData) == null
                  ? void 0
                  : a.pageSetID,
              ),
              r("AdsCampaignRecordAccessors").targeting.place_page_set_ids.set(
                r("immutable").List(),
              ),
            )(t);
          c = u(i, c, n == null ? void 0 : n.storeTrafficData);
          var d = n == null ? void 0 : n.storeTrafficData;
          return (
            (c = f(c, {
              account: i,
              conversions: d == null ? void 0 : d.conversions,
              eligibilityInfo: s,
              isAccountEligibleForOfflineConversionOptimization:
                d == null
                  ? void 0
                  : d.isAccountEligibleForOfflineConversionOptimization,
            })),
            c
          );
        },
      }),
      h = g;
    l.default = h;
  },
  98,
);
