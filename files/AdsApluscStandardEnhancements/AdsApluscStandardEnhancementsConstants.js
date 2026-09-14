__d(
  "AdsApluscStandardEnhancementsConstants",
  [
    "fbt",
    "AdAccountRecommendationType",
    "AdsAPICreativeFeatureName",
    "AdsAPlusCVideoUncropUtils",
    "GeoLink.react",
    "GeoText.react",
    "GeoTextList.react",
    "GeoTextListItem.react",
    "enumUtils",
    "filterNulls",
    "intlList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c =
        "https://www.facebook.com/legal/terms/ad_creative_generative_ai_terms",
      d = new Map([
        ["image_templates", "imageTemplate"],
        ["text_optimizations", "textOptimization"],
        ["video_auto_crop", "videoAutoCrop"],
        ["image_touchups", "imageTouchup"],
        ["pac_relaxation", "pacRelaxationAPlusC"],
        ["video_uncrop", "videoUncrop"],
      ]),
      m = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"You could get 3\\u0025 lower cost per result with {number of A+C enhancements} more Advantage+ creative enhancements","_1":"You could get 3\\u0025 lower cost per result with {number of A+C enhancements} more Advantage+ creative enhancement"}',
          [s._plural(t), s._param("number of A+C enhancements", t)],
        );
      },
      p = 842,
      _ = s._(/*BTDS*/ "Available enhancements"),
      f = s._(/*BTDS*/ "View terms"),
      g = function () {
        return s._(
          /*BTDS*/ "{=m0} We'll crop and expand media, and animate text. {learn more link}",
          [
            s._param(
              "learn more link",
              u.jsx("span", {
                children: u.jsx(r("GeoLink.react"), {
                  href: c,
                  target: "_blank",
                  children: f,
                }),
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("strong", { children: s._(/*BTDS*/ "Visual touch-ups:") }),
            ),
          ],
        );
      },
      h = function () {
        return s._(
          /*BTDS*/ "{=m0} We'll show any text you provide as primary text, headline or description. {learn more link}",
          [
            s._param(
              "learn more link",
              u.jsx("span", {
                children: u.jsx(r("GeoLink.react"), {
                  href: c,
                  target: "_blank",
                  children: f,
                }),
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("strong", { children: s._(/*BTDS*/ "Text improvements:") }),
            ),
          ],
        );
      },
      y = function () {
        return s._(
          /*BTDS*/ "{=m0} We'll add text options as overlays on top of your image. {learn more link}",
          [
            s._param(
              "learn more link",
              u.jsx("span", {
                children: u.jsx(r("GeoLink.react"), {
                  href: c,
                  target: "_blank",
                  children: f,
                }),
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("strong", { children: s._(/*BTDS*/ "Add overlays:") }),
            ),
          ],
        );
      },
      C = function () {
        return s._(
          /*BTDS*/ "{=m0} We'll optimize your media format across placements. {learn more link}",
          [
            s._param(
              "learn more link",
              u.jsx("span", {
                children: u.jsx(r("GeoLink.react"), {
                  href: c,
                  target: "_blank",
                  children: f,
                }),
              }),
            ),
            s._implicitParam(
              "=m0",
              u.jsx("strong", { children: s._(/*BTDS*/ "Flexible media:") }),
            ),
          ],
        );
      };
    function b(e) {
      return e == null
        ? !1
        : e.some(function (e) {
            return e === "video_auto_crop" || e === "video_uncrop";
          }) === !0;
    }
    var v = function (t, n) {
        if (t == null) return null;
        var e = [];
        return (
          t.includes("aplusc_visual_touchups") &&
            (n === !0 &&
            o("AdsAPlusCVideoUncropUtils").passVideoUncropUnificationGk()
              ? e.push(s._(/*BTDS*/ "Video touch-ups"))
              : e.push(s._(/*BTDS*/ "Visual touch-ups"))),
          t.includes("aplusc_text_improvements") &&
            e.push(s._(/*BTDS*/ "Text improvements")),
          t.includes("aplusc_add_overlays") &&
            e.push(s._(/*BTDS*/ "Add overlays")),
          t.includes("aplusc_flexible_media") &&
            e.push(s._(/*BTDS*/ "Flexible media")),
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(r("GeoText.react"), {
                children: s._(
                  /*BTDS*/ "We'll deliver different creative variations of your ad when we predict it could help improve performance with:",
                ),
              }),
              u.jsx(r("GeoTextList.react"), {
                children: e.map(function (e, t) {
                  return u.jsx(r("GeoTextListItem.react"), { children: e }, t);
                }),
              }),
            ],
          })
        );
      },
      S = function (t, n) {
        var e = [];
        if (t.includes("aplusc_visual_touchups")) {
          var a =
            (n == null
              ? void 0
              : n.some(function (e) {
                  return e === "video_auto_crop" || e === "video_uncrop";
                })) === !0;
          a === !0 &&
          o("AdsAPlusCVideoUncropUtils").passVideoUncropUnificationGk()
            ? e.push(s._(/*BTDS*/ "video touch-ups"))
            : e.push(s._(/*BTDS*/ "visual touch-ups"));
        }
        return (
          t.includes("aplusc_text_improvements") &&
            e.push(s._(/*BTDS*/ "text improvements")),
          t.includes("aplusc_add_overlays") &&
            e.push(s._(/*BTDS*/ "add overlays")),
          t.includes("aplusc_flexible_media") &&
            e.push(s._(/*BTDS*/ "flexible media")),
          s._(
            /*BTDS*/ "We'll deliver different creative variations of your ad when we predict it could help improve performance with: {list of A+C enhancements}.",
            [s._param("list of A+C enhancements", r("intlList")(e))],
          )
        );
      };
    function R(e) {
      var t,
        n,
        a =
          (t =
            e == null ||
            (n = e.extra_data) == null ||
            (n = n.aplusc_mfr) == null
              ? void 0
              : n.recommendation_types) != null
            ? t
            : [];
      return a.map(function (e) {
        return o("enumUtils").assert(e, r("AdAccountRecommendationType"));
      });
    }
    function L(e) {
      var t,
        n,
        r =
          (t =
            e == null ||
            (n = e.extra_data) == null ||
            (n = n.aplusc_mfr) == null
              ? void 0
              : n.adgroup_idto_creative_feature_names) != null
            ? t
            : [];
      return r.flatMap(function (e) {
        var t;
        return (t = e == null ? void 0 : e.creative_feature_names) != null
          ? t
          : [];
      });
    }
    function E(e, t) {
      var n,
        a,
        i =
          (n =
            e == null ||
            (a = e.extra_data) == null ||
            (a = a.aplusc_mfr) == null
              ? void 0
              : a.adgroup_idto_creative_feature_names) != null
            ? n
            : [];
      return i
        .filter(function (e) {
          return e.adgroup_id === t;
        })
        .flatMap(function (e) {
          return r("filterNulls")(
            e.creative_feature_names.map(function (e) {
              var t = o("enumUtils").assert(e, r("AdsAPICreativeFeatureName"));
              return t === "video_uncrop" &&
                o("AdsAPlusCVideoUncropUtils").passVideoUncropUnificationGk()
                ? "videoAutoCrop"
                : d.get(t);
            }),
          );
        });
    }
    var k = 800,
      I = 1200,
      T = s._(/*BTDS*/ "Publish"),
      D = s._(/*BTDS*/ "Select one or more ads to continue."),
      x = s._(/*BTDS*/ "Save"),
      $ = s._(/*BTDS*/ "Cancel"),
      P = function (t) {
        return s._(/*BTDS*/ "Select {name}", [s._param("name", t)]);
      };
    ((l.CREATIVE_FEATURE_NAME_TO_CREATIVE_OPTIMIZATION_TOOL_PLUGIN_KEYS = d),
      (l.getSYDCardTitle = m),
      (l.PREVIEW_MODAL_HEIGHT = p),
      (l.POPOVER_MODAL_HEADER = _),
      (l.getVisualTouchupsPopoverHintText = g),
      (l.getTextImprovementsPopoverHintText = h),
      (l.getAddOverlaysPopoverHintText = y),
      (l.getFlexibleMediaPopoverHintText = C),
      (l.hasVideoCreativeFeatures = b),
      (l.getSYDCardBodyWithBulletPoints = v),
      (l.getSYDCardBody = S),
      (l.getRecommendationTypes = R),
      (l.getAllCreativeFeatureNames = L),
      (l.getPreviewTools = E),
      (l.RESOLUTION_FLOW_MODAL_HEIGHT = k),
      (l.RESOLUTION_FLOW_MODAL_WIDTH = I),
      (l.RESOLUTION_FLOW_CTA_BUTTON_LABEL = T),
      (l.RESOLUTION_FLOW_CTA_TOOLTIP = D),
      (l.PREVIEW_MODAL_PRIMARY_BUTTON_LABEL = x),
      (l.RESOLUTION_FLOW_CANCEL_BUTTON_LABEL = $),
      (l.getResolutionFLowSelectableRowLabel = P));
  },
  226,
);
