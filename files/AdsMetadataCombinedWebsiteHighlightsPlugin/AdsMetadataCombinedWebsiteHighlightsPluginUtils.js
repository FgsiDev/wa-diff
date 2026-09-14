__d(
  "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPlusCSCJUtils",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsInterfacesLogger",
    "AdsMetadataConnectedSourcesConstants",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionUtils",
    "AdsMetadataWebsiteMediaUtils",
    "AdsMutators",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUserSettingsDataManager",
    "AdsWebsiteMediaSpecMutators",
    "IGAdsSensitiveVerticalsUtils",
    "adsRegulatedCategoriesContainHECRegulatedCategory",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [];
      if (e != null)
        for (var n of e.toArray())
          n.site_link_id != null && t.push(n.site_link_id);
      return t.length > 0 ? t : null;
    }
    function s(e) {
      var t =
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical;
      return t
        ? !0
        : e != null &&
            e.length > 0 &&
            r("adsRegulatedCategoriesContainHECRegulatedCategory")(e);
    }
    function u() {
      return s(void 0) ? !1 : r("gkx")("10886");
    }
    function c(e) {
      return (
        e === "STICKY" ||
        e === "MANUAL" ||
        e === "BACKFILL" ||
        e === "DUPLICATION_UPGRADE"
      );
    }
    function d(e, t, n) {
      var a, i, l, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
      if (!o("AdsAPlusCSCJUtils").passShowDestinationBlurbsGK("silent"))
        return {};
      var I = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e),
        T =
          (a = e.creative) == null || (a = a.creative_sourcing_spec) == null
            ? void 0
            : a.website_media_spec,
        D =
          (i = e.creative) == null ||
          (i = i.creative_sourcing_spec) == null ||
          (i = i.dynamic_data_refresh_spec) == null
            ? void 0
            : i.website_images,
        x = T == null ? void 0 : T.media,
        $ = T == null ? void 0 : T.enroll_status,
        P = T == null || (l = T.action_metadata) == null ? void 0 : l.type,
        N = null,
        M = T != null;
      if (
        (x != null &&
          ((d = x) == null ? void 0 : d.length) > 0 &&
          (x = o("AdsMetadataWebsiteMediaUtils").getValidMediaForCreativeSetup(
            x,
          )),
        !M &&
          (x == null || x.length === 0) &&
          (t == null ? void 0 : t.websiteMediaImages) != null &&
          t.websiteMediaImages.size > 0)
      ) {
        var w = t.websiteMediaImages.toArray(),
          A = o("AdsMetadataWebsiteMediaUtils").getValidMediaForCreativeSetup(
            w,
          );
        A.length > 0 && (x = A);
      }
      var F = x != null && x.length > 0,
        O =
          (m =
            (p = T == null ? void 0 : T.adex_had_data) != null
              ? p
              : t == null || (_ = t.websiteMediaSpec) == null
                ? void 0
                : _.hadData) != null
            ? m
            : F,
        B =
          (f =
            (g = T == null ? void 0 : T.adex_had_impression) != null
              ? g
              : t == null || (h = t.websiteMediaSpec) == null
                ? void 0
                : h.hadImpression) != null
            ? f
            : !1;
      if (F) {
        var W =
            P === "STICKY" ||
            P === "MANUAL" ||
            P === "BACKFILL" ||
            P === "DUPLICATION_UPGRADE",
          q = $ === "OPT_IN" && !s();
        if (!q && ($ == null || !W)) {
          var U = s()
            ? null
            : o("AdsMetadataConnectedSourcesUtils").websiteMediaStickyOptIn(n);
          U != null
            ? (($ = U ? "OPT_IN" : "OPT_OUT"),
              (P = "STICKY"),
              (N = U ? "OPT_IN" : "OPT_OUT"))
            : u()
              ? (($ = "OPT_IN"), (P = "DEFAULT"), (N = "OPT_IN"))
              : (($ = "OPT_OUT"), (P = "DEFAULT"), (N = "OPT_OUT"));
        } else N == null && u() && (N = "OPT_IN");
      } else ($ !== "OPT_OUT" || !c(P)) && ((x = null), ($ = null), (P = null));
      return (
        $ === "OPT_OUT" && (x = null),
        r("AdsInterfacesLogger").log({
          eventName: "website_media_initial_state_from_adgroup",
          data:
            ((b = {}),
            (b.adgroup_id = e.id),
            (b.subsequent_data = JSON.stringify({
              enrollStatus: $ != null ? $ : null,
              enrollActionType: P != null ? P : null,
              defaultStatus: N != null ? N : null,
              isExistingPost: I,
              mediaIsNull: x === null,
              mediaIsUndefined: x === void 0,
              mediaLength:
                (y = (C = x) == null ? void 0 : C.length) != null ? y : 0,
              mediaStrictNullCheck: x === null,
              mediaLooseNullCheck: x == null,
            })),
            b),
        }),
        {
          dynamicDataRefreshSpec: {
            websiteImages: {
              enrollStatus:
                (v = D == null ? void 0 : D.enroll_status) != null ? v : null,
              enrollActionType:
                (S =
                  D == null || (R = D.action_metadata) == null
                    ? void 0
                    : R.type) != null
                  ? S
                  : null,
            },
          },
          websiteMediaSpec: {
            enrollStatus: $ != null ? $ : null,
            defaultStatus: N,
            enrollActionType: P != null ? P : null,
            isExistingPost: I,
            media: x == null ? null : r("immutable").List(x),
            initialEnrollActionType: P != null ? P : null,
            initialEnrollStatus: $ != null ? $ : null,
            hadData: O,
            hadImpression: B,
            hasPersistedSpec: M,
            imageClusters:
              F && $ !== "OPT_OUT"
                ? (L =
                    (E = T == null ? void 0 : T.image_clusters) != null
                      ? E
                      : t == null || (k = t.websiteMediaSpec) == null
                        ? void 0
                        : k.imageClusters) != null
                  ? L
                  : []
                : null,
          },
        }
      );
    }
    function m(t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f =
          (n = t.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.site_links_spec,
        g = (a = f == null ? void 0 : f.length) != null ? a : 0,
        h =
          (i = t.creative) == null ||
          (i = i.degrees_of_freedom_spec) == null ||
          (i = i.creative_features_spec) == null ||
          (i = i.site_extensions) == null ||
          (i = i.customizations) == null
            ? void 0
            : i.is_shopping_links,
        y =
          (l = t.creative) == null ||
          (l = l.degrees_of_freedom_spec) == null ||
          (l = l.creative_features_spec) == null ||
          (l = l.site_extensions) == null ||
          (l = l.customizations) == null
            ? void 0
            : l.shopping_links_randomized_order,
        C =
          (s = t.creative) == null ||
          (s = s.degrees_of_freedom_spec) == null ||
          (s = s.creative_features_spec) == null ||
          (s = s.site_extensions) == null
            ? void 0
            : s.enroll_status,
        b =
          (u = t.creative) == null ||
          (u = u.creative_sourcing_spec) == null ||
          (u = u.site_links_data_consented) == null
            ? void 0
            : u.enroll_status,
        v =
          (c = t.creative) == null ||
          (c = c.creative_sourcing_spec) == null ||
          (c = c.site_links_data_consented) == null
            ? void 0
            : c.scope,
        S =
          (d = t.creative) == null ||
          (d = d.creative_sourcing_spec) == null ||
          (d = d.site_links_data_consented) == null ||
          (d = d.action_metadata) == null
            ? void 0
            : d.type,
        R =
          (m = t.creative) == null ||
          (m = m.degrees_of_freedom_spec) == null ||
          (m = m.creative_features_spec) == null ||
          (m = m.site_extensions) == null ||
          (m = m.action_metadata) == null
            ? void 0
            : m.type,
        L =
          (p = t.creative) == null ||
          (p = p.creative_sourcing_spec) == null ||
          (p = p.dynamic_site_links_spec) == null
            ? void 0
            : p.enroll_status,
        E = b === "OPT_OUT" ? !1 : g > 0 || L === "OPT_IN",
        k = f === null ? null : r("immutable").List(f);
      return (
        r("AdsInterfacesLogger").log({
          eventName: "discovery_link_initial_state_from_adgroup",
          data:
            ((_ = {}),
            (_.subsequent_data = JSON.stringify({
              enrollStatus: C != null ? C : null,
              enrollActionType: R != null ? R : null,
              siteLinksCount: g,
              dynamicSiteLinksEnrollStatus: L != null ? L : null,
              siteLinksDataConsented: E,
            })),
            _),
        }),
        {
          siteLinks: k,
          allAvailableDiscoveryLinks:
            C === "OPT_IN" && k != null && !k.isEmpty() ? k : null,
          visibleManagedLinkIds: e(k),
          is_shopping_links: h === null ? !0 : h,
          shopping_links_randomized_order: y === null ? !1 : y,
          siteExtension: {
            enrollStatus: C != null ? C : null,
            enrollActionType: R != null ? R : null,
          },
          dynamicSiteLinksSpec: { enrollStatus: L != null ? L : null },
          siteLinksDataConsented: babelHelpers.extends(
            {
              enrollStatus: E === !0 ? "OPT_IN" : "OPT_OUT",
              enrollActionType: S != null ? S : null,
            },
            o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout()
              ? { scope: v != null ? v : "DATA_CONSENT_ELIGIBLE" }
              : {},
          ),
        }
      );
    }
    function p(e, t, n, a, i, l) {
      var s;
      l === void 0 && (l = !1);
      var u = (s = e == null ? void 0 : e.size) != null ? s : 0,
        c =
          r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
          r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical ||
          !o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(e) ||
          r("gkx")("1857"),
        d = u > 0 && !c && !l ? "OPT_IN" : null,
        m = d === "OPT_IN" ? "DEFAULT" : null,
        p =
          !c &&
          o("AdsMetadataConnectedSourcesUtils").isDynamicSEDefaultOptInEnabled()
            ? "OPT_IN"
            : null;
      if (d === "OPT_IN") {
        var _ = o(
          "AdsMetadataConnectedSourcesUtils",
        ).sitelinkShouldStickyOptOut(t, n);
        _ && ((d = null), (m = "STICKY"));
      }
      if (p === "OPT_IN") {
        var f = o(
          "AdsMetadataConnectedSourcesUtils",
        ).dynamicSEShouldStickyOptOutByGK(t, n);
        f && (p = null);
      }
      return {
        enrollStatus: d,
        enrollActionType: m,
        dynamicSiteLinksEnrollStatus: p,
      };
    }
    function _(t, n, a, i, l, s) {
      var u, c;
      s === void 0 && (s = !1);
      var d = (u = (c = t.siteLinks) == null ? void 0 : c.size) != null ? u : 0,
        m = p(t.siteLinks, n, a, i, l, s),
        _ = m.dynamicSiteLinksEnrollStatus,
        f = m.enrollActionType,
        g = m.enrollStatus,
        h = f != null ? (f === "DEFAULT" ? "DEFAULT" : "STICKY") : null,
        y = !!(t.is_shopping_links == null && r("gkx")("12472")),
        C =
          t.shopping_links_randomized_order == null && r("gkx")("12472")
            ? !1
            : t.shopping_links_randomized_order,
        b =
          (t == null ? void 0 : t.siteLinksDataConsented) === !0 && d > 0
            ? "OPT_IN"
            : (t == null ? void 0 : t.siteLinksDataConsented) === !1
              ? "OPT_OUT"
              : null;
      return {
        siteLinks: t.siteLinks,
        visibleManagedLinkIds: e(t.siteLinks),
        is_shopping_links: y,
        shopping_links_randomized_order: C,
        siteExtension: { enrollStatus: g, enrollActionType: f },
        dynamicSiteLinksSpec: { enrollStatus: _ },
        siteLinksDataConsented: babelHelpers.extends(
          { enrollStatus: b, enrollActionType: h },
          o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout()
            ? { scope: "DATA_CONSENT_ELIGIBLE" }
            : {},
        ),
      };
    }
    function f(e, t, n, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m = e,
        p = t == null ? void 0 : t.siteLinks,
        _ = t == null ? void 0 : t.siteExtension,
        f = t == null ? void 0 : t.dynamicSiteLinksSpec,
        g =
          (l =
            t == null || (s = t.siteExtension) == null
              ? void 0
              : s.enrollActionType) != null
            ? l
            : "MANUAL",
        h =
          t == null || (u = t.siteLinksDataConsented) == null
            ? void 0
            : u.enrollStatus,
        y =
          (c =
            t == null || (d = t.siteLinksDataConsented) == null
              ? void 0
              : d.enrollActionType) != null
            ? c
            : "MANUAL",
        C = _ == null ? void 0 : _.enrollStatus,
        b = f == null ? void 0 : f.enrollStatus,
        v = t == null ? void 0 : t.is_shopping_links,
        S = t == null ? void 0 : t.shopping_links_randomized_order,
        R =
          r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
          r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical ||
          !o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(p) ||
          r("gkx")("1857");
      if (b != null) {
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.dynamic_site_links_spec.enroll_status.set(
          b,
          m,
        );
        var L = b === "OPT_OUT";
        n != null &&
          (r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesDynamicSEOptInStatus(n, !L),
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).updateConnectedSourceDynamicSEOptOutTimestamp(
            a,
            e.account_id,
            !L,
            n,
          ));
      }
      if (n != null) {
        var E =
          C === "OPT_OUT" &&
          (o("AdsFlexibleFormatAdexUtils").passQEForReactiveControlPESE(!0) ||
            (p != null &&
              (p == null ? void 0 : p.size) >=
                o("AdsMetadataConnectedSourcesConstants")
                  .SITE_LINKS_COUNT_LOWER_LIMIT));
        (_ == null ? void 0 : _.userModifiedEnrollStatus) === !0 &&
          (r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesSitelinksOptInStatus(n, !E),
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).updateConnectedSourceSitelinksOptOutTimestamp(
            i,
            e.account_id,
            !E,
            n,
          ));
      }
      if (p) {
        var k = r("immutable").List(
          Array.from(p.values())
            .filter(function (e) {
              return e != null;
            })
            .map(function (e) {
              return r("immutable").Map({
                site_link_title: e.site_link_title,
                site_link_url: e.site_link_url,
                site_link_image_hash: e.site_link_image_hash,
                site_link_image_url: e.site_link_image_url,
                site_link_recommendation_type: e.site_link_recommendation_type,
                site_link_hash: e.site_link_hash,
                is_site_link_sticky: e.is_site_link_sticky,
                site_link_id: e.site_link_id,
                site_link_language: e.site_link_language,
                site_link_extra_metadata: e.site_link_extra_metadata,
                site_link_url_anchor: e.site_link_url_anchor,
                site_link_url_recommender_type:
                  e.site_link_url_recommender_type,
                site_link_website_data_source: e.site_link_website_data_source,
                is_defaulting_eligible: e.is_defaulting_eligible,
              });
            }),
        );
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.site_links_spec.set(k, m);
        var I = C != null ? C : b,
          T = I != null ? I : !R && k.size > 0 ? "OPT_IN" : "OPT_OUT",
          D =
            h === "OPT_OUT"
              ? "OPT_OUT"
              : k.size > 0 || b === "OPT_IN"
                ? "OPT_IN"
                : "OPT_OUT",
          x = D === "OPT_OUT",
          $ = x ? "OPT_OUT" : T;
        (x &&
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.dynamic_site_links_spec.enroll_status.set(
            "OPT_OUT",
            m,
          )),
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
            $,
            m,
          )),
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
            g,
            m,
          )),
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
            D,
            m,
          )),
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
            y,
            m,
          )),
          o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout() &&
            (m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
              "DATA_CONSENT_ELIGIBLE",
              m,
            )),
          k.size > 0 &&
            ((m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.customizations.is_shopping_links.set(
              r("gkx")("12472") && (v == null || v === void 0) ? !0 : v,
              m,
            )),
            (m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.customizations.shopping_links_randomized_order.set(
              r("gkx")("12472") && (S == null || S === void 0) ? !1 : S,
              m,
            ))));
      } else
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.site_links_spec.delete(m);
      return m;
    }
    function g(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = e,
        _ =
          t == null || (a = t.dynamicDataRefreshSpec) == null
            ? void 0
            : a.websiteImages;
      if ((_ == null ? void 0 : _.enrollStatus) != null) {
        var f;
        p = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.dynamic_data_refresh_spec.website_images.enroll_status.set(
            _.enrollStatus,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.dynamic_data_refresh_spec.website_images.action_metadata.type.set(
            (f = _.enrollActionType) != null ? f : "MANUAL",
          ),
        )(p);
      }
      var g = t == null ? void 0 : t.websiteMediaSpec;
      if (g == null) return p;
      var h =
          (i = e.creative) == null ||
          (i = i.creative_sourcing_spec) == null ||
          (i = i.website_media_spec) == null
            ? void 0
            : i.enroll_status,
        y = g.enrollStatus === "OPT_IN",
        C = h == null || y !== (h === "OPT_IN");
      n != null &&
        g.enrollActionType === "MANUAL" &&
        g.enrollStatus != null &&
        C &&
        r("AdsUserSettingsDataManager").setWebsiteMediaDataOptInStatus(
          n,
          y ? "OPTED_IN" : "OPTED_OUT",
        );
      var b = o("AdsWebsiteMediaSpecMutators").resetWebsiteMediaSpec(p),
        v = g.enrollStatus === "OPT_OUT" ? null : g.media,
        S = r("immutable").List(
          (l =
            v == null
              ? void 0
              : v
                  .filter(function (e) {
                    return e.image_url != null && e.image_url !== "";
                  })
                  .map(function (e) {
                    return r("immutable").Map({
                      image_url: e.image_url,
                      image_hash: e.image_hash,
                      text: e.text,
                      description: e.description,
                      image_height: e.image_height,
                      image_width: e.image_width,
                      is_og_image: e.is_og_image,
                      image_sources: e.image_sources,
                      is_immersive_product: e.is_immersive_product,
                      is_human_and_product: e.is_human_and_product,
                      is_human_and_service: e.is_human_and_service,
                      is_poster: e.is_poster,
                      is_photo_collage: e.is_photo_collage,
                      is_landscape: e.is_landscape,
                      is_illustration: e.is_illustration,
                      is_text_wall: e.is_text_wall,
                      is_icon: e.is_icon,
                      is_logo: e.is_logo,
                      logo_icon_detection: e.logo_icon_detection,
                      background_cleanliness: e.background_cleanliness,
                      user_sentiment: e.user_sentiment,
                      product_focus: e.product_focus,
                      background_color: e.background_color,
                      human_face_detection: e.human_face_detection,
                      text_heavy: e.text_heavy,
                      image_blurry: e.image_blurry,
                      aesthetic_relevance: e.aesthetic_relevance,
                      message_relevance: e.message_relevance,
                      product_relevance: e.product_relevance,
                      overall_relevance: e.overall_relevance,
                      is_duplicate: e.is_duplicate,
                      similarity_score: e.similarity_score,
                      cluster_index: e.cluster_index,
                      image_phash: e.image_phash,
                      image_asset_fbid: e.image_asset_fbid,
                      is_guardrail_pass: e.is_guardrail_pass,
                    });
                  })) != null
            ? l
            : [],
        ),
        R = g == null ? void 0 : g.enrollStatus,
        L = g == null ? void 0 : g.enrollActionType;
      (R == null && !S.isEmpty() && ((R = "OPT_IN"), (L = "DEFAULT")),
        R != null &&
          (b = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
            R,
          )(b)));
      var E = L;
      E != null &&
        (b = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
          E,
        )(b));
      var k =
          (s = e.creative) == null || (s = s.creative_sourcing_spec) == null
            ? void 0
            : s.website_media_spec,
        I =
          (u = g.hadData) != null
            ? u
            : S.isEmpty()
              ? (c = k == null ? void 0 : k.adex_had_data) != null
                ? c
                : !1
              : !0,
        T =
          (d =
            (m = g.hadImpression) != null
              ? m
              : k == null
                ? void 0
                : k.adex_had_impression) != null
            ? d
            : !1;
      if (
        ((b = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.website_media_spec.adex_had_data.set(
            I,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.website_media_spec.adex_had_impression.set(
            T,
          ),
        )(b)),
        S.isEmpty())
      )
        return b;
      b = r(
        "AdsAdgroupRecordAccessors",
      ).creative.creative_sourcing_spec.website_media_spec.media.set(S)(b);
      var D = g == null ? void 0 : g.imageClusters;
      return (
        D != null &&
          (b = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.website_media_spec.image_clusters.set(
            r("immutable").List(
              D.map(function (e) {
                return r("immutable").Map({
                  image_phashes: e.image_phashes,
                  cluster_silhouette_score: e.cluster_silhouette_score,
                  cluster_intra_diversity: e.cluster_intra_diversity,
                  ranking_version: e.ranking_version,
                });
              }),
            ),
          )(b)),
        b
      );
    }
    function h() {
      var e =
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical;
      return e ? !1 : r("gkx")("2505");
    }
    function y(e, t) {
      var n, o, a, i, l, s, u, c, d, m, p, _;
      t === void 0 && (t = !1);
      var f =
          (n = e.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.featured_offering_spec,
        g = (o = f == null ? void 0 : f.enroll_status) != null ? o : null,
        y =
          (a =
            f == null || (i = f.action_metadata) == null ? void 0 : i.type) !=
          null
            ? a
            : null,
        C = (l = f == null ? void 0 : f.default_status) != null ? l : null,
        b = (s = f == null ? void 0 : f.media) != null ? s : null,
        v = (u = f == null ? void 0 : f.adex_had_data) != null ? u : !1,
        S = (c = f == null ? void 0 : f.adex_had_impression) != null ? c : !1,
        R =
          (d = f == null ? void 0 : f.featured_offering_asset_id) != null
            ? d
            : null,
        L =
          (m = f == null ? void 0 : f.mgenai_website_entity_id) != null
            ? m
            : null;
      b != null && b.length > 0 && ((v = !0), (S = !0));
      var E =
          y === "STICKY" ||
          y === "MANUAL" ||
          y === "BACKFILL" ||
          y === "DUPLICATION_UPGRADE",
        k = g === "OPT_IN" && b != null && b.length > 0;
      if (t && k) C == null && h() && (C = "OPT_IN");
      else if (g == null || !E) {
        if (t) return {};
        h()
          ? ((g = "OPT_IN"), (y = "DEFAULT"), (C = "OPT_IN"))
          : ((g = "OPT_OUT"), (y = "DEFAULT"), (C = "OPT_OUT"));
      } else C == null && h() && (C = "OPT_IN");
      return (
        r("AdsInterfacesLogger").log({
          eventName: "featured_offering_initial_state_from_adgroup",
          data:
            ((_ = {}),
            (_.subsequent_data = JSON.stringify({
              enrollStatus: g != null ? g : null,
              enrollActionType: y != null ? y : null,
              defaultStatus: C != null ? C : null,
              mediaLength: (p = b == null ? void 0 : b.length) != null ? p : 0,
              hadData: v,
              hadImpression: S,
            })),
            _),
        }),
        {
          featuredOfferingSpec: {
            enrollStatus: g != null ? g : null,
            defaultStatus: C,
            enrollActionType: y != null ? y : null,
            media: b,
            hadData: v,
            hadImpression: S,
            featuredOfferingAssetId: R,
            mgenaiWebsiteEntityId: L,
          },
        }
      );
    }
    function C(e, t) {
      var n = e,
        o = t == null ? void 0 : t.featuredOfferingSpec;
      if (o == null)
        return (
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.delete(n)),
          n
        );
      var a = o.media;
      if (a != null && a.length > 0) {
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.featured_offering_spec.media.set(
          r("immutable").List(
            a.map(function (e) {
              return r("immutable").Map({
                image_url: e.image_url,
                image_hash: e.image_hash,
                description: e.description,
                title: e.title,
                url: e.url,
              });
            }),
          ),
        )(n);
        var i = o.featuredOfferingAssetId;
        i != null
          ? (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.featured_offering_spec.featured_offering_asset_id.set(
              i,
            )(n))
          : (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.featured_offering_spec.featured_offering_asset_id.delete(
              n,
            ));
        var l = o.mgenaiWebsiteEntityId;
        l != null
          ? (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.featured_offering_spec.mgenai_website_entity_id.set(
              l,
            )(n))
          : (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.featured_offering_spec.mgenai_website_entity_id.delete(
              n,
            ));
      } else
        ((n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.featured_offering_spec.media.delete(
          n,
        )),
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.featured_offering_asset_id.delete(
            n,
          )),
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.mgenai_website_entity_id.delete(
            n,
          )));
      var s = o.enrollStatus,
        u = o.enrollActionType;
      (s !== "OPT_IN" &&
        a != null &&
        a.length > 0 &&
        ((s = "OPT_IN"), (u = "MANUAL")),
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.featured_offering_spec.enroll_status.set(
          s,
        )(n)),
        u != null &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.action_metadata.type.set(
            u,
          )(n)));
      var c = o.defaultStatus;
      c != null &&
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.featured_offering_spec.default_status.set(
          c,
        )(n));
      var d = o.hadData;
      d != null &&
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.featured_offering_spec.adex_had_data.set(
          d,
        )(n));
      var m = o.hadImpression;
      return (
        m != null &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.adex_had_impression.set(
            m,
          )(n)),
        n
      );
    }
    ((l.getInitialWebsiteMediaStateFromAdgroup = d),
      (l.getInitialSiteExtensionStateFromAdgroup = m),
      (l.evaluateSiteLinksOptIn = p),
      (l.getInitialSiteExtensionStateFromModalOpenAction = _),
      (l.mutateSiteExtensionAdgroup = f),
      (l.mutateWebsiteMediaAdgroup = g),
      (l.getInitialFeaturedOfferingStateFromAdgroup = y),
      (l.mutateFeaturedOfferingAdgroup = C));
  },
  98,
);
