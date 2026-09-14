__d(
  "AdsInsightsAttributionSettingsUtil",
  [
    "fbt",
    "invariant",
    "AdEvcRolloutUtils",
    "AdsInsightsAttributionWindowUtil",
    "AdsInsightsAttributionWindows",
    "AdsInsightsCustomAttributionSettingUtils",
    "AdsInsightsField",
    "AdsInsightsMetricNames",
    "AdsMgmt2025H2ExperimentUtils",
    "AdsMgmt2026ActionToActionExperimentUtils",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsPEFilterFields",
    "AdsPEFilterOperatorConfig",
    "adsMgmtFilterStringValueSetRenderer",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = s._(/*BTDS*/ "Click-through attribution");
    function c(e) {
      if (e === "multiple")
        return s._(/*BTDS*/ "Multiple attribution settings");
      if (e === "na") return s._(/*BTDS*/ "-");
      if (e === "skan") return s._(/*BTDS*/ "From Apple's SKAdNetwork API");
      if (e === "incrementality")
        return s._(/*BTDS*/ "Incremental attribution");
      if (e === "1d_sequenced") return s._(/*BTDS*/ "Sequenced attribution");
      if (e === "sequenced") return s._(/*BTDS*/ "Sequenced attribution");
      if (e === "7d_sequenced")
        return o(
          "AdsMgmt2026ActionToActionExperimentUtils",
        ).getIsAccountInA2AMar2026WithoutExposure()
          ? s._(/*BTDS*/ "Sequenced attribution")
          : s._(/*BTDS*/ "7-day click, 7 days after leads");
      if (e === "28d_sequenced") return s._(/*BTDS*/ "Sequenced attribution");
      if (
        o(
          "AdsInsightsCustomAttributionSettingUtils",
        ).isCustomAttributionSetting(e)
      )
        return o(
          "AdsInsightsCustomAttributionSettingUtils",
        ).getCustomAttributionSettingLabel(e);
      var t = p(e);
      if (t != null) {
        var n = _(e),
          r = f(e),
          a = o("AdEvcRolloutUtils").isEligibleForCTRedef() ? "evt" : "evc",
          i = o("AdsInsightsAttributionWindowUtil").getDayLabel(t);
        return n != null && r != null
          ? s._(
              /*BTDS*/ '_j{"evc":"{click_number_of_days} click, {view_number_of_days} view or {evc_number_of_days} engaged-view","evt":"{click_number_of_days} click, {view_number_of_days} view or {evc_number_of_days} engagement"}',
              [
                s._enum(a, { evc: "engaged-view", evt: "engagement" }),
                s._param("click_number_of_days", i),
                s._param(
                  "view_number_of_days",
                  o("AdsInsightsAttributionWindowUtil").getDayLabel(n),
                ),
                s._param(
                  "evc_number_of_days",
                  o("AdsInsightsAttributionWindowUtil").getDayLabel(r),
                ),
              ],
            )
          : n != null
            ? s._(
                /*BTDS*/ "{click_number_of_days} click or {view_number_of_days} view",
                [
                  s._param("click_number_of_days", i),
                  s._param(
                    "view_number_of_days",
                    o("AdsInsightsAttributionWindowUtil").getDayLabel(n),
                  ),
                ],
              )
            : r != null
              ? s._(
                  /*BTDS*/ '_j{"evc":"{click_number_of_days} click or {evc_number_of_days} engaged-view","evt":"{click_number_of_days} click or {evc_number_of_days} engagement"}',
                  [
                    s._enum(a, { evc: "engaged-view", evt: "engagement" }),
                    s._param("click_number_of_days", i),
                    s._param(
                      "evc_number_of_days",
                      o("AdsInsightsAttributionWindowUtil").getDayLabel(r),
                    ),
                  ],
                )
              : s._(/*BTDS*/ "{click_number_of_days} click", [
                  s._param("click_number_of_days", i),
                ]);
      }
    }
    function d(t) {
      return t === "skan" ? e : null;
    }
    function m(e) {
      return e === "ALL_CONVERSIONS"
        ? s._(/*BTDS*/ "All conversions")
        : e === "FIRST_CONVERSION"
          ? s._(/*BTDS*/ "First conversion")
          : e === "MIXED_CONVERSIONS"
            ? s._(/*BTDS*/ "First or all conversions")
            : e === ""
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function p(e) {
      return e === "multiple" ||
        e === "skan" ||
        e === "na" ||
        e === "incrementality" ||
        e === "1d_sequenced" ||
        e === "7d_sequenced" ||
        e === "28d_sequenced" ||
        e === "sequenced" ||
        e === "1d_passback" ||
        e === "7d_passback" ||
        e === "28d_passback" ||
        e === "custom"
        ? null
        : e === "1d_click" ||
            e === "1d_view_1d_click" ||
            e === "1d_view_1d_click_1d_ev" ||
            e === "1d_click_1d_ev"
          ? "1d_click"
          : e === "7d_click" ||
              e === "1d_view_7d_click" ||
              e === "7d_view_7d_click" ||
              e === "1d_view_7d_click_1d_ev" ||
              e === "7d_click_1d_ev"
            ? "7d_click"
            : e === "28d_click" ||
                e === "1d_view_28d_click" ||
                e === "7d_view_28d_click" ||
                e === "28d_view_28d_click"
              ? "28d_click"
              : void 0;
    }
    function _(e) {
      return e === "1d_click" ||
        e === "7d_click" ||
        e === "28d_click" ||
        e === "multiple" ||
        e === "skan" ||
        e === "1d_click_1d_ev" ||
        e === "7d_click_1d_ev" ||
        e === "na" ||
        e === "incrementality" ||
        e === "1d_sequenced" ||
        e === "7d_sequenced" ||
        e === "28d_sequenced" ||
        e === "sequenced" ||
        e === "1d_passback" ||
        e === "7d_passback" ||
        e === "28d_passback" ||
        e === "custom"
        ? null
        : e === "1d_view_1d_click" ||
            e === "1d_view_7d_click" ||
            e === "1d_view_28d_click" ||
            e === "1d_view_1d_click_1d_ev" ||
            e === "1d_view_7d_click_1d_ev"
          ? "1d_view"
          : e === "7d_view_7d_click" || e === "7d_view_28d_click"
            ? "7d_view"
            : e === "28d_view_28d_click"
              ? "28d_view"
              : void 0;
    }
    function f(e) {
      return e === "multiple" ||
        e === "na" ||
        e === "skan" ||
        e === "1d_click" ||
        e === "28d_click" ||
        e === "7d_click" ||
        e === "1d_view_1d_click" ||
        e === "1d_view_28d_click" ||
        e === "28d_view_28d_click" ||
        e === "7d_view_28d_click" ||
        e === "1d_view_7d_click" ||
        e === "7d_view_7d_click" ||
        e === "incrementality" ||
        e === "1d_sequenced" ||
        e === "7d_sequenced" ||
        e === "28d_sequenced" ||
        e === "sequenced" ||
        e === "1d_passback" ||
        e === "7d_passback" ||
        e === "28d_passback" ||
        e === "custom"
        ? null
        : e === "1d_click_1d_ev" ||
            e === "1d_view_1d_click_1d_ev" ||
            e === "7d_click_1d_ev" ||
            e === "1d_view_7d_click_1d_ev"
          ? "1d_ev"
          : void 0;
    }
    function g() {
      var e = [
        "1d_click",
        "7d_click",
        "1d_view_1d_click",
        "1d_view_7d_click",
        "skan",
        "incrementality",
      ];
      (o(
        "AdsMgmt2026H1ExperimentUtils",
      ).getIsAccountInCAI2026H1GroupingWithoutExposure() &&
        e.push(
          "1d_click_1d_ev",
          "1d_view_1d_click_1d_ev",
          "7d_click_1d_ev",
          "1d_view_7d_click_1d_ev",
        ),
        o(
          "AdsMgmt2026ActionToActionExperimentUtils",
        ).getIsAccountInA2AMar2026WithoutExposure()
          ? e.push("sequenced")
          : o(
              "AdsMgmt2026ActionToActionExperimentUtils",
            ).getIsAccountInA2AWithoutExposure() && e.push("7d_sequenced"),
        o(
          "AdsMgmt2025H2ExperimentUtils",
        ).getIsAccountInPassbackOpenBetaReporting() &&
          e.push(r("justknobx")._("5492") ? "custom" : "28d_passback"));
      var t = e.map(function (e) {
        return { value: e };
      });
      return {
        text: r("AdsInsightsMetricNames")[
          r("AdsInsightsField").ATTRIBUTION_SETTING
        ],
        overwriteText: r("AdsInsightsMetricNames")[
          r("AdsInsightsField").ATTRIBUTION_SETTING
        ],
        field: r("AdsPEFilterFields").ATTRIBUTION_SETTING,
        operators: [
          r("AdsPEFilterOperatorConfig").IN,
          r("AdsPEFilterOperatorConfig").NOT_IN,
        ],
        values: t,
        valueRenderer: c,
        valueSetRenderer: r("adsMgmtFilterStringValueSetRenderer"),
      };
    }
    function h(e) {
      return e === o("AdsInsightsAttributionWindows").getDefault()
        ? "default"
        : e === o("AdsInsightsAttributionWindows").getInline() || e === "dda"
          ? e
          : o("AdsInsightsAttributionWindows").isView(e)
            ? "view"
            : "click";
    }
    function y(e) {
      return e === "default"
        ? -1
        : e === "inline"
          ? 0
          : e === "1d_view" || e === "1d_view_all_conversions"
            ? 1
            : e === "1d_view_first_conversion"
              ? 2
              : e === "1d_ev" || e === "1d_ev_all_conversions"
                ? 3
                : e === "1d_ev_first_conversion"
                  ? 4
                  : e === "1d_click" || e === "1d_click_all_conversions"
                    ? 5
                    : e === "1d_click_first_conversion"
                      ? 6
                      : e === "7d_view"
                        ? 7
                        : e === "7d_click" || e === "7d_click_all_conversions"
                          ? 8
                          : e === "7d_click_first_conversion"
                            ? 9
                            : e === "28d_view"
                              ? 10
                              : e === "28d_click" ||
                                  e === "28d_click_all_conversions"
                                ? 11
                                : e === "28d_click_first_conversion"
                                  ? 12
                                  : e === "incrementality" ||
                                      e === "incrementality_all_conversions"
                                    ? 13
                                    : e === "incrementality_first_conversion"
                                      ? 14
                                      : e === "skan_view"
                                        ? 15
                                        : e === "skan_view_second_postback"
                                          ? 16
                                          : e === "skan_view_third_postback"
                                            ? 17
                                            : e === "skan_click"
                                              ? 18
                                              : e ===
                                                  "skan_click_second_postback"
                                                ? 19
                                                : e ===
                                                    "skan_click_third_postback"
                                                  ? 20
                                                  : e === "dda"
                                                    ? 21
                                                    : e === "28d_passback"
                                                      ? 22
                                                      : e === "custom"
                                                        ? 23
                                                        : u(
                                                            !1,
                                                            "Invalid attribution window %s",
                                                            e,
                                                          );
    }
    ((l.getLabel = c),
      (l.getSublabel = d),
      (l.getConversionCountSublabel = m),
      (l.getClickAttributionWindow = p),
      (l.getViewAttributionWindow = _),
      (l.getAttributionSettingFilterConfig = g),
      (l.getAttributionWindowType = h),
      (l.getAttributionWindowWeight = y));
  },
  226,
);
