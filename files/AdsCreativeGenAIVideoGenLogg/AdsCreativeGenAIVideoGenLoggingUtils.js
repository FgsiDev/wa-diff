__d(
  "AdsCreativeGenAIVideoGenLoggingUtils",
  [
    "$InternalEnum",
    "AdsCreativeGenAIEligibilityUtils",
    "AdsCreativeGenAILoggingUtils",
    "AdsCreativeGenAIVideoGenLogger",
    "AdsCreativeVideoGenAdoptablePreviewUtils",
    "AdsCreativeVideoGenPortfolioAdexUtils",
    "gkx",
    "performanceNow",
    "useAdsUnifiedMediaVariantMediaVisibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map(),
      u = new Map(),
      c = new Set(),
      d = "video_gen_preview",
      m = {
        client_height_px: null,
        is_scrollable: null,
        max_scroll_depth_pct: null,
        max_scroll_top_px: null,
        max_viewed_bottom_px: null,
        scroll_height_px: null,
      };
    function p(e) {
      if (e == null) return m;
      var t = e.clientHeight,
        n = e.maxScrollTop,
        r = e.maxViewedBottom,
        o = e.scrollHeight;
      return {
        client_height_px: Math.round(t),
        is_scrollable: o > t,
        max_scroll_depth_pct:
          o > 0 ? Math.min(100, Math.round((r / o) * 100)) : null,
        max_scroll_top_px: Math.round(n),
        max_viewed_bottom_px: Math.round(r),
        scroll_height_px: Math.round(o),
      };
    }
    function _(e, t) {
      return e == null || e === "" || t == null || t === ""
        ? null
        : o("AdsCreativeVideoGenPortfolioAdexUtils")
              .getRegeneratedEntIds(e)
              .includes(t)
          ? "template"
          : "automatic";
    }
    var f = n("$InternalEnum")({
      BUTTON_CLICK: "button_click",
      SUCCESS: "success",
    });
    function g(e) {
      if (e == null) return null;
      var t = new Set();
      for (var n of e) {
        var r =
          n === "AD_IMAGE"
            ? "ad_image"
            : n === "GENERATED_IMAGE"
              ? "generated_image"
              : null;
        r != null && t.add(r);
      }
      return t.size === 0 ? null : Array.from(t).sort().join(",");
    }
    function h(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_l1_sourcing",
        data:
          ((i = {}),
          (i.adgroup_id = e.id),
          (i.is_duplicated_object = t),
          (i.object_creation_source = t
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: n,
            l1_sourcing_timestamp: r,
            url: a,
          })),
          i),
      });
    }
    function y(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_progress_bar_99_dwell",
        data:
          ((c = {}),
          (c.adgroup_id = u),
          (c.source =
            s != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(s)
              : null),
          (c.www_request_id = l),
          (c.metadata = JSON.stringify({
            video_id: e,
            reached_cap: t,
            cap_dwell_ms: n,
            time_to_cap_ms: r,
            total_animation_ms: a,
            progress_at_completion: i,
          })),
          c),
      });
    }
    function C(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_generation_stage_dwell",
        data:
          ((s = {}),
          (s.adgroup_id = l),
          (s.source =
            i != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(i)
              : null),
          (s.www_request_id = a),
          (s.metadata = JSON.stringify({
            video_id: e,
            stage: t,
            dwell_ms: n,
            ceiling_dwell_ms: r,
          })),
          s),
      });
    }
    function b(e, t, n, r, a, i, l) {
      var s;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_media_picker_step_eligible",
        data:
          ((s = {}),
          (s.adgroup_id = e.adgroup.id),
          (s.is_duplicated_object = r),
          (s.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (s.www_request_id = n),
          (s.metadata = JSON.stringify({
            is_pac_adgroup: a,
            website_url: i,
            optimization_goal: l,
          })),
          s),
      });
    }
    function v(e, t, n, r, a, i, l, s) {
      var u;
      (l === void 0 && (l = null),
        s === void 0 && (s = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_media_picker_step_ineligible",
          data:
            ((u = {}),
            (u.adgroup_id = e.adgroup.id),
            (u.is_duplicated_object = n),
            (u.object_creation_source = n
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (u.source = o(
              "AdsCreativeGenAILoggingUtils",
            ).convertEntryPointForLogging(t)),
            (u.metadata = JSON.stringify({
              is_pac_adgroup: r,
              ineligibility_reason: a,
              image_ineligibility_reason: l,
              is_image_gen_eligible: s,
              optimization_goal: i,
            })),
            u),
        }));
    }
    function S(e, t, n, r, a, i, l) {
      var s;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_l1_ineligible",
        data:
          ((s = {}),
          (s.adgroup_id = e.adgroup.id),
          (s.is_duplicated_object = n),
          (s.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (s.metadata = JSON.stringify({
            is_pac_adgroup: r,
            ineligibility_reason: a,
            image_ineligibility_reason: i,
            optimization_goal: l,
          })),
          s),
      });
    }
    function R(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_l1_eligible",
        data:
          ((i = {}),
          (i.adgroup_id = e.adgroup.id),
          (i.is_duplicated_object = n),
          (i.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: r,
            optimization_goal: a,
          })),
          i),
      });
    }
    function L(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_media_modal_open",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (i.www_request_id = n),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            is_grab_and_go: o(
              "AdsCreativeVideoGenAdoptablePreviewUtils",
            ).isInGrabAndGo(),
            modal_open_timestamp: null,
            from_media_to_text: null,
          })),
          i),
      });
    }
    function E(t, n, a, i, l) {
      var c;
      (s.set(a, (e || (e = r("performanceNow")))()),
        u.delete(a),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_media_modal_continue",
          data:
            ((c = {}),
            (c.adgroup_id = t == null ? void 0 : t.adgroup.id),
            (c.is_duplicated_object = i),
            (c.object_creation_source = i
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (c.source = o(
              "AdsCreativeGenAILoggingUtils",
            ).convertEntryPointForLogging(n)),
            (c.www_request_id = a),
            (c.metadata = JSON.stringify({
              is_pac_adgroup: l,
              modal_open_timestamp: null,
              from_media_to_text: null,
            })),
            c),
        }));
    }
    function k(e, t, n, r, a, i, l) {
      var s;
      (i === void 0 && (i = null),
        l === void 0 && (l = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_text_modal_open",
          data:
            ((s = {}),
            (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
            (s.is_duplicated_object = r),
            (s.object_creation_source = r
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (s.source = o(
              "AdsCreativeGenAILoggingUtils",
            ).convertEntryPointForLogging(t)),
            (s.www_request_id = n),
            (s.metadata = JSON.stringify({
              is_pac_adgroup: a,
              modal_open_timestamp: i,
              from_media_to_text: l,
            })),
            s),
        }));
    }
    function I(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_text_modal_continue",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (i.www_request_id = n),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            modal_open_timestamp: null,
            from_media_to_text: null,
          })),
          i),
      });
    }
    function T(e, t, n, r, a, i, l, s, u, c, d, m, p, _) {
      var f;
      (l === void 0 && (l = null),
        s === void 0 && (s = null),
        u === void 0 && (u = null),
        c === void 0 && (c = null),
        d === void 0 && (d = null),
        m === void 0 && (m = !1),
        p === void 0 && (p = null),
        _ === void 0 && (_ = null));
      var g = o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(t),
        h = a ? "click_ad_duplicate" : "click_quick_create";
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_modal_open",
        data:
          ((f = {}),
          (f.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (f.is_duplicated_object = a),
          (f.object_creation_source = h),
          (f.source = g),
          (f.view_surface = n),
          (f.www_request_id = r),
          (f.metadata = JSON.stringify({
            is_pac_adgroup: i,
            is_existing_post_ad: m,
            is_grab_and_go: o(
              "AdsCreativeVideoGenAdoptablePreviewUtils",
            ).isInGrabAndGo(),
            modal_open_timestamp: l,
            from_media_to_video_gen: s,
            from_text_to_video_gen: u,
            destination_url: c,
            ad_image_identifier: d,
            pregen_cache_hit: p,
            cache_hit_stage: _,
          })),
          f),
      });
    }
    function D(e, t, n, r, a, i, l, s, u, c, d, m, p, _) {
      var f;
      (d === void 0 && (d = null),
        m === void 0 && (m = !1),
        p === void 0 && (p = null),
        _ === void 0 && (_ = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce(
          {
            eventName: "ads_gen_ai__video_gen_modal_continue",
            data:
              ((f = {}),
              (f.adgroup_id = e == null ? void 0 : e.adgroup.id),
              (f.is_duplicated_object = u),
              (f.object_creation_source = u
                ? "click_ad_duplicate"
                : "click_quick_create"),
              (f.www_request_id = r),
              (f.source = o(
                "AdsCreativeGenAILoggingUtils",
              ).convertEntryPointForLogging(t)),
              (f.view_surface = n),
              (f.metadata = JSON.stringify({
                is_pac_adgroup: c,
                is_existing_post_ad: m,
                sourced_asset_data:
                  a == null
                    ? void 0
                    : a.map(function (e) {
                        return {
                          isSelected: e.isSelected,
                          handle: e.nodeData.handle,
                        };
                      }),
                sourced_asset_count: a == null ? void 0 : a.length,
                ent_video_generation_status_id: s,
                ent_generated_videos: l,
                adopted_generated_videos: i,
                from_video_gen_to_next: d,
                cache_hit_stage: p,
                pregen_cache_hit: _,
              })),
              f),
          },
          { string: { view_surface: n } },
        ));
    }
    function x(e, t, n, r, a, i, l, s, u, c, d, m, _, f, g) {
      var h;
      (d === void 0 && (d = null),
        _ === void 0 && (_ = null),
        f === void 0 && (f = null),
        g === void 0 && (g = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce(
          {
            eventName: "ads_gen_ai__video_gen_modal_close",
            data:
              ((h = {}),
              (h.adgroup_id = e == null ? void 0 : e.adgroup.id),
              (h.is_duplicated_object = u),
              (h.object_creation_source = u
                ? "click_ad_duplicate"
                : "click_quick_create"),
              (h.www_request_id = r),
              (h.source = o(
                "AdsCreativeGenAILoggingUtils",
              ).convertEntryPointForLogging(t)),
              (h.view_surface = n),
              (h.metadata = JSON.stringify({
                is_pac_adgroup: c,
                sourced_asset_data:
                  a == null
                    ? void 0
                    : a.map(function (e) {
                        return {
                          isSelected: e.isSelected,
                          handle: e.nodeData.handle,
                        };
                      }),
                sourced_asset_count: a == null ? void 0 : a.length,
                ent_video_generation_status_id: s,
                ent_generated_videos: l,
                adopted_generated_videos: i,
                from_video_gen_to_next: d,
                is_multi_media: (m != null ? m : 0) > 0,
                additional_image_count: m != null ? m : 0,
                cache_hit_stage: _,
                pregen_cache_hit: f,
                scroll_depth: p(g),
              })),
              h),
          },
          { string: { view_surface: n } },
        ));
    }
    function $(e, t, n, r, a, i, l, s) {
      var u;
      (s === void 0 && (s = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_loading_state_screen_impression",
          data:
            ((u = {}),
            (u.adgroup_id = e == null ? void 0 : e.adgroup.id),
            (u.is_duplicated_object = i),
            (u.object_creation_source = i
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (u.source = o(
              "AdsCreativeGenAILoggingUtils",
            ).convertEntryPointForLogging(t)),
            (u.www_request_id = n),
            (u.view_surface = r),
            (u.metadata = JSON.stringify({
              is_pac_adgroup: l,
              thumbnails: a,
              pregen_cache_hit: s,
            })),
            u),
        }));
    }
    function P(e, t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C) {
      var b, v, S, R;
      (_ === void 0 && (_ = !1),
        g === void 0 && (g = null),
        h === void 0 && (h = null),
        C === void 0 && (C = []));
      var L = s == null ? 0 : Date.now() - s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_generate_videos_button_click",
          data:
            ((S = {}),
            (S.adgroup_id =
              (b = e == null ? void 0 : e.adgroup.id) != null
                ? b
                : y == null
                  ? void 0
                  : y.adgroupId),
            (S.is_duplicated_object = u),
            (S.object_creation_source = u
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (S.source =
              t != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    t,
                  )
                : null),
            (S.www_request_id = n),
            (S.metadata = JSON.stringify({
              is_pac_adgroup: c,
              is_existing_post_ad: _,
              ad_sourced_asset_id: a,
              ent_video_generation_status_id: r,
              selected_sourced_assets:
                i == null
                  ? void 0
                  : i.map(function (e) {
                      return {
                        isSelected: e.isSelected,
                        handle: e.nodeData.handle,
                      };
                    }),
              sourced_asset_count: l,
              pre_gen_load_to_click_generate: L,
              used_cached_video_gen_status: d,
              cache_hit_stage: g,
              pregen_cache_hit: h,
              is_shadow_eligible: o(
                "AdsCreativeGenAIEligibilityUtils",
              ).isEligibleForMultisceneShadowTraffic(!0),
              source_component: p,
              is_multi_media: m > 0,
              additional_image_count: m,
              selected_variant_ids: f,
              ad_account_id: y == null ? void 0 : y.adAccountId,
              recipe_type: y == null ? void 0 : y.recipeType,
              recipe_source: y == null ? void 0 : y.recipeSource,
              inline_generate_treatment:
                y == null ? void 0 : y.inlineGenerateTreatment,
              selected_image_ids: y == null ? void 0 : y.selectedImageIDs,
              selected_image_count:
                y == null || (v = y.selectedImageIDs) == null
                  ? void 0
                  : v.length,
              template_variant_ids: C,
            })),
            S),
        },
        {
          int: {
            selected_image_count:
              y == null || (R = y.selectedImageIDs) == null ? void 0 : R.length,
          },
          int_array: { template_variant_ids: C },
          string_array: {
            selected_image_ids: y == null ? void 0 : y.selectedImageIDs,
          },
        },
      );
    }
    function N(e, t, n, r, a, i, l, s, u, c) {
      var d;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_generate_more_videos_button_click",
        data:
          ((d = {}),
          (d.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (d.is_duplicated_object = s),
          (d.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (d.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (d.www_request_id = n),
          (d.metadata = JSON.stringify({
            is_pac_adgroup: u,
            ad_sourced_asset_id: a,
            ent_video_generation_status_id: r,
            selected_sourced_assets:
              i == null
                ? void 0
                : i.map(function (e) {
                    return {
                      isSelected: e.isSelected,
                      handle: e.nodeData.handle,
                    };
                  }),
            sourced_asset_count: l,
            used_cached_video_gen_status: c,
            is_shadow_eligible: o(
              "AdsCreativeGenAIEligibilityUtils",
            ).isEligibleForMultisceneShadowTraffic(!0),
          })),
          d),
      });
    }
    function M(e, t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C) {
      var b;
      (h === void 0 && (h = null),
        y === void 0 && (y = null),
        C === void 0 && (C = null));
      var v = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0);
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName: "ads_gen_ai__video_gen_video_variation_preview_impression",
          data:
            ((b = {}),
            (b.adgroup_id = e == null ? void 0 : e.id),
            (b.is_duplicated_object = l),
            (b.object_creation_source = l
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (b.source = o(
              "AdsCreativeGenAILoggingUtils",
            ).convertEntryPointForLogging(t)),
            (b.www_request_id = n),
            (b.metadata = JSON.stringify(
              babelHelpers.extends(
                {
                  is_pac_adgroup: s,
                  is_grab_and_go: o(
                    "AdsCreativeVideoGenAdoptablePreviewUtils",
                  ).isInGrabAndGo(),
                },
                C != null ? { is_enhanced: C } : {},
                {
                  ent_video_generation_status_id: r,
                  ent_generated_video: a != null ? a : "",
                  cdn_uri: i != null ? i : "",
                  used_cached_video_gen_status: u,
                  cache_hit_stage: h,
                  pregen_cache_hit: y,
                  is_shadow_eligible: o(
                    "AdsCreativeGenAIEligibilityUtils",
                  ).isEligibleForMultisceneShadowTraffic(!0),
                  script_variant_name: c,
                  narrative_style: d,
                  voice_over_audio_handle: m,
                  ent_video_ready: p,
                  cdn_url_ready: _,
                  component: f,
                  variant_id: g,
                  grab_and_go_treatment: v,
                },
              ),
            )),
            b),
        },
        {
          int: { grab_and_go_treatment: v, variant_id: g },
          bool: babelHelpers.extends({}, C != null ? { is_enhanced: C } : {}, {
            pregen_cache_hit: y,
          }),
          string: {
            cache_hit_stage: h != null ? h : null,
            component: f,
            ent_generated_video: a,
            ent_video_generation_status_id: r,
            www_request_id: n,
          },
        },
      );
    }
    function w(e, t, n, r) {
      var a;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_success_toast_impression",
        data:
          ((a = {}),
          (a.adgroup_id = e == null ? void 0 : e.id),
          (a.is_duplicated_object = n),
          (a.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (a.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (a.metadata = JSON.stringify({ is_pac_adgroup: r })),
          a),
      });
    }
    function A(e, t, n, r, a, i, l, s, u, c, d, m, p, _, f, g) {
      var h;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName:
            "ads_gen_ai__video_gen_video_variation_preview_success_toast_impression",
          data:
            ((h = {}),
            (h.adgroup_id = e == null ? void 0 : e.id),
            (h.is_duplicated_object = l),
            (h.object_creation_source = l
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (h.source = o(
              "AdsCreativeGenAILoggingUtils",
            ).convertEntryPointForLogging(t)),
            (h.www_request_id = n),
            (h.metadata = JSON.stringify({
              is_pac_adgroup: s,
              ent_video_generation_status_id: r,
              ent_generated_video: a != null ? a : "",
              cdn_uri: i != null ? i : "",
              used_cached_video_gen_status: u,
              is_shadow_eligible: o(
                "AdsCreativeGenAIEligibilityUtils",
              ).isEligibleForMultisceneShadowTraffic(!0),
              script_variant_name: c,
              narrative_style: d,
              voice_over_audio_handle: m,
              ent_video_ready: p,
              cdn_url_ready: _,
              component: f,
              variant_id: g,
            })),
            h),
        },
        { int: { variant_id: g } },
      );
    }
    function F(e, t, n, r, a, i, l) {
      var s;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_success_toast_click_apply_cta",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.id),
          (s.is_duplicated_object = a),
          (s.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = n),
          (s.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (s.metadata = JSON.stringify({
            adopted_generated_videos: l,
            is_pac_adgroup: i,
            ent_video_generation_status_id: r,
          })),
          s),
      });
    }
    function O(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_success_toast_click_preview_cta",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = n),
          (l.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_video_generation_status_id: r,
          })),
          l),
      });
    }
    function B(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_success_toast_dismiss",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = n),
          (l.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_video_generation_status_id: r,
          })),
          l),
      });
    }
    function W(e, t, n, r) {
      var a;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_error_toast_impression",
        data:
          ((a = {}),
          (a.adgroup_id = e == null ? void 0 : e.id),
          (a.is_duplicated_object = n),
          (a.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (a.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (a.metadata = JSON.stringify({ is_pac_adgroup: r })),
          a),
      });
    }
    function q(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_error_toast_click_open_modal",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = n),
          (l.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_video_generation_status_id: r,
          })),
          l),
      });
    }
    function U(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_error_toast_dismiss",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = n),
          (l.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_video_generation_status_id: r,
          })),
          l),
      });
    }
    function V(e, t, n, r, a, i, l) {
      var s;
      (l === void 0 && (l = null),
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
          eventName: "ads_gen_ai__video_gen_video_play_button_click",
          data:
            ((s = {}),
            (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
            (s.www_request_id = n),
            (s.view_surface = t),
            (s.metadata = JSON.stringify({
              ent_generated_video: r,
              cdn_uri: a,
              action: i,
              ent_video_generation_status_id: l,
              used_cached_video_gen_status: null,
              is_shadow_eligible: o(
                "AdsCreativeGenAIEligibilityUtils",
              ).isEligibleForMultisceneShadowTraffic(!0),
            })),
            s),
        }));
    }
    function H(e, t, n, r, a, i, l, s, u, c) {
      var d;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_video_player_popover_hover",
        data:
          ((d = {}),
          (d.adgroup_id = e == null ? void 0 : e.id),
          (d.is_duplicated_object = l),
          (d.object_creation_source = l
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (d.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (d.www_request_id = n),
          (d.metadata = JSON.stringify({
            is_pac_adgroup: s,
            ent_video_generation_status_id: r,
            ent_generated_video: a != null ? a : "",
            cdn_uri: i != null ? i : "",
            used_cached_video_gen_status: u,
            component: c,
          })),
          d),
      });
    }
    function G(e, t, n, r, a, i, l, s, u) {
      var c;
      u === void 0 && (u = null);
      var d = a == null ? null : Date.now() - a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_edit_button_click",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = i),
          (c.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.www_request_id = t),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: l,
            ent_generated_video: n,
            cdn_uri: r,
            video_load_to_edit_latency_ms: d,
            used_cached_video_gen_status: s,
            ent_video_generation_status_id: u,
            grab_and_go_treatment: o(
              "AdsCreativeGenAIEligibilityUtils",
            ).getGrabAndGoTreatment(),
          })),
          c),
      });
    }
    function z(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_apply_changes_button_click",
        data:
          ((u = {}),
          (u.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (u.is_duplicated_object = l),
          (u.object_creation_source = l
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (u.www_request_id = t),
          (u.metadata = JSON.stringify({
            is_pac_adgroup: s,
            ent_generated_video: n,
            cdn_uri: r,
            clips_data: a,
            selected_music_id: i,
          })),
          u),
      });
    }
    function j(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_undo_changes_button_click",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = s),
          (c.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.www_request_id = t),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: u,
            ent_generated_video: n,
            old_clips_data: r,
            new_clips_data: a,
            old_selected_music_id: i,
            new_selected_music_id: l,
          })),
          c),
      });
    }
    function K(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_undo_applied_changes_button_click",
        data:
          ((u = {}),
          (u.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (u.is_duplicated_object = l),
          (u.object_creation_source = l
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (u.www_request_id = t),
          (u.metadata = JSON.stringify({
            is_pac_adgroup: s,
            ent_generated_video: n,
            cdn_uri: r,
            clips_data: a,
            selected_music_id: i,
          })),
          u),
      });
    }
    function Q(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_add_clip_button_click",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = s),
          (c.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.www_request_id = t),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: u,
            ent_generated_video: n,
            cdn_uri: r,
            clips_data: a,
            new_clip: i,
            selected_music_id: l,
          })),
          c),
      });
    }
    function X(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_remove_clip_button_click",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = s),
          (c.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.www_request_id = t),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: u,
            ent_generated_video: n,
            cdn_uri: r,
            old_clips_data: a,
            new_clips_data: i,
            removed_clip: l,
          })),
          c),
      });
    }
    function Y(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_text_overlay_toggle_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            ent_generated_video: n,
            clip_data: r,
            text_overlay_toggle_status: a,
          })),
          i),
      });
    }
    function J(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_text_overlay_text_change",
        data:
          ((a = {}),
          (a.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({
            ent_generated_video: n,
            clip_data: r,
          })),
          a),
      });
    }
    function Z(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_music_toggle_click",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (s.is_duplicated_object = i),
          (s.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            is_pac_adgroup: l,
            ent_generated_video: n,
            selected_music_id: r,
            music_toggle_status: a,
          })),
          s),
      });
    }
    function ee(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_music_change",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (s.is_duplicated_object = i),
          (s.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            is_pac_adgroup: l,
            ent_generated_video: n,
            old_selected_music_id: r,
            new_selected_music_id: a,
          })),
          s),
      });
    }
    function te(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_voiceover_type_change",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (s.is_duplicated_object = i),
          (s.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            is_pac_adgroup: l,
            ent_generated_video: n,
            old_voiceover_type: r,
            new_voiceover_type: a,
          })),
          s),
      });
    }
    function ne(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_voiceover_sample_play",
        data:
          ((n = {}),
          (n.ad_account_id = e),
          (n.metadata = JSON.stringify({ voiceover_type: t })),
          n),
      });
    }
    function re(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_voiceover_opt_in_toggle",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_generated_video: n,
            is_voiceover_opted_in: r,
          })),
          l),
      });
    }
    function oe(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_clips_order_change",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (s.is_duplicated_object = i),
          (s.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            is_pac_adgroup: l,
            ent_generated_video: n,
            old_clips_data: r,
            new_clips_data: a,
          })),
          s),
      });
    }
    function ae(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_clip_image_upload",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            ent_generated_video: n,
            old_clip_data: r,
            image_data: a,
          })),
          i),
      });
    }
    function ie(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_media_selection_impression",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (l.www_request_id = n),
          (l.view_surface = r),
          (l.metadata = JSON.stringify({ is_pac_adgroup: i })),
          l),
      });
    }
    function le(e, t, n, r, a, i, l, s, u) {
      var c;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_prefetch_sourced_assets",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = s),
          (c.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (c.www_request_id = n),
          (c.view_surface = r),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: u,
            sourced_asset_data:
              a == null
                ? void 0
                : a.map(function (e) {
                    return {
                      isSelected: e.isSelected,
                      handle: e.nodeData.handle,
                    };
                  }),
            sourced_asset_count: l,
            sourced_asset_id: i,
          })),
          c),
      });
    }
    function se(e, t, n, r, a, i, l, s, u) {
      var c;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_sourced_assets_displayed",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = s),
          (c.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (c.www_request_id = n),
          (c.view_surface = r),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: u,
            sourced_asset_data:
              a == null
                ? void 0
                : a.map(function (e) {
                    return {
                      isSelected: e.isSelected,
                      handle: e.nodeData.handle,
                    };
                  }),
            sourced_asset_count: l,
            sourced_asset_id: i,
          })),
          c),
      });
    }
    function ue(e, t, n, r, a, i, l, s, u, c, d, m, f, g) {
      var h;
      (m === void 0 && (m = null),
        f === void 0 && (f = null),
        g === void 0 && (g = null));
      var y = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0),
        C = o("AdsCreativeVideoGenAdoptablePreviewUtils").isInGrabAndGo(),
        b = o("AdsCreativeGenAIEligibilityUtils").isGrabAndGoTreatment(y),
        v = r.map(function (e) {
          var t;
          return (t = b ? _(i, e.videoId) : null) != null ? t : "unknown";
        }),
        S = [],
        R = [];
      r.forEach(function (e, t) {
        e.variantId != null && (S.push(e.variantId), R.push(v[t]));
      });
      var L = [];
      v.forEach(function (e) {
        e !== "unknown" && L.push(e);
      });
      var E = new Set(L),
        k = null;
      if (L.length > 0 && L.length === r.length) {
        var I;
        k = E.size > 1 ? "mixed" : (I = L[0]) != null ? I : null;
      }
      var T = v.filter(function (e) {
          return e === "template";
        }).length,
        D = v.filter(function (e) {
          return e === "automatic";
        }).length,
        x = r.length - S.length,
        $ = L.length,
        P = r.length - $;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_modal_save",
          data:
            ((h = {}),
            (h.adgroup_id = e == null ? void 0 : e.id),
            (h.is_duplicated_object = l),
            (h.object_creation_source = l
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (h.www_request_id = t),
            (h.source = c
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(c)
              : null),
            (h.metadata = JSON.stringify({
              is_pac_adgroup: s,
              is_grab_and_go: C,
              sourced_asset_data:
                n == null
                  ? void 0
                  : n.map(function (e) {
                      return {
                        isSelected: e.isSelected,
                        handle: e.nodeData.handle,
                      };
                    }),
              sourced_asset_count: n == null ? void 0 : n.length,
              ent_video_generation_status_id: i,
              ent_generated_videos: a,
              adopted_generated_videos: r,
              selected_variant_ids: S,
              selected_variant_trigger_types: R,
              selected_variant_count: S.length,
              missing_variant_id_count: x,
              selected_trigger_types: v,
              source_attributed_video_count: $,
              source_unattributed_video_count: P,
              trigger_type: k,
              template_selected_video_count: T,
              automatic_selected_video_count: D,
              used_cached_video_gen_status: u,
              cache_hit_stage: m,
              pregen_cache_hit: f,
              is_multi_media: (d != null ? d : 0) > 0,
              additional_image_count: d != null ? d : 0,
              adopted_video_count: r.length,
              generated_video_count: a.size,
              grab_and_go_treatment: y,
              scroll_depth: p(g),
            })),
            h),
        },
        {
          bool: { pregen_cache_hit: f },
          int: {
            adopted_video_count: r.length,
            automatic_selected_video_count: D,
            generated_video_count: a.size,
            grab_and_go_treatment: y,
            missing_variant_id_count: x,
            selected_variant_count: S.length,
            source_attributed_video_count: $,
            source_unattributed_video_count: P,
            template_selected_video_count: T,
          },
          string: {
            cache_hit_stage: m != null ? m : null,
            ent_video_generation_status_id: i,
            trigger_type: k,
            www_request_id: t,
          },
          string_array: {
            selected_trigger_types: v,
            selected_variant_trigger_types: R,
          },
        },
      );
    }
    function ce(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_image_warning_impression",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (s.www_request_id = t),
          (s.view_surface = n),
          (s.metadata = JSON.stringify({
            warning_type: r,
            sourced_asset_count: a,
            selected_asset_count: i,
            ad_sourced_asset_id: l,
          })),
          s),
      });
    }
    function de(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_edit_failed_impression",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_video_generation_status_id: n,
            ent_generated_video: r,
          })),
          l),
      });
    }
    function me(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_editing_async_kickoff_success",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            latency_ms: Date.now() - n,
          })),
          i),
      });
    }
    function pe(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_editing_async_kickoff_failure",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = t),
          (l.message = r),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            latency_ms: Date.now() - n,
          })),
          l),
      });
    }
    function _e(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_creation_async_kickoff_success",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.view_surface = n),
          (a.metadata = JSON.stringify({
            latency_ms: Date.now() - r,
            is_shadow_call: !1,
          })),
          a),
      });
    }
    function fe(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_creation_async_kickoff_failure",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.www_request_id = t),
          (i.view_surface = n),
          (i.message = a),
          (i.metadata = JSON.stringify({ latency_ms: Date.now() - r })),
          i),
      });
    }
    function ge(e, t, n) {
      var r;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_gql_request_result_undo_success",
        data:
          ((r = {}),
          (r.adgroup_id = e),
          (r.www_request_id = t),
          (r.metadata = JSON.stringify({ latency_ms: Date.now() - n })),
          r),
      });
    }
    function he(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_edit_screen_music_options_success",
        data: ((n = {}), (n.adgroup_id = e), (n.www_request_id = t), n),
      });
    }
    function ye(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_pregen_query_sourced_asset_success",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({
            ad_sourced_asset_id: n,
            latency_ms: Date.now() - r,
          })),
          a),
      });
    }
    function Ce(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_pregen_query_sourced_asset_failure",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.www_request_id = t),
          (i.message = a),
          (i.metadata = JSON.stringify({
            ad_sourced_asset_id: n,
            latency_ms: Date.now() - r,
          })),
          i),
      });
    }
    function be(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_upload_image_to_sourced_asset_success",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({
            ad_sourced_asset_id: n,
            latency_ms: Date.now() - r,
          })),
          a),
      });
    }
    function ve(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_upload_image_to_sourced_asset_failure",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.www_request_id = t),
          (i.message = a),
          (i.metadata = JSON.stringify({
            ad_sourced_asset_id: n,
            latency_ms: Date.now() - r,
          })),
          i),
      });
    }
    function Se(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_loading_state_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function Re(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_loading_state_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function Le(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_error_state_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function Ee(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_error_state_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function ke(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_l1_state_with_adopted_videos_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
            is_multi_media: !1,
            additional_image_count: 0,
          })),
          i),
      });
    }
    function Ie(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_state_with_adopted_videos_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
            is_multi_media: !1,
            additional_image_count: 0,
          })),
          i),
      });
    }
    function Te(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_l1_state_without_adopted_videos_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function De(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_l1_state_without_adopted_videos_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function xe(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_adopted_videos_not_shown",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (l.is_duplicated_object = r),
          (l.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
            has_video_generation_status_id: i.hasVideoGenerationStatusId,
            ignore_spec_restore: i.ignoreSpecRestore,
            is_loading: i.isLoading,
            has_error: i.hasError,
            rendered_video_count: i.renderedVideoCount,
            rendered_adopted_video_count: i.renderedAdoptedVideoCount,
            spec_adopted_video_count: i.specAdoptedVideoCount,
          })),
          l),
      });
    }
    function $e(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_get_started_state_impression",
        data:
          ((a = {}),
          (a.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (a.is_duplicated_object = n),
          (a.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ is_pac_adgroup: r })),
          a),
      });
    }
    function Pe(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_get_started_state_click",
        data:
          ((a = {}),
          (a.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (a.is_duplicated_object = n),
          (a.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ is_pac_adgroup: r })),
          a),
      });
    }
    function Ne(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_accordion_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function Me(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_accordion_edit_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function we(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_accordion_delete_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_pac_adgroup: a,
            ent_video_generation_status_id: n,
          })),
          i),
      });
    }
    function Ae(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_get_started_impression",
        data:
          ((a = {}),
          (a.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (a.is_duplicated_object = n),
          (a.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ is_pac_adgroup: r })),
          a),
      });
    }
    function Fe(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_accordion_thumbnail_hover",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ent_video_generation_status_id: n,
            ent_generated_video: r,
          })),
          l),
      });
    }
    function Oe(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_pregen_asset_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (i.www_request_id = n),
          (i.view_surface = t),
          (i.metadata = JSON.stringify({
            ad_sourced_asset_id: r,
            sourced_asset: a
              ? { isSelected: a.isSelected, handle: a.nodeData.handle }
              : null,
          })),
          i),
      });
    }
    function Be(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_media_upload_button_click",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (l.is_duplicated_object = a),
          (l.object_creation_source = a
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = n),
          (l.view_surface = t),
          (l.metadata = JSON.stringify({
            is_pac_adgroup: i,
            ad_sourced_asset_id: r,
          })),
          l),
      });
    }
    function We(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_media_select_all_button_click",
        data:
          ((u = {}),
          (u.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (u.is_duplicated_object = l),
          (u.object_creation_source = l
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (u.www_request_id = n),
          (u.view_surface = t),
          (u.metadata = JSON.stringify({
            is_pac_adgroup: s,
            ad_sourced_asset_id: r,
            is_selected: a,
            sourced_assets:
              i == null
                ? void 0
                : i.map(function (e) {
                    return {
                      isSelected: e.isSelected,
                      handle: e.nodeData.handle,
                    };
                  }),
          })),
          u),
      });
    }
    function qe(e, t, n, a) {
      var i;
      (a === void 0 && (a = !1),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_eligibility_impression",
          data:
            ((i = {}),
            (i.adgroup_id = e == null ? void 0 : e.adgroup.id),
            (i.is_duplicated_object = t),
            (i.object_creation_source = t
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (i.metadata = JSON.stringify({
              is_pac_adgroup: n,
              is_existing_post_ad: a,
              is_grab_and_go: o(
                "AdsCreativeVideoGenAdoptablePreviewUtils",
              ).isInGrabAndGo(),
              passes_multi_scene_animation_eligibility_expansion_gk:
                r("gkx")("24803"),
            })),
            i),
        }));
    }
    function Ue(e) {
      var t;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_media_picker_multi_media_eligible",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function Ve(e) {
      var t;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_l1_multi_media_eligible",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function He(e, t, n) {
      var r,
        a,
        i =
          ((a = {}),
          (a.metadata = JSON.stringify({
            passes_expansion_gk: e,
            reason: "eligibility_expansion_gk_failed",
            silent: t,
            callsite: (r = n == null ? void 0 : n.callsite) != null ? r : null,
          })),
          a);
      ((n == null ? void 0 : n.adgroupID) != null &&
        (i.adgroup_id = n.adgroupID),
        (n == null ? void 0 : n.adAccountID) != null &&
          (i.ad_account_id = n.adAccountID),
        (n == null ? void 0 : n.entryPoint) != null &&
          (i.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(n.entryPoint)));
      var l = n == null ? void 0 : n.isDuplicatedAdgroup;
      (l != null &&
        ((i.is_duplicated_object = l),
        (i.object_creation_source =
          l === !0 ? "click_ad_duplicate" : "click_quick_create")),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_animation_check_ineligible",
          data: i,
        }));
    }
    function Ge(e, t, n) {
      var r, a, i;
      e && t
        ? (i = "both_pass")
        : !e && !t
          ? (i = "both_fail")
          : e
            ? (i = "only_existing_passes")
            : (i = "only_all_passes");
      var l =
        ((a = {}),
        (a.metadata = JSON.stringify({
          passes_existing_gate: e,
          passes_all_gk: t,
          match: e === t,
          delta_direction: i,
          callsite: (r = n.callsite) != null ? r : null,
        })),
        a);
      (n.adgroupID != null && (l.adgroup_id = n.adgroupID),
        n.adAccountID != null && (l.ad_account_id = n.adAccountID));
      var s = n.isDuplicatedAdgroup;
      (s != null &&
        ((l.is_duplicated_object = s),
        (l.object_creation_source =
          s === !0 ? "click_ad_duplicate" : "click_quick_create")),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_animation_gk_comparison",
          data: l,
        }));
    }
    function ze(e, t) {
      var n;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_multi_media_multiple_media_selected",
        data: ((n = {}), (n.adgroup_id = e), (n.additional_image_count = t), n),
      });
    }
    function je(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName:
          "ads_gen_ai__video_gen_multi_media_media_selection_impression",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            is_multi_media: !0,
            total_available_image_count: n,
            selected_image_count: r,
            additional_image_count: a,
          })),
          i),
      });
    }
    function Ke(e, t, n) {
      var r;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_gql_request_ad_intent_success",
        data:
          ((r = {}),
          (r.adgroup_id = e),
          (r.www_request_id = t),
          (r.metadata = JSON.stringify({ latency_ms: Date.now() - n })),
          r),
      });
    }
    function Qe(e, t, n, r) {
      var a;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_gql_request_ad_intent_failure",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.message = r),
          (a.metadata = JSON.stringify({ latency_ms: Date.now() - n })),
          a),
      });
    }
    function Xe(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_generate_videos_button_error",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.adgroup.id),
          (c.is_duplicated_object = i),
          (c.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (c.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (c.www_request_id = n),
          (c.metadata = JSON.stringify({
            is_pac_adgroup: l,
            ad_sourced_asset_id: a,
            ent_video_generation_status_id: r,
            error_message: s,
            source_component: u,
          })),
          c),
      });
    }
    function Ye(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_offline_query_cache_hit_success",
        data:
          ((u = {}),
          (u.adgroup_id = e),
          (u.is_duplicated_object = s),
          (u.object_creation_source = s
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (u.www_request_id = t),
          (u.metadata = JSON.stringify({
            latency_ms: Date.now() - n,
            video_generation_status_id: r,
            input_video_generation_status_id: l,
            ad_image_hash: a,
            link_url: i,
          })),
          u),
      });
    }
    function Je(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_offline_query_cache_miss_success",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.is_duplicated_object = l),
          (s.object_creation_source = l
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            latency_ms: Date.now() - n,
            ad_image_hash: r,
            link_url: a,
            input_video_generation_status_id: i,
          })),
          s),
      });
    }
    function Ze(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_offline_query_cache_failure",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.www_request_id = t),
          (s.message = r),
          (s.metadata = JSON.stringify({
            latency_ms: Date.now() - n,
            ad_image_hash: a,
            link_url: i,
            input_video_generation_status_id: l,
          })),
          s),
      });
    }
    function et(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_portfolio_r3_cached_call_dispatch",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.is_duplicated_object = n),
          (s.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            ad_image_identifier: r,
            link_url: a,
            input_video_generation_status_id: i,
            trigger: l,
          })),
          s),
      });
    }
    function tt(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_session_cached_call_dispatch",
          data:
            ((c = {}),
            (c.adgroup_id = e),
            (c.is_duplicated_object = n),
            (c.object_creation_source = n
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (c.www_request_id = t),
            (c.metadata = JSON.stringify({
              ad_image_identifier: r,
              cache_arm: s,
              grab_and_go_treatment: u,
              input_video_generation_status_id: i,
              link_url: a,
              trigger: l,
            })),
            c),
        },
        {
          int: { grab_and_go_treatment: u },
          string: { cache_arm: s, trigger: l, www_request_id: t },
        },
      );
    }
    function nt(t, n, a, i, l, s, u, c, d, m, p, _) {
      var f,
        g = (e || (e = r("performanceNow")))() - a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_session_cached_call_result",
          data:
            ((f = {}),
            (f.adgroup_id = t),
            (f.www_request_id = n),
            (f.message = _),
            (f.metadata = JSON.stringify({
              ad_image_identifier: l,
              cache_arm: m,
              cache_hit_stage: d,
              cache_outcome: i,
              grab_and_go_treatment: p,
              input_video_generation_status_id: u,
              latency_ms: g,
              link_url: s,
              output_video_generation_status_id: c,
            })),
            f),
        },
        {
          int: { grab_and_go_treatment: p, latency_ms: g },
          string: {
            cache_arm: m,
            cache_hit_stage: d != null ? d : null,
            cache_outcome: i,
            www_request_id: n,
          },
        },
      );
    }
    function rt(e, t, n, r, a, i, l, s, u) {
      var c;
      (u === void 0 && (u = null),
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
          eventName:
            "ads_gen_ai__video_gen_gql_request_result_portfolio_r3_query_cache_hit_success",
          data:
            ((c = {}),
            (c.adgroup_id = e),
            (c.is_duplicated_object = s),
            (c.object_creation_source = s
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (c.www_request_id = t),
            (c.metadata = JSON.stringify({
              latency_ms: Date.now() - n,
              video_generation_status_id: r,
              input_video_generation_status_id: l,
              ad_image_identifier: a,
              link_url: i,
              cache_hit_stage: u,
            })),
            c),
        }));
    }
    function ot(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_portfolio_r3_query_cache_miss_success",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.is_duplicated_object = l),
          (s.object_creation_source = l
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            latency_ms: Date.now() - n,
            input_video_generation_status_id: i,
            ad_image_identifier: r,
            link_url: a,
          })),
          s),
      });
    }
    function at(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_gql_request_result_portfolio_r3_query_cache_failure",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.www_request_id = t),
          (s.message = r),
          (s.metadata = JSON.stringify({
            latency_ms: Date.now() - n,
            input_video_generation_status_id: l,
            ad_image_identifier: a,
            link_url: i,
          })),
          s),
      });
    }
    function it(e, t, n) {
      var r;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_modal_content_container_error",
        data:
          ((r = {}),
          (r.adgroup_id = e == null ? void 0 : e.id),
          (r.www_request_id = n),
          (r.message = t),
          r),
      });
    }
    function lt(e, t, n, r, a, i, l) {
      var s;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_refine_ai_inputs_impression",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.id),
          (s.www_request_id = t),
          (s.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ad_sourced_asset_id: a,
            ad_intent_id: l != null ? l : null,
            sourced_asset_count: i == null ? void 0 : i.length,
            selected_sourced_assets:
              i == null
                ? void 0
                : i.map(function (e) {
                    return {
                      isSelected: e.isSelected,
                      handle: e.nodeData.handle,
                    };
                  }),
          })),
          s),
      });
    }
    function st(e, t, n, r, a, i, l, s, u, c, d, m) {
      var p;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName: "ads_gen_ai__video_gen_concept_card_impression",
          data:
            ((p = {}),
            (p.adgroup_id = e == null ? void 0 : e.id),
            (p.is_duplicated_object = d),
            (p.object_creation_source = d
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (p.www_request_id = t),
            (p.source =
              n != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    n,
                  )
                : null),
            (p.metadata = JSON.stringify({
              ent_video_generation_status_id: r,
              ent_generated_video: a,
              ent_scenes: i,
              video_description: l,
              video_title: s,
              generation_status: u,
              voice_over_id: c,
              variant_id: m,
            })),
            p),
        },
        { int: { variant_id: m } },
      );
    }
    function ut(e, t, n, r, a, i, l, s, u) {
      var c, d;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName:
          "ads_gen_ai__video_gen_concept_card_thumbnail_loaded_impression",
        data:
          ((d = {}),
          (d.adgroup_id = e == null ? void 0 : e.id),
          (d.www_request_id = t),
          (d.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (d.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            video_title: i,
            generation_status: l != null ? l : null,
            scene_count: (c = s == null ? void 0 : s.length) != null ? c : 0,
            time_to_thumbnail_loaded_ms: Math.round(u),
          })),
          d),
      });
    }
    function ct(e, t, n, r, a, i, l, s, u) {
      var c, d, m;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_concept_card_fully_loaded_impression",
        data:
          ((m = {}),
          (m.adgroup_id = e == null ? void 0 : e.id),
          (m.www_request_id = t),
          (m.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (m.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            video_title: i,
            generation_status: l,
            scene_count: (c = s == null ? void 0 : s.length) != null ? c : 0,
            thumbnails_loaded:
              (d =
                s == null
                  ? void 0
                  : s.filter(function (e) {
                      return (e == null ? void 0 : e.thumbnail_url) != null;
                    }).length) != null
                ? d
                : 0,
            time_to_fully_loaded_ms: Math.round(u),
          })),
          m),
      });
    }
    function dt(e, t, n, r, a, i, l) {
      var s;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName:
            "ads_gen_ai__video_gen_static_concept_card_" +
            (i + 1) +
            "_impression",
          data:
            ((s = {}),
            (s.adgroup_id = e == null ? void 0 : e.id),
            (s.www_request_id = t),
            (s.source =
              n != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    n,
                  )
                : null),
            (s.metadata = JSON.stringify({
              ent_video_generation_status_id: r,
              ent_generated_video: a,
              card_index: i,
              variant_id: l,
            })),
            s),
        },
        { int: { variant_id: l } },
      );
    }
    function mt(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_progressive_scripting_scene_click",
        data:
          ((u = {}),
          (u.adgroup_id = e == null ? void 0 : e.id),
          (u.www_request_id = t),
          (u.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (u.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            generation_status: i,
            current_scene: l,
            new_scene: s,
          })),
          u),
      });
    }
    function pt(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_add_scene_success",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.id),
          (l.www_request_id = t),
          (l.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (l.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            generation_status: i,
          })),
          l),
      });
    }
    function _t(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_add_scene_failure",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.id),
          (c.www_request_id = t),
          (c.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (c.message = u.message),
          (c.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            sourced_image_id: i,
            scene_type: l,
            scene_description: s,
          })),
          c),
      });
    }
    function ft(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_delete_scene_button_click",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.id),
          (c.www_request_id = t),
          (c.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (c.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            scene_index: i,
            scene_description: u,
            deleted_scene: l,
            scenes: s,
          })),
          c),
      });
    }
    function gt(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_delete_scene_success",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.id),
          (i.www_request_id = t),
          (i.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (i.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
          })),
          i),
      });
    }
    function ht(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_delete_scene_failure",
        data:
          ((u = {}),
          (u.adgroup_id = e == null ? void 0 : e.id),
          (u.www_request_id = t),
          (u.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (u.message = s.message),
          (u.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            scene_index: i,
            deleted_scene: l,
          })),
          u),
      });
    }
    function yt(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_replace_scene_button_click",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.id),
          (s.www_request_id = t),
          (s.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            scene_index: i,
            replaced_scene: l,
          })),
          s),
      });
    }
    function Ct(e, t, n, r, a, i, l, s) {
      var u;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_replace_scene_success",
        data:
          ((u = {}),
          (u.adgroup_id = e == null ? void 0 : e.id),
          (u.www_request_id = t),
          (u.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (u.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            scene_index: i,
            scene: l,
            sourced_image_id: s,
          })),
          u),
      });
    }
    function bt(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_replace_scene_failure",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.id),
          (c.www_request_id = t),
          (c.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (c.message = u.message),
          (c.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            scene_index: i,
            scene: l,
            sourced_image_id: s,
          })),
          c),
      });
    }
    function vt(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_pencil_button_click",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.id),
          (s.www_request_id = t),
          (s.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ent_generated_video: a,
            scene_index: i,
            scene: l,
          })),
          s),
      });
    }
    function St(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_refine_ai_input_update_button_click",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.id),
          (c.www_request_id = t),
          (c.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (c.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            old_ad_intent_id: a != null ? a : null,
            ad_sourced_asset_id: u,
            new_ad_intent_data: i,
            new_sourced_assets: s,
            old_sourced_assets: l,
          })),
          c),
      });
    }
    function Rt(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_refine_ai_input_update_success",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.id),
          (c.www_request_id = t),
          (c.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (c.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            old_ad_intent_id: a != null ? a : null,
            new_ad_intent_id: i != null ? i : null,
            ad_sourced_asset_id: u,
            new_sourced_assets: s,
            old_sourced_assets: l,
          })),
          c),
      });
    }
    function Lt(e, t, n, r, a, i, l, s, u) {
      var c;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_refine_ai_input_update_failure",
        data:
          ((c = {}),
          (c.adgroup_id = e == null ? void 0 : e.id),
          (c.www_request_id = t),
          (c.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (c.message = u == null ? void 0 : u.message),
          (c.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            old_ad_intent_id: a != null ? a : null,
            ad_sourced_asset_id: s,
            new_sourced_assets: l,
            old_sourced_assets: i,
          })),
          c),
      });
    }
    function Et(e, t, n, r, a, i, l, s, u, c) {
      var d;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_refine_ai_input_cancel_button_click",
        data:
          ((d = {}),
          (d.adgroup_id = e == null ? void 0 : e.id),
          (d.www_request_id = t),
          (d.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (d.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ad_intent_id: a != null ? a : null,
            ad_sourced_asset_id: c,
            ad_intent_data: i,
            local_ad_intent_data: l,
            sourced_assets: s,
            local_sourced_assets: u,
          })),
          d),
      });
    }
    function kt(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_refine_ai_button_click",
        data:
          ((l = {}),
          (l.adgroup_id = e == null ? void 0 : e.id),
          (l.www_request_id = t),
          (l.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (l.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            ad_sourced_asset_id: a,
            action: i ? "OPENING" : "CLOSING",
          })),
          l),
      });
    }
    function It(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_example_videos_button_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.id),
          (i.www_request_id = t),
          (i.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (i.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            action: a ? "OPENING" : "CLOSING",
          })),
          i),
      });
    }
    function Tt(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_concept_generation_error_impression",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.id),
          (s.www_request_id = t),
          (s.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (s.is_duplicated_object = i),
          (s.object_creation_source = i
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: r,
            was_timeout: a,
            is_multi_media: (l != null ? l : 0) > 0,
            additional_image_count: l != null ? l : 0,
          })),
          s),
      });
    }
    function Dt(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName:
          "ads_gen_ai__video_gen_progressive_scripting_concept_generation_error_try_again_button_click",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.id),
          (i.www_request_id = t),
          (i.source =
            n != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(n)
              : null),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.metadata = JSON.stringify({
            is_multi_media: (a != null ? a : 0) > 0,
            additional_image_count: a != null ? a : 0,
          })),
          i),
      });
    }
    function xt(e, t, n, r, a, i, l, s, u, c, d) {
      var m,
        p = "ads_gen_ai__video_gen_video_playback_" + e;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: p,
        data:
          ((m = {}),
          (m.adgroup_id = t == null ? void 0 : t.id),
          (m.www_request_id = n),
          (m.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : null),
          (m.view_surface = s),
          (m.metadata = JSON.stringify({
            ent_generated_video: a,
            cdn_uri: i,
            playback_start_time: u,
            playback_end_time: c,
            playback_time: d,
            video_length: l,
          })),
          m),
      });
    }
    function $t(e, t) {
      var n;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_step_impression",
        data:
          ((n = {}),
          (n.adgroup_id = e == null ? void 0 : e.id),
          (n.www_request_id = t),
          n),
      });
    }
    function Pt(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_gql_request_vgs_creation_dispatch",
        data:
          ((i = {}),
          (i.adgroup_id = e == null ? void 0 : e.id),
          (i.is_duplicated_object = r),
          (i.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (i.www_request_id = n),
          (i.metadata = JSON.stringify({ rfv2_arm: a })),
          i),
      });
    }
    function Nt(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_gql_request_vgs_creation_success",
        data:
          ((s = {}),
          (s.adgroup_id = e == null ? void 0 : e.id),
          (s.is_duplicated_object = r),
          (s.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (s.www_request_id = n),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: a,
            rfv2_arm: i,
            latency_ms: l,
          })),
          s),
      });
    }
    function Mt(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_gql_request_vgs_creation_failure",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.is_duplicated_object = r),
          (l.object_creation_source = r
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.source = o(
            "AdsCreativeGenAILoggingUtils",
          ).convertEntryPointForLogging(t)),
          (l.www_request_id = n),
          (l.error_data = i),
          (l.metadata = JSON.stringify({ rfv2_arm: a })),
          l),
      });
    }
    function wt(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_vgs_overwritten_with_spec",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.is_duplicated_object = n),
          (l.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            rfv2_arm: r,
            existing_ent_video_generation_status_id: a,
            spec_ent_video_generation_status_id: i,
          })),
          l),
      });
    }
    function At(e, t, n, r, a) {
      var i;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_vgs_no_spec_overwrite",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.is_duplicated_object = n),
          (i.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            rfv2_arm: r,
            existing_ent_video_generation_status_id: a,
          })),
          i),
      });
    }
    function Ft(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_gql_request_cached_call_dispatch",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.is_duplicated_object = n),
          (s.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            rfv2_arm: r,
            ent_video_generation_status_id_passed: a,
            ad_image_identifier: i,
            trigger: l,
          })),
          s),
      });
    }
    function Ot(e, t, n) {
      var r;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_offline_gen_cached_call_skipped",
        data:
          ((r = {}),
          (r.adgroup_id = e),
          (r.www_request_id = t),
          (r.metadata = JSON.stringify({
            skip_reason: "suppressed_by_local_storage",
            trigger: n,
          })),
          r),
      });
    }
    function Bt(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_offline_gen_cached_call_skipped",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({
            skip_reason: "used_cached_video_gen_already_set",
            used_cached_video_gen_value: n,
            trigger: r,
          })),
          a),
      });
    }
    function Wt(e, t, n) {
      var r;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_offline_gen_cached_call_skipped",
        data:
          ((r = {}),
          (r.adgroup_id = e),
          (r.www_request_id = t),
          (r.metadata = JSON.stringify({
            skip_reason: "dedup_same_context",
            trigger: n,
          })),
          r),
      });
    }
    function qt(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_offline_gen_cached_call_skipped",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ skip_reason: n, trigger: r })),
          a),
      });
    }
    function Ut(e, t, n, r) {
      var a,
        i = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0),
        l = o("AdsCreativeGenAIEligibilityUtils").isGrabAndGoTreatment(i);
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: l
          ? "ads_gen_ai__video_gen_session_cached_call_skipped"
          : "ads_gen_ai__video_gen_portfolio_cached_call_skipped",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({
            cache_arm: l ? "grab_and_go" : "round_3",
            grab_and_go_treatment: i,
            skip_reason: n,
            trigger: r,
          })),
          a),
      });
    }
    function Vt(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_media_change_reset",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.is_duplicated_object = n),
          (s.object_creation_source = n
            ? "click_ad_duplicate"
            : "click_quick_create"),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            rfv2_arm: r != null ? r : null,
            previous_media_id: a != null ? a : null,
            new_media_id: i != null ? i : null,
            had_cached_results: l,
          })),
          s),
      });
    }
    function Ht(e, t, n, r, a, i, l) {
      var s,
        u = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0);
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName: "ads_gen_ai__video_gen_recipe_cards_impression",
          data:
            ((s = {}),
            (s.adgroup_id = e),
            (s.source =
              i != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    i,
                  )
                : void 0),
            (s.view_surface = l != null ? "recipe_browser" : void 0),
            (s.www_request_id = t),
            (s.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              grab_and_go_treatment: u,
              recipe_browser_version: l,
              recipe_source: a,
              recipe_variants: r.map(function (e) {
                var t = e.isSelected,
                  n = e.variantId;
                return { variant_id: n, is_selected: t };
              }),
            })),
            s),
        },
        {
          int: { grab_and_go_treatment: u },
          int_array: {
            variant_ids: r.map(function (e) {
              var t = e.variantId;
              return t;
            }),
          },
          string: { recipe_browser_version: l },
        },
      );
    }
    function Gt(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_recipe_select",
        data:
          ((l = {}),
          (l.ad_account_id = e),
          (l.metadata = JSON.stringify({
            recipe_id: t,
            recipe_name: n,
            recipe_type: r,
            total_selected: a,
            recipe_source: i,
          })),
          l),
      });
    }
    function zt(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_recipe_deselect",
        data:
          ((l = {}),
          (l.ad_account_id = e),
          (l.metadata = JSON.stringify({
            recipe_id: t,
            recipe_name: n,
            recipe_type: r,
            total_selected: a,
            recipe_source: i,
          })),
          l),
      });
    }
    function jt(e, t, n, r, a, i) {
      var l;
      (a === void 0 && (a = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName:
            "ads_gen_ai__video_gen_generated_videos_container_impression",
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (l.www_request_id = t),
            (l.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              pregen_cache_hit: a,
              selected_variant_ids: i,
            })),
            l),
        }));
    }
    function Kt(e, t, n, r, a) {
      var i;
      (a === void 0 && (a = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName:
            "ads_gen_ai__video_gen_generating_videos_container_impression",
          data:
            ((i = {}),
            (i.adgroup_id = e),
            (i.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (i.www_request_id = t),
            (i.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              pregen_cache_hit: a,
            })),
            i),
        }));
    }
    function Qt(e, t, n, r, a, i) {
      var l;
      (a === void 0 && (a = null),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName: "ads_gen_ai__video_gen_input_container_v2_impression",
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (l.www_request_id = t),
            (l.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              pregen_cache_hit: a,
              pregen_cache_outcome: i,
            })),
            l),
        }));
    }
    function Xt(e, t, n, r, a, i, l, s) {
      var u;
      a === void 0 && (a = null);
      var c = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0);
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName:
            "ads_gen_ai__video_gen_partial_preview_container_impression",
          data:
            ((u = {}),
            (u.adgroup_id = e),
            (u.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (u.www_request_id = t),
            (u.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              grab_and_go_treatment: c,
              pregen_cache_hit: a,
              pregen_cache_outcome: s,
              selected_variant_ids: i,
              mount_instance_id: l,
            })),
            u),
        },
        {
          bool: { pregen_cache_hit: a },
          int: { grab_and_go_treatment: c },
          int_array: { selected_variant_ids: i },
          string: {
            ent_video_generation_status_id: n,
            mount_instance_id: l,
            pregen_cache_outcome: s != null ? s : null,
            www_request_id: t,
          },
        },
      );
    }
    function Yt(e, t, n, r, a, i) {
      var l;
      a === void 0 && (a = null);
      var s = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0);
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName: "ads_gen_ai__video_gen_unification_container_impression",
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (l.www_request_id = t),
            (l.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              grab_and_go_treatment: s,
              pregen_cache_hit: a,
              selected_variant_ids: i,
            })),
            l),
        },
        {
          bool: { pregen_cache_hit: a },
          int: { grab_and_go_treatment: s },
          int_array: { selected_variant_ids: i },
          string: { ent_video_generation_status_id: n, www_request_id: t },
        },
      );
    }
    function Jt(e, t, n, r, a, i) {
      var l,
        s = "visible_with_variants_not_logged";
      (i.impressionLogged
        ? (s = "impression_logged")
        : i.becameVisible
          ? i.numTotalGenerated === 0
            ? (s = "no_videos_generated")
            : i.numRecipeSelectedNodes === 0
              ? (s = "no_recipe_selected_videos")
              : i.numSelectedVariantIds === 0 && (s = "selection_not_seeded")
          : (s = "never_visible"),
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce({
          eventName:
            "ads_gen_ai__video_gen_partial_preview_container_render_outcome",
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (l.www_request_id = t),
            (l.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              pregen_cache_hit: a,
              reason: s,
              impression_logged: i.impressionLogged,
              became_visible: i.becameVisible,
              num_total_generated: i.numTotalGenerated,
              num_recipe_selected_nodes: i.numRecipeSelectedNodes,
              num_selected_variant_ids: i.numSelectedVariantIds,
              num_placeholders: i.numPlaceholders,
              dwell_ms: i.dwellMs,
            })),
            l),
        }));
    }
    function Zt(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_input_v2_funnel_stage",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: n,
            pregen_cache_hit: a,
            pregen_cache_outcome: l.pregenCacheOutcome,
            stage: i,
            elapsed_since_mount_ms: l.elapsedSinceMountMs,
            current_step: l.currentStep,
            mount_instance_id: l.mountInstanceId,
            num_selected_variant_ids: l.numSelectedVariantIds,
            terminal_reason: l.terminalReason,
            impression_logged: l.impressionLogged,
            became_visible: l.becameVisible,
            status_query_resolved: l.statusQueryResolved,
            num_total_generated: l.numTotalGenerated,
            num_recipe_selected_nodes: l.numRecipeSelectedNodes,
            num_placeholders: l.numPlaceholders,
            dwell_ms: l.dwellMs,
          })),
          s),
      });
    }
    function en(e, t, n, r, o, a) {
      var i = "visible_with_variants_not_logged";
      (a.impressionLogged
        ? (i = "impression_logged")
        : a.becameVisible
          ? a.statusQueryResolved
            ? a.numTotalGenerated === 0 && a.numPlaceholders > 0
              ? (i = "generation_in_progress")
              : a.numTotalGenerated === 0
                ? (i = "no_videos_generated")
                : a.numRecipeSelectedNodes === 0
                  ? (i = "no_recipe_selected_videos")
                  : a.numSelectedVariantIds === 0 &&
                    (i = "selection_not_seeded")
            : (i = "status_query_not_resolved")
          : (i = "never_visible"),
        Zt(e, t, n, r, o, "partial_preview_container_render_outcome", {
          becameVisible: a.becameVisible,
          dwellMs: a.dwellMs,
          elapsedSinceMountMs: a.dwellMs,
          impressionLogged: a.impressionLogged,
          mountInstanceId: a.mountInstanceId,
          numPlaceholders: a.numPlaceholders,
          numRecipeSelectedNodes: a.numRecipeSelectedNodes,
          numSelectedVariantIds: a.numSelectedVariantIds,
          numTotalGenerated: a.numTotalGenerated,
          pregenCacheOutcome: a.pregenCacheOutcome,
          statusQueryResolved: a.statusQueryResolved,
          terminalReason: i,
        }));
    }
    function tn(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_partial_preview_stock_videos_loaded",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            ent_video_generation_status_id: n,
            latency_ms: Date.now() - a,
          })),
          i),
      });
    }
    function nn(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName:
            "ads_gen_ai__video_gen_partial_preview_generating_overlay_impression",
          data:
            ((i = {}),
            (i.www_request_id = e),
            (i.metadata = JSON.stringify({
              ent_video_generation_status_id: t,
              ent_generated_video: n,
              variant_id: r,
              card_index: a,
            })),
            i),
        },
        { int: { variant_id: r } },
      );
    }
    function rn(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_flexible_infra_dispatch",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.source =
            a != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(a)
              : void 0),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            ad_image_identifier: n,
            is_pac_adgroup: i,
            is_shadow: r,
          })),
          l),
      });
    }
    function on(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_flexible_infra_kickoff_success",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.www_request_id = t),
          (i.metadata = JSON.stringify({
            ad_image_identifier: n,
            latency_ms: Date.now() - r,
            video_generation_status_id: a,
          })),
          i),
      });
    }
    function an(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_flexible_infra_kickoff_failure",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.www_request_id = t),
          (i.message = a),
          (i.metadata = JSON.stringify({
            ad_image_identifier: n,
            latency_ms: Date.now() - r,
          })),
          i),
      });
    }
    function ln(e, t, n, r, a) {
      var i,
        l = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0);
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName:
            "ads_gen_ai__video_gen_recipe_browser_container_impression",
          data:
            ((i = {}),
            (i.adgroup_id = e),
            (i.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (i.view_surface = a),
            (i.www_request_id = t),
            (i.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              grab_and_go_treatment: l,
              recipe_browser_version: a,
            })),
            i),
        },
        {
          int: { grab_and_go_treatment: l },
          string: {
            ent_video_generation_status_id: n,
            recipe_browser_version: a,
            www_request_id: t,
          },
        },
      );
    }
    function sn(e, t, n, r, a) {
      (e !== "" && c.has(e)) ||
        (e !== "" && c.add(e),
        o("AdsCreativeGenAIVideoGenLogger").addVideoGenQPLPoint(
          "template_preview_shown",
          {
            int: {
              card_index: r,
              grab_and_go_treatment: o(
                "AdsCreativeGenAIEligibilityUtils",
              ).getGrabAndGoTreatment(!0),
              variant_id: n,
            },
            string: {
              ent_video_generation_status_id: t,
              recipe_browser_version: a,
              www_request_id: e,
            },
          },
        ));
    }
    var un = 6;
    function cn(e, t, n, r, a, i, l, s) {
      var u, c;
      (o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_recipe_card_video_load",
          data:
            ((u = {}),
            (u.adgroup_id = e),
            (u.www_request_id = t),
            (u.metadata = JSON.stringify({
              is_grab_and_go: o(
                "AdsCreativeVideoGenAdoptablePreviewUtils",
              ).isInGrabAndGo(),
              ent_video_generation_status_id: n,
              variant_id: r,
              recipe_name: a,
              recipe_type: i,
              recipe_source: l,
              card_index: s,
            })),
            u),
        },
        { int: { card_index: s, variant_id: r } },
      ),
        !(s >= un) &&
          o(
            "AdsCreativeGenAIVideoGenLogger",
          ).AdsCreativeGenAIVideoGenLogger.log(
            {
              eventName:
                "ads_gen_ai__video_gen_recipe_card_" + (s + 1) + "_video_load",
              data:
                ((c = {}),
                (c.adgroup_id = e),
                (c.www_request_id = t),
                (c.metadata = JSON.stringify({
                  is_grab_and_go: o(
                    "AdsCreativeVideoGenAdoptablePreviewUtils",
                  ).isInGrabAndGo(),
                  ent_video_generation_status_id: n,
                  variant_id: r,
                  recipe_name: a,
                  recipe_type: i,
                  recipe_source: l,
                })),
                c),
            },
            { int: { variant_id: r } },
          ));
    }
    function dn(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_partial_preview_card_select",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: n,
            ent_generated_video: a,
            total_selected: i,
            total_available: l,
          })),
          s),
      });
    }
    function mn(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_partial_preview_card_deselect",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (s.www_request_id = t),
          (s.metadata = JSON.stringify({
            ent_video_generation_status_id: n,
            ent_generated_video: a,
            total_selected: i,
            total_available: l,
          })),
          s),
      });
    }
    function pn(e, t, n, r, a, i, l, s, u) {
      var c;
      if (
        (l === void 0 && (l = null),
        s === void 0 && (s = null),
        u === void 0 && (u = null),
        !(i < 0 || i >= 3))
      ) {
        var d = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0);
        o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce(
          {
            eventName:
              "ads_gen_ai__video_gen_partial_preview_card_" +
              (i + 1) +
              "_impression",
            data:
              ((c = {}),
              (c.adgroup_id = e),
              (c.source =
                r != null
                  ? o(
                      "AdsCreativeGenAILoggingUtils",
                    ).convertEntryPointForLogging(r)
                  : void 0),
              (c.www_request_id = t),
              (c.metadata = JSON.stringify({
                ent_video_generation_status_id: n,
                grab_and_go_treatment: d,
                variant_id: a,
                card_index: i,
                model_open_to_preview: l,
                cache_hit_stage: s,
                pregen_cache_hit: u,
              })),
              c),
          },
          {
            bool: { pregen_cache_hit: u },
            int: {
              card_index: i,
              grab_and_go_treatment: d,
              model_open_to_preview: l,
              variant_id: a,
            },
            string: {
              cache_hit_stage: s != null ? s : null,
              ent_video_generation_status_id: n,
              www_request_id: t,
            },
          },
        );
      }
    }
    function _n(e, t, n, r, a, i, l, s) {
      var u;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName:
            "ads_gen_ai__video_gen_partial_preview_error_card_impression",
          data:
            ((u = {}),
            (u.adgroup_id = e),
            (u.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (u.www_request_id = t),
            (u.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              ent_generated_video: a,
              variant_id: i,
              card_index: l,
              error_type: s,
            })),
            u),
        },
        { int: { variant_id: i } },
      );
    }
    function fn(e, t, n, r, a, i) {
      var l;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName: "ads_gen_ai__video_gen_partial_preview_card_timeout",
          data:
            ((l = {}),
            (l.www_request_id = e),
            (l.metadata = JSON.stringify({
              ent_video_generation_status_id: t,
              ent_generated_video: n,
              variant_id: r,
              card_index: a,
              timeout_ms: i,
            })),
            l),
        },
        {
          int: { card_index: a, timeout_ms: i, variant_id: r },
          string: { ent_generated_video: n, ent_video_generation_status_id: t },
        },
      );
    }
    function gn(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_partial_preview_try_again_click",
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (l.www_request_id = t),
            (l.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              ent_generated_video: a,
              variant_id: i,
            })),
            l),
        },
        { int: { variant_id: i } },
      );
    }
    function hn(e, t, n, r) {
      var a;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_generation_error_impression",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ ent_video_generation_status_id: n })),
          a),
      });
    }
    function yn(e, t, n, r, a, i, l) {
      var s;
      l === void 0 && (l = null);
      var u = g(l);
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_failed_video_card_impression",
          data:
            ((s = {}),
            (s.adgroup_id = e),
            (s.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (s.www_request_id = t),
            (s.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              ent_generated_video: a,
              generation_media_sources: u,
              variant_id: i,
            })),
            s),
        },
        { string: { generation_media_sources: u, variant_id: i } },
      );
    }
    function Cn(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_failed_video_card_retry_click",
          data:
            ((s = {}),
            (s.adgroup_id = e),
            (s.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (s.www_request_id = t),
            (s.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              ent_generated_video: a,
              variant_id: i,
              preview_version: l,
            })),
            s),
        },
        { int: { variant_id: i }, string: { preview_version: l } },
      );
    }
    function bn(e, t, n) {
      var r;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_video_player_error",
        data:
          ((r = {}),
          (r.metadata = JSON.stringify(
            babelHelpers.extends({}, n, { error_type: e, video_url: t }),
          )),
          r),
      });
    }
    function vn(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_video_selection_update_error",
        data:
          ((n = {}),
          (n.message = e),
          (n.metadata = JSON.stringify(babelHelpers.extends({}, t))),
          n),
      });
    }
    function Sn(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_image_upload_error",
        data:
          ((n = {}),
          (n.message = e),
          (n.metadata = JSON.stringify(babelHelpers.extends({}, t))),
          n),
      });
    }
    function Rn(e) {
      var t;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_recipe_card_video_error",
        data:
          ((t = {}),
          (t.metadata = JSON.stringify(babelHelpers.extends({}, e))),
          t),
      });
    }
    function Ln(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_music_preview_error",
        data:
          ((n = {}),
          (n.message = e),
          (n.metadata = JSON.stringify(babelHelpers.extends({}, t))),
          n),
      });
    }
    function En(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_static_concept_add_scene_error",
        data:
          ((n = {}),
          (n.message = e),
          (n.metadata = JSON.stringify(babelHelpers.extends({}, t))),
          n),
      });
    }
    function kn(e, t) {
      var n;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_l1_error_boundary_crash",
        data:
          ((n = {}),
          (n.message = e),
          (n.metadata = JSON.stringify(babelHelpers.extends({}, t))),
          n),
      });
    }
    function In(e, t, n, r) {
      var a;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_concept_editor_header_impression",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ ent_video_generation_status_id: n })),
          a),
      });
    }
    function Tn(e, t, n, r) {
      var a;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_concept_editor_back_button_click",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (a.www_request_id = t),
          (a.metadata = JSON.stringify({ ent_video_generation_status_id: n })),
          a),
      });
    }
    function Dn(e, t, n, r, a, i) {
      var l;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log({
        eventName: "ads_gen_ai__video_gen_customize_button_click",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.source =
            r != null
              ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(r)
              : void 0),
          (l.www_request_id = t),
          (l.metadata = JSON.stringify({
            ent_video_generation_status_id: n,
            selected_video_ids: a,
            selected_variant_ids: i,
            num_selected: a.length,
          })),
          l),
      });
    }
    function xn(e, t, n, r, a) {
      var i;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce(
        {
          eventName: "ads_gen_ai__video_gen_concept_editor_screen_impression",
          data:
            ((i = {}),
            (i.adgroup_id = e),
            (i.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (i.www_request_id = t),
            (i.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              num_concepts: a.length,
              displayed_video_ids: a
                .map(function (e) {
                  return e.id;
                })
                .filter(Boolean),
              displayed_variant_ids: a
                .map(function (e) {
                  return e.variant_id;
                })
                .filter(Boolean),
            })),
            i),
        },
        {
          int_array: {
            variant_ids: a
              .map(function (e) {
                return e.variant_id;
              })
              .filter(Boolean),
          },
        },
      );
    }
    function $n(e, t) {
      var n;
      o(
        "AdsCreativeGenAIVideoGenLogger",
      ).AdsCreativeGenAIVideoGenLogger.logOnce({
        eventName: "ads_gen_ai__video_gen_adoption_insights_impression",
        data:
          ((n = {}),
          (n.metadata = JSON.stringify({
            ad_account_id: e,
            chosen_insight_template_id: t,
          })),
          n),
      });
    }
    function Pn() {
      var e = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment();
      return o("AdsCreativeGenAIEligibilityUtils").isGrabAndGoTreatment(e)
        ? e
        : null;
    }
    function Nn(e, t, n, r, a, i, l, s, u, c, d, m, p) {
      var f;
      (c === void 0 && (c = !0),
        d === void 0 && (d = null),
        m === void 0 && (m = null),
        p === void 0 && (p = null));
      var h = Pn();
      if (s.cdnUri != null) {
        var y = _(n, a),
          C = g(p),
          b =
            ((f = {}),
            (f.adgroup_id = e),
            (f.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (f.www_request_id = t),
            (f.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              ent_generated_video: a,
              cdn_url_ready: !0,
              ent_video_ready: s.entVideoId != null,
              generation_media_sources: C,
              variant_id: i,
              is_enhanced: l,
              component: u,
              cache_hit_stage: d,
              pregen_cache_hit: m,
              is_grab_and_go: o(
                "AdsCreativeVideoGenAdoptablePreviewUtils",
              ).isInGrabAndGo(),
              grab_and_go_treatment: h,
              trigger_type: y,
            })),
            f),
          v = {
            bool: {
              cdn_url_ready: !0,
              ent_video_ready: s.entVideoId != null,
              is_enhanced: l,
              pregen_cache_hit: m,
            },
            int: { grab_and_go_treatment: h, variant_id: i },
            string: {
              cache_hit_stage: d != null ? d : null,
              component: u,
              ent_generated_video: a,
              ent_video_generation_status_id: n,
              generation_media_sources: C,
              trigger_type: y,
              www_request_id: t,
            },
          };
        (o(
          "AdsCreativeGenAIVideoGenLogger",
        ).AdsCreativeGenAIVideoGenLogger.logOnce(
          {
            eventName: l
              ? "ads_gen_ai__video_gen_high_res_preview_impression"
              : "ads_gen_ai__video_gen_low_res_preview_impression",
            data: b,
          },
          v,
        ),
          c &&
            o(
              "AdsCreativeGenAIVideoGenLogger",
            ).AdsCreativeGenAIVideoGenLogger.logOnce(
              {
                eventName:
                  "ads_gen_ai__video_gen_video_variation_preview_impression",
                data: b,
              },
              v,
            ));
      }
    }
    function Mn(e) {
      var t,
        n = e.adgroupId,
        r = e.component,
        a = e.entryPoint,
        i = e.entVideoGenerationStatusId,
        l = e.recipeBrowserVersion,
        s = l === void 0 ? null : l,
        u = e.requestId,
        c = e.templateCardId,
        m = c === void 0 ? null : c,
        p = e.variantId,
        f = e.videoId,
        g = f === void 0 ? null : f,
        h = Pn(),
        y = m != null,
        C = y ? null : g,
        b = y ? m : null;
      if (!(h == null || (y ? b == null || b === "" : C == null || C === ""))) {
        var v = y ? null : _(i, C),
          S = y ? "template" : "ready_video",
          R = o("AdsCreativeVideoGenAdoptablePreviewUtils").isInGrabAndGo(),
          L =
            ((t = {}),
            (t.adgroup_id = n),
            (t.source =
              a != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    a,
                  )
                : void 0),
            (t.video_id = C),
            (t.view_surface = d),
            (t.www_request_id = u),
            (t.metadata = JSON.stringify({
              component: r,
              ent_generated_video: C,
              ent_video_generation_status_id: i,
              grab_and_go_treatment: h,
              is_grab_and_go: R,
              is_template: y,
              recipe_browser_version: s,
              surface: d,
              template_card_id: b,
              trigger_type: v,
              variant_id: p,
              viewport_item_type: S,
              visibility_threshold_pct:
                o("useAdsUnifiedMediaVariantMediaVisibility")
                  .UNIFIED_MEDIA_VISIBILITY_THRESHOLD * 100,
            })),
            t);
        y
          ? o(
              "AdsCreativeGenAIVideoGenLogger",
            ).AdsCreativeGenAIVideoGenLogger.logPEOnly({
              eventName: "ads_gen_ai__video_gen_template_video_visible",
              data: L,
            })
          : o(
              "AdsCreativeGenAIVideoGenLogger",
            ).AdsCreativeGenAIVideoGenLogger.logPEOnly({
              eventName: "ads_gen_ai__video_gen_generated_video_visible",
              data: L,
            });
      }
    }
    function wn(e, t, n, r, a, i, l, s, u, c) {
      var d,
        m = Pn();
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_generate_click",
          data:
            ((d = {}),
            (d.ad_account_id = e),
            (d.adgroup_id = t),
            (d.source =
              a != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    a,
                  )
                : void 0),
            (d.view_surface = u),
            (d.www_request_id = n),
            (d.metadata = JSON.stringify({
              ent_video_generation_status_id: r,
              variant_id: i,
              recipe_source: l,
              recipe_type: s,
              is_grab_and_go: o(
                "AdsCreativeVideoGenAdoptablePreviewUtils",
              ).isInGrabAndGo(),
              grab_and_go_treatment: m,
              selected_image_ids: c,
              selected_image_count: c == null ? void 0 : c.length,
            })),
            d),
        },
        {
          int: {
            grab_and_go_treatment: m,
            selected_image_count: c == null ? void 0 : c.length,
            variant_id: i,
          },
          string: {
            ent_video_generation_status_id: r,
            recipe_browser_version: u,
            recipe_source: l,
            recipe_type: s,
            www_request_id: n,
          },
          string_array: { selected_image_ids: c },
        },
      );
    }
    function An(e) {
      var t,
        n = e.adAccountId,
        r = e.adgroupId,
        a = e.entGeneratedVideoId,
        i = e.entryPoint,
        l = e.entVideoGenerationStatusId,
        s = e.failureStage,
        u = e.generationRequestId,
        c = e.generationStatus,
        d = e.latencyMs,
        m = e.message,
        p = e.outcome,
        _ = e.recipeBrowserVersion,
        f = e.requestId,
        g = e.variantId,
        h = Pn();
      h != null &&
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
          {
            eventName: "ads_gen_ai__video_gen_generation_result",
            data:
              ((t = {}),
              (t.ad_account_id = n),
              (t.adgroup_id = r),
              (t.message = m),
              (t.source =
                i != null
                  ? o(
                      "AdsCreativeGenAILoggingUtils",
                    ).convertEntryPointForLogging(i)
                  : void 0),
              (t.view_surface = _),
              (t.www_request_id = u),
              (t.metadata = JSON.stringify({
                ent_generated_video: a,
                ent_video_generation_status_id: l,
                failure_stage: s,
                generation_request_id: u,
                generation_status: c,
                grab_and_go_treatment: h,
                latency_ms: d,
                latency_start: "template_click",
                outcome: p,
                recipe_browser_version: _,
                request_id: f,
                trigger_type: "template",
                variant_id: g,
              })),
              t),
          },
          {
            int: { grab_and_go_treatment: h, latency_ms: d, variant_id: g },
            string: {
              ent_generated_video: a,
              ent_video_generation_status_id: l,
              failure_stage: s,
              generation_request_id: u,
              generation_status: c != null ? c : null,
              latency_start: "template_click",
              outcome: p,
              recipe_browser_version: _,
              request_id: f,
              trigger_type: "template",
            },
          },
        );
    }
    function Fn(e) {
      An(
        babelHelpers.extends({}, e, {
          failureStage: null,
          message: null,
          outcome: "success",
        }),
      );
    }
    function On(e) {
      An(babelHelpers.extends({}, e, { outcome: "failure" }));
    }
    function Bn(t) {
      var n,
        a,
        i = t.adAccountId,
        l = t.adgroupId,
        c = t.cardIndex,
        d = t.entGeneratedVideoId,
        m = t.entryPoint,
        p = t.entVideoGenerationStatusId,
        _ = t.generationStatus,
        f = t.grabAndGoArm,
        g = t.outcome,
        h = t.recipeBrowserVersion,
        y = t.requestId,
        C = t.variantId,
        b = o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(!0),
        v = s.get(y),
        S =
          v != null
            ? Math.max(0, Math.round((e || (e = r("performanceNow")))() - v))
            : null;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName: "ads_gen_ai__video_gen_generation_result",
          data:
            ((n = {}),
            (n.ad_account_id = i),
            (n.adgroup_id = l),
            (n.source =
              m != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    m,
                  )
                : void 0),
            (n.view_surface = h),
            (n.www_request_id = y),
            (n.metadata = JSON.stringify({
              card_index: c,
              ent_generated_video: d,
              ent_video_generation_status_id: p,
              failure_stage: g === "failure" ? "generation" : null,
              generation_status: _,
              grab_and_go_arm: f,
              grab_and_go_treatment: b,
              latency_ms: S,
              latency_start: "media_continue",
              outcome: g,
              recipe_browser_version: h,
              trigger_type: "automatic",
              variant_id: C,
            })),
            n),
        },
        {
          int: {
            card_index: c,
            grab_and_go_arm: f,
            grab_and_go_treatment: b,
            latency_ms: S,
            variant_id: C,
          },
          string: {
            ent_generated_video: d,
            ent_video_generation_status_id: p,
            failure_stage: g === "failure" ? "generation" : null,
            generation_status: _,
            latency_start: "media_continue",
            outcome: g,
            recipe_browser_version: h,
            trigger_type: "automatic",
            www_request_id: y,
          },
        },
      );
      var R = (a = u.get(y)) != null ? a : new Set();
      (R.add(c), R.size >= 3 ? (s.delete(y), u.delete(y)) : u.set(y, R));
    }
    function Wn(e, t, n, r, a, i) {
      var l,
        s = Pn();
      if (s != null) {
        var u = _(n, a);
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
          {
            eventName: "ads_gen_ai__video_gen_enhance_click",
            data:
              ((l = {}),
              (l.adgroup_id = e),
              (l.source =
                r != null
                  ? o(
                      "AdsCreativeGenAILoggingUtils",
                    ).convertEntryPointForLogging(r)
                  : void 0),
              (l.www_request_id = t),
              (l.metadata = JSON.stringify({
                ent_video_generation_status_id: n,
                ent_generated_video: a,
                variant_id: i,
                is_grab_and_go: o(
                  "AdsCreativeVideoGenAdoptablePreviewUtils",
                ).isInGrabAndGo(),
                grab_and_go_treatment: s,
                trigger_type: u,
              })),
              l),
          },
          {
            int: { grab_and_go_treatment: s, variant_id: i },
            string: {
              ent_generated_video: a,
              ent_video_generation_status_id: n,
              trigger_type: u,
              www_request_id: t,
            },
          },
        );
      }
    }
    function qn(e, t, n, r, a, i, l) {
      var s,
        u = Pn();
      if (u != null) {
        var c = l ? null : a,
          d = l ? a : null;
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
          {
            eventName: "ads_gen_ai__video_gen_media_card_impression",
            data:
              ((s = {}),
              (s.adgroup_id = e),
              (s.source =
                r != null
                  ? o(
                      "AdsCreativeGenAILoggingUtils",
                    ).convertEntryPointForLogging(r)
                  : void 0),
              (s.www_request_id = t),
              (s.metadata = JSON.stringify({
                ent_video_generation_status_id: n,
                ent_generated_video: c,
                template_card_id: d,
                variant_id: i,
                is_recipe_template: l,
                grab_and_go_treatment: u,
              })),
              s),
          },
          {
            bool: { is_recipe_template: l },
            int: { grab_and_go_treatment: u, variant_id: i },
            string: {
              ent_generated_video: c,
              ent_video_generation_status_id: n,
              template_card_id: d,
              www_request_id: t,
            },
          },
        );
      }
    }
    function Un(e, t, n, r, a, i, l, s, u) {
      var c,
        d = Pn();
      if (d != null) {
        var m = l ? null : a,
          p = l ? a : null;
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
          {
            eventName: s
              ? "ads_gen_ai__video_gen_media_card_video_play"
              : "ads_gen_ai__video_gen_media_card_video_pause",
            data:
              ((c = {}),
              (c.adgroup_id = e),
              (c.source =
                r != null
                  ? o(
                      "AdsCreativeGenAILoggingUtils",
                    ).convertEntryPointForLogging(r)
                  : void 0),
              (c.www_request_id = t),
              (c.metadata = JSON.stringify({
                ent_video_generation_status_id: n,
                ent_generated_video: m,
                template_card_id: p,
                variant_id: i,
                is_recipe_template: l,
                is_autoplay: u,
                grab_and_go_treatment: d,
              })),
              c),
          },
          {
            bool: { is_autoplay: u, is_recipe_template: l },
            int: { grab_and_go_treatment: d, variant_id: i },
            string: {
              ent_generated_video: m,
              ent_video_generation_status_id: n,
              template_card_id: p,
              www_request_id: t,
            },
          },
        );
      }
    }
    function Vn(e, t, n, r, a, i, l, s, u) {
      var c,
        d = Pn();
      if (d != null) {
        var m = s ? null : a,
          p = s ? a : null;
        o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
          {
            eventName:
              "ads_gen_ai__video_gen_media_card_image_selection_change",
            data:
              ((c = {}),
              (c.adgroup_id = e),
              (c.source =
                r != null
                  ? o(
                      "AdsCreativeGenAILoggingUtils",
                    ).convertEntryPointForLogging(r)
                  : void 0),
              (c.www_request_id = t),
              (c.metadata = JSON.stringify({
                ent_video_generation_status_id: n,
                ent_generated_video: m,
                template_card_id: p,
                variant_id: i,
                image_id: l,
                is_recipe_template: s,
                is_selected: u,
                grab_and_go_treatment: d,
              })),
              c),
          },
          {
            bool: { is_recipe_template: s, is_selected: u },
            int: { grab_and_go_treatment: d, variant_id: i },
            string: {
              ent_generated_video: m,
              ent_video_generation_status_id: n,
              image_id: l,
              template_card_id: p,
              www_request_id: t,
            },
          },
        );
      }
    }
    function Hn(e, t, n, r, a, i, l) {
      var s;
      o("AdsCreativeGenAIVideoGenLogger").AdsCreativeGenAIVideoGenLogger.log(
        {
          eventName:
            "ads_gen_ai__video_gen_concept_editor_placeholder_card_impression",
          data:
            ((s = {}),
            (s.adgroup_id = e),
            (s.source =
              r != null
                ? o("AdsCreativeGenAILoggingUtils").convertEntryPointForLogging(
                    r,
                  )
                : void 0),
            (s.www_request_id = t),
            (s.metadata = JSON.stringify({
              ent_video_generation_status_id: n,
              variant_id: a,
              placeholder_index: i,
              total_placeholders: l,
            })),
            s),
        },
        { int: { variant_id: a } },
      );
    }
    ((l.DeleteConceptEventType = f),
      (l.logL1Sourcing = h),
      (l.logVideoGenProgressBar99Dwell = y),
      (l.logVideoGenerationStageDwell = C),
      (l.logStepEligible = b),
      (l.logStepIneligible = v),
      (l.logL1Ineligibility = S),
      (l.logL1Eligible = R),
      (l.logMediaModalOpen = L),
      (l.logMediaModalContinue = E),
      (l.logTextModalOpen = k),
      (l.logTextModalContinue = I),
      (l.logVideoGenModalOpen = T),
      (l.logVideoGenModalContinue = D),
      (l.logVideoGenModalClose = x),
      (l.logLoadingScreenImpression = $),
      (l.logClickedGenerateVideosButton = P),
      (l.logClickedGenerateMoreVideosButton = N),
      (l.logVideoVariationPreview = M),
      (l.logVideoGenSuccessToast = w),
      (l.logVideoVariationPreviewSuccessToast = A),
      (l.logVideoGenSuccessToastClickApplyCTA = F),
      (l.logVideoGenSuccessToastClickPreviewCTA = O),
      (l.logVideoGenSuccessToastDismiss = B),
      (l.logVideoGenErrorToast = W),
      (l.logVideoGenErrorToastClickOpenModel = q),
      (l.logVideoGenErrorToastDismiss = U),
      (l.logVideoPlayButtonClicked = V),
      (l.logVideoPopoverHover = H),
      (l.logVideoEditButton = G),
      (l.logApplyChangesButton = z),
      (l.logUndoChangesButton = j),
      (l.logUndoAppliedChangesButton = K),
      (l.logAddClipButton = Q),
      (l.logRemoveClipButton = X),
      (l.logTextOverlayToggleButton = Y),
      (l.logTextOverlayTextChange = J),
      (l.logMusicToggleButton = Z),
      (l.logMusicChange = ee),
      (l.logVoiceoverTypeChange = te),
      (l.logVoiceoverSamplePlay = ne),
      (l.logVoiceoverOptInToggle = re),
      (l.logReorderClips = oe),
      (l.logClipImageUpload = ae),
      (l.logMediaScreenImpression = ie),
      (l.logPrefetchSourcedAssets = le),
      (l.logSourcedAssetsDisplayed = se),
      (l.logVideoGenModalSave = ue),
      (l.logImageWarning = ce),
      (l.logEditErrorScreen = de),
      (l.logGQLResultFromEditPipelineAsyncKickoffSuccess = me),
      (l.logGQLResultFromEditPipelineAsyncKickoffFailure = pe),
      (l.logGQLResultFromCreationPipelineAsyncKickoffSuccess = _e),
      (l.logGQLResultFromCreationPipelineAsyncKickoffFailure = fe),
      (l.logGQLResultFromUndoSuccess = ge),
      (l.logGQLResultFromEditScreenMusicOptionsSuccess = he),
      (l.logGQLResultFromPregenQuerySourcedAssetSuccess = ye),
      (l.logGQLResultFromPregenQuerySourcedAssetFailure = Ce),
      (l.logGQLResultFromUploadImageToSourcedAssetSuccess = be),
      (l.logGQLResultFromUploadImageToSourcedAssetFailure = ve),
      (l.logL1LoadingStateImpression = Se),
      (l.logL1LoadingStateClick = Re),
      (l.logL1LErrorStateImpression = Le),
      (l.logL1LErrorStateClick = Ee),
      (l.logL1WithAdoptionImpression = ke),
      (l.logL1WithAdoptionClick = Ie),
      (l.logL1WithoutAdoptionImpression = Te),
      (l.logL1WithoutAdoptionClick = De),
      (l.logL1AdoptedVideosNotShown = xe),
      (l.logL1GetStartedImpression = $e),
      (l.logL1GetStartedClick = Pe),
      (l.logL1AccordionImpression = Ne),
      (l.logL1AccordionEditClick = Me),
      (l.logL1AccordionDeleteClick = we),
      (l.logL1GetStartedEntrypointImpression = Ae),
      (l.logL1AccordionThumbnailHover = Fe),
      (l.logSourcedAssetMediaImpression = Oe),
      (l.logMediaUploadButton = Be),
      (l.logSelectAllMediaButton = We),
      (l.logL1Eligibility = qe),
      (l.logMediaPickerMultiMediaEligible = Ue),
      (l.logL1MultiMediaEligible = Ve),
      (l.logVideoGenAnimationCheckIneligible = He),
      (l.logVideoGenAnimationGKComparison = Ge),
      (l.logMultiMediaMultipleImagesSelected = ze),
      (l.logMultiMediaMediaSelectionImpression = je),
      (l.logGQLRequestAdIntentSuccess = Ke),
      (l.logGQLRequestAdIntentFailure = Qe),
      (l.logErrorGenerateVideosButton = Xe),
      (l.logGQLResultFromOfflineCachedVideoQueryHitSuccess = Ye),
      (l.logGQLResultFromOfflineCachedVideoQueryMissSuccess = Je),
      (l.logGQLResultFromOfflineCachedVideoQueryFailure = Ze),
      (l.logPortfolioCachedCallDispatch = et),
      (l.logVideoGenSessionCachedCallDispatch = tt),
      (l.logVideoGenSessionCachedCallResult = nt),
      (l.logGQLResultFromPortfolioCachedVideoQueryHitSuccess = rt),
      (l.logGQLResultFromPortfolioCachedVideoQueryMissSuccess = ot),
      (l.logGQLResultFromPortfolioCachedVideoQueryFailure = at),
      (l.logModalContentContainerError = it),
      (l.logProgressiveScriptingRefineAIInputsImpression = lt),
      (l.logProgressiveScriptingConceptCardImpression = st),
      (l.logConceptCardThumbnailLoadedImpression = ut),
      (l.logConceptCardFullyLoadedImpression = ct),
      (l.logStaticConceptCardImpression = dt),
      (l.logProgressiveScriptingSceneClick = mt),
      (l.logProgressiveScriptingAddSceneSuccess = pt),
      (l.logProgressiveScriptingAddSceneFailure = _t),
      (l.logProgressiveScriptingDeleteSceneButtonClick = ft),
      (l.logProgressiveScriptingDeleteSceneSuccess = gt),
      (l.logProgressiveScriptingDeleteSceneFailure = ht),
      (l.logProgressiveScriptingReplaceSceneButtonClick = yt),
      (l.logProgressiveScriptingReplaceSceneSuccess = Ct),
      (l.logProgressiveScriptingReplaceSceneFailure = bt),
      (l.logProgressiveScriptingPencilButtonClick = vt),
      (l.logProgressiveScriptingRefineAIInputUpdateButtonClick = St),
      (l.logProgressiveScriptingRefineAIInputUpdateSuccess = Rt),
      (l.logProgressiveScriptingRefineAIInputUpdateFailure = Lt),
      (l.logProgressiveScriptingRefineAIInputCancelButtonClick = Et),
      (l.logProgressiveScriptingRefineAIInputButtonClick = kt),
      (l.logProgressiveScriptingExampleVideosButtonClick = It),
      (l.logProgressiveScriptingConceptGenerationErrorImpression = Tt),
      (l.logProgressiveScriptingConceptGenerationErrorTryAgainButtonClick = Dt),
      (l.logVideoPlaybackEvent = xt),
      (l.logVideoGenStepImpression = $t),
      (l.logEarlyVgsCreationDispatch = Pt),
      (l.logEarlyVgsCreationSuccess = Nt),
      (l.logEarlyVgsCreationFailure = Mt),
      (l.logVgsOverwrittenWithSpec = wt),
      (l.logVgsNoSpecOverwrite = At),
      (l.logCachedCallDispatch = Ft),
      (l.logCachedCallSkippedSuppressed = Ot),
      (l.logCachedCallSkippedAlreadyUsed = Bt),
      (l.logCachedCallSkippedDedup = Wt),
      (l.logCachedCallSkippedGate = qt),
      (l.logPortfolioCachedCallSkipped = Ut),
      (l.logMediaChangeReset = Vt),
      (l.logRecipeCardsImpression = Ht),
      (l.logRecipeSelect = Gt),
      (l.logRecipeDeselect = zt),
      (l.logGeneratedVideosContainerImpression = jt),
      (l.logGeneratingVideosContainerImpression = Kt),
      (l.logInputContainerV2Impression = Qt),
      (l.logPartialPreviewContainerImpression = Xt),
      (l.logUnificationContainerImpression = Yt),
      (l.logPartialPreviewContainerRenderOutcome = Jt),
      (l.logInputContainerV2FunnelStage = Zt),
      (l.logInputContainerV2FunnelRenderOutcome = en),
      (l.logPartialPreviewStockVideosLoaded = tn),
      (l.logPartialPreviewGeneratingOverlayImpression = nn),
      (l.logFlexibleInfraDispatch = rn),
      (l.logFlexibleInfraKickoffSuccess = on),
      (l.logFlexibleInfraKickoffFailure = an),
      (l.logRecipeBrowserContainerImpression = ln),
      (l.logTemplatePreviewShown = sn),
      (l.logRecipeCardVideoLoad = cn),
      (l.logPartialPreviewCardSelect = dn),
      (l.logPartialPreviewCardDeselect = mn),
      (l.logPartialPreviewCardImpression = pn),
      (l.logPartialPreviewErrorCardImpression = _n),
      (l.logPartialPreviewCardTimeout = fn),
      (l.logPartialPreviewTryAgainClick = gn),
      (l.logGenerationErrorImpression = hn),
      (l.logFailedVideoCardImpression = yn),
      (l.logFailedVideoCardRetryClick = Cn),
      (l.logVideoPlayerError = bn),
      (l.logVideoSelectionUpdateError = vn),
      (l.logImageUploadError = Sn),
      (l.logRecipeCardVideoError = Rn),
      (l.logMusicPreviewError = Ln),
      (l.logStaticConceptAddSceneError = En),
      (l.logL1ErrorBoundaryCrash = kn),
      (l.logConceptEditorHeaderImpression = In),
      (l.logConceptEditorBackButtonClick = Tn),
      (l.logCustomizeButtonClick = Dn),
      (l.logConceptEditorScreenImpression = xn),
      (l.logAdoptionInsightsImpression = $n),
      (l.logAdoptablePreviewImpression = Nn),
      (l.logVideoViewportImpression = Mn),
      (l.logVideoGenGenerateClick = wn),
      (l.logVideoGenRecipeGenerationSuccess = Fn),
      (l.logVideoGenRecipeGenerationFailure = On),
      (l.logVideoGenAutomaticGenerationResult = Bn),
      (l.logVideoGenEnhanceClick = Wn),
      (l.logMediaCardImpression = qn),
      (l.logMediaCardVideoPlayback = Un),
      (l.logMediaCardImageSelectionChange = Vn),
      (l.logConceptEditorPlaceholderCardImpression = Hn));
  },
  98,
);
