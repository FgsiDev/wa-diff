__d(
  "AdsPERefreshTableViewAction",
  [
    "AdsAdObjectVersionCacheBreakDataProvider",
    "AdsMgmtAdgroupDynamicFieldGranularProvider",
    "AdsMgmtCampaignDynamicFieldGranularProvider",
    "AdsMgmtCampaignGroupDynamicFieldGranularProvider",
    "AdsMgmtDynamicAdgroupOnRefreshReducerPlugin",
    "AdsMgmtDynamicCampaignGroupOnRefreshReducerPlugin",
    "AdsMgmtDynamicCampaignOnRefreshReducerPlugin",
    "AdsPEGroupProvider",
    "AdsPEGroupReducerPlugins",
    "AdsRelayFetchKeyUpdateReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsMgmtAdgroupRefreshTableAvailableIDsReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsMgmtAdgroupAvailableIDsV2Provider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsMgmtCampaignGroupRefreshTableAvailableIDsReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsMgmtCampaignGroupAvailableIDsV2Provider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsMgmtCampaignRefreshTableAvailableIDsReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsMgmtCampaignAvailableIDsV2Provider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtDynamicAdgroupOnRefreshReducerPlugin"),
            n("AdsMgmtAdgroupDynamicFieldGranularProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtDynamicCampaignGroupOnRefreshReducerPlugin"),
            n("AdsMgmtCampaignGroupDynamicFieldGranularProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtDynamicCampaignOnRefreshReducerPlugin"),
            n("AdsMgmtCampaignDynamicFieldGranularProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPEGroupReducerPlugins").refreshTableView,
            n("AdsPEGroupProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsRelayFetchKeyUpdateReducerPlugin"),
            n("AdsAdObjectVersionCacheBreakDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.REFRESH_TABLE_VIEW",
    );
    a.exports = e;
  },
  null,
);
