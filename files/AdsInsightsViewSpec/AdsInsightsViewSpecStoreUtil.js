__d(
  "AdsInsightsViewSpecStoreUtil",
  [
    "AdsInsightsAttributionWindows",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsColumnPresetUtil",
    "AdsInsightsColumnUtil",
    "AdsInsightsFields",
    "AdsInsightsFilter",
    "AdsInsightsTimeRange",
    "AdsInsightsTimeRangeConfig",
    "AdsInsightsViewSpecUtil",
    "AdsLoadState_LEGACY",
    "AdsObjectTypes",
    "AdsSettingsDataLoader",
    "AdsSettingsStore",
    "StrSet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        toInsightsEdgeQueryForExport: function (t) {
          var e = t.columns,
            n = t.sort,
            a = t.timeRange,
            i = t.breakdowns,
            l = t.filter,
            s = t.objectType,
            u = r("AdsInsightsColumnPresetStoreUtil").resolve(
              e,
              !1,
              t.attributionWindows,
            ),
            c = u.attributionWindows,
            d = u.ids,
            m = c.filter(
              o("AdsInsightsAttributionWindows").isSupportedForExport,
            ),
            p = o("AdsInsightsColumnUtil").getFieldsForExport(d, m, s, i);
          i.includes("action_carousel_card_name") &&
            (p = p.filter(function (e) {
              return (
                e !== "action_carousel_card_name" &&
                e !== "action_carousel_card_id" &&
                e !== "cost_per_action_type"
              );
            }));
          var _ = o("AdsInsightsFields").getAPIPropsMulti(p),
            f = _.actionTypes,
            g = _.apiFields;
          t.objectType === r("AdsObjectTypes").CREATIVE &&
            ((i = ["creative_fingerprint"]),
            (l = [
              {
                field: o("AdsInsightsFilter").fieldToUseFilterObjectType(
                  r("AdsObjectTypes").ACCOUNT,
                  "creative_fingerprint",
                ),
                operator: "NOT_IN",
                value: ["Unknown"],
              },
            ]),
            (s = r("AdsObjectTypes").ACCOUNT));
          var h = new (r("StrSet"))(Object.values(f).flat()).toArray();
          return {
            actionTypes: h,
            apiFields: g,
            attributionWindows: m,
            breakdowns: i,
            customTimeBreakdown: void 0,
            filter: l,
            objectType: s,
            sort: n,
            timeRange: a,
          };
        },
        resolveColumnPreset: function (t) {
          var e = r("AdsInsightsColumnPresetStoreUtil").resolve(t.columns),
            n = { attributionWindows: e.attributionWindows, ids: e.ids };
          return t.set({ columns: n });
        },
        getUserSettingsView: function (t, n, r) {
          return o("AdsInsightsViewSpecUtil")
            .getDefault(n, r)
            .set({
              columns: { preset: s.getUserSettingsColumnSetID(t) },
              timeRange: s.getUserSettingsTimeRange(t),
            });
        },
        getUserSettingsViewForAccount: function (t) {
          return s.getUserSettingsView(
            t,
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            o("AdsInsightsFilter").FilterClause.idIn(
              r("AdsObjectTypes").ACCOUNT,
              [t],
            ),
          );
        },
        getUserSettingsColumnSetID: function (t) {
          var e = r("AdsSettingsStore").getByFields(
            t,
            o("AdsSettingsDataLoader").getReportingFields(),
          );
          return e.loadState === r("AdsLoadState_LEGACY").LOADING
            ? o("AdsInsightsColumnPresetUtil").getDefault()
            : e.default_column_preset
              ? e.default_column_preset.id
              : e.default_builtin_column_preset ||
                o("AdsInsightsColumnPresetUtil").getDefault();
        },
        getUserSettingsTimeRange: function (t) {
          var e = r("AdsSettingsStore").getByFields(
            t,
            o("AdsSettingsDataLoader").getReportingFields(),
          );
          return e.loadState === r("AdsLoadState_LEGACY").LOADING
            ? s.getDefaultPreset()
            : e.default_nam_time_range
              ? r("AdsInsightsTimeRange").preset(e.default_nam_time_range)
              : s.getDefaultPreset();
        },
        getDefaultPreset: function () {
          var e = r("AdsInsightsTimeRangeConfig").default_date_preset;
          return r("AdsInsightsTimeRange").preset(e);
        },
      };
    ((s.getUserSettingsView.stores = [(e = r("AdsSettingsStore"))]),
      (s.getUserSettingsViewForAccount.stores = [e]),
      (s.getUserSettingsColumnSetID.stores = [e]),
      (s.getUserSettingsTimeRange.stores = [e]));
    var u = s;
    l.default = u;
  },
  98,
);
