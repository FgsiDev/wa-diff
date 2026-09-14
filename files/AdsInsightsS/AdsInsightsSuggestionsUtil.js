__d(
  "AdsInsightsSuggestionsUtil",
  [
    "AdFLEXConfig",
    "AdsColumnSuggestionsConfigs",
    "AdsMgmtColumn",
    "AdsObjectTypes",
    "StrSet",
    "getByPath",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "breakdowns:",
      s = new RegExp(e, "g");
    function u(t) {
      return t.id.startsWith(e);
    }
    function c(e) {
      return e.id.replace(s, "");
    }
    function d(e) {
      var t;
      return [
        (t = r("AdsObjectTypes")).ACCOUNT,
        t.CAMPAIGN_GROUP,
        t.CAMPAIGN,
        t.ADGROUP,
        t.CREATIVE,
      ].includes(e);
    }
    function m() {
      return ["PERFORMANCE"];
    }
    function p(e) {
      return m().includes(e);
    }
    function _(e) {
      var t,
        n,
        o =
          (t =
            r("AdFLEXConfig") == null || (n = r("AdFLEXConfig").get()) == null
              ? void 0
              : n.hasInsightsColumnSuggestions) != null
            ? t
            : d(e);
      return o ? [r("AdsMgmtColumn").SUGGESTIONS_TOGGLE] : [];
    }
    function f(e) {
      switch (e) {
        case r("AdsObjectTypes").ACCOUNT:
          return r("AdsColumnSuggestionsConfigs")[r("AdsObjectTypes").ACCOUNT];
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
          return r("AdsColumnSuggestionsConfigs")[
            r("AdsObjectTypes").CAMPAIGN_GROUP
          ];
        case r("AdsObjectTypes").CAMPAIGN:
          return r("AdsColumnSuggestionsConfigs")[r("AdsObjectTypes").CAMPAIGN];
        case r("AdsObjectTypes").ADGROUP:
          return r("AdsColumnSuggestionsConfigs")[r("AdsObjectTypes").ADGROUP];
      }
      return r("AdsColumnSuggestionsConfigs").default;
    }
    function g(e) {
      var t = r("getByPath")(e, ["suggestions", "data", "0"], {}),
        n = new (r("StrSet"))();
      return (
        ["objective", "format", "optimization_goals"].forEach(function (e) {
          t[e] && n.addAll(t[e]);
        }),
        n.map(function (e) {
          return y(t, e);
        })
      );
    }
    function h(e) {
      var t = r("getByPath")(e, ["suggestions"], []);
      return Array.isArray(t)
        ? t
            .filter(function (e) {
              return typeof e == "string";
            })
            .map(function (e) {
              return { id: e, explanations: { type: "", value: "" } };
            })
        : [];
    }
    function y(e, t) {
      var n = { id: t, explanations: { type: "", value: "" } },
        o = t.replace(/:/g, "__"),
        a = r("nullthrows")(r("getByPath")(e, ["explanations", o], null));
      return (
        (n.explanations = a.reduce(function (e, t) {
          return ((e[t.key] = t.value), e);
        }, {})),
        n
      );
    }
    ((l.isBreakdownColumn = u),
      (l.getBreakdown = c),
      (l.isColumnSuggestionsSupportedInLevel = d),
      (l.getSupportedPresets = m),
      (l.isColumnSuggestionsSupportedInPreset = p),
      (l.getSuggestionsToggleID = _),
      (l.getSuggestionTypeByLevel = f),
      (l.getSuggestionsFromAPI = g),
      (l.getMRSSuggestionsFromAPI = h));
  },
  98,
);
