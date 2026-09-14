__d(
  "adsUEditorCampaignSapAttributionWindowUtil",
  [
    "AccountAttributionEvent",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsCampaignRecordAccessors",
    "IsAppAdUtils",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "adsDeliveryUpdateEngagedVideoViewAttributionWindow",
    "adsDeliveryUpdateViewThroughAttributionWindow",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "1_day_click_through":
          return 1;
        default:
          return 7;
      }
    }
    function s(e) {
      switch (e) {
        case "1_day_click_through":
          return 1;
        case "7_day_click_through":
          return 7;
        case "1_day_view_through":
          return 1;
        case "1_day_click_view_and_engaged_view_through":
          return 1;
        case "1_day_click_and_engaged_view_through":
          return 1;
        default:
          return 7;
      }
    }
    function u(e) {
      switch (e) {
        case "1_day_click_view_and_engaged_view_through":
          return 1;
        case "1_day_view_through":
          return 1;
        default:
          return 0;
      }
    }
    function c(e) {
      switch (e) {
        case "1_day_click_and_engaged_view_through":
        case "1_day_click_view_and_engaged_view_through":
          return 1;
        default:
          return 0;
      }
    }
    function d(e, t, n, o, a, i, l) {
      (t === void 0 && (t = "1_day_click_view_and_engaged_view_through"),
        n === void 0 && (n = r("AdsAPIOptimizationGoals").APP_INSTALLS),
        o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1));
      var d = t,
        f = e;
      return (
        d === "1_day_click_and_engaged_view_through" &&
          !_(n, o || a, l) &&
          (d = "1_day_click_through"),
        d === "1_day_click_view_and_engaged_view_through" &&
          !_(n, o || a, l) &&
          (d = "1_day_view_through"),
        d === "1_day_view_through" &&
          !p(n, o || a) &&
          (d = "1_day_click_through"),
        d === "7_day_click_through" && !m(n, o) && (d = "1_day_click_through"),
        n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
          !o &&
          i &&
          (d = "7_day_click_through"),
        (f = r("AdsCampaignRecordAccessors").attribution_spec.set(
          r("immutable").fromJS(
            r("adsDeliveryUpdateViewThroughAttributionWindow")(
              f.attribution_spec ? f.attribution_spec.toJS() : [],
              u(d),
            ),
          ),
          f,
        )),
        (f = r("AdsCampaignRecordAccessors").attribution_spec.set(
          r("immutable").fromJS(
            r("adsDeliveryUpdateClickThroughAttributionWindow")(
              f.attribution_spec ? f.attribution_spec.toJS() : [],
              s(d),
            ),
          ),
          f,
        )),
        (f = r("AdsCampaignRecordAccessors").attribution_spec.set(
          r("immutable").fromJS(
            r("adsDeliveryUpdateEngagedVideoViewAttributionWindow")(
              f.attribution_spec ? f.attribution_spec.toJS() : [],
              c(d),
            ),
          ),
          f,
        )),
        f
      );
    }
    function m(e, t) {
      return t ? !1 : r("IsAppAdUtils").getIsMAISupportedAEOorVO(e);
    }
    function p(e, t) {
      return t ? !1 : e === r("AdsAPIOptimizationGoals").APP_INSTALLS;
    }
    function _(e, t, n) {
      var o = r("AdsAppUrlUtils").isGooglePlayURL(n);
      if (!o || t) return !1;
      var a = e === r("AdsAPIOptimizationGoals").APP_INSTALLS,
        i = e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
        l = r("gkx")("1095");
      return !!(a || (i && l));
    }
    function f(e, t) {
      return e === null || e !== r("AdsAPIOptimizationGoals").APP_INSTALLS
        ? !1
        : r("AdsAppUrlUtils").isGooglePlayURL(t);
    }
    function g(e, t, n, o) {
      return e !== r("AdsAPIOptimizationGoals").VALUE || o !== "PURCHASE"
        ? !1
        : r("AdsAppUrlUtils").isGooglePlayURL(n)
          ? t !== "SKADNETWORK" && r("gkx")("12953")
          : r("AdsAppUrlUtils").isItunesURL(n)
            ? t === "AEM" && r("gkx")("11670")
            : !1;
    }
    function h(e) {
      return e === "OTHER";
    }
    function y(e, t, n, o, a, i, l) {
      if ((i === void 0 && (i = !1), l === void 0 && (l = ""), _(t, i, l)))
        return "1_day_click_view_and_engaged_view_through";
      var s =
        t === r("AdsAPIOptimizationGoals").APP_INSTALLS
          ? "1_day_view_through"
          : "7_day_click_through";
      if (o === !0) {
        var u = 0,
          c = 0;
        return (
          a == null ||
            a.forEach(function (e) {
              (e == null ? void 0 : e.event_type) ===
              r("AccountAttributionEvent").VIEW_THROUGH
                ? (c = (e == null ? void 0 : e.window_days) === 1 ? 1 : 0)
                : (u = (e == null ? void 0 : e.window_days) === 7 ? 7 : 1);
            }),
          c === 0
            ? u === 7
              ? "7_day_click_through"
              : "1_day_click_through"
            : "1_day_view_through"
        );
      }
      return s;
    }
    ((l.attributionWindowToNumber = e),
      (l.mapAttributionWindow = s),
      (l.sapAttributionWindowMutator = d),
      (l.isLongAttributionWindowSupported = m),
      (l.isVTAttributionSupported = p),
      (l.isEVAttributionSupported = _),
      (l.isGooglePlayStoreMAI = f),
      (l.is28DayAttributionWindowSupported = g),
      (l.isCustomEventOptimization = h),
      (l.getAppConstraintsLawOverrides = y));
  },
  98,
);
