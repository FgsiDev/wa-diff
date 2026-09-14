__d(
  "CreativeAssetGroupsLoggingUtils",
  ["CreativeAssetGroupsUxFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("CreativeAssetGroupsUxFalcoEvent").log(function () {
        return babelHelpers.extends({}, t, { event: e });
      });
    }
    function s(t, n) {
      var r;
      e(n ? "dco_deprecation_toggle_on" : "dco_deprecation_toggle_off", {
        ad_account_id: t.ad_account_id,
        campaign_id: (r = t.campaign_id) != null ? r : "",
        extra_info: JSON.stringify({
          origins: n ? ["creative_asset_groups"] : "",
        }),
      });
    }
    function u(t, n, r, o) {
      if (!(!r && !o) && r !== o) {
        var a = !r && o;
        e(
          a
            ? "flexible_format_selection_opt_in"
            : "flexible_format_selection_opt_out",
          {
            ad_account_id: t,
            adgroup_id: n,
            extra_info: JSON.stringify({
              origins: a ? ["creative_asset_groups"] : "",
            }),
          },
        );
      }
    }
    function c(t, n, r) {
      n.length < 1 ||
        e("add_group_button_impression", {
          ad_account_id: t,
          adgroup_id: n[0],
          extra_info: JSON.stringify({
            origins: ["creative_asset_groups"],
            group_count: r,
          }),
        });
    }
    function d(t, n, r, o) {
      n.length < 1 ||
        e("add_group_button_onclick", {
          ad_account_id: t,
          adgroup_id: n[0],
          extra_info: JSON.stringify({
            origins: ["creative_asset_groups"],
            group_index: r,
            group_count: o,
          }),
        });
    }
    function m(t, n, r, o) {
      n.length < 1 ||
        e("remove_group_button_onclick", {
          ad_account_id: t,
          adgroup_id: n[0],
          extra_info: JSON.stringify({
            origins: ["creative_asset_groups"],
            group_index: r,
            group_count: o,
          }),
        });
    }
    function p(t, n, r, o) {
      n.length < 1 ||
        e("image_picker_save_button_onclick", {
          ad_account_id: t,
          adgroup_id: n[0],
          extra_info: JSON.stringify({
            origins: ["creative_asset_groups"],
            group_index: r,
            image_count: o,
          }),
        });
    }
    function _(t, n, r) {
      n.length < 1 ||
        e("media_editor_edit_button_onclick", {
          ad_account_id: t,
          adgroup_id: n[0],
          extra_info: JSON.stringify({
            origins: ["creative_asset_groups"],
            group_index: r,
          }),
        });
    }
    function f(t, n, r, o) {
      var a, i, l;
      e(
        n
          ? "publish_start_from_dco_transferred_flow"
          : "publish_start_cag_flow",
        {
          ad_account_id: t.ad_account_id,
          adgroup_id: (a = t.adgroup_id) != null ? a : "",
          campaign_id: (i = t.campaign_id) != null ? i : "",
          campaign_group_id: (l = t.campaign_group_id) != null ? l : "",
          extra_info: JSON.stringify({
            origins: r != null ? r : ["creative_asset_groups"],
            is_from_dco: n,
            pcaFullFormatOriginLoggingExtraData: o,
          }),
        },
      );
    }
    ((l.logDCODeprecationOnToggle = s),
      (l.logCAGFlexibleFormatSelection = u),
      (l.logOnceCAGAddGroupButtonImpression = c),
      (l.logCAGFlexibleformatAddGroupOnclick = d),
      (l.logCAGFlexibleformatRemoveGroupOnclick = m),
      (l.logCAGFlexibleformatPickImages = p),
      (l.logCAGFlexibleformatEditMedia = _),
      (l.logCAGFlexibleformatPublish = f));
  },
  98,
);
