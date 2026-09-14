__d(
  "AdsTextGenerationLoggingUtils",
  ["$InternalEnum", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "adgroupID",
        "errorCode",
        "errorName",
        "eventSource",
        "fromIndex",
        "isEligibleDPA",
        "productSetID",
        "stackTrace",
      ],
      s,
      u = (s = n("$InternalEnum")).Mirrored([
        "PERSONA_EDITED",
        "PRIMARY_TEXT_EDITED",
        "HEADLINE_TEXT_EDITED",
        "EXISTING_POST_SELECTED",
        "SUGGESTIONS_ON_LOAD",
        "PERSONA_TOGGLE",
        "REFRESH_VARIATIONS",
        "GENERATE_MORE_EMPTY_STATE",
        "CHECKBOX_PRESSED",
        "MESSAGE_FIELD_RENDERED",
        "REFRESH_FROM_ACCORDION_VISIBLE",
        "TEXT_ASSET_ITEM_RENDERED",
        "ELIGIBILITY_CHECKED",
        "ADD_OPTION_SELECTED",
        "TEXT_AUTOMATION_CHECKBOX_PRESSED",
        "DEFAULT_ADD_ELIGIBILITY_CHECK",
        "DEFAULT_ADD_HEADLINE_ELIGIBILITY_CHECK",
        "BRAND_KIT_OPENED",
        "ACCORDION_OPENED",
        "ACCORDION_CLOSED",
        "GENERATE_MORE_CLICKED",
        "CHECK_ALL_VARIATIONS",
        "UNCHECK_ALL_VARIATIONS",
        "STICKY_OPT_OUT",
        "PERSONA_EDIT_MODAL_SHOWN",
        "PERSONA_EDIT_MODAL_CLOSED",
        "PERSONA_DEFAULT_ON",
        "PERSONA_DEFAULT_OFF",
        "PERSONA_EDITED_INPUT_FIELDS_ERROR",
        "TEXT_AUTOMATION_COMPONENT_RENDERED",
      ]),
      c = s({
        STICKY_OFF: "sticky_off",
        TOGGLE_ON: "toggle_on",
        PERSONA_ADOPTED_SUGGESTIONS_ON: "persona_adopted_suggestions_on",
        NON_PERSONA_ADOPTED_SUGGESTIONS_OFF:
          "non_persona_adopted_suggestions_off",
      }),
      d =
        /(?:[\xA9\xAE\u2122\u23E9-\u23EF\u23F3\u23F8-\u23FA\u24C2\u25B6\u2600-\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF])/g;
    function m(e) {
      if (e != null)
        return e.replace(d, function (e) {
          var t, n;
          return (
            "[#" +
            ((t = (n = e.codePointAt(0)) == null ? void 0 : n.toString(16)) !=
            null
              ? t
              : "") +
            "]"
          );
        });
    }
    function p(e) {
      var t;
      return babelHelpers.extends({}, e, {
        suggestions:
          (t = e.suggestions) == null
            ? void 0
            : t.map(function (e) {
                var t;
                return (t = m(e)) != null ? t : e;
              }),
        suggestionText: m(e.suggestionText),
        newText: m(e.newText),
        primaryText: m(e.primaryText),
        originalText: m(e.originalText),
        editedText: m(e.editedText),
      });
    }
    function _(e) {
      return {
        adoptionScore: e == null ? void 0 : e.adoption_score,
        editedText: e == null ? void 0 : e.editedText,
        field: e == null ? void 0 : e.field,
        hallucination: e == null ? void 0 : e.hallucination,
        language: e == null ? void 0 : e.language,
        modelSource: e == null ? void 0 : e.source,
        originalText: e == null ? void 0 : e.text,
        primaryText: e == null ? void 0 : e.input,
        suggestionId: e == null ? void 0 : e.id,
        suggestionStatus: e == null ? void 0 : e.status,
      };
    }
    function f(e) {
      return JSON.stringify(p(e), function (e, t) {
        if (t != null) return t;
      });
    }
    var g = s({
        TEXTGEN_OPEN_BRAND_KIT: "textgen_open_brand_kit",
        TEXTGEN_REQUEST_SUGGESTIONS_INELIGIBLE:
          "textgen_request_suggestions_ineligible",
        TEXTGEN_REQUEST_SUGGESTIONS_ERROR: "textgen_request_suggestions_error",
        TEXTGEN_REQUEST_SUGGESTIONS_STARTED:
          "textgen_request_suggestions_started",
        TEXTGEN_REQUEST_SUGGESTIONS_FAILED_LANGUAGE_CHECK:
          "textgen_request_suggestions_failed_language_check",
        TEXTGEN_IX_ELIGIBILITY_CHECK_FAILED:
          "textgen_ix_eligibility_check_failed",
        TEXTGEN_REQUEST_TRANSLATIONS_INVALID_INPUT:
          "textgen_request_translations_invalid_input",
        TEXTGEN_REQUEST_SUGGESTIONS_SUCCEEDED:
          "textgen_request_suggestions_succeeded",
        TEXTGEN_REQUEST_TRANSLATION_GENERATION_STARTED:
          "textgen_request_translation_generation_started",
        TEXTGEN_REQUEST_TRANSLATION_GENERATION_SUCCEEDED:
          "textgen_request_translation_generation_succeeded",
        TEXTGEN_REQUEST_TRANSLATION_ELIGIBLE:
          "textgen_request_translation_eligible",
        TEXTGEN_REQUEST_TRANSLATION_INELIGIBLE:
          "textgen_request_translation_ineligible",
        TEXTGEN_REQUEST_PERSONA_EDIT_GENERATION_STARTED:
          "textgen_request_persona_edit_generation_started",
        TEXTGEN_REQUEST_PERSONA_EDIT_GENERATION_SUCCEEDED:
          "textgen_request_persona_edit_generation_succeeded",
        TEXTGEN_SUGGESTION_EDITED_CHECKED: "textgen_suggestion_edited_checked",
        TEXTGEN_SUGGESTION_EDITED_UNCHECKED:
          "textgen_suggestion_edited_unchecked",
        TEXTGEN_SUGGESTION_GENERATE_MORE: "textgen_suggestion_generate_more",
        TEXTGEN_SUGGESTION_PASTED: "textgen_suggestion_pasted",
        TEXTGEN_SUGGESTION_VIEWED_UNCHECKED:
          "textgen_suggestion_viewed_unchecked",
        TEXTGEN_SUGGESTION_VIEWED_CHECKED: "textgen_suggestion_viewed_checked",
        TEXTGEN_TEXT_SUGGESTIONS_BUTTON_CLICKED:
          "textgen_text_suggestions_button_clicked",
        TEXTGEN_CHECK_VARIATION: "textgen_check_variation",
        TEXTGEN_UNCHECK_VARIATION: "textgen_uncheck_variation",
        TEXTGEN_CHECK_ALL_VARIATIONS: "textgen_check_all_variations",
        TEXTGEN_UNCHECK_ALL_VARIATIONS: "textgen_uncheck_all_variations",
        TEXTGEN_TEXT_FIELD_RENDERED: "textgen_text_field_rendered",
        TEXTGEN_TEXT_FIELD_FOCUSED: "textgen_text_field_focused",
        TEXTGEN_USER_CLOSED_ACCORDION: "textgen_user_closed_accordion",
        TEXTGEN_USER_OPENED_ACCORDION: "textgen_user_opened_accordion",
        TEXTGEN_INPUT_TEXT_FOCUSED: "textgen_input_text_focused",
        TEXTGEN_INPUT_TEXT_EDITED: "textgen_input_text_edited",
        TEXTGEN_INPUT_TEXT_BLURRED: "textgen_input_text_blurred",
        TEXTGEN_PERSONA_TOGGLE_ON: "textgen_persona_toggle_on",
        TEXTGEN_PERSONA_TOGGLE_OFF: "textgen_persona_toggle_off",
        TEXTGEN_PERSONA_DEFAULT_ON: "textgen_persona_default_on",
        TEXTGEN_PERSONA_DEFAULT_OFF: "textgen_persona_default_off",
        TEXTGEN_PERSONA_EDIT_BUTTON_VIEWED:
          "textgen_persona_edit_button_viewed",
        TEXTGEN_PERSONA_EDIT_BUTTON_CLICKED:
          "textgen_persona_edit_button_clicked",
        TEXTGEN_PERSONA_EDIT_APPLY_CLICKED:
          "textgen_persona_edit_apply_clicked",
        TEXTGEN_PERSONA_EDIT_CLOSE: "textgen_persona_edit_close",
        TEXTGEN_PERSONA_EDITED_INPUT_FIELDS_ERROR:
          "textgen_persona_edited_input_fields_error",
        TEXTGEN_AUTO_REFRESH_VARIATIONS: "textgen_auto_refresh_variations",
        TEXTGEN_GENERAL_ELIGIBILITY_CHECK: "textgen_general_eligibility_check",
        TEXTGEN_DOF_ELIGIBILITY_CHECK_FAILED:
          "textgen_dof_eligibility_check_failed",
        TEXTGEN_TEXT_AUTOMATION_CHECKBOX_CHECKED:
          "textgen_text_automation_checkbox_checked",
        TEXTGEN_TEXT_AUTOMATION_CHECKBOX_UNCHECKED:
          "textgen_text_automation_checkbox_unchecked",
        TEXTGEN_TEXT_AUTOMATION_TOOLTIP_HOVER:
          "textgen_text_automation_tooltip_hover",
        TEXTGEN_TEXT_AUTOMATION_COMPONENT_RENDERED:
          "textgen_text_automation_component_rendered",
        TEXTGEN_SHOULD_USE_DEFAULT_ADD: "textgen_should_use_default_add",
        TEXTGEN_SHOULD_USE_DEFAULT_ADD_HEADLINE:
          "textgen_should_use_default_add_headline",
        TEXTGEN_BODIES_STICKY_OPT_OUT: "textgen_bodies_sticky_opt_out",
        TEXTGEN_TITLES_STICKY_OPT_OUT: "textgen_titles_sticky_opt_out",
        TEXTGEN_REFRESH_FROM_ACCORDION_VISIBLE:
          "textgen_refresh_from_accordion_visible",
      }),
      h = s({
        UNKNOWN: "unknown",
        NO_ELIGIBLE_LOCALES: "no_eligible_locales",
        ALREADY_ADDED_SUGGESTIONS: "already_added_suggestions",
        NOT_ELIGIBLE: "not_eligible",
        NO_INPUT_TEXT: "no_input_text",
      });
    function y(t, n, o) {
      o === void 0 && (o = !1);
      var a = n.adgroupID,
        i = n.errorCode,
        l = n.errorName,
        s = n.eventSource,
        u = n.fromIndex,
        c = n.isEligibleDPA,
        d = n.productSetID,
        m = n.stackTrace,
        p = babelHelpers.objectWithoutPropertiesLoose(n, e);
      if (o) {
        var _;
        r("AdsInterfacesLogger").logOnce({
          eventName: t,
          data:
            ((_ = {}),
            (_.adgroup_id = a),
            (_.error_code = i),
            (_.error_name = l),
            (_.event_source = s),
            (_.stack_trace = m),
            (_.product_set_id = d),
            (_.subsequent_data =
              c === !0 ? JSON.stringify({ isEligibleDPA: !0 }) : null),
            (_.message = Object.keys(p).length > 0 ? f(p) : void 0),
            (_.from_index = u),
            _),
        });
      } else {
        var g;
        r("AdsInterfacesLogger").log({
          eventName: t,
          data:
            ((g = {}),
            (g.adgroup_id = a),
            (g.error_code = i),
            (g.error_name = l),
            (g.event_source = s),
            (g.stack_trace = m),
            (g.product_set_id = d),
            (g.subsequent_data =
              c === !0 ? JSON.stringify({ isEligibleDPA: !0 }) : null),
            (g.message = Object.keys(p).length > 0 ? f(p) : void 0),
            (g.objective = p.objective),
            (g.is_duplicated_object = p.isDuplicateFlow),
            g),
        });
      }
    }
    function C(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.caller = t),
          (o.subsequent_data = n),
          o),
        eventName: "textgen_component_rendered",
      });
    }
    ((l.TextSuggestionsCallSite = u),
      (l.PersonaToggleDefaultType = c),
      (l.getLogMessageFromTextSuggestion = _),
      (l.TextGenLogEvent = g),
      (l.InEligibleTranslationsEligibilityReasons = h),
      (l.logTextGenEvent = y),
      (l.logTextGenComponentRendered = C));
  },
  98,
);
