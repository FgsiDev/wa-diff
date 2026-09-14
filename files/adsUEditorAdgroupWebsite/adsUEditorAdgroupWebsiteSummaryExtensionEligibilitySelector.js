__d(
  "adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
  [
    "AdsAPIObjectives",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsDynamicAdsUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsPromotedObjectTypes",
    "AdsSensitiveVerticalUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupEligibleForWebsiteSummaryQuerySelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          return e.objective;
        }),
        (e = r("AdsAPIObjectives")).NONE,
      ),
      c = r("adsGetUniformValueSelector")(
        r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
        (s = r("AdsPromotedObjectTypes")).NONE,
      ),
      d = new Set([
        s.PIXEL,
        s.WEB_AND_APP,
        s.WEB_AND_SHOP,
        s.WEBSITE_AND_IN_STORE,
        s.WEBSITE_APP_AND_IN_STORE,
      ]),
      m = new Map([
        [e.OUTCOME_TRAFFIC, new Set([s.WEBSITE])],
        [e.LINK_CLICKS, new Set([s.WEBSITE])],
        [e.OUTCOME_SALES, d],
        [e.OUTCOME_LEADS, new Set([s.PIXEL])],
        [e.OUTCOME_ENGAGEMENT, new Set([s.PIXEL])],
        [e.CONVERSIONS, d],
      ]),
      p = new Set(m.keys());
    function _(e, t, n) {
      if (
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical()
      )
        return "sensitive_vertical_t1_to_t3";
      if (!p.has(t)) return "ineligible_campaign_objective";
      var r = m.get(t);
      return r != null && !r.has(n)
        ? "not_website_destination_objective"
        : o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) ||
            o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
            o("AdsDynamicAdsUtils").isDynamicAd(e)
          ? "not_eligible_format"
          : null;
    }
    var f = r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector"), u, c],
        function (t, n, r) {
          return t.length === 0 ? !1 : _(t[0], n, r) == null;
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupWebsiteSummaryStructuralEligibilitySelector",
        },
      ),
      g = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          u,
          r("adsUEditorAdgroupEligibleForWebsiteSummaryQuerySelector"),
          c,
        ],
        function (t, n, r, a) {
          var e, i, l;
          if (t.length === 0) return !1;
          var s = t[0];
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).logWebsiteSummaryEligibilityCheckStart(s.id);
          var u = _(s, n, a);
          if (u != null)
            return (
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).logWebsiteSummaryEligibilityResult(s.id, !1, u),
              !1
            );
          var c =
              (e = s.creative) == null || (e = e.creative_sourcing_spec) == null
                ? void 0
                : e.website_summary_spec,
            d =
              (c == null ? void 0 : c.is_selling_points_available) === !0 ||
              ((i =
                c == null || (l = c.selling_points) == null
                  ? void 0
                  : l.length) != null
                ? i
                : 0) > 0,
            m =
              (c == null ? void 0 : c.is_summary_text_available) === !0 ||
              ((c == null ? void 0 : c.summary_text) != null &&
                c.summary_text !== "");
          if (d || m)
            return (
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).logWebsiteSummaryEligibilityResult(
                s.id,
                !0,
                "has_saved_data_on_spec",
              ),
              !0
            );
          if (r.isDone() && r.hasValue()) {
            var p = r.getValue();
            if (p === !1)
              return (
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).logWebsiteSummaryEligibilityResult(
                  s.id,
                  !1,
                  "no_data_response_from_graphql_query",
                ),
                !1
              );
            if (p === !0)
              return (
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).logWebsiteSummaryEligibilityResult(
                  s.id,
                  !0,
                  "has_data_response_from_graphql_query",
                ),
                !0
              );
          }
          return !1;
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector",
        },
      );
    ((l.adsUEditorAdgroupWebsiteSummaryStructuralEligibilitySelector = f),
      (l.adsUEditorAdgroupWebsiteSummaryExtensionEligibilitySelector = g));
  },
  98,
);
