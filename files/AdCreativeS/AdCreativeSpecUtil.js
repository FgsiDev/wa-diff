__d(
  "AdCreativeSpecUtil",
  [
    "AdActorTypes",
    "AdCreativeAuthorizationCategory",
    "AdCreativeDestinationGuidancesApplied",
    "AdCreativeDestinationOptimizationType",
    "AdCreativeDestinationType",
    "AdCreativeFeatureActionType",
    "AdCreativeFeatureEnrollStatus",
    "AdCreativeFormatTransformationCustomizationConfigName",
    "AdCreativeFormatTransformationDataSourceType",
    "AdCreativeFormatTransformationFormatType",
    "AdCreativeMediaType",
    "AdCreativeSEConsentScope",
    "AdCreativeSourceActionType",
    "AdCreativeSourceCatalogTagSource",
    "AdCreativeSourceEnrollStatus",
    "AdInstantCheckoutSetting",
    "AdsAPIAdCreativeShopSpecLandingViews",
    "AdsAPIAssetFeedTextActionType",
    "AdsAPIPublisherPlatform",
    "AdsApplinkTreatments",
    "AdsAspectRatioTypes",
    "AdsCreativeFlexSpecUtils",
    "AdsDynamicAdVoices",
    "AdsPixelConversionEventsEnum",
    "AdsSEConsentScopeRolloutUtils",
    "AdsTargetingGender",
    "ApiAdCreativeAdDisclaimerTitles",
    "ApiAdCreativeDestinationOptimizationEnrollmentStatus",
    "ApiAdObjectTypes",
    "ApiCarouselDeliveryMode",
    "BrandedContentBoostingType",
    "CallToActionTypes",
    "ContextualMultiAdsActionMetadataType",
    "CreativeMetadataSubfeature",
    "CreativeMultiMediaSource",
    "CreatorAdsPermissionType",
    "DynamicCategorizationCriteria",
    "DynamicCategoryAdMediaSource",
    "DynamicImageLayerCroppingOptions",
    "DynamicImageLayerFrameOverlayBlendingModes",
    "DynamicImageLayerFrameSources",
    "DynamicImageLayerImageSources",
    "DynamicImageLayerOverlayPositions",
    "DynamicImageLayerPaddingOptions",
    "DynamicImageLayerTextFonts",
    "DynamicImageLayerTextOverlayContentTypes",
    "DynamicImageLayerTextOverlayShapes",
    "DynamicImageLayerTypes",
    "HSMAvailableLanguagesType",
    "IGBrandedContentAdRenderFormat",
    "MarketingMessageButtonType",
    "MarketingMessageButtonUtils",
    "MultiMediaCropType",
    "PCAFormatType",
    "PartnershipAdsRankingIdentityType",
    "ProductSetPartnerSelectionStatusEnum",
    "TypeCoercionUtils",
    "VideoThumbnailSource",
    "XFBCTMSMCProductDataDecisionUtils.facebook",
    "XFBCTMSMCProductDataSourceUtils.facebook",
    "enumUtils",
    "filterNulls",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "creative_audience_pairing_persona",
        "gen_ai_metadata",
        "variant_types",
      ],
      s = ["creative_audience_pairing_persona"],
      u = void 0;
    function c(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = []
            .concat((r = n.scope) != null ? r : [])
            .sort()
            .join(",");
        t.set(n.name + "|" + o, n);
      }
      var a = Array.from(t.values());
      return a.length > 0 ? a : void 0;
    }
    function d(e) {
      var t;
      if (e != null) {
        var n,
          a = (t = e.website_summary) == null ? void 0 : t.selling_points;
        if ((a == null ? void 0 : a.enroll_status) != null) {
          var l = o("TypeCoercionUtils").coerceNonMaybeValue(
            r("getJSEnumSafe")(
              r("AdCreativeSourceEnrollStatus"),
              a.enroll_status,
            ),
            "app_experience_spec.website_summary.selling_points.enroll_status",
            i.id,
          );
          if (l != null) {
            var s;
            n = {
              selling_points: {
                action_metadata:
                  (s = a.action_metadata) != null && s.type
                    ? {
                        type: o("TypeCoercionUtils").coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("AdCreativeSourceActionType"),
                            a.action_metadata.type,
                          ),
                          "app_experience_spec.website_summary.selling_points.action_metadata.type",
                          i.id,
                        ),
                      }
                    : void 0,
                enroll_status: l,
              },
            };
          }
        }
        var u = function (t) {
            var e = t == null ? void 0 : t.data_sources;
            if (e != null) {
              var n = r("filterNulls")(
                e.map(function (e) {
                  var t,
                    n,
                    o = e.feature_name,
                    a = r("getJSEnumSafe")(
                      r("AdCreativeSourceEnrollStatus"),
                      e.enroll_status,
                    );
                  return o == null || a == null
                    ? null
                    : {
                        action_metadata:
                          (t = e.action_metadata) != null && t.type
                            ? {
                                type:
                                  (n = r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    e.action_metadata.type,
                                  )) != null
                                    ? n
                                    : void 0,
                              }
                            : void 0,
                        enroll_status: a,
                        feature_name: o,
                      };
                }),
              );
              return n.length > 0 ? { data_sources: n } : void 0;
            }
          },
          c = u(e.reveal_details),
          d = u(e.show_spotlights);
        if (!(n == null && c == null && d == null))
          return { reveal_details: c, show_spotlights: d, website_summary: n };
      }
    }
    function m(e) {
      var t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
      if (e != null)
        return {
          capabilities:
            e != null && e.capabilities
              ? {
                  allow_generated_pills:
                    (t = e.capabilities) != null && t.allow_generated_pills
                      ? o("TypeCoercionUtils").coerceObjectToUndefined({
                          action_metadata:
                            ((n = e.capabilities.allow_generated_pills) == null
                              ? void 0
                              : n.action_metadata) != null &&
                            (a = r("getJSEnumSafe")(
                              r("ContextualMultiAdsActionMetadataType"),
                              (i = e.capabilities.allow_generated_pills) == null
                                ? void 0
                                : i.action_metadata,
                            )) != null
                              ? a
                              : void 0,
                          enroll_status:
                            (e == null ||
                            (l = e.capabilities) == null ||
                            (l = l.allow_generated_pills) == null
                              ? void 0
                              : l.enroll_status) != null &&
                            (s = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              e == null ||
                                (u = e.capabilities) == null ||
                                (u = u.allow_generated_pills) == null
                                ? void 0
                                : u.enroll_status,
                            )) != null
                              ? s
                              : void 0,
                        })
                      : void 0,
                  prompts:
                    e != null && (c = e.capabilities) != null && c.prompts
                      ? o("TypeCoercionUtils").coerceObjectToUndefined({
                          action_metadata:
                            e != null &&
                            (d = e.capabilities) != null &&
                            (d = d.prompts) != null &&
                            d.action_metadata &&
                            (m = r("getJSEnumSafe")(
                              r("ContextualMultiAdsActionMetadataType"),
                              (p = e.capabilities.prompts) == null
                                ? void 0
                                : p.action_metadata,
                            )) != null
                              ? m
                              : void 0,
                          enroll_status:
                            e != null &&
                            (_ = e.capabilities) != null &&
                            (_ = _.prompts) != null &&
                            _.enroll_status &&
                            (f = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              e == null ||
                                (g = e.capabilities) == null ||
                                (g = g.prompts) == null
                                ? void 0
                                : g.enroll_status,
                            )) != null
                              ? f
                              : void 0,
                        })
                      : void 0,
                  skills:
                    e != null && (h = e.capabilities) != null && h.skills
                      ? o("TypeCoercionUtils").coerceObjectToUndefined({
                          action_metadata:
                            e != null &&
                            (y = e.capabilities) != null &&
                            (y = y.skills) != null &&
                            y.action_metadata &&
                            (C = r("getJSEnumSafe")(
                              r("ContextualMultiAdsActionMetadataType"),
                              (b = e.capabilities.skills) == null
                                ? void 0
                                : b.action_metadata,
                            )) != null
                              ? C
                              : void 0,
                          enroll_status:
                            e != null &&
                            (v = e.capabilities) != null &&
                            (v = v.skills) != null &&
                            v.enroll_status &&
                            (S = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              (R = e.capabilities.skills) == null
                                ? void 0
                                : R.enroll_status,
                            )) != null
                              ? S
                              : void 0,
                        })
                      : void 0,
                }
              : void 0,
          pills: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            ((L = e == null ? void 0 : e.pills) != null ? L : []).flatMap(
              function (e) {
                var t = e.pill_id;
                return t == null ? [] : [{ pill_id: t }];
              },
            ),
          ),
        };
    }
    function p(e) {
      return e != null ? String(e) : void 0;
    }
    function _(t) {
      var n,
        a,
        l,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe,
        Ne,
        Me,
        we,
        Ae,
        Fe,
        Oe,
        Be,
        We,
        qe,
        Ue,
        Ve,
        He,
        Ge,
        ze,
        je,
        Ke,
        Qe,
        Xe,
        Ye,
        Je,
        Ze,
        et,
        tt,
        nt,
        rt,
        ot,
        at,
        it,
        lt,
        st,
        ut,
        ct,
        dt,
        mt,
        pt,
        _t,
        ft,
        gt,
        ht,
        yt,
        Ct,
        bt,
        vt,
        St,
        Rt,
        Lt,
        Et,
        kt,
        It,
        Tt,
        Dt,
        xt,
        $t,
        Pt,
        Nt,
        Mt,
        wt,
        At,
        Ft,
        Ot,
        Bt,
        Wt,
        qt,
        Ut,
        Vt,
        Ht,
        Gt,
        zt,
        jt,
        Kt,
        Qt,
        Xt,
        Yt,
        Jt,
        Zt,
        en,
        tn,
        nn,
        rn,
        on,
        an,
        ln,
        sn,
        un,
        cn,
        dn,
        mn,
        pn,
        _n,
        fn,
        gn,
        hn,
        yn,
        Cn,
        bn,
        vn,
        Sn,
        Rn,
        Ln,
        En,
        kn,
        In,
        Tn,
        Dn,
        xn,
        $n,
        Pn,
        Nn,
        Mn,
        wn,
        An,
        Fn,
        On,
        Bn,
        Wn,
        qn,
        Un,
        Vn,
        Hn,
        Gn,
        zn,
        jn,
        Kn,
        Qn,
        Xn,
        Yn,
        Jn,
        Zn,
        er,
        tr,
        nr,
        rr,
        or,
        ar,
        ir,
        lr,
        sr,
        ur,
        cr,
        dr,
        mr,
        pr,
        _r,
        fr,
        gr,
        hr,
        yr,
        Cr,
        br,
        vr,
        Sr,
        Rr,
        Lr,
        Er,
        kr,
        Ir,
        Tr,
        Dr,
        xr,
        $r,
        Pr,
        Nr,
        Mr,
        wr,
        Ar,
        Fr,
        Or,
        Br,
        Wr,
        qr,
        Ur,
        Vr,
        Hr,
        Gr,
        zr,
        jr,
        Kr,
        Qr,
        Xr,
        Yr,
        Jr,
        Zr,
        eo,
        to,
        no,
        ro,
        oo,
        ao,
        io,
        lo,
        so,
        uo,
        co,
        mo,
        po,
        _o,
        fo,
        go,
        ho,
        yo,
        Co,
        bo,
        vo,
        So,
        Ro,
        Lo,
        Eo,
        ko,
        Io,
        To,
        Do,
        xo,
        $o,
        Po,
        No,
        Mo,
        wo,
        Ao,
        Fo,
        Oo,
        Bo,
        Wo,
        qo,
        Uo,
        Vo,
        Ho,
        Go,
        zo,
        jo,
        Ko,
        Qo,
        Xo,
        Yo,
        Jo,
        Zo,
        ea,
        ta,
        na,
        ra,
        oa,
        aa,
        ia,
        la,
        sa,
        ua,
        ca,
        da,
        ma,
        pa,
        _a,
        fa,
        ga,
        ha,
        ya,
        Ca,
        ba,
        va,
        Sa,
        Ra,
        La,
        Ea,
        ka,
        Ia,
        Ta,
        Da,
        xa,
        $a,
        Pa,
        Na,
        Ma,
        wa,
        Aa,
        Fa,
        Oa,
        Ba,
        Wa,
        qa,
        Ua,
        Va,
        Ha,
        Ga,
        za,
        ja,
        Ka,
        Qa,
        Xa,
        Ya,
        Ja,
        Za,
        ei,
        ti,
        ni,
        ri,
        oi,
        ai,
        ii,
        li,
        si,
        ui,
        ci,
        di,
        mi,
        pi,
        _i,
        fi,
        gi,
        hi,
        yi,
        Ci,
        bi,
        vi,
        Si =
          (n = t.dynamic_ad_creative_attachment) == null
            ? void 0
            : n.recommender_settings,
        Ri =
          (a = t.dynamic_ad_creative_attachment) == null
            ? void 0
            : a.template_url_spec;
      return (
        Ri == null && (Ri = t.template_url_spec),
        {
          actor_type:
            (l = r("getJSEnumSafe")(r("AdActorTypes"), t.actor_type)) != null
              ? l
              : void 0,
          ad_disclaimer_spec: t.ad_disclaimer_spec
            ? {
                text:
                  (_ = (f = t.ad_disclaimer_spec) == null ? void 0 : f.text) !=
                  null
                    ? _
                    : void 0,
                title: o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("enumUtils").coerceFromKey(
                    o("TypeCoercionUtils").coerceNonMaybeValue(
                      t.ad_disclaimer_spec.title,
                      "ad_disclaimer_spec.title",
                      i.id,
                    ),
                    r("ApiAdCreativeAdDisclaimerTitles"),
                  ),
                  "ad_disclaimer_spec.title",
                  i.id,
                ),
                url:
                  (g = (h = t.ad_disclaimer_spec) == null ? void 0 : h.url) !=
                  null
                    ? g
                    : void 0,
              }
            : void 0,
          app_experience_spec: d(t.app_experience_spec),
          applink_treatment:
            (y = r("getJSEnumSafe")(
              r("AdsApplinkTreatments"),
              t.applink_treatment,
            )) != null
              ? y
              : void 0,
          asset_feed_id: void 0,
          asset_feed_spec:
            (C = t.asset_feed_spec) != null && C.ad_creative_asset_feed_spec
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  (b = t.asset_feed_spec) == null
                    ? void 0
                    : b.ad_creative_asset_feed_spec,
                )
              : void 0,
          authorization_category:
            (v = r("getJSEnumSafe")(
              r("AdCreativeAuthorizationCategory"),
              (S = t.authorization_attachment) == null
                ? void 0
                : S.authorization_category,
            )) != null
              ? v
              : void 0,
          biz_ai: m(t.biz_ai),
          body: (R = t.body_content) != null ? R : void 0,
          branded_content: t.branded_content
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                acting_business_id:
                  (L =
                    (E = t.branded_content) == null
                      ? void 0
                      : E.acting_business_id) != null
                    ? L
                    : void 0,
                ad_format:
                  (k = t.branded_content) != null &&
                  k.ad_format &&
                  (I = o("enumUtils").coerceFromKey(
                    t.branded_content.ad_format,
                    r("IGBrandedContentAdRenderFormat"),
                  )) != null
                    ? I
                    : void 0,
                automated_adgroup_creation:
                  (T =
                    t == null || (D = t.branded_content) == null
                      ? void 0
                      : D.automated_adgroup_creation) != null
                    ? T
                    : void 0,
                content_list:
                  (x = t.branded_content) != null && x.content_list
                    ? {
                        id:
                          ($ = t.branded_content.content_list.id) != null
                            ? $
                            : void 0,
                        import_time:
                          (P = t.branded_content.content_list.import_time) !=
                          null
                            ? P
                            : void 0,
                      }
                    : void 0,
                content_search_input:
                  (N =
                    (M = t.branded_content) == null
                      ? void 0
                      : M.content_search_input) != null
                    ? N
                    : void 0,
                creator_ad_permission_type:
                  (w = r("getJSEnumSafe")(
                    r("CreatorAdsPermissionType"),
                    (A = t.branded_content) == null
                      ? void 0
                      : A.creator_ad_permission_type,
                  )) != null
                    ? w
                    : void 0,
                deliver_dynamic_partner_content:
                  (F =
                    t == null || (O = t.branded_content) == null
                      ? void 0
                      : O.deliver_dynamic_partner_content) != null
                    ? F
                    : void 0,
                facebook_boost_post_access_token:
                  (B =
                    (W = t.branded_content) == null
                      ? void 0
                      : W.facebook_boost_post_access_token) != null
                    ? B
                    : void 0,
                instagram_boost_post_access_token:
                  (q =
                    (U = t.branded_content) == null
                      ? void 0
                      : U.instagram_boost_post_access_token) != null
                    ? q
                    : void 0,
                parent_source_facebook_post_id:
                  (V =
                    (H = t.branded_content) == null
                      ? void 0
                      : H.parent_source_facebook_post_id) != null
                    ? V
                    : void 0,
                parent_source_instagram_media_id:
                  (G =
                    (z = t.branded_content) == null
                      ? void 0
                      : z.parent_source_instagram_media_id) != null
                    ? G
                    : void 0,
                partners: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  (j = t.branded_content) == null
                    ? void 0
                    : j.partners.map(function (e) {
                        var t, n, o, a;
                        return {
                          fb_page_id: (t = e.fb_page_id) != null ? t : void 0,
                          identity_type:
                            (n = r("PartnershipAdsRankingIdentityType").cast(
                              e.identity_type,
                            )) != null
                              ? n
                              : void 0,
                          ig_asset_id: (o = e.ig_asset_id) != null ? o : void 0,
                          ig_user_id: (a = e.ig_user_id) != null ? a : void 0,
                        };
                      }),
                ),
                permission_type: u,
                product_set_partner_selection_status:
                  (K = r("getJSEnumSafe")(
                    r("ProductSetPartnerSelectionStatusEnum"),
                    (Q = t.branded_content) == null
                      ? void 0
                      : Q.product_set_partner_selection_status,
                  )) != null
                    ? K
                    : void 0,
                promoted_page_id:
                  (X = o("TypeCoercionUtils").coerceZeroToUndefined(
                    (Y = t.branded_content) == null
                      ? void 0
                      : Y.promoted_page_id,
                  )) != null
                    ? X
                    : void 0,
                testimonial:
                  (J =
                    (Z = t.branded_content) == null ? void 0 : Z.testimonial) !=
                  null
                    ? J
                    : void 0,
                ui_version:
                  (ee =
                    (te = t.branded_content) == null
                      ? void 0
                      : te.ui_version) != null
                    ? ee
                    : void 0,
              })
            : void 0,
          branded_content_boosting_type:
            (ne = r("getJSEnumSafe")(
              r("BrandedContentBoostingType"),
              t.branded_content_boosting_type,
            )) != null
              ? ne
              : void 0,
          branded_content_sponsor_page_id: t.branded_content_sponsor_page_id,
          call_to_action:
            (re =
              (oe = t.call_to_action) == null
                ? void 0
                : oe.call_to_action_spec) != null
              ? re
              : void 0,
          call_to_action_type:
            (ae = r("getJSEnumSafe")(
              r("CallToActionTypes"),
              t.call_to_action_type,
            )) != null
              ? ae
              : void 0,
          categorization_criteria:
            (ie = t.dynamic_category_ad_attachment) != null &&
            ie.categorization_criteria &&
            (le = o("enumUtils").coerceFromKey(
              (se = t.dynamic_category_ad_attachment) == null
                ? void 0
                : se.categorization_criteria,
              r("DynamicCategorizationCriteria"),
            )) != null
              ? le
              : void 0,
          category_media_source:
            (ue = r("getJSEnumSafe")(
              r("DynamicCategoryAdMediaSource"),
              (ce = t.dynamic_category_ad_attachment) == null
                ? void 0
                : ce.category_media_source,
            )) != null
              ? ue
              : void 0,
          collaborative_ads_lsb_image_bank_id: void 0,
          contextual_multi_ads: t.contextual_multi_ads
            ? {
                action_metadata:
                  (de = t.contextual_multi_ads) != null &&
                  (de = de.action_metadata) != null &&
                  de.type
                    ? {
                        type: o("TypeCoercionUtils").coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("ContextualMultiAdsActionMetadataType"),
                            t.contextual_multi_ads.action_metadata.type,
                          ),
                          "contextual_multi_ads.action_metadata.type",
                          i.id,
                        ),
                      }
                    : void 0,
                eligibility:
                  (me = t.contextual_multi_ads) != null &&
                  me.eligibility &&
                  (pe = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    t.contextual_multi_ads.eligibility,
                  )) != null
                    ? pe
                    : void 0,
                enroll_status:
                  (_e =
                    (fe = t.contextual_multi_ads) == null
                      ? void 0
                      : fe.enroll_status) != null
                    ? _e
                    : void 0,
              }
            : void 0,
          creative_id: void 0,
          creative_optional: void 0,
          creative_sourcing_spec: t.creative_sourcing_spec
            ? o(
                "TypeCoercionUtils",
              ).coerceObjectWithNullAndEmptyArraysToUndefined({
                ad_extensions_relevancy_spec:
                  (ge = t.creative_sourcing_spec) != null &&
                  ge.ad_extensions_relevancy_spec
                    ? {
                        ai_relevancy_ent_id:
                          (he = t.creative_sourcing_spec) == null ||
                          (he = he.ad_extensions_relevancy_spec) == null
                            ? void 0
                            : he.ai_relevancy_ent_id,
                        extension_specs:
                          (ye = t.creative_sourcing_spec) == null ||
                          (ye = ye.ad_extensions_relevancy_spec) == null ||
                          (ye = ye.extension_specs) == null
                            ? void 0
                            : ye.map(function (e) {
                                return {
                                  extension_type: e.extension_type,
                                  selected_strategy_id: e.selected_strategy_id,
                                  virtual_pset_id: e.virtual_pset_id,
                                };
                              }),
                      }
                    : void 0,
                app_info_spec: (function (
                  e,
                  n,
                  a,
                  l,
                  s,
                  u,
                  c,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g,
                  h,
                  y,
                  C,
                  b,
                  v,
                  S,
                  R,
                  L,
                  E,
                  k,
                  I,
                  T,
                ) {
                  var D =
                    (e = t.creative_sourcing_spec) == null
                      ? void 0
                      : e.app_info_spec;
                  if (D) {
                    var x = D.ratings_and_reviews;
                    return {
                      action_metadata:
                        (n = D.action_metadata) != null && n.type
                          ? {
                              type: o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceActionType"),
                                  D.action_metadata.type,
                                ),
                                "creative_sourcing_spec.app_info_spec.action_metadata.type",
                                i.id,
                              ),
                            }
                          : void 0,
                      app_information: D.app_information
                        ? {
                            action_metadata:
                              (a = D.app_information) != null &&
                              (a = a.action_metadata) != null &&
                              a.type
                                ? {
                                    type: o(
                                      "TypeCoercionUtils",
                                    ).coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceActionType"),
                                        D.app_information.action_metadata.type,
                                      ),
                                      "creative_sourcing_spec.app_info_spec.action_metadata.type",
                                      i.id,
                                    ),
                                  }
                                : void 0,
                            app_author:
                              (l =
                                (s = D.app_information) == null
                                  ? void 0
                                  : s.app_author) != null
                                ? l
                                : void 0,
                            app_category:
                              (u =
                                (c = D.app_information) == null
                                  ? void 0
                                  : c.app_category) != null
                                ? u
                                : void 0,
                            app_description:
                              (d =
                                (m = D.app_information) == null
                                  ? void 0
                                  : m.app_description) != null
                                ? d
                                : void 0,
                            app_name:
                              (p =
                                (_ = D.app_information) == null
                                  ? void 0
                                  : _.app_name) != null
                                ? p
                                : void 0,
                            app_price:
                              (f =
                                (g = D.app_information) == null
                                  ? void 0
                                  : g.app_price) != null
                                ? f
                                : void 0,
                            app_subtitle:
                              (h =
                                (y = D.app_information) == null
                                  ? void 0
                                  : y.app_subtitle) != null
                                ? h
                                : void 0,
                            enroll_status:
                              (C = D.app_information) != null && C.enroll_status
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    r("getJSEnumSafe")(
                                      r("AdCreativeSourceEnrollStatus"),
                                      D.app_information.enroll_status,
                                    ),
                                    "creative_sourcing_spec.app_info_spec.app_information.enroll_status",
                                    i.id,
                                  )
                                : void 0,
                          }
                        : void 0,
                      application_id: void 0,
                      enroll_status: D.enroll_status
                        ? o("TypeCoercionUtils").coerceNonMaybeValue(
                            r("getJSEnumSafe")(
                              r("AdCreativeSourceEnrollStatus"),
                              D.enroll_status,
                            ),
                            "creative_sourcing_spec.app_info_spec.enroll_status",
                            i.id,
                          )
                        : void 0,
                      media: D.media
                        ? {
                            action_metadata:
                              (b = D.media) != null &&
                              (b = b.action_metadata) != null &&
                              b.type
                                ? {
                                    type: o(
                                      "TypeCoercionUtils",
                                    ).coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceActionType"),
                                        D.media.action_metadata.type,
                                      ),
                                      "creative_sourcing_spec.app_info_spec.media.action_metadata.type",
                                      i.id,
                                    ),
                                  }
                                : void 0,
                            enroll_status:
                              (v = D.media) != null && v.enroll_status
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    r("getJSEnumSafe")(
                                      r("AdCreativeSourceEnrollStatus"),
                                      D.media.enroll_status,
                                    ),
                                    "creative_sourcing_spec.app_info_spec.media.enroll_status",
                                    i.id,
                                  )
                                : void 0,
                            icon_image_url:
                              (S =
                                (R = D.media) == null
                                  ? void 0
                                  : R.icon_image_url) != null
                                ? S
                                : void 0,
                            screenshot_urls: o(
                              "TypeCoercionUtils",
                            ).coerceEmptyArrayToUndefined(
                              (L =
                                (E = D.media) == null
                                  ? void 0
                                  : E.screenshot_urls) != null
                                ? L
                                : [],
                            ),
                          }
                        : void 0,
                      object_store_url: void 0,
                      ratings_and_reviews: x
                        ? {
                            action_metadata:
                              (k = x.action_metadata) != null && k.type
                                ? {
                                    type: o(
                                      "TypeCoercionUtils",
                                    ).coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceActionType"),
                                        x.action_metadata.type,
                                      ),
                                      "creative_sourcing_spec.app_info_spec.ratings_and_reviews.action_metadata.type",
                                      i.id,
                                    ),
                                  }
                                : void 0,
                            enroll_status: x.enroll_status
                              ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceEnrollStatus"),
                                    x.enroll_status,
                                  ),
                                  "creative_sourcing_spec.app_info_spec.ratings_and_reviews.enroll_status",
                                  i.id,
                                )
                              : void 0,
                            ratings: (I = x.ratings) != null ? I : void 0,
                            star_reviews:
                              (T = x.star_reviews) != null ? T : void 0,
                            summary_rating: Array.isArray(x.summary_rating)
                              ? [].concat(x.summary_rating)
                              : void 0,
                            top_reviews: x.top_reviews
                              ? o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  x.top_reviews.map(function (e) {
                                    var t, n, r;
                                    return {
                                      is_checked:
                                        (t = e.is_checked) != null ? t : void 0,
                                      is_featured:
                                        (n = e.is_featured) != null
                                          ? n
                                          : void 0,
                                      review_text:
                                        (r = e.review_text) != null ? r : "",
                                    };
                                  }),
                                )
                              : [],
                          }
                        : void 0,
                    };
                  }
                })(),
                associated_product_set_id:
                  (Ce =
                    (be = t.creative_sourcing_spec) == null
                      ? void 0
                      : be.associated_product_set_id) != null
                    ? Ce
                    : void 0,
                brand:
                  (ve = t.creative_sourcing_spec) != null && ve.brand
                    ? {
                        action_metadata:
                          (Se = t.creative_sourcing_spec) != null &&
                          (Se = Se.brand) != null &&
                          (Se = Se.action_metadata) != null &&
                          Se.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec.brand
                                      .action_metadata.type,
                                  ),
                                  "creative_sourcing_spec.brand.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (Re = t.creative_sourcing_spec) != null &&
                          (Re = Re.brand) != null &&
                          Re.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.brand.enroll_status,
                                ),
                                "creative_sourcing_spec.brand.enroll_status",
                                i.id,
                              )
                            : void 0,
                        preset_id:
                          (Le = t.creative_sourcing_spec) == null ||
                          (Le = Le.brand) == null
                            ? void 0
                            : Le.preset_id,
                      }
                    : void 0,
                catalog:
                  (Ee = t.creative_sourcing_spec) != null && Ee.catalog
                    ? {
                        action_metadata:
                          (ke = t.creative_sourcing_spec) != null &&
                          (ke = ke.catalog) != null &&
                          (ke = ke.action_metadata) != null &&
                          ke.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec.catalog
                                      .action_metadata.type,
                                  ),
                                  "creative_sourcing_spec.catalog.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (Ie = t.creative_sourcing_spec) != null &&
                          (Ie = Ie.catalog) != null &&
                          Ie.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.catalog
                                    .enroll_status,
                                ),
                                "creative_sourcing_spec.catalog.enroll_status",
                                i.id,
                              )
                            : void 0,
                        selection_enhancement_tag_source:
                          (Te = t.creative_sourcing_spec) != null &&
                          (Te = Te.catalog) != null &&
                          Te.selection_enhancement_tag_source
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceCatalogTagSource"),
                                  t.creative_sourcing_spec.catalog
                                    .selection_enhancement_tag_source,
                                ),
                                "creative_sourcing_spec.catalog.selection_enhancement_tag_source",
                                i.id,
                              )
                            : void 0,
                      }
                    : void 0,
                destination_screenshot_spec:
                  (De = t.creative_sourcing_spec) != null &&
                  De.destination_screenshot_spec
                    ? {
                        enroll_status:
                          (xe = t.creative_sourcing_spec) != null &&
                          (xe = xe.destination_screenshot_spec) != null &&
                          xe.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec
                                    .destination_screenshot_spec.enroll_status,
                                ),
                                "creative_sourcing_spec.destination_screenshot_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        screenshot_image_hash:
                          ($e =
                            (Pe = t.creative_sourcing_spec) == null ||
                            (Pe = Pe.destination_screenshot_spec) == null
                              ? void 0
                              : Pe.screenshot_image_hash) != null
                            ? $e
                            : void 0,
                      }
                    : void 0,
                dynamic_site_links_spec:
                  (Ne = t.creative_sourcing_spec) != null &&
                  Ne.dynamic_site_links_spec
                    ? {
                        action_metadata:
                          (Me = t.creative_sourcing_spec) != null &&
                          (Me = Me.dynamic_site_links_spec) != null &&
                          (Me = Me.action_metadata) != null &&
                          Me.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec
                                      .dynamic_site_links_spec.action_metadata
                                      .type,
                                  ),
                                  "creative_sourcing_spec.dynamic_site_links_spec.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (we = t.creative_sourcing_spec) != null &&
                          (we = we.dynamic_site_links_spec) != null &&
                          we.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec
                                    .dynamic_site_links_spec.enroll_status,
                                ),
                                "creative_sourcing_spec.dynamic_site_links_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                      }
                    : void 0,
                enable_social_feedback_preservation:
                  (Ae =
                    (Fe = t.creative_sourcing_spec) == null
                      ? void 0
                      : Fe.enable_social_feedback_preservation) != null
                    ? Ae
                    : void 0,
                featured_offering_spec:
                  (Oe = t.creative_sourcing_spec) != null &&
                  Oe.featured_offering_spec
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        action_metadata:
                          (Be = t.creative_sourcing_spec) != null &&
                          (Be = Be.featured_offering_spec) != null &&
                          Be.action_metadata
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                type:
                                  (We = t.creative_sourcing_spec) != null &&
                                  (We = We.featured_offering_spec) != null &&
                                  (We = We.action_metadata) != null &&
                                  We.type
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeSourceActionType"),
                                          (qe = t.creative_sourcing_spec) ==
                                            null ||
                                            (qe = qe.featured_offering_spec) ==
                                              null ||
                                            (qe = qe.action_metadata) == null
                                            ? void 0
                                            : qe.type,
                                        ),
                                        "creative_sourcing_spec.featured_offering_spec.action_metadata.type",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                        adex_had_data:
                          (Ue =
                            (Ve = t.creative_sourcing_spec) == null ||
                            (Ve = Ve.featured_offering_spec) == null
                              ? void 0
                              : Ve.adex_had_data) != null
                            ? Ue
                            : void 0,
                        adex_had_impression:
                          (He =
                            (Ge = t.creative_sourcing_spec) == null ||
                            (Ge = Ge.featured_offering_spec) == null
                              ? void 0
                              : Ge.adex_had_impression) != null
                            ? He
                            : void 0,
                        default_status:
                          (ze = t.creative_sourcing_spec) != null &&
                          (ze = ze.featured_offering_spec) != null &&
                          ze.default_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  (je = t.creative_sourcing_spec) == null ||
                                    (je = je.featured_offering_spec) == null
                                    ? void 0
                                    : je.default_status,
                                ),
                                "creative_sourcing_spec.featured_offering_spec.default_status",
                                i.id,
                              )
                            : void 0,
                        enroll_status:
                          (Ke = t.creative_sourcing_spec) != null &&
                          (Ke = Ke.featured_offering_spec) != null &&
                          Ke.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  (Qe = t.creative_sourcing_spec) == null ||
                                    (Qe = Qe.featured_offering_spec) == null
                                    ? void 0
                                    : Qe.enroll_status,
                                ),
                                "creative_sourcing_spec.featured_offering_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        media:
                          (Xe = t.creative_sourcing_spec) != null &&
                          (Xe = Xe.featured_offering_spec) != null &&
                          Xe.media
                            ? t.creative_sourcing_spec.featured_offering_spec.media.map(
                                function (e) {
                                  var t, n, r, o, a;
                                  return {
                                    description:
                                      (t =
                                        e == null ? void 0 : e.description) !=
                                      null
                                        ? t
                                        : void 0,
                                    image_hash:
                                      (n = e == null ? void 0 : e.image_hash) !=
                                      null
                                        ? n
                                        : void 0,
                                    image_url:
                                      (r = e == null ? void 0 : e.image_url) !=
                                      null
                                        ? r
                                        : void 0,
                                    title:
                                      (o = e == null ? void 0 : e.title) != null
                                        ? o
                                        : void 0,
                                    url:
                                      (a = e == null ? void 0 : e.url) != null
                                        ? a
                                        : void 0,
                                  };
                                },
                              )
                            : void 0,
                      })
                    : void 0,
                ncs_testimonial:
                  (Ye = t.creative_sourcing_spec) != null && Ye.ncs_testimonial
                    ? {
                        auto_linked_with_campaign_group_id:
                          (Je =
                            (Ze = t.creative_sourcing_spec) == null ||
                            (Ze = Ze.ncs_testimonial) == null
                              ? void 0
                              : Ze.auto_linked_with_campaign_group_id) != null
                            ? Je
                            : void 0,
                        brief_id:
                          (et =
                            (tt = t.creative_sourcing_spec) == null ||
                            (tt = tt.ncs_testimonial) == null
                              ? void 0
                              : tt.brief_id) != null
                            ? et
                            : void 0,
                      }
                    : void 0,
                pca_spec:
                  ((nt = t.creative_sourcing_spec) == null ||
                  (nt = nt.pca_spec) == null
                    ? void 0
                    : nt.pca_use_case) != null
                    ? {
                        pca_use_case:
                          typeof t.creative_sourcing_spec.pca_spec
                            .pca_use_case == "number"
                            ? t.creative_sourcing_spec.pca_spec.pca_use_case
                            : o("TypeCoercionUtils").coerceNonMaybeValue(
                                o("enumUtils").coerceFromKey(
                                  t.creative_sourcing_spec.pca_spec
                                    .pca_use_case,
                                  r("PCAFormatType"),
                                ),
                                "creative_sourcing_spec.pca_spec.pca_use_case",
                                i.id,
                              ),
                      }
                    : void 0,
                product_media_metadata_spec:
                  (rt = t.creative_sourcing_spec) != null &&
                  rt.product_media_metadata_spec
                    ? {
                        description:
                          (ot =
                            (at = t.creative_sourcing_spec) == null ||
                            (at = at.product_media_metadata_spec) == null
                              ? void 0
                              : at.description) != null
                            ? ot
                            : void 0,
                        format_option:
                          (it =
                            (lt = t.creative_sourcing_spec) == null ||
                            (lt = lt.product_media_metadata_spec) == null
                              ? void 0
                              : lt.format_option) != null
                            ? it
                            : void 0,
                        headline:
                          (st =
                            (ut = t.creative_sourcing_spec) == null ||
                            (ut = ut.product_media_metadata_spec) == null
                              ? void 0
                              : ut.headline) != null
                            ? st
                            : void 0,
                        image_layer_specs: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (ct = t.creative_sourcing_spec) == null ||
                            (ct = ct.product_media_metadata_spec) == null ||
                            (ct = ct.image_layer_specs) == null
                            ? void 0
                            : ct.map(function (e) {
                                var t,
                                  n,
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
                                  f,
                                  g,
                                  h,
                                  y,
                                  C,
                                  b,
                                  v,
                                  S,
                                  R,
                                  L,
                                  E,
                                  k,
                                  I;
                                return {
                                  blending_mode:
                                    (t = r("getJSEnumSafe")(
                                      r(
                                        "DynamicImageLayerFrameOverlayBlendingModes",
                                      ),
                                      e == null ? void 0 : e.blending_mode,
                                    )) != null
                                      ? t
                                      : void 0,
                                  content:
                                    (e == null ? void 0 : e.content) != null
                                      ? {
                                          auto_show_enroll_status:
                                            (n =
                                              e == null ||
                                              (a = e.content) == null
                                                ? void 0
                                                : a.auto_show_enroll_status) !=
                                            null
                                              ? n
                                              : void 0,
                                          high_price:
                                            (i =
                                              e == null ||
                                              (l = e.content) == null
                                                ? void 0
                                                : l.high_price) != null
                                              ? i
                                              : void 0,
                                          low_price:
                                            (s =
                                              e == null ||
                                              (u = e.content) == null
                                                ? void 0
                                                : u.low_price) != null
                                              ? s
                                              : void 0,
                                          price:
                                            (c =
                                              e == null ||
                                              (d = e.content) == null
                                                ? void 0
                                                : d.price) != null
                                              ? c
                                              : void 0,
                                          type:
                                            (m = r("getJSEnumSafe")(
                                              r(
                                                "DynamicImageLayerTextOverlayContentTypes",
                                              ),
                                              e == null ||
                                                (p = e.content) == null
                                                ? void 0
                                                : p.type,
                                            )) != null
                                              ? m
                                              : void 0,
                                        }
                                      : void 0,
                                  crop_image:
                                    (_ = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.crop_image,
                                      r("DynamicImageLayerCroppingOptions"),
                                    )) != null
                                      ? _
                                      : void 0,
                                  frame_auto_show_enroll_status:
                                    (f =
                                      e == null
                                        ? void 0
                                        : e.frame_auto_show_enroll_status) !=
                                    null
                                      ? f
                                      : void 0,
                                  frame_image_hash:
                                    (g =
                                      e == null
                                        ? void 0
                                        : e.frame_image_hash) != null
                                      ? g
                                      : void 0,
                                  frame_source:
                                    (h = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.frame_source,
                                      r("DynamicImageLayerFrameSources"),
                                    )) != null
                                      ? h
                                      : void 0,
                                  image_source:
                                    (y = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.image_source,
                                      r("DynamicImageLayerImageSources"),
                                    )) != null
                                      ? y
                                      : void 0,
                                  layer_type:
                                    (C = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.layer_type,
                                      r("DynamicImageLayerTypes"),
                                    )) != null
                                      ? C
                                      : void 0,
                                  opacity:
                                    (b = e == null ? void 0 : e.opacity) != null
                                      ? b
                                      : void 0,
                                  overlay_position:
                                    (v = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.overlay_position,
                                      r("DynamicImageLayerOverlayPositions"),
                                    )) != null
                                      ? v
                                      : void 0,
                                  overlay_shape:
                                    (S = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.overlay_shape,
                                      r("DynamicImageLayerTextOverlayShapes"),
                                    )) != null
                                      ? S
                                      : void 0,
                                  pad_image:
                                    (R = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.pad_image,
                                      r("DynamicImageLayerPaddingOptions"),
                                    )) != null
                                      ? R
                                      : void 0,
                                  scale:
                                    (L = e == null ? void 0 : e.scale) != null
                                      ? L
                                      : void 0,
                                  shape_color:
                                    (E = e == null ? void 0 : e.shape_color) !=
                                    null
                                      ? E
                                      : void 0,
                                  text_color:
                                    (k = e == null ? void 0 : e.text_color) !=
                                    null
                                      ? k
                                      : void 0,
                                  text_font:
                                    (I = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.text_font,
                                      r("DynamicImageLayerTextFonts"),
                                    )) != null
                                      ? I
                                      : void 0,
                                };
                              }),
                        ),
                        image_template_id:
                          (dt =
                            (mt = t.creative_sourcing_spec) == null ||
                            (mt = mt.product_media_metadata_spec) == null
                              ? void 0
                              : mt.image_template_id) != null
                            ? dt
                            : void 0,
                        message:
                          (pt =
                            (_t = t.creative_sourcing_spec) == null ||
                            (_t = _t.product_media_metadata_spec) == null
                              ? void 0
                              : _t.message) != null
                            ? pt
                            : void 0,
                        multi_share_end_card:
                          (ft =
                            (gt = t.creative_sourcing_spec) == null ||
                            (gt = gt.product_media_metadata_spec) == null
                              ? void 0
                              : gt.multi_share_end_card) != null
                            ? ft
                            : void 0,
                        pinned_product_ids:
                          (ht =
                            (yt = t.creative_sourcing_spec) == null ||
                            (yt = yt.product_media_metadata_spec) == null
                              ? void 0
                              : yt.pinned_product_ids) != null
                            ? ht
                            : void 0,
                        prioritize_video:
                          (Ct =
                            (bt = t.creative_sourcing_spec) == null ||
                            (bt = bt.product_media_metadata_spec) == null
                              ? void 0
                              : bt.prioritize_video) != null
                            ? Ct
                            : void 0,
                      }
                    : void 0,
                promotion_metadata_spec: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (vt = t.creative_sourcing_spec) != null &&
                    vt.promotion_metadata_spec
                    ? t.creative_sourcing_spec.promotion_metadata_spec.map(
                        function (e) {
                          return {
                            end_date: e.end_date,
                            id: e.id,
                            promotion_source: e.promotion_source,
                            promotion_type: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.promotion_type,
                              "creative_sourcing_spec.promotion_metadata_spec[].promotion_type",
                              i.id,
                            ),
                            promotion_value: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.promotion_value,
                              "creative_sourcing_spec.promotion_metadata_spec[].promotion_value",
                              i.id,
                            ),
                            required_code: e.required_code,
                            start_date: e.start_date,
                          };
                        },
                      )
                    : [],
                ),
                site_links_data_consented:
                  (St = t.creative_sourcing_spec) != null &&
                  St.site_links_data_consented
                    ? babelHelpers.extends(
                        {
                          action_metadata:
                            (Rt = t.creative_sourcing_spec) != null &&
                            (Rt = Rt.site_links_data_consented) != null &&
                            (Rt = Rt.action_metadata) != null &&
                            Rt.type
                              ? {
                                  type: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    r("getJSEnumSafe")(
                                      r("AdCreativeSourceActionType"),
                                      t.creative_sourcing_spec
                                        .site_links_data_consented
                                        .action_metadata.type,
                                    ),
                                    "creative_sourcing_spec.site_links_data_consented.action_metadata.type",
                                    i.id,
                                  ),
                                }
                              : void 0,
                          enroll_status:
                            (Lt = t.creative_sourcing_spec) != null &&
                            (Lt = Lt.site_links_data_consented) != null &&
                            Lt.enroll_status
                              ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceEnrollStatus"),
                                    t.creative_sourcing_spec
                                      .site_links_data_consented.enroll_status,
                                  ),
                                  "creative_sourcing_spec.site_links_data_consented.enroll_status",
                                  i.id,
                                )
                              : void 0,
                        },
                        o(
                          "AdsSEConsentScopeRolloutUtils",
                        ).isInSEConsentScopeRollout() &&
                          (Et = t.creative_sourcing_spec) != null &&
                          (Et = Et.site_links_data_consented) != null &&
                          Et.scope
                          ? {
                              scope: r("getJSEnumSafe")(
                                r("AdCreativeSEConsentScope"),
                                t.creative_sourcing_spec
                                  .site_links_data_consented.scope,
                              ),
                            }
                          : {},
                      )
                    : void 0,
                site_links_spec: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (kt = t.creative_sourcing_spec) != null && kt.site_links_spec
                    ? t.creative_sourcing_spec.site_links_spec.map(
                        function (e) {
                          return {
                            is_site_link_sticky: e.is_site_link_sticky,
                            site_link_extra_metadata:
                              e.site_link_extra_metadata,
                            site_link_hash: e.site_link_hash,
                            site_link_id: e.site_link_id,
                            site_link_image_hash: e.site_link_image_hash,
                            site_link_image_url: e.site_link_image_url,
                            site_link_language: e.site_link_language,
                            site_link_onsite_destination_id:
                              e.site_link_onsite_destination_id,
                            site_link_onsite_destination_type:
                              e.site_link_onsite_destination_type,
                            site_link_recommendation_type:
                              e.site_link_recommendation_type,
                            site_link_title: e.site_link_title,
                            site_link_url: e.site_link_url,
                            site_link_url_anchor: e.site_link_url_anchor,
                          };
                        },
                      )
                    : [],
                ),
                source_url:
                  (It =
                    (Tt = t.creative_sourcing_spec) == null
                      ? void 0
                      : Tt.source_url) != null
                    ? It
                    : void 0,
                website_media_spec:
                  (Dt = t.creative_sourcing_spec) != null &&
                  Dt.website_media_spec
                    ? {
                        action_metadata:
                          (xt = t.creative_sourcing_spec) != null &&
                          (xt = xt.website_media_spec) != null &&
                          (xt = xt.action_metadata) != null &&
                          xt.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec.website_media_spec
                                      .action_metadata.type,
                                  ),
                                  "creative_sourcing_spec.website_media_spec.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        adex_had_data:
                          ($t =
                            (Pt = t.creative_sourcing_spec) == null ||
                            (Pt = Pt.website_media_spec) == null
                              ? void 0
                              : Pt.adex_had_data) != null
                            ? $t
                            : void 0,
                        adex_had_impression:
                          (Nt =
                            (Mt = t.creative_sourcing_spec) == null ||
                            (Mt = Mt.website_media_spec) == null
                              ? void 0
                              : Mt.adex_had_impression) != null
                            ? Nt
                            : void 0,
                        enroll_status:
                          (wt = t.creative_sourcing_spec) != null &&
                          (wt = wt.website_media_spec) != null &&
                          wt.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.website_media_spec
                                    .enroll_status,
                                ),
                                "creative_sourcing_spec.website_media_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        image_clusters: void 0,
                        media: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (At = t.creative_sourcing_spec) != null &&
                            (At = At.website_media_spec) != null &&
                            At.media
                            ? t.creative_sourcing_spec.website_media_spec.media.map(
                                function (e) {
                                  var t,
                                    n,
                                    r,
                                    o,
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
                                    f,
                                    g,
                                    h,
                                    y,
                                    C,
                                    b,
                                    v,
                                    S,
                                    R,
                                    L,
                                    E,
                                    k,
                                    I,
                                    T,
                                    D,
                                    x,
                                    $,
                                    P,
                                    N,
                                    M;
                                  return {
                                    aesthetic_relevance:
                                      (t = e.aesthetic_relevance) != null
                                        ? t
                                        : void 0,
                                    background_cleanliness:
                                      (n = e.background_cleanliness) != null
                                        ? n
                                        : void 0,
                                    background_color:
                                      (r = e.background_color) != null
                                        ? r
                                        : void 0,
                                    description:
                                      (o = e.description) != null ? o : void 0,
                                    human_face_detection:
                                      (a = e.human_face_detection) != null
                                        ? a
                                        : void 0,
                                    image_asset_fbid:
                                      (i = e.image_asset_fbid) != null
                                        ? i
                                        : void 0,
                                    image_blurry:
                                      (l = e.image_blurry) != null ? l : void 0,
                                    image_hash:
                                      (s = e.image_hash) != null ? s : void 0,
                                    image_height:
                                      (u = e.image_height) != null ? u : void 0,
                                    image_sources:
                                      (c = e.image_sources) != null
                                        ? c
                                        : void 0,
                                    image_url:
                                      (d = e.image_url) != null ? d : void 0,
                                    image_width:
                                      (m = e.image_width) != null ? m : void 0,
                                    is_duplicate:
                                      (p = e.is_duplicate) != null ? p : void 0,
                                    is_guardrail_pass:
                                      (_ = e.is_guardrail_pass) != null
                                        ? _
                                        : void 0,
                                    is_human_and_product:
                                      (f = e.is_human_and_product) != null
                                        ? f
                                        : void 0,
                                    is_human_and_service:
                                      (g = e.is_human_and_service) != null
                                        ? g
                                        : void 0,
                                    is_icon:
                                      (h = e.is_icon) != null ? h : void 0,
                                    is_illustration:
                                      (y = e.is_illustration) != null
                                        ? y
                                        : void 0,
                                    is_immersive_product:
                                      (C = e.is_immersive_product) != null
                                        ? C
                                        : void 0,
                                    is_landscape:
                                      (b = e.is_landscape) != null ? b : void 0,
                                    is_logo:
                                      (v = e.is_logo) != null ? v : void 0,
                                    is_og_image:
                                      (S = e.is_og_image) != null ? S : void 0,
                                    is_photo_collage:
                                      (R = e.is_photo_collage) != null
                                        ? R
                                        : void 0,
                                    is_poster:
                                      (L = e.is_poster) != null ? L : void 0,
                                    is_text_wall:
                                      (E = e.is_text_wall) != null ? E : void 0,
                                    logo_icon_detection:
                                      (k = e.logo_icon_detection) != null
                                        ? k
                                        : void 0,
                                    message_relevance:
                                      (I = e.message_relevance) != null
                                        ? I
                                        : void 0,
                                    overall_relevance:
                                      (T = e.overall_relevance) != null
                                        ? T
                                        : void 0,
                                    product_focus:
                                      (D = e.product_focus) != null
                                        ? D
                                        : void 0,
                                    product_relevance:
                                      (x = e.product_relevance) != null
                                        ? x
                                        : void 0,
                                    similarity_score:
                                      ($ = e.similarity_score) != null
                                        ? $
                                        : void 0,
                                    text: (P = e.text) != null ? P : void 0,
                                    text_heavy:
                                      (N = e.text_heavy) != null ? N : void 0,
                                    user_sentiment:
                                      (M = e.user_sentiment) != null
                                        ? M
                                        : void 0,
                                  };
                                },
                              )
                            : [],
                        ),
                      }
                    : void 0,
                website_summary_spec:
                  (Ft = t.creative_sourcing_spec) != null &&
                  Ft.website_summary_spec
                    ? {
                        action_metadata:
                          (Ot = t.creative_sourcing_spec) != null &&
                          (Ot = Ot.website_summary_spec) != null &&
                          (Ot = Ot.action_metadata) != null &&
                          Ot.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec
                                      .website_summary_spec.action_metadata
                                      .type,
                                  ),
                                  "creative_sourcing_spec.website_summary_spec.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (Bt = t.creative_sourcing_spec) != null &&
                          (Bt = Bt.website_summary_spec) != null &&
                          Bt.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.website_summary_spec
                                    .enroll_status,
                                ),
                                "creative_sourcing_spec.website_summary_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        is_selling_points_available:
                          (Wt =
                            (qt = t.creative_sourcing_spec) == null ||
                            (qt = qt.website_summary_spec) == null
                              ? void 0
                              : qt.is_selling_points_available) != null
                            ? Wt
                            : void 0,
                        is_summary_text_available:
                          (Ut =
                            (Vt = t.creative_sourcing_spec) == null ||
                            (Vt = Vt.website_summary_spec) == null
                              ? void 0
                              : Vt.is_summary_text_available) != null
                            ? Ut
                            : void 0,
                        mgenai_website_entity_id:
                          (Ht =
                            (Gt = t.creative_sourcing_spec) == null ||
                            (Gt = Gt.website_summary_spec) == null
                              ? void 0
                              : Gt.mgenai_website_entity_id) != null
                            ? Ht
                            : void 0,
                        page_text_signals_asset_id:
                          (zt =
                            (jt = t.creative_sourcing_spec) == null ||
                            (jt = jt.website_summary_spec) == null
                              ? void 0
                              : jt.page_text_signals_asset_id) != null
                            ? zt
                            : void 0,
                        selling_points:
                          (Kt = t.creative_sourcing_spec) != null &&
                          (Kt = Kt.website_summary_spec) != null &&
                          Kt.selling_points
                            ? o(
                                "TypeCoercionUtils",
                              ).coerceEmptyArrayToUndefined(
                                (Qt = t.creative_sourcing_spec) == null ||
                                  (Qt = Qt.website_summary_spec) == null
                                  ? void 0
                                  : Qt.selling_points.map(function (e) {
                                      var t, n, r, o, a;
                                      return {
                                        anchor_text:
                                          (t =
                                            e == null
                                              ? void 0
                                              : e.anchor_text) != null
                                            ? t
                                            : void 0,
                                        category:
                                          (n =
                                            e == null ? void 0 : e.category) !=
                                          null
                                            ? n
                                            : void 0,
                                        is_verbatim:
                                          (r =
                                            e == null
                                              ? void 0
                                              : e.is_verbatim) != null
                                            ? r
                                            : void 0,
                                        text:
                                          (o = e == null ? void 0 : e.text) !=
                                          null
                                            ? o
                                            : "",
                                        text_format:
                                          (a =
                                            e == null
                                              ? void 0
                                              : e.text_format) != null
                                            ? a
                                            : void 0,
                                      };
                                    }),
                              )
                            : [],
                        subfeatures: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (Xt = t.creative_sourcing_spec) != null &&
                            (Xt = Xt.website_summary_spec) != null &&
                            Xt.subfeatures
                            ? t.creative_sourcing_spec.website_summary_spec.subfeatures.map(
                                function (e) {
                                  var t, n;
                                  return {
                                    action_metadata:
                                      (t = e.action_metadata) != null && t.type
                                        ? {
                                            type: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              r("getJSEnumSafe")(
                                                r("AdCreativeSourceActionType"),
                                                (n = e.action_metadata) == null
                                                  ? void 0
                                                  : n.type,
                                              ),
                                              "creative_sourcing_spec.website_summary_spec.subfeatures[].action_metadata.type",
                                              i.id,
                                            ),
                                          }
                                        : void 0,
                                    enroll_status: e.enroll_status
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          r("getJSEnumSafe")(
                                            r("AdCreativeSourceEnrollStatus"),
                                            e.enroll_status,
                                          ),
                                          "creative_sourcing_spec.website_summary_spec.subfeatures[].enroll_status",
                                          i.id,
                                        )
                                      : void 0,
                                    feature_name: e.feature_name
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          r("getJSEnumSafe")(
                                            r("CreativeMetadataSubfeature"),
                                            e.feature_name,
                                          ),
                                          "creative_sourcing_spec.website_summary_spec.subfeatures[].feature_name",
                                          i.id,
                                        )
                                      : void 0,
                                  };
                                },
                              )
                            : [],
                        ),
                        summary_text:
                          (Yt =
                            (Jt = t.creative_sourcing_spec) == null ||
                            (Jt = Jt.website_summary_spec) == null
                              ? void 0
                              : Jt.summary_text) != null
                            ? Yt
                            : void 0,
                      }
                    : void 0,
              })
            : void 0,
          degrees_of_freedom_spec:
            (Zt = t.degrees_of_freedom_spec) != null &&
            Zt.ads_degrees_of_freedom_spec
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  (en = t.degrees_of_freedom_spec) == null
                    ? void 0
                    : en.ads_degrees_of_freedom_spec,
                )
              : void 0,
          destination_spec: t.destination_spec
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                destination_type:
                  (tn = t.destination_spec) != null && tn.destination_type
                    ? o("TypeCoercionUtils").coerceNonMaybeValue(
                        r("getJSEnumSafe")(
                          r("AdCreativeDestinationType"),
                          (nn = t.destination_spec) == null
                            ? void 0
                            : nn.destination_type,
                        ),
                        "destination_spec.destination_type",
                        i.id,
                      )
                    : void 0,
                guidance_metadata:
                  (rn = t.destination_spec) != null && rn.guidance_metadata
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        guidances_applied:
                          (on = t.destination_spec.guidance_metadata) != null &&
                          on.guidances_applied
                            ? o(
                                "TypeCoercionUtils",
                              ).coerceEmptyArrayToUndefined(
                                t.destination_spec.guidance_metadata.guidances_applied.map(
                                  function (e) {
                                    return r("getJSEnumSafe")(
                                      r(
                                        "AdCreativeDestinationGuidancesApplied",
                                      ),
                                      e,
                                    );
                                  },
                                ),
                              )
                            : void 0,
                      })
                    : void 0,
                live_video_destination:
                  (an = t.destination_spec) != null && an.live_video_destination
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        live_video_id:
                          ((ln = t.destination_spec) == null ||
                          (ln = ln.live_video_destination) == null
                            ? void 0
                            : ln.live_video_id) != null
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                (sn = t.destination_spec) == null ||
                                  (sn = sn.live_video_destination) == null
                                  ? void 0
                                  : sn.live_video_id,
                                "destination_spec.live_video_destination.live_video_id",
                                i.id,
                              )
                            : void 0,
                      })
                    : void 0,
                message_destination:
                  (un = t.destination_spec) != null && un.message_destination
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        template_id:
                          ((cn = t.destination_spec) == null ||
                          (cn = cn.message_destination) == null
                            ? void 0
                            : cn.template_id) != null
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                (dn = t.destination_spec) == null ||
                                  (dn = dn.message_destination) == null
                                  ? void 0
                                  : dn.template_id,
                                "destination_spec.message_destination.template_id",
                                i.id,
                              )
                            : void 0,
                      })
                    : void 0,
                native_commerce_experience:
                  (mn = t.destination_spec) != null &&
                  mn.native_commerce_experience
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        product_browsing:
                          (pn = t.destination_spec) != null &&
                          (pn = pn.native_commerce_experience) != null &&
                          pn.product_browsing
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                action_metadata:
                                  (_n = t.destination_spec) != null &&
                                  (_n = _n.native_commerce_experience) !=
                                    null &&
                                  (_n = _n.product_browsing) != null &&
                                  _n.action_metadata
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceObjectToUndefined({
                                        type:
                                          (fn = t.destination_spec) != null &&
                                          (fn =
                                            fn.native_commerce_experience) !=
                                            null &&
                                          (fn = fn.product_browsing) != null &&
                                          (fn = fn.action_metadata) != null &&
                                          fn.type
                                            ? o(
                                                "TypeCoercionUtils",
                                              ).coerceNonMaybeValue(
                                                r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  (gn = t.destination_spec) ==
                                                    null ||
                                                    (gn =
                                                      gn.native_commerce_experience) ==
                                                      null ||
                                                    (gn =
                                                      gn.product_browsing) ==
                                                      null ||
                                                    (gn = gn.action_metadata) ==
                                                      null
                                                    ? void 0
                                                    : gn.type,
                                                ),
                                                "destination_spec.native_commerce_experience.product_browsing.action_metadata.type",
                                                i.id,
                                              )
                                            : void 0,
                                      })
                                    : void 0,
                                enroll_status:
                                  (hn = t.destination_spec) != null &&
                                  (hn = hn.native_commerce_experience) !=
                                    null &&
                                  (hn = hn.product_browsing) != null &&
                                  hn.enroll_status
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeFeatureEnrollStatus"),
                                          (yn = t.destination_spec) == null ||
                                            (yn =
                                              yn.native_commerce_experience) ==
                                              null ||
                                            (yn = yn.product_browsing) == null
                                            ? void 0
                                            : yn.enroll_status,
                                        ),
                                        "destination_spec.native_commerce_experience.product_browsing.enroll_status",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                        shop:
                          (Cn = t.destination_spec) != null &&
                          (Cn = Cn.native_commerce_experience) != null &&
                          Cn.shop
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                action_metadata:
                                  (bn = t.destination_spec) != null &&
                                  (bn = bn.native_commerce_experience) !=
                                    null &&
                                  (bn = bn.shop) != null &&
                                  bn.action_metadata
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceObjectToUndefined({
                                        type:
                                          (vn = t.destination_spec) != null &&
                                          (vn =
                                            vn.native_commerce_experience) !=
                                            null &&
                                          (vn = vn.shop) != null &&
                                          (vn = vn.action_metadata) != null &&
                                          vn.type
                                            ? o(
                                                "TypeCoercionUtils",
                                              ).coerceNonMaybeValue(
                                                r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  (Sn = t.destination_spec) ==
                                                    null ||
                                                    (Sn =
                                                      Sn.native_commerce_experience) ==
                                                      null ||
                                                    (Sn = Sn.shop) == null ||
                                                    (Sn = Sn.action_metadata) ==
                                                      null
                                                    ? void 0
                                                    : Sn.type,
                                                ),
                                                "destination_spec.native_commerce_experience.shop.action_metadata.type",
                                                i.id,
                                              )
                                            : void 0,
                                      })
                                    : void 0,
                                enroll_status:
                                  (Rn = t.destination_spec) != null &&
                                  (Rn = Rn.native_commerce_experience) !=
                                    null &&
                                  (Rn = Rn.shop) != null &&
                                  Rn.enroll_status
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeFeatureEnrollStatus"),
                                          (Ln = t.destination_spec) == null ||
                                            (Ln =
                                              Ln.native_commerce_experience) ==
                                              null ||
                                            (Ln = Ln.shop) == null
                                            ? void 0
                                            : Ln.enroll_status,
                                        ),
                                        "destination_spec.native_commerce_experience.shop.enroll_status",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                      })
                    : void 0,
                website:
                  (En = t.destination_spec) != null && En.website
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        optimization:
                          (kn = t.destination_spec) != null &&
                          (kn = kn.website) != null &&
                          kn.optimization
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                status:
                                  (In = t.destination_spec) != null &&
                                  (In = In.website) != null &&
                                  (In = In.optimization) != null &&
                                  In.status
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r(
                                            "ApiAdCreativeDestinationOptimizationEnrollmentStatus",
                                          ),
                                          (Tn = t.destination_spec) == null ||
                                            (Tn = Tn.website) == null ||
                                            (Tn = Tn.optimization) == null
                                            ? void 0
                                            : Tn.status,
                                        ),
                                        "destination_spec.website.optimization.status",
                                        i.id,
                                      )
                                    : void 0,
                                type:
                                  (Dn = t.destination_spec) != null &&
                                  (Dn = Dn.website) != null &&
                                  (Dn = Dn.optimization) != null &&
                                  Dn.type
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r(
                                            "AdCreativeDestinationOptimizationType",
                                          ),
                                          (xn = t.destination_spec) == null ||
                                            (xn = xn.website) == null ||
                                            (xn = xn.optimization) == null
                                            ? void 0
                                            : xn.type,
                                        ),
                                        "destination_spec.website.optimization.type",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                      })
                    : void 0,
              })
            : void 0,
          dynamic_ad_voice:
            ($n = t.dynamic_local_ad_creative_attachment) != null &&
            $n.dynamic_ad_voice
              ? o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdsDynamicAdVoices"),
                    t.dynamic_local_ad_creative_attachment.dynamic_ad_voice,
                  ),
                  "dynamic_local_ad_creative_attachment.dynamic_ad_voice",
                  i.id,
                )
              : void 0,
          effective_authorization_category: void 0,
          effective_instagram_media_id: void 0,
          effective_instagram_story_id: void 0,
          effective_object_story_id:
            (Pn = t.effective_object_story_id) != null ? Pn : void 0,
          enable_direct_install:
            (Nn =
              (Mn = t.mobile_app_install_attachment) == null
                ? void 0
                : Mn.enable_direct_install) != null
              ? Nn
              : !1,
          existing_post_title:
            (wn = t.existing_post_title) != null ? wn : void 0,
          facebook_branded_content: t.facebook_branded_content
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                sponsor_page_id:
                  (An =
                    (Fn = t.facebook_branded_content) == null
                      ? void 0
                      : Fn.sponsor_page_id) != null
                    ? An
                    : void 0,
              })
            : void 0,
          format_transformation_spec: o(
            "TypeCoercionUtils",
          ).coerceEmptyArrayToUndefined(
            t.format_transformation_spec.map(function (e) {
              var t,
                n =
                  (t = r("getJSEnumSafe")(
                    r("AdCreativeFormatTransformationFormatType"),
                    e.format,
                  )) != null
                    ? t
                    : void 0;
              if (n == null || n === void 0) return null;
              var o = r("filterNulls")(
                  e.data_source.map(function (e) {
                    var t;
                    return (t = r("getJSEnumSafe")(
                      r("AdCreativeFormatTransformationDataSourceType"),
                      e,
                    )) != null
                      ? t
                      : null;
                  }),
                ),
                a =
                  e.customizations != null && e.customizations.length > 0
                    ? r("filterNulls")(
                        e.customizations.map(function (e) {
                          var t = r("getJSEnumSafe")(
                              r(
                                "AdCreativeFormatTransformationCustomizationConfigName",
                              ),
                              e.name,
                            ),
                            n = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              e.enroll_status,
                            );
                          if (t == null || n == null) return null;
                          var o =
                            e.scope != null
                              ? r("filterNulls")(
                                  e.scope.map(function (e) {
                                    var t;
                                    return (t = r("getJSEnumSafe")(
                                      r(
                                        "AdCreativeFormatTransformationDataSourceType",
                                      ),
                                      e,
                                    )) != null
                                      ? t
                                      : null;
                                  }),
                                )
                              : void 0;
                          return { enroll_status: n, name: t, scope: o };
                        }),
                      )
                    : void 0,
                i = a != null ? c(a) : void 0;
              return babelHelpers.extends(
                {},
                i != null ? { customizations: i } : void 0,
                { data_source: o, format: n },
              );
            }),
          ),
          generative_asset_spec:
            t.generative_asset_spec != null
              ? o(
                  "TypeCoercionUtils",
                ).coerceObjectWithNullAndEmptyArraysToUndefined(
                  babelHelpers.extends({}, t.generative_asset_spec, {
                    images:
                      ((On = t.generative_asset_spec) == null
                        ? void 0
                        : On.images) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              (Bn = t.generative_asset_spec) == null
                                ? void 0
                                : Bn.images,
                              {
                                enroll_status: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (Wn = t.generative_asset_spec) == null ||
                                    (Wn = Wn.images) == null
                                    ? void 0
                                    : Wn.enroll_status,
                                ),
                                hero_image: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (qn = t.generative_asset_spec) == null ||
                                    (qn = qn.images) == null
                                    ? void 0
                                    : qn.hero_image,
                                ),
                                variations:
                                  ((Un = t.generative_asset_spec) == null ||
                                  (Un = Un.images) == null
                                    ? void 0
                                    : Un.variations) != null
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceEmptyArrayToUndefined(
                                        (Vn = t.generative_asset_spec) ==
                                          null || (Vn = Vn.images) == null
                                          ? void 0
                                          : Vn.variations.map(function (e) {
                                              var t, n;
                                              return babelHelpers.extends(
                                                {},
                                                e,
                                                {
                                                  action_metadata:
                                                    e != null &&
                                                    e.action_metadata &&
                                                    (t = r("getJSEnumSafe")(
                                                      r(
                                                        "AdCreativeFeatureActionType",
                                                      ),
                                                      e == null
                                                        ? void 0
                                                        : e.action_metadata,
                                                    )) != null
                                                      ? t
                                                      : void 0,
                                                  enroll_status:
                                                    e != null &&
                                                    e.enroll_status &&
                                                    (n = r("getJSEnumSafe")(
                                                      r(
                                                        "AdCreativeFeatureEnrollStatus",
                                                      ),
                                                      e == null
                                                        ? void 0
                                                        : e.enroll_status,
                                                    )) != null
                                                      ? n
                                                      : void 0,
                                                  hash: o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.hash,
                                                    "generative_asset_spec.images.variations[].hash",
                                                    i.id,
                                                  ),
                                                },
                                              );
                                            }),
                                      )
                                    : void 0,
                              },
                            ),
                          )
                        : void 0,
                    logo_overlay:
                      ((Hn = t.generative_asset_spec) == null
                        ? void 0
                        : Hn.logo_overlay) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.logo_overlay,
                              {
                                enroll_status:
                                  t.generative_asset_spec.logo_overlay
                                    .enroll_status &&
                                  (Gn = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    t.generative_asset_spec.logo_overlay
                                      .enroll_status,
                                  )) != null
                                    ? Gn
                                    : void 0,
                                logos: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (zn =
                                    (jn = t.generative_asset_spec) == null ||
                                    (jn = jn.logo_overlay) == null
                                      ? void 0
                                      : jn.logos.map(function (e) {
                                          return babelHelpers.extends({}, e, {
                                            hash: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.hash,
                                              "generative_asset_spec.logo_overlay.logos[].hash",
                                              i.id,
                                            ),
                                            selected: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.selected,
                                              "generative_asset_spec.logo_overlay.logos[].selected",
                                              i.id,
                                            ),
                                            source: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyStringToUndefined(
                                              e.source,
                                            ),
                                          });
                                        })) != null
                                    ? zn
                                    : [],
                                ),
                              },
                            ),
                          )
                        : void 0,
                    text_overlay:
                      ((Kn = t.generative_asset_spec) == null
                        ? void 0
                        : Kn.text_overlay) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.text_overlay,
                              {
                                action_metadata:
                                  (Qn = t.generative_asset_spec) != null &&
                                  (Qn = Qn.text_overlay) != null &&
                                  Qn.action_metadata &&
                                  (Xn = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureActionType"),
                                    (Yn =
                                      t.generative_asset_spec.text_overlay) ==
                                      null
                                      ? void 0
                                      : Yn.action_metadata,
                                  )) != null
                                    ? Xn
                                    : void 0,
                                enroll_status:
                                  (Jn = t.generative_asset_spec) != null &&
                                  (Jn = Jn.text_overlay) != null &&
                                  Jn.enroll_status &&
                                  (Zn = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    t.generative_asset_spec.text_overlay
                                      .enroll_status,
                                  )) != null
                                    ? Zn
                                    : void 0,
                                font_name: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (er = t.generative_asset_spec) == null ||
                                    (er = er.text_overlay) == null
                                    ? void 0
                                    : er.font_name,
                                ),
                                font_style: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (tr = t.generative_asset_spec) == null ||
                                    (tr = tr.text_overlay) == null
                                    ? void 0
                                    : tr.font_style,
                                ),
                                texts: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (nr =
                                    (rr = t.generative_asset_spec) == null ||
                                    (rr = rr.text_overlay) == null ||
                                    (rr = rr.texts) == null
                                      ? void 0
                                      : rr.map(function (e) {
                                          return babelHelpers.extends({}, e, {
                                            source: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyStringToUndefined(
                                              e.source,
                                            ),
                                            text: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.text,
                                              "generative_asset_spec.text_overlay.texts[].text",
                                              i.id,
                                            ),
                                          });
                                        })) != null
                                    ? nr
                                    : [],
                                ),
                              },
                            ),
                          )
                        : void 0,
                    transparency_metadata:
                      ((or = t.generative_asset_spec) == null
                        ? void 0
                        : or.transparency_metadata) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.transparency_metadata,
                              {
                                self_disclosure:
                                  (ar = t.generative_asset_spec) != null &&
                                  (ar = ar.transparency_metadata) != null &&
                                  ar.self_disclosure
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceObjectToUndefined({
                                        enroll_status:
                                          (ir = t.generative_asset_spec) !=
                                            null &&
                                          (ir = ir.transparency_metadata) !=
                                            null &&
                                          (ir = ir.self_disclosure) != null &&
                                          ir.enroll_status &&
                                          (lr = r("getJSEnumSafe")(
                                            r("AdCreativeFeatureEnrollStatus"),
                                            (sr =
                                              t.generative_asset_spec
                                                .transparency_metadata) ==
                                              null ||
                                              (sr = sr.self_disclosure) == null
                                              ? void 0
                                              : sr.enroll_status,
                                          )) != null
                                            ? lr
                                            : void 0,
                                      })
                                    : void 0,
                              },
                            ),
                          )
                        : void 0,
                    videos:
                      ((ur = t.generative_asset_spec) == null
                        ? void 0
                        : ur.videos) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.videos,
                              {
                                ad_sourced_asset:
                                  (cr =
                                    t.generative_asset_spec.videos
                                      .ad_sourced_asset) != null
                                    ? cr
                                    : void 0,
                                enroll_status:
                                  t.generative_asset_spec.videos
                                    .enroll_status &&
                                  (dr = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    t.generative_asset_spec.videos
                                      .enroll_status,
                                  )) != null
                                    ? dr
                                    : void 0,
                                request_id:
                                  (mr =
                                    (pr = t.generative_asset_spec) == null ||
                                    (pr = pr.videos) == null
                                      ? void 0
                                      : pr.request_id) != null
                                    ? mr
                                    : void 0,
                                variations: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (_r =
                                    (fr = t.generative_asset_spec) == null ||
                                    (fr = fr.videos) == null ||
                                    (fr = fr.variations) == null
                                      ? void 0
                                      : fr.map(function (e) {
                                          return babelHelpers.extends({}, e, {
                                            source_hash: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyStringToUndefined(
                                              e.source_hash,
                                            ),
                                            video_id: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.video_id,
                                              "generative_asset_spec.videos.variations[].video_id",
                                              i.id,
                                            ),
                                          });
                                        })) != null
                                    ? _r
                                    : [],
                                ),
                                video_generation_status_list: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (gr = t.generative_asset_spec) == null ||
                                    (gr = gr.videos) == null
                                    ? void 0
                                    : gr.video_generation_status_list,
                                ),
                              },
                            ),
                          )
                        : void 0,
                  }),
                )
              : void 0,
          id: (hr = t.id) != null ? hr : void 0,
          image_crops:
            (yr =
              (Cr = t.image_crops) == null
                ? void 0
                : Cr.ad_image_crops_per_dimension_spec) != null
              ? yr
              : void 0,
          image_hash: (br = t.image_hash_api) != null ? br : void 0,
          image_url: (vr = t.image_url) != null ? vr : void 0,
          instagram_actor_id: (Sr = t.instagram_actor_id) != null ? Sr : void 0,
          instagram_branded_content: t.instagram_branded_content_attachment
            ? {
                sponsor_id:
                  (Rr =
                    (Lr = t.instagram_branded_content_attachment) == null
                      ? void 0
                      : Lr.sponsor_id) != null
                    ? Rr
                    : void 0,
              }
            : void 0,
          instagram_permalink_url: void 0,
          instagram_story_id: (Er = t.instagram_story_id) != null ? Er : void 0,
          instant_checkout_setting:
            (kr = o("enumUtils").coerceFromKey(
              t.instant_checkout_setting,
              r("AdInstantCheckoutSetting"),
            )) != null
              ? kr
              : void 0,
          interactive_components_spec:
            (Ir = t.interactive_components_spec) != null &&
            Ir.ad_creative_interactive_component_spec
              ? babelHelpers.extends(
                  {},
                  t.interactive_components_spec
                    .ad_creative_interactive_component_spec,
                  {
                    child_attachments: t.interactive_components_spec
                      .ad_creative_interactive_component_spec.child_attachments
                      ? t.interactive_components_spec.ad_creative_interactive_component_spec.child_attachments.map(
                          function (e) {
                            var t;
                            return {
                              components: (t = e.components) != null ? t : [],
                            };
                          },
                        )
                      : void 0,
                  },
                )
              : void 0,
          link_og_id: void 0,
          link_url: (Tr = t.link_url_from_api) != null ? Tr : void 0,
          live_video_reminder:
            t.live_video_reminder != null
              ? o("TypeCoercionUtils").coerceObjectToUndefined({
                  enroll_status:
                    (Dr = t.live_video_reminder) != null &&
                    Dr.enroll_status &&
                    (xr = r("getJSEnumSafe")(
                      r("AdCreativeFeatureEnrollStatus"),
                      t.live_video_reminder.enroll_status,
                    )) != null
                      ? xr
                      : void 0,
                  start_time:
                    ($r =
                      (Pr = t.live_video_reminder) == null
                        ? void 0
                        : Pr.start_time) != null
                      ? $r
                      : void 0,
                })
              : void 0,
          marketing_message_spec: o(
            "TypeCoercionUtils",
          ).coerceEmptyStringToUndefined(
            (Nr = t.marketing_message_attachment) == null
              ? void 0
              : Nr.message_json,
          ),
          marketing_message_structured_spec: t.marketing_message_attachment
            ? {
                asset_customization:
                  ((Mr = t.marketing_message_attachment) == null
                    ? void 0
                    : Mr.asset_customization) != null
                    ? {
                        body:
                          (wr =
                            (Ar = t.marketing_message_attachment) == null ||
                            (Ar = Ar.asset_customization) == null
                              ? void 0
                              : Ar.body) != null
                            ? wr
                            : "",
                      }
                    : void 0,
                automation_config:
                  ((Fr = t.marketing_message_attachment) == null ||
                  (Fr = Fr.automation_config) == null
                    ? void 0
                    : Fr.config_id) != null
                    ? {
                        config_id:
                          (Or = t.marketing_message_attachment) == null ||
                          (Or = Or.automation_config) == null
                            ? void 0
                            : Or.config_id,
                      }
                    : void 0,
                autoreply:
                  ((Br = t.marketing_message_attachment) == null
                    ? void 0
                    : Br.auto_reply) != null
                    ? {
                        buttons: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (Wr = t.marketing_message_attachment) == null
                            ? void 0
                            : Wr.auto_reply.buttons.map(function (e) {
                                var t, n;
                                return {
                                  coupon_code: e.coupon_code,
                                  phone_number: e.phone_number,
                                  preconfigured_response:
                                    e.preconfigured_response,
                                  text: (t = e.text) != null ? t : "",
                                  type:
                                    (n = r("getJSEnumSafe")(
                                      r("MarketingMessageButtonType"),
                                      e.type,
                                    )) != null
                                      ? n
                                      : "URL",
                                  url: e.url,
                                };
                              }),
                        ),
                        image_hash:
                          (qr = t.marketing_message_attachment) == null ||
                          (qr = qr.auto_reply) == null
                            ? void 0
                            : qr.image_hash,
                        is_optimized_auto_reply:
                          (Ur = t.marketing_message_attachment) == null ||
                          (Ur = Ur.auto_reply) == null
                            ? void 0
                            : Ur.is_optimized_auto_reply,
                        save_template:
                          (Vr = t.marketing_message_attachment) == null ||
                          (Vr = Vr.auto_reply) == null
                            ? void 0
                            : Vr.save_template,
                        template_name:
                          (Hr = t.marketing_message_attachment) == null ||
                          (Hr = Hr.auto_reply) == null
                            ? void 0
                            : Hr.template_name,
                        text:
                          (Gr = t.marketing_message_attachment) == null ||
                          (Gr = Gr.auto_reply) == null
                            ? void 0
                            : Gr.text,
                        video_id:
                          (zr = t.marketing_message_attachment) == null ||
                          (zr = zr.auto_reply) == null
                            ? void 0
                            : zr.video_id,
                        video_thumbnail_url:
                          (jr = t.marketing_message_attachment) == null ||
                          (jr = jr.auto_reply) == null
                            ? void 0
                            : jr.video_thumbnail_url,
                      }
                    : void 0,
                buttons: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  (Kr = t.marketing_message_attachment) == null
                    ? void 0
                    : Kr.buttons.map(function (e) {
                        var t, n, a, i, l, s, u, c, d, m, p;
                        return e.is_derived_from_cta !== !0
                          ? {
                              android_app_metadata:
                                e.android_app_metadata != null
                                  ? {
                                      app_store_url:
                                        (t = e.android_app_metadata) == null
                                          ? void 0
                                          : t.app_store_url,
                                      deep_link_url:
                                        (n =
                                          (a = e.android_app_metadata) == null
                                            ? void 0
                                            : a.deep_link_url) != null
                                          ? n
                                          : "",
                                      type: o(
                                        "MarketingMessageButtonUtils",
                                      ).getWhatsAppAppLinkTreatmentTypeFromGraphQLType(
                                        (i = e.android_app_metadata.type) !=
                                          null
                                          ? i
                                          : "DEEPLINK_WITH_WEB_FALLBACK",
                                      ),
                                    }
                                  : void 0,
                              app_id: e.app_id,
                              coupon_code: e.coupon_code,
                              ios_app_metadata:
                                e.ios_app_metadata != null
                                  ? {
                                      app_store_url:
                                        (l = e.ios_app_metadata) == null
                                          ? void 0
                                          : l.app_store_url,
                                      deep_link_url:
                                        (s =
                                          (u = e.ios_app_metadata) == null
                                            ? void 0
                                            : u.deep_link_url) != null
                                          ? s
                                          : "",
                                      type: o(
                                        "MarketingMessageButtonUtils",
                                      ).getWhatsAppAppLinkTreatmentTypeFromGraphQLType(
                                        (c =
                                          (d = e.ios_app_metadata) == null
                                            ? void 0
                                            : d.type) != null
                                          ? c
                                          : "DEEPLINK_WITH_WEB_FALLBACK",
                                      ),
                                    }
                                  : void 0,
                              phone_number: e.phone_number,
                              preconfigured_response: e.preconfigured_response,
                              quick_reply_payload: e.quick_reply_payload,
                              text: (m = e.text) != null ? m : "",
                              type:
                                (p = r("getJSEnumSafe")(
                                  r("MarketingMessageButtonType"),
                                  e.type,
                                )) != null
                                  ? p
                                  : "URL",
                              url: e.url,
                            }
                          : null;
                      }),
                ),
                conversation_template_id:
                  (Qr =
                    (Xr = t.marketing_message_attachment) == null
                      ? void 0
                      : Xr.conversation_template_id) != null
                    ? Qr
                    : void 0,
                dynamic_product_message_spec:
                  ((Yr = t.marketing_message_attachment) == null
                    ? void 0
                    : Yr.dynamic_product_message_spec) != null
                    ? {
                        description:
                          (Jr =
                            (Zr = t.marketing_message_attachment) == null ||
                            (Zr = Zr.dynamic_product_message_spec) == null
                              ? void 0
                              : Zr.description) != null
                            ? Jr
                            : "",
                        headline:
                          (eo =
                            (to = t.marketing_message_attachment) == null ||
                            (to = to.dynamic_product_message_spec) == null
                              ? void 0
                              : to.headline) != null
                            ? eo
                            : "",
                        text:
                          (no =
                            (ro = t.marketing_message_attachment) == null ||
                            (ro = ro.dynamic_product_message_spec) == null
                              ? void 0
                              : ro.text) != null
                            ? no
                            : "",
                      }
                    : void 0,
                footer:
                  (oo =
                    (ao = t.marketing_message_attachment) == null
                      ? void 0
                      : ao.footer) != null
                    ? oo
                    : void 0,
                greeting:
                  (io =
                    (lo = t.marketing_message_attachment) == null
                      ? void 0
                      : lo.greeting) != null
                    ? io
                    : void 0,
                is_optimized_text:
                  (so =
                    (uo = t.marketing_message_attachment) == null
                      ? void 0
                      : uo.is_optimized_text) != null
                    ? so
                    : void 0,
                language:
                  (co = Object.keys(r("HSMAvailableLanguagesType")).find(
                    function (e) {
                      var n;
                      return (
                        e ===
                        ((n = t.marketing_message_attachment) == null
                          ? void 0
                          : n.language)
                      );
                    },
                  )) != null
                    ? co
                    : void 0,
                offer:
                  ((mo = t.marketing_message_attachment) == null
                    ? void 0
                    : mo.offer) != null
                    ? {
                        expiration_time:
                          (po = t.marketing_message_attachment) == null ||
                          (po = po.offer) == null
                            ? void 0
                            : po.expiration_time_iso_string,
                        is_offer_code_personalized:
                          (_o =
                            (fo = t.marketing_message_attachment) == null ||
                            (fo = fo.offer) == null
                              ? void 0
                              : fo.is_offer_code_personalized) != null
                            ? _o
                            : !1,
                        text:
                          (go = t.marketing_message_attachment) == null ||
                          (go = go.offer) == null
                            ? void 0
                            : go.text,
                      }
                    : void 0,
              }
            : void 0,
          media_optimization_spec: t.media_optimization_spec
            ? {
                videos: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  ((ho = t.media_optimization_spec.videos) != null ? ho : [])
                    .filter(function (e) {
                      return (e == null ? void 0 : e.video_id) != null;
                    })
                    .map(function (e) {
                      var t, n, a, l;
                      return {
                        ai_video_shortening: e.ai_video_shortening
                          ? {
                              action_metadata:
                                (t = e.ai_video_shortening) != null &&
                                (t = t.action_metadata) != null &&
                                t.type
                                  ? {
                                      type: o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeSourceActionType"),
                                          e.ai_video_shortening.action_metadata
                                            .type,
                                        ),
                                        "media_optimization_spec.videos.ai_video_shortening.action_metadata.type",
                                        i.id,
                                      ),
                                    }
                                  : void 0,
                              enroll_status:
                                (n = e.ai_video_shortening) != null &&
                                n.enroll_status
                                  ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceEnrollStatus"),
                                        e.ai_video_shortening.enroll_status,
                                      ),
                                      "media_optimization_spec.videos.ai_video_shortening.enroll_status",
                                      i.id,
                                    )
                                  : void 0,
                            }
                          : void 0,
                        auto_video_truncation: e.auto_video_truncation
                          ? {
                              action_metadata:
                                (a = e.auto_video_truncation) != null &&
                                (a = a.action_metadata) != null &&
                                a.type
                                  ? {
                                      type: o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeSourceActionType"),
                                          e.auto_video_truncation
                                            .action_metadata.type,
                                        ),
                                        "media_optimization_spec.videos.auto_video_truncation.action_metadata.type",
                                        i.id,
                                      ),
                                    }
                                  : void 0,
                              enroll_status:
                                (l = e.auto_video_truncation) != null &&
                                l.enroll_status
                                  ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceEnrollStatus"),
                                        e.auto_video_truncation.enroll_status,
                                      ),
                                      "media_optimization_spec.videos.auto_video_truncation.enroll_status",
                                      i.id,
                                    )
                                  : void 0,
                            }
                          : void 0,
                        video_id: e.video_id,
                      };
                    }),
                ),
              }
            : void 0,
          media_sourcing_spec: t.media_sourcing_spec
            ? o(
                "TypeCoercionUtils",
              ).coerceObjectWithNullAndEmptyArraysToUndefined(
                babelHelpers.extends({}, t.media_sourcing_spec, {
                  bodies: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    (yo = t.media_sourcing_spec) == null ||
                      (yo = yo.bodies) == null
                      ? void 0
                      : yo.map(function (e) {
                          var t, n, a, l, s, u, c;
                          return {
                            action_type:
                              (t = o("enumUtils").coerceFromKey(
                                e.action_type,
                                r("AdsAPIAssetFeedTextActionType"),
                              )) != null
                                ? t
                                : void 0,
                            asset_source:
                              (n = e.asset_source) != null ? n : void 0,
                            language: (a = e.language) != null ? a : void 0,
                            target_audience:
                              (l = e.target_audience) != null ? l : void 0,
                            text:
                              e.text != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.text,
                                    "media_sourcing_spec.bodies[].text",
                                    i.id,
                                  )
                                : void 0,
                            text_gen_input_text:
                              (s = e.text_gen_input_text) != null ? s : void 0,
                            text_gen_original_text:
                              (u = e.text_gen_original_text) != null
                                ? u
                                : void 0,
                            uuid: (c = e.uuid) != null ? c : void 0,
                          };
                        }),
                  ),
                  descriptions: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (Co = t.media_sourcing_spec) == null ||
                      (Co = Co.descriptions) == null
                      ? void 0
                      : Co.map(function (e) {
                          return {
                            text:
                              e.text != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.text,
                                    "media_sourcing_spec.descriptions[].text",
                                    i.id,
                                  )
                                : void 0,
                          };
                        }),
                  ),
                  destinations: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (bo = t.media_sourcing_spec) == null ||
                      (bo = bo.destinations) == null
                      ? void 0
                      : bo.map(function (e) {
                          return {
                            display_url:
                              e.display_url != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.display_url,
                                    "media_sourcing_spec.destinations[].display_url",
                                    i.id,
                                  )
                                : void 0,
                            url:
                              e.url != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.url,
                                    "media_sourcing_spec.destinations[].url",
                                    i.id,
                                  )
                                : "",
                          };
                        }),
                  ),
                  images:
                    (vo = t.media_sourcing_spec) != null && vo.images
                      ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          (So = t.media_sourcing_spec) == null ||
                            (So = So.images) == null
                            ? void 0
                            : So.map(function (t) {
                                var n,
                                  a,
                                  l,
                                  s,
                                  u,
                                  c,
                                  d,
                                  m,
                                  _,
                                  f,
                                  g,
                                  h,
                                  y,
                                  C,
                                  b,
                                  v,
                                  S,
                                  R = t.creative_audience_pairing_persona,
                                  L = t.gen_ai_metadata,
                                  E = t.variant_types,
                                  k = babelHelpers.objectWithoutPropertiesLoose(
                                    t,
                                    e,
                                  );
                                return babelHelpers.extends({}, k, {
                                  action_metadata:
                                    (n = r("getJSEnumSafe")(
                                      r("AdCreativeFeatureActionType"),
                                      k.action_metadata,
                                    )) != null
                                      ? n
                                      : void 0,
                                  creation_source:
                                    k.creation_source != null
                                      ? k.creation_source
                                      : void 0,
                                  creative_audience_pairing_persona:
                                    R != null
                                      ? {
                                          age_max:
                                            (a = R.age_max) != null
                                              ? a
                                              : void 0,
                                          age_min:
                                            (l = R.age_min) != null
                                              ? l
                                              : void 0,
                                          genders: r("filterNulls")(
                                            R.genders.map(function (e) {
                                              var t;
                                              return (t = o("enumUtils").coerce(
                                                e,
                                                r("AdsTargetingGender"),
                                              )) != null
                                                ? t
                                                : null;
                                            }),
                                          ),
                                        }
                                      : void 0,
                                  destination_customizations:
                                    (s = k.destination_customizations) == null
                                      ? void 0
                                      : s.map(function (e) {
                                          return {
                                            display_url:
                                              e.display_url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.display_url,
                                                    "media_sourcing_spec.images[].destination_customizations[].display_url",
                                                    i.id,
                                                  )
                                                : void 0,
                                            url:
                                              e.url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.url,
                                                    "media_sourcing_spec.images[].destination_customizations[].url",
                                                    i.id,
                                                  )
                                                : "",
                                          };
                                        }),
                                  gen_ai_metadata:
                                    L != null
                                      ? {
                                          adoption_entrypoint: p(
                                            L.adoption_entrypoint,
                                          ),
                                          generation_path: p(L.generation_path),
                                          generation_type: p(L.generation_type),
                                          image_variation_id: p(
                                            L.image_variation_id,
                                          ),
                                          model_name: p(L.model_name),
                                          recipe_name: p(L.recipe_name),
                                          user_action: p(L.user_action),
                                        }
                                      : void 0,
                                  group_id:
                                    k.group_id != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          k.group_id,
                                          "media_sourcing_spec.images[].group_id",
                                          i.id,
                                        )
                                      : void 0,
                                  hash:
                                    k.hash != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          k.hash,
                                          "media_sourcing_spec.images[].hash",
                                          i.id,
                                        )
                                      : void 0,
                                  image_crops:
                                    (u = o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (c = k.image_crops) == null
                                        ? void 0
                                        : c.map(function (e) {
                                            var t, n, a;
                                            return {
                                              crop_spec:
                                                e != null &&
                                                (t = e.crop_spec) != null &&
                                                t.ad_image_crops_per_dimension_spec
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceObjectToUndefined(
                                                      e == null ||
                                                        (n = e.crop_spec) ==
                                                          null
                                                        ? void 0
                                                        : n.ad_image_crops_per_dimension_spec,
                                                    )
                                                  : void 0,
                                              type:
                                                (a = r("getJSEnumSafe")(
                                                  r("MultiMediaCropType"),
                                                  e == null ? void 0 : e.type,
                                                )) != null
                                                  ? a
                                                  : void 0,
                                            };
                                          }),
                                    )) != null
                                      ? u
                                      : void 0,
                                  opt_in_status: o(
                                    "AdsCreativeFlexSpecUtils",
                                  ).convertSpecStringToRelatedMediaSelection(
                                    k.opt_in_status,
                                  ),
                                  organic_media_source:
                                    k.organic_media_source != null
                                      ? {
                                          original_ig_account_fbid:
                                            (d =
                                              k.organic_media_source
                                                .original_ig_account_fbid) !=
                                            null
                                              ? d
                                              : void 0,
                                          original_ig_media_fbid:
                                            (m =
                                              k.organic_media_source
                                                .original_ig_media_fbid) != null
                                              ? m
                                              : void 0,
                                          original_ig_media_permalink:
                                            (_ =
                                              k.organic_media_source
                                                .original_ig_media_permalink) !=
                                            null
                                              ? _
                                              : void 0,
                                        }
                                      : void 0,
                                  placement_customizations:
                                    (f = o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (g = k.placement_customizations) == null
                                        ? void 0
                                        : g.map(function (e) {
                                            var t, n;
                                            return babelHelpers.extends({}, e, {
                                              placement_exclusions:
                                                (t = o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  e.placement_exclusions,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              publisher_platform:
                                                (n = r("getJSEnumSafe")(
                                                  r("AdsAPIPublisherPlatform"),
                                                  e.publisher_platform,
                                                )) != null
                                                  ? n
                                                  : void 0,
                                            });
                                          }),
                                    )) != null
                                      ? f
                                      : void 0,
                                  retriever_sources:
                                    (h =
                                      (y = k.retriever_sources) == null
                                        ? void 0
                                        : y
                                            .map(
                                              o("AdsCreativeFlexSpecUtils")
                                                .convertSpecStringToRetrieverSource,
                                            )
                                            .filter(Boolean)) != null
                                      ? h
                                      : void 0,
                                  source:
                                    (C = r("getJSEnumSafe")(
                                      r("CreativeMultiMediaSource"),
                                      k == null ? void 0 : k.source,
                                    )) != null
                                      ? C
                                      : void 0,
                                  text_customizations: {
                                    bodies: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (b = k.text_customizations) == null ||
                                        (b = b.bodies) == null
                                        ? void 0
                                        : b.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.images[].text_customizations.bodies[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    descriptions: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (v = k.text_customizations) == null ||
                                        (v = v.descriptions) == null
                                        ? void 0
                                        : v.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.images[].text_customizations.descriptions[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    titles: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (S = k.text_customizations) == null ||
                                        (S = S.titles) == null
                                        ? void 0
                                        : S.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.images[].text_customizations.titles[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                  },
                                  url:
                                    k.url != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          k.url,
                                          "media_sourcing_spec.images[].url",
                                          i.id,
                                        )
                                      : void 0,
                                  variant_types:
                                    E != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceEmptyArrayToUndefined(
                                          r("filterNulls")(
                                            E.map(function (e) {
                                              var t;
                                              return (t = r("getJSEnumSafe")(
                                                r("AdsAspectRatioTypes"),
                                                e,
                                              )) != null
                                                ? t
                                                : null;
                                            }),
                                          ),
                                        )
                                      : void 0,
                                });
                              }),
                        )
                      : void 0,
                  push_metadata_ids: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (Ro = t.media_sourcing_spec) == null ||
                      (Ro = Ro.push_metadata_ids) == null
                      ? void 0
                      : Ro.map(function (e) {
                          return o(
                            "TypeCoercionUtils",
                          ).coerceMaybeNumberToString(e);
                        }),
                  ),
                  related_media:
                    (Lo = t.media_sourcing_spec) != null && Lo.related_media
                      ? o(
                          "TypeCoercionUtils",
                        ).coerceObjectWithNullAndEmptyArraysToUndefined(
                          babelHelpers.extends(
                            {},
                            (Eo = t.media_sourcing_spec) == null
                              ? void 0
                              : Eo.related_media,
                            {
                              images:
                                (ko = t.media_sourcing_spec) != null &&
                                (ko = ko.related_media) != null &&
                                ko.images
                                  ? o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (Io = t.media_sourcing_spec) == null ||
                                        (Io = Io.related_media) == null
                                        ? void 0
                                        : Io.images.map(function (e) {
                                            var t,
                                              n,
                                              a,
                                              l,
                                              s,
                                              u,
                                              c,
                                              d,
                                              m,
                                              p,
                                              _,
                                              f;
                                            return babelHelpers.extends({}, e, {
                                              action_metadata:
                                                e.action_metadata &&
                                                (t = r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  e.action_metadata,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              creation_source:
                                                e.creation_source != null
                                                  ? e.creation_source
                                                  : void 0,
                                              destination_customizations:
                                                (n =
                                                  e.destination_customizations) ==
                                                null
                                                  ? void 0
                                                  : n.map(function (e) {
                                                      return {
                                                        display_url:
                                                          e.display_url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.display_url,
                                                                "media_sourcing_spec.related_media.images[].destination_customizations[].display_url",
                                                                i.id,
                                                              )
                                                            : void 0,
                                                        url:
                                                          e.url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.url,
                                                                "media_sourcing_spec.related_media.images[].destination_customizations[].url",
                                                                i.id,
                                                              )
                                                            : "",
                                                      };
                                                    }),
                                              hash:
                                                e.hash != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.hash,
                                                      "media_sourcing_spec.related_media.images[].hash",
                                                      i.id,
                                                    )
                                                  : void 0,
                                              image_crops:
                                                (a = e.image_crops) != null &&
                                                a.ad_image_crops_per_dimension_spec
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceObjectToUndefined(
                                                      (l = e.image_crops) ==
                                                        null
                                                        ? void 0
                                                        : l.ad_image_crops_per_dimension_spec,
                                                    )
                                                  : void 0,
                                              opt_in_status: o(
                                                "AdsCreativeFlexSpecUtils",
                                              ).convertSpecStringToRelatedMediaSelection(
                                                e.opt_in_status,
                                              ),
                                              organic_media_source:
                                                e.organic_media_source != null
                                                  ? {
                                                      original_ig_account_fbid:
                                                        (s =
                                                          e.organic_media_source
                                                            .original_ig_account_fbid) !=
                                                        null
                                                          ? s
                                                          : void 0,
                                                      original_ig_media_fbid:
                                                        (u =
                                                          e.organic_media_source
                                                            .original_ig_media_fbid) !=
                                                        null
                                                          ? u
                                                          : void 0,
                                                      original_ig_media_permalink:
                                                        (c =
                                                          e.organic_media_source
                                                            .original_ig_media_permalink) !=
                                                        null
                                                          ? c
                                                          : void 0,
                                                    }
                                                  : void 0,
                                              retriever_sources:
                                                (d =
                                                  (m = e.retriever_sources) ==
                                                  null
                                                    ? void 0
                                                    : m
                                                        .map(
                                                          o(
                                                            "AdsCreativeFlexSpecUtils",
                                                          )
                                                            .convertSpecStringToRetrieverSource,
                                                        )
                                                        .filter(Boolean)) !=
                                                null
                                                  ? d
                                                  : void 0,
                                              text_customizations: {
                                                bodies: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (p = e.text_customizations) ==
                                                    null ||
                                                    (p = p.bodies) == null
                                                    ? void 0
                                                    : p.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.images[].text_customizations.bodies[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                descriptions: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (_ = e.text_customizations) ==
                                                    null ||
                                                    (_ = _.descriptions) == null
                                                    ? void 0
                                                    : _.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.images[].text_customizations.descriptions[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                titles: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (f = e.text_customizations) ==
                                                    null ||
                                                    (f = f.titles) == null
                                                    ? void 0
                                                    : f.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.images[].text_customizations.titles[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                              },
                                              url:
                                                e.url != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.url,
                                                      "media_sourcing_spec.related_media.images[].url",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            });
                                          }),
                                    )
                                  : void 0,
                              videos:
                                (To = t.media_sourcing_spec) != null &&
                                (To = To.related_media) != null &&
                                To.videos
                                  ? o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (Do = t.media_sourcing_spec) == null ||
                                        (Do = Do.related_media) == null
                                        ? void 0
                                        : Do.videos.map(function (e) {
                                            var t, n, a, l, s, u, c, d, m, p;
                                            return babelHelpers.extends({}, e, {
                                              action_metadata:
                                                e.action_metadata &&
                                                (t = r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  e.action_metadata,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              creation_source:
                                                e.creation_source != null
                                                  ? e.creation_source
                                                  : void 0,
                                              destination_customizations:
                                                (n =
                                                  e.destination_customizations) ==
                                                null
                                                  ? void 0
                                                  : n.map(function (e) {
                                                      return {
                                                        display_url:
                                                          e.display_url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.display_url,
                                                                "media_sourcing_spec.related_media.videos[].destination_customizations[].display_url",
                                                                i.id,
                                                              )
                                                            : void 0,
                                                        url:
                                                          e.url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.url,
                                                                "media_sourcing_spec.related_media.videos[].destination_customizations[].url",
                                                                i.id,
                                                              )
                                                            : "",
                                                      };
                                                    }),
                                              opt_in_status: o(
                                                "AdsCreativeFlexSpecUtils",
                                              ).convertSpecStringToRelatedMediaSelection(
                                                e.opt_in_status,
                                              ),
                                              organic_media_source:
                                                e.organic_media_source != null
                                                  ? {
                                                      original_ig_account_fbid:
                                                        (a =
                                                          e.organic_media_source
                                                            .original_ig_account_fbid) !=
                                                        null
                                                          ? a
                                                          : void 0,
                                                      original_ig_media_fbid:
                                                        (l =
                                                          e.organic_media_source
                                                            .original_ig_media_fbid) !=
                                                        null
                                                          ? l
                                                          : void 0,
                                                      original_ig_media_permalink:
                                                        (s =
                                                          e.organic_media_source
                                                            .original_ig_media_permalink) !=
                                                        null
                                                          ? s
                                                          : void 0,
                                                    }
                                                  : void 0,
                                              retriever_sources:
                                                (u =
                                                  (c = e.retriever_sources) ==
                                                  null
                                                    ? void 0
                                                    : c
                                                        .map(
                                                          o(
                                                            "AdsCreativeFlexSpecUtils",
                                                          )
                                                            .convertSpecStringToRetrieverSource,
                                                        )
                                                        .filter(Boolean)) !=
                                                null
                                                  ? u
                                                  : void 0,
                                              text_customizations: {
                                                bodies: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (d = e.text_customizations) ==
                                                    null ||
                                                    (d = d.bodies) == null
                                                    ? void 0
                                                    : d.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.videos[].text_customizations.bodies[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                descriptions: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (m = e.text_customizations) ==
                                                    null ||
                                                    (m = m.descriptions) == null
                                                    ? void 0
                                                    : m.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.videos[].text_customizations.descriptions[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                titles: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (p = e.text_customizations) ==
                                                    null ||
                                                    (p = p.titles) == null
                                                    ? void 0
                                                    : p.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.videos[].text_customizations.titles[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                              },
                                              video_id: o(
                                                "TypeCoercionUtils",
                                              ).coerceNonMaybeValue(
                                                e.video_id,
                                                "media_sourcing_spec.related_media.videos[].video_id",
                                                i.id,
                                              ),
                                            });
                                          }),
                                    )
                                  : void 0,
                            },
                          ),
                        )
                      : void 0,
                  titles: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    (xo = t.media_sourcing_spec) == null ||
                      (xo = xo.titles) == null
                      ? void 0
                      : xo.map(function (e) {
                          var t, n, a, l, s, u, c;
                          return {
                            action_type:
                              (t = o("enumUtils").coerceFromKey(
                                e.action_type,
                                r("AdsAPIAssetFeedTextActionType"),
                              )) != null
                                ? t
                                : void 0,
                            asset_source:
                              (n = e.asset_source) != null ? n : void 0,
                            language: (a = e.language) != null ? a : void 0,
                            target_audience:
                              (l = e.target_audience) != null ? l : void 0,
                            text:
                              e.text != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.text,
                                    "media_sourcing_spec.titles[].text",
                                    i.id,
                                  )
                                : void 0,
                            text_gen_input_text:
                              (s = e.text_gen_input_text) != null ? s : void 0,
                            text_gen_original_text:
                              (u = e.text_gen_original_text) != null
                                ? u
                                : void 0,
                            uuid: (c = e.uuid) != null ? c : void 0,
                          };
                        }),
                  ),
                  videos:
                    ($o = t.media_sourcing_spec) != null && $o.videos
                      ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          (Po = t.media_sourcing_spec) == null ||
                            (Po = Po.videos) == null
                            ? void 0
                            : Po.map(function (e) {
                                var t,
                                  n,
                                  a,
                                  l,
                                  u,
                                  c,
                                  d,
                                  m,
                                  p,
                                  _,
                                  f,
                                  g,
                                  h,
                                  y,
                                  C,
                                  b,
                                  v = e.creative_audience_pairing_persona,
                                  S = babelHelpers.objectWithoutPropertiesLoose(
                                    e,
                                    s,
                                  );
                                return babelHelpers.extends({}, S, {
                                  creation_source:
                                    S.creation_source != null
                                      ? S.creation_source
                                      : void 0,
                                  creative_audience_pairing_persona:
                                    v != null
                                      ? {
                                          age_max:
                                            (t = v.age_max) != null
                                              ? t
                                              : void 0,
                                          age_min:
                                            (n = v.age_min) != null
                                              ? n
                                              : void 0,
                                          genders: r("filterNulls")(
                                            v.genders.map(function (e) {
                                              var t;
                                              return (t = o("enumUtils").coerce(
                                                e,
                                                r("AdsTargetingGender"),
                                              )) != null
                                                ? t
                                                : null;
                                            }),
                                          ),
                                        }
                                      : void 0,
                                  destination_customizations:
                                    (a = S.destination_customizations) == null
                                      ? void 0
                                      : a.map(function (e) {
                                          return {
                                            display_url:
                                              e.display_url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.display_url,
                                                    "media_sourcing_spec.videos[].destination_customizations[].display_url",
                                                    i.id,
                                                  )
                                                : void 0,
                                            url:
                                              e.url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.url,
                                                    "media_sourcing_spec.videos[].destination_customizations[].url",
                                                    i.id,
                                                  )
                                                : "",
                                          };
                                        }),
                                  opt_in_status: o(
                                    "AdsCreativeFlexSpecUtils",
                                  ).convertSpecStringToRelatedMediaSelection(
                                    S.opt_in_status,
                                  ),
                                  organic_media_source:
                                    S.organic_media_source != null
                                      ? {
                                          original_ig_account_fbid:
                                            (l =
                                              S.organic_media_source
                                                .original_ig_account_fbid) !=
                                            null
                                              ? l
                                              : void 0,
                                          original_ig_media_fbid:
                                            (u =
                                              S.organic_media_source
                                                .original_ig_media_fbid) != null
                                              ? u
                                              : void 0,
                                          original_ig_media_permalink:
                                            (c =
                                              S.organic_media_source
                                                .original_ig_media_permalink) !=
                                            null
                                              ? c
                                              : void 0,
                                        }
                                      : void 0,
                                  original_video_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeNumberToString(
                                    S.original_video_id,
                                  ),
                                  placement_customizations:
                                    (d = o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (m = S.placement_customizations) == null
                                        ? void 0
                                        : m.map(function (e) {
                                            var t, n;
                                            return babelHelpers.extends({}, e, {
                                              placement_exclusions:
                                                (t = o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  e.placement_exclusions,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              publisher_platform:
                                                (n = r("getJSEnumSafe")(
                                                  r("AdsAPIPublisherPlatform"),
                                                  e.publisher_platform,
                                                )) != null
                                                  ? n
                                                  : void 0,
                                            });
                                          }),
                                    )) != null
                                      ? d
                                      : void 0,
                                  retriever_sources:
                                    (p =
                                      (_ = S.retriever_sources) == null
                                        ? void 0
                                        : _.map(
                                            o("AdsCreativeFlexSpecUtils")
                                              .convertSpecStringToRetrieverSource,
                                          ).filter(Boolean)) != null
                                      ? p
                                      : void 0,
                                  source:
                                    (f = r("getJSEnumSafe")(
                                      r("CreativeMultiMediaSource"),
                                      S == null ? void 0 : S.source,
                                    )) != null
                                      ? f
                                      : void 0,
                                  text_customizations: {
                                    bodies: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (g = S.text_customizations) == null ||
                                        (g = g.bodies) == null
                                        ? void 0
                                        : g.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.videos[].text_customizations.bodies[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    descriptions: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (h = S.text_customizations) == null ||
                                        (h = h.descriptions) == null
                                        ? void 0
                                        : h.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.videos[].text_customizations.descriptions[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    titles: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (y = S.text_customizations) == null ||
                                        (y = y.titles) == null
                                        ? void 0
                                        : y.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.videos[].text_customizations.titles[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                  },
                                  thumbnail_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeNumberToString(S.thumbnail_id),
                                  thumbnail_source:
                                    (C = r("getJSEnumSafe")(
                                      r("VideoThumbnailSource"),
                                      S.thumbnail_source,
                                    )) != null
                                      ? C
                                      : void 0,
                                  thumbnail_url:
                                    (b = S.thumbnail_url) != null ? b : void 0,
                                  video_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    S.video_id,
                                    "media_sourcing_spec.videos[].video_id",
                                    i.id,
                                  ),
                                });
                              }),
                        )
                      : void 0,
                }),
              )
            : void 0,
          media_type:
            (No = r("getJSEnumSafe")(
              r("AdCreativeMediaType"),
              t == null ? void 0 : t.media_type,
            )) != null
              ? No
              : void 0,
          mockup_id: (Mo = t.mockup_id) != null ? Mo : void 0,
          object_id: (wo = t.object_id) != null ? wo : void 0,
          object_story_id: (Ao = t.object_story_id) != null ? Ao : void 0,
          object_story_spec:
            (Fo = t.object_story_specification) != null ? Fo : void 0,
          object_type:
            (Oo = r("getJSEnumSafe")(r("ApiAdObjectTypes"), t.object_type)) !=
            null
              ? Oo
              : void 0,
          object_url: (Bo = t.object_url) != null ? Bo : void 0,
          omnichannel_link_spec:
            (Wo = t.omnichannel_link_spec) != null &&
            Wo.omnichannel_link_spec_ad_object_spec
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  (qo = t.omnichannel_link_spec) == null
                    ? void 0
                    : qo.omnichannel_link_spec_ad_object_spec,
                )
              : void 0,
          page_welcome_message:
            (Uo = t.page_welcome_message) != null ? Uo : void 0,
          page_whatsapp_number_id:
            (Vo = t.page_whatsapp_number_id) != null ? Vo : void 0,
          place_page_set_id:
            (Ho =
              (Go = t.dynamic_local_ad_creative_attachment) == null
                ? void 0
                : Go.place_page_set_id) != null
              ? Ho
              : void 0,
          platform_customizations: t.platform_customizations
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                instagram:
                  (zo = t.platform_customizations) != null && zo.instagram
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        caption_ids:
                          (jo = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (Ko = t.platform_customizations) == null
                              ? void 0
                              : Ko.instagram.caption_ids,
                          )) != null
                            ? jo
                            : void 0,
                        image_crops:
                          (Qo = t.platform_customizations) != null &&
                          (Qo = Qo.instagram) != null &&
                          (Qo = Qo.image_crops) != null &&
                          Qo.ad_image_crops_per_dimension_spec
                            ? o("TypeCoercionUtils").coerceObjectToUndefined(
                                t.platform_customizations.instagram.image_crops
                                  .ad_image_crops_per_dimension_spec,
                              )
                            : void 0,
                        image_hash:
                          (Xo =
                            (Yo = t.platform_customizations) == null ||
                            (Yo = Yo.instagram) == null
                              ? void 0
                              : Yo.image_hash) != null
                            ? Xo
                            : void 0,
                        image_url:
                          (Jo =
                            (Zo = t.platform_customizations) == null ||
                            (Zo = Zo.instagram) == null
                              ? void 0
                              : Zo.image_url) != null
                            ? Jo
                            : void 0,
                        thumbnail_source: u,
                        video_id:
                          (ea =
                            (ta = t.platform_customizations) == null ||
                            (ta = ta.instagram) == null
                              ? void 0
                              : ta.video_id) != null
                            ? ea
                            : void 0,
                      })
                    : void 0,
              })
            : void 0,
          playable_asset_id: (na = t.playable_asset_id) != null ? na : void 0,
          portrait_customizations: t.portrait_customizations_attachment
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                carousel_delivery_mode:
                  (ra = o("enumUtils").coerceFromKey(
                    (oa = t.portrait_customizations_attachment) == null
                      ? void 0
                      : oa.carousel_delivery_mode,
                    r("ApiCarouselDeliveryMode"),
                  )) != null
                    ? ra
                    : void 0,
                specifications: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (aa = t.portrait_customizations_attachment) == null
                    ? void 0
                    : aa.specifications.map(function (e) {
                        var t, n, r, o;
                        return {
                          background_color: e.background_color
                            ? {
                                bottom_color:
                                  (t =
                                    (n = e.background_color) == null
                                      ? void 0
                                      : n.bottom_color) != null
                                    ? t
                                    : void 0,
                                top_color:
                                  (r =
                                    (o = e.background_color) == null
                                      ? void 0
                                      : o.top_color) != null
                                    ? r
                                    : void 0,
                              }
                            : void 0,
                        };
                      }),
                ),
              })
            : void 0,
          product_data: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t != null && t.product_data
              ? t.product_data.map(function (e) {
                  var t;
                  return {
                    product_decision: o(
                      "XFBCTMSMCProductDataDecisionUtils.facebook",
                    ).toJSEnum(e.product_decision),
                    product_id: (t = e.product_id) != null ? t : "0",
                    product_source: o(
                      "XFBCTMSMCProductDataSourceUtils.facebook",
                    ).toJSEnum(e.product_source),
                  };
                })
              : [],
          ),
          product_set_id: (ia = t.product_set_id) != null ? ia : void 0,
          product_suggestion_settings: t.product_suggestion_settings
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                enabled:
                  (la =
                    (sa = t.product_suggestion_settings) == null
                      ? void 0
                      : sa.enabled) != null
                    ? la
                    : void 0,
              })
            : void 0,
          recommender_settings: Si
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                preferred_events: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  Si.preferred_events.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      o("enumUtils").coerceFromKey(
                        e,
                        r("AdsPixelConversionEventsEnum"),
                      ),
                      "dynamic_ad_creative_attachment.recommender_settings.preferred_events[].event",
                      i.id,
                    );
                  }),
                ),
                product_sales_channel:
                  (ua = Si.product_sales_channel) != null ? ua : void 0,
              })
            : void 0,
          shop_spec: t.shop_spec
            ? {
                collection_id:
                  (ca =
                    (da = t.shop_spec) == null ? void 0 : da.collection_id) !=
                  null
                    ? ca
                    : void 0,
                landing_view:
                  (ma = r("getJSEnumSafe")(
                    r("AdsAPIAdCreativeShopSpecLandingViews"),
                    (pa = t.shop_spec) == null ? void 0 : pa.landing_view,
                  )) != null
                    ? ma
                    : void 0,
                shop_id:
                  (_a = (fa = t.shop_spec) == null ? void 0 : fa.shop_id) !=
                  null
                    ? _a
                    : void 0,
              }
            : void 0,
          source_facebook_post_id:
            (ga = t.source_facebook_post_id) != null ? ga : void 0,
          source_instagram_media_id:
            (ha = t.source_instagram_media_id) != null ? ha : void 0,
          template_url:
            (ya =
              (Ca = t.dynamic_ad_creative_attachment) == null
                ? void 0
                : Ca.template_url) != null
              ? ya
              : void 0,
          template_url_spec: Ri
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                android: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (ba = (va = Ri.android) == null ? void 0 : va.app_name) !=
                    null
                      ? ba
                      : void 0,
                  package:
                    (Sa = (Ra = Ri.android) == null ? void 0 : Ra.package) !=
                    null
                      ? Sa
                      : void 0,
                  url:
                    (La = (Ea = Ri.android) == null ? void 0 : Ea.url) != null
                      ? La
                      : void 0,
                }),
                config: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_id:
                    (ka = (Ia = Ri.config) == null ? void 0 : Ia.app_id) != null
                      ? ka
                      : void 0,
                  enable_third_party_deeplink:
                    (Ta =
                      (Da = Ri.config) == null
                        ? void 0
                        : Da.enable_third_party_deeplink) != null
                      ? Ta
                      : void 0,
                }),
                ios: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (xa = ($a = Ri.ios) == null ? void 0 : $a.app_name) != null
                      ? xa
                      : void 0,
                  app_store_id:
                    (Pa = (Na = Ri.ios) == null ? void 0 : Na.app_store_id) !=
                    null
                      ? Pa
                      : void 0,
                  url:
                    (Ma = (wa = Ri.ios) == null ? void 0 : wa.url) != null
                      ? Ma
                      : void 0,
                }),
                ipad: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (Aa = (Fa = Ri.ipad) == null ? void 0 : Fa.app_name) != null
                      ? Aa
                      : void 0,
                  app_store_id:
                    (Oa = (Ba = Ri.ipad) == null ? void 0 : Ba.app_store_id) !=
                    null
                      ? Oa
                      : void 0,
                  url:
                    (Wa = (qa = Ri.ipad) == null ? void 0 : qa.url) != null
                      ? Wa
                      : void 0,
                }),
                iphone: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (Ua = (Va = Ri.iphone) == null ? void 0 : Va.app_name) !=
                    null
                      ? Ua
                      : void 0,
                  app_store_id:
                    (Ha =
                      (Ga = Ri.iphone) == null ? void 0 : Ga.app_store_id) !=
                    null
                      ? Ha
                      : void 0,
                  url:
                    (za = (ja = Ri.iphone) == null ? void 0 : ja.url) != null
                      ? za
                      : void 0,
                }),
                web: o("TypeCoercionUtils").coerceObjectToUndefined({
                  should_fallback:
                    (Ka =
                      (Qa = Ri.web) == null ? void 0 : Qa.should_fallback) !=
                    null
                      ? Ka
                      : void 0,
                  url:
                    (Xa = (Ya = Ri.web) == null ? void 0 : Ya.url) != null
                      ? Xa
                      : void 0,
                }),
                windows_phone: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_id:
                    (Ja =
                      (Za = Ri.windows_phone) == null ? void 0 : Za.app_id) !=
                    null
                      ? Ja
                      : void 0,
                  app_name:
                    (ei =
                      (ti = Ri.windows_phone) == null ? void 0 : ti.app_name) !=
                    null
                      ? ei
                      : void 0,
                  url:
                    (ni = (ri = Ri.windows_phone) == null ? void 0 : ri.url) !=
                    null
                      ? ni
                      : void 0,
                }),
              })
            : void 0,
          text_type: void 0,
          threads_user_id: (oi = t.threads_user_id) != null ? oi : void 0,
          thumbnail_height: void 0,
          thumbnail_url: (ai = t.thumbnail_url) != null ? ai : void 0,
          thumbnail_width: void 0,
          title: (ii = t.title_content) != null ? ii : void 0,
          uca_draft_version: (li = t.uca_draft_version) != null ? li : void 0,
          url_tags: (si = t.url_tags) != null ? si : void 0,
          use_page_actor_override:
            (ui =
              (ci = t.mobile_app_install_attachment) == null
                ? void 0
                : ci.use_page_actor_override) != null
              ? ui
              : !1,
          video_id: (di = t.video_id) != null ? di : void 0,
          wamo_whatsapp_identity_spec: t.wamo_whatsapp_identity_attachment
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                wamo_whatsapp_identity_id:
                  (mi =
                    (pi = t.wamo_whatsapp_identity_attachment) == null
                      ? void 0
                      : pi.wamo_whatsapp_identity_id) != null
                    ? mi
                    : void 0,
              })
            : void 0,
          whats_app_business_asset_id:
            (_i = t.whats_app_business_asset_id) != null ? _i : void 0,
          whatsapp_business_phone_number_id:
            (fi = t.whatsapp_business_phone_number_id) != null ? fi : void 0,
          whatsapp_business_profile_id:
            (gi = t.whatsapp_business_profile_id) != null ? gi : void 0,
          whatsapp_channel_spec: t.whatsapp_channel_attachment
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                channel_id:
                  (hi =
                    (yi = t.whatsapp_channel_attachment) == null
                      ? void 0
                      : yi.channel_id) != null
                    ? hi
                    : void 0,
                channel_url:
                  (Ci =
                    (bi = t.whatsapp_channel_attachment) == null
                      ? void 0
                      : bi.channel_url) != null
                    ? Ci
                    : void 0,
              })
            : void 0,
          whatsapp_mm_business_phone_number_id:
            (vi = t.whatsapp_mm_business_phone_number_id) != null ? vi : void 0,
        }
      );
    }
    l.coerceGraphQLSpecToGraphAPI = _;
  },
  98,
);
