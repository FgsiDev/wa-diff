__d(
  "XCommerceManagerSettingsPageControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = r("jsRouteBuilder")(
        "/commerce/{catalog_or_cms_id}/settings/{settings_sub_tab}/",
        Object.freeze({
          settings_sub_tab: "general",
          referrer_source: "COMMERCE_MANAGER",
          is_handoff_requested_permission: !1,
          should_run_brand_complete_linked_asset_migration_now: !1,
          should_run_brand_complete_merge_shops_migration_now: !1,
          should_show_brand_complete_linked_asset_migration_opt_out_modal: !1,
          should_show_brand_complete_merge_shops_migration_opt_out_modal: !1,
          should_open_business_details_edit_modal: !1,
          should_expand_standard_shipping: !1,
        }),
        void 0,
      ),
      s = e;
    l.default = s;
  },
  98,
);
