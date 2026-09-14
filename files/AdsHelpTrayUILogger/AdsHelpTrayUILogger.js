__d(
  "AdsHelpTrayUILogger",
  [
    "AdsHelpTrayModalTypes",
    "AdsHelpTrayUILoggerStoreUtils",
    "GuidedFixLoggingUtils",
    "IdsIssueDetectionFalcoEvent",
    "MAIBAActionabilityBannerImpressionDedup",
    "adsHelpTrayBizSitePageTypeFromButtonSelector",
    "adsHelpTrayCurrentContentCaseIDSelector",
    "adsHelpTrayCurrentContentSelector",
    "adsHelpTrayCurrentQuerySelector",
    "adsHelpTrayIsTrayOpenSelector",
    "adsHelpTrayOpenModalSourceSelector",
    "adsHelpTrayOpenModalTypeSelector",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        e,
        t,
        r("adsHelpTrayBizSitePageTypeFromButtonSelector")(),
      );
    }
    function s(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.context_key] = e.context_value;
        }),
        t
      );
    }
    function u(t, n) {
      e("support_form_treatment_shown", { planID: n, treatmentID: t });
    }
    function c(t) {
      e("support_form_asset_select", { assetID: t });
    }
    function d(t, n) {
      e("support_form_asset_list_impression", {
        assetIds: t,
        hasMore: n != null && n ? "true" : "false",
      });
    }
    function m(t) {
      e("support_form_plan_select", { planID: t });
    }
    function p(t) {
      e("support_form_channel_select", { channelID: t });
    }
    function _(t) {
      e("support_form_go_to_active_chat", { threadID: t });
    }
    function f(t) {
      e("help_tray_simple_interface_plans_shown_other_issues", { issues: t });
    }
    function g(t, n, r, o, a, i, l, s, u, c) {
      e("support_form_case_submission", {
        channelID: n,
        formFailed: t,
        helpTrayOpenSource: u,
        isCanceled: c,
        issueID: r,
        jobID: a,
        lbdCaller: l,
        message: o,
        requestURI: i,
        source: s,
      });
    }
    function h(t) {
      e("support_form_go_to_messenger", { jobID: t });
    }
    function y(t) {
      e("help_tray_help_article_summary_like_click", { cmsID: t });
    }
    function C(t) {
      e("help_tray_help_article_summary_dislike_click", { cmsID: t });
    }
    function b(t) {
      e("help_tray_help_article_summary_like_unclick", { cmsID: t });
    }
    function v(t) {
      e("help_tray_help_article_summary_dislike_unclick", { cmsID: t });
    }
    function S(t) {
      e("support_form_article_see_more_click", { cmsID: t });
    }
    function R(t) {
      e("help_article_summary_show_more_click", { cmsID: t });
    }
    function L(t) {
      e("help_article_summary_show_less_click", { cmsID: t });
    }
    function E(t) {
      e("support_form_article_loaded", { cmsID: t });
    }
    function k(t, n) {
      e("support_form_contact_support_click", { cmsID: t, issueID: n });
    }
    function I(e) {
      var t = { callerID: e.callerID };
      return (
        e.lbdPlanID != null && (t.lbdPlanID = e.lbdPlanID),
        e.lbdAssetID != null && (t.lbdAssetID = e.lbdAssetID),
        e.lbdAssetType != null && (t.lbdAssetType = e.lbdAssetType),
        e.lbdSymptomID != null && (t.lbdSymptomID = e.lbdSymptomID),
        t
      );
    }
    function T(t) {
      e("support_form_submit_button_shown", I(t));
    }
    function D(t) {
      e("support_form_submit_button_hidden", I(t));
    }
    function x(t) {
      e("help_tray_submit_button_enabled", I(t));
    }
    function $(t) {
      e("help_tray_submit_button_disabled", I(t));
    }
    function P() {
      e("help_tray_marketing_pro_click");
    }
    function N(t, n) {
      var r = {};
      (t != null && n != null && (r = { lbdIssueID: t, supportedAsset: n }),
        e("support_form_common_issue_select", r));
    }
    function M(t, n, o, a) {
      (e("support_form_detected_issue_select", {
        assetID: n,
        issueInstanceId: o,
        lbdIssueID: t,
        modelType: a != null ? a : "",
      }),
        r("IdsIssueDetectionFalcoEvent").log(function () {
          return {
            entity_id: n,
            event_name: "DETECTED_ISSUE_CLICK",
            event_type: "DIAGNOSIS",
            ids_issue_id: o,
            ids_use_case: "HELP_TRAY",
          };
        }));
    }
    function w(t) {
      e("support_form_detected_issue_load", {
        plans: JSON.stringify(t != null ? t : []),
      });
    }
    function A(t) {
      e("support_form_asset_select_change", { assetID: t });
    }
    function F(t) {
      e("support_form_plan_select_change", { lbdPlanID: t });
    }
    function O(t, n, r, o) {
      e("help_tray_recommended_article_impression", {
        cms_id: t,
        pathname: r,
        rank: o,
        title: n,
      });
    }
    function B(t) {
      e("help_tray_positive_friction_load", { caseID: t });
    }
    function W(t) {
      e("help_tray_positive_friction_existing_case_click", { caseID: t });
    }
    function q(t, n) {
      e("help_tray_positive_friction_go_to_chat_click", {
        caseID: t,
        threadKey: n,
      });
    }
    function U(t) {
      e("help_tray_positive_friction_new_case_click", { caseID: t });
    }
    function V(t, n, r, o) {
      e("help_tray_recommended_article_click", {
        cms_id: t,
        pathname: r,
        rank: o,
        title: n,
      });
    }
    function H(t, n, o, a) {
      var i;
      e(
        t,
        babelHelpers.extends({}, a, {
          current_cms_id:
            (i = r("adsHelpTrayCurrentContentSelector")()) != null ? i : "",
          href: n,
          link_type: o,
        }),
      );
    }
    function G(e, t, n) {
      H("help_tray_help_article_other_link_click", e, t, n);
    }
    function z(t) {
      e(
        t
          ? "help_tray_recommended_article_view_more_click"
          : "help_tray_recommended_article_view_more_collapse",
      );
    }
    function j(t) {
      e("help_tray_feedback_click", t);
    }
    function K() {
      e("help_center_click");
    }
    function Q() {
      e("cancel_page_request_click");
    }
    function X(t, n) {
      var a = "case_tracking_confirmation_request_update_modal_open";
      switch (t) {
        case o("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
          a = "case_tracking_close_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
          a = "case_tracking_request_update_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REOPEN_CASE:
          a = "case_tracking_confirmation_reopen_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REQUEST_UPDATE:
          a = "case_tracking_confirmation_request_update_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
          a = "case_tracking_reopen_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REOPEN_CHAT:
          a = "case_tracking_reopen_chat_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.START_CHAT:
          a = "case_tracking_start_chat_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.ESCALATE_TO_SAM:
          a = "case_tracking_escalate_to_sam_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_ESCALATE_TO_SAM:
          a = "case_tracking_confirmation_escalate_to_sam_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.UPLOAD_ATTACHMENT:
          return;
      }
      e(
        a,
        babelHelpers.extends(
          { job_id: r("adsHelpTrayCurrentContentCaseIDSelector")() },
          n != null ? { source: n } : {},
        ),
      );
    }
    function Y(t) {
      var n = r("adsHelpTrayOpenModalTypeSelector")(),
        a = r("adsHelpTrayCurrentContentCaseIDSelector")(),
        i = r("adsHelpTrayOpenModalSourceSelector")(),
        l = "case_tracking_close_case_modal_submission";
      if (n != null) {
        switch (n) {
          case o("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
            l = "case_tracking_close_case_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
            l = "case_tracking_request_update_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
            l = "case_tracking_reopen_case_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REOPEN_CHAT:
            l = "case_tracking_reopen_chat_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.START_CHAT:
            l = "case_tracking_start_chat_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.ESCALATE_TO_SAM:
            l = "case_tracking_escalate_to_sam_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_ESCALATE_TO_SAM:
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REOPEN_CASE:
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REQUEST_UPDATE:
            break;
          case o("AdsHelpTrayModalTypes").Modal.UPLOAD_ATTACHMENT:
            return;
        }
        var s = babelHelpers.extends({}, t, { job_id: a });
        (i != null && (s.source = i), e(l, s));
      }
    }
    function J(t) {
      e("help_tray_footer_click", { link: t });
    }
    function Z(t) {
      e("help_tray_back_button_click", { content_type: t });
    }
    function ee(t, n, r) {
      var o = { open_source: t };
      (n != null && (o.routeName = n),
        r != null && (o.lbd_caller = r),
        e("help_tray_open", o));
    }
    function te(t, n) {
      e("help_tray_open", {
        cms_id: t,
        open_source: n != null ? n : "cms_article",
      });
    }
    function ne(t) {
      e("help_tray_close", { is_from_button_open: t.toString() });
    }
    function re(t) {
      r("isStringNullOrEmpty")(t)
        ? e("help_tray_search_clear")
        : e("help_tray_search", { search_term: t });
    }
    function oe(t, n, r) {
      e("help_tray_search_query_suggestion_typeahead_item_click", {
        search_term: t,
        suggestion_term: n,
        suggestion_type: r,
      });
    }
    function ae(t) {
      e("help_tray_search_input_change", { search_term: t || "" });
    }
    function ie(t, n, o, a) {
      var i;
      (a === void 0 && (a = r("adsHelpTrayCurrentQuerySelector")()),
        e("help_tray_search_result_impression", {
          cms_id: t.cms_id,
          content_source: t.content_source ? t.content_source : "",
          href: (i = t.href) != null ? i : "",
          pathname: o,
          rank: "" + n,
          search_term: a != null ? a : "",
          title: t.title,
        }));
    }
    function le(t, n, o) {
      var a, i;
      e("help_tray_search_result_open", {
        cms_id: t.cms_id,
        content_source: t.content_source ? t.content_source : "",
        href: (a = t.href) != null ? a : "",
        pathname: o,
        rank: "" + n,
        search_term:
          (i = r("adsHelpTrayCurrentQuerySelector")()) != null ? i : "",
        title: t.title,
      });
    }
    function se(t, n) {
      e(t, {
        ranked_search_results: n,
        search_term: r("adsHelpTrayCurrentQuerySelector")() || "",
      });
    }
    function ue(t) {
      e("help_tray_search_suggested_query_for_empty_results_clicked", {
        suggested_term: t,
      });
    }
    function ce(t, n) {
      var r = n.toString();
      e("help_tray_search_keyword_pill_click", { rank: r, search_term: t });
    }
    function de(t) {
      e("help_tray_resource_click", { resource: t });
    }
    function me(t, n) {
      var r = { job_id: t };
      (n != null && (r.source = n), e("case_tracking_case_view_open", r));
    }
    function pe() {
      e("case_tracking_history_click");
    }
    function _e() {
      e("help_tray_home_content_rendered", {
        is_help_tray_open: r("adsHelpTrayIsTrayOpenSelector")().toString(),
      });
    }
    function fe(t, n, r, a, i) {
      var l = n;
      (o("GuidedFixLoggingUtils").logGuidedFixEventToLEA(t, a, "guided_fix_m3"),
        e(r, babelHelpers.extends({}, i, { adGroupID: t, vt: l })));
    }
    function ge() {
      e("help_tray_survey_submit");
    }
    function he(t, n, r) {
      var o,
        a = s(t);
      ((a.INTEGRATION_POINT = r),
        (a.ERROR = (o = n.message) != null ? o : ""),
        (a.ERROR_NAME = n.name),
        (a.ERROR_STACK = n.stack),
        (a.MODULE_NAME = "SUPPORT_SURVEY"),
        e("help_tray_generic_error", a));
    }
    function ye(t) {
      var n = {};
      (t.forEach(function (e) {
        n[e.context_key] = e.context_value;
      }),
        e("help_tray_survey_renderred", n));
    }
    function Ce(t, n) {
      e(t ? "help_tray_alerts_expand" : "help_tray_alerts_collapse", {
        hiddenAlertsCount: n.toString(),
      });
    }
    function be(t) {
      e("help_tray_contact_support_button_click", { entry_point: t, url: "" });
    }
    function ve(t) {
      e("bizweb_tooltip_article_click", t != null ? { entryPoint: t } : {});
    }
    function Se(t, n) {
      e("bizweb_search_snippet_impression", {
        isGalaxy: (n != null ? n : !1).toString(),
        query: t,
      });
    }
    function Re(t) {
      e("bizweb_contextual_tooltip_impression", { entryPoint: t });
    }
    function Le(t, n) {
      e("bizweb_search_snippet_read_article_click", {
        cmsID: t,
        isGalaxy: (n != null ? n : !1).toString(),
      });
    }
    function Ee(t, n, r) {
      e("bizweb_search_snippet_toggle_expand", {
        cmsID: n,
        isGalaxy: (r != null ? r : !1).toString(),
        wasCollapsed: t.toString(),
      });
    }
    function ke(t) {
      e("help_tray_article_load", { cmsID: t });
    }
    function Ie(t) {
      e("help_tray_article_load_fail", { cmsID: t });
    }
    function Te(t) {
      var n = t.isButton;
      e("bizweb_contextual_learn_more_click", { isButton: n.toString() });
    }
    function De(t) {
      var n = t.isButton;
      e("bizweb_contextual_learn_more_impression", { isButton: n.toString() });
    }
    function xe() {
      e("bizweb_ads_tooltip_geo_component_hovered");
    }
    function $e(t, n) {
      e("bizweb_search_snippet_cms_content_load", {
        articleCmsID: t,
        snippetCmsID: n,
      });
    }
    function Pe(t, n, r) {
      e("bizweb_search_snippet_cms_content_load_error", {
        articleCmsID: t,
        errorMessage: r,
        snippetCmsID: n,
      });
    }
    function Ne() {
      e("help_tray_marketing_pro_shown");
    }
    function Me() {
      e("case_tracking_shown");
    }
    function we(t) {
      e("help_tray_contact_support_button_shown", {
        entry_point: t != null ? t : "",
      });
    }
    function Ae(t, n, r, o, a, i) {
      e("help_tray_case_details_impression", {
        actions: i.join(","),
        case_id: t != null ? t : "",
        entity_id: r != null ? r : "",
        last_step: a.toString(),
        num_of_steps: o.toString(),
        tracker_type: n != null ? n : "",
      });
    }
    function Fe(t, n) {
      var r = { threadID: String(t) };
      (n != null && (r.source = n),
        e("help_tray_case_details_open_active_chat_button_click", r));
    }
    function Oe(t) {
      e("help_tray_case_details_chat_history_link_click", { threadID: t });
    }
    function Be(t) {
      e("help_tray_case_details_chat_history_link_impression", { threadID: t });
    }
    function We(t, n) {
      var r;
      e("help_tray_generic_error", {
        errorMessage: (r = t.message) != null ? r : "",
        errorName: t.name,
        errorStack: t.stack,
        moduleName: n != null ? n : "",
      });
    }
    function qe(t) {
      var n = s(t);
      e("help_tray_feedback_bar_impression", n);
    }
    function Ue(t) {
      var n = s(t);
      e("help_tray_survey_empty", n);
    }
    function Ve(t) {
      t === void 0 && (t = []);
      var n = s(t);
      e("help_tray_feedback_bar_click", n);
    }
    function He() {
      e("support_form_help_center_link_shown");
    }
    function Ge(t, n, r, o, a) {
      e("help_tray_ads_ai_alr_resolution", {
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        resolutionFlow: a,
        status: o != null ? o : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function ze(t, n, r, o, a) {
      e("help_tray_ads_ai_alr_dora_status_mismatch", {
        ALRstatus: o != null ? o : "null",
        adAccountStatus: a,
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function je(t, n, r, o, a, i, l) {
      var s;
      e("help_tray_ads_ai_alr_dsl_status_mismatch", {
        ALRstatus: o != null ? o : "null",
        adAccountStatus: a,
        botResponseId: t != null ? t : "null",
        dslEligibilityStatus: l != null ? l : "null",
        externalConversationId: r != null ? r : "null",
        isDailySpendLimitFlow:
          (s = i == null ? void 0 : i.toString()) != null ? s : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function Ke(t, n, r) {
      e("help_tray_ads_ai_dsl_ineligible_rendered", {
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function Qe(t, n) {
      e("maiba_ad_object_reference_impression", {
        adObjectIds: t.join(","),
        botResponseId: n,
      });
    }
    function Xe(t, n, r) {
      e("maiba_ad_object_reference_click", {
        adObjectIds: t.join(","),
        botResponseId: n,
        eventType: r,
      });
    }
    function Ye(t, n, r, o, a) {
      e("help_tray_ads_ai_alr_async_notification", {
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        reviewId: a != null ? a : "null",
        reviewStatus: o != null ? o : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function Je(t, n, r) {
      e("help_tray_ads_ai_asset_selection_auto_select", {
        count: r.toString(),
        externalConversationId: t != null ? t : "",
        type: n,
      });
    }
    function Ze(t, n, r, o) {
      var a;
      e("maiba_ad_object_reference_error", {
        adObjectIds: (a = o == null ? void 0 : o.join(",")) != null ? a : "",
        adObjectType: n != null ? n : "",
        botResponseId: r != null ? r : "",
        errorType: t,
      });
    }
    function et(t, n, r) {
      e("maiba_ad_object_reference_hover_card_load_time", {
        adObjectIds: t.join(","),
        botResponseId: n,
        loadTimeMs: r.toString(),
      });
    }
    function tt(t, n) {
      e("maiba_data_viz_impression", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
      });
    }
    function nt(t, n) {
      e("maiba_data_viz_hover", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
      });
    }
    function rt(t, n) {
      e("maiba_data_viz_swap", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
      });
    }
    function ot(t, n, r) {
      e("maiba_data_viz_metric_selector_click", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
        metricType: r,
      });
    }
    function at() {
      e("maiba_markdown_table_impression", { botResponseId: "" });
    }
    function it(t, n, r) {
      e("maiba_creative_gen_carousel_impression", {
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
        variantCount: r.toString(),
      });
    }
    function lt(t, n, r, o) {
      var a;
      e("maiba_creative_gen_carousel_click", {
        action: r,
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
        selectedId: (a = o == null ? void 0 : o.selectedId) != null ? a : "",
        tileIndex:
          (o == null ? void 0 : o.tileIndex) != null
            ? o.tileIndex.toString()
            : "",
      });
    }
    function st(t, n) {
      e("maiba_creative_gen_single_image_impression", {
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function ut(t, n, r) {
      e("maiba_creative_gen_single_image_click", {
        action: r,
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function ct(t, n, r, o) {
      e("maiba_creative_gen_publish_card_impression", {
        afterImageCount: o.toString(),
        beforeImageCount: r.toString(),
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function dt(t, n, r, o, a) {
      e("maiba_creative_gen_publish_card_click", {
        action: r,
        afterImageCount: a.toString(),
        beforeImageCount: o.toString(),
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function mt(t, n, r) {
      e("maiba_creative_gen_pill_impression", {
        adgroupId: r != null ? r : "",
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function pt(t, n, r) {
      e("maiba_creative_gen_pill_click", {
        action: "view",
        adgroupId: r != null ? r : "",
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function _t(t, n, r) {
      e("whatsapp_loader_shown", {
        selectedAssetId: n.id,
        selectedPlanID: t,
        threadIdx: r != null ? r : "",
      });
    }
    function ft(t, n, r, o) {
      var a;
      e("maiba_data_viz_error_state", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
        errorMessage: (a = o == null ? void 0 : o.message) != null ? a : "",
        errorType: r,
      });
    }
    function gt(t, n, r, o, a) {
      r === void 0 && (r = !1);
      var i = {
        botResponseId: n,
        conversationId: t,
        isHumanAgent: r.toString(),
      };
      (o != null && (i.channel = o),
        a != null && (i.surface = a),
        e("help_tray_ads_ai_notification_toast_impression", i));
    }
    function ht(t) {
      var n = t.adAccountId,
        r = t.decision,
        o = t.exposureAttempted,
        a = t.snippetState,
        i = t.source,
        l = t.surface;
      e("general", {
        ad_account_id: n != null ? n : "",
        decision: r,
        event_type: "maiba_async_notification_decision",
        exposure_attempted: o.toString(),
        platform: "web",
        snippet_state: a,
        source: i,
        surface: l != null ? l : "",
      });
    }
    function yt(t, n) {
      e("general", {
        ad_account_id: t != null ? t : "",
        event_type: "maiba_subscription_lifecycle",
        lifecycle_event: "subscribe",
        platform: "web",
        source: "use_maiba_async_message_subscription",
        subscription_name: "maiba_async_message",
        surface: n != null ? n : "",
      });
    }
    function Ct(t, n, r, o, a) {
      r === void 0 && (r = !1);
      var i = {
        botResponseId: n,
        conversationId: t,
        isHumanAgent: r.toString(),
      };
      (o != null && (i.channel = o),
        a != null && (i.surface = a),
        e("help_tray_ads_ai_notification_toast_click", i));
    }
    function bt(t, n, r, o, a, i) {
      o === void 0 && (o = !1);
      var l = {
        botResponseId: n,
        conversationId: t,
        entrypoint: r,
        isHumanAgent: o.toString(),
      };
      (a != null && (l.channel = a),
        i != null && (l.surface = i),
        e("maiba_open_chat_thread_success", l));
    }
    function vt(t) {
      e("maiba_async_thread_marked_read", { conversationId: t });
    }
    function St(t) {
      e("maiba_async_unread_badge_impression", { conversationId: t });
    }
    function Rt(t) {
      e("maiba_async_unread_count_badge_impression", {
        unreadCount: String(t),
      });
    }
    function Lt(t, n, r) {
      (r === void 0 && (r = !1),
        e("maiba_bot_response_impression", {
          botResponseId: t,
          conversationId: n,
          isHumanAgent: r.toString(),
        }));
    }
    function Et(t, n, r, a, i, l) {
      o("MAIBAActionabilityBannerImpressionDedup").claimBannerImpression(
        i,
        a,
        l,
        t,
      ) &&
        e("maiba_actionability_banner_impression", {
          bannerLabel: t,
          bannerSection: r != null ? r : "",
          bannerStatus: n,
          botResponseId: a != null ? a : "",
          conversationId: i != null ? i : "",
        });
    }
    function kt(t) {
      var n, r, o, a, i, l, s;
      e("maiba_workspace_canvas_lifecycle", {
        botResponseId: (n = t.botResponseId) != null ? n : "",
        conversationId: (r = t.conversationId) != null ? r : "",
        outcome: (o = t.outcome) != null ? o : "",
        product: (a = t.product) != null ? a : "",
        reason: (i = t.reason) != null ? i : "",
        stage: t.stage,
        surface: (l = t.surface) != null ? l : "",
        workspaceType: (s = t.workspaceType) != null ? s : "",
        workspaceVersion:
          t.workspaceVersion == null ? "" : String(t.workspaceVersion),
      });
    }
    function It(t, n) {
      e("maiba_copy_content_click", { botResponseId: t, conversationId: n });
    }
    function Tt() {
      e("maiba_dictation_impression", {});
    }
    function Dt(t, n) {
      e("maiba_dictation_button_click", { action: t, connectionState: n });
    }
    function xt(t) {
      e("maiba_dictation_used_on_send", { isOnlyDictation: t.toString() });
    }
    function $t(t) {
      e("maiba_dictation_error", { errorType: t });
    }
    function Pt(t) {
      var n;
      e("maiba_dictation_session", {
        asrDomain: t.asrDomain,
        audioDurationMs: t.audioDurationMs.toString(),
        finalTranscriptCount: t.finalTranscriptCount.toString(),
        locale: t.locale,
        shortwaveId: (n = t.shortwaveId) != null ? n : "",
      });
    }
    function Nt(t, n) {
      e("maiba_generate_pdf_click", { botResponseId: t, conversationId: n });
    }
    function Mt(t, n, r, o, a) {
      e("maiba_message_dwell_time", {
        botResponseId: t,
        conversationId: n,
        dwellTimeMs: String(r),
        hiddenReason: o,
        postStreamingDwellTimeMs: String(a),
      });
    }
    function wt(t, n, r, o) {
      e("maiba_message_fully_read", {
        botResponseId: t,
        conversationId: n,
        messageHeight: String(r),
        viewportHeight: String(o),
      });
    }
    function At(t, n, r, o) {
      (o === void 0 && (o = ""),
        e("maiba_mid_chat_prompts", {
          botResponseId: t,
          conversationId: n,
          promptTypes: o,
          type: r,
        }));
    }
    function Ft(t, n, r, o) {
      e("maiba_comparison_preference_selected", {
        comparisonConversationId: o != null ? o : "",
        externalConversationId: t,
        preference: n,
        selectedButton: r,
      });
    }
    function Ot(t, n) {
      e("maiba_comparison_view_impression", {
        comparisonConversationId: n != null ? n : "",
        externalConversationId: t,
      });
    }
    function Bt(t, n) {
      e("maiba_proactive_summary_card_impression", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function Wt(t, n) {
      e("maiba_proactive_summary_card_click", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function qt(t, n) {
      e("maiba_proactive_summary_card_dismissed", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function Ut(t, n) {
      e("maiba_proactive_summary_thread_opened", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function Vt(t) {
      e("maiba_proactive_summary_card_lookup_miss", { adAccountId: t });
    }
    function Ht(t, n, r) {
      e("maiba_proactive_badge_impression", {
        adAccountId: t,
        proactiveCount: String(n),
        totalUnreadCount: String(r),
      });
    }
    function Gt(t) {
      var n, r;
      e("maiba_outcome_forecaster_impression", {
        adAccountId: t.adAccountID,
        adDraftId: t.adDraftID,
        botResponseId: t.botResponseId,
        campaignGroupId: t.campaignGroupID,
        dailyBudget: t.dailyBudget != null ? String(t.dailyBudget) : "",
        impressionsBand: t.impressionsBand,
        optimizationGoal: (n = t.optimizationGoal) != null ? n : "",
        predictedImpressions:
          t.predictedImpressions != null ? String(t.predictedImpressions) : "",
        predictedResults:
          t.predictedResults != null ? String(t.predictedResults) : "",
        resultsBand: (r = t.resultsBand) != null ? r : "",
        resultsLabel: t.resultsLabel,
      });
    }
    function zt(t, n, r, o, a, i, l, s, u, c) {
      e("maiba_scorecard_report_impression", {
        adAccountId: t,
        entrypoint: l,
        externalConversationId: n,
        hasFunnel: o ? "1" : "0",
        hasKpi: r ? "1" : "0",
        issueCount: String(a),
        renderer: s,
        scorecardLoggingID: u != null ? u : "",
        shellTabCount: String(i),
        shellTabNames: c != null ? c : "",
      });
    }
    function jt(t, n, r) {
      e("maiba_scorecard_funnel_chart_click", {
        adAccountId: t,
        externalConversationId: n,
        selectedMetric: r,
      });
    }
    function Kt(t, n, r, o, a, i) {
      e("maiba_scorecard_cta_click", {
        adAccountId: t,
        ctaLabel: r,
        ctaPrompt: o,
        externalConversationId: n,
        originComponent: a,
        renderer: i,
      });
    }
    function Qt(t, n, r, o, a) {
      e("maiba_scorecard_issue_card_toggle", {
        adAccountId: t,
        expanded: o ? "1" : "0",
        externalConversationId: n,
        issueNumber: String(r),
        renderer: a,
      });
    }
    function Xt(t, n, r, o, a, i, l) {
      e("maiba_scorecard_report_breakdown_tab_content_impression", {
        adAccountId: t,
        componentId: r,
        externalConversationId: n,
        renderer: l,
        surfaceId: o,
        tabIndex: String(a),
        tabTitle: i,
      });
    }
    function Yt(t, n, r, o, a, i, l) {
      e("maiba_scorecard_report_breakdown_tab_click", {
        adAccountId: t,
        componentId: r,
        externalConversationId: n,
        renderer: l,
        surfaceId: o,
        tabIndex: String(a),
        tabTitle: i,
      });
    }
    function Jt(t, n) {
      var r, o, a, i, l, s, u, c;
      e(t, {
        adAccountId: n.adAccountId,
        adObjectIds: (r = n.adObjectIds) != null ? r : "",
        adObjectType: (o = n.adObjectType) != null ? o : "",
        componentId: n.componentId,
        ctaType: n.ctaType,
        externalConversationId: n.externalConversationId,
        maibaRecommendationId: (a = n.maibaRecommendationId) != null ? a : "",
        nonOsCtaAction: (i = n.nonOsCtaAction) != null ? i : "",
        recommendationId: (l = n.recommendationId) != null ? l : "",
        recommendationToolType: (s = n.recommendationToolType) != null ? s : "",
        renderer: n.renderer,
        surfaceId: n.surfaceId,
        tabComponentId: (u = n.tabComponentId) != null ? u : "",
        tabIndex: n.tabIndex != null ? String(n.tabIndex) : "",
        tabTitle: (c = n.tabTitle) != null ? c : "",
      });
    }
    function Zt(e) {
      Jt("maiba_scorecard_report_recommendation_cta_impression", e);
    }
    function en(e) {
      Jt("maiba_scorecard_report_recommendation_cta_click", e);
    }
    function tn(t, n, r, o, a, i) {
      e("maiba_scorecard_parse_error", {
        errorMessage: r,
        errorName: o != null ? o : "",
        errorStack: a != null ? a : "",
        externalConversationId: i != null ? i : "",
        parseStage: n,
        surface: t,
      });
    }
    function nn(t, n, r, o, a) {
      e("maiba_scorecard_render_error", {
        errorMessage: n,
        errorName: r != null ? r : "",
        errorStack: o != null ? o : "",
        externalConversationId: a != null ? a : "",
        surface: t,
      });
    }
    function rn(t, n, r, o, a, i) {
      e(
        t,
        babelHelpers.extends(
          {
            errorMessage: r,
            errorName: o != null ? o : "",
            errorStack: a != null ? a : "",
            surfaceId: n != null ? n : "",
          },
          i != null ? { is_from_history: i.toString() } : {},
        ),
      );
    }
    function on(t, n, r) {
      e("maiba_a2ui_pipeline_checkpoint", {
        checkpointData: r != null ? r : "",
        checkpointStage: n,
        surfaceId: t != null ? t : "",
      });
    }
    function an(t, n) {
      e("maiba_a2ui_action_success", {
        eventData: n != null ? n : "",
        surfaceId: t != null ? t : "",
      });
    }
    function ln(t, n) {
      e("maiba_a2ui_impression", {
        eventData: n != null ? n : "",
        surfaceId: t != null ? t : "",
      });
    }
    function sn(e, t, n, r, o) {
      rn("maiba_a2ui_pipeline_checkpoint_error", e, t, n, r, o);
    }
    function un(e, t, n, r, o) {
      rn("maiba_scorecard_report_a2ui_render_error", e, t, n, r, o);
    }
    function cn(e, t, n, r, o) {
      var a =
        e != null && e.startsWith("scorecard-")
          ? "maiba_scorecard_report_a2ui_render_error"
          : "maiba_a2ui_render_error";
      rn(a, e, t, n, r, o);
    }
    ((l.logSupportTreatmentShown = u),
      (l.logSupportFormAssetSelect = c),
      (l.logSupportFormAssetListImpression = d),
      (l.logSupportFormPlanSelect = m),
      (l.logSupportFormChannelSelect = p),
      (l.logSupportFormGoToActiveChat = _),
      (l.logSupportFormPlansShownOtherIssues = f),
      (l.logSupportFormCaseSubmission = g),
      (l.logSupportFormGoToMessenger = h),
      (l.logHelpArticleSummaryLike = y),
      (l.logHelpArticleSummaryDislike = C),
      (l.logHelpArticleSummaryUnlike = b),
      (l.logHelpArticleSummaryUndislike = v),
      (l.logSupportFormArticleSeeMoreClick = S),
      (l.logHelpArticleSummaryShowMoreClick = R),
      (l.logHelpArticleSummaryShowLessClick = L),
      (l.logSupportFormArticleLoaded = E),
      (l.logSupporFormContactSupportClick = k),
      (l.logSupportFormSubmitButtonShown = T),
      (l.logSupportFormSubmitButtonHidden = D),
      (l.logSupportFormSubmitButtonEnabled = x),
      (l.logSupportFormSubmitButtonDisabled = $),
      (l.logMarketingProClick = P),
      (l.logSupportFormCommonIssueSelect = N),
      (l.logSupportFormDetectedIssueSelect = M),
      (l.logSupportFormDetectedIssueLoad = w),
      (l.logSupportFormAssetChangeClick = A),
      (l.logSupportFormPlanChangeClick = F),
      (l.logHelpArticleImpression = O),
      (l.logPositiveFrictionLoad = B),
      (l.logPositiveFrictionExistingCaseClick = W),
      (l.logPositiveFrictionGoToChatClick = q),
      (l.logPositiveFrictionNewCaseClick = U),
      (l.logHelpArticleClick = V),
      (l.logHelpArticleOtherLinkClick = G),
      (l.logHelpArticleViewMoreToggle = z),
      (l.logFlytrapClick = j),
      (l.logHelpCenterClick = K),
      (l.logCancelPageRequestClick = Q),
      (l.logModalOpen = X),
      (l.logModalSubmission = Y),
      (l.logFooterClick = J),
      (l.logBackButtonClick = Z),
      (l.logHelpTrayOpen = ee),
      (l.logHelpTrayArticleOpen = te),
      (l.logHelpTrayClose = ne),
      (l.logSearch = re),
      (l.logSearchQuerySuggestionTypeaheadItemClick = oe),
      (l.logSearchInputChange = ae),
      (l.logSearchResultImpression = ie),
      (l.logSearchResultOpen = le),
      (l.logSearchResults = se),
      (l.logSuggestedQueryForEmptyResultsClick = ue),
      (l.logSuggestedPillQueryClick = ce),
      (l.logResourceClick = de),
      (l.logCaseTrackingViewOpen = me),
      (l.logCaseTrackingHistoryClick = pe),
      (l.logHomeContentRender = _e),
      (l.logGuidedFixEvent = fe),
      (l.logSurveySubmit = ge),
      (l.logSurveyError = he),
      (l.logSurveyRender = ye),
      (l.logHelpTrayAlertListToggleExpand = Ce),
      (l.logHelpTrayContactSupportButtonClick = be),
      (l.logBizwebTooltipArticleClick = ve),
      (l.logBizwebSearchSnippetImpression = Se),
      (l.logBizwebContextualTooltipImpression = Re),
      (l.logBizwebSearchSnippetReadArticleClick = Le),
      (l.logBizwebSearchSnippetToggleExpand = Ee),
      (l.logHelpTrayArticleLoad = ke),
      (l.logHelpTrayArticleLoadFail = Ie),
      (l.logBizwebContextualLearnMoreClick = Te),
      (l.logBizwebContextualLearnMoreImpression = De),
      (l.logBizwebAdsTooltipGeoComponentHovered = xe),
      (l.logBizwebSearchSnippetCmsContentLoad = $e),
      (l.logBizwebSearchSnippetCmsContentLoadError = Pe),
      (l.logMarketingProShown = Ne),
      (l.logCaseTrackingShown = Me),
      (l.logContactSupportButtonShown = we),
      (l.logCaseTrackingDetailsImpression = Ae),
      (l.logCaseTrackingOpenActiveChatButtonClick = Fe),
      (l.logCaseTrackingChatHistoryLinkClick = Oe),
      (l.logCaseTrackingChatHistoryLinkImpression = Be),
      (l.logHelpTrayGenericError = We),
      (l.logFeedbackBarImpression = qe),
      (l.logSurveyEmpty = Ue),
      (l.logFeedbackBarClick = Ve),
      (l.logHelpCenterLinkShown = He),
      (l.logALRResolutionStatus = Ge),
      (l.logALRStatusMismatchWithAdAccountForDORA = ze),
      (l.logALRStatusMismatchWithAdAccountForDSL = je),
      (l.logDSLInEligibleWidgetRendered = Ke),
      (l.logAdObjectReferenceImpression = Qe),
      (l.logAdObjectReferenceClick = Xe),
      (l.logALRAsyncNotification = Ye),
      (l.logMAIBAAssetSelectionAutoSelect = Je),
      (l.logAdObjectReferenceError = Ze),
      (l.logAdObjectHoverCardLoadTime = et),
      (l.logDataVizWidgetImpression = tt),
      (l.logDataVizWidgetHover = nt),
      (l.logDataVizWidgetSwap = rt),
      (l.logDataVizWidgetMetricSelectorClick = ot),
      (l.logDataVizMarkdownTableImpression = at),
      (l.logCreativeGenCarouselImpression = it),
      (l.logCreativeGenCarouselClick = lt),
      (l.logCreativeGenSingleImageImpression = st),
      (l.logCreativeGenSingleImageClick = ut),
      (l.logCreativeGenPublishCardImpression = ct),
      (l.logCreativeGenPublishCardClick = dt),
      (l.logCreativeGenPillImpression = mt),
      (l.logCreativeGenPillClick = pt),
      (l.logWhatsAppLoaderShown = _t),
      (l.logDataVizErrorState = ft),
      (l.logMAIBANotificationToastImpression = gt),
      (l.logMAIBAAsyncNotificationDecision = ht),
      (l.logMAIBAAsyncMessageSubscriptionSubscribe = yt),
      (l.logMAIBANotificationToastClick = Ct),
      (l.logMAIBAOpenChatThreadSuccess = bt),
      (l.logMAIBAAsyncThreadMarkedRead = vt),
      (l.logMAIBAAsyncUnreadBadgeImpression = St),
      (l.logMAIBAAsyncUnreadCountBadgeImpression = Rt),
      (l.logMAIBABotResponseImpression = Lt),
      (l.logMAIBAActionabilityBannerImpression = Et),
      (l.logMAIBAWorkspaceCanvasLifecycle = kt),
      (l.logMAIBACopyContentClick = It),
      (l.logMAIBADictationImpression = Tt),
      (l.logMAIBADictationButtonClick = Dt),
      (l.logMAIBADictationUsedOnSend = xt),
      (l.logMAIBADictationError = $t),
      (l.logMAIBADictationSession = Pt),
      (l.logMAIBAGeneratePdfClick = Nt),
      (l.logMAIBAMessageDwellTime = Mt),
      (l.logMAIBAMessageFullyRead = wt),
      (l.logMAIBAMidChatPrompts = At),
      (l.logMAIBAComparisonPreferenceSelected = Ft),
      (l.logMAIBAComparisonViewImpression = Ot),
      (l.logMAIBAProactiveSummaryCardImpression = Bt),
      (l.logMAIBAProactiveSummaryCardClick = Wt),
      (l.logMAIBAProactiveSummaryCardDismissed = qt),
      (l.logMAIBAProactiveSummaryThreadOpened = Ut),
      (l.logMAIBAProactiveSummaryCardLookupMiss = Vt),
      (l.logMAIBAProactiveBadgeImpression = Ht),
      (l.logMAIBAOutcomeForecasterImpression = Gt),
      (l.logMAIBAScorecardReportImpression = zt),
      (l.logMAIBAScorecardFunnelChartClick = jt),
      (l.logMAIBAScorecardCTAClick = Kt),
      (l.logMAIBAScorecardIssueCardToggle = Qt),
      (l.logMAIBAScorecardReportBreakdownTabContentImpression = Xt),
      (l.logMAIBAScorecardReportBreakdownTabClick = Yt),
      (l.logMAIBAScorecardReportRecommendationCTAImpression = Zt),
      (l.logMAIBAScorecardReportRecommendationCTAClick = en),
      (l.logMAIBAScorecardParseError = tn),
      (l.logMAIBAScorecardRenderError = nn),
      (l.logMAIBAA2UIPipelineCheckpoint = on),
      (l.logMAIBAA2UIActionSuccess = an),
      (l.logMAIBAA2UIImpression = ln),
      (l.logMAIBAA2UIPipelineCheckpointError = sn),
      (l.logMAIBAA2UIScorecardRenderError = un),
      (l.logMAIBAA2UIRenderError = cn));
  },
  98,
);
