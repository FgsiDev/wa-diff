__d(
  "adsDeliveryEstimateDataLoaderGetParams",
  ["AdsPromotedObjectUtils", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = e.get("promotedObject"),
        i;
      if (a != null) {
        var l = {};
        (Object.entries(a.toJS())
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return r("isTruthy")(n);
          })
          .forEach(function (e) {
            var t = e[0],
              n = e[1];
            return (l[t] = n);
          }),
          (i = o("AdsPromotedObjectUtils").withoutIncompleteOmnichannelObject(
            l,
          )));
      }
      var s =
        ((n = {}),
        (n.attribution_spec = e.get("attributionSpec").toJS()),
        (n.bid_strategy = e.get("bidStrategy")),
        (n.campaign_group_id = e.get("campaignGroupID")),
        (n.campaign_fragment_id = e.get("campaignFragmentID")),
        (n.currency = e.get("currency")),
        (n.is_cbo_enabled = e.get("isCBOEnabled")),
        (n.promoted_object = i),
        (n.optimization_goal = e.get("optimizationGoal")),
        (n.send_long_term_prediction_shadow_request = !0),
        (n.skip_bid_suggestion = !0),
        (n.targeting_as_signal = e.get("targetingAsSignal")),
        (n.targeting_spec = e.get("targetingSpec").toJS()),
        (n.prediction_duration = e.get("campaign_duration", 0)),
        (n.campaign_destination_type = e.get("campaignDestinationType")),
        (n.special_ad_categories = e.get("specialAdCategories")),
        n);
      if (t !== void 0) {
        var u;
        s = babelHelpers.extends({}, s, ((u = {}), (u.source_trace_id = t), u));
      }
      var c = e.get("fields");
      return (
        c != null &&
          c.length > 0 &&
          (s = babelHelpers.extends({}, s, { fields: c })),
        s
      );
    }
    l.default = e;
  },
  98,
);
