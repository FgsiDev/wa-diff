__d(
  "AdsSearchAppsTypeaheadProviderPlugin",
  [
    "AdsCampaignSearchAppsAction",
    "AdsGraphAPI",
    "LoadObjectMap",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "unique_id",
        "app_id",
        "name",
        "icon_url",
        "url",
        "store",
        "search_source_store",
        "is_aem_v2_eligible",
        "is_skadnetwork_eligible",
        "advertisable_app_events",
        "are_app_events_unavailable",
        "vo_eligible_app_events",
        "is_disabled",
        "notice_message",
        "tooltip_message",
        "has_unsupported_mmp_for_marketing_messages",
        "ios_skan_reporting_optout_campaigns",
        "is_eligible_for_value_optimization",
      ],
      s = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (n(function (e) {
              return e.setLoading(t);
            }),
              t.forEach(function (t) {
                r("promiseDone")(
                  o("AdsGraphAPI")
                    .get(i.id)
                    .adaccount(t.get("adAccountID"))
                    .edge("matched_search_applications")
                    .get({
                      app_store: t.get("appStore"),
                      app_store_country: t.get("appStoreCountry"),
                      query_term: t.get("query"),
                      business_id: t.get("businessID"),
                      only_apps_with_permission: t.get(
                        "onlyAppsWithPermission",
                      ),
                      is_skadnetwork_search: t.get("isSKAdNetworkSearch"),
                      has_l3_promoted_application_id: t.get(
                        "hasL3PromotedApplicationId",
                      ),
                      is_reengagement: t.get("isReengagement"),
                      is_cpas_campaign: t.get("isCPASCampaign"),
                      catalog_segment_id: t.get("catalogSegmentId"),
                      search_app_entry_point: t.get("searchAppEntryPoint"),
                      stores_to_filter: t.get("storesToFilter"),
                      campaign_group_id: t.get("campaignGroupId"),
                      fields: e,
                    }),
                  function (e) {
                    return r("AdsCampaignSearchAppsAction").dispatch(
                      { searchApps: e, key: t },
                      {
                        line: "109",
                        module: "AdsSearchAppsTypeaheadProviderPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                  function (e) {
                    n(function (n) {
                      return n.setSingleValueOrError(t, e);
                    });
                  },
                );
              }));
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
