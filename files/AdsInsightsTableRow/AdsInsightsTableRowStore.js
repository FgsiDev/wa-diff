__d(
  "AdsInsightsTableRowStore",
  [
    "invariant",
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCMStaleStatuses",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsInsightsFilter",
    "AdsInsightsGroupUtils",
    "AdsInsightsObjectStatsStore",
    "AdsInsightsPrioritizedSegmentsUtils",
    "AdsInsightsSortUtil",
    "AdsInsightsTableDataFetchingPolicyHelper",
    "AdsInsightsTableRowUtil",
    "AdsInsightsTableViewStore",
    "AdsInterfacesLoggerUtils",
    "AdsMgmtTableRowType",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPEGroupConstants",
    "AdsPEListStore",
    "AdsTypedID",
    "BinaryIndexedTree",
    "FluxStore",
    "areEqual",
    "err",
    "expectationViolation",
    "objectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = [],
      d = { BREAKDOWN: 2, SUMMARY: 1 },
      m = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            n.$AdsInsightsTableRowStore$p_6(),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$AdsInsightsTableRowStore$p_7 = function (t) {
            return 1 + t.tree.sumUntil(t.tree.getSize());
          }),
          (a.$AdsInsightsTableRowStore$p_8 = function (t) {
            var e = 0,
              n = 0;
            for (var r of this.$AdsInsightsTableRowStore$p_3) {
              var o = this.$AdsInsightsTableRowStore$p_7(r);
              if (t < e + o)
                return { segment: r, localIndex: t - e, globalObjectOffset: n };
              ((n += r.objectEntries.length), (e += o));
            }
            return null;
          }),
          (a.get = function (t) {
            if (this.$AdsInsightsTableRowStore$p_3.length > 0) {
              var e = this.$AdsInsightsTableRowStore$p_8(t);
              if (e != null) {
                var n = e.localIndex,
                  a = e.segment;
                if (n === 0) return a.header;
                var i = n - 1,
                  l = a.tree.greatestLowerBound(i);
                if (0 <= l && l < a.objectEntries.length) {
                  var u = a.tree.sumUntil(l),
                    d = i - u;
                  if (d < a.objectEntries[l].rows.length)
                    return babelHelpers.extends(
                      {},
                      a.objectEntries[l].rows[d],
                      { groupIndex: i },
                    );
                }
              }
              return {
                breakdowns: c,
                rowType: o("AdsMgmtTableRowType").LOADING_SUMMARY,
              };
            }
            for (;;) {
              var m = this.getObjectIndex(t);
              if (!(0 <= m && m < this.$AdsInsightsTableRowStore$p_4.getSize()))
                return {
                  breakdowns: c,
                  rowType: o("AdsMgmtTableRowType").LOADING_SUMMARY,
                };
              var p = this.$AdsInsightsTableRowStore$p_9(m),
                _ = p.rows,
                f = this.$AdsInsightsTableRowStore$p_4.sumUntil(m),
                g = t - f;
              if ((0 <= g || s(0, 2898), g < _.length)) return _[g];
            }
            throw r("err")("unreachable");
          }),
          (a.getObjects = function (t, n) {
            if (!this.$AdsInsightsTableRowStore$p_2) return [];
            if (
              (this.$AdsInsightsTableRowStore$p_10(),
              this.$AdsInsightsTableRowStore$p_3.length > 0)
            ) {
              var e = [],
                r = 0;
              for (var o of this.$AdsInsightsTableRowStore$p_3) {
                for (
                  var a = this.$AdsInsightsTableRowStore$p_7(o), i = 0;
                  i < o.objectEntries.length;
                  i++
                ) {
                  var l = r + 1 + o.tree.sumUntil(i),
                    s = l + o.objectEntries[i].rows.length - 1;
                  s >= t && l <= n && e.push(o.objectEntries[i]);
                }
                r += a;
              }
              return e;
            }
            return this.$AdsInsightsTableRowStore$p_1.slice(
              Math.max(0, t),
              n + 1,
            );
          }),
          (a.getAllObjects = function () {
            if (this.$AdsInsightsTableRowStore$p_3.length > 0) {
              var e = [];
              for (var t of this.$AdsInsightsTableRowStore$p_3)
                for (var n of t.objectEntries) e.push(n);
              return e;
            }
            return this.$AdsInsightsTableRowStore$p_1;
          }),
          (a.getObjectIndex = function (t) {
            if (!this.$AdsInsightsTableRowStore$p_2) return -1;
            if (
              (this.$AdsInsightsTableRowStore$p_10(),
              this.$AdsInsightsTableRowStore$p_3.length > 0)
            ) {
              var e = this.$AdsInsightsTableRowStore$p_8(t);
              if (e == null) return -1;
              var n = e.globalObjectOffset,
                r = e.localIndex,
                o = e.segment;
              if (r === 0) return -1;
              var a = r - 1;
              return n + o.tree.greatestLowerBound(a);
            }
            return this.$AdsInsightsTableRowStore$p_4.greatestLowerBound(t);
          }),
          (a.ceilObjectIndex = function (t) {
            if (this.$AdsInsightsTableRowStore$p_3.length > 0) {
              this.$AdsInsightsTableRowStore$p_10();
              var e = this.$AdsInsightsTableRowStore$p_8(t);
              if (e != null) {
                var n = e.globalObjectOffset,
                  r = e.localIndex,
                  o = e.segment,
                  a = Math.max(0, r - 1);
                return n + o.tree.leastUpperBound(a);
              }
              var i = 0;
              for (var l of this.$AdsInsightsTableRowStore$p_3)
                i += l.objectEntries.length;
              return i + 1;
            }
            return (
              this.getObjectIndex(t),
              this.$AdsInsightsTableRowStore$p_4.leastUpperBound(Math.max(0, t))
            );
          }),
          (a.getRowCount = function () {
            if (!this.$AdsInsightsTableRowStore$p_2) return 0;
            if (
              (this.$AdsInsightsTableRowStore$p_10(),
              this.$AdsInsightsTableRowStore$p_3.length > 0)
            ) {
              var e = 0;
              for (var t of this.$AdsInsightsTableRowStore$p_3)
                e += this.$AdsInsightsTableRowStore$p_7(t);
              return e;
            }
            return this.$AdsInsightsTableRowStore$p_4.sumUntil(
              this.$AdsInsightsTableRowStore$p_4.getSize(),
            );
          }),
          (a.getStaleStatus = function () {
            var e = r("AdsInsightsTableViewStore").getOrNull();
            return (
              e &&
                this.$AdsInsightsTableRowStore$p_5 ===
                  r("AdsCMStaleStatuses").STALENESS_UNKNOWN &&
                this.$AdsInsightsTableRowStore$p_2 &&
                (this.$AdsInsightsTableRowStore$p_5 =
                  this.$AdsInsightsTableRowStore$p_11()),
              this.$AdsInsightsTableRowStore$p_5
            );
          }),
          (a.getIsAnyEntryLoading = function () {
            return this.$AdsInsightsTableRowStore$p_3.length > 0
              ? this.$AdsInsightsTableRowStore$p_3.some(function (e) {
                  return e.objectEntries.some(function (e) {
                    return !e.isLoaded;
                  });
                })
              : this.$AdsInsightsTableRowStore$p_1.some(function (e) {
                  return !e.isLoaded;
                });
          }),
          (a.$AdsInsightsTableRowStore$p_12 = function () {
            var t = r("AdsInsightsTableViewStore").getOrNull();
            if (t != null) {
              var a = t.breakdowns,
                i = t.expandedGroupKeys,
                l = t.groupIDsByKey,
                s = t.groupingDimension,
                u = t.groupObjectCounts,
                m = t.groupPageIndex,
                p = o(
                  "AdsInsightsPrioritizedSegmentsUtils",
                ).maybeBuildPrioritizedSegments(t, function (e) {
                  return n.$AdsInsightsTableRowStore$p_13(e);
                });
              if (p != null) {
                ((this.$AdsInsightsTableRowStore$p_3 = p),
                  (this.$AdsInsightsTableRowStore$p_1 = []),
                  (this.$AdsInsightsTableRowStore$p_4 =
                    r("BinaryIndexedTree").empty(0)),
                  (this.$AdsInsightsTableRowStore$p_5 =
                    r("AdsCMStaleStatuses").NOT_STALE));
                return;
              }
              if (s != null && u != null && r("objectKeys")(u).length > 0) {
                var _,
                  f = r("objectKeys")(u).filter(function (e) {
                    return u[e] !== 0;
                  }),
                  g = f.map(function (e) {
                    var p,
                      _ = {
                        breakdownKey: "unit",
                        breakdowns: c,
                        filter:
                          (p = o(
                            "AdsInsightsTableDataFetchingPolicyHelper",
                          ).buildGroupFilter(t.filter, e, s, t.objectType)) !=
                          null
                            ? p
                            : void 0,
                        groupKey: e,
                        groupType: s,
                        groupObjectCount: u[e],
                        rowType: o("AdsMgmtTableRowType").GROUP_HEADER,
                      },
                      f = r("AdsInsightsGroupUtils")(e, i != null ? i : []),
                      g = [],
                      h = r("BinaryIndexedTree").empty(0);
                    if (f) {
                      var y = l == null ? void 0 : l[e];
                      if (y != null && y.length > 0) {
                        var C,
                          b = i != null ? i : [],
                          v = y;
                        if (
                          b.length === 1 &&
                          e === b[0] &&
                          y.length > o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT
                        ) {
                          var S =
                            (m != null ? m : 0) *
                            o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT;
                          v = y.slice(
                            S,
                            S + o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT,
                          );
                        }
                        if (v.length === 0 && ((C = u[e]) != null ? C : 0) > 0)
                          ((g = [
                            {
                              isLoaded: !1,
                              objectID: null,
                              objectType: null,
                              rows: [
                                {
                                  breakdowns: c,
                                  rowType: o("AdsMgmtTableRowType")
                                    .LOADING_SUMMARY,
                                },
                              ],
                            },
                          ]),
                            (h = r("BinaryIndexedTree").uniform(1, 1)));
                        else {
                          var R = a.length === 0 ? d.SUMMARY : d.BREAKDOWN;
                          ((h = r("BinaryIndexedTree").uniform(v.length, R)),
                            (g = v.map(function (e, t) {
                              var r = n.$AdsInsightsTableRowStore$p_13(e);
                              return (h.set(t, r.rows.length), r);
                            })));
                        }
                      } else
                        y == null &&
                          ((g = [
                            {
                              isLoaded: !1,
                              objectID: null,
                              objectType: null,
                              rows: [
                                {
                                  breakdowns: c,
                                  rowType: o("AdsMgmtTableRowType")
                                    .LOADING_SUMMARY,
                                },
                              ],
                            },
                          ]),
                          (h = r("BinaryIndexedTree").uniform(1, 1)));
                    }
                    return { header: _, objectEntries: g, tree: h };
                  }),
                  h = n.$AdsInsightsTableRowStore$p_14(t.objectType);
                if (h.length > 0) {
                  var y = {
                      breakdownKey: "unit",
                      breakdowns: c,
                      filter: void 0,
                      groupKey: o("AdsPEGroupConstants").DRAFTS_GROUP_KEY,
                      groupType: s,
                      groupObjectCount: h.length,
                      isNewDraft: !0,
                      rowType: o("AdsMgmtTableRowType").GROUP_HEADER,
                    },
                    C = [],
                    b = r("BinaryIndexedTree").empty(0),
                    v = r("AdsInsightsGroupUtils")(
                      o("AdsPEGroupConstants").DRAFTS_GROUP_KEY,
                      i != null ? i : [],
                    );
                  if (v) {
                    var S = a.length === 0 ? d.SUMMARY : d.BREAKDOWN;
                    ((C = h.map(function (e) {
                      return n.$AdsInsightsTableRowStore$p_13(e);
                    })),
                      (b = r("BinaryIndexedTree").uniform(C.length, S)),
                      C.forEach(function (e, t) {
                        b.set(t, e.rows.length);
                      }));
                  }
                  g.unshift({ header: y, objectEntries: C, tree: b });
                }
                var R = i != null ? i : [],
                  L = m != null ? m : 0,
                  E = R.length === 1 ? R[0] : null,
                  k =
                    E != null &&
                    L > 0 &&
                    ((_ = u[E]) != null ? _ : 0) >
                      o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT &&
                    (l == null ? void 0 : l[E]) != null;
                (k
                  ? (this.$AdsInsightsTableRowStore$p_3 = g.filter(
                      function (e) {
                        return e.header.groupKey === E;
                      },
                    ))
                  : (this.$AdsInsightsTableRowStore$p_3 = g),
                  (this.$AdsInsightsTableRowStore$p_1 = []),
                  (this.$AdsInsightsTableRowStore$p_4 =
                    r("BinaryIndexedTree").empty(0)),
                  (this.$AdsInsightsTableRowStore$p_5 =
                    r("AdsCMStaleStatuses").NOT_STALE));
              } else {
                ((this.$AdsInsightsTableRowStore$p_3 = []),
                  (e || (e = r("AdsDataAtom"))).isDispatching() &&
                    (e || (e = r("AdsDataAtom"))).waitFor([
                      r("AdsPEListStore").getDispatchToken(),
                    ]));
                var I = r("AdsPEListStore").getIDsWithNulls(t),
                  T = r("AdsPEListStore").getCurrentPageSize(t),
                  D = r("AdsPEListStore").getFetchedCount(t);
                if (T.isDone() && T.hasValue()) {
                  var x = T.getValueEnforcing();
                  (D > x &&
                    (r("expectationViolation")(
                      "Fetched %s count should not be bigger than size %s",
                      D,
                      x,
                    ),
                    o("AdsInterfacesLoggerUtils").logException(
                      r("err")("Fetched count should not be bigger than size"),
                      {
                        module_name: "AdsInsightsTableRowStore",
                        fetchedCount: D,
                        loadedSize: x,
                      },
                    )),
                    this.$AdsInsightsTableRowStore$p_15(I, x, D, a.length),
                    (this.$AdsInsightsTableRowStore$p_5 =
                      r("AdsCMStaleStatuses").NOT_STALE));
                }
              }
            }
          }),
          (a.$AdsInsightsTableRowStore$p_15 = function (t, o, a, i) {
            this.$AdsInsightsTableRowStore$p_4 = r("BinaryIndexedTree").uniform(
              o,
              i === 0 ? d.SUMMARY : d.BREAKDOWN,
            );
            for (var e = 0; e < a; e++) {
              var l = n.$AdsInsightsTableRowStore$p_13(t[e]);
              (this.$AdsInsightsTableRowStore$p_4.set(e, l.rows.length),
                (this.$AdsInsightsTableRowStore$p_1[e] = l));
            }
          }),
          (a.$AdsInsightsTableRowStore$p_10 = function () {
            this.$AdsInsightsTableRowStore$p_5 !==
              r("AdsCMStaleStatuses").NOT_STALE &&
              this.$AdsInsightsTableRowStore$p_4.getSize() === 0 &&
              this.$AdsInsightsTableRowStore$p_3.length === 0 &&
              this.$AdsInsightsTableRowStore$p_12();
          }),
          (a.$AdsInsightsTableRowStore$p_11 = function () {
            var t = r("AdsInsightsTableViewStore").get();
            if (!t) return r("AdsCMStaleStatuses").STALENESS_UNKNOWN;
            (e || (e = r("AdsDataAtom"))).isDispatching() &&
              (e || (e = r("AdsDataAtom"))).waitFor([
                r("AdsPEListStore").getDispatchToken(),
              ]);
            var n = r("AdsPEListStore").getIDsWithNulls(t),
              o = r("AdsPEListStore").getCurrentPageSize(t);
            if (!(o.isDone() && o.hasValue()))
              return r("AdsCMStaleStatuses").STALENESS_UNKNOWN;
            var a = o.getValueEnforcing();
            if (this.$AdsInsightsTableRowStore$p_4.getSize() < a)
              return r("AdsCMStaleStatuses").DATA_ADDED;
            if (this.$AdsInsightsTableRowStore$p_4.getSize() > a)
              return r("AdsCMStaleStatuses").DATA_REMOVED;
            for (
              var i = 0;
              i < this.$AdsInsightsTableRowStore$p_4.getSize();
              i++
            ) {
              var l = this.$AdsInsightsTableRowStore$p_1[i];
              if (l && l.objectID != null && l.objectID !== n[i])
                return r("AdsCMStaleStatuses").DATA_CHANGED;
            }
            return r("AdsCMStaleStatuses").NOT_STALE;
          }),
          (a.$AdsInsightsTableRowStore$p_9 = function (t) {
            var e = this.$AdsInsightsTableRowStore$p_1[t];
            if (!e || !e.isLoaded) {
              var o = n.$AdsInsightsTableRowStore$p_13(e ? e.objectID : void 0);
              (u || (u = r("areEqual")))(e, o) ||
                (this.$AdsInsightsTableRowStore$p_4.set(t, o.rows.length),
                (this.$AdsInsightsTableRowStore$p_1[t] = o));
            }
            return this.$AdsInsightsTableRowStore$p_1[t];
          }),
          (n.$AdsInsightsTableRowStore$p_16 = function (t, n) {
            if (t == null || !n) return !1;
            switch (n) {
              case r("AdsObjectTypes").CAMPAIGN_GROUP:
                return r("AdsCampaignGroupDraftFragmentStore").isNew(t);
              case r("AdsObjectTypes").CAMPAIGN:
                return r("AdsCampaignDraftFragmentStore").isNew(t);
              case r("AdsObjectTypes").ADGROUP:
                return r("AdsAdgroupDraftFragmentStore").isNew(t);
              default:
                return !1;
            }
          }),
          (n.$AdsInsightsTableRowStore$p_14 = function (t) {
            var e = r("AdsAccountStore").getSelectedAccountID();
            if (e == null || t == null) return [];
            switch (t) {
              case r("AdsObjectTypes").CAMPAIGN_GROUP:
                return r("AdsCampaignGroupDraftFragmentStore")
                  .getNewIDsFor(e)
                  .toArray();
              case r("AdsObjectTypes").CAMPAIGN:
                return r("AdsCampaignDraftFragmentStore")
                  .getNewIDsFor(e)
                  .toArray();
              case r("AdsObjectTypes").ADGROUP:
                return r("AdsAdgroupDraftFragmentStore")
                  .getNewIDsFor(e)
                  .toArray();
              default:
                return [];
            }
          }),
          (n.$AdsInsightsTableRowStore$p_13 = function (t) {
            var e = r("AdsInsightsTableViewStore").get(),
              a = e.benchmarkDerivedColumnIDs,
              i = e.breakdowns,
              l = e.comparisonTimeRange,
              s = e.objectType,
              u = e.sort,
              d = e.timeRange,
              m = o("AdsInsightsSortUtil").getBreakdownSort(u, i),
              p,
              _ = !1;
            if (t != null) {
              _ = n.$AdsInsightsTableRowStore$p_16(t, s);
              var f = null;
              switch (s) {
                case r("AdsObjectTypes").ADGROUP:
                  f = o("AdsTypedID").fbidToAdgroupTypedID(t);
                  break;
                case r("AdsObjectTypes").CAMPAIGN:
                  f = o("AdsTypedID").fbidToCampaignTypedID(t);
                  break;
                case r("AdsObjectTypes").CAMPAIGN_GROUP:
                  f = o("AdsTypedID").fbidToCampaignGroupTypedID(t);
                  break;
              }
              p = {
                breakdownKey: "unit",
                breakdowns: c,
                objectID: t,
                typedObjectID: f,
                objectType: s,
                rowType: o("AdsMgmtTableRowType").SUMMARY,
                timeRange: d,
                comparisonTimeRange: l,
                isNewDraft: _,
              };
            } else
              p = {
                breakdowns: c,
                rowType: o("AdsMgmtTableRowType").LOADING_SUMMARY,
              };
            var g,
              h,
              y,
              C = r("AdsObjectUtils").toPenguinTypeOrNull(s) != null;
            if (_) g = [];
            else if (i.length && t != null && C) {
              var b = { comparisonRange: l, currentRange: d };
              ((h = r("AdsInsightsObjectStatsStore").getGroupCached(
                o("AdsInsightsFilter").idIn(s, [t]),
                d,
                b,
                i,
                m,
              )),
                l &&
                  a &&
                  a.size &&
                  (y = r("AdsInsightsObjectStatsStore").getGroupCached(
                    o("AdsInsightsFilter").idIn(s, [t]),
                    l,
                    b,
                    i,
                    m,
                  )),
                (g = o("AdsInsightsTableRowUtil").fromGroup(e, t, h, y)));
            } else
              i.length
                ? (g = [
                    {
                      breakdowns: i,
                      rowType: o("AdsMgmtTableRowType").LOADING_BREAKDOWN,
                    },
                  ])
                : (g = []);
            var v = !1;
            return (
              t != null &&
                (i.length
                  ? ((v =
                      !!h &&
                      o("AdsInsightsTableRowUtil").hasBreakdownRowLoaded(h, m)),
                    y &&
                      (v =
                        v &&
                        o("AdsInsightsTableRowUtil").hasBreakdownRowLoaded(
                          y,
                          m,
                        )))
                  : (v = !0)),
              { isLoaded: v, objectID: t, objectType: s, rows: [p].concat(g) }
            );
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsDraftDraftPublishCompletedDataActionFlux").actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [
              r("AdsInsightsObjectStatsStore"),
              r("AdsInsightsTableViewStore"),
              r("AdsAdgroupDraftFragmentStore"),
              r("AdsCampaignDraftFragmentStore"),
              r("AdsCampaignGroupDraftFragmentStore"),
              r("AdsPEListStore"),
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              r("AdsPEListStore").hasChanged() &&
                (this.$AdsInsightsTableRowStore$p_5 =
                  r("AdsCMStaleStatuses").STALENESS_UNKNOWN),
              this.$AdsInsightsTableRowStore$p_2 &&
                this.getDependencyStores().some(function (e) {
                  return e.hasChanged();
                }) &&
                (this.$AdsInsightsTableRowStore$p_12(), this.__emitChange()),
              e.type)
            ) {
              case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
                (this.$AdsInsightsTableRowStore$p_6(), this.__emitChange());
                break;
            }
          }),
          (a.$AdsInsightsTableRowStore$p_6 = function () {
            ((this.$AdsInsightsTableRowStore$p_1 = []),
              (this.$AdsInsightsTableRowStore$p_3 = []),
              (this.$AdsInsightsTableRowStore$p_4 =
                r("BinaryIndexedTree").empty(0)),
              (this.$AdsInsightsTableRowStore$p_5 =
                r("AdsCMStaleStatuses").STALENESS_UNKNOWN));
          }),
          (a.setContext = function (t) {
            (u || (u = r("areEqual")))(t, this.$AdsInsightsTableRowStore$p_2) ||
              ((this.$AdsInsightsTableRowStore$p_2 = t),
              this.$AdsInsightsTableRowStore$p_6());
          }),
          n
        );
      })(r("FluxStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  98,
);
