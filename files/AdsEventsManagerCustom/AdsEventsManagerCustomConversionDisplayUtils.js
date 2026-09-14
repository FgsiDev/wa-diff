__d(
  "AdsEventsManagerCustomConversionDisplayUtils",
  [
    "AdsEventsManagerOnsiteConversionConstants",
    "CustomConversionIntention",
    "CustomConversionParseUtils",
    "SignalConsolidationActionSourceDetails",
    "SignalsUnifiedStandardEventsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.eventSource,
        n = e.field,
        r = e.value;
      if (n !== "event") return "PageView";
      if (t == null) return r;
      var a = t.type,
        i = o(
          "AdsEventsManagerOnsiteConversionConstants",
        ).ONSITE_CONVERSION_EVENTS_DISPLAY_NAME.get(r);
      return a === "app" || a === "application"
        ? o("SignalsUnifiedStandardEventsUtils")
            .getEventDetailsByName(r)
            .name.toString()
        : a === "page" &&
            o(
              "AdsEventsManagerOnsiteConversionConstants",
            ).ONSITE_CONVERSION_EVENTS_DISPLAY_NAME.has(r) &&
            i != null
          ? i.toString()
          : r;
    }
    function s(t, n) {
      var r = t.eventSource,
        o = n.filter(function (e) {
          var t = e.id;
          return t === (r == null ? void 0 : r.id);
        }),
        a = o[0];
      return {
        dataSourceId: r == null ? void 0 : r.id,
        dataSourceName: a == null ? void 0 : a.name,
        eventName: e(t),
      };
    }
    function u(e, t) {
      var n = o("CustomConversionParseUtils").parseAdvancedRule(e);
      return n != null
        ? n.rules.map(function (e) {
            return s(e, t);
          })
        : [];
    }
    function c(t) {
      var n = o("CustomConversionParseUtils").parseAdvancedRule(t);
      if (n == null || n.rules.length !== 2) return null;
      var a = n.rules,
        i = a[0],
        l = a[1],
        s = e(i),
        u = e(l),
        c = l.filters,
        d = c[0];
      if ((d == null ? void 0 : d.valueArray.length) !== 1) return null;
      var m = d.valueArray,
        p = m[0],
        _ = r("CustomConversionIntention")[p];
      return { intention: _, mainEvent: s, postConversionEvent: u };
    }
    function d(e) {
      var t = null;
      switch (e) {
        case "pixel":
          t = r("SignalConsolidationActionSourceDetails").website;
          break;
        case "offline_conversion_data_set":
          t = r("SignalConsolidationActionSourceDetails").physical_store;
          break;
        default:
          t = r("SignalConsolidationActionSourceDetails").website;
      }
      return t;
    }
    ((l.getFriendlyEventNameAndDataSource = s),
      (l.getFriendlyEventNamesAndDataSourcesFromAdvancedRule = u),
      (l.getPostConversionInfoFromAdvancedRule = c),
      (l.transformCustomConversionActionSource = d));
  },
  98,
);
