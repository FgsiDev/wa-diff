__d(
  "AdsCampaignStructureSelectors",
  [
    "AdsAccountStore",
    "AdsAdObjectLevelToPESelectors",
    "AdsAdgroupCombinedIDNameStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignCombinedIDNameStore",
    "AdsCampaignCombinedListStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignStructureCollapseNodeProvider",
    "AdsCampaignStructureSearchAndFilterDataProvider",
    "AdsCampaignStructureTreeExperiments",
    "AdsCampaignStructureUtils",
    "AdsDynamicAdObjectsSelectors",
    "AdsEditorCampaignStructureStore",
    "AdsFluxHooks",
    "AdsLoadObjectUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "Laminar",
    "LoadObject",
    "adsCampaignStructureCurrentLevelSelector",
    "adsCampaignStructureSelectedIDsSelector",
    "adsCreateBranchSelector",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "adsPECrepeIsPackageSelector",
    "adsPEManageAdsSectionSelector",
    "adsUEditorCrepeCurrentLevelIDsSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
    "createMapBy",
    "err",
    "gkx",
    "immutable",
    "isFalsey",
    "isTruthy",
    "react",
    "react-compiler-runtime",
    "useAdsGatedMemo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = [],
      c = r("adsCreateSelector")(
        [
          r("AdsAdgroupDraftFragmentStore").getFragmentsInDraftForSelector,
          r("AdsCampaignDraftFragmentStore").getFragmentsInDraftForSelector,
          r("AdsCampaignGroupDraftFragmentStore")
            .getFragmentsInDraftForSelector,
        ],
        function (t, n, o) {
          var e = r("AdsAccountStore").getSelectedAccountIDX();
          return [
            { objectType: r("AdsObjectTypes").ADGROUP, fragments: t(e) },
            { objectType: r("AdsObjectTypes").CAMPAIGN, fragments: n(e) },
            { objectType: r("AdsObjectTypes").CAMPAIGN_GROUP, fragments: o(e) },
          ];
        },
        { name: i.id + ".adsDraftFragmentGroupsSelector" },
      ),
      d = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateSelector")(
          [
            o("AdsAdObjectLevelToPESelectors").getAllByFieldsSelectorMap.get(
              e,
              o("AdsPECampaignGroupSelectors").getAllByFieldsSelector,
            ),
            r("adsCreateBranchSelector")(
              r("adsPECrepeIsPackageSelector"),
              r("adsUEditorInjectEditingCampaignGroupContext")(
                r("adsUEditorCrepeCurrentLevelIDsSelector"),
              ),
              r("adsCampaignStructureSelectedIDsSelector"),
            ),
          ],
          function (n, a) {
            switch (e) {
              case "ad_set":
                return r("LoadObject").withValue(a, { creatorModuleID: i.id });
              case "ad":
                return o("AdsLoadObjectUtils")
                  .allByKey(n(a, { adset_id: null }))
                  .map(function (e) {
                    return Array.from(
                      e.reduce(function (e, t) {
                        return e.add(t.adset_id);
                      }, new Set()),
                    );
                  });
              default:
                return r("LoadObject").withValue([], { creatorModuleID: i.id });
            }
          },
          { name: i.id },
        );
      }),
      m = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateSelector")(
          [
            o("AdsAdObjectLevelToPESelectors").getAllByFieldsSelectorMap.get(
              e,
              o("AdsPECampaignGroupSelectors").getAllByFieldsSelector,
            ),
            r("adsCreateBranchSelector")(
              r("adsPECrepeIsPackageSelector"),
              r("adsUEditorInjectEditingCampaignGroupContext")(
                r("adsUEditorCrepeCurrentLevelIDsSelector"),
              ),
              r("adsCampaignStructureSelectedIDsSelector"),
            ),
          ],
          function (n, a) {
            switch (e) {
              case "campaign":
                return r("LoadObject").withValue(a, { creatorModuleID: i.id });
              case "ad_set":
                return o("AdsLoadObjectUtils")
                  .allByKey(n(a, { campaign_id: null }))
                  .map(function (e) {
                    return Array.from(
                      e.reduce(function (e, t) {
                        return e.add(t.campaign_id);
                      }, new Set()),
                    );
                  });
              case "ad":
                return o("AdsLoadObjectUtils")
                  .allByKey(n(a, { campaign_id: null }))
                  .map(function (e) {
                    return Array.from(
                      e.reduce(function (e, t) {
                        return e.add(t.campaign_id);
                      }, new Set()),
                    );
                  });
              default:
                return r("LoadObject").withValue([], { creatorModuleID: i.id });
            }
          },
          { name: i.id },
        );
      }),
      p = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateBranchSelector")(
          r("adsPECrepeIsPackageSelector"),
          m[e],
          r("adsCreateStoreSelector")(
            [r("AdsEditorCampaignStructureStore")].concat(
              m.campaign.getStores("campaign"),
              m.ad_set.getStores("ad_set"),
              m.ad.getStores("ad"),
            ),
            function () {
              var e = r("AdsEditorCampaignStructureStore").getState()
                  .currentLevel,
                t = m[e];
              if (t == null)
                return r("LoadObject").withValue(u, { creatorModuleID: i.id });
              var n = t("campaign");
              return n;
            },
            { name: i.id },
          ),
        );
      }),
      _ = r("adsCreateStoreSelector")(
        [r("AdsEditorCampaignStructureStore")].concat(
          m.campaign.getStores("campaign"),
          m.ad_set.getStores("ad_set"),
          m.ad.getStores("ad_set"),
        ),
        function () {
          return f();
        },
        { name: i.id + ".campaignStructureSelectedCampaignGroupIDsSelector" },
      ),
      f = function () {
        var e = r("AdsEditorCampaignStructureStore")
            .getState()
            .campaignGroupIDs.toArray(),
          t = r("AdsEditorCampaignStructureStore").getState().selectedIDs,
          n = r("gkx")("11126");
        if (t.length !== 0 && (n || e.length === 0)) {
          var o = r("AdsEditorCampaignStructureStore").getState().currentLevel,
            a = m[o];
          if (a == null) return u;
          var i = a("campaign");
          return i.hasValue() ? i.getValueEnforcing() : u;
        }
        return e;
      },
      g = function (t, n, r) {
        var e;
        return t != null
          ? { isNew: n(t), selectionIndex: (e = r.get(t)) != null ? e : 0 }
          : null;
      };
    function h(e, t, n, r) {
      var o = g(e, r, n),
        a = g(t, r, n);
      return o == null || a == null
        ? 0
        : (o.isNew && a.isNew) || (!o.isNew && !a.isNew)
          ? o.selectionIndex - a.selectionIndex
          : o.isNew && !a.isNew
            ? -1
            : 1;
    }
    var y = r("adsCreateSelector")(
        [_, r("AdsCampaignGroupDraftFragmentStore").getIsNewSelector],
        function (t, n) {
          var e = Array.from(new Set(t)),
            r = e.reduce(function (e, t, n) {
              return e.set(t, n);
            }, new Map());
          return e.toSorted(function (e, t) {
            return h(e, t, r, n);
          });
        },
        { name: i.id + ".getCampaignGroupsIDsSelector" },
      ),
      C = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignGroupSelector(
        "campaign_structure_tree",
      ),
      b = r("adsCreateSelector")(
        [y, r("adsCreateDynamicSelector")(C)],
        function (t, n) {
          return t.map(n);
        },
        { name: i.id + ".getCampaignStructureTreeSelector" },
      ),
      v = function (t) {
        return r("adsCreateSelector")(
          [r("adsCreateDynamicSelector")(C)],
          function (n) {
            return t
              ? n(t)
              : r("LoadObject").withError(
                  r("err")("No campaign group ID provided"),
                  { creatorModuleID: i.id },
                );
          },
          { name: i.id },
        );
      },
      S = r("adsCreateStoreSelector")(
        [r("AdsCampaignCombinedListStore")].concat(
          r("AdsAccountStore").getSelectedAccount.getStores(),
          _.getStores(),
        ),
        function () {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return r("isFalsey")(e)
            ? new Map()
            : r("AdsCampaignCombinedListStore").getForCampaignGroups(
                e.account_id,
                _(),
              );
        },
        { name: i.id + ".campaignListStoreSelector" },
      ),
      R = r("adsCreateStoreSelector")(
        [r("AdsCampaignCombinedIDNameStore")].concat(
          r("AdsAccountStore").getSelectedAccount.getStores(),
        ),
        function (t) {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return !t || !t.length || r("isFalsey")(e)
            ? new Map()
            : r("AdsCampaignCombinedIDNameStore").getForCampaignGroups(
                e.account_id,
                t,
              );
        },
        { name: i.id + ".campaignIDNameListStoreSelector" },
      ),
      L = r("adsCreateSelector")(
        [_, R],
        function (t) {
          return E(t);
        },
        { name: i.id + ".campaignIDNameListLoadedSelector" },
      ),
      E = function (t) {
        return r("immutable").Map(R(t));
      },
      k = r("adsCreateSelector")(
        [L],
        function (t) {
          return I(t);
        },
        { name: i.id + ".flattenedCampaignListSelector" },
      ),
      I = function (t) {
        var e = [];
        return (
          t.forEach(function (t) {
            var n = t.getValue();
            if (n && n.length) {
              var r = n.map(function (e) {
                return e.id;
              });
              e = e.concat(r);
            }
          }),
          e
        );
      },
      T = r("adsCreateStoreSelector")(
        [r("AdsAdgroupCombinedIDNameStore")].concat(
          r("AdsAccountStore").getSelectedAccount.getStores(),
        ),
        function (t) {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return !t || !t.length || r("isFalsey")(e)
            ? new Map()
            : r("AdsAdgroupCombinedIDNameStore").getForCampaigns(
                e.account_id,
                t,
              );
        },
        { name: i.id + ".adgroupIDNameListStoreSelector" },
      ),
      D = r("adsCreateSelector")(
        [k, T],
        function (t) {
          var e = T(t);
          return r("immutable").Map(e);
        },
        { name: i.id },
      ),
      x = r("adsCreateSelector")(
        [
          o("AdsPECampaignGroupSelectors").getAllByFieldsSelector,
          _,
          r("AdsCampaignGroupDraftFragmentStore").getIsNewSelector,
        ],
        function (t, n, r) {
          return P(t, n, r);
        },
        { name: i.id + ".campaignGroupIDAndNamesSelector" },
      ),
      $ = r("adsCreateSelector")(
        [
          o("AdsPECampaignGroupSelectors").getAllByFieldsSelector,
          _,
          r("AdsCampaignGroupDraftFragmentStore").getIsNewSelector,
        ],
        function (t, n, r) {
          return o("AdsLoadObjectUtils").getLoadedValues(P(t, n, r));
        },
        { name: i.id + ".campaignGroupIDAndNamesLoadedSelector" },
      ),
      P = function (t, n, r) {
        var e = n.reduce(function (e, t, n) {
            return e.set(t, n);
          }, new Map()),
          a = t(n, { id: null, name: null }),
          i = a.sort(function (t, n) {
            var o, a;
            return h(
              (o = t.getValue()) == null ? void 0 : o.id,
              (a = n.getValue()) == null ? void 0 : a.id,
              e,
              r,
            );
          });
        return o("AdsLoadObjectUtils").getValuesFromMap(i);
      },
      N = r("adsCreateSelector")(
        [S, o("AdsPECampaignSelectors").getAllByFieldsSelector],
        function (t, n) {
          var e = o("AdsLoadStateUtils_LEGACY")
              .getLoadedValues(t)
              .reduce(function (e, t) {
                return e.concat(t.list);
              }, []),
            r = n(e, { id: null, name: null });
          return o("AdsLoadObjectUtils").getLoadedValuesFromMap(r);
        },
        { name: i.id },
      ),
      M = r("adsCreateSelector")(
        [D],
        function (t) {
          return o("AdsLoadObjectUtils")
            .getLoadedValuesFromMap(t)
            .reduce(function (e, t) {
              return e.concat(t);
            }, []);
        },
        { name: i.id },
      ),
      w = r("adsCreateSelector")(
        [$, L, D],
        function (t, n, r) {
          var e = 0;
          n.map(function (t) {
            t.hasValue() && (e += t.getValueEnforcing().length);
          });
          var o = 0;
          return (
            r.map(function (e) {
              e.hasValue() && (o += e.getValueEnforcing().length);
            }),
            {
              campaignGroupsCount: t.length,
              campaignsCount: e,
              adgroupsCount: o,
            }
          );
        },
        { name: i.id },
      ),
      A = r("adsCreateSelector")(
        [$, L, D],
        function (t, n, r) {
          return F(t, n, r);
        },
        { name: i.id },
      ),
      F = function (t, n, a) {
        var e = o("AdsLoadObjectUtils").getLoadedValuesByKey(n),
          i = o("AdsLoadObjectUtils").getLoadedValuesByKey(a),
          l = o("AdsCampaignStructureUtils").getFlatNodeProcessor(e, i);
        return t.map(function (e) {
          return l(r("AdsObjectTypes").CAMPAIGN_GROUP, {
            id: e.id,
            name: e.name,
          });
        });
      };
    function O(e) {
      return e === r("AdsObjectTypes").CAMPAIGN_GROUP
        ? r("AdsObjectTypes").CAMPAIGN
        : r("AdsObjectTypes").ADGROUP;
    }
    function B(e, t, n, o) {
      var a,
        i = e.children
          ? e.children.map(function (r) {
              return B(r, O(t), n, e.id);
            })
          : [];
      if (n.has(e.id)) {
        var l = n.get(e.id);
        l && (i = W(i, l));
      }
      var s = e.name,
        u = !1,
        c = e.status,
        d =
          (a = n.get(r("AdsAccountStore").getSelectedAccountIDX())) == null
            ? void 0
            : a.find(function (t) {
                return t.id === e.id;
              });
      return (
        d != null &&
          ((s = d.hasFragmentName ? d.name : e.name), (u = !0), (c = d.status)),
        {
          id: e.id,
          isCollapsed: !1,
          fragmentID: e.fragmentID,
          packageConfigID: e.packageConfigID,
          isDraft: u,
          name: s,
          objectType: t,
          parentID: o != null ? o : void 0,
          hasChildren: i.length > 0,
          status: c,
          children: i,
        }
      );
    }
    function W(e, t) {
      var n = r("createMapBy")(t, function (e) {
          return e.id;
        }),
        o = r("createMapBy")(e, function (e) {
          return e.id;
        });
      return (
        o.forEach(function (e, t) {
          var r = n.get(t);
          r != null
            ? ((r.children = W(e.children, r.children)),
              (r.hasChildren = r.children.length > 0),
              r.hasFragmentName || (r.name = e.name))
            : n.set(t, e);
        }),
        Array.from(n.values())
      );
    }
    var q = r("adsCreateSelector")(
        [o("AdsPECampaignGroupSelectors").getByFieldsSelector, _],
        function (t, n) {
          var e;
          return (
            new Set(n).size === 0 ||
            !r("isTruthy")(
              (e = t(n[0], { ad_creation_package_config: null }).getValue()) ==
                null || (e = e.ad_creation_package_config) == null
                ? void 0
                : e.id,
            )
          );
        },
        { name: i.id + ".canUseFastTreeSelector" },
      ),
      U = function (t) {
        return r("adsCreateSelector")(
          [c, v(t)],
          function (n, r) {
            return J(n, [t], [r]);
          },
          { name: i.id },
        );
      },
      V = function (t) {
        return r("adsCreateSelector")(
          [U(t)],
          function (t) {
            return t.hasValue() ? t.getValueEnforcing() : [];
          },
          { name: i.id },
        );
      },
      H = r("adsCreateSelector")(
        [c, y, b],
        function (t, n, r) {
          return J(t, n, r);
        },
        { name: i.id },
      ),
      G = r("adsCreateSelector")(
        [H],
        function (t) {
          return t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id },
      ),
      z = r("adsCreateBranchSelector")(
        q,
        G,
        A,
        !0,
        i.id + ".getFlatTreeItemsSelector",
      ),
      j = r("adsCreateSelector")(
        [z, r("AdsCampaignStructureCollapseNodeProvider").toFluxSelector()],
        function (t, n) {
          return o("AdsCampaignStructureUtils").flattenNodeTreeMutable(
            t,
            n,
            !1,
            o(
              "AdsCampaignStructureTreeExperiments",
            ).shouldUseEfficientCSTRendering(),
          );
        },
        { name: i.id + ".getFlatTreeItemsRawSelector" },
      ),
      K = function (t, n) {
        return o("AdsCampaignStructureUtils").flattenNodeTreeMutable(
          t,
          n,
          !0,
          o(
            "AdsCampaignStructureTreeExperiments",
          ).shouldUseEfficientCSTRendering(),
        );
      },
      Q = r("adsCreateSelector")(
        [z, r("AdsCampaignStructureCollapseNodeProvider").toFluxSelector()],
        function (t, n) {
          return K(t, n);
        },
        { name: i.id },
      ),
      X = r("adsCreateSelector")(
        [z],
        function (t) {
          var e = t.length,
            n = 0,
            r = 0;
          return (
            t.forEach(function (e) {
              ((n += e.children.length),
                e.children.forEach(function (e) {
                  r += e.children.length;
                }));
            }),
            { campaignGroupsCount: e, campaignsCount: n, adgroupsCount: r }
          );
        },
        { name: i.id },
      ),
      Y = r("adsCreateBranchSelector")(
        q,
        X,
        w,
        !0,
        i.id + ".getTreeItemsV3CountSelector",
      ),
      J = function (t, n, a) {
        var e,
          l,
          s = o("AdsLoadObjectUtils").allForceWithValues(a),
          u = new Map(),
          c = [];
        for (var d of t) {
          var m = d.fragments,
            p = d.objectType;
          for (var _ of m.entries()) {
            var f = _[0],
              g = _[1];
            if (g.hasValueWithoutError()) {
              var h,
                y = g.getValueEnforcing(),
                C = (h = y.values.get("name")) == null ? void 0 : h.newValue,
                b = y.fragmentID;
              p === "CAMPAIGN_GROUP" && c.push(y);
              var v = y.parentAdObjectID;
              if (v == null && p === "CAMPAIGN_GROUP")
                v = r("AdsAccountStore").getSelectedAccountIDX();
              else if (v == null && p === "CAMPAIGN") {
                var S,
                  R =
                    (S = y.values.get("campaign_id")) == null
                      ? void 0
                      : S.newValue;
                R != null && (v = R);
              }
              if (o("AdsCampaignStructureUtils").isFBID(b)) {
                var L,
                  E,
                  k,
                  I = (L = u.get(v)) != null ? L : [],
                  T = (E = u.get(f)) != null ? E : [];
                (I.push({
                  children: T,
                  hasChildren: T.length > 0,
                  hasFragmentName: C != null,
                  fragmentID: b,
                  id: f,
                  isCollapsed: !1,
                  isDraft: !0,
                  name: C != null ? C : "",
                  objectType: p,
                  parentID: v,
                  status:
                    (k = y.values.get("status")) == null ? void 0 : k.newValue,
                }),
                  u.set(v, I));
              }
            }
          }
        }
        if (s.hasError())
          return r("LoadObject").withError(s.getErrorEnforcing(), {
            creatorModuleID: i.id,
          });
        if (s.hasValue() && s.getValueEnforcing() == null) {
          var D,
            x =
              (D = u.get(r("AdsAccountStore").getSelectedAccountIDX())) == null
                ? void 0
                : D.find(function (e) {
                    return e.id === n[0];
                  });
          if (x == null)
            return r("LoadObject").withError(
              r("err")(
                "Campaign structure tree missing draft, non-draft top-level campaign group",
              ),
              { creatorModuleID: i.id },
            );
        }
        var $ = c.find(function (e) {
          return e.objectID === n[0];
        });
        return r("LoadObject").withValue(
          (e =
            (l = s.getValue()) == null
              ? void 0
              : l.map(function (e, t) {
                  var o, a;
                  return B(
                    e != null
                      ? e
                      : {
                          id: n[t],
                          fragmentID: $ == null ? void 0 : $.fragmentID,
                          packageConfigID:
                            $ == null || (o = $.adCreationPackageConfig) == null
                              ? void 0
                              : o.id,
                          children: [],
                          name: "",
                          status:
                            $ == null || (a = $.values.get("status")) == null
                              ? void 0
                              : a.newValue,
                        },
                    r("AdsObjectTypes").CAMPAIGN_GROUP,
                    u,
                    null,
                  );
                })) != null
            ? e
            : [],
          { creatorModuleID: i.id },
        );
      };
    function Z() {
      var e = o("react-compiler-runtime").c(4),
        t = o("AdsFluxHooks").useAdsSelector(z),
        n = o("Laminar").useProvider(
          r("AdsCampaignStructureCollapseNodeProvider"),
        ),
        a;
      e[0] !== n || e[1] !== t
        ? ((a = function () {
            return K(t, n);
          }),
          (e[0] = n),
          (e[1] = t),
          (e[2] = a))
        : (a = e[2]);
      var i = a,
        l;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = o(
              "AdsCampaignStructureTreeExperiments",
            ).shouldUseEfficientCSTRendering()),
            (e[3] = l))
          : (l = e[3]),
        r("useAdsGatedMemo")(l, i)
      );
    }
    var ee = r("adsCreateSelector")(
        [j, r("adsCampaignStructureSelectedIDsSelector")],
        function (t, n) {
          return n
            .map(function (e) {
              return t.find(function (t) {
                return t.id === e;
              });
            })
            .filter(Boolean)
            .sort(function (e, n) {
              return t.indexOf(e) - t.indexOf(n);
            });
        },
        { name: i.id },
      ),
      te = function (t, n) {
        return t.filter(function (e) {
          return o("AdsObjectTypeUtils").toObjectLevel(e.objectType) === n;
        });
      },
      ne = r("adsCreateSelector")(
        [j, r("adsCampaignStructureCurrentLevelSelector")],
        function (t, n) {
          return te(t, n);
        },
        { name: i.id + ".getFlattenedCurrentLevel" },
      ),
      re = r("adsCreateSelector")(
        [z],
        function (t) {
          return te(t, "campaign");
        },
        { name: i.id + ".getFlattenedCampaignGroups" },
      ),
      oe = r("adsCreateSelector")(
        [z],
        function (t) {
          return te(t, "campaign").map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      ae = r("adsCreateSelector")(
        [j],
        function (t) {
          return te(t, "ad_set").map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      ie = r("adsCreateSelector")(
        [j],
        function (t) {
          return te(t, "ad").map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      le = r("adsCreateSelector")(
        [ne],
        function (t) {
          return t.map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      se = r("adsCreateSelector")(
        [x, L, D],
        function (t, n, r) {
          var e = o("AdsLoadObjectUtils").anyLoadingOrEmpty(t.values()),
            a = n.toArray().some(function (e) {
              return e.isLoading() || !e.hasValue();
            }),
            i = r.toArray().some(function (e) {
              return e.isLoading() || !e.hasValue();
            });
          return t.length === 0 || e || a || i;
        },
        { name: i.id },
      ),
      ue = r("adsCreateSelector")(
        [b],
        function (t) {
          return o("AdsLoadObjectUtils").anyLoadingOrEmpty(t);
        },
        { name: i.id },
      ),
      ce = r("adsCreateBranchSelector")(
        q,
        ue,
        se,
        !0,
        i.id + ".getTreeItemsIsLoadingSelector",
      ),
      de = r("adsCreateStoreSelector")(
        [r("AdsCampaignStructureSearchAndFilterDataProvider").toFluxStore()],
        function () {
          return r("AdsCampaignStructureSearchAndFilterDataProvider")
            .toFluxStore()
            .getState().queryString;
        },
        { name: i.id + ".queryStringStoreSelector" },
      ),
      me = r("adsCreateSelector")(
        [de, $, N, M],
        function (t, n, r, a) {
          return o(
            "AdsCampaignStructureUtils",
          ).formatAdObjectsForDisplayInSearchAndFilterMutableResult(t, n, r, a);
        },
        { name: i.id },
      );
    function pe(e) {
      return e.map(function (e) {
        return { id: e.id, name: e.name };
      });
    }
    var _e = r("adsCreateSelector")(
        [de, Q],
        function (t, n) {
          return o(
            "AdsCampaignStructureUtils",
          ).formatAdObjectsForDisplayInSearchAndFilterMutableResult(
            t,
            pe(te(n, "campaign")),
            pe(te(n, "ad_set")),
            pe(te(n, "ad")),
          );
        },
        { name: i.id },
      ),
      fe = r("adsCreateBranchSelector")(
        q,
        _e,
        me,
        !0,
        i.id + ".getSearchAndFilterResultSelector",
      ),
      ge = r("adsCreateSelector")(
        [r("adsPEManageAdsSectionSelector")],
        function (t) {
          return t ? r("AdsObjectUtils").getObjectTypeFromNavSection(t) : null;
        },
        { name: i.id + ".getSelectedObjectTypeSelector" },
      );
    ((l.adsDraftFragmentGroupsSelector = c),
      (l.parentCampaignIDsSelector = d),
      (l.parentCampaignGroupIDsSelector = m),
      (l.parentCampaignGroupIDsSelectorNew = p),
      (l.getCampaignGroupsIDsSelector = y),
      (l.getDynamicCampaignStructureTreeSelector = C),
      (l.campaignIDNameListStoreSelector = R),
      (l.getFlatTreeItemsFastPreloadSelector = V),
      (l.getFlatTreeItemsSelector = z),
      (l.getFlatTreeItemsWithCollapsedSelector = Q),
      (l.getTreeItemsV3CountSelector = Y),
      (l.getFlatTreeItemsFastLoadSelectorLogic = J),
      (l.useGetFlatTreeItemsWithCollapsedSelector = Z),
      (l.getSelectedFlatTreeItemsSelector = ee),
      (l.getFlattenedCampaignGroups = re),
      (l.getFlattenedCampaignGroupIDs = oe),
      (l.getFlattenedCampaignIDs = ae),
      (l.getFlattenedAdgroupIDs = ie),
      (l.getFlattenedCurrentLevelIDs = le),
      (l.getTreeItemsIsLoadingSelector = ce),
      (l.getSearchAndFilterResultSelector = fe),
      (l.getSelectedObjectTypeSelector = ge));
  },
  98,
);
