__d(
  "AdsContextualDiscoveryAdsLoggerUtils",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsContextualDiscoveryAdsUtils",
    "AdsInterfacesLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i = e.account,
        l = e.adgroupID,
        s = e.adObject,
        u = e.contextual_multi_ads_spec,
        c = e.eligibility_state,
        d = e.fragmentID,
        m = e.is_account_eligible,
        p = e.is_account_eligible_for_default_opt_in,
        _ = e.is_duplicate,
        f = e.is_gbg_im_advertiser,
        g = e.isBulkEditing,
        h = e.should_grandfather,
        y = e.should_mapi_default_on,
        C = e.source_app_id,
        b = e.toggle_status;
      r("AdsInterfacesLogger").log({
        data:
          ((a = {}),
          (a.adgroup_id = l),
          (a.fragment_id = d),
          (a.objective = s
            ? r("AdsCampaignGroupRecordAccessors").objective.get(
                s.campaignGroup,
              )
            : null),
          (a.optimization_goal = s
            ? r("AdsCampaignRecordAccessors").optimization_goal.get(s.campaign)
            : null),
          (a.facebook_positions = s
            ? (t = r("AdsCampaignRecordAccessors").targeting) == null
              ? void 0
              : t.facebook_positions.get(s.campaign)
            : null),
          (a.instagram_positions = s
            ? (n = r("AdsCampaignRecordAccessors").targeting) == null
              ? void 0
              : n.instagram_positions.get(s.campaign)
            : null),
          (a.message = o("AdsContextualDiscoveryAdsUtils").fetchLoggingMessage(
            i,
            s,
            u,
            c,
            b,
            m,
            p,
            h,
            f,
            g,
            y,
            C,
          )),
          (a.is_duplicated_object = _),
          a),
        eventName: "contextual_discovery_ads_checkbox_rendered",
      });
    }
    function s(e) {
      var t,
        n,
        a,
        i = e.account,
        l = e.adgroupID,
        s = e.adObject,
        u = e.bulkEditValue,
        c = e.fragmentID,
        d = e.is_account_eligible,
        m = e.is_account_eligible_for_default_opt_in,
        p = e.is_gbg_im_advertiser,
        _ = e.isBulkEditing,
        f = e.isInBulkEditDialog,
        g = e.new_toggle_status,
        h = e.should_grandfather,
        y = e.should_mapi_default_on,
        C = e.source_app_id,
        b = g
          ? "contextual_discovery_ads_toggle_checked"
          : "contextual_discovery_ads_toggle_unchecked";
      r("AdsInterfacesLogger").log({
        data:
          ((a = {}),
          (a.adgroup_id = l),
          (a.fragment_id = c),
          (a.objective = s
            ? r("AdsCampaignGroupRecordAccessors").objective.get(
                s.campaignGroup,
              )
            : null),
          (a.optimization_goal = s
            ? r("AdsCampaignRecordAccessors").optimization_goal.get(s.campaign)
            : null),
          (a.facebook_positions = s
            ? (t = r("AdsCampaignRecordAccessors").targeting) == null
              ? void 0
              : t.facebook_positions.get(s.campaign)
            : null),
          (a.instagram_positions = s
            ? (n = r("AdsCampaignRecordAccessors").targeting) == null
              ? void 0
              : n.instagram_positions.get(s.campaign)
            : null),
          (a.message = o("AdsContextualDiscoveryAdsUtils").fetchLoggingMessage(
            i,
            s,
            null,
            null,
            g,
            d,
            m,
            h,
            p,
            _,
            y,
            C,
            f,
          )),
          (a.bulk_edit_value = u),
          a),
        eventName: b,
      });
    }
    function u(e) {
      var t,
        n = e.adgroupID,
        o = e.fragmentID;
      r("AdsInterfacesLogger").log({
        data: ((t = {}), (t.adgroup_id = n), (t.fragment_id = o), t),
        eventName: "contextual_discovery_ads_learn_more_clicked",
      });
    }
    function c(e) {
      var t,
        n,
        a,
        i = e.account,
        l = e.adgroupID,
        s = e.adObject,
        u = e.contextual_multi_ads_spec,
        c = e.eligibility_state,
        d = e.fragmentID,
        m = e.is_account_eligible,
        p = e.is_account_eligible_for_default_opt_in,
        _ = e.is_duplicate,
        f = e.is_gbg_im_advertiser,
        g = e.isBulkEditing,
        h = e.should_grandfather,
        y = e.should_mapi_default_on,
        C = e.source_app_id,
        b = e.toggle_status;
      if (i != null) {
        var v = s.campaign,
          S = s.campaignGroup;
        r("AdsInterfacesLogger").log({
          data:
            ((a = {}),
            (a.adgroup_id = l),
            (a.fragment_id = d),
            (a.objective = S.objective),
            (a.optimization_goal = v.optimization_goal),
            (a.facebook_positions =
              (t = v.targeting) == null ? void 0 : t.facebook_positions),
            (a.instagram_positions =
              (n = v.targeting) == null ? void 0 : n.instagram_positions),
            (a.message = o(
              "AdsContextualDiscoveryAdsUtils",
            ).fetchLoggingMessage(i, s, u, c, b, m, p, h, f, g, y, C)),
            (a.is_duplicated_object = _),
            a),
          eventName: "contextual_discovery_ads_publish",
        });
      }
    }
    ((l.logCheckboxRendered = e),
      (l.logCheckboxInteraction = s),
      (l.logCheckboxLearnMoreClicked = u),
      (l.logContextualDiscoveryAdsPublish = c));
  },
  98,
);
