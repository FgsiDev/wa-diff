__d(
  "AdsMgmtCampaignTableColumnSuggestionPanelUtils",
  [
    "fbt",
    "AdsInsightsColumnChangeSource",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsTableColumnAction",
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsMgmtTableScrollToColumnAction",
    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
    "CtxMessagingSuggestedColumnsRetestNUXSeen",
    "CtxMessagingSuggestedNUXSeen",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = s._(/*BTDS*/ "Suggestions may be based on:"),
      c = s._(
        /*BTDS*/ "Suggestions may be based on your top-spending objective last week.",
      ),
      d = s._(/*BTDS*/ "Your top-spending objective last week"),
      m = s._(/*BTDS*/ "Your campaign's goal to"),
      p = s._(/*BTDS*/ "Maximize value of conversions"),
      _ = s._(
        /*BTDS*/ "You can add these columns to see the conversion value and return on ad spend (ROAS) for your campaigns.",
      ),
      f = (e = o("AdsInsightsFields")).makeActionID(
        "actions",
        "onsite_conversion.total_messaging_connection",
      ),
      g = e.makeActionID("actions", "onsite_conversion.messaging_first_reply"),
      h = e.makeActionID("actions", "omni_purchase"),
      y = e.makeActionID("cost_per_action_type", "omni_purchase"),
      C = [
        r("AdsInsightsField").RESULT_VALUES,
        r("AdsInsightsField").RESULT_ROAS,
      ];
    function b() {
      var e = new Set();
      return (
        e.add({ id: f, explanations: { type: f, value: f } }),
        e.add({ id: g, explanations: { type: g, value: g } }),
        e.add({ id: h, explanations: { type: h, value: h } }),
        e.add({ id: y, explanations: { type: y, value: y } }),
        o("immutable").OrderedSet(e)
      );
    }
    function v() {
      var e,
        t = new Set();
      return (
        t.add({
          id: (e = r("AdsInsightsField")).RESULT_VALUES,
          explanations: { type: e.RESULT_VALUES, value: e.RESULT_VALUES },
        }),
        t.add({
          id: e.RESULT_ROAS,
          explanations: { type: e.RESULT_ROAS, value: e.RESULT_ROAS },
        }),
        o("immutable").OrderedSet(t)
      );
    }
    function S(e, t, n) {
      var a = o("AdsInsightsTableColumnAction").toggleColumns(
        n,
        e,
        t,
        o("AdsInsightsColumnChangeSource").SUGGEST_MENU,
        !1,
      );
      a != null
        ? r("AdsMgmtTableScrollToColumnAction").dispatch(
            { column: a },
            {
              line: "177",
              module: "AdsMgmtCampaignTableColumnSuggestionPanelUtils.js",
              moduleID: i.id,
            },
          )
        : t === !0 &&
          (!o(
            "AdsMgmtValueOptimizationQuickViewExperimentUtils",
          ).getIsAccountInValueOptimizationSuggestedColumns() ||
            R(e)) &&
          r("AdsMgmtTableScrollToColumnAction").dispatch(
            { columnScrollPosition: "end" },
            {
              line: "186",
              module: "AdsMgmtCampaignTableColumnSuggestionPanelUtils.js",
              moduleID: i.id,
            },
          );
    }
    var R = function (t) {
      return t.some(function (e) {
        return !C.includes(e);
      });
    };
    function L() {
      return (
        o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountEligibleForCTXColumnSuggestion() &&
        !o("CtxMessagingSuggestedNUXSeen").hasUserSeenMessage_LEGACY(
          o(
            "AdsMgmtSuggestedColumnsGatingUtils",
          ).getIsAccountInSuggestedColumnsExpansionWithoutExposure()
            ? "1276208137195363"
            : "730218126283343",
        )
      );
    }
    function E() {
      return (
        o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountEligibleForCTXRetestColumnSuggestion() &&
        !o(
          "CtxMessagingSuggestedColumnsRetestNUXSeen",
        ).hasUserSeenMessage_LEGACY(
          o(
            "AdsMgmtSuggestedColumnsGatingUtils",
          ).getIsAccountInSuggestedColumnsExpansionWithoutExposure()
            ? "1276208137195363"
            : "1289076716066363",
        )
      );
    }
    ((l.suggestedColumnsHeaderExplanationTitle = u),
      (l.suggestedColumnsHeaderExplanationParagraph = c),
      (l.suggestedColumnsHeaderExplanationTopSpendingObjective = d),
      (l.suggestedColumnsHeaderExplanationCampaignGoalFirstHalf = m),
      (l.suggestedColumnsHeaderExplanationCampaignGoalValueOptimization = p),
      (l.suggestedColumnsValueOptimizationHeaderROAS = _),
      (l.VALUE_OPTIMIZATION_SUGGESTED_COLUMNS = C),
      (l.getCTXDefaultColumnSuggestions = b),
      (l.getValueOptimizationColumnSuggestions = v),
      (l.onToggleColumns = S),
      (l.openColumnSuggestionPanel = L),
      (l.openColumnSuggestionPanelForRetestAcccounts = E));
  },
  226,
);
