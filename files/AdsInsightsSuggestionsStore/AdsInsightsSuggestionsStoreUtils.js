__d(
  "AdsInsightsSuggestionsStoreUtils",
  [
    "AdsInsightsBMOIContactsSuggestions",
    "AdsInsightsBMOIConversationSuggestions",
    "AdsInsightsBMOIOrdersSuggestions",
    "AdsInsightsBMOIPurchaseSuggestions",
    "AdsInsightsBMOIUpsellMetricsExperiments",
    "AdsInsightsEmailCaptureMetaLeadsSuggestions",
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmtCampaignTableColumnSuggestionPanelUtils",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = r("immutable").OrderedSet(),
        a = o(
          "AdsMgmtSuggestedColumnsGatingUtils",
        ).getIsAccountInSuggestedColumnsExpansionWithoutExposure();
      if (
        o(
          "AdsMgmtValueOptimizationQuickViewExperimentUtils",
        ).getIsAccountInValueOptimizationSuggestedColumns()
      )
        if (
          a ||
          o(
            "AdsMgmtSuggestedColumnsGatingUtils",
          ).getIsAccountInPrecomputeSuggestedColumns()
        )
          n = n.concat(
            o(
              "AdsMgmtCampaignTableColumnSuggestionPanelUtils",
            ).getValueOptimizationColumnSuggestions(),
          );
        else
          return o("AdsMgmtCampaignTableColumnSuggestionPanelUtils")
            .getValueOptimizationColumnSuggestions()
            .map(function (e) {
              return e.id;
            });
      return (
        o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountEligibleForCTXColumnSuggestion() &&
          (n = n.concat(
            o(
              "AdsMgmtCampaignTableColumnSuggestionPanelUtils",
            ).getCTXDefaultColumnSuggestions(),
          )),
        o(
          "AdsInsightsEmailCaptureMetaLeadsSuggestions",
        ).genIsAccountEligibleForEmailCaptureSuggestedColumns() &&
          (n = n.concat(
            o(
              "AdsInsightsEmailCaptureMetaLeadsSuggestions",
            ).getEmailCaptureSuggestedColumns(),
          )),
        o(
          "AdsInsightsBMOIUpsellMetricsExperiments",
        ).getShowPurchasesSuggestedColumns() &&
          (n = n.concat(
            o(
              "AdsInsightsBMOIPurchaseSuggestions",
            ).getPurchasesSuggestedColumns(),
          )),
        o(
          "AdsInsightsBMOIUpsellMetricsExperiments",
        ).getShowContactsSuggestedColumns() &&
          (n = n.concat(
            o(
              "AdsInsightsBMOIContactsSuggestions",
            ).getContactSuggestedColumns(),
          )),
        o(
          "AdsInsightsBMOIUpsellMetricsExperiments",
        ).getShowConversationsSuggestedColumns() &&
          (n = n.concat(
            o(
              "AdsInsightsBMOIConversationSuggestions",
            ).getConversationsSuggestedColumns(),
          )),
        o(
          "AdsInsightsBMOIUpsellMetricsExperiments",
        ).getShowOrdersSuggestedColumns() &&
          (n = n.concat(
            o("AdsInsightsBMOIOrdersSuggestions").getOrdersSuggestedColumns(),
          )),
        n
          .map(function (e) {
            return e.id;
          })
          .concat(e)
      );
    }
    l.getCompleteColumnList = e;
  },
  98,
);
