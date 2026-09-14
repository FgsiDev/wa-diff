__d(
  "AdsCreativeMultiMediaLoggingUtils",
  [
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsImageIDUtils",
    "AdsInterfacesLogger",
    "AdsWizardMediaPickerMultiUploadUtils",
    "AdsWizardMediaPickerVariantMapUtils",
    "CapaUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_pseudo_preview_video_trim_crop_tab_click",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.event_source = "ads_multi_media_pseudo_crop_preview"),
          (o.video_id = n),
          (o.metadata = JSON.stringify({
            tab_clicked: t,
            asset_type: "video",
            asset_id: n,
          })),
          o),
      });
    }
    function s(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_video_trim_apply_changes",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.event_source = t),
          (a.video_id = n),
          (a.metadata = JSON.stringify({
            asset_type: "video",
            asset_id: n,
            trimming_params: o,
          })),
          a),
      });
    }
    function u(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_video_trim_discard_changes",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.event_source = t),
          (a.video_id = n),
          (a.metadata = JSON.stringify({
            asset_type: "video",
            asset_id: n,
            trimming_params: o,
          })),
          a),
      });
    }
    function c(e, t) {
      if (t) {
        var n;
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_opt_out_experience",
          data: ((n = {}), (n.adgroup_id = e), n),
        });
      } else {
        var o;
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_opt_in_experience",
          data: ((o = {}), (o.adgroup_id = e), o),
        });
      }
    }
    function d(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_l1_accordion_media_picker_click",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.event_source = t),
          (o.subsequent_data = JSON.stringify({ num_selected_media: n })),
          o),
      });
    }
    function m(e, t, n, o, a, i, l) {
      if (t === "related_media") {
        var s;
        r("AdsInterfacesLogger").log({
          eventName: "creative_flex_mvp_edit_click",
          data:
            ((s = {}),
            (s.adgroup_id = e),
            (s.event_source = "creative_flex_mvp"),
            (s.subsequent_data = JSON.stringify({
              num_selected_media_before: a,
            })),
            s),
        });
      }
      if (
        n === "l1_accordion_edit_button" ||
        n === "l1_accordion_add_media_button"
      ) {
        var u;
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_l1_accordion_edit_button_click",
          data:
            ((u = {}),
            (u.adgroup_id = e),
            (u.event_source = t),
            (u.metadata = JSON.stringify({
              thumbnail_index: o,
              num_selected_media: a,
            })),
            u),
        });
      } else if (n === "l1_accordion_thumbnail_edit_button") {
        var c;
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_l1_accordion_thumbnail_edit_button_click",
          data:
            ((c = {}),
            (c.adgroup_id = e),
            (c.event_source = t),
            (c.metadata = JSON.stringify({
              thumbnail_index: o,
              num_selected_media: a,
              media_id: i,
              group_id: l,
            })),
            c),
        });
      }
      if (n === "l1_accordion_add_media_button") {
        var d;
        r("AdsInterfacesLogger").log({
          eventName: "creative_flex_partial_selection_add_more_click",
          eventCategory: "user_action",
          data:
            ((d = {}),
            (d.adgroup_id = e),
            (d.event_source = t),
            (d.subsequent_data = String(a)),
            d),
        });
      }
    }
    function p(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_l1_accordion_thumbnail_delete_button_click",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.event_source = t),
          (a.metadata = JSON.stringify({
            thumbnail_index: n,
            num_selected_media_before_delete: o,
          })),
          a),
      });
    }
    function _(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName:
          "ads_multi_media_pseudo_crop_preview_aspect_ratio_mode_select",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.event_source = t),
          (s.metadata = JSON.stringify({
            sourceKey: n,
            mode: a,
            aspectRatio: o,
            mediaType: i,
            mediaID: l,
          })),
          s),
      });
    }
    function f(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_pseudo_crop_preview_cancel_button_click",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.metadata = JSON.stringify({ mediaType: t, mediaID: n })),
          o),
      });
    }
    function g(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_pseudo_crop_preview_next_button_click",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.metadata = JSON.stringify({ mediaType: t, mediaID: n })),
          o),
      });
    }
    function h(e, t, n, a) {
      var i,
        l = {};
      a == null ||
        a.forEach(function (e, t) {
          var n,
            r =
              t.type === "image" &&
              (n = o("AdsImageIDUtils").getImageHashFromID(t.id)) != null
                ? n
                : null;
          r != null &&
            (l[r] = e.map(function (e) {
              return {
                isManualCrops: e.isManualCrops,
                isOriginalSelected: e.isOriginalSelected,
              };
            }));
        });
      var s = {};
      (n.forEach(function (e, t) {
        var n;
        s[t] = babelHelpers.extends({}, e, {
          crops: (n = l[t]) != null ? n : null,
        });
      }),
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_edit_modal_save_button_click",
          data:
            ((i = {}),
            (i.adgroup_id = e),
            (i.event_source = t),
            (i.metadata = JSON.stringify({ relatedMediaMap: s })),
            i),
        }));
    }
    function y(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_edit_modal_cancel",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.event_source = t),
          (o.metadata = JSON.stringify({ relatedMediaMap: n })),
          o),
      });
    }
    function C(e, t) {
      var n,
        a =
          t == null
            ? void 0
            : t.map(function (e) {
                return {
                  type: e == null ? void 0 : e.type,
                  id: o("AdsWizardMediaPickerMultiUploadUtils").getAssetID(e),
                };
              });
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_media_picker_asset_set",
        data:
          ((n = {}),
          (n.adgroup_id = e),
          (n.metadata = JSON.stringify({
            num_selected_media: t == null ? void 0 : t.length,
            selected_assets: a,
          })),
          n),
      });
    }
    function b(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_edit_modal_thumbnail_click",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.event_source = t),
          (s.metadata = JSON.stringify({
            index: n,
            mediaType: a,
            mediaID: i,
            mediaArrayLength: o,
            group_id: l,
          })),
          s),
      });
    }
    function v(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_sbs_advanced_preview_thumbnail_click",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.metadata = JSON.stringify({ selection: t, mediaArrayLength: n })),
          o),
      });
    }
    function S(e, t) {
      var n, o;
      (r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_creative_flex_mvp_guidance_card_cta_click",
        data:
          ((n = {}),
          (n.adgroup_id = e),
          (n.subsequent_data = JSON.stringify({ num_selected_media_after: t })),
          n),
      }),
        r("AdsInterfacesLogger").log({
          eventName: "creative_flex_mvp_guidance_card_cta_click",
          data:
            ((o = {}),
            (o.adgroup_id = e),
            (o.subsequent_data = JSON.stringify({
              num_selected_media_after: t,
            })),
            o),
        }));
    }
    function R(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_multiple_selection",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function L(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_video_thumbnail_hover",
        eventCategory: "user_action",
        data: ((n = {}), (n.adgroup_id = e), (n.video_id = t), n),
      });
    }
    function E(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_video_selection_click",
        eventCategory: "user_action",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.video_id = t),
          (o.metadata = JSON.stringify({ action: n ? "deselect" : "select" })),
          o),
      });
    }
    function k(e, t, n) {
      var a,
        i,
        l =
          n == null
            ? void 0
            : n.map(function (e) {
                return {
                  type: e == null ? void 0 : e.type,
                  id: o("AdsWizardMediaPickerMultiUploadUtils").getAssetID(e),
                };
              });
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_format_switcher_click",
        eventCategory: "user_action",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            to_format: t,
            num_selected_media:
              (a = n == null ? void 0 : n.length) != null ? a : 0,
            selected_assets: l,
          })),
          i),
      });
    }
    function I(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_crop_redesign_eye_icon_click",
        eventCategory: "user_action",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            aspectRatio: t,
            isOpening: n,
            mediaType: o,
            mediaID: a,
          })),
          i),
      });
    }
    function T(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_crop_redesign_preview_refresh_click",
        eventCategory: "user_action",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.metadata = JSON.stringify({ mediaType: t, mediaID: n })),
          o),
      });
    }
    function D(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_crop_redesign_preview_seen",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            aspectRatio: t,
            mediaType: n,
            mediaID: o,
          })),
          a),
      });
    }
    function x(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_auto_select_completed",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            num_images_uploaded: t,
            num_images_auto_selected: n,
            cart_size_after: o,
            max_cart: a,
          })),
          i),
      });
    }
    function $(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_auto_select_started",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            num_images_uploaded: t,
            cart_size_before: n,
            max_cart: o,
          })),
          a),
      });
    }
    function P(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_cart_animation_error",
        data:
          ((n = {}),
          (n.adgroup_id = e),
          (n.metadata = t != null ? JSON.stringify(t) : null),
          n),
      });
    }
    function N(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_cart_animation_success",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function M(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_duplicate_images_dropped",
        data:
          ((n = {}), (n.adgroup_id = e), (n.metadata = JSON.stringify(t)), n),
      });
    }
    function w(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_duplicate_videos_dropped",
        data:
          ((n = {}), (n.adgroup_id = e), (n.metadata = JSON.stringify(t)), n),
      });
    }
    function A(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_set_primary_oss_during_mss_mutation",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = t),
          (a.new_value = n),
          (a.old_value = o),
          a),
      });
    }
    function F(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName:
          "ads_multi_media_migrate_rm_spec_into_mss_during_mm_mutation",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.old_value = t),
          (o.new_value = n),
          o),
      });
    }
    function O(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_ineligibility_reasons",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            is_eligible: !1,
            ineligibility_reasons: t,
            objective: n,
            promoted_object_type: o,
            sales_segment_v2: a,
          })),
          i),
      });
    }
    function B(e, t, n, a, i) {
      var l;
      if (
        o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(e)
      ) {
        var s = o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
            e,
            "multi_media",
          ),
          u = r("gkx")("21724");
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_mss_write_on_shops_ad",
          data:
            ((l = {}),
            (l.adgroup_id = t),
            (l.metadata = [
              "media_source=" + n,
              "image_count=" + a,
              "video_count=" + i,
              "already_had_multi_media=" + String(s),
              "has_coexistence_gk=" + String(u),
            ].join(";")),
            l),
        });
      }
    }
    function W(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_smart_crop_applied",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            media_type: t,
            media_id: n,
            smart_crop_aspect_ratios: o,
          })),
          a),
      });
    }
    var q = new Set();
    function U(e, t, n) {
      var r,
        a =
          (r = o("AdsWizardMediaPickerMultiUploadUtils").getAssetID(n)) != null
            ? r
            : "";
      if (!q.has(a)) {
        var i = [];
        for (var l of e) {
          var s = l[0],
            u = l[1];
          u.isOriginalSelected || i.push(s);
        }
        i.length > 0 && (q.add(a), W(t, "image", a, i));
      }
    }
    function V(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_smart_crop_manual_override",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            media_type: t,
            media_id: n,
            overridden_aspect_ratios: o,
          })),
          a),
      });
    }
    function H(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_smart_crop_original_selected",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            media_type: t,
            media_id: n,
            original_selected_aspect_ratios: o,
          })),
          a),
      });
    }
    function G(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_smart_crop_preserved",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            media_type: t,
            media_id: n,
            preserved_aspect_ratios: o,
          })),
          a),
      });
    }
    function z(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_ff_to_mmu_guidance_card_impression",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function j(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "ads_ff_to_mmu_opt_out_click",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function K(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_mvp_recommendation_query",
        data:
          ((o = {}),
          (o.adgroup_id = e != null ? e : ""),
          (o.targeting_ui_event_data = "related_media_query"),
          (o.subsequent_data = t),
          (o.event_source = n),
          o),
      });
    }
    function Q(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_dco_to_mmu_l1_guidance_card_impression",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function X(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_bau_to_mmu_l1_guidance_card_impression",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function Y(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "ads_bau_to_mmu_duplication_toast_impression",
        data: ((t = {}), (t.adgroup_id = e), t),
      });
    }
    function J(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_bau_to_mmu_pre_duplication_dialog_card_impression",
        data:
          ((t = {}),
          (t.metadata = JSON.stringify({ bau_adgroup_count: e })),
          t),
      });
    }
    function Z(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_pause_initiated",
        eventCategory: "user_action",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            media_id: t,
            is_ad_published_over_2_days: n,
            opted_in_count: o,
            opted_out_count: a,
          })),
          i),
      });
    }
    function ee(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_pause_limit_reached",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            media_id: t,
            opted_in_count: n,
            opted_out_count: o,
          })),
          a),
      });
    }
    function te(e, t, n, o, a, i) {
      var l;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_unpause_clicked",
        eventCategory: "user_action",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.event_source = n),
          (l.metadata = JSON.stringify({
            media_id: t,
            is_ad_published_over_2_days: o,
            opted_in_count: a,
            opted_out_count: i,
          })),
          l),
      });
    }
    function ne(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_pause_confirmation_shown",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            media_id: t,
            is_ad_published_over_2_days: n,
            opted_in_count: o,
            opted_out_count: a,
          })),
          i),
      });
    }
    function re(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_pause_confirmed",
        eventCategory: "user_action",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            media_id: t,
            is_ad_published_over_2_days: n,
            opted_in_count: o,
            opted_out_count: a,
          })),
          i),
      });
    }
    function oe(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_pause_cancelled",
        eventCategory: "user_action",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.metadata = JSON.stringify({
            media_id: t,
            is_ad_published_over_2_days: n,
            opted_in_count: o,
            opted_out_count: a,
          })),
          i),
      });
    }
    function ae(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_delete_interception_shown",
        eventCategory: "impression",
        data: ((n = {}), (n.adgroup_id = e), (n.event_source = t), n),
      });
    }
    function ie(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_delete_interception_confirmed",
        eventCategory: "user_action",
        data: ((n = {}), (n.adgroup_id = e), (n.event_source = t), n),
      });
    }
    function le(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_delete_interception_cancelled",
        eventCategory: "user_action",
        data: ((n = {}), (n.adgroup_id = e), (n.event_source = t), n),
      });
    }
    function se(e, t, n, o, a, i, l, s, u) {
      var c,
        d = a - 1,
        m = u.filter(function (e) {
          return e === i;
        }).length;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_variant_mapping_cluster_unmap",
        data:
          ((c = {}),
          (c.adgroup_id = e),
          (c.metadata = JSON.stringify({
            entry_point: t,
            group_id: n,
            removed_variant_hash: o,
            cluster_size_before: a,
            removed_count: 1,
            remaining_count: d,
            did_dissolve_cluster: d < 2,
            removed_variant_type: i,
            removed_variant_width: l,
            removed_variant_height: s,
            cluster_variant_types: u,
            same_column_count_before: m,
          })),
          c),
      });
    }
    function ue(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_variant_mapping_cluster_delete",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.event_source = t),
          (a.metadata = JSON.stringify({
            group_id: n,
            cluster_size_before: o,
          })),
          a),
      });
    }
    function ce(e) {
      var t;
      return e.imageID != null &&
        (t = o("AdsImageIDUtils").getImageHashFromID(e.imageID)) != null
        ? t
        : null;
    }
    var de = {
        media_picker_grid: "media_picker_crop_panel",
        media_picker_cart: "media_picker_crop_panel",
        l1_accordion: "pac_modal_crop_tab",
      },
      me = new Set();
    function pe(e, t) {
      return (e != null ? e : "") + ":" + t;
    }
    function _e(e, t, n, o, a) {
      var i,
        l = ce(o),
        s = o.mediaID,
        u = o.mediaType;
      s != null && me.add(pe(e, s));
      var c = {};
      for (var d of a) {
        var m = d.indexOf(":");
        m > 0 && (c[d.slice(0, m)] = d.slice(m + 1));
      }
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_size_variations_card_shown",
        eventCategory: "impression",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.event_source = t),
          (i.metadata = JSON.stringify({
            trigger: n,
            media_id: s,
            media_type: u,
            image_hash: l,
            variant_count: a.length,
            variant_kinds: c,
          })),
          i),
      });
    }
    function fe(e, t) {
      var n;
      t == null ||
        !me.has(pe(e, t)) ||
        r("AdsInterfacesLogger").log({
          eventName: "ads_multi_media_size_variations_card_dismissed",
          eventCategory: "user_action",
          data:
            ((n = {}),
            (n.adgroup_id = e),
            (n.event_source = "media_picker_cart"),
            (n.metadata = JSON.stringify({ media_id: t })),
            n),
        });
    }
    function ge(e, t, n, o, a) {
      var i,
        l = ce(o),
        s = o.mediaID,
        u = o.mediaType;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_size_variations_crop_open",
        eventCategory: "user_action",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.event_source = t),
          (i.metadata = JSON.stringify({
            entry_point: n,
            editor: de[t],
            media_id: s,
            media_type: u,
            image_hash: l,
            aspect_ratio_type: a,
          })),
          i),
      });
    }
    function he(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_variant_mapping_exposed",
        data:
          ((n = {}),
          (n.adgroup_id = e),
          (n.metadata = JSON.stringify({ surface: t })),
          n),
      });
    }
    function ye(e, t, n, o, a, i) {
      var l;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_variant_mapping_cluster_formed",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.metadata = JSON.stringify({
            request_id: n,
            ad_account_id: t,
            n_clusters: o.length,
            cluster_sizes: o,
            n_singles: a,
            latency_ms: i,
          })),
          l),
      });
    }
    function Ce(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_variant_mapping_clustering_triggered",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.metadata = JSON.stringify({
            request_id: n,
            ad_account_id: t,
            n_candidates: o,
            n_existing_clusters: a,
            n_clustered_members: i,
            trigger_source: l,
          })),
          s),
      });
    }
    function be(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_variant_mapping_clustering_no_result",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.metadata = JSON.stringify({
            request_id: n,
            ad_account_id: t,
            latency_ms: o,
          })),
          a),
      });
    }
    function ve(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_variant_mapping_clustering_failed",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.metadata = JSON.stringify({ request_id: t, error_message: n })),
          o),
      });
    }
    function Se(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_multi_media_size_variations_banner_shown",
        eventCategory: "impression",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.metadata = JSON.stringify({
            media_count: t,
            variant_count: n.length,
            variant_kinds: n,
          })),
          o),
      });
    }
    function Re(e, t, n, o, a, i) {
      var l,
        s = i.length,
        u = new Set();
      for (var c of i) {
        var d = c.indexOf(":");
        d > 0 && u.add(c.slice(d + 1));
      }
      var m = Array.from(u).sort(),
        p = s - a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_size_variations_banner_toggled",
        eventCategory: "user_action",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.metadata = JSON.stringify({
            is_expanded: t,
            media_count: n,
            media_types: o,
            variant_count: s,
            opted_in_count: a,
            opted_out_count: p,
            variant_types: m,
          })),
          l),
      });
    }
    function Le(e, t, n, a, i, l, s, u) {
      var c;
      r("AdsInterfacesLogger").log({
        eventName: "ads_multi_media_size_variations_variant_toggled",
        eventCategory: "user_action",
        data:
          ((c = {}),
          (c.adgroup_id = e),
          (c.old_value = s),
          (c.new_value = l
            ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_IN
            : o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_OUT),
          (c.metadata = JSON.stringify({
            aspect_ratio_type: i,
            media_id: t,
            previous_action_metadata: u,
            variant_id: n,
            variant_type: a,
          })),
          c),
      });
    }
    function Ee(e, t) {
      var n;
      if (
        o("AdsWizardMediaPickerVariantMapUtils").hasVariantChangeToCommit(t)
      ) {
        var a = [],
          i = 0,
          l = 0;
        (t.forEach(function (e, t) {
          for (var n of e) {
            var r, s;
            (n.initialOptInStatus ===
              o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_IN && i++,
              o("AdsWizardMediaPickerVariantMapUtils").isVariantOptedIn(
                n.optInStatus,
              ) && l++,
              a.push({
                action_metadata: n.actionMetadata,
                aspect_ratio_type: n.aspectRatioType,
                crop_source:
                  (r = (s = n.crop) == null ? void 0 : s.source) != null
                    ? r
                    : null,
                initial_action_metadata: n.initialActionMetadata,
                initial_opt_in_status: n.initialOptInStatus,
                is_from_spec: n.isFromSpec === !0,
                media_id: t,
                opt_in_status: n.optInStatus,
                variant_id: n.id,
                variant_type: n.type,
              }));
          }
        }),
          a.length !== 0 &&
            r("AdsInterfacesLogger").log({
              eventName: "ads_multi_media_size_variations_saved_v2",
              eventCategory: "user_action",
              data:
                ((n = {}),
                (n.adgroup_id = e),
                (n.metadata = JSON.stringify({
                  initial_opt_in_count: i,
                  media_count: t.size,
                  opted_in_count: l,
                  variant_count: a.length,
                  variants: a,
                })),
                n),
            }));
      }
    }
    function ke(e, t, n, o, a, i) {
      var l, s, u;
      r("AdsInterfacesLogger").log({
        eventName: "ads_capa_l0_audience_changed",
        eventCategory: "user_action",
        data:
          ((u = {}),
          (u.adgroup_id = e),
          (u.event_source = t),
          (u.metadata = JSON.stringify({
            surface: t,
            field: n,
            old_spec: o,
            new_spec: a,
            media_key: i != null ? i : null,
            arm:
              (l = r("CapaUtils").getCapaL0PersonaAssignedArm()) != null
                ? l
                : null,
            qe: (s = r("CapaUtils").getCapaL0PersonaQE()) != null ? s : null,
          })),
          u),
      });
    }
    function Ie(e, t) {
      var n, o, a;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_capa_l0_nux_impression",
        eventCategory: "impression",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.event_source = t ? "aggregated" : "single"),
          (a.metadata = JSON.stringify({
            is_aggregated: t,
            arm:
              (n = r("CapaUtils").getCapaL0PersonaAssignedArm()) != null
                ? n
                : null,
            qe: (o = r("CapaUtils").getCapaL0PersonaQE()) != null ? o : null,
          })),
          a),
      });
    }
    function Te(e, t) {
      var n, o, a;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_capa_l0_original_design_tooltip_hover",
        eventCategory: "impression",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.event_source = t),
          (a.metadata = JSON.stringify({
            source: t,
            arm:
              (n = r("CapaUtils").getCapaL0PersonaAssignedArm()) != null
                ? n
                : null,
            qe: (o = r("CapaUtils").getCapaL0PersonaQE()) != null ? o : null,
          })),
          a),
      });
    }
    function De(e, t, n, o, a) {
      var i, l, s;
      r("AdsInterfacesLogger").log({
        eventName: "ads_capa_l0_l1_edit_click",
        eventCategory: "user_action",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.event_source = n),
          (s.metadata = JSON.stringify({
            surface: t,
            source_key: n,
            media_id: o != null ? o : null,
            group_id: a != null ? a : null,
            arm:
              (i = r("CapaUtils").getCapaL0PersonaAssignedArm()) != null
                ? i
                : null,
            qe: (l = r("CapaUtils").getCapaL0PersonaQE()) != null ? l : null,
          })),
          s),
      });
    }
    function xe(e, t, n, o, a) {
      var i, l, s;
      r("AdsInterfacesLogger").log({
        eventName: "ads_capa_l0_l1_single_media_audience_changed",
        eventCategory: "user_action",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.metadata = JSON.stringify({
            field: t,
            old_spec: n,
            new_spec: o,
            primary_media_key: a != null ? a : null,
            arm:
              (i = r("CapaUtils").getCapaL0PersonaAssignedArm()) != null
                ? i
                : null,
            qe: (l = r("CapaUtils").getCapaL0PersonaQE()) != null ? l : null,
          })),
          s),
      });
    }
    function $e(e, t) {
      var n,
        o,
        a = r("CapaUtils").getCapaL0PersonaAssignedArm();
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_capa_l0_new_design_description_impression",
        eventCategory: "impression",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.event_source = t),
          (o.metadata = JSON.stringify({
            surface: t,
            has_description: !0,
            arm: a != null ? a : null,
            qe: (n = r("CapaUtils").getCapaL0PersonaQE()) != null ? n : null,
          })),
          o),
      });
    }
    function Pe(e, t) {
      var n,
        o,
        a = r("CapaUtils").getCapaL0PersonaAssignedArm();
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_capa_l0_new_design_no_description_impression",
        eventCategory: "impression",
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.event_source = t),
          (o.metadata = JSON.stringify({
            surface: t,
            has_description: !1,
            arm: a != null ? a : null,
            qe: (n = r("CapaUtils").getCapaL0PersonaQE()) != null ? n : null,
          })),
          o),
      });
    }
    ((l.logPseudoCropVideoTabSwitch = e),
      (l.logVideoTrimApplyChanges = s),
      (l.logVideoTrimDiscardChanges = u),
      (l.logSwitchMediaExperienceClick = c),
      (l.logL1ChangeMediaButtonClick = d),
      (l.logL1AccordionEditButtonClick = m),
      (l.logL1AccordionThumbnailDeleteButtonClick = p),
      (l.logPseudoCropAspectRatioModeSelect = _),
      (l.logPseudoCropCancelButtonClick = f),
      (l.logPseudoCropNextButtonClick = g),
      (l.logEditModalSaveButtonClick = h),
      (l.logEditModalCancel = y),
      (l.logMediaPickerSelectedAssets = C),
      (l.logEditModalThumbnailClick = b),
      (l.logAdvancedPreviewThumbnailClick = v),
      (l.logCreativeFlexGuidanceCardApplyNowClick = S),
      (l.logMultiMediaMultipleSelection = R),
      (l.logMultiMediaVideoThumbnailHover = L),
      (l.logMultiMediaVideoSelectionClick = E),
      (l.logMultiMediaFormatSwitcherClick = k),
      (l.logCropRedesignEyeIconClick = I),
      (l.logCropRedesignPreviewRefreshClick = T),
      (l.logCropRedesignPreviewSeen = D),
      (l.logAutoSelectCompleted = x),
      (l.logAutoSelectStarted = $),
      (l.logCartAnimationError = P),
      (l.logCartAnimationSuccess = N),
      (l.logDuplicateImagesDropped = M),
      (l.logDuplicateVideosDropped = w),
      (l.logSetPrimaryOSSDuringMSSMutation = A),
      (l.logMigrateRelatedMediaIntoMSS = F),
      (l.logMultiMediaIneligibilityReasons = O),
      (l.maybeLogMSSWriteOnShopsAd = B),
      (l.logSmartCropAppliedFromChangeSet = U),
      (l.logMultiMediaSmartCropManualOverride = V),
      (l.logMultiMediaSmartCropOriginalSelected = H),
      (l.logMultiMediaSmartCropPreserved = G),
      (l.logFfToMmuGuidanceCardImpression = z),
      (l.logFfToMmuOptOutClick = j),
      (l.logCreativeFlexRecommendationQuery = K),
      (l.logDcoToMmuGuidanceCardImpression = Q),
      (l.logBauToMmuL1GuidanceCardImpression = X),
      (l.logBauToMmuDuplicationToastImpression = Y),
      (l.logBauToMmuPreDuplicationDialogCardImpression = J),
      (l.logMediaPauseInitiated = Z),
      (l.logMediaPauseLimitReached = ee),
      (l.logMediaUnpauseClicked = te),
      (l.logMediaPauseConfirmationShown = ne),
      (l.logMediaPauseConfirmed = re),
      (l.logMediaPauseCancelled = oe),
      (l.logDeleteInterceptionShown = ae),
      (l.logDeleteInterceptionConfirmed = ie),
      (l.logDeleteInterceptionCancelled = le),
      (l.logVariantMappingClusterUnmap = se),
      (l.logVariantMappingClusterDelete = ue),
      (l.logSizeVariationsCardShown = _e),
      (l.logSizeVariationsCardDismissed = fe),
      (l.logSizeVariationsCropOpen = ge),
      (l.logVariantMappingExposed = he),
      (l.logVariantMappingClusterFormed = ye),
      (l.logVariantMappingClusteringTriggered = Ce),
      (l.logVariantMappingClusteringNoResult = be),
      (l.logVariantMappingClusteringFailed = ve),
      (l.logSizeVariationsBannerShown = Se),
      (l.logSizeVariationsBannerToggled = Re),
      (l.logSizeVariationsVariantToggled = Le),
      (l.logSizeVariationsSaved = Ee),
      (l.logCapaL0AudienceChanged = ke),
      (l.logCapaL0NuxImpression = Ie),
      (l.logCapaL0OriginalDesignTooltipHover = Te),
      (l.logCapaL0L1EditClick = De),
      (l.logCapaL0L1SingleMediaAudienceChanged = xe),
      (l.logCapaL0NewDesignDescriptionImpression = $e),
      (l.logCapaL0NewDesignNoDescriptionImpression = Pe));
  },
  98,
);
