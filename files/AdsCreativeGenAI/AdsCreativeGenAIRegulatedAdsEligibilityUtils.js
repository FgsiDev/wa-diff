__d(
  "AdsCreativeGenAIRegulatedAdsEligibilityUtils",
  [
    "$InternalEnum",
    "AdsCreativeFeaturesUtils",
    "AdsRegulatedCategory",
    "AdsSAFRUtils",
    "ODS",
    "areEqual",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored([
        "IMAGE_UNCROP",
        "IMAGE_ANIMATION",
        "VIDEO_UNCROP",
        "VIDEO_FILTERING",
      ]),
      m = [(c = r("AdsRegulatedCategory")).HOUSING, c.EMPLOYMENT],
      p = [c.FINANCIAL_PRODUCTS_SERVICES, c.CREDIT],
      _ = [].concat(m, p),
      f =
        ((e = {}),
        (e[d.IMAGE_ANIMATION] = m),
        (e[d.VIDEO_UNCROP] = _),
        (e[d.VIDEO_FILTERING] = _),
        e),
      g = [d.VIDEO_UNCROP, d.VIDEO_FILTERING],
      h = [].concat(m, p);
    function y(e) {
      if (
        !e ||
        e.length === 0 ||
        (u || (u = r("areEqual")))(e, [r("AdsRegulatedCategory").NONE])
      )
        return "none";
      var t = Array.from(e),
        n = t.some(function (e) {
          return !h.includes(e);
        });
      if (n) return "other";
      var o = t.some(function (e) {
        return p.includes(e);
      });
      if (o) return "fps";
      var a = t.some(function (e) {
        return m.includes(e);
      });
      return a ? "he" : "unknown";
    }
    function C(e) {
      switch (e) {
        case d.IMAGE_UNCROP:
          return "image_uncrop";
        case d.IMAGE_ANIMATION:
          return "image_animation";
        case d.VIDEO_UNCROP:
          return "video_uncrop";
        case d.VIDEO_FILTERING:
          return "video_filtering";
      }
    }
    function b(e, t, n, r) {
      r === void 0 && (r = null);
      var a =
        r != null ? e + "." + n + "." + t + "." + r : e + "." + n + "." + t;
      e !== "unknown" &&
        (s || (s = o("ODS"))).bumpEntityKey(
          68,
          "regulated_genai_creatives_ui_eligibility",
          a,
        );
    }
    function v(e, t, n, a) {
      var i, l;
      if (
        (t === void 0 && (t = null),
        n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        !o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(e))
      )
        return !0;
      var s = t === d.IMAGE_ANIMATION && a && r("justknobx")._("849");
      if (r("justknobx")._("4143") && !s) return !1;
      var u = t != null ? C(t) : "unknown",
        c = y(e.special_ad_categories);
      b(u, c, "check");
      var p = t != null ? f[t] : m;
      s && (p = _);
      var g =
        (i =
          (l = e.special_ad_categories) == null
            ? void 0
            : l.every(function (e) {
                return p.includes(e);
              })) != null
          ? i
          : !1;
      if (!g) return (b(u, c, "blocked", "not_allowlisted_categories"), !1);
      if (s) return (b(u, c, "allowed"), !0);
      var h = S(t, e.special_ad_categories, n);
      return h ? (b(u, c, "allowed"), !0) : !1;
    }
    function S(e, t, n) {
      if (e && !g.includes(e)) return !0;
      var r = e != null ? C(e) : "unknown",
        a = y(t);
      return t &&
        o("AdsSAFRUtils").getHasFPSOrCreditCategory(Array.from(t)) &&
        !n
        ? (b(r, a, "blocked", "not_pao_advanced"), !1)
        : !0;
    }
    ((l.RegulatedAdsSupportedFeature = d),
      (l.getCategoryCombo = y),
      (l.isAdsRegulatedCategoryAllowlistedForGenAI = v));
  },
  98,
);
