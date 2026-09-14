__d(
  "AdsInsightsColumnUtil",
  [
    "AdsInsightsAttributionSettingsUtil",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBreakdowns",
    "AdsInsightsColumns",
    "AdsInsightsComparisonColumns",
    "AdsInsightsField",
    "AdsInsightsFieldDescriptor",
    "AdsInsightsFields",
    "AdsInsightsStoreVisitsDeprecationConfig",
    "AdsInsightsSuggestionsUtil",
    "AdsMgmtColumn",
    "AdsMgmtColumns",
    "AdsObjectTypes",
    "AdsUniqueMetricsDeprecationUtils",
    "adsMgmtColumnGetRootColumn",
    "adsMgmtColumnIdToType",
    "adsMgmtColumnIsValid",
    "adsMgmtRecommendationsColumnUtil",
    "adsMgmtSupportedAttributionWindowsUtil",
    "adsMgmtTableGetColumnConfigAndDescriptor",
    "distinctArray",
    "flatMapArray",
    "immutable",
    "sortBy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        ((e = {}),
        (e[(d = r("AdsInsightsField")).AD_ID] = d.ADGROUP_ID),
        (e[d.AD_NAME] = d.ADGROUP_NAME),
        (e[d.AD_BID_TYPE] = d.ADGROUP_BID_TYPE),
        (e[d.AD_BID_VALUE] = d.ADGROUP_BID_VALUE),
        (e[d.AD_DELIVERY] = d.ADGROUP_DELIVERY),
        (e[d.ADSET_ID] = d.CAMPAIGN_ID),
        (e[d.ADSET_NAME] = d.CAMPAIGN_NAME),
        (e[d.ADSET_BID_TYPE] = d.CAMPAIGN_BID_TYPE),
        (e[d.ADSET_BID_VALUE] = d.CAMPAIGN_BID_VALUE),
        (e[d.ADSET_BUDGET_TYPE] = d.CAMPAIGN_BUDGET_TYPE),
        (e[d.ADSET_BUDGET_VALUE] = d.CAMPAIGN_BUDGET_VALUE),
        (e[d.ADSET_DELIVERY] = d.CAMPAIGN_DELIVERY),
        (e[d.CAMPAIGN_BUDGET_TYPE] = d.CAMPAIGN_GROUP_BUDGET_TYPE),
        (e[d.CAMPAIGN_BUDGET_VALUE] = d.CAMPAIGN_GROUP_BUDGET_VALUE),
        (e[d.ADSET_END] = d.CAMPAIGN_END),
        (e[d.ADSET_START] = d.CAMPAIGN_START),
        (e[d.CAMPAIGN_ID] = d.CAMPAIGN_GROUP_ID),
        (e[d.CAMPAIGN_NAME] = d.CAMPAIGN_GROUP_NAME),
        (e[d.CAMPAIGN_DELIVERY] = d.CAMPAIGN_GROUP_DELIVERY),
        (e[d.CAMPAIGN_END] = d.CAMPAIGN_GROUP_END),
        (e[d.CAMPAIGN_START] = d.CAMPAIGN_GROUP_START),
        e),
      _ = [
        (m = r("AdsMgmtColumn")).AGE,
        m.BODY,
        m.BUDGET_REMAINING,
        m.DESTINATION,
        m.GENDER,
        m.LINK,
        m.LOCATION,
        m.PREVIEW_LINK,
        m.RELATED_PAGE,
        m.LABELS,
        m.TITLE,
        m.CONVERSION_LOCATION,
        m.RECOMMENDATIONS_GUIDANCE,
        m.link_click_results,
        m.cost_per_link_click_result,
      ],
      f = [],
      g =
        ((s = {}),
        (s[(c = o("AdsInsightsColumns")).makeActionID("actions", "post_like")] =
          c.makeActionID(
            "actions",
            o("AdsInsightsFields").getPostReactionActionTypeName(),
          )),
        (s[c.makeActionID("cost_per_action_type", "post_like")] =
          c.makeActionID(
            "cost_per_action_type",
            o("AdsInsightsFields").getPostReactionActionTypeName(),
          )),
        (s[c.makeActionID("video_complete_watched_actions", "video_view")] =
          c.makeActionID("video_30_sec_watched_actions", "video_view")),
        s),
      h = [m.ROW_SELECTOR, m.TOGGLE],
      y = [
        m.LINE_NUMBER,
        m.LINE_AMOUNT,
        m.LINE_DESCRIPTION,
        m.LINE_TARGETS,
        m.PRODUCT_TYPE,
        m.LINE_START,
        m.LINE_END,
        m.AD_SET_IMPRESSIONS,
        m.LINE_REMAINING_IMPRESSIONS,
        m.LINE_IMPRESSIONS,
        m.LINE_PRICE,
        m.UOM,
        m.IO_NAME,
        m.IO_NUMBER,
      ];
    function C(e) {
      return p[e] || e;
    }
    var b = {
      getDerivedColumnConfig: r("adsMgmtTableGetColumnConfigAndDescriptor"),
      forObjectType: o("adsMgmtColumnIdToType").forObjectType,
      renameFromV25ToV24: C,
      getRootColumn: r("adsMgmtColumnGetRootColumn"),
      getStickyColumnIDs: function () {
        return h;
      },
      getComparisonColumns: function (t) {
        return r("flatMapArray")(t, function (e) {
          return o("AdsInsightsComparisonColumns")
            .getAll()
            .map(function (t) {
              return o("adsMgmtColumnIdToType").forComparisonColumnType(e, t);
            });
        });
      },
      getIOColumns: function () {
        return y;
      },
      getColumnNameMap: function () {
        return p;
      },
      computeColumnGroupsForTable: function (t, n, a, i, l, s, u, c, d) {
        (l === void 0 && (l = !1),
          u === void 0 && (u = !1),
          c === void 0 && (c = !1));
        var e = r("sortBy")(
            n,
            o("AdsInsightsAttributionSettingsUtil").getAttributionWindowWeight,
          ),
          m = [].concat(t);
        (l && (m = m.concat(b.getIOColumns())),
          (m = m.filter(function (e) {
            return !o("AdsInsightsStoreVisitsDeprecationConfig")
              .getDeprecatedStoreVisitsMetrics()
              .includes(e);
          })),
          (m = m.filter(function (e) {
            return !o("AdsUniqueMetricsDeprecationUtils").isDeprecatableMetric(
              e,
            );
          })),
          u &&
            (a === r("AdsObjectTypes").CAMPAIGN
              ? (m = m.filter(function (e) {
                  return (
                    b.getRootColumn(e) !==
                    r("AdsInsightsField").CAMPAIGN_GROUP_ID
                  );
                }))
              : a === r("AdsObjectTypes").ADGROUP &&
                (m = m.filter(function (e) {
                  return (
                    b.getRootColumn(e) !==
                      r("AdsInsightsField").CAMPAIGN_GROUP_ID &&
                    b.getRootColumn(e) !== r("AdsInsightsField").CAMPAIGN_ID
                  );
                }))));
        var p = o("adsMgmtRecommendationsColumnUtil").groupOSQVColumns(
          b._getColumnGroupSpecs(m, a, e, c, d),
        );
        return p.map(function (e) {
          return i && i.has(e.columnGroup)
            ? babelHelpers.extends({}, e, {
                columns: b.getComparisonColumns(e.columns),
              })
            : e;
        });
      },
      _prepareColumns: function (t, n) {
        var e = b.getStickyColumnIDs(),
          r = t.filter(function (t) {
            return !e.includes(t);
          }),
          a = e.concat(r);
        return a.concat(
          o("AdsInsightsSuggestionsUtil").getSuggestionsToggleID(n),
        );
      },
      _getColumnGroupSpecs: function (t, n, a, i, l) {
        return (
          i === void 0 && (i = !1),
          r("flatMapArray")(b._prepareColumns(t, n), function (e) {
            var t,
              s = e;
            if (String(s) === "undefined") return [];
            var u = o("AdsMgmtColumns").getConfig(s);
            if (!u.objectTypes.includes(n)) return [];
            u.levelSpecificProps &&
              (s = o("adsMgmtColumnIdToType").forObjectType(s, n));
            var c = { default: 0, view: 1, click: 2, dda: 3 };
            function d(e) {
              switch (e) {
                case "default":
                  return c.default;
                case "view":
                  return c.view;
                case "click":
                  return c.click;
                case "dda":
                  return c.dda;
                default:
                  return c.default;
              }
            }
            var m =
                (a.length === 2 &&
                  a.includes("dda") &&
                  a.includes(
                    o("AdsInsightsAttributionWindows").getDefault(),
                  )) ||
                i,
              p = [].concat(a);
            if (!m && a.length > 1 && u.supportInlineAttributionColumn === !0) {
              var _ = o("AdsInsightsAttributionWindows").getInline();
              ((c = { default: 0, view: 2, click: 3, dda: 4 }),
                (c[_] = 1),
                p.push(_));
            }
            var f = (t = l == null ? void 0 : l.has(s)) != null ? t : !1;
            i && !f && (p = [o("AdsInsightsAttributionWindows").getDefault()]);
            var g = [];
            if (
              ((p = [].concat(
                o(
                  "adsMgmtSupportedAttributionWindowsUtil",
                ).filteredAttributionWindows(u, p),
              )),
              u.supportAttributionWindow === !0)
            ) {
              if (i) {
                var h = {};
                h[o("AdsInsightsAttributionWindows").getDefault()] = p.map(
                  function (e) {
                    return o("adsMgmtColumnIdToType").forAttributionWindow(
                      s,
                      e,
                    );
                  },
                );
                var y = r("sortBy")(Object.keys(h), d);
                g = y.map(function (e) {
                  return {
                    columns: h[e],
                    columnGroup: o(
                      "adsMgmtColumnIdToType",
                    ).forAttributionWindowType(s, e),
                  };
                });
                var C = [{ columns: [s], columnGroup: s }];
                return [].concat(C, g);
              } else {
                var b = {};
                p.forEach(function (e) {
                  var t = o(
                    "AdsInsightsAttributionSettingsUtil",
                  ).getAttributionWindowType(e);
                  ((b[t] = b[t] || []),
                    b[t].push(
                      o("adsMgmtColumnIdToType").forAttributionWindow(s, e),
                    ));
                });
                var v = r("sortBy")(Object.keys(b), d);
                g = v.map(function (e) {
                  return {
                    columns: b[e],
                    columnGroup: o(
                      "adsMgmtColumnIdToType",
                    ).forAttributionWindowType(s, e),
                  };
                });
              }
              return g;
            } else return [{ columns: [s], columnGroup: s }];
          })
        );
      },
      getDerivedColumns: function (t, n, o, a, i, l, s) {
        l === void 0 && (l = !1);
        var e = b.computeColumnGroupsForTable(t, n, o, a, !1, null, !1, l, s);
        return r("flatMapArray")(e, function (e) {
          return e.columns;
        });
      },
      getFieldsForExport: function (t, n, o, a) {
        var e = b.getDerivedColumns(t, n, o, void 0, null, n.length > 1),
          i = r("flatMapArray")(e, function (e) {
            var t = b.getDerivedColumnConfig(e).fieldsForExport;
            if (b.getRootColumn(e) === r("AdsMgmtColumn").NAME) {
              var n,
                o,
                i,
                l = r("AdsInsightsBreakdowns").groupByType(a);
              return t.concat(
                l.impression,
                l.action ? [l.action] : [],
                (n = l.geography) != null ? n : [],
                (o = l.demographics) != null ? o : [],
                (i = l.creative) != null ? i : [],
              );
            } else return t;
          });
        return (u || (u = r("distinctArray")))(i);
      },
      getFields: function (t, n, r, o, a, i) {
        a === void 0 && (a = !1);
        var e = b.getDerivedColumns(t, n, r, void 0, null, a, i);
        return b.getFieldsForDerivedColumns(e);
      },
      getFieldsForDerivedColumns: function (t) {
        return (u || (u = r("distinctArray")))(
          r("flatMapArray")(t, function (e) {
            return b.getDerivedColumnConfig(e).fields;
          }),
        );
      },
      getAvailableColumnIDsForCurrentLevel: function (t, n) {
        return t.filter(function (e) {
          var t = o("AdsMgmtColumns").getConfig(e);
          return t.objectTypes.includes(n) && e;
        });
      },
      getNotExportableColumns: function () {
        return _;
      },
      getSortFields: function (t, n, o, a, i) {
        a === void 0 && (a = !1);
        var e = b.getDerivedColumns(t, n, o, void 0, null, a, i),
          l = r("immutable")
            .Set()
            .withMutations(function (t) {
              e.forEach(function (e) {
                var n = b.getDerivedColumnConfig(e).sortField;
                n != null && t.add(n);
              });
            });
        return l;
      },
      resizeColumnGroup: function (t, n, r) {
        var e = {},
          o = 0,
          a = 0;
        (n.forEach(function (e) {
          var t = e.flexGrow,
            n = e.minWidth;
          ((o += n), (a += t));
        }),
          (a = Math.max(a, 1)));
        var i = Math.max(t - o, 0),
          l = n[n.length - 1].columnGroup;
        n.forEach(function (t, n) {
          var r = t.columnGroup,
            o = t.flexGrow,
            s = t.id,
            u = t.isResizable,
            c = t.minWidth,
            d = c + Math.floor((i * o) / a),
            m = 0;
          (r === l && ((d = c), (m = 1)),
            (e[s] = { flexGrow: m, isResizable: u, minWidth: d, width: d }));
        });
        var s = n.filter(function (e) {
            var t = e.shouldResize;
            return t;
          }),
          u = 0;
        return (
          s.forEach(function (e) {
            var t = e.minWidth;
            u += t;
          }),
          (u = u || 1),
          s.forEach(function (t) {
            var n = t.id,
              o = t.isResizable,
              a = t.minWidth,
              i = Math.floor((r * a) / u);
            e[n] = { flexGrow: 0, isResizable: o, minWidth: i, width: i };
          }),
          e
        );
      },
      isCustomConversionColumn: function (t) {
        var e = b.getRootColumn(t);
        return o("AdsInsightsFields").isCustomConversion(e);
      },
      getCustomConversionIDOrNull: function (t) {
        var e = b.getRootColumn(t),
          n = o("AdsInsightsFieldDescriptor").get(e),
          r = n.conversionID;
        return r;
      },
      getCustomMetricIDOrNull: function (t) {
        var e = b.getRootColumn(t),
          n = o("AdsInsightsFieldDescriptor").get(e),
          r = n.customMetricID;
        return r;
      },
      sanitize: function (t) {
        return t.ids
          ? babelHelpers.extends({}, t, { ids: b.sanitizeColumnIDs(t.ids) })
          : t;
      },
      sanitizeColumnIDs: function (t) {
        return t
          .map(function (e) {
            return g[e] || e;
          })
          .filter(function (e) {
            return !f.includes(e);
          })
          .filter(function (e) {
            return r("adsMgmtColumnIsValid")(e);
          });
      },
      getColumnsInOrder: function (t) {
        var e = [].concat(t);
        return (
          e.splice(e.indexOf(r("AdsMgmtColumn").NAME), 1),
          e.unshift(r("AdsMgmtColumn").NAME),
          e
        );
      },
    };
    i.exports = b;
  },
  34,
);
