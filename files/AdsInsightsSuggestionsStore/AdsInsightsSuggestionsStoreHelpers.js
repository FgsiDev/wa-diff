__d(
  "AdsInsightsSuggestionsStoreHelpers",
  [
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsEmailCaptureMetaLeadsSuggestions",
    "AdsInsightsSuggestionsUtil",
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmt26H1SuggestedColumnsGatingUtils",
    "AdsMgmtCampaignTableColumnSuggestionOrders",
    "AdsMgmtCampaignTableColumnSuggestionPanelUtils",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
    "areEqual",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return o(
        "AdsMgmtSuggestedColumnsGatingUtils",
      ).getIsAccountInSuggestedColumnsExpansionWithoutExposure() ||
        o(
          "AdsMgmtSuggestedColumnsGatingUtils",
        ).getIsAccountInPrecomputeSuggestedColumns()
        ? e[t] == null
          ? !0
          : e[t] === "on"
        : o(
              "AdsMgmtValueOptimizationQuickViewExperimentUtils",
            ).getIsAccountInValueOptimizationSuggestedColumns()
          ? e.value_suggested_column_status === "OPTED_IN"
          : e[t] == null &&
              o(
                "AdsInsightsEmailCaptureMetaLeadsSuggestions",
              ).genIsAccountEligibleForEmailCaptureSuggestedColumns()
            ? !0
            : e[t] == null
              ? !1
              : e[t] === "on";
    }
    function u(e, t) {
      var n = o(
        "AdsMgmtCampaignTableColumnSuggestionOrders",
      ).getPerformancePresetVariance();
      return r("immutable").OrderedSet(
        []
          .concat(e.toArray(), t.toArray())
          .filter(function (e, t, n) {
            return n.indexOf(e) === t;
          })
          .sort(function (e, t) {
            var r = n.indexOf(e),
              o = n.indexOf(t);
            return r === -1 && o === -1
              ? 0
              : r === -1
                ? 1
                : o === -1
                  ? -1
                  : r - o;
          }),
      );
    }
    function c(t, n) {
      var a = function () {
          var o = r("AdsInsightsColumnPresetStoreUtil").resolve({ preset: l }),
            a = (t.ids || []).filter(function (e) {
              return !n.includes(e) || o.ids.includes(e);
            });
          if (
            (e || (e = r("areEqual")))(
              t.attributionWindows,
              o.attributionWindows,
            ) &&
            (e || (e = r("areEqual")))(a, o.ids)
          )
            return { v: l };
        },
        i;
      for (var l of o("AdsInsightsSuggestionsUtil").getSupportedPresets())
        if (((i = a()), i)) return i.v;
      return null;
    }
    function d(e, t, n) {
      var o,
        a = (o = t.preset) != null ? o : c(t, n),
        i = r("AdsInsightsColumnPresetStoreUtil").resolve({
          ids: [],
          attributionWindows: [],
          preset: a != null ? a : void 0,
        }),
        l = i.ids;
      return e.subtract(l);
    }
    function m(e) {
      var t = r("immutable").OrderedSet();
      (o(
        "AdsMgmt26H1SuggestedColumnsGatingUtils",
      ).getShouldSuggestMRSColumnsWithoutExposure()
        ? (t = r("immutable").OrderedSet(
            o("AdsInsightsSuggestionsUtil").getMRSSuggestionsFromAPI(e),
          ))
        : o(
              "AdsMgmtValueOptimizationQuickViewExperimentUtils",
            ).getIsAccountInValueOptimizationSuggestedColumns()
          ? o(
              "AdsMgmtSuggestedColumnsGatingUtils",
            ).getIsAccountInSuggestedColumnsExpansionWithoutExposure() ||
            o(
              "AdsMgmtSuggestedColumnsGatingUtils",
            ).getIsAccountInPrecomputeSuggestedColumns()
            ? (t = o("AdsMgmtCampaignTableColumnSuggestionPanelUtils")
                .getValueOptimizationColumnSuggestions()
                .concat(
                  r("immutable").OrderedSet(
                    o("AdsInsightsSuggestionsUtil").getSuggestionsFromAPI(e),
                  ),
                ))
            : (t = o(
                "AdsMgmtCampaignTableColumnSuggestionPanelUtils",
              ).getValueOptimizationColumnSuggestions())
          : (t = r("immutable").OrderedSet(
              o("AdsInsightsSuggestionsUtil").getSuggestionsFromAPI(e),
            )),
        !o(
          "AdsMgmt26H1SuggestedColumnsGatingUtils",
        ).getShouldSuggestMRSColumnsWithoutExposure() &&
          o(
            "AdsMgmt2025H1ExperimentUtils",
          ).getIsAccountEligibleForCTXColumnSuggestion() &&
          (t = o("AdsMgmtCampaignTableColumnSuggestionPanelUtils")
            .getCTXDefaultColumnSuggestions()
            .concat(t)),
        !o(
          "AdsMgmt26H1SuggestedColumnsGatingUtils",
        ).getShouldSuggestMRSColumnsWithoutExposure() &&
          o(
            "AdsInsightsEmailCaptureMetaLeadsSuggestions",
          ).genIsAccountEligibleForEmailCaptureSuggestedColumns() &&
          (t = o("AdsInsightsEmailCaptureMetaLeadsSuggestions")
            .getEmailCaptureSuggestedColumns()
            .concat(t)));
      var n = new Set(),
        a = t.filter(function (e) {
          return n.has(e.id) ? !1 : (n.add(e.id), !0);
        });
      return a;
    }
    ((l.determineAutoEnabledStatus = s),
      (l.applyColumnOrdering = u),
      (l.findSupportedPresetFromColumns = c),
      (l.subtractPresetColumns = d),
      (l.buildColumnSetFromFetchSuccess = m));
  },
  98,
);
