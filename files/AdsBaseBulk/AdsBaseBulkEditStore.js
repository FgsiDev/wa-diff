__d(
  "AdsBaseBulkEditStore",
  [
    "AdsAdgroupFetchDefaultInstagramAccountForPageFinishedActionFlux",
    "AdsAdgroupFetchDefaultInstagramAccountForPageStartedActionFlux",
    "AdsBulkEditCampaignStructureProvider",
    "AdsBulkEditChangeDialogTypeDataActionFlux",
    "AdsBulkEditChangeNameDataActionFlux",
    "AdsBulkEditChangeNavigationSelectedTabActionFlux",
    "AdsBulkEditCloseDialogDataActionFlux",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFlowTypes",
    "AdsBulkEditGKQEUtil",
    "AdsBulkEditOpenFieldsDialogDataActionFlux",
    "AdsBulkEditToggleFilterActionFlux",
    "AdsBulkEditUpdateCampaignStructureSelectionActionFlux",
    "AdsBulkEditUpdateCreativeABTestActionFlux",
    "AdsBulkEditUtils",
    "AdsDataAtom",
    "AdsEditingAdgroupEditorContext",
    "AdsSelectorUtils",
    "FluxReduceStore",
    "ImmutableRecordWithV4Types",
    "abstractMethod",
    "adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function () {
        var e;
        return o("ImmutableRecordWithV4Types").Record({
          bulkAdoptTipType: null,
          capturedActionDispatches: (e = r("immutable")).List(),
          changedColumnsByRowMap: e.Map(),
          dialogType: null,
          hiddenRows: e.OrderedMap(),
          isApplyDisabled: !1,
          filterType: null,
          rows: e.OrderedMap(),
          selection: e.OrderedSet(),
          source: null,
        });
      },
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.__recordFactory = u()),
            (e.__getUpdatedValueForSetTo = function (e, t, n) {
              var r = e.setIn(t, n),
                o = n;
              return { updatedAdObject: r, updatedValue: o };
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return u()();
          }),
          (a.reduce = function (n, a) {
            var t = a.action;
            if (this.__shouldReset(t.type)) return this.getInitialState();
            switch (t.type) {
              case o("AdsBulkEditCloseDialogDataActionFlux").actionType:
                return this.getInitialState();
              case o(
                "AdsAdgroupFetchDefaultInstagramAccountForPageStartedActionFlux",
              ).actionType:
                return n.merge({ isApplyDisabled: !0 });
              case o(
                "AdsAdgroupFetchDefaultInstagramAccountForPageFinishedActionFlux",
              ).actionType:
                return n.merge({ isApplyDisabled: !1 });
              case o("AdsBulkEditOpenFieldsDialogDataActionFlux").actionType:
                return t.level === this.__getBulkEditLevel()
                  ? this.$AdsBaseBulkEditStore$p_1(
                      t.source,
                      this.__resolveOpenDialogType(t.dialogType, t.source),
                      this.getInitialState(),
                      t.bulkAdoptTipType,
                      t.bulkAdoptionOpportunities,
                    )
                  : n;
              case o("AdsBulkEditChangeDialogTypeDataActionFlux").actionType:
                return t.level === this.__getBulkEditLevel()
                  ? n.merge({
                      dialogType: t.dialogType,
                      filterType: o("AdsBulkEditFlowTypes")
                        .AdsBulkEditFilterTypes.SHOW_ALL,
                    })
                  : n;
              case o("AdsBulkEditToggleFilterActionFlux").actionType: {
                var i = t.filterType,
                  l = t.selection;
                return n.merge({ filterType: i, selection: l });
              }
              case o("AdsBulkEditChangeNameDataActionFlux").actionType:
                return t.level === this.__getBulkEditLevel()
                  ? this.$AdsBaseBulkEditStore$p_2(t, n)
                  : n;
              case r("AdsBulkEditUpdateCampaignStructureSelectionActionFlux")
                .actionType:
                return t.level !== this.__getBulkEditLevel()
                  ? n
                  : this.$AdsBaseBulkEditStore$p_3(n, t);
              case r("AdsBulkEditChangeNavigationSelectedTabActionFlux")
                .actionType: {
                var u = t.selectedTab;
                return u != this.__getBulkEditLevel()
                  ? n
                  : ((s || (s = r("AdsDataAtom"))).waitFor(
                      (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                        [
                          r(
                            "adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector",
                          ),
                        ],
                      ),
                    ),
                    n.merge({
                      dialogType: this.__getDefaultDialogType(),
                      filterType: o("AdsBulkEditFlowTypes")
                        .AdsBulkEditFilterTypes.SHOW_ALL,
                      selection: r("immutable").OrderedSet(
                        r(
                          "adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector",
                        )(),
                      ),
                    }));
              }
              case r("AdsBulkEditUpdateCreativeABTestActionFlux").actionType: {
                var c = t.selectedIDs,
                  d = n.rows,
                  m = n.hiddenRows;
                (s || (s = r("AdsDataAtom"))).waitFor(
                  (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                    [
                      r(
                        "AdsBulkEditCampaignStructureProvider",
                      ).toFluxSelector(),
                    ],
                    r("AdsEditingAdgroupEditorContext"),
                  ),
                );
                var p = c.reduce(
                    function (e, t) {
                      var o = e.existingAdobjects,
                        a = e.newIDs,
                        i = m.get(t) != null;
                      return i
                        ? ((m = m.delete(t)),
                          {
                            existingAdobjects: o.set(
                              t,
                              r("nullthrows")(n.hiddenRows.get(t)),
                            ),
                            newIDs: a,
                          })
                        : (a.push(t), { existingAdobjects: o, newIDs: a });
                    },
                    {
                      existingAdobjects: r("immutable").OrderedMap(),
                      newIDs: [],
                    },
                  ),
                  _ = p.existingAdobjects,
                  f = p.newIDs,
                  g = this.__getAdObjectsList(f),
                  h = this.__getAdObjectsPublishStatus(),
                  y = this.getRowMap(g, h);
                return n.merge({
                  dialogType: r("AdsBulkEditDialogTypes").ADGROUP_REGULAR_MEDIA,
                  filterType: o("AdsBulkEditFlowTypes").AdsBulkEditFilterTypes
                    .SHOW_ALL,
                  rows: d.concat(_).concat(y),
                  hiddenRows: m,
                  selection: r("immutable").OrderedSet(c),
                });
              }
            }
            return this.__mutate(n, t);
          }),
          (a.getRowMap = function (t, n) {
            return r("immutable")
              .OrderedMap()
              .withMutations(function (e) {
                t.map(function (t) {
                  var r,
                    o,
                    a = t.getIn(["id"]),
                    i = {
                      current: t,
                      original: t,
                      isDraftObject:
                        (r = (o = n.get(a)) == null ? void 0 : o.isNew) != null
                          ? r
                          : !1,
                    };
                  e.set(a, i);
                });
              });
          }),
          (a.__getNewState__DO_NOT_USE = function (n, a, i) {
            var t = this.__getAdObjectsList(),
              l = this.__getAdObjectsPublishStatus(),
              u = this.getRowMap(t, l);
            (s || (s = r("AdsDataAtom"))).waitFor(
              (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                r("adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector"),
              ]),
            );
            var c = r(
              "adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector",
            )();
            return i.merge({
              source: n,
              dialogType: a,
              filterType: o("AdsBulkEditFlowTypes").AdsBulkEditFilterTypes
                .SHOW_ALL,
              rows: u,
              selection: r("immutable").OrderedSet(c),
            });
          }),
          (a.$AdsBaseBulkEditStore$p_1 = function (t, n, r, o, a) {
            var e = this.__getNewState__DO_NOT_USE(t, n, r);
            return this.__mutateForBulkAdoption(e, t, o, a);
          }),
          (a.$AdsBaseBulkEditStore$p_2 = function (t, n) {
            var e = t.adObjectIDs,
              a = t.columnKey,
              i = t.name,
              l = this.__getPathFromFieldKey("name"),
              s = this.$AdsBaseBulkEditStore$p_4(e, i),
              u = e.reduce(function (e, t) {
                var o,
                  a = r("nullthrows")(n.rows.get(t)),
                  u = a.current;
                return e.set(
                  t,
                  babelHelpers.extends({}, a, {
                    current: u.setIn(l, (o = s.get(t)) != null ? o : i),
                  }),
                );
              }, n.rows),
              c = o("AdsBulkEditUtils").getNewChangedColumnsByRowMap(
                [l],
                e,
                a,
                n.changedColumnsByRowMap,
                u,
              );
            return n.merge({ rows: u, changedColumnsByRowMap: c });
          }),
          (a.$AdsBaseBulkEditStore$p_4 = function (t, n) {
            var e = new Map();
            if (
              t.length <= 1 ||
              !o("AdsBulkEditGKQEUtil").isPassingBulkEditNameAutoIncrementGK()
            ) {
              for (var r of t) e.set(r, n);
              return e;
            }
            return (
              t.forEach(function (t, r) {
                e.set(t, r === 0 ? n : n + " - " + r);
              }),
              e
            );
          }),
          (a.$AdsBaseBulkEditStore$p_3 = function (t, n) {
            var e = n.isSelected,
              a = n.selectedIDs,
              i = n.updatedIDs,
              l = t.rows,
              s = t.hiddenRows,
              u = t.selection;
            if (
              (t.filterType ===
                o("AdsBulkEditFlowTypes").AdsBulkEditFilterTypes.SHOW_ALL &&
                (u = r("immutable").OrderedSet(a)),
              e)
            ) {
              u = u.filter(function (e) {
                return !i.includes(e);
              });
              var g = o(
                "AdsBulkEditGKQEUtil",
              ).isPassingBulkEditModalCascadingSelectionGK(!0);
              l = i.reduce(function (e, t) {
                var n = e.get(t);
                return ((n != null || !g) && (s = s.set(t, n)), e.delete(t));
              }, l);
            } else {
              var c = i.reduce(
                  function (e, t) {
                    var n = e.existingAdobjects,
                      o = e.newIDs,
                      a = s.get(t) != null;
                    if (!a)
                      return (o.push(t), { existingAdobjects: n, newIDs: o });
                    var i = s.get(t);
                    return (
                      (s = s.delete(t)),
                      {
                        existingAdobjects: n.set(t, r("nullthrows")(i)),
                        newIDs: o,
                      }
                    );
                  },
                  {
                    existingAdobjects: r("immutable").OrderedMap(),
                    newIDs: [],
                  },
                ),
                d = c.existingAdobjects,
                m = c.newIDs,
                p = this.__getAdObjectsList(m),
                _ = this.__getAdObjectsPublishStatus(),
                f = this.getRowMap(p, _);
              l = l.concat(d).concat(f);
            }
            var h =
              n.isCascade === !0
                ? u.filter(function (e) {
                    return l.has(e);
                  })
                : u;
            return t.merge({ rows: l, hiddenRows: s, selection: h });
          }),
          (a.__getDefaultDialogType = function () {
            return r("abstractMethod")(
              "AdsBaseBulkEditStore",
              "__getDefaultDialogType",
            );
          }),
          (a.__resolveOpenDialogType = function (t, n) {
            return t;
          }),
          (a.__getAdObjectsList = function (t) {
            return r("abstractMethod")(
              "AdsBaseBulkEditStore",
              "__getAdObjectsList",
            );
          }),
          (a.__getAdObjectsPublishStatus = function () {
            return r("abstractMethod")(
              "AdsBaseBulkEditStore",
              "__getAdObjectsPublishStatus",
            );
          }),
          (a.__getBulkEditLevel = function () {
            return r("abstractMethod")(
              "AdsBaseBulkEditStore",
              "__getBulkEditLevel",
            );
          }),
          (a.__getPathFromFieldKey = function (t) {
            return r("abstractMethod")(
              "AdsBaseBulkEditStore",
              "__getPathFromFieldKey",
            );
          }),
          (a.__getUpdatedAdObjects = function (t, n, a, i, l, s) {
            var e = this,
              u = t.changedColumnsByRowMap,
              c = t.rows;
            s === void 0 && (s = !1);
            var d = c,
              m = o("AdsBulkEditUtils").getEqualityComparator(n),
              p = u.withMutations(function (t) {
                var u = t;
                d = c.withMutations(function (t) {
                  a.forEach(function (a) {
                    var c = r("nullthrows")(t.get(a)),
                      d = c.original,
                      p = c.current,
                      _ = !1;
                    (Object.entries(i).forEach(function (t) {
                      var n = t[0],
                        r = t[1];
                      r === null &&
                        !s &&
                        (r = p.getIn(e.__getPathFromFieldKey(n)));
                      var o = l(p, e.__getPathFromFieldKey(n), r),
                        a = o.updatedAdObject,
                        i = o.updatedValue;
                      ((p = a),
                        (_ = _ || !m(i, d.getIn(e.__getPathFromFieldKey(n)))));
                    }),
                      t.set(a, {
                        original: c.original,
                        current: p,
                        isDraftObject: c.isDraftObject,
                      }),
                      (u = o(
                        "AdsBulkEditUtils",
                      ).getUpdatedChangedColumnsByRowMap(_, u, n, a)));
                  });
                });
              });
            return { newRows: d, newChangedColumnsByRowMap: p };
          }),
          (a.__mutate = function (t, n) {
            return r("abstractMethod")("AdsBaseBulkEditStore", "__mutate");
          }),
          (a.__shouldReset = function (t) {
            return r("abstractMethod")("AdsBaseBulkEditStore", "__shouldReset");
          }),
          (a.__mutateForBulkAdoption = function (t, n, o, a) {
            return r("abstractMethod")(
              "AdsBaseBulkEditStore",
              "__mutateForBulkAdoption",
            );
          }),
          n
        );
      })(r("FluxReduceStore"));
    ((c.__moduleID = i.id), (l.default = c));
  },
  98,
);
