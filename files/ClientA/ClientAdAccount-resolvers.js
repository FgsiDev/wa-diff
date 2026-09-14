__d(
  "ClientAdAccount-resolvers",
  ["AdsAdObjectRelayIDUtils", "AdsDML", "adsUEditorSlowSelectorsLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDML")
      .Query({ name: i.id, liveResolverDMLQuery: !0 })
      .Derived(function (e) {
        return e.data.L4Account(e.vars.id, function (e) {
          return e;
        });
      });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, { id: t });
    }
    function u(e) {
      return e;
    }
    function c(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_adgroups",
        ),
        n
      );
    }
    function d(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_campaign_groups",
        ),
        n
      );
    }
    function m(e, t) {
      return t.id == null
        ? null
        : { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(t.id) };
    }
    function p(e, t) {
      return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(t.id) };
    }
    function _(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_campaign_groups",
        ),
        n
      );
    }
    function f(e, t) {
      var n = t.ids.map(function (e) {
        return { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(e) };
      });
      return (
        o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
          n,
          "account_combined_campaigns",
        ),
        n
      );
    }
    function g(e) {
      return e.account_id;
    }
    function h(e) {
      return e.account_currency_ratio_to_usd;
    }
    function y(e) {
      return e.account_status;
    }
    function C(e) {
      return e.adtrust_dsl;
    }
    function b(e) {
      return e.archived_adgroup_count;
    }
    function v(e) {
      return e.archived_campaign_count;
    }
    function S(e) {
      return e.archived_campaign_group_count;
    }
    function R(e) {
      return e.attr_window_deprecation_group;
    }
    function L(e) {
      return e.attribution_spec;
    }
    function E(e) {
      return e.passback_attribution_spec;
    }
    function k(e) {
      return e.authorized_country_for_political_ads;
    }
    function I(e) {
      return e.agency_fee_config;
    }
    function T(e) {
      return e.average_daily_campaign_budget;
    }
    function D(e) {
      return e.average_lifetime_campaign_budget;
    }
    function x(e) {
      return e.average_daily_campaign_group_budget;
    }
    function $(e) {
      return e.average_lifetime_campaign_group_budget;
    }
    function P(e) {
      return e.brand_safety_content_filter_levels;
    }
    function N(e) {
      return e.brand_safety_inherited_content_filter_levels;
    }
    function M(e) {
      return e.brand_safety_excluded_topics;
    }
    function w(e) {
      return e.business;
    }
    function A(e) {
      var t, n;
      return ((t = e.business) == null ? void 0 : t.id) == null
        ? null
        : { id: (n = e.business) == null ? void 0 : n.id };
    }
    function F(e) {
      var t, n;
      return ((t = e.business) == null ? void 0 : t.id) == null
        ? null
        : { id: (n = e.business) == null ? void 0 : n.id };
    }
    function O(e) {
      return e.business_country_code;
    }
    function B(e) {
      return e.business_restriction_reason;
    }
    function W(e) {
      return e.business_verification_status;
    }
    function q(e) {
      return e.businessprojects;
    }
    function U(e) {
      return e.can_bypass_fs_check;
    }
    function V(e) {
      return e.capabilities;
    }
    function H(e) {
      return e.created_time;
    }
    function G(e) {
      return e.currency;
    }
    function z(e) {
      return e.currency;
    }
    function j(e) {
      return e.disable_reason;
    }
    function K(e) {
      return e.default_dsa_beneficiary;
    }
    function Q(e) {
      return e.default_dsa_payor;
    }
    function X(e) {
      return e.default_unified_attribution_spec;
    }
    function Y(e) {
      return e.dynamic_probation_dsl;
    }
    function J(e) {
      return e.end_advertiser_name;
    }
    function Z(e) {
      return e.funding_source;
    }
    function ee(e) {
      return e.flex_single_objective;
    }
    function te(e) {
      return e.__gk_DO_NOT_USE;
    }
    function ne(e) {
      return e.self_resolve_uri;
    }
    function re(e) {
      return e.has_purchase_optimization_eligible_page;
    }
    function oe(e) {
      return e.has_combo_cards_on_file;
    }
    function ae(e) {
      return e.has_migrated_permissions;
    }
    function ie(e) {
      return e.has_value_rule_set === !0;
    }
    function le(e) {
      return e.preferred_value_rule_collection;
    }
    function se(e) {
      return e.value_rules_placement_suggested_spec;
    }
    function ue(e) {
      return e.engagement_hub_primary_participant_status;
    }
    function ce(e) {
      return e.engagement_hub_primary_participant_business_id;
    }
    function de(e) {
      return e.ads_manager_beta_enrollment_status === !0;
    }
    function me(e) {
      return e.ads_manager_beta_has_opted_out === !0;
    }
    function pe(e) {
      return e.ads_manager_beta_ai_recap_visible === !0;
    }
    function _e(e) {
      return e.ads_manager_beta_universal_composer_visible === !0;
    }
    function fe(e) {
      return e.incremental_conversion_optimization_ad_studies;
    }
    function ge(e) {
      return e.io_number;
    }
    function he(e) {
      return e.is_biz_migration_eligible;
    }
    function ye(e) {
      return e.is_business_allowed_to_advertise;
    }
    function Ce(e) {
      return e.is_business_verification_eligible;
    }
    function be(e) {
      return e.is_ctx_advertiser;
    }
    function ve(e) {
      return e.is_mi_billing_info_updated;
    }
    function Se(e) {
      return e.is_new_advertiser;
    }
    function Re(e) {
      return e.is_pinless_debit_eligible;
    }
    function Le(e) {
      return e.is_tax_id_required;
    }
    function Ee(e) {
      return e.is_closed_by_advertiser_compromise_bot;
    }
    function ke(e) {
      return e.is_tier_0;
    }
    function Ie(e) {
      return e.is_tier_0_full;
    }
    function Te(e) {
      return e.is_tier_1;
    }
    function De(e) {
      return e.is_shopless_awpt_eligible;
    }
    function xe(e) {
      return e.is_non_commerce_vertical;
    }
    function $e(e) {
      return e.is_tier_restricted;
    }
    function Pe(e) {
      return e.is_user_allowed_to_advertise;
    }
    function Ne(e) {
      return e.line_numbers;
    }
    function Me(e) {
      return e.min_campaign_group_spend_cap;
    }
    function we(e) {
      var t;
      return (t = e.max_daily_budget) != null ? t : 0;
    }
    function Ae(e) {
      return e.min_daily_budget;
    }
    function Fe(e) {
      return e.modeled_reporting_type;
    }
    function Oe(e) {
      return e.moo_default_conversion_bid;
    }
    function Be(e) {
      return e.name;
    }
    function We(e) {
      return e.offsite_pixels_tos_accepted;
    }
    function qe(e) {
      return e.onbehalf_requests;
    }
    function Ue(e) {
      return e.purchase_optimization_eligible_page_id;
    }
    function Ve(e) {
      return e.rf_spec;
    }
    function He(e) {
      return e.ctwa_smb_enforcing_days_left;
    }
    function Ge(e) {
      return e.tax_country;
    }
    function ze(e) {
      return e.sales_segment_v2;
    }
    function je(e) {
      return e.segment;
    }
    function Ke(e) {
      return e.timezone_id;
    }
    function Qe(e) {
      return e.timezone_name;
    }
    function Xe(e) {
      return e.timezone_offset_hours_utc;
    }
    function Ye(e) {
      return e.tos_accepted;
    }
    function Je(e) {
      return e.user_settings;
    }
    function Ze(e) {
      return e.userpermissions;
    }
    function et(e) {
      return e.users;
    }
    function tt(e) {
      return e.viewable_business;
    }
    function nt(e) {
      return e.ad_account_promotable_objects;
    }
    function rt(e) {
      return e.advertiser_verification_status;
    }
    function ot(e) {
      return e.funding_source_details;
    }
    function at(e) {
      return e.is_attribution_spec_system_default;
    }
    function it(e) {
      return e.is_prepay_account;
    }
    function lt(e) {
      return e.pages_in_authorizations;
    }
    function st(e) {
      return e.spend_cap;
    }
    function ut(e) {
      return e.direct_deals_tos_accepted;
    }
    function ct(e) {
      return e.is_account_spending_on_addressable_eligible_shop_opportunities;
    }
    function dt(e) {
      return e.saip_ad_account_experience_info;
    }
    function mt(e) {
      return e.required_tax_id_type;
    }
    function pt(e) {
      return e.archived_campaign_acount;
    }
    function _t(e) {
      return e.archived_campaign_group_acount;
    }
    function ft(e) {
      return e.suggested_campaign_budget;
    }
    function gt(e) {
      return e.page_authorized_country_for_political_ads;
    }
    function ht(e) {
      return e.hasSuperRead;
    }
    function yt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function Ct(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function bt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function vt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function St(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function Rt(e, t) {
      return t.ids.map(function (e) {
        return { id: e };
      });
    }
    function Lt(e) {
      return e.is_ba_skip_delayed_eligible;
    }
    function Et(e) {
      return e.show_sac_campaign_group_input;
    }
    function kt(e) {
      return e.is_closed_by_advertiser_compromise_bot;
    }
    function It(e) {
      return e.is_omnichannel_campaign_eligible;
    }
    function Tt(e) {
      return e.is_mm_lite_api_enabled;
    }
    function Dt(e) {
      return e.is_wa_lightweight_business;
    }
    function xt(e) {
      return e.is_pageless_ctwa_eligible;
    }
    function $t(e) {
      return e.is_youth_ads_pao_basic_advertiser;
    }
    function Pt(e) {
      return e.is_youth_ads_pao_basic_advertiser_announcement_eligible;
    }
    function Nt(e) {
      return e.is_eligible_for_advantage_plus_creative_regulated_category;
    }
    function Mt(e) {
      return e.live_video_advertiser_details;
    }
    function wt(e) {
      return e.is_eligible_for_ads_budgets_l2_flex_upsell;
    }
    function At(e) {
      return e.is_du_flex_defaulting_opt_out_enabled;
    }
    function Ft(e) {
      return e.is_using_higher_daily_flex_rate;
    }
    function Ot(e) {
      return e.if_viewer_has_permission_to_advertise;
    }
    function Bt(e) {
      return e.ctx_dfo_objective_defaults;
    }
    function Wt(e) {
      return e.marketing_messages_account_settings;
    }
    function qt(e) {
      return e.is_pending_numbers_exposure_flag_enabled;
    }
    function Ut(e) {
      return e.is_placement_soft_opt_out_enabled;
    }
    function Vt(e, t) {
      return t.id == null
        ? null
        : { id: o("AdsAdObjectRelayIDUtils").adObjectRelayIDToString(t.id) };
    }
    ((l.ClientAdAccount = s),
      (l.self = u),
      (l.combined_adgroups = c),
      (l.combined_campaign_groups = d),
      (l.combined_campaign_group = m),
      (l.combined_campaign = p),
      (l.combined_campaign_groups_typed = _),
      (l.combined_campaigns = f),
      (l.account_id = g),
      (l.override_account_currency_ratio_to_usd = h),
      (l.override_account_status = y),
      (l.override_adtrust_dsl = C),
      (l.override_archived_adgroup_count = b),
      (l.override_archived_campaign_count = v),
      (l.override_archived_campaign_group_count = S),
      (l.override_attr_window_deprecation_group = R),
      (l.override_attribution_spec = L),
      (l.override_passback_attribution_spec = E),
      (l.override_authorized_country_for_political_ads = k),
      (l.agency_fee_config = I),
      (l.override_average_daily_campaign_budget = T),
      (l.override_average_lifetime_campaign_budget = D),
      (l.override_average_daily_campaign_group_budget = x),
      (l.override_average_lifetime_campaign_group_budget = $),
      (l.override_brand_safety_content_filter_levels = P),
      (l.override_brand_safety_inherited_content_filter_levels = N),
      (l.override_brand_safety_excluded_topics = M),
      (l.business = w),
      (l.override_ads_business = A),
      (l.ads_business = F),
      (l.override_business_country_code = O),
      (l.override_business_restriction_reason = B),
      (l.override_business_verification_status = W),
      (l.override_businessprojects = q),
      (l.override_can_bypass_fs_check = U),
      (l.override_capabilities = V),
      (l.override_created_time = H),
      (l.currency = G),
      (l.override_currency = z),
      (l.override_disable_reason = j),
      (l.override_default_dsa_beneficiary = K),
      (l.override_default_dsa_payor = Q),
      (l.override_default_unified_attribution_spec = X),
      (l.override_dynamic_probation_dsl = Y),
      (l.override_end_advertiser_name = J),
      (l.override_funding_source = Z),
      (l.override_flex_single_objective = ee),
      (l.override_gk_do_not_use = te),
      (l.override_self_resolve_uri = ne),
      (l.override_has_purchase_optimization_eligible_page = re),
      (l.override_has_combo_cards_on_file = oe),
      (l.override_has_migrated_permissions = ae),
      (l.override_has_value_rule_set = ie),
      (l.override_preferred_value_rule_collection = le),
      (l.override_value_rules_placement_suggested_spec = se),
      (l.engagement_hub_primary_participant_status = ue),
      (l.engagement_hub_primary_participant_business_id = ce),
      (l.ads_manager_beta_enrollment_status = de),
      (l.ads_manager_beta_has_opted_out = me),
      (l.ads_manager_beta_ai_recap_visible = pe),
      (l.ads_manager_beta_universal_composer_visible = _e),
      (l.override_incremental_conversion_optimization_ad_studies = fe),
      (l.override_io_number = ge),
      (l.override_is_biz_migration_eligible = he),
      (l.override_is_business_allowed_to_advertise = ye),
      (l.override_is_business_verification_eligible = Ce),
      (l.override_is_ctx_advertiser = be),
      (l.override_is_mi_billing_info_updated = ve),
      (l.override_is_new_advertiser = Se),
      (l.override_is_pinless_debit_eligible = Re),
      (l.override_is_tax_id_required = Le),
      (l.override_is_closed_by_advertiser_compromise_bot_required = Ee),
      (l.override_is_tier_0 = ke),
      (l.override_is_tier_0_full = Ie),
      (l.override_is_tier_1 = Te),
      (l.override_is_shopless_awpt_eligible = De),
      (l.override_is_non_commerce_vertical = xe),
      (l.override_is_tier_restricted = $e),
      (l.override_is_user_allowed_to_advertise = Pe),
      (l.override_line_numbers = Ne),
      (l.override_min_campaign_group_spend_cap = Me),
      (l.override_max_daily_budget = we),
      (l.override_min_daily_budget = Ae),
      (l.override_modeled_reporting_type = Fe),
      (l.override_moo_default_conversion_bid = Oe),
      (l.override_name = Be),
      (l.override_offsite_pixels_tos_accepted = We),
      (l.override_onbehalf_requests = qe),
      (l.purchase_optimization_eligible_page_id = Ue),
      (l.override_rf_spec = Ve),
      (l.override_ctwa_smb_enforcing_days_left = He),
      (l.tax_country = Ge),
      (l.sales_segment_v2 = ze),
      (l.override_segment = je),
      (l.timezone_id = Ke),
      (l.override_timezone_name = Qe),
      (l.override_timezone_offset_hours_utc = Xe),
      (l.override_tos_accepted = Ye),
      (l.override_user_settings = Je),
      (l.override_userpermissions = Ze),
      (l.override_users = et),
      (l.override_viewable_business = tt),
      (l.override_ad_account_promotable_objects = nt),
      (l.override_advertiser_verification_status = rt),
      (l.override_funding_source_details = ot),
      (l.override_is_attribution_spec_system_default = at),
      (l.override_is_prepay_account = it),
      (l.override_pages_in_authorizations = lt),
      (l.override_spend_cap = st),
      (l.override_direct_deals_tos_accepted = ut),
      (l.is_account_spending_on_addressable_eligible_shop_opportunities = ct),
      (l.saip_ad_account_experience_info = dt),
      (l.override_required_tax_id_type = mt),
      (l.override_archived_campaign_acount = pt),
      (l.override_archived_campaign_group_acount = _t),
      (l.override_suggested_campaign_budget = ft),
      (l.override_page_authorized_country_for_political_ads = gt),
      (l.override_hasSuperRead = ht),
      (l.bulk_edit_combined_adgroups = yt),
      (l.editing_combined_adgroups = Ct),
      (l.editing_combined_campaigns = bt),
      (l.bulk_edit_combined_campaign_groups = vt),
      (l.editing_combined_campaign_groups = St),
      (l.bulk_edit_combined_campaigns = Rt),
      (l.override_is_ba_skip_delayed_eligible = Lt),
      (l.show_sac_campaign_group_input = Et),
      (l.is_closed_by_advertiser_compromise_bot = kt),
      (l.is_omnichannel_campaign_eligible = It),
      (l.is_mm_lite_api_enabled = Tt),
      (l.is_wa_lightweight_business = Dt),
      (l.is_pageless_ctwa_eligible = xt),
      (l.is_youth_ads_pao_basic_advertiser = $t),
      (l.is_youth_ads_pao_basic_advertiser_announcement_eligible = Pt),
      (l.is_eligible_for_advantage_plus_creative_regulated_category = Nt),
      (l.live_video_advertiser_details = Mt),
      (l.is_eligible_for_ads_budgets_l2_flex_upsell = wt),
      (l.is_du_flex_defaulting_opt_out_enabled = At),
      (l.is_using_higher_daily_flex_rate = Ft),
      (l.if_viewer_has_permission_to_advertise = Ot),
      (l.ctx_dfo_objective_defaults = Bt),
      (l.marketing_messages_account_settings = Wt),
      (l.is_pending_numbers_exposure_flag_enabled = qt),
      (l.is_placement_soft_opt_out_enabled = Ut),
      (l.combined_adgroup = Vt));
  },
  98,
);
