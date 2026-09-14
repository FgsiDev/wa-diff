__d(
  "AdsMetadataWebsiteMediaUtils",
  ["gkx", "immutable", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
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
        E;
      return {
        image_url: e.image_url,
        image_hash: e.image_hash,
        text: null,
        description: null,
        image_height: e.image_height,
        image_width: e.image_width,
        is_og_image: e.is_og_image,
        image_sources: e.image_sources,
        is_immersive_product: (t = e.is_immersive_product) != null ? t : null,
        is_human_and_product: (n = e.is_human_and_product) != null ? n : null,
        is_human_and_service: (r = e.is_human_and_service) != null ? r : null,
        is_poster: (o = e.is_poster) != null ? o : null,
        is_photo_collage: (a = e.is_photo_collage) != null ? a : null,
        is_landscape: (i = e.is_landscape) != null ? i : null,
        is_illustration: (l = e.is_illustration) != null ? l : null,
        is_text_wall: (s = e.is_text_wall) != null ? s : null,
        is_icon: (u = e.is_icon) != null ? u : null,
        is_logo: (c = e.is_logo) != null ? c : null,
        logo_icon_detection:
          (d = e.logo_icon_detection) != null
            ? d
            : e.is_logo === !0 || e.is_icon === !0
              ? !0
              : e.is_logo == null && e.is_icon == null
                ? null
                : !1,
        background_cleanliness:
          (m =
            (p = e.background_cleanliness) != null ? p : e.background_clean) !=
          null
            ? m
            : null,
        user_sentiment: (_ = e.user_sentiment) != null ? _ : null,
        product_focus:
          (f = (g = e.product_focus) != null ? g : e.is_product_focus) != null
            ? f
            : null,
        background_color: (h = e.background_color) != null ? h : null,
        human_face_detection:
          (y = (C = e.human_face_detection) != null ? C : e.has_human_face) !=
          null
            ? y
            : null,
        text_heavy: (b = e.text_heavy) != null ? b : null,
        image_blurry: (v = e.image_blurry) != null ? v : null,
        cluster_index: (S = e.cluster_index) != null ? S : null,
        image_phash: (R = e.image_phash) != null ? R : null,
        image_asset_fbid: (L = e.image_asset_fbid) != null ? L : null,
        is_guardrail_pass: (E = e.is_guardrail_pass) != null ? E : null,
      };
    }
    function s(e, t) {
      if (e == null || t == null) return !1;
      try {
        var n = new URL(e),
          r = new URL(t);
        return n.pathname === r.pathname;
      } catch (e) {
        return !1;
      }
    }
    function u(e) {
      var t =
        e == null
          ? void 0
          : e.filter(function (e) {
              var t =
                  e == null || e.get == null ? void 0 : e.get("image_sources"),
                n = t instanceof o("immutable").List ? t.get(0) : null,
                r = typeof n == "string" ? n : null;
              return r != null ? d(r) : !0;
            });
      return t;
    }
    function c(e) {
      var t = e.filter(function (e) {
        return d(e.image_sources[0]);
      });
      return t;
    }
    function d(e) {
      var t = r("justknobx")._("837");
      return !(
        (!t && e === "SHARE_SCRAPER") ||
        e === "SITELINK" ||
        e === "SITELINK_CATALOG" ||
        e === "SITELINK_GENAI"
      );
    }
    function m(e) {
      var t = e.exposure,
        n = e.fromExistingPostFlow,
        o = e.isCatalogEligible;
      if (r("gkx")("12472") || n) return !1;
      if (o === !0)
        return t === "expose" ? r("gkx")("19024") : r("gkx")("19111");
      var a = t === "expose" ? r("gkx")("22841") : r("gkx")("21512");
      return a || r("gkx")("24068");
    }
    ((l.buildWebsiteMediaObjectFromGraphQL = e),
      (l.checkUrlsHaveSameBaseImage = s),
      (l.getValidMediaForSummary = u),
      (l.getValidMediaForCreativeSetup = c),
      (l.isEligibleForCombinedWebsiteHighlightsExperience = m));
  },
  98,
);
