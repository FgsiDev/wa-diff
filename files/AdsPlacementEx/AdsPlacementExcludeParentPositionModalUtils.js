__d(
  "AdsPlacementExcludeParentPositionModalUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsInstreamVideoValidationUtils",
    "AdsPlacementDependentPlatformGatingUtils",
    "AdsPlacementParentPositionTooltipUtils",
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementPositionPlugins",
    "AdsPlacementSOOBundleGatingUtils",
    "AdsPlacementSelectionHostIDs",
    "AdsPlacementSoftOptOutUtils",
    "AdsPlacementUIUtils",
    "AdsPlacementsCreativeQualityUtils",
    "AdsPlacementsFacebookInstreamVideosPositionPlugin",
    "AdsPlacementsInstagramExploreHomePositionPlugin",
    "AdsPlacementsInstagramExplorePositionPlugin",
    "AdsPlacementsInstagramFeedPositionPlugin",
    "SUIThreeStateCheckboxEnum",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return t == null
        ? !1
        : e === r("AdsPlacementsFacebookInstreamVideosPositionPlugin").key
          ? o("AdsInstreamVideoValidationUtils").getIsInstreamOnlyAllowed(t)
          : !1;
    }
    function u(e, t, n, r) {
      return c(e, t) && n != null && r.isEligible;
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = !1),
        o(
          "AdsPlacementSOOBundleGatingUtils",
        ).isAccountEligibleForSOOExpansionBundle(t)
          ? n
          : e ===
              o("AdsPlacementSelectionHostIDs").AdsPlacementSelectionHostIDs
                .ADS_UEDITOR_CAMPAIGN_PLACEMENT_SECTION_CONTAINER &&
            t !== r("AdsAPIObjectives").OUTCOME_SALES &&
            d() &&
            !o("AdsPlacementSoftOptOutUtils").isLeadGenObjective(t)
      );
    }
    var d = function () {
        return r("gkx")("9442") || r("gkx")("19359");
      },
      m = function (t, n) {
        if (
          !(
            t === r("AdsPlacementsInstagramFeedPositionPlugin").key &&
            n.has(r("AdsPlacementsInstagramExplorePositionPlugin").key) &&
            !n.has(r("AdsPlacementsInstagramExploreHomePositionPlugin").key)
          )
        )
          return n;
        var e = [];
        for (var o of n)
          (e.push(o),
            o === r("AdsPlacementsInstagramExplorePositionPlugin").key &&
              e.push(r("AdsPlacementsInstagramExploreHomePositionPlugin").key));
        return new Set(e);
      };
    function p(e, t) {
      var n = o(
        "AdsPlacementPositionGroupPluginList",
      ).getEligiblePositionKeysFromPositionGroup(e.key, t);
      return n
        .map(function (e) {
          return r("AdsPlacementPositionPlugins").get(e);
        })
        .filter(function (e) {
          return e != null && _(e, t).size > 0;
        });
    }
    function _(e, t) {
      var n;
      return (
        (n = e.childPlacements) != null ? n : o("immutable").OrderedSet([])
      ).filter(function (n) {
        return !o(
          "AdsPlacementDependentPlatformGatingUtils",
        ).shouldSkipPlacementParentDependency(n, e.key, t.capabilities);
      });
    }
    function f(e, t) {
      var n = o("AdsPlacementPositionGroupPluginList")
          .getEligiblePositionsFromPositionGroup(e.key, t)
          .filter(function (e) {
            var n = o(
              "AdsPlacementsCreativeQualityUtils",
            ).getPublisherPlatformsPositions(e.platformKey, t);
            return n.includes(e.apiPosition);
          }),
        a = n.filter(function (e) {
          return _(e, t).size > 0;
        }),
        i = n.toArray().map(function (e) {
          return e.key;
        });
      return a
        .toArray()
        .flatMap(function (e) {
          return _(e, t).toArray();
        })
        .filter(function (e) {
          var n = r("AdsPlacementPositionPlugins").get(e);
          if (n == null) return !1;
          var l = o(
            "AdsPlacementsCreativeQualityUtils",
          ).getPublisherPlatformsPositions(n.platformKey, t);
          return (
            !i.includes(e) &&
            a.find(function (t) {
              return t.key !== e;
            }) &&
            l.includes(n.apiPosition)
          );
        });
    }
    function g(e, t) {
      var n = o("AdsPlacementPositionGroupPluginList")
          .getOrderedPositionGroups(t)
          .filter(function (t) {
            return t.key === e;
          }),
        r = n.size > 0 ? n.first() : null;
      return r == null ? null : r;
    }
    function h(e, t, n) {
      var a,
        i = r("AdsPlacementPositionPlugins").get(t),
        l =
          (a = i.childPlacements) == null
            ? void 0
            : a.filter(function (t) {
                var n = r("AdsPlacementPositionPlugins").get(t);
                if (
                  n == null ||
                  o(
                    "AdsPlacementDependentPlatformGatingUtils",
                  ).shouldSkipPlacementParentDependency(
                    n.key,
                    i.key,
                    e.capabilities,
                  ) ||
                  (n.key ===
                    r("AdsPlacementsFacebookInstreamVideosPositionPlugin")
                      .key &&
                    o(
                      "AdsInstreamVideoValidationUtils",
                    ).getIsInstreamOnlyAllowed(e))
                )
                  return !1;
                var a = o(
                  "AdsPlacementsCreativeQualityUtils",
                ).getPublisherPlatformsPositions(n.platformKey, e);
                return a.includes(n.apiPosition);
              });
      if (n != null) {
        var s = n
          .filter(function (t) {
            return (
              t.parentPlacements != null &&
              t.parentPlacements.has(i.key) &&
              !o(
                "AdsPlacementDependentPlatformGatingUtils",
              ).shouldSkipPlacementParentDependency(
                t.key,
                i.key,
                e.capabilities,
              )
            );
          })
          .map(function (e) {
            return e.key;
          });
        l = l != null ? l.concat(s) : o("immutable").OrderedSet(s);
      }
      return (
        (l = o("immutable").OrderedSet(
          Array.from(
            m(i == null ? void 0 : i.key, l != null ? new Set(l) : new Set()),
          ),
        )),
        { parentPositionPlugin: i, childPlacementsPlugin: l }
      );
    }
    function y(e, t) {
      return s._(
        /*BTDS*/ "Excluding {position name} will exclude {count} additional placements",
        [
          s._param("position name", e.nameWithPlatform),
          s._param("count", t.size),
        ],
      );
    }
    function C(e, t, n) {
      if (t.size === 1) {
        var r = h(e, t.first().key, n),
          a = r.childPlacementsPlugin,
          i = r.parentPositionPlugin;
        return y(i, a);
      }
      if (t.size > 1) {
        var l = b(e, t, n);
        return s._(
          /*BTDS*/ "Excluding these placements will exclude {count} additional placements",
          [s._param("count", l.size)],
        );
      }
      return o("AdsPlacementParentPositionTooltipUtils")
        .defaultTextForNoParentPlacements;
    }
    function b(e, t, n) {
      return t
        .flatMap(function (t) {
          var r = h(e, t.key, n),
            o = r.childPlacementsPlugin;
          return o;
        })
        .toOrderedSet();
    }
    function v(e, t) {
      var n,
        a =
          (n = e.parentPlacements) == null
            ? void 0
            : n.find(function (n) {
                return !o(
                  "AdsPlacementDependentPlatformGatingUtils",
                ).shouldSkipPlacementParentDependency(e.key, n, t);
              });
      return a == null ? null : r("AdsPlacementPositionPlugins").get(a);
    }
    function S(t, n) {
      var a,
        i = r("AdsPlacementPositionPlugins").get(t),
        l = i == null ? o("immutable").OrderedSet() : _(i, n),
        s = l.size > 0,
        u =
          r("gkx")("26693") && e(t, n)
            ? o("immutable").OrderedSet()
            : ((a = i == null ? void 0 : i.parentPlacements) != null
                ? a
                : o("immutable").OrderedSet()
              ).filter(function (e) {
                return !o(
                  "AdsPlacementDependentPlatformGatingUtils",
                ).shouldSkipPlacementParentDependency(t, e, n.capabilities);
              }),
        c = u.size > 0,
        d = l.filter(function (e) {
          var t = r("AdsPlacementPositionPlugins").get(e);
          if (t == null) return !1;
          var a = o(
            "AdsPlacementsCreativeQualityUtils",
          ).getPublisherPlatformsPositions(t.platformKey, n);
          return a.includes(t.apiPosition);
        });
      return {
        positionPlugin: i,
        isParent: s,
        hasParent: c,
        childPlacements: l,
        includedChildPlacements: d,
        parentPlacements: u,
      };
    }
    function R(e, t, n) {
      var a = r("immutable").Set();
      return (
        e.forEach(function (e) {
          e == null ||
            e.positions.forEach(function (e, i) {
              if (
                e.selectionStatus ===
                o("AdsPlacementUIUtils").CHECKBOX_STATES.UNCHECKED
              ) {
                var l,
                  s = r("AdsPlacementPositionPlugins").get(i),
                  u =
                    s == null || (l = s.parentPlacements) == null
                      ? void 0
                      : l.first();
                u != null && t.has(u) && !n.has(u) && (a = a.add(i));
              }
            });
        }),
        a
      );
    }
    function L(t, n, a, i) {
      if (t == null) return !1;
      var l = n.pluginKey,
        s = r("AdsPlacementPositionPlugins").get(l),
        u = n.isEligible,
        c = n.selectionStatus === r("SUIThreeStateCheckboxEnum").UNCHECKED,
        d =
          (s == null ? void 0 : s.parentPlacements) != null &&
          s.parentPlacements.size > 0
            ? s.parentPlacements.first()
            : null,
        m =
          a ===
          o("AdsPlacementSelectionHostIDs").AdsPlacementSelectionHostIDs
            .ADS_UEDITOR_CAMPAIGN_PLACEMENT_SECTION_CONTAINER;
      return d != null
        ? l === "threads/stream" && r("gkx")("5514")
          ? !1
          : c &&
            u &&
            m &&
            !e(n.pluginKey, i) &&
            o(
              "AdsPlacementSOOBundleGatingUtils",
            ).isAccountEligibleForSOOExpansionBundle(i.objective) &&
            !o(
              "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
            ).getIsPositionParentInTargetSpecOrSOO(s, i)
        : !1;
    }
    function E(e) {
      var t = r("immutable").Set();
      return (
        e.forEach(function (e) {
          e.positions.forEach(function (e, n) {
            e.selectionStatus ===
              o("AdsPlacementUIUtils").CHECKBOX_STATES.UNCHECKED &&
              e.isEligible &&
              (t = t.add(n));
          });
        }),
        t
      );
    }
    function k(e) {
      var t = r("immutable").Set();
      return (
        e.forEach(function (e) {
          e.positions.forEach(function (e, n) {
            e.selectionStatus ===
              o("AdsPlacementUIUtils").CHECKBOX_STATES.CHECKED &&
              (t = t.add(n));
          });
        }),
        t
      );
    }
    function I(e, t) {
      return (
        e === r("AdsPlacementsInstagramExplorePositionPlugin").key &&
        t[r("AdsPlacementsInstagramExploreHomePositionPlugin").key] != null
      );
    }
    function T(e, t) {
      var n = [],
        a = [];
      return (
        o("AdsInstreamVideoValidationUtils").getIsInstreamOnlyAllowed(t) &&
          a.push(r("AdsPlacementsFacebookInstreamVideosPositionPlugin").key),
        (n = e.filter(function (e) {
          return !a.includes(e);
        })),
        n
      );
    }
    ((l.getIsInstreamOnlyAllowedForUIChecks = e),
      (l.shouldShowBundlePlacementModalForEligibleParentPosition = u),
      (l.shouldShowBundlePlacementModalBaseChecks = c),
      (l.isAccountPassingBundlePlacementGK = d),
      (l.getUpdatedIGPositionsWithIGExploreHomeIfNeeded = m),
      (l.getParentPlacementsInGroupPlugin = p),
      (l.getChildPlacementsOutsideGroupingPlugin = f),
      (l.getGroupingPluginFromEligiblePositionGroups = g),
      (l.getParentPlacementDataForModalContent = h),
      (l.getBundlePlacementModalHeader = y),
      (l.getBundlePlacementModalHeaderFromParentPlacements = C),
      (l.getAllChildPlacements = b),
      (l.getFirstParentPlacementPlugin = v),
      (l.getPositionPluginInfo = S),
      (l.getUncheckedPositionsWithFullyOptedOutParent = R),
      (l.getShouldPositionBeDisabledWithSoftOptOutCheck = L),
      (l.getAllUnCheckedPositionPlacements = E),
      (l.getAllCheckedPositionPlacements = k),
      (l.shouldSyncIGExploreHomeWithExplore = I),
      (l.filterOutSpecialCasePositionsFromParentChildExclusions = T));
  },
  226,
);
