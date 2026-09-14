__d(
  "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsConversionValueUtils",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsOnsiteCLOStandardInfraUtil",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux",
    "AdsVolumeROASUtils",
    "adsRegulatedCategoryIsHECRegulatedCategory",
    "gkx",
    "immutable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {
          campaignGroupMap: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
        },
        function (e, t, n) {
          var a = n.campaignGroupMap;
          return o("AdsMutators").mutateEach(
            e,
            t.campaignIDs,
            o("AdsMutators").chain(
              function (e) {
                return u(e, t.websiteOptimizationObject);
              },
              function (e) {
                var t = r("nullthrows")(a.get(e.id));
                return m(t, e);
              },
              function (e) {
                if (
                  e.destination_type ===
                  r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL
                ) {
                  var n = r("nullthrows")(a.get(e.id));
                  if (
                    (n.objective === r("AdsAPIObjectives").OUTCOME_LEADS &&
                      t.websiteOptimizationObject.custom_event_type !==
                        "LEAD") ||
                    (n.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
                      t.websiteOptimizationObject.custom_event_type !==
                        "PURCHASE")
                  )
                    return r(
                      "AdsCampaignRecordAccessors",
                    ).conversion_value_expression_spec.delete(e);
                }
                return e;
              },
              function (e) {
                var n,
                  a = t.websiteOptimizationObject,
                  i = a.pixel_id;
                return i != null &&
                  ((n = e.promoted_object) == null
                    ? void 0
                    : n.omnichannel_object) != null &&
                  r("gkx")("20768")
                  ? o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").promoted_object.pixel_id
                        .delete,
                      r("AdsCampaignRecordAccessors").promoted_object
                        .custom_event_type.delete,
                      r("AdsCampaignRecordAccessors").promoted_object.pixel_rule
                        .delete,
                      function (e) {
                        return o(
                          "AdsDeliveryOmnichannelUtils",
                        ).setOmnichannelPixelObjectFromCustomConversion(
                          e,
                          i,
                          a.pixel_rule,
                        );
                      },
                    )(e)
                  : e;
              },
              function (e) {
                var n = r("nullthrows")(a.get(e.id));
                return o("AdsVolumeROASUtils").isVolumeROASGuidanceEnabled() &&
                  s(e, n) &&
                  e.bid_constraints != null &&
                  t.roasAverageFloorDefaultValue != null &&
                  t.websiteOptimizationObject.custom_event_type !==
                    "AD_IMPRESSION"
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).bid_constraints.roas_average_floor.set(
                      t.roasAverageFloorDefaultValue,
                    )(e)
                  : e;
              },
            ),
          );
        },
        o("AdsUEditorPromotedObjectSetWebsiteOptimizationFieldsDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t) {
      return (
        e.bid_strategy === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS ||
        t.bid_strategy === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
      );
    }
    function u(e, t) {
      var n;
      return o("AdsMutators").chain(
        (n = r("AdsCampaignRecordAccessors")).promoted_object
          .offline_conversion_data_set_id.delete,
        n.promoted_object.custom_event_type.delete,
        function (e) {
          return o(
            "AdsOnsiteCLOStandardInfraUtil",
          ).isEligibleForOnsiteCLODepAET()
            ? o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").promoted_object
                  .lead_ads_custom_event_type.delete,
                r("AdsCampaignRecordAccessors").promoted_object
                  .lead_ads_custom_event_str.delete,
              )(e)
            : e;
        },
        n.promoted_object.value_semantic_type.delete,
        n.promoted_object.pixel_rule.delete,
        n.promoted_object.custom_conversion_id.delete,
        n.promoted_object.offsite_conversion_event_id.delete,
        n.promoted_object.product_set_id.delete,
        n.promoted_object.mcme_conversion_id.delete,
        n.promoted_object.partner_account_linking_id.delete,
        n.promoted_object.conversion_goal_id.delete,
        n.promoted_object.multi_event_product.delete,
        n.promoted_object.anchor_event_config.delete,
        n.promoted_object.multi_event_conversion_info.delete,
        n.promoted_object.custom_attribution_source_ids.delete,
        n.conversion_goal_id.delete,
        function (e) {
          return c(e, t);
        },
      )(e);
    }
    function c(e, t) {
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(
          t == null ? void 0 : t.pixel_id,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.custom_event_type.set(
          t == null ? void 0 : t.custom_event_type,
        ),
        function (e) {
          return o(
            "AdsOnsiteCLOStandardInfraUtil",
          ).isEligibleForOnsiteCLODepAET()
            ? o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.lead_ads_custom_event_type.set(
                  t == null ? void 0 : t.lead_ads_custom_event_type,
                ),
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.lead_ads_custom_event_str.set(
                  t == null ? void 0 : t.lead_ads_custom_event_str,
                ),
              )(e)
            : e;
        },
        r("AdsCampaignRecordAccessors").promoted_object.pixel_rule.set(
          t == null ? void 0 : t.pixel_rule,
        ),
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.custom_conversion_id.set(
          t == null ? void 0 : t.custom_conversion_id,
        ),
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.offsite_conversion_event_id.set(
          t == null ? void 0 : t.offsite_conversion_event_id,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.product_set_id.set(
          t == null ? void 0 : t.product_set_id,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.custom_event_str.set(
          t == null ? void 0 : t.custom_event_str,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.value_semantic_type.set(
          t == null ? void 0 : t.value_semantic_type,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.mcme_conversion_id.set(
          t == null ? void 0 : t.mcme_conversion_id,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.multi_event_product.set(
          t == null ? void 0 : t.multi_event_product,
        ),
        function (e) {
          return (t == null ? void 0 : t.anchor_event_config) !== void 0
            ? r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.anchor_event_config.set(
                t.anchor_event_config != null
                  ? r("immutable").fromJS(t.anchor_event_config)
                  : null,
              )(e)
            : e;
        },
        function (e) {
          return (t == null ? void 0 : t.multi_event_conversion_info) !== void 0
            ? r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.multi_event_conversion_info.set(
                t.multi_event_conversion_info != null
                  ? r("immutable").fromJS(t.multi_event_conversion_info)
                  : null,
              )(e)
            : e;
        },
        r("AdsCampaignRecordAccessors").conversion_goal_id.set(
          t == null ? void 0 : t.conversion_goal_id,
        ),
        function (e) {
          return d(e, t);
        },
      )(e);
    }
    function d(e, t) {
      var n;
      if (
        (t == null ? void 0 : t.post_conversions) == null ||
        t.post_conversions.length === 0
      )
        return r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.post_conversions.delete(e);
      var o = t.post_conversions,
        a = o[0];
      return r(
        "AdsCampaignRecordAccessors",
      ).promoted_object.post_conversions.set(
        r("immutable").List([
          r("immutable").Map(
            ((n = {}),
            (n.custom_event_type = a == null ? void 0 : a.custom_event_type),
            (n.pixel_rule =
              (a == null ? void 0 : a.pixel_rule) != null && a.pixel_rule !== ""
                ? a.pixel_rule
                : null),
            (n.post_conversion_attribute =
              a == null ? void 0 : a.post_conversion_attribute),
            (n.post_conversion_event_name =
              a == null ? void 0 : a.post_conversion_event_name),
            n),
          ),
        ]),
        e,
      );
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c = o(
          "AdsAPICampaignGroupRecordUtils",
        ).getPromotedObjectProductCatalogID(e),
        d =
          ((n =
            (a = e.special_ad_categories) == null
              ? void 0
              : a.some(r("adsRegulatedCategoryIsHECRegulatedCategory"))) != null
            ? n
            : !1) &&
          ((i =
            (l = e.special_ad_category_country) == null
              ? void 0
              : l.some(function (e) {
                  return e === "US";
                })) != null
            ? i
            : !1),
        m = o("AdsConversionValueUtils").getEligibleValueSemanticTypes(
          e.objective,
          t.optimization_goal,
          o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            campaign: t,
            campaignGroup: e,
          }),
          (s = t.promoted_object) == null ? void 0 : s.custom_event_type,
          r("isTruthy")(
            (u = t.promoted_object) == null ? void 0 : u.custom_conversion_id,
          ),
          c != null,
          d,
        );
      return m.length === 1
        ? r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.value_semantic_type.set(m[0], t)
        : t;
    }
    var p = e;
    l.default = p;
  },
  98,
);
