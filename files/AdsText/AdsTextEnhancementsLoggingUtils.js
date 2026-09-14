__d(
  "AdsTextEnhancementsLoggingUtils",
  ["$InternalEnum", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["eventSource"],
      s = "l1-inline-adoption",
      u = null;
    function c(e) {
      u = e;
    }
    var d = n("$InternalEnum")({
      TEXTGEN_ENHANCEMENTS_STEP_ENTERED: "textgen_enhancements_step_entered",
      TEXTGEN_ENHANCEMENTS_STEP_EXITED: "textgen_enhancements_step_exited",
      TEXTGEN_ENHANCEMENTS_DWELL_TIME: "textgen_enhancements_dwell_time",
      TEXTGEN_ENHANCEMENTS_COMPONENT_LOADED:
        "textgen_enhancements_component_loaded",
      TEXTGEN_ENHANCEMENTS_CARD_COLLAPSED:
        "textgen_enhancements_card_collapsed",
      TEXTGEN_ENHANCEMENTS_CARD_EXPANDED: "textgen_enhancements_card_expanded",
      TEXTGEN_ENHANCEMENTS_SELECT_ALL_TOGGLED:
        "textgen_enhancements_select_all_toggled",
      TEXTGEN_ENHANCEMENTS_HEADLINES_SELECTION_TOGGLED:
        "textgen_enhancements_headlines_selection_toggled",
      TEXTGEN_ENHANCEMENTS_PRIMARY_TEXTS_SELECTION_TOGGLED:
        "textgen_enhancements_primary_texts_selection_toggled",
      TEXTGEN_ENHANCEMENTS_TEXT_OVERLAYS_SELECTION_TOGGLED:
        "textgen_enhancements_text_overlays_selection_toggled",
      TEXTGEN_ENHANCEMENTS_OVERLAY_SELECTION_TOGGLED:
        "textgen_enhancements_overlay_selection_toggled",
      TEXTGEN_ENHANCEMENTS_REGENERATE_CLICKED:
        "textgen_enhancements_regenerate_clicked",
      TEXTGEN_ENHANCEMENTS_FINAL_SELECTION_STATE:
        "textgen_enhancements_final_selection_state",
      TEXTGEN_ENHANCEMENTS_SUGGESTIONS_LOADED:
        "textgen_enhancements_suggestions_loaded",
      TEXTGEN_ENHANCEMENTS_SUGGESTION_EDIT_OPTION_VIEW:
        "textgen_enhancements_suggestion_edit_option_view",
      TEXTGEN_ENHANCEMENTS_SUGGESTION_EDIT_SAVED:
        "textgen_enhancements_suggestion_edit_saved",
      TEXTGEN_ENHANCEMENTS_SECTION_SCROLLED:
        "textgen_enhancements_section_scrolled",
      TEXTGEN_ENHANCEMENTS_OVERLAY_PREVIEW_SHOWN:
        "textgen_enhancements_overlay_preview_shown",
      TEXTGEN_ENHANCEMENTS_ENT_CACHE_CHECK_STARTED:
        "textgen_enhancements_ent_cache_check_started",
      TEXTGEN_ENHANCEMENTS_ENT_CACHE_HIT: "textgen_enhancements_ent_cache_hit",
      TEXTGEN_ENHANCEMENTS_ENT_CACHE_MISS:
        "textgen_enhancements_ent_cache_miss",
      TEXTGEN_ENHANCEMENTS_ENT_CACHE_SEED_ATTEMPTED:
        "textgen_enhancements_ent_cache_seed_attempted",
      TEXTGEN_ENHANCEMENTS_ENT_CACHE_SEED_MISS:
        "textgen_enhancements_ent_cache_seed_miss",
      TEXTGEN_ENHANCEMENTS_ENT_CACHE_SEED_SAVE_ERROR:
        "textgen_enhancements_ent_cache_seed_save_error",
      TEXTGEN_ENHANCEMENTS_ENT_SAVE_ERROR:
        "textgen_enhancements_ent_save_error",
      TEXTGEN_ENHANCEMENTS_OVERLAY_POLL_STARTED:
        "textgen_enhancements_overlay_poll_started",
      TEXTGEN_ENHANCEMENTS_OVERLAY_POLL_LOADED:
        "textgen_enhancements_overlay_poll_loaded",
      TEXTGEN_ENHANCEMENTS_OVERLAY_POLL_ERROR:
        "textgen_enhancements_overlay_poll_error",
      TEXTGEN_ENHANCEMENTS_OVERLAY_POLL_EMPTY:
        "textgen_enhancements_overlay_poll_empty",
      TEXTGEN_ENHANCEMENTS_OVERLAY_POLL_CANCELLED:
        "textgen_enhancements_overlay_poll_cancelled",
      TEXTGEN_ENHANCEMENTS_API_FETCH_STARTED:
        "textgen_enhancements_api_fetch_started",
      TEXTGEN_ENHANCEMENTS_REGEN_INITIATED:
        "textgen_enhancements_regen_initiated",
      TEXTGEN_ENHANCEMENTS_API_FETCH_ABANDONED:
        "textgen_enhancements_api_fetch_abandoned",
      TEXTGEN_ENHANCEMENTS_IDLE_DETECTED: "textgen_enhancements_idle_detected",
      TEXTGEN_ENHANCEMENTS_AD_ELIGIBILITY_CHECK:
        "textgen_enhancements_ad_eligibility_check",
      TEXTGEN_ENHANCEMENTS_DISPLAY_STATE_CHANGED:
        "textgen_enhancements_display_state_changed",
      TEXTGEN_ENHANCEMENTS_TAB_CHANGED: "textgen_enhancements_tab_changed",
      TEXTGEN_ENHANCEMENTS_APPLY_ALL_CLICKED:
        "textgen_enhancements_apply_all_clicked",
      TEXTGEN_ENHANCEMENTS_UNAPPLY_ALL_CLICKED:
        "textgen_enhancements_unapply_all_clicked",
      TEXTGEN_ENHANCEMENTS_DEFAULT_ON_PRESELECTED:
        "textgen_enhancements_default_on_preselected",
      TEXTGEN_ENHANCEMENTS_OVERLAY_SELECT_ALL_APPLIED:
        "textgen_enhancements_overlay_select_all_applied",
      TEXTGEN_ENHANCEMENTS_ENT_FLUSH_STARTED:
        "textgen_enhancements_ent_flush_started",
      TEXTGEN_ENHANCEMENTS_ENT_FLUSH_COMPLETED:
        "textgen_enhancements_ent_flush_completed",
      TEXTGEN_ENHANCEMENTS_STICKY_WRITE: "textgen_enhancements_sticky_write",
      TEXTGEN_ENHANCEMENTS_DESELECTION_SURVEY_SHOWN:
        "textgen_enhancements_deselection_survey_shown",
      TEXTGEN_ENHANCEMENTS_DESELECTION_SURVEY_CANCELLED:
        "textgen_enhancements_deselection_survey_cancelled",
      TEXTGEN_ENHANCEMENTS_DESELECTION_SURVEY_SUBMITTED:
        "textgen_enhancements_deselection_survey_submitted",
      TEXTGEN_ENHANCEMENTS_DESELECTION_SURVEY_SUBMIT_ERROR:
        "textgen_enhancements_deselection_survey_submit_error",
      TEXTGEN_ENHANCEMENTS_NON_TU_ASSETS_DETECTED:
        "textgen_enhancements_non_tu_assets_detected",
      TEXTGEN_ENHANCEMENTS_INLINE_CONTAINER_SHOWN:
        "textgen_enhancements_inline_container_shown",
      TEXTGEN_ENHANCEMENTS_INLINE_CONTAINER_FINAL_STATE:
        "textgen_enhancements_inline_container_final_state",
      TEXTGEN_ENHANCEMENTS_INLINE_EDIT_BUTTON_CLICKED:
        "textgen_enhancements_inline_edit_button_clicked",
    });
    function m(e, t, n, r, o) {
      var a = [];
      return (
        e.forEach(function (e, i) {
          var l = t[e.id],
            s = n[e.id],
            u =
              r != null && r.has(e.id)
                ? o === "sticky"
                  ? "sticky"
                  : "default"
                : "manual";
          (e.headlines.forEach(function (t) {
            var n,
              r = (n = l == null ? void 0 : l.headlines) != null ? n : !1;
            a.push({
              actionType: u !== "manual" && !r ? "manual" : u,
              categoryId: e.id,
              categoryName: e.name,
              type: "headline",
              text: t.text,
              isSelected: r,
              positionId: i,
            });
          }),
            e.primaryTexts.forEach(function (t) {
              var n,
                r = (n = l == null ? void 0 : l.primaryTexts) != null ? n : !1;
              a.push({
                actionType: u !== "manual" && !r ? "manual" : u,
                categoryId: e.id,
                categoryName: e.name,
                type: "primaryText",
                text: t.text,
                isSelected: r,
                positionId: i,
              });
            }),
            e.textOverlays.forEach(function (t) {
              var n,
                r,
                o = (n = s == null ? void 0 : s[t.id]) != null ? n : !1;
              a.push({
                actionType: u !== "manual" && !o ? "manual" : u,
                categoryId: e.id,
                categoryName: e.name,
                imageEverstoreHandle:
                  (r = t.image_hash) != null ? r : t.imageHandle,
                imageUrl: t.imageUrl,
                type: "overlay",
                text: t.id,
                isSelected: o,
                positionId: i,
              });
            }));
        }),
        a
      );
    }
    function p(e) {
      if (e.length === 0) return "none";
      var t = e.some(function (e) {
        return !e.isSelected;
      });
      if (!t) return "none";
      var n = e.every(function (e) {
        return !e.isSelected;
      });
      return n ? "full" : "partial";
    }
    var _ = n("$InternalEnum")({
      REGULATED_CATEGORY: "regulated_category",
      SENSITIVE_VERTICAL: "sensitive_vertical",
      DYNAMIC_ADS_INELIGIBLE_DPA: "dynamic_ads_ineligible_dpa",
      DOF_TEXT_INELIGIBLE: "dof_text_ineligible",
      INSTANT_EXPERIENCE_AD: "instant_experience_ad",
      CTXMD_NOT_ENABLED: "ctxmd_not_enabled",
      MULTI_UPLOAD_NOT_ENABLED: "multi_upload_not_enabled",
      NO_CAPABILITY_OR_DOGFOODING: "no_capability_or_dogfooding",
      HAS_NON_TU_ASSETS: "has_non_tu_assets",
      TEXT_ENHANCEMENT_GK_OFF: "text_enhancement_gk_off",
      TEXT_GEN_INELIGIBLE: "text_gen_ineligible",
      MEDIA_FORMAT_NOT_IMAGE: "media_format_not_image",
    });
    function f(e) {
      return JSON.stringify(e, function (e, t) {
        if (t != null) return t;
      });
    }
    function g(t, n, o, a) {
      var i;
      a === void 0 && (a = !1);
      var l = n.eventSource,
        s = babelHelpers.objectWithoutPropertiesLoose(n, e),
        c = {
          eventName: t,
          data:
            ((i = {}),
            (i.adgroup_id = o != null ? o : ""),
            (i.event_source = l != null ? l : u),
            (i.message = Object.keys(s).length > 0 ? f(s) : void 0),
            i),
        };
      a ? r("AdsInterfacesLogger").logOnce(c) : r("AdsInterfacesLogger").log(c);
    }
    ((l.INLINE_ADOPTION_EVENT_SOURCE = s),
      (l.setDefaultEventSource = c),
      (l.TextEnhancementsLogEvent = d),
      (l.buildFinalSelectionState = m),
      (l.getOptOutType = p),
      (l.TextGenIneligibleCause = _),
      (l.logTextEnhancementsEvent = g));
  },
  98,
);
