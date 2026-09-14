__d(
  "PEShowProductsOptOutSurveyUtils",
  [
    "AdsMetadataConnectedSourcesUtils",
    "AdsUserSettingsProvider",
    "DateTime",
    "PECatalogStickyOptOutGating",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 14,
      u = 14,
      c = 1,
      d = 1440 * 60,
      m = !1;
    function p() {
      m = !0;
    }
    function _(t) {
      var n, o;
      if (m || t === "") return !1;
      var a = r("AdsUserSettingsProvider")(),
        i = a == null ? void 0 : a.get(t);
      if (i == null || i.isLoading()) return !1;
      var l = i.getValue();
      if (l == null) return !1;
      var s = (n = l.get("pe_show_products_survey_impr")) != null ? n : 0,
        u = (o = l.get("pe_show_products_survey_resp_ts")) != null ? o : 0;
      return s < e && u === 0;
    }
    function f(e) {
      return typeof e == "string"
        ? Math.floor(r("DateTime").fromISOString(e, 0).getUnixTimestamp() / 1e3)
        : Number(e != null ? e : 0);
    }
    function g(e, t) {
      var n = r("AdsUserSettingsProvider")(),
        a;
      if (e != null && e !== "") {
        var i = n == null ? void 0 : n.get(e);
        if (i == null || i.isLoading()) return !1;
        a = i.getValue();
      } else {
        var l;
        a =
          n == null || (l = n.getData()) == null || (l = l.first()) == null
            ? void 0
            : l.getValue();
      }
      if (a == null) return !1;
      if (
        t != null &&
        t.accountID != null &&
        o("PECatalogStickyOptOutGating").shouldReadGranularOptOut(t.accountID)
      )
        return o(
          "AdsMetadataConnectedSourcesUtils",
        ).relevancyShouldStickyOptOutByGK(
          t.accountID,
          a,
          t.objective,
          t.pageId,
          t.urlType,
        );
      var m = f(a.get("pe_ai_relevancy_opt_out_ts"));
      if (m === 0) return !1;
      var p = f(a.get("pe_show_products_survey_resp_ts")),
        _ = p > 0 && p >= m,
        g = _ ? s : u,
        h = r("justknobx")._("5305") ? c : g,
        y = Math.floor(r("DateTime").now(0).getUnixTimestamp() / 1e3);
      return y - m < h * d;
    }
    ((l.markSurveyShownThisSession = p),
      (l.shouldShowSurvey = _),
      (l.isInPeAiRelevancyOptOutCooldown = g));
  },
  98,
);
