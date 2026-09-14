__d(
  "AdsPlacementUISpecCreateUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsODAXConversionChannelsUtils",
    "AdsODAXUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPluginList",
    "AdsPlacementsFacebookPlatformPlugin",
    "BUIThreeStateCheckboxEnum",
    "firstx",
    "immutable",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === "GROUP"
        ? s._(
            /*BTDS*/ "This placement is not available when using {boldEventResponses} as your engagement type.",
            [
              s._param(
                "boldEventResponses",
                u.jsx("strong", { children: "Event responses" }),
              ),
            ],
          )
        : e === "PLATFORM"
          ? s._(
              /*BTDS*/ "This placement category is not available when using {boldEventResponses} as your engagement type.",
              [
                s._param(
                  "boldEventResponses",
                  u.jsx("strong", { children: "Event responses" }),
                ),
              ],
            )
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function d(e, t, n) {
      if ((n == null ? void 0 : n.type) !== "OBJECTIVE") return !1;
      var a = e.objective,
        i = e.optimizationGoal,
        l = e.promotedObjectType,
        s =
          o("AdsODAXUtils").maybeTranslateObjective(a, l, i) ===
          r("AdsAPIObjectives").EVENT_RESPONSES,
        u = o(
          "AdsODAXConversionChannelsUtils",
        ).ON_YOUR_AD_PROMOTED_OBJECT_TYPES.some(function (e) {
          return e === l;
        });
      return (
        a === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        s &&
        u &&
        t !== r("AdsPlacementsFacebookPlatformPlugin").key
      );
    }
    function m(e, t, n) {
      return r("immutable")
        .OrderedMap()
        .withMutations(function (o) {
          return e.reduce(function (e, o) {
            var a = n(o);
            return r("isTruthy")(a) ? e.set(t(o), a) : e;
          }, o);
        });
    }
    function p(e) {
      var t = e.every(function (e) {
        var t = e.ineligibilityReason;
        return !!t;
      });
      return t ? e.first().ineligibilityReason : null;
    }
    function _(e, t) {
      var n, a;
      if (
        !e.isEnabled(t.capabilities, t.account) ||
        e.isHiddenInPlacementUI === !0 ||
        (e.shouldHideInPlacementUI == null
          ? void 0
          : e.shouldHideInPlacementUI(t)) === !0
      )
        return null;
      var i = e.getIneligibilityReason(t),
        l = !i,
        s;
      if (i) {
        var u;
        ((s = o("AdsPlacementIneligibilityReason").renderReason(
          "GROUP",
          i,
          (u = t.buyWithIntegrationPartner) != null ? u : "NONE",
        )),
          d(t, e.platformKey, i) && (s = c("GROUP")));
      }
      var m = null;
      l &&
        (m = e.isActive(t.spec)
          ? r("BUIThreeStateCheckboxEnum").CHECKED
          : r("BUIThreeStateCheckboxEnum").UNCHECKED);
      var p = e.getPlacementSpecificPreviewInfo
        ? e.getPlacementSpecificPreviewInfo(
            t.capabilities,
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          )
        : null;
      return {
        pluginKey: e.key,
        pluginApiPosition: e.apiPosition,
        pluginPlatformKey: e.platformKey,
        placementSpecificPreviewInfo: p,
        label: (n = e.nameWithPlatform) != null ? n : e.name,
        isEligible: l,
        ineligibilityReason: i,
        ineligibilityReasons: s,
        mediaRecommendation:
          (a = e.mediaRecommendation) == null ? void 0 : a.copy,
        placementPreviewImage: e.placementPreviewImage,
        placementPreviewReactComponent: e.placementPreviewReactComponent,
        placementPreviewVideo: e.placementPreviewVideo,
        selectionStatus: m,
        isInactiveByDefault: e.isInactiveByDefault,
      };
    }
    function f(e, t) {
      if (t == null || !e.isEnabled(t.capabilities)) return null;
      var n = m(
        e.positions,
        function (e) {
          var t = e.key;
          return t;
        },
        function (e) {
          return _(e, t);
        },
      );
      if (n.size === 0) return null;
      var a = p(n),
        i = !a,
        l;
      if (a) {
        var s;
        ((l = o("AdsPlacementIneligibilityReason").renderReason(
          "PLATFORM",
          a,
          (s = t.buyWithIntegrationPartner) != null ? s : "NONE",
        )),
          d(t, e.key, a) && (l = c("PLATFORM")));
      }
      var u = null;
      if (i) {
        var f = n.filter(function (e) {
            var t = e.selectionStatus;
            return t === r("BUIThreeStateCheckboxEnum").CHECKED;
          }),
          g = n.filter(function (e) {
            var t = e.ineligibilityReason;
            return !t;
          });
        u =
          g.size === f.size
            ? r("BUIThreeStateCheckboxEnum").CHECKED
            : f.size > 0
              ? r("BUIThreeStateCheckboxEnum").PARTIAL
              : r("BUIThreeStateCheckboxEnum").UNCHECKED;
      }
      var h = e.getPlacementSpecificPreviewInfo
        ? e.getPlacementSpecificPreviewInfo(
            t.capabilities,
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          )
        : null;
      return {
        label: e.name,
        isEligible: i,
        ineligibilityReasonType: a == null ? void 0 : a.type,
        ineligibilityReasons: l,
        mediaRecommendation: e.mediaRecommendation,
        positions: n.size > 0 ? n : r("immutable").OrderedMap(),
        selectionStatus: u,
        placementPreviewImage: e.placementPreviewImage,
        placementPreviewReactComponent: e.placementPreviewReactComponent,
        placementPreviewVideo: e.placementPreviewVideo,
        placementSpecificPreviewInfo: h,
        subheader: e.subheader,
      };
    }
    function g(e, t) {
      var n = m(
        e,
        function (e) {
          var t = e.key;
          return t;
        },
        function (e) {
          return f(e, t);
        },
      );
      return { platforms: n };
    }
    function h(e, t) {
      return m(
        e,
        function (e) {
          var t = e.key;
          return t;
        },
        function (e) {
          return f(e, t);
        },
      );
    }
    function y(e, t) {
      var n = e.ineligibilityReasons;
      return babelHelpers.extends({}, e, {
        isEligible: e.isEligible && t.isEligible,
        ineligibilityReasons: n != null ? n : t.ineligibilityReasons,
      });
    }
    function C(e, t) {
      var n = e.positions.mergeWith(y, t.positions),
        r = e.ineligibilityReasons;
      return babelHelpers.extends({}, e, {
        isEligible: e.isEligible && t.isEligible,
        ineligibilityReasons: r != null ? r : t.ineligibilityReasons,
        positions: n,
      });
    }
    function b(e) {
      if (!e.length) return { platforms: r("immutable").OrderedMap() };
      var t = g(
          o("AdsPlacementPluginList").getOrderedPlatforms(r("firstx")(e)),
          r("firstx")(e),
        ),
        n = t.platforms,
        a = e.reduce(function (e, t) {
          var n = g(o("AdsPlacementPluginList").getOrderedPlatforms(t), t),
            r = n.platforms;
          return e.mergeWith(C, r);
        }, n);
      return { platforms: a };
    }
    ((l.shouldOverrideForEngagementOnAdEventResponses = d),
      (l.createPositionSpec = _),
      (l.createGroupSpec = f),
      (l.createUISpec = g),
      (l.createUISpecByPositionGroup = h),
      (l.mergePlatformsSpec = C),
      (l.createUIBulkSpec = b));
  },
  226,
);
