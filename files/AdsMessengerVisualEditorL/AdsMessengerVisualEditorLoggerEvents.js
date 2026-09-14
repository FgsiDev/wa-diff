__d(
  "AdsMessengerVisualEditorLoggerEvents",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        AM_SALES_CATALOG_DEFAULT: "am_sales_catalog_default",
        CTM_AD_PREVIEW_CLICKED: "ctm_ad_preview_clicked",
        CTM_AD_PRODUCT_INFO_TOGGLE: "ctm_ad_product_info_toggle",
        CTM_AD_PRODUCT_INFO_BUTTON_CHANGE: "ctm_ad_product_info_button_change",
        CTM_AD_PRODUCT_INFO_SAVE: "ctm_ad_product_info_save",
        CTM_SELECT_CUSTOM_WELCOME_MESSAGE: "ctm_select_custom_welcome_message",
        CTM_SELECT_CUSTOMER_ACTION_TYPE: "ctm_select_customer_action_type",
        CTM_SELECT_VIDEO_UPLOAD: "ctm_select_video_upload",
        CTM_SELECT_IMAGE_UPLOAD: "ctm_select_image_upload",
        CTM_BOT_RESPONSE_COMPONENT_LOADED: "ctm_bot_response_component_loaded",
        CTM_CLICK_CREATE_MESSAGE_TEMPLATE: "ctm_click_create_message_template",
        CTX_CLICK_PREVIEW_IN_MESSENGER: "ctx_click_preview_in_messenger",
        CTX_CLICK_PREVIEW_IN_PARTNER_APP_REDESIGN:
          "ctx_click_preview_in_partner_app_redesign",
        CTX_CLICK_PREVIEW_IN_PARTNER_APP_REDESIGN_ERROR:
          "ctx_click_preview_in_partner_app_redesign_error",
        CTX_CLICK_PREVIEW_IN_MESSENGER_FROM_MODAL:
          "ctx_click_preview_in_messenger_from_modal",
        CTM_CANCEL_MESSAGE_TEMPLATE: "ctm_cancel_message_template",
        CTM_CREATE_NEW_TEMPLATE_FAIL: "ctm_create_new_template_fail",
        CTM_CREATE_NEW_TEMPLATE_SUCCESS: "ctm_create_new_template_success",
        CTM_CTX_SET_MESSAGE_TEMPLATE_SUCCESS:
          "ctm_ctx_set_message_template_success",
        CTM_DESTINATION_PREVIEW_CLICKED: "ctm_destination_preview_clicked",
        CTM_EDIT_TEMPLATE_FAIL: "ctm_edit_template_fail",
        CTM_EDIT_TEMPLATE_SUCCESS: "ctm_edit_template_success",
        CTM_DELETE_TEMPLATE: "ctm_delete_template",
        CTM_FINISH_WITHOUT_SAVING: "ctm_finish_without_saving",
        CTM_ADD_ICEBREAKERS: "ctm_add_icebreakers",
        CTM_ADVANCED_JSON_SETUP: "ctm_advanced_json_setup",
        CTM_INSERT_EMOJI: "ctm_insert_emoji",
        CTM_PERSONALIZE_SAVED_RESPONSE: "ctm_personalize_saved_response",
        CTM_RENDER_EMOJI_BUTTON: "ctm_render_emoji_button",
        CTM_CLICK_EMOJI_BUTTON: "ctm_click_emoji_button",
        CTM_CLICK_EDIT: "ctm_click_edit",
        CTM_EP_CLICK_EDIT: "ctm_ep_click_edit",
        CTM_EP_CLICK_JSON: "ctm_ep_click_json",
        CTM_EP_FINISH_WITHOUT_SAVING: "ctm_ep_finish_without_saving",
        CTM_EP_SAVE_TEMPLATE: "ctm_ep_save_template",
        CTM_EP_VE_RENDERED: "ctm_ep_ve_rendered",
        CTM_VE_RENDERED: "ctm_ve_rendered",
        CTM_EP_CLOSE_DIALOG: "ctm_ep_close_dialog",
        CTM_CLOSE_DIALOG: "ctm_close_dialog",
        CTM_RENDER_JSON_PREVIEW: "ctm_render_json_preview",
        CTM_RENDER_GET_STARTED_PREVIEW: "ctm_render_get_started_preview",
        CTM_RENDER_VE_GREETING_SECTION: "ctm_render_ve_greeting_section",
        CTM_SAVE_IB_RESPONSE: "ctm_save_ib_response",
        CTM_AI_GEN_AR_REMOVE: "ctm_ai_gen_ar_remove",
        CTM_NUMBER_OF_QUICK_REPLIES: "ctm_number_of_quick_replies",
        CTM_PUBLISH_QR_NULL_TEXT_RESPONSE: "ctm_publish_qr_null_text_response",
        CTM_PUBLISH_QR_TEXT_RESPONSE: "ctm_publish_qr_text_response",
        CTM_PUBLISH_QR_BOT_RESPONSE: "ctm_publish_qr_bot_response",
        CTM_PUBLISH_QR_NONE_RESPONSE: "ctm_publish_qr_none_response",
        CTM_SAVE_QR_NULL_TEXT_RESPONSE: "ctm_save_qr_null_text_response",
        CTM_SAVE_QR_TEXT_RESPONSE: "ctm_save_qr_text_response",
        CTM_SAVE_QR_BOT_RESPONSE: "ctm_save_qr_bot_response",
        CTM_SAVE_QR_NONE_RESPONSE: "ctm_save_qr_none_response",
        CTM_SELECT_CREATE_NEW_TAB: "ctm_select_create_new_tab",
        CTM_SELECT_GREETING_TYPE: "ctm_select_greeting_type",
        CTM_SELECT_USE_EXISTING_TAB: "ctm_select_existing_tab",
        CTM_CALL_TOGGLE: "ctm_call_toggle",
        CTM_CALL_ERROR_SHOWN: "ctm_call_error_shown",
        CTM_CALL_DEFAULTED_AD_DESCRIPTION: "ctm_call_defaulted_ad_description",
        CTM_CALL_DEFAULTED_AD_PRIMARY_TEXT:
          "ctm_call_defaulted_ad_primary_text",
        CTM_CALL_TEMPLATE_CREATED_WITH_PHONE_NUMBER:
          "ctm_call_template_created_with_phone_number",
        CTS_ADD_IMAGE_BUTTON_CLICK: "cts_add_image_button_click",
        CTS_ADD_IMAGE_SECTION_RENDER: "cts_add_image_section_render",
        CTS_AUTO_UPDATE_OPTIMIZATION_GOAL: "cts_auto_update_optimization_goal",
        CTS_AUTO_UPDATE_OPTIMIZATION_GOAL_ADDITIONAL_CONDITIONS:
          "cts_auto_update_optimization_goal_additional_conditions",
        CTS_AUTO_UPDATE_CALL_TO_ACTION_TO_GET_UPDATES:
          "cts_auto_update_call_to_action_to_get_updates",
        CTS_CHANGED_OPTIMIZATION_GOAL_TO_SUBSCRIBERS_BY_ADVERTISERS:
          "cts_changed_optimization_goal_to_subscribers_by_advertisers",
        CTX_BUSINESS_HOUR_DAYPARTING_AD_PUBLISH:
          "ctx_business_hour_dayparting_ad_publish",
        CTX_DAYPARTING_DAILY_BUDGET_SCHEDULING_CHECKBOX_DISABLE:
          "ctx_dayparting_daily_budget_scheduling_checkbox_disable",
        CTX_DAYPARTING_DAILY_BUDGET_SCHEDULING_CHECKBOX_ENABLE:
          "ctx_dayparting_daily_budget_scheduling_checkbox_enable",
        CTX_DAYPARTING_DAILY_BUDGET_SCHEDULING_PRESET_CHANGE:
          "ctx_dayparting_daily_budget_scheduling_preset_change",
        CTX_CHECK_MTML_CTA_ELIGIBILITY: "ctx_check_mtml_cta_eligibility",
        CTX_MESSAGE_TEMPLATE_PREVIEW_IMPRESSION:
          "ctx_message_template_preview_impression",
        CTX_L1_UNIFIED_CREATION_OBJECTIVE_TYPE:
          "ctx_l1_unified_creation_objective_type",
        CTX_L1_UNIFIED_CREATION_SET_CTD_RENDER:
          "ctx_l1_unified_creation_set_ctd_render",
      }),
      l = e;
    i.default = l;
  },
  66,
);
