__d(
  "AdsCreativeGenAIVideoGenLogger",
  [
    "AdsCreativeGenAIEligibilityUtils",
    "AdsCreativeVideoGenPortfolioAdexUtils",
    "AdsInterfacesLogger",
    "AdsManagerQPLUserFlowLogger",
    "ExecutionEnvironment",
    "QPLUserFlow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "ads_gen_ai__video_gen_",
      u = s + "funnel_stage",
      c = new Set(),
      d = new Map(),
      m = !1,
      p = 0,
      _ = {
        concept_card_fully_loaded_impression: "template_preview",
        eligibility_impression: "eligibility",
        enhance_click: "consideration_click",
        generate_videos_button_click: "consideration_click",
        high_res_preview_impression: "high_res_preview",
        l1_eligible: "l1",
        low_res_preview_impression: "low_res_preview",
        media_picker_step_eligible: "media_picker",
        modal_close: "exit",
        modal_continue: "exit",
        modal_open: "landing_on_video",
        recipe_card_video_load: "template_preview",
        video_gen_generate_click: "consideration_click",
      },
      f = [
        "ad_account_id",
        "adgroup_id",
        "is_duplicated_object",
        "object_creation_source",
        "source",
        "view_surface",
        "www_request_id",
      ],
      g = ["modal_open", "media_modal_continue"],
      h = [
        "modal_continue",
        "modal_close",
        "partial_preview_card_1_impression",
        "partial_preview_card_2_impression",
        "partial_preview_card_3_impression",
        "modal_save",
        "partial_preview_card_timeout",
      ],
      y = new Set(["partial_preview_card_timeout"]),
      C = new Set(["generation_result"]);
    function b() {
      return {
        grab_and_go_treatment: o(
          "AdsCreativeGenAIEligibilityUtils",
        ).getGrabAndGoTreatment(!0),
        multi_scene_flexible_infra_treatment: o(
          "AdsCreativeGenAIEligibilityUtils",
        ).isFlexibleInfraEnabled(!0)
          ? 1
          : 0,
        portfolio_adex_round_3_treatment: o(
          "AdsCreativeGenAIEligibilityUtils",
        ).getPortfolioAdexRound3QETreatment(!0),
      };
    }
    function v(e, t) {
      return e * 1e3 + t;
    }
    function S(e) {
      d.forEach(function (t) {
        t.forEach(function (t) {
          r("QPLUserFlow").addPoint(r("qpl")._(440809023, "1449"), e, {
            instanceKey: t,
          });
        });
      });
    }
    function R() {
      ((p += 1), S("window_blur_" + String(p)));
    }
    function L() {
      ((p += 1), S("window_focus_" + String(p)));
    }
    function E() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        if (m) return;
        (window.addEventListener("blur", R),
          window.addEventListener("focus", L),
          (m = !0));
      }
    }
    function k(e, t) {
      var n = b(),
        a = w(t, null),
        i = h.map(function (t, n) {
          return v(e, n);
        });
      (d.set(e, new Set(i)),
        i.forEach(function (e) {
          o("AdsManagerQPLUserFlowLogger").start(
            r("qpl")._(440809023, "1449"),
            {
              instanceKey: e,
              annotations: {
                bool: a.bool,
                string: a.string,
                int: babelHelpers.extends({}, n, { instance_key: e }),
              },
            },
          );
        }),
        E());
    }
    function I(e, t) {
      g.forEach(function (n, o) {
        var a,
          i = v(o, e);
        (y.has(t)
          ? r("QPLUserFlow").endFailure(r("qpl")._(440809023, "1449"), t, {
              instanceKey: i,
            })
          : r("QPLUserFlow").endSuccess(r("qpl")._(440809023, "1449"), {
              instanceKey: i,
            }),
          (a = d.get(o)) == null || a.delete(i));
      });
    }
    function T(e, t) {
      g.forEach(function (n, o) {
        h.forEach(function (n, a) {
          r("QPLUserFlow").addPoint(r("qpl")._(440809023, "1449"), e, {
            instanceKey: v(o, a),
            data: t,
          });
        });
      });
    }
    function D(e, t) {
      T(e, t);
    }
    function x(e, t) {
      if (!(e.eventName.indexOf(s) < 0)) {
        var n = e.eventName.replace(s, "");
        if (!C.has(n)) {
          var r = w(e, t),
            o = g.indexOf(n);
          if (o >= 0) {
            (k(o, e), T(n, r));
            return;
          }
          var a = h.indexOf(n);
          if (a >= 0) {
            (T(n, r), I(a, n));
            return;
          }
          T(n, r);
        }
      }
    }
    function $(e) {
      var t,
        n = (t = e.data) == null ? void 0 : t.metadata;
      if (typeof n != "string") return {};
      try {
        var r = JSON.parse(n);
        return r != null && typeof r == "object"
          ? babelHelpers.extends({}, r)
          : {};
      } catch (e) {
        return {};
      }
    }
    function P(e) {
      var t;
      return (t = o("AdsCreativeVideoGenPortfolioAdexUtils").getRecipeGroupKey(
        e,
      )) != null
        ? t
        : String(e);
    }
    function N(e) {
      if (
        typeof e.adopted_video_count != "number" ||
        e.adopted_video_count <= 0
      )
        return [];
      var t = Array.isArray(e.selected_variant_ids)
          ? e.selected_variant_ids
          : [],
        n = Array.isArray(e.selected_variant_trigger_types)
          ? e.selected_variant_trigger_types
          : [],
        r = new Map();
      return (
        t.forEach(function (e, t) {
          if (typeof e == "number") {
            var o = P(e),
              a = typeof n[t] == "string" ? n[t] : "unknown",
              i = r.get(o);
            i == null
              ? r.set(o, { triggerTypes: new Set([a]), variant: e })
              : i.triggerTypes.add(a);
          }
        }),
        Array.from(r.entries()).map(function (e) {
          var t = e[0],
            n = e[1],
            r = n.triggerTypes,
            o = n.variant;
          return {
            action: "adopt",
            extra: {
              recipe_id: t,
              trigger_type: r.size === 1 ? Array.from(r)[0] : "mixed",
              variant_id: o,
            },
            stage: "recipe_adoption",
          };
        })
      );
    }
    function M(e, t) {
      var n = e.startsWith(s) ? e.slice(s.length) : e;
      if (n === "modal_save")
        return [{ action: "save", stage: "save" }].concat(
          typeof t.adopted_video_count == "number" && t.adopted_video_count > 0
            ? [{ action: "adopt", stage: "adoption" }]
            : [],
          N(t),
        );
      var r = _[n];
      if (
        (/^static_concept_card_\d+_impression$/.test(n)
          ? (r = "template_preview")
          : /^partial_preview_card_\d+_impression$/.test(n)
            ? (r = "partial_preview")
            : n === "video_variation_preview_impression" &&
              (r =
                t.is_enhanced === !1 ? "low_res_preview" : "high_res_preview"),
        r == null)
      )
        return [];
      var o =
          n === "enhance_click"
            ? "enhance"
            : n === "modal_continue"
              ? "continue"
              : n === "modal_close"
                ? "close"
                : r === "consideration_click"
                  ? "generate"
                  : null,
        a = t.variant_id;
      return [
        {
          action: o,
          extra: typeof a == "number" ? { recipe_id: P(a) } : void 0,
          stage: r,
        },
      ];
    }
    function w(e, t) {
      var n,
        r,
        o = babelHelpers.extends({}, e.data, $(e)),
        a = babelHelpers.extends(
          {},
          (n = t == null ? void 0 : t.bool) != null ? n : {},
        ),
        i = babelHelpers.extends(
          {},
          (r = t == null ? void 0 : t.string) != null ? r : {},
        );
      f.forEach(function (e) {
        var t = o[e];
        typeof t == "string" && (i[e] = t);
      });
      var l = o.is_duplicated_object;
      (typeof l == "boolean" && (a.is_duplicated_object = l),
        typeof o.is_pac_adgroup == "boolean" &&
          (a.is_pac_adgroup = o.is_pac_adgroup));
      var s = o.cache_hit_stage;
      typeof s == "string" &&
        ((i.cache_hit_stage = s),
        (i.asset_cache_source = s.startsWith("existing_")
          ? "existing_spec"
          : "account"));
      var u =
        typeof o.pregen_cache_outcome == "string"
          ? o.pregen_cache_outcome
          : o.pregen_cache_hit === !0
            ? "hit_unspecified"
            : o.pregen_cache_hit === !1
              ? "miss"
              : null;
      return (
        u != null &&
          ((i.pregen_cache_outcome = u), (i.generation_origin = "pregen")),
        babelHelpers.extends({}, t != null ? t : {}, { bool: a, string: i })
      );
    }
    function A(e) {
      if (e.eventName !== u) {
        var t = $(e),
          n = M(e.eventName, t);
        n.forEach(function (n) {
          var o,
            a = n.action,
            i = n.extra,
            l = n.stage,
            s = JSON.stringify(
              babelHelpers.extends({}, t, i, { action: a, funnel_stage: l }),
            );
          r("AdsInterfacesLogger").log({
            eventName: u,
            data: babelHelpers.extends(
              {},
              e.data,
              ((o = {}), (o.metadata = s), o),
            ),
          });
        });
      }
    }
    var F = {
      log: function (t, n) {
        (r("AdsInterfacesLogger").log(t), A(t), x(t, n));
      },
      logOnce: function (t, n) {
        (r("AdsInterfacesLogger").logOnce(t), A(t));
        var e = JSON.stringify(t);
        c.has(e) || (c.add(e), x(t, n));
      },
      logPEOnly: function (t) {
        r("AdsInterfacesLogger").logOnce(t);
      },
    };
    ((l.addVideoGenQPLPoint = D), (l.AdsCreativeGenAIVideoGenLogger = F));
  },
  98,
);
