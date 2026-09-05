__d(
  "AdsMetadataConnectedSourcesUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsConnectedSourcesAwarenessUtils",
    "AdsCreativeEndStateV2Utils",
    "AdsImageIDClasses",
    "AdsInterfacesLogger",
    "AdsL1SimplificationArm1Utils",
    "AdsMetadataSiteExtensionUtils",
    "AdsMidFunnelExpansionProductExtensionUtils",
    "AdsPCAUnificationUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUserSettingsDataManager",
    "AdsUserSettingsProvider",
    "CatalogAdoptionExperimentationUtils",
    "CatalogBusinessEventsLoggerHelper",
    "ClickToMessageCTDFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "DateConsts",
    "DeepRecordUtils",
    "PECatalogStickyOptOutGating",
    "PECatalogStickyOptOutLogger",
    "PECatalogStickyOptOutReader",
    "PECatalogStickyOptOutWriter",
    "SEFunnelLogger",
    "emptyArray",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return r("gkx")("7713");
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("20281") : r("gkx")("15268")
      );
    }
    function d(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("9526") : r("gkx")("10109")
      );
    }
    function m(e, t, n, o, a, i) {
      var l;
      (i === void 0 && (i = "source"),
        r("AdsInterfacesLogger").logOnce({
          data:
            ((l = {}),
            (l.ad_account_id = e),
            (l.adgroup_id = t),
            (l.message = JSON.stringify({
              productSetID: n,
              sourceUrl: o,
              surface: a,
              urlTier: i,
            })),
            l),
          eventName: "ads_connected_sources_pe_url_fallback_catalog_defaulted",
        }),
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_pe_source_url_catalog_defaulting")
          .setAdAccountID(e)
          .setActionData({
            adgroup_id: t != null ? String(t) : null,
            product_set_id: n != null ? String(n) : null,
            source_url: o,
            surface: a,
            url_tier: i,
          })
          .log());
    }
    function p(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.adgroup_id = t),
          (o.message = JSON.stringify({ sourceUrl: n })),
          o),
        eventName: "ads_connected_sources_pe_url_fallback_url_synced",
      });
    }
    var _ = 12096e5,
      f = 12096e5,
      g = 4,
      h = 4,
      y = 1,
      C = 2,
      b = 3,
      v = 1,
      S = 4;
    function R(e, t, n) {
      return e ? t : n;
    }
    var L = new Map([
        [
          (s = o("AdsAPIObjectives")).LINK_CLICKS,
          [(e = r("AdsPromotedObjectTypes")).WEBSITE, e.WHATSAPP],
        ],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEBSITE_AND_IN_STORE,
            e.WHATSAPP,
            e.WEB_AND_APP,
            e.WEBSITE_AND_MESSAGES,
          ],
        ],
        [s.CONVERSIONS, [e.PIXEL]],
        [s.OUTCOME_ENGAGEMENT, [e.WHATSAPP, e.PIXEL]],
      ]),
      E = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_AWARENESS, [e.WEBSITE, e.NONE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
        [s.OUTCOME_LEADS, [e.PIXEL]],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEBSITE_AND_IN_STORE,
            e.WEB_AND_SHOP,
            e.WEB_AND_APP,
            e.WEBSITE_AND_MESSAGES,
          ],
        ],
        [s.CONVERSIONS, [e.PIXEL, e.WEB_AND_SHOP, e.WEB_AND_APP]],
      ]),
      k = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
        [s.OUTCOME_LEADS, [e.PIXEL]],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEBSITE_AND_IN_STORE,
            e.WEB_AND_SHOP,
            e.WEB_AND_APP,
            e.WEBSITE_AND_MESSAGES,
          ],
        ],
        [s.CONVERSIONS, [e.PIXEL, e.WEB_AND_SHOP, e.WEB_AND_APP]],
      ]),
      I = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
        [s.OUTCOME_LEADS, [e.PIXEL]],
        [
          s.OUTCOME_SALES,
          [e.PIXEL, e.WEBSITE_AND_IN_STORE, e.WEB_AND_SHOP, e.WEB_AND_APP],
        ],
        [s.CONVERSIONS, [e.PIXEL, e.WEB_AND_SHOP, e.WEB_AND_APP]],
      ]),
      T = n("$InternalEnum").Mirrored([
        "EMPTY_NEED_TO_ADD_MANUAL",
        "EMPTY_NOT_FOUND_NEED_TO_ADD_MANUAL",
        "NOT_ENOUGH_NEED_TO_ADD_MANUAL",
        "ENOUGH",
      ]),
      D = new Map([[s.APP_INSTALLS, [e.MOBILE_APP]]]),
      x = new Map([
        [s.APP_INSTALLS, [e.MOBILE_APP]],
        [s.CONVERSIONS, [e.MOBILE_APP]],
        [s.LINK_CLICKS, [e.MOBILE_APP]],
        [s.OUTCOME_SALES, [e.MOBILE_APP]],
      ]),
      $ = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL, e.WEBSITE]],
        [s.OUTCOME_LEADS, [e.PIXEL, e.WEBSITE]],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEB_AND_APP,
            e.WEBSITE,
            e.WEB_AND_SHOP,
            e.WEBSITE_AND_IN_STORE,
          ],
        ],
      ]),
      P = [e.POST, e.VIDEO],
      N = [
        s.OUTCOME_ENGAGEMENT,
        s.LINK_CLICKS,
        s.OUTCOME_SALES,
        s.CONVERSIONS,
        s.OUTCOME_LEADS,
      ],
      M = [s.OUTCOME_ENGAGEMENT, s.LINK_CLICKS, s.OUTCOME_SALES],
      w = [s.OUTCOME_ENGAGEMENT, s.LINK_CLICKS, s.OUTCOME_SALES];
    function A(e) {
      return (
        o("AdsAPICampaignGroupRecordUtils").getPromotedObjectProductCatalogID(
          e,
        ) != null
      );
    }
    function F(e, t, n, r, o, a) {
      if (r.includes(t) && n === o && a()) {
        var i,
          l = (i = e.get(t)) != null ? i : [];
        if (l.includes(o)) return e;
        var s = new Map(e);
        return (s.set(t, [].concat(l, [o])), s);
      }
      return e;
    }
    function O(e) {
      return e.is_dynamic_creative_optimization === !0;
    }
    function B(e, t, n) {
      return t === r("AdsPromotedObjectTypes").WHATSAPP
        ? n === r("AdCampaignDestination").WHATSAPP
        : t === r("AdsPromotedObjectTypes").INSTAGRAM
          ? n === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
            o(
              "ClickToMessageCTDFeatureGating",
            ).enableCTDProductExtensionsIGPlacement(!0)
          : !0;
    }
    function W(e, t, n) {
      return j(e, t, n) || z(e, t, n);
    }
    function q(e, t, n) {
      return Y(e, t, n);
    }
    function U() {
      return o(
        "AdsCreativeEndStateV2Utils",
      ).shouldRenderCESConnectedSourcesUpdate();
    }
    function V() {
      return r("gkx")("2684");
    }
    function H(e, t, n, a) {
      var i,
        l = t.objective,
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, e),
        u = !!(a.has(l) && (i = a.get(l)) != null && i.includes(s));
      (u &&
        l === o("AdsAPIObjectives").OUTCOME_AWARENESS &&
        !o("AdsConnectedSourcesAwarenessUtils").isOCMRAwarenessGKEnabled() &&
        (u = !1),
        u === !0 &&
          w.includes(l) &&
          s === r("AdsPromotedObjectTypes").INSTAGRAM &&
          (u = o(
            "ClickToMessageCTDFeatureGating",
          ).enableCTDProductExtensionsIGPlacement(!0)));
      var c = A(t) && !o("AdsPCAUnificationUtils").isPcaUnificationEnabled(t);
      return !(
        !u ||
        c ||
        O(e) ||
        o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAdOrCreativeAssetGroup(
          n,
        ) ||
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(n) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(n.creative)
      );
    }
    function G(e, t) {
      var n = t.objective;
      if (n !== o("AdsAPIObjectives").OUTCOME_ENGAGEMENT) return !1;
      var r = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, e);
      return P.includes(r);
    }
    function z(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = L,
        l = t.objective,
        s = e.destination_type,
        u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, e);
      (Ve() && (i = He(i)),
        (i = F(
          i,
          l,
          u,
          [
            o("AdsAPIObjectives").OUTCOME_SALES,
            o("AdsAPIObjectives").LINK_CLICKS,
          ],
          r("AdsPromotedObjectTypes").MOBILE_APP,
          function () {
            return r("gkx")("1848");
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").APP_INSTALLS],
          r("AdsPromotedObjectTypes").MOBILE_APP,
          function () {
            return r("gkx")("3139");
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_LEADS],
          r("AdsPromotedObjectTypes").PIXEL,
          function () {
            return (
              o(
                "AdsMidFunnelExpansionProductExtensionUtils",
              ).isLeadsxWebsitePEEnabledAATest(!1),
              o(
                "CatalogAdoptionExperimentationUtils",
              ).checkExpForCatalogAdoptionExperimentationOrIBT(
                "pe_expansion_leads_website",
                "offsite_leadgen_pe",
                { adGroupId: n.id, silent: !a },
              )
            );
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_LEADS],
          r("AdsPromotedObjectTypes").WHATSAPP,
          function () {
            return (
              s === r("AdCampaignDestination").WHATSAPP &&
              o("ClickToWhatsAppFeatureGating").isEligibleForLeadsCTWACatalog(
                !a,
              )
            );
          },
        )),
        (i = F(i, l, u, w, r("AdsPromotedObjectTypes").INSTAGRAM, function () {
          return o(
            "ClickToMessageCTDFeatureGating",
          ).enableCTDProductExtensionsIGPlacement(!0);
        })));
      for (var c of P)
        i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_ENGAGEMENT],
          c,
          function () {
            return o(
              "CatalogAdoptionExperimentationUtils",
            ).checkExpForCatalogAdoptionExperimentationNoBundles(
              "pe_expansion_engagement_on_your_ad",
              "engagement_on_your_ad_pe",
              { adGroupId: n.id, silent: !a },
            );
          },
        );
      return B(l, u, s) ? H(e, t, n, i) : !1;
    }
    function j(e, t, n) {
      var r,
        a = {
          adgroup_id: n.id,
          campaign_id: e.id,
          campaign_group_id: t.id,
          object_level: "ad_level",
        },
        i = t.objective,
        l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(i, e),
        s = (r = n.creative) == null ? void 0 : r.product_set_id;
      if (s != null)
        return (
          o("SEFunnelLogger").logPrereqFail(a, {
            ineligibility_reason: "has_product_set",
            campaign_objective: i,
            promoted_object_type: l,
          }),
          !1
        );
      if (
        o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAdOrCreativeAssetGroup(n)
      )
        return (
          o("SEFunnelLogger").logPrereqFail(a, {
            ineligibility_reason: "flexible_format",
            campaign_objective: i,
            promoted_object_type: l,
          }),
          !1
        );
      var u = H(e, t, n, E);
      return (
        u
          ? (o("SEFunnelLogger").logPrereqPass(a, {
              is_static_single_image_or_video: !0,
              campaign_objective: i,
              promoted_object_type: l,
            }),
            o("SEFunnelLogger").logL1EligibilityPass(a, {
              is_static_single_image_or_video: !0,
              campaign_objective: i,
              promoted_object_type: l,
            }))
          : (o("SEFunnelLogger").logPrereqFail(a, {
              ineligibility_reason: "ineligible_connected_sources_setup",
              campaign_objective: i,
              promoted_object_type: l,
            }),
            o("SEFunnelLogger").logL1EligibilityFail(a, {
              is_static_single_image_or_video: !1,
              campaign_objective: i,
              promoted_object_type: l,
            })),
        u
      );
    }
    function K(e, t, n) {
      return H(e, t, n, k);
    }
    function Q(e, t, n) {
      return H(e, t, n, I);
    }
    function X(e, t, n) {
      return H(e, t, n, $);
    }
    function Y(e, t, n) {
      return x.has(t.objective) ? H(e, t, n, r("gkx")("9207") ? x : D) : !1;
    }
    function J(e, t, n, o, a, i) {
      return r("gkx")("23599") ? Z(e, t, null, null, n, o, a, i) : !1;
    }
    function Z(e, t, n, r, o, a, i, l) {
      var s = "ttl",
        u = !0,
        c = 0,
        d = ee(e, t, o, a, i, l);
      return (
        (u = d.shouldStickyOptOut),
        (c = d.lastOptOutTimestamp),
        xe(t == null ? void 0 : t.id, u, s, c),
        u && r != null && n != null && r === n ? !1 : u
      );
    }
    function ee(e, t, n, r, a, i) {
      var l = t == null ? void 0 : t.ads_cs_catalog_opt_out_timestamp,
        s = ne(),
        u = Date.now(),
        c = o("PECatalogStickyOptOutGating").shouldReadGranularOptOut(e);
      return (
        o("PECatalogStickyOptOutLogger").logGranularStickyOptOutReadShadow(
          e,
          l,
          { pageId: r, objective: n, urlType: a },
          c,
          s,
          u,
          { adgroupId: i, userSettingsId: t == null ? void 0 : t.id },
        ),
        c
          ? o("PECatalogStickyOptOutReader").getStickyOptOutGranular(
              e,
              l,
              n,
              r,
              a,
              !0,
              s,
              u,
              "",
            )
          : o("PECatalogStickyOptOutReader").getStickyOptOut(e, l, s, u, "")
      );
    }
    function te(e, t, n, r, o) {
      return ee(e, t, n, r, o).shouldStickyOptOut;
    }
    function ne() {
      var e = r("gkx")("20334");
      return e ? _ : _ / 4;
    }
    function re(e, t) {
      var n,
        a,
        i =
          e != null &&
          (n =
            t == null || (a = t.ads_cs_sitelinks_opt_out_timestamp) == null
              ? void 0
              : a.get(e)) != null
            ? n
            : 0,
        l = r("justknobx")._("5823"),
        s = l > 0 ? l * o("DateConsts").MS_PER_DAY : f;
      return Date.now() - i < s;
    }
    function oe(e) {
      return (
        (e == null ? void 0 : e.website_selling_points_data_opt_in_status) ===
        "OPTED_OUT"
      );
    }
    function ae(e) {
      return (
        (e == null ? void 0 : e.website_reviews_data_opt_in_status) ===
        "OPTED_OUT"
      );
    }
    function ie(e) {
      return e === "OPTED_IN" ? !0 : e === "OPTED_OUT" ? !1 : null;
    }
    function le(e) {
      return ie(
        e == null ? void 0 : e.website_selling_points_data_opt_in_status,
      );
    }
    function se(e) {
      return ie(e == null ? void 0 : e.website_reviews_data_opt_in_status);
    }
    function ue(e) {
      return ie(e == null ? void 0 : e.website_media_opt_in_status);
    }
    function ce() {
      var e,
        t =
          (e = r("AdsUserSettingsProvider")()) == null
            ? void 0
            : e.getData().first();
      return t == null || t.isLoading() ? null : t.getValue();
    }
    function de(e, t) {
      return e != null
        ? { actionType: "STICKY", enrollStatus: e ? "OPT_IN" : "OPT_OUT" }
        : t
          ? { actionType: "DEFAULT", enrollStatus: "OPT_IN" }
          : null;
    }
    function me(e, t) {
      var n = !0,
        r = pe(e, t);
      return ((n = r.shouldStickyOptOut), n);
    }
    function pe(e, t) {
      var n = Date.now(),
        r = 0;
      if (e != null) {
        var o, a;
        r =
          (o =
            t == null || (a = t.ads_cs_dynamic_se_opt_out_timestamp) == null
              ? void 0
              : a.get(e)) != null
            ? o
            : 0;
      }
      var i = n - r < f;
      return { shouldStickyOptOut: i, lastOptOutTimestamp: r };
    }
    function _e(e, t, n) {
      return (
        (o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
          q(e, t, n)) ||
        (o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
          W(e, t, n) &&
          U())
      );
    }
    function fe(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("gkx")("11348") === !0 : r("gkx")("11382") === !0
      );
    }
    function ge(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        q(e, t, n) &&
        U() &&
        fe(!1)
      );
    }
    function he(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        j(e, t, n) &&
        U()
      );
    }
    function ye(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        z(e, t, n) &&
        U()
      );
    }
    function Ce(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        K(e, t, n) &&
        U()
      );
    }
    function be(e, t, n) {
      return (
        he(e, t, n) ||
        ye(e, t, n) ||
        ge(e, t, n) ||
        (Ce(e, t, n) && r("gkx")("6023"))
      );
    }
    function ve(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function Se(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_OUT"
      );
    }
    function Re(e) {
      if (o("AdsMetadataSiteExtensionUtils").shouldV2DefaultOn(e))
        return "SITE_LINK_RECOMMENDATION_V2";
      if (o("AdsMetadataSiteExtensionUtils").shouldMLDefaultOn(e)) {
        var t = e == null ? void 0 : e.values().next().value,
          n = t == null ? void 0 : t.site_link_recommendation_type;
        switch (n) {
          case "GEN_AI":
          case "GEN_AI_ADOPTED_TRAFFIC":
          case "GEN_AI_CTA":
          case "GEN_AI_IAB":
          case "GEN_AI_IAB_RELEVANCY":
          case "GEN_AI_MULTI_ASSET":
          case "GEN_AI_P2P_RELEVANCY":
          case "GEN_AI_PIXEL":
          case "GEN_AI_SINGLE_ASSET":
          case "GENAI_SHORTENED":
            return "GEN_AI";
          case "CATALOG_RELEVANCY":
          case "CATALOG_RELEVANCY_COLLECTIONS":
          case "CATALOG_RELEVANCY_IAB":
          case "CATALOG_RELEVANCY_PDPS":
          case "CATALOG_RELEVANCY_PIXEL":
          case "CATALOG_RELEVANCY_PRAPI_COLLECTIONS":
          case "CATALOG_RELEVANCY_PRAPI_TO_P2P":
          case "CATALOG_RELEVANCY_PRODUCT_SET_TO_BEST_SELLERS":
          case "CRAWLED_COLLECTION":
          case "CRAWLED_HIGH_QUALITY":
          case "CRAWLED_HOMEPAGE_CREATIVE":
          case "CRAWLED_SERVICES":
          case "CRAWLED_UNCLASSIFIED_HIGH_QUALITY":
            return "CRAWLED_HIGH_QUALITY";
          case "SHOP":
          case "STICKY":
          case "BING_API":
          case "MANUAL":
          case "MANUAL_CAMPAIGN":
            return n;
          case "LLM_JUDGE_DEFAULTING":
            return "LLM_JUDGE_DEFAULTING";
        }
      }
      return null;
    }
    var Le = [
      r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS,
      r("AdsAPIOptimizationGoals").LINK_CLICKS,
    ];
    function Ee(e, t) {
      return e == null
        ? !1
        : e === "BING_API"
          ? !!(
              (t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
                r("gkx")("1025")) ||
              (t != null && Le.includes(t) && r("gkx")("8267"))
            )
          : e === "CRAWLED_HIGH_QUALITY"
            ? r("gkx")("8505") || r("gkx")("8506")
            : e === "GEN_AI" ||
                e === "SHOP" ||
                e === "STICKY" ||
                e === "MANUAL" ||
                e === "MANUAL_CAMPAIGN" ||
                e === "SITE_LINK_RECOMMENDATION_V2" ||
                e === "LLM_JUDGE_DEFAULTING"
              ? !0
              : e === "DSL_ELIGIBLE"
                ? u()
                : !1;
    }
    function ke(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.ad_account_id = e == null ? void 0 : e.account_id),
          (i.message = JSON.stringify({
            productSetId: t,
            productCount: n,
            errorLocation: o,
          })),
          (i.adgroup_id = a),
          i),
        eventName: "ads_connected_sources_catalog_items_below_3",
      });
    }
    function Ie(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.ad_account_id = e == null ? void 0 : e.account_id),
          (i.message = JSON.stringify({ productSetId: t, productCount: n })),
          (i.duration = a),
          (i.adgroup_id = o),
          i),
        eventName: "ads_connected_sources_catalog_section_in_viewport",
      });
    }
    function Te(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e.join(",")),
          (o.is_enabled = t),
          (o.custom_event_type = n),
          o),
        eventName: "ads_connected_sources_catalog_eligibility_selector",
      });
    }
    function De(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((n = {}),
          (n.item_count = t == null ? void 0 : t.length),
          (n.action_type = e != null ? e : ""),
          (n.message = JSON.stringify(Array.from(t != null ? t : []))),
          n),
        eventName: "ads_connected_sources_site_links_default_on_notice_display",
      });
    }
    function xe(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.source = n),
          (a.is_enabled = t),
          (a.user_account_id = e != null ? e : ""),
          (a.encoding_time = o),
          a),
        eventName: "ads_connected_sources_catalog_sticky_status",
      });
    }
    function $e(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = t),
          (i.subsequent_data = n),
          (i.message = o),
          (i.source = a),
          i),
        eventName: "ads_connected_sources_component_rendered",
      });
    }
    function Pe(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = n),
          (i.subsequent_data = a),
          (i.source = o),
          (i.nav_source = t),
          i),
        eventName: "ads_connected_sources_update_site_links_manually",
      });
    }
    function Ne(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.subsequent_data = n),
          (o.caller = t),
          o),
        eventName: "ads_connected_sources_site_links_source_url_updated",
      });
    }
    function Me(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.adgroup_id = e), (n.subsequent_data = t), n),
        eventName: "ads_connected_sources_recommended_site_links_shown",
      });
    }
    function we(e, t, n, o, a, i) {
      var l,
        s = n != null ? "OPT_IN" : "OPT_OUT",
        u = n === o ? "DEFAULT" : "CUSTOM";
      r("AdsInterfacesLogger").logOnce({
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.event_source = t),
          (l.status = s),
          (l.change_type = u),
          (l.subsequent_data = a),
          (l.caller = i),
          l),
        eventName: "ads_creative_catalog_selection_changed",
      });
    }
    function Ae(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.is_enabled = t),
          (o.subsequent_data = n),
          o),
        eventName: "ads_connected_sources_da_info_label_eligibility_selector",
      });
    }
    function Fe(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.is_enabled = t),
          (o.subsequent_data = n),
          o),
        eventName: "ads_with_benefits_eligibility_selector",
      });
    }
    function Oe(e, t, n, o) {
      var a, i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.ad_account_id = e),
          (i.item_count = o == null ? void 0 : o.size),
          (i.url = t != null ? t : ""),
          (i.action_type = n != null ? n : ""),
          (i.message = JSON.stringify(
            Array.from((a = o == null ? void 0 : o.values()) != null ? a : []),
          )),
          (i.subsequent_data = JSON.stringify({ is_dynamic_se_enabled: u() })),
          i),
        eventName: "ads_connected_sources_site_links_eligibile_for_default_on",
      });
    }
    function Be(e, t, n, o) {
      var a,
        i = JSON.stringify({
          default_product_set_id: n,
          default_catalog_domain: o,
        });
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.adgroup_id = e.join(",")),
          (a.is_enabled = t),
          (a.subsequent_data = i),
          a),
        eventName: "ads_connected_sources_catalog_adding_by_default",
      });
    }
    function We(e, t, n, o, a, i, l) {
      var s,
        u = JSON.stringify({
          old_product_set_id: n,
          new_product_set_id: t,
          old_catalog_id: a,
          new_catalog_id: o,
          url: i,
        });
      r("AdsInterfacesLogger").logOnce({
        data:
          ((s = {}),
          (s.adgroup_id = e.join(",")),
          (s.message = u),
          (s.subsequent_data = l),
          s),
        eventName: "ads_connected_sources_product_set_suggestion_change",
      });
    }
    function qe(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.adgroup_id = e.join(",")), (n.message = t), n),
        eventName: "ads_connected_sources_product_set_change_toast_click",
      });
    }
    function Ue(e, t) {
      var n = t.objective,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, e);
      return (
        n != null &&
        N.includes(n) &&
        a === r("AdsPromotedObjectTypes").MESSENGER
      );
    }
    function Ve() {
      return r("gkx")("4181");
    }
    function He(e) {
      return (
        N.map(function (t) {
          if (e.has(t)) {
            var n,
              o = (n = e.get(t)) != null ? n : [];
            o.includes(r("AdsPromotedObjectTypes").MESSENGER) ||
              (o.push(r("AdsPromotedObjectTypes").MESSENGER), e.set(t, o));
          }
        }),
        e
      );
    }
    function Ge(e, t, n, a, i, l, s, u) {
      var c = { adgroupId: u, userSettingsId: a },
        d = !1,
        m = e == null ? new Map() : e;
      (n != null &&
        e != null &&
        e.has(t) &&
        (o("PECatalogStickyOptOutLogger").logGranularStickyOptOutWriteShadow(
          t,
          { pageId: l, objective: i, urlType: s },
          !1,
          c,
        ),
        o("PECatalogStickyOptOutWriter").applyOptIn(m, t, i, l, s),
        (d = !0)),
        n === null &&
          (o("PECatalogStickyOptOutLogger").logGranularStickyOptOutWriteShadow(
            t,
            { pageId: l, objective: i, urlType: s },
            !0,
            c,
          ),
          o("PECatalogStickyOptOutWriter").applyOptOut(
            m,
            t,
            i,
            l,
            s,
            Date.now(),
          ),
          (d = !0)),
        d &&
          a != null &&
          r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesCatalogOptOutTimestamp(a, m));
    }
    function ze(e, t, n, a, i, l) {
      var s, u;
      if (
        !(
          !o("PECatalogStickyOptOutGating").shouldWriteGranularOptOut() ||
          n == null
        )
      ) {
        var c =
          (s = r("AdsUserSettingsProvider")()) == null ? void 0 : s.get(n);
        if (!(c == null || c.isLoading())) {
          var d =
              (u = c.getValue()) == null
                ? void 0
                : u.ads_cs_catalog_opt_out_timestamp,
            m = new Map();
          (d != null &&
            d.forEach(function (e, t) {
              m.set(t, e);
            }),
            t
              ? o("PECatalogStickyOptOutWriter").applyOptOut(
                  m,
                  e,
                  a,
                  i,
                  l,
                  Date.now(),
                )
              : o("PECatalogStickyOptOutWriter").applyOptIn(m, e, a, i, l),
            r(
              "AdsUserSettingsDataManager",
            ).setConnectedSourcesCatalogOptOutTimestamp(n, m));
        }
      }
    }
    function je(e, t, n, o) {
      var a = !1,
        i = e == null ? new Map() : e;
      (n && e != null && e.has(t) && (i.delete(t), (a = !0)),
        n === !1 && (i.set(t, Date.now()), (a = !0)),
        a &&
          o != null &&
          r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesSitelinksOptOutTimestamp(o, i));
    }
    function Ke(e, t, n, o) {
      var a = !1,
        i = e == null ? new Map() : e;
      (n && e != null && e.has(t) && (i.delete(t), (a = !0)),
        n === !1 && (i.set(t, Date.now()), (a = !0)),
        a &&
          o != null &&
          r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesDynamicSEOptOutTimestamp(o, i));
    }
    function Qe(e) {
      var t,
        n,
        a,
        i =
          (t = o("DeepRecordUtils").maybeToPlainObject(
            (n = e.creative) == null ? void 0 : n.creative_sourcing_spec,
          )) == null
            ? void 0
            : t.site_links_spec,
        l =
          (a =
            i == null
              ? void 0
              : i.filter(function (e) {
                  return e.site_link_image_url != null;
                })) != null
            ? a
            : r("emptyArray");
      return l.length;
    }
    function Xe(e) {
      var t =
        e === "STICKY"
          ? "STICKY"
          : e === "DEFAULT"
            ? "DEFAULT"
            : e === "MANUAL"
              ? "MANUAL"
              : "UNKOWN";
      return t;
    }
    function Ye(e, t, n) {
      return (
        t === void 0 && (t = !1),
        !r("isStringNullOrEmpty")(n) &&
          (e === "DEFAULT" || e == null) &&
          t === !0
      );
    }
    function Je(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = t),
          (i.status = n.toString()),
          (i.source = o),
          (i.subsequent_data = a),
          i),
        eventName: "ads_connected_sources_site_links_toggle_click",
      });
    }
    function Ze(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.caller = t),
          (a.status = n.toString()),
          (a.subsequent_data = o),
          a),
        eventName: "ads_connected_sources_site_links_toggle_impression",
      });
    }
    function et(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = t),
          (i.ad_preview_format = n),
          (i.status = o),
          (i.subsequent_data = a),
          i),
        eventName: "ads_connected_sources_site_links_live_preview_impression",
      });
    }
    function tt(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.caller = t),
          (a.action_type = n),
          (a.subsequent_data = o),
          a),
        eventName: "ads_metadata_site_extension_managed_links_click",
      });
    }
    function nt(e, t, n) {
      var r;
      return (
        (r = {}),
        (r.ad_account_id = e.adAccountID),
        (r.adgroup_id = e.adgroupID),
        (r.page_id = e.pageID),
        (r.caller = t),
        (r.subsequent_data = JSON.stringify(
          babelHelpers.extends({}, n, { catalog_id: e.catalogID }),
        )),
        r
      );
    }
    function rt(e, t) {
      r("AdsInterfacesLogger").log({
        data: nt(e, "AdsConnectedSourcesLeadGenX2P:" + t, { variant: t }),
        eventName: "ads_connected_sources_x2p_card_impression",
      });
    }
    function ot(e, t) {
      r("AdsInterfacesLogger").log({
        data: nt(e, "AdsConnectedSourcesLeadGenX2PManageProductsButton", {
          variant: t,
        }),
        eventName: "ads_connected_sources_x2p_manage_products_click",
      });
    }
    function at(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data: babelHelpers.extends(
          {},
          nt(e, "AdsConnectedSourcesLeadGenX2PShowProductsToggle", {
            is_enabled: t,
          }),
          ((n = {}), (n.is_enabled = t), n),
        ),
        eventName: "ads_connected_sources_x2p_show_products_state",
      });
    }
    function it(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data: babelHelpers.extends(
          {},
          nt(e, "AdsConnectedSourcesLeadGenX2PShowProductsToggle", {
            is_enabled: t,
          }),
          ((n = {}), (n.is_enabled = t), n),
        ),
        eventName: "ads_connected_sources_x2p_show_products_toggle",
      });
    }
    function lt(e, t, n, o) {
      var a, i;
      r("AdsInterfacesLogger").log({
        data:
          ((i = {}),
          (i.product_set_id = e),
          (i.caller = "useX2PManageProductsModalSaveHandler"),
          (i.subsequent_data = JSON.stringify({
            catalog_id: o,
            is_all_selected: n,
            num_selected_products:
              (a = t == null ? void 0 : t.length) != null ? a : null,
            selected_product_ids: t,
          })),
          i),
        eventName: "ads_connected_sources_x2p_manage_products_save",
      });
    }
    function st(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
        r("AdCampaignDestination").WHATSAPP
      );
    }
    function ut(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
        r("AdCampaignDestination").INSTAGRAM_DIRECT
      );
    }
    function ct(e, t, n) {
      var a = t.objective,
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, e);
      return ((M.includes(a) ||
        (a === o("AdsAPIObjectives").OUTCOME_LEADS &&
          o("ClickToWhatsAppFeatureGating").isEligibleForLeadsCTWACatalog(
            !0,
          ))) &&
        i === r("AdsPromotedObjectTypes").WHATSAPP &&
        e.destination_type === r("AdCampaignDestination").WHATSAPP) ||
        (N.includes(a) &&
          i === r("AdsPromotedObjectTypes").MESSENGER &&
          o("AdsUEditorMessagingDestinationUtils").destinationIncludesMessenger(
            e.destination_type,
          )) ||
        G(e, t)
        ? n
        : !0;
    }
    function dt(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.is_enabled = t),
          (o.custom_event_type = n),
          o),
        eventName:
          "ads_connected_sources_website_summary_eligibility_selector_result",
      });
    }
    function mt(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        data: ((t = {}), (t.adgroup_id = e), t),
        eventName:
          "ads_connected_sources_website_summary_eligibility_check_start",
      });
    }
    function pt() {
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_metadata_website_summary_empty_url_in_graphql_query",
      });
    }
    function _t(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.message = e), (n.accountid = t), n),
        eventName: "ads_metadata_website_summary_graphql_query_started_for_url",
      });
    }
    function ft(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.url = e), (n.message = t), n),
        eventName:
          "ads_metadata_website_summary_graphql_query_response_for_url",
      });
    }
    function gt() {
      return r("gkx")("22553") === !0;
    }
    function ht(e) {
      if (
        (!r("gkx")("21997") &&
          !o(
            "AdsL1SimplificationArm1Utils",
          ).isL1SimplificationArm1QEEnabledWithoutExposure()) ||
        !r("justknobx")._("852")
      )
        return null;
      var t = e == null ? void 0 : e.selectedBaseAssetID;
      if (
        t != null &&
        t.type === "image" &&
        t.id instanceof o("AdsImageIDClasses").AdsAccountImageID
      ) {
        var n,
          a = t.id.getHash();
        return (
          r("AdsInterfacesLogger").logOnce({
            data:
              ((n = {}),
              (n.message = JSON.stringify({ hasHash: a != null })),
              n),
            eventName: "ads_se_media_picker_hash_presence_debug",
          }),
          a
        );
      }
      return null;
    }
    function yt(e) {
      var t,
        n,
        r,
        o =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_data_consented) == null
            ? void 0
            : t.enroll_status,
        a =
          e == null ||
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.site_links_spec,
        i = a == null ? 0 : Array.isArray(a) ? a.length : a.size,
        l =
          e == null ||
          (r = e.creative) == null ||
          (r = r.creative_sourcing_spec) == null ||
          (r = r.dynamic_site_links_spec) == null
            ? void 0
            : r.enroll_status;
      return (o === "OPT_IN" && i > 0) || l === "OPT_IN";
    }
    ((l.isDynamicSEDefaultOptInEnabled = u),
      (l.isEPASourceUrlCatalogDefaultingEnabled = c),
      (l.isPECatalogUrlWaterfallEnabled = d),
      (l.logPESourceUrlFallbackCatalogDefaulted = m),
      (l.logPESourceUrlFallbackUrlSynced = p),
      (l.MIN_IMAGE_URL_COUNT = g),
      (l.MIN_SITE_LINK_PREVIEW_COUNT = h),
      (l.MIN_IMAGE_URL_COUNT_FOR_CAROUSEL = y),
      (l.MIN_IMAGE_URL_COUNT_FOR_DA_CAROUSEL = C),
      (l.MIN_CATALOG_PRODUCT_COUNT = b),
      (l.MIN_CATALOG_PRODUCT_COUNT_FOR_CTWA_PE = v),
      (l.MIN_CATALOG_PRODUCT_COUNT_FOR_PE_COLLECTION = S),
      (l.getEffectiveProductCount = R),
      (l.SiteLinkPanelDisplayType = T),
      (l.ON_YOUR_AD_PROMOTED_OBJECT_TYPES = P),
      (l.CTMPESupportedObjectives = N),
      (l.CTWAPESupportedObjectives = M),
      (l.CTDPESupportedObjectives = w),
      (l.isEligibleForMediaPickerByExperiment = U),
      (l.isEligibleForPromotionsByExperiment = V),
      (l.isEngagementOnYourAdSetup = G),
      (l.isEligibleForCatalogByCampaignAndAdgroup = z),
      (l.isEligibleForSiteExtensionsByCampaignAndAdgroup = j),
      (l.isEligibleForWebsiteMediaByCampaignAndAdgroup = K),
      (l.isEligibleForFeaturedOfferingByCampaignAndAdgroup = Q),
      (l.isEligibleForPromotionsByCampaignAndAdgroup = X),
      (l.isEligibleForAppInformationByCampaignAndAdgroup = Y),
      (l.getExistingPostStickyOptOut = J),
      (l.catalogShouldStickyOptOutByGK = Z),
      (l.relevancyShouldStickyOptOutByGK = te),
      (l.getStickyOptOutTimeperiodFromExperiment = ne),
      (l.sitelinkShouldStickyOptOut = re),
      (l.websiteSellingPointsShouldStickyOptOut = oe),
      (l.websiteSummaryTextShouldStickyOptOut = ae),
      (l.websiteSellingPointsStickyOptIn = le),
      (l.websiteSummaryTextStickyOptIn = se),
      (l.websiteMediaStickyOptIn = ue),
      (l.readAdsUserSettingsDuringDispatch = ce),
      (l.resolveStickyOrDefaultEnrollment = de),
      (l.dynamicSEShouldStickyOptOutByGK = me),
      (l.isEligibleForMediaPickerByCampaignAndAdgroupAndExperiment = _e),
      (l.isFFForAppInstallEnabled = fe),
      (l.isEligibleForCESCreativeSetupWithAppInfo = ge),
      (l.isEligibleForCESCreativeSetupWithSE = he),
      (l.isEligibleForCESCreativeSetupWithPE = ye),
      (l.isEligibleForCESCreativeSetupWithWebsiteMedia = Ce),
      (l.isEligibleForCESCreativeSetupWithPEOrSEOrAppInfo = be),
      (l.isConnectedSourcesOptInForAdgroup = ve),
      (l.isConnectedSourcesOptOutForAdgroup = Se),
      (l.getSiteLinksDefaultOnType = Re),
      (l.shouldDefaultOnForRecommendationType = Ee),
      (l.logCatalogItemsBelow3 = ke),
      (l.logCatalogSectionInViewport = Ie),
      (l.logCatalogEligibilityResult = Te),
      (l.logDefaultOnNoticeDisplay = De),
      (l.logComponentRendered = $e),
      (l.logUpdateSiteLink = Pe),
      (l.logSiteLinkSourceUrlUpdated = Ne),
      (l.logRecommendedSiteLinksShown = Me),
      (l.logCatalogChanged = we),
      (l.logDAInfoLabelEligibilityResult = Ae),
      (l.logAdsWithBenefitsEligibilityResult = Fe),
      (l.logEligibleForSiteLinksDefaultOn = Oe),
      (l.logAddingCatalogByDefault = Be),
      (l.logProductSetSuggestionChange = We),
      (l.logProductSetChangeToastCardClick = qe),
      (l.isCTMAdByCampaignGroupAndCampaign = Ue),
      (l.isEligibleAdAccount = Ve),
      (l.updateConnectedSourceCatalogOptOutTimestamp = Ge),
      (l.updateRelevancyOptOutTimestamp = ze),
      (l.updateConnectedSourceSitelinksOptOutTimestamp = je),
      (l.updateConnectedSourceDynamicSEOptOutTimestamp = Ke),
      (l.countL1SpecImageUrl = Qe),
      (l.convertAdsConnectedSourcesCatalogActionSourceToPEActionSource = Xe),
      (l.shouldRefetchCatalog = Ye),
      (l.logSiteLinksToggleClick = Je),
      (l.logSiteLinksToggleShown = Ze),
      (l.logSiteLinksLivePreviewImpression = et),
      (l.logSiteExtensionManagedLinksClick = tt),
      (l.logX2PCardImpression = rt),
      (l.logX2PManageProductsClick = ot),
      (l.logX2PShowProductsState = at),
      (l.logX2PShowProductsToggle = it),
      (l.logX2PManageProductsSave = lt),
      (l.isCTWADestinationByCampaign = st),
      (l.isEligibleForCtdPeByCampaign = ut),
      (l.isEligibleForConnectedCatalogsByCatalogEligibility = ct),
      (l.logWebsiteSummaryEligibilityResult = dt),
      (l.logWebsiteSummaryEligibilityCheckStart = mt),
      (l.logWebsiteSummaryEmptyURLInGraphqlQuery = pt),
      (l.logWebsiteSummaryGraphqlQueryStartForURL = _t),
      (l.logWebsiteSummaryGraphqlQueryResponseForURL = ft),
      (l.isFFVideoSlideshowAppInfoDefaultOnEnabled = gt),
      (l.getMediaPickerImageHash = ht),
      (l.isSiteLinksOptedIn = yt));
  },
  98,
);
