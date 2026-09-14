__d(
  "AdsInsightsObjectStatsGroup",
  [
    "invariant",
    "AdsInsightsActionFieldTypes",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBreakdowns",
    "AdsInsightsField",
    "AdsInsightsFieldDescriptor",
    "AdsInsightsFields",
    "AdsInsightsSortUtil",
    "AdsInsightsValues",
    "AdsInsightsViewSpecUtil",
    "AdsLoadProgress_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsLoadStatuses_LEGACY",
    "AdsMgmtCustomMetricsStringOperations",
    "LoadObject",
    "LoadObjectOperation",
    "StrSet",
    "adsInsightsObjectStatsUtilGetInterval",
    "err",
    "getObjectValues",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "custom_derived_metrics",
      u = (function () {
        function t(e) {
          ((this.actionTypes = {}),
            (this.attributionWindows = {}),
            (this.breakdowns = e),
            (this.byKey = {}),
            (this.fieldStatuses = {}),
            (this.keys = {}),
            (this.maxLoadStatus = r("AdsLoadState_LEGACY").LOADING),
            (this.error = null));
        }
        var n = t.prototype;
        return (
          (n.clone = function () {
            var e = new t(this.breakdowns);
            return (
              (e.fieldStatuses = this.fieldStatuses),
              (e.actionTypes = this.actionTypes),
              (e.attributionWindows = this.attributionWindows),
              (e.byKey = this.byKey),
              (e.keys = this.keys),
              (e.maxLoadStatus = this.maxLoadStatus),
              (e.error = this.error),
              e
            );
          }),
          (t.create = function (n) {
            return new t(n);
          }),
          (n.$1 = function (n, a) {
            var e = o("AdsInsightsFieldDescriptor").get(a),
              i = e.actionFieldType,
              l = e.actionType,
              s = e.annotatedField,
              u = e.attributionWindow,
              c = e.conversionID,
              d = e.customEventName,
              m = e.customMetricID,
              p = e.relevanceScoreSubfield,
              _ = e.simpleField,
              f = this.byKey[n] || {};
            if (i) {
              if (m) return t.getCustomMetricStatsForRow(f, m, u);
              if (i === "conversion_annotations" && s) {
                var g = f[i + ":" + s];
                return g
                  ? u != null &&
                    u !== o("AdsInsightsAttributionWindows").getDefault()
                    ? g[u]
                    : g.value
                  : "";
              }
              var h = t.getActionStatsForRow(f, i, l || "", c, d),
                y;
              if (h) u ? (y = h[u]) : (y = h.value);
              else {
                var C = f["" + i];
                if (C != null) {
                  var b = r("getObjectValues")(C).find(function (e) {
                    return e != null && e.action_type === l;
                  });
                  b != null && (y = b.value);
                }
              }
              return y;
            } else if (p) {
              var v = f.relevance_score;
              return v
                ? o("AdsInsightsValues").fromAPI(
                    o("AdsInsightsFields").getConfig(a),
                    v[p],
                  )
                : null;
            } else return f[_];
          }),
          (n.get_LEGACY = function (t, n) {
            var e = o("AdsInsightsFields").getAPIFields(n),
              a = o("AdsInsightsFieldDescriptor").get(n),
              i = a.actionFieldType,
              l = a.actionType,
              s = a.attributionWindow,
              u = {};
            i && l && (u[i] = [l]);
            var c = [];
            i && c.push(s || o("AdsInsightsAttributionWindows").getDefault());
            var d = this.$2(e, u, c);
            return d === r("AdsLoadState_LEGACY").LOADED
              ? r("AdsLoadProgress_LEGACY").loaded(this.$1(t, n))
              : r("AdsLoadProgress_LEGACY").create(d, null, this.error);
          }),
          (n.get = function (t, n) {
            var e = o("AdsInsightsFields").getAPIFields(n),
              a = o("AdsInsightsFieldDescriptor").get(n),
              l = a.actionFieldType,
              s = a.actionType,
              u = a.attributionWindow,
              c = a.customMetricID,
              d = {};
            l && s && (d[l] = [s]);
            var m = [];
            l && m.push(u || o("AdsInsightsAttributionWindows").getDefault());
            var p = e;
            o("AdsMgmtCustomMetricsStringOperations").isCMColumnID(n) &&
              c != null &&
              (p = [
                o("AdsMgmtCustomMetricsStringOperations").getColumnIDFromCMID(
                  c,
                ),
              ]);
            var _ = this.$2(p, d, m);
            switch (_) {
              case r("AdsLoadState_LEGACY").LOADED:
                return r("LoadObject").withValue(this.$1(t, n), {
                  creatorModuleID: i.id,
                });
              case r("AdsLoadState_LEGACY").ERROR:
                return this.error != null
                  ? r("LoadObject").withError(this.error, {
                      creatorModuleID: i.id,
                    })
                  : r("LoadObject").withError(r("err")(""), {
                      creatorModuleID: i.id,
                    });
              case r("AdsLoadState_LEGACY").LOADING:
                if (l === "conversion_annotations") {
                  var f = r("LoadObject").withValue(this.$1(t, n), {
                    creatorModuleID: i.id,
                  });
                  return f.setOperation(r("LoadObjectOperation").LOADING);
                }
                return r("LoadObject").loading({ creatorModuleID: i.id });
              case r("AdsLoadState_LEGACY").NOT_LOADED:
                return r("LoadObject").empty({ creatorModuleID: i.id });
            }
            return r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (n.getKeys = function (t) {
            this.breakdowns.length !== 0 || t.length === 0 || s(0, 2499);
            var e = o("AdsInsightsSortUtil").toKey(t);
            return (
              this.keys[e] || r("LoadObject").loading({ creatorModuleID: i.id })
            );
          }),
          (n.getInterval = function () {
            if (this.maxLoadStatus === r("AdsLoadState_LEGACY").LOADED) {
              var e = r("getObjectValues")(this.byKey).map(
                  r("adsInsightsObjectStatsUtilGetInterval"),
                ),
                t = e.length
                  ? e.reduce(function (e, t) {
                      return e.join(t);
                    }, e[0])
                  : void 0;
              return r("AdsLoadProgress_LEGACY").loaded(t);
            } else
              return r("AdsLoadProgress_LEGACY").create(this.maxLoadStatus);
          }),
          (n.getSequenced = function (t, n) {
            var e = this,
              a = this.statusOfFields(t),
              i = r("AdsLoadProgress_LEGACY").fromLoadObject(this.getKeys(n));
            if (a === r("AdsLoadState_LEGACY").LOADED && i.isLoaded()) {
              var l = i.defined().map(function (n) {
                var r = {};
                return (
                  t.forEach(function (t) {
                    return (r[t] = e.$1(n, t));
                  }),
                  r
                );
              });
              return r("AdsLoadProgress_LEGACY").loaded(l);
            } else {
              var s = o("AdsLoadStatuses_LEGACY").min([a, i.getStatus()]);
              return r("AdsLoadProgress_LEGACY").create(s, null, this.error);
            }
          }),
          (n.getSequencedRow = function (t, n) {
            var e = this,
              o = this.statusOfFields(t);
            if (o === r("AdsLoadState_LEGACY").LOADED) {
              var a = {};
              return (
                t.forEach(function (t) {
                  return (a[t] = e.$1(n, t));
                }),
                r("AdsLoadProgress_LEGACY").loaded(a)
              );
            } else
              return r("AdsLoadProgress_LEGACY").create(o, null, this.error);
          }),
          (n.getSequencedUnitRow = function (t) {
            return (
              this.breakdowns.length === 0 || s(0, 2500),
              this.getSequencedRow(t, "unit")
            );
          }),
          (n.getRowKey = function (t) {
            return this.breakdowns.length
              ? this.breakdowns
                  .map(function (e) {
                    return r("AdsInsightsBreakdowns").getRowKey(e, t);
                  })
                  .join("-")
              : "unit";
          }),
          (n.getUnitRowByFields_LEGACY = function (t) {
            var e = this;
            this.breakdowns.length === 0 || s(0, 2500);
            var n = {};
            return (
              t.forEach(function (t) {
                return (n[t] = e.get_LEGACY("unit", t));
              }),
              n
            );
          }),
          (n.getUnitRowByFields = function (t) {
            var e = this;
            this.breakdowns.length === 0 || s(0, 2500);
            var n = {};
            return (
              t.forEach(function (t) {
                return (n[t] = e.get("unit", t));
              }),
              n
            );
          }),
          (n.statusOfFields = function (n) {
            var t = o("AdsInsightsFields").getAPIPropsMulti(n),
              r = t.actionTypes,
              a = t.apiFields,
              i = t.attributionWindows,
              l = n.filter(
                o("AdsMgmtCustomMetricsStringOperations").isBasicCMColumnID,
              ),
              s = [].concat(
                a.filter(function (t) {
                  return t !== e;
                }),
                l,
              );
            return this.$2(s, r, i);
          }),
          (n.$2 = function (t, n, a) {
            var e = this,
              i = [].concat(
                t
                  .filter(function (e) {
                    return !Object.prototype.hasOwnProperty.call(n, e);
                  })
                  .map(function (t) {
                    return (
                      e.fieldStatuses[t] || r("AdsLoadState_LEGACY").LOADING
                    );
                  }),
                a.map(function (t) {
                  return (
                    e.attributionWindows[t] || r("AdsLoadState_LEGACY").LOADING
                  );
                }),
              );
            return (
              Object.entries(n).forEach(function (t) {
                var n = t[0],
                  o = t[1];
                Object.prototype.hasOwnProperty.call(e.actionTypes, n)
                  ? o.forEach(function (t) {
                      return i.push(
                        e.actionTypes[n][t] || r("AdsLoadState_LEGACY").LOADING,
                      );
                    })
                  : i.push(
                      e.fieldStatuses[n] || r("AdsLoadState_LEGACY").LOADING,
                    );
              }),
              o("AdsLoadStatuses_LEGACY").min(i)
            );
          }),
          (n.merge = function (t, n) {
            var e,
              a = this;
            this.breakdowns.length !== 0 || n.length === 0 || s(0, 2499);
            var l = o("AdsInsightsSortUtil").toKey(n),
              u = Object.prototype.hasOwnProperty.call(this.keys, l)
                ? (e = this.keys[l].getValue()) != null
                  ? e
                  : []
                : [],
              c = [];
            (t.forEach(function (e) {
              var t = a.getRowKey(e);
              (c.push(t),
                Object.prototype.hasOwnProperty.call(a.byKey, t) ||
                  (a.byKey[t] = {}),
                Object.keys(e).forEach(function (n) {
                  Array.isArray(e[n])
                    ? (a.byKey[t][n] = e[n])
                    : typeof e[n] == "object"
                      ? (a.byKey[t][n] = babelHelpers.extends(
                          {},
                          a.byKey[t][n],
                          e[n],
                        ))
                      : (a.byKey[t][n] = e[n]);
                }));
            }),
              (this.keys[l] = r("LoadObject").withValue(this.mergeKeys(u, c), {
                creatorModuleID: i.id,
              })));
          }),
          (n.mergeKeys = function (t, n) {
            return t.length > n.length ? t : n;
          }),
          (n.setFieldsError = function (t, n, a, l, u) {
            var e = this;
            (this.breakdowns.length !== 0 || l.length === 0 || s(0, 2499),
              t.forEach(function (t) {
                e.fieldStatuses[t] !== r("AdsLoadState_LEGACY").LOADED &&
                  (e.fieldStatuses[t] = r("AdsLoadState_LEGACY").ERROR);
              }),
              n &&
                Array.isArray(n) &&
                t
                  .filter(function (e) {
                    return o("AdsInsightsActionFieldTypes").isValid(e);
                  })
                  .forEach(function (t) {
                    return r("nullthrows")(n).forEach(function (n) {
                      (Object.prototype.hasOwnProperty.call(e.actionTypes, t) ||
                        (e.actionTypes[t] = {}),
                        e.actionTypes[t][n] !==
                          r("AdsLoadState_LEGACY").LOADED &&
                          (e.actionTypes[t][n] = r(
                            "AdsLoadState_LEGACY",
                          ).ERROR));
                    });
                  }),
              a.forEach(function (t) {
                e.attributionWindows[t] !== r("AdsLoadState_LEGACY").LOADED &&
                  (e.attributionWindows[t] = r("AdsLoadState_LEGACY").ERROR);
              }),
              (this.error = u));
            var c = o("AdsInsightsSortUtil").toKey(l),
              d = this.keys[c];
            (d ||
              (this.keys[c] = r("LoadObject").withError(u, {
                creatorModuleID: i.id,
              })),
              (this.maxLoadStatus = o("AdsLoadStatuses_LEGACY").max([
                r("AdsLoadState_LEGACY").ERROR,
                this.maxLoadStatus,
              ])));
          }),
          (n.getMissingAPIFields = function (n, a, i, l, u, c, d) {
            var t = this;
            (c === void 0 && (c = !1),
              this.breakdowns.length !== 0 || l.length === 0 || s(0, 2499));
            var m = new (r("StrSet"))();
            n.forEach(function (n) {
              n !== e && t.$3(t.fieldStatuses, n, c) && m.add(n);
            });
            var p = new (r("StrSet"))();
            i.forEach(function (e) {
              t.$3(t.attributionWindows, e, c) && p.add(e);
            });
            var _ = o("AdsInsightsSortUtil").toKey(l);
            Object.prototype.hasOwnProperty.call(this.keys, _) ||
              (n.length && m.add(n[0]));
            var f = new (r("StrSet"))(),
              g = new Set([
                r("AdsInsightsField").RESULTS,
                r("AdsInsightsField").COST_PER_RESULT,
              ]);
            if (
              (a &&
                Object.entries(a).forEach(function (e) {
                  var n = e[0],
                    r = e[1];
                  return r.forEach(function (e) {
                    var r;
                    !g.has(n) &&
                      t.$3((r = t.actionTypes[n]) != null ? r : {}, e, c) &&
                      (f.add(e), m.add(n));
                  });
                }),
              p.count() !== 0 &&
                (m.addAll(
                  n.filter(function (e) {
                    return o("AdsInsightsActionFieldTypes").isValid(e);
                  }),
                ),
                u))
            ) {
              var h = o("AdsInsightsViewSpecUtil").getInsightsAPIFields(u);
              [
                r("AdsInsightsField").RESULTS,
                r("AdsInsightsField").RESULT_RATE,
                r("AdsInsightsField").COST_PER_RESULT,
              ].forEach(function (e) {
                h.includes(e) && m.add(e);
              });
            }
            return (
              n.includes(e) &&
                d != null &&
                d.length > 0 &&
                d.some(function (e) {
                  var n = o(
                    "AdsMgmtCustomMetricsStringOperations",
                  ).getColumnIDFromCMID(e);
                  return t.$3(t.fieldStatuses, n, !1);
                }) &&
                m.add(e),
              { missingAPIFields: m, missingActionTypes: f }
            );
          }),
          (n.$3 = function (t, n, o) {
            return (
              !Object.prototype.hasOwnProperty.call(t, n) ||
              (o && t[n] === r("AdsLoadState_LEGACY").ERROR)
            );
          }),
          (n.setFieldsLoading = function (t, n, a, l) {
            var e = this;
            (t.forEach(function (t) {
              return (e.fieldStatuses[t] = r("AdsLoadState_LEGACY").LOADING);
            }),
              n &&
                Array.isArray(n) &&
                t
                  .filter(function (e) {
                    return o("AdsInsightsActionFieldTypes").isValid(e);
                  })
                  .forEach(function (t) {
                    return r("nullthrows")(n).forEach(function (n) {
                      (Object.prototype.hasOwnProperty.call(e.actionTypes, t) ||
                        (e.actionTypes[t] = {}),
                        (e.actionTypes[t][n] = r(
                          "AdsLoadState_LEGACY",
                        ).LOADING));
                    });
                  }),
              a.forEach(function (t) {
                return (e.attributionWindows[t] = r(
                  "AdsLoadState_LEGACY",
                ).LOADING);
              }));
            var s = o("AdsInsightsSortUtil").toKey(l);
            this.keys[s] = Object.prototype.hasOwnProperty.call(this.keys, s)
              ? this.keys[s].loading()
              : r("LoadObject").loading({ creatorModuleID: i.id });
          }),
          (n.setFieldsLoaded = function (n, a, i, l) {
            var t = this;
            (n.forEach(function (n) {
              n === e
                ? l != null &&
                  l.forEach(function (e) {
                    var n = o(
                      "AdsMgmtCustomMetricsStringOperations",
                    ).getColumnIDFromCMID(e);
                    t.fieldStatuses[n] = r("AdsLoadState_LEGACY").LOADED;
                  })
                : (t.fieldStatuses[n] = r("AdsLoadState_LEGACY").LOADED);
            }),
              a &&
                Array.isArray(a) &&
                n
                  .filter(function (e) {
                    return o("AdsInsightsActionFieldTypes").isValid(e);
                  })
                  .forEach(function (e) {
                    return r("nullthrows")(a).forEach(function (n) {
                      (Object.prototype.hasOwnProperty.call(t.actionTypes, e) ||
                        (t.actionTypes[e] = {}),
                        (t.actionTypes[e][n] = r(
                          "AdsLoadState_LEGACY",
                        ).LOADED));
                    });
                  }),
              i.forEach(function (e) {
                return (t.attributionWindows[e] = r(
                  "AdsLoadState_LEGACY",
                ).LOADED);
              }),
              (this.maxLoadStatus = r("AdsLoadState_LEGACY").LOADED));
          }),
          (t.getActionStatsForRow = function (t, n, r, o, a) {
            var e =
              a != null && n.startsWith("offsite_conversion.fb_pixel_custom");
            if (!o && !e) return t[n + ":" + r];
            var i = Object.keys(t).find(function (e) {
              var t = e.split(":");
              if (t.length === 2 && t[0] === n) {
                var r = t[1].split(".");
                if (r.length === 3 && r[2] === o) return !0;
                if (r.length === 3 && r[2] === a) return !0;
              }
              return !1;
            });
            return i ? t[i] : void 0;
          }),
          (t.getCustomMetricStatsForRow = function (t, n, r) {
            var e = o("AdsInsightsFields").makeCustomMetricField(n),
              a = t[e];
            if ((a == null ? void 0 : a.custom_derived_metric_id) === n) {
              var i;
              return r == null ? a.value : (i = a[r]) != null ? i : a.value;
            }
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
