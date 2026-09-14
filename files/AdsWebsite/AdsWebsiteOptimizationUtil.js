__d(
  "AdsWebsiteOptimizationUtil",
  [
    "AdsCampaignRecordAccessors",
    "AdsEventsManagerCustomConversionDisplayUtils",
    "AdsMutators",
    "SignalsUnifiedStandardEventsUtils",
    "SignalsWebsiteOptimizableConversionBaseTypeEnum",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var r = t.conversionCategory,
        a = t.eventName,
        i = t.pixelID,
        l =
          a != null &&
          !o(
            "SignalsUnifiedStandardEventsUtils",
          ).isStandardEventByDataSourceType(a, "PIXEL");
      (l && a != null && (e.custom_event_str = a),
        (e.pixel_id = i),
        (e.custom_event_type = r),
        n &&
          ((e.lead_ads_custom_event_type = r),
          l && a != null && (e.lead_ads_custom_event_str = a)));
    }
    function s() {
      return [
        "custom_conversion_id",
        "custom_event_type",
        "pixel_id",
        "pixel_rule",
      ];
    }
    function u(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsCampaignRecordAccessors")).promoted_object
          .custom_conversion_id.delete,
        t.promoted_object.custom_event_type.delete,
        t.promoted_object.pixel_id.delete,
        t.promoted_object.value_semantic_type.delete,
        t.promoted_object.pixel_rule.delete,
        t.promoted_object.pixel_aggregation_rule.delete,
        t.promoted_object.retention_days.delete,
      )(e);
    }
    function c(e, t, n) {
      if (t != null) {
        var r = o(
          "AdsEventsManagerCustomConversionDisplayUtils",
        ).getPostConversionInfoFromAdvancedRule(t);
        if (r != null) {
          var a = r.intention,
            i = r.mainEvent,
            l = r.postConversionEvent;
          o(
            "SignalsUnifiedStandardEventsUtils",
          ).isStandardEventByDataSourceType(i, "PIXEL") ||
            ((e.custom_event_str = i), n && (e.lead_ads_custom_event_str = i));
          var s = {
            post_conversion_attribute: a === "DRIVE" ? "POSITIVE" : "NEGATIVE",
            post_conversion_event_name: l,
          };
          e.post_conversions = [s];
        }
      }
    }
    function d(e, t, n, r, o) {
      if (!t) return null;
      var a = e.pixel_id,
        i = r;
      return (
        e.lead_ads_offsite_conversion_type === "clo" && (i = null),
        a != null ? String(a) : o != null ? o : n.get("selectedPixelID") || i
      );
    }
    function m(t, n, a) {
      a === void 0 && (a = !1);
      var i = {},
        l = t.advancedRule,
        s = t.canAdAccountAccessPixel,
        u = t.conversionCategory,
        d = t.eventName,
        m = t.eventSourceType,
        _ = t.id,
        f = t.offsiteSignalContainerID,
        g = t.pixelID;
      switch (t.conversionType) {
        case r("SignalsWebsiteOptimizableConversionBaseTypeEnum").EVENT:
          return t.isSharedEvent && t.eventNameID != null
            ? ((i.offsite_conversion_event_id = t.eventNameID), i)
            : (e(i, { conversionCategory: u, eventName: d, pixelID: g }, a),
              p(i, n));
        case r("SignalsWebsiteOptimizableConversionBaseTypeEnum")
          .CUSTOM_CONVERSION:
          (s === !0 &&
            m !== "multiple_sources" &&
            ((i.pixel_id = g != null ? g : f != null ? f : null),
            (i.custom_event_type = u),
            a && (i.lead_ads_custom_event_type = u),
            t.rule != null && (i.pixel_rule = t.rule),
            c(i, l, a)),
            (i.custom_conversion_id = _));
          break;
        case r("SignalsWebsiteOptimizableConversionBaseTypeEnum")
          .PCO_MCME_CONVERSION: {
          var h = t.id,
            y = t.mainConversionEvent,
            C = t.postConversionAttribute,
            b = t.postConversionEvent;
          if (
            ((i.pixel_id = g != null ? g : f != null ? f : null),
            (i.custom_event_type = u),
            a && (i.lead_ads_custom_event_type = u),
            y == null)
          )
            return i;
          o(
            "SignalsUnifiedStandardEventsUtils",
          ).isStandardEventByDataSourceType(y, "PIXEL") ||
            ((i.custom_event_str = y), a && (i.lead_ads_custom_event_str = y));
          var v = {
            post_conversion_attribute: C,
            post_conversion_event_name: b,
          };
          ((i.post_conversions = [v]), (i.mcme_conversion_id = h));
          break;
        }
        case r("SignalsWebsiteOptimizableConversionBaseTypeEnum").FUNNEL_PAIR: {
          if (t.isSharedEvent && t.eventNameID != null)
            return ((i.offsite_conversion_event_id = t.eventNameID), i);
          (e(i, { conversionCategory: u, eventName: d, pixelID: g }, a),
            (i = p(i, n)),
            (i.multi_event_product = t.multiEventProduct));
          break;
        }
        case r("SignalsWebsiteOptimizableConversionBaseTypeEnum")
          .SEQUENCED_EVENT: {
          if (t.isSharedEvent && t.eventNameID != null)
            return ((i.offsite_conversion_event_id = t.eventNameID), i);
          (e(i, { conversionCategory: u, eventName: d, pixelID: g }, a),
            (i = p(i, n)),
            (i.multi_event_product = t.multiEventProduct),
            (i.anchor_event_config = t.anchorEventConfig),
            (i.multi_event_conversion_info = t.multiEventConversionInfo));
          break;
        }
        default:
          return i;
      }
      return i;
    }
    function p(e, t) {
      if (t == null) return e;
      var n = t.isPartnerSourcesSelected,
        r = t.productSetID;
      return n ? (r == null ? {} : ((e.product_set_id = r), e)) : e;
    }
    function _(e, t) {
      var n,
        o = t.custom_conversion_id,
        a = o
          ? (n = e.find(function (e) {
              return e.id === o;
            })) == null
            ? void 0
            : n.pixelID
          : r("getByPath")(t, ["pixel_id"]);
      return a
        ? e.filter(function (e) {
            return (
              e.pixelID === a ||
              (e.pixelID == null && e.offsiteSignalContainerID === a)
            );
          })
        : [];
    }
    ((l.getPixelPromotedObjectFields = s),
      (l.resetPixelOptimizationFields = u),
      (l.getSignalsConversionTypeaheadSelectedPixelID = d),
      (l.getUnifiedWebsitePromotedObject = m),
      (l.getWebsiteConversionsByPromotedObject = _));
  },
  98,
);
