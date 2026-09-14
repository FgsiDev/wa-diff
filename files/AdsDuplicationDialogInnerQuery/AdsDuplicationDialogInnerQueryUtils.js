__d(
  "AdsDuplicationDialogInnerQueryUtils",
  [
    "AdsAdObjectRelayIDUtils",
    "adsDuplicationIsSmallAdObjects",
    "adsDuplicationWithoutPhantomAdsUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s = 120;
    function u(t, n, a, i, l, u, c, d, m, p, _, f) {
      var g = t,
        h = r("adsDuplicationIsSmallAdObjects")(
          u.length,
          c.length,
          l.length,
          f,
        ),
        y = h && r("gkx")("2298"),
        C = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          l,
          i,
        ),
        b = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          d,
          i,
        ),
        v = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          c,
          i,
        ),
        S = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          p,
          i,
        ),
        R = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          u,
          i,
        ),
        L = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          m,
          i,
        ),
        E = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          _,
          i,
        ),
        k = r("gkx")("26694"),
        I = l.length > s && r("gkx")("26901"),
        T = l.map(String);
      return {
        ad_account_id_string: g,
        adgroup_context_key: n,
        confirm_provider_adgroup_relay_ids: k ? a : e,
        family_line_adgroup_ids: I ? [] : T,
        family_line_adgroup_ids_relaxed: I ? T : [],
        family_line_adgroup_relay_ids: C,
        family_line_campaign_group_ids: u,
        family_line_campaign_group_relay_ids: R,
        family_line_campaign_relay_ids: v,
        gk_ads_andromeda_migrate_gapi_selector: !0,
        gk_ads_duplication_bau_relax_adgroup_ui_limit: I,
        gk_perseus_merge_duplication_queries_placeholder: k,
        should_check_dup_and_publish_source_status: y,
        should_include_ads_duplication_issues_info: y,
        should_include_duplicate_without_phantom_ads: o(
          "adsDuplicationWithoutPhantomAdsUtils",
        ).isDuplicateWithoutPhantomAdsQueryEnabled(),
        should_include_phantom_ads_campaign_group_status:
          f === "campaign" && u.length === 1,
        should_include_phantom_ads_campaign_status:
          f === "ad_set" && c.length === 1,
        table_selected_adgroup_relay_ids: b,
        table_selected_campaign_group_relay_ids: L,
        table_selected_campaign_relay_ids: S,
        target_campaign_group_relay_ids: E,
      };
    }
    l.getAdsDuplicationDialogInnerQueryVariables = u;
  },
  98,
);
