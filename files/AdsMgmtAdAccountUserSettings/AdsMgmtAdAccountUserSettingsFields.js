__d(
  "AdsMgmtAdAccountUserSettingsFields",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      management: [
        "default_builtin_column_preset",
        "default_column_preset",
        "default_nam_time_range",
        "column_suggestion_status",
        "last_used_columns",
        "last_used_pe_filters",
        "outlier_preferences",
      ],
      filter: [
        "filters{id,description,level,name,settings_id,time_created,time_updated}",
      ],
      column: [
        "column_presets{attribution_windows,columns,id,name,time_created,time_updated}",
      ],
      account_overview: [
        "default_account_overview_metrics",
        "default_account_overview_agegender_metrics",
        "default_account_overview_time_metrics",
        "default_account_overview_location_metrics",
      ],
    });
    i.default = e;
  },
  66,
);
