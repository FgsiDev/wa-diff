__d(
  "AdsCTVDisabledStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Dynamic creative isn't available for TV campaigns.");
    }
    function u() {
      return s._(
        /*BTDS*/ "Cost per result goal isn't available for TV campaigns.",
      );
    }
    function c() {
      return s._(
        /*BTDS*/ "This performance goal isn't available for TV campaigns.",
      );
    }
    function d() {
      return s._(
        /*BTDS*/ "Custom attribution model is not available for TV campaigns.",
      );
    }
    function m() {
      return s._(
        /*BTDS*/ "All conversions is the only conversion count setting available for TV campaigns.",
      );
    }
    function p() {
      return s._(
        /*BTDS*/ "Standard is the only delivery type available for TV campaigns.",
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "Highest volume is the only campaign bid strategy available for TV campaigns.",
      );
    }
    function f() {
      return s._(
        /*BTDS*/ "United States is the only location available for TV campaigns.",
      );
    }
    function g() {
      return s._(/*BTDS*/ "Not applicable for TV campaigns");
    }
    function h() {
      return s._(
        /*BTDS*/ "Auction is the only buying type available for TV campaigns.",
      );
    }
    function y() {
      return s._(/*BTDS*/ "TV is not available due to upstream selections.");
    }
    function C() {
      return s._(
        /*BTDS*/ "The social issues, elections or politics category isn't available for TV campaigns.",
      );
    }
    var b = {
      buying_type: function () {
        return s._(
          /*BTDS*/ "This device is unavailable for campaigns using a buying type other than auction.",
        );
      },
      bid_strategy: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your campaign bid strategy to Highest volume.",
        );
      },
      siep_special_ad_category: function () {
        return s._(
          /*BTDS*/ "This device isn't available for campaigns related to social issues, elections or politics.",
        );
      },
      conversion_location: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your conversion location to website or app.",
        );
      },
      performance_goal: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your performance goal to maximize number or value of conversions.",
        );
      },
      performance_goal_awareness: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your performance goal to maximize reach of ads.",
        );
      },
      advantage_catalog: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, turn off Advantage+ catalog ads for this campaign.",
        );
      },
      ab_test: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, turn off A\/B testing for this campaign.",
        );
      },
      target_frequency: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, use a frequency cap instead of target frequency for this ad set.",
        );
      },
      delivery_type: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your delivery type to standard.",
        );
      },
      attribution_model: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your attribution model to Standard or Incremental.",
        );
      },
      attribution_window: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, turn off click-through only attribution for this ad set and select 1-day engaged-through and 1-day view-through.",
        );
      },
      attribution_count_type: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your conversions count to all conversions.",
        );
      },
      audience_segment_reporting: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, turn off audience segment reporting for this campaign.",
        );
      },
      cost_per_result: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, remove the cost per result goal for this ad set.",
        );
      },
      audience_location: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, set your audience location to the United States.",
        );
      },
      value_rules: function () {
        return s._(
          /*BTDS*/ "To run ads on this device, turn off value rules for this ad set.",
        );
      },
    };
    function v(e) {
      return b[e]();
    }
    ((l.getDynamicCreativeDisabledForCTVTooltip = e),
      (l.getCostPerResultGoalDisabledForCTVTooltip = u),
      (l.getPerformanceGoalDisabledForCTVTooltip = c),
      (l.getAttributionModelDisabledForCTVTooltip = d),
      (l.getConversionsCountDisabledForCTVTooltip = m),
      (l.getDeliveryTypeDisabledForCTVTooltip = p),
      (l.getBidStrategyDisabledForCTVTooltip = _),
      (l.getLocationsDisabledForCTVTooltip = f),
      (l.getAccountControlsDisabledForCTVTooltip = g),
      (l.getBuyingTypeDisabledForCTVTooltip = h),
      (l.getCTVUpstreamSelectionsDisabledTooltip = y),
      (l.getSIEPCategoryDisabledForCTVTooltip = C),
      (l.getCTVUnavailableReasonTooltip = v));
  },
  226,
);
