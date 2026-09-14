__d(
  "isDofTextEligibleSelectorLogic",
  [
    "AdsAPIObjectives",
    "AdsApplicationUtils",
    "AdsAssetFeedUtils",
    "AdsBuyingTypes",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsDCOUtils",
    "AdsDPATextGenUtils",
    "AdsDofTextSelectors",
    "AdsDynamicAdMultiTextUtils",
    "AdsODAXUtils",
    "AdsUEditorHostIDs",
    "AdsUnifiedCreativeAPIFields",
    "areEqual",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("immutable").Set([
        r("AdsUEditorHostIDs").CREATION,
        r("AdsUEditorHostIDs").EDITING,
        r("AdsUEditorHostIDs").EDITING_CREATIVE_CONTAINER,
      ]),
      c = new Set([(s = r("AdsUnifiedCreativeAPIFields")).message, s.headline]),
      d = new Set([s.message]),
      m = new Set([s.message, s.headline]);
    function p(e, t, n, r, o, a, i, l, s, c, d) {
      return (
        c === void 0 && (c = null),
        d === void 0 && (d = !1),
        !u.contains(n) || !_(l, e, r, o, i, a, s, c, d)
          ? !1
          : t
            ? !0
            : f(l, e)
              ? g(e) || (h(e) && y(l, e))
              : !1
      );
    }
    function _(e, t, n, a, i, l, s, u, m) {
      return (
        u === void 0 && (u = null),
        m === void 0 && (m = !1),
        t.every(function (t) {
          var p,
            _ = t.adgroup,
            f = t.campaign,
            g = t.campaignGroup;
          if (!g || !f || !_ || o("AdsApplicationUtils").isCreativeStudio())
            return !1;
          var h = o("AdsChildAttachmentsUtils").isCarouselAd(_) && !d.has(e),
            y =
              o("AdsAssetFeedUtils").isPACAdgroupFromRecord(_) &&
              !o("AdsAssetFeedUtils").hasCarouselFormat(_) &&
              c.has(e),
            C =
              (s ===
                o("AdsDofTextSelectors").DofTextEligibilityCallsite
                  .TEXT_SUGGESTIONS &&
                o("AdsDPATextGenUtils").isDynamicAdAndEligibleForTextGenQE(
                  _,
                )) ||
              o("AdsDynamicAdMultiTextUtils").isEligibleDynamicAdForMultiText(
                _,
              ),
            b = o("AdsAssetFeedUtils").isClickToMultiDestAds(_) && c.has(e);
          if (
            (((o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(_) &&
              !o("AdsAssetFeedUtils").isDofAdgroupFromSpec(_) &&
              !y &&
              !b) ||
              o("AdsCollectionsAdUtils").isCollectionsAd(_.creative) ||
              h) &&
              !C) ||
            n ||
            (!a && !C) ||
            i ||
            (m && e === r("AdsUnifiedCreativeAPIFields").headline) ||
            ((p = _.creative) == null
              ? void 0
              : p.branded_content_boosting_type) === "SPONSOR_INLINE"
          )
            return !1;
          var v = o("AdsODAXUtils").maybeTranslateObjective(
            u || g.objective,
            l,
            t.campaign.optimization_goal,
          );
          return (
            o("AdsDCOUtils").isSupportedObjectiveForTextDOF(g.buying_type, v) ||
            (C &&
              o("AdsDCOUtils").isSupportedObjectiveForTextGen(g.buying_type, v))
          );
        })
      );
    }
    function f(e, t) {
      return t.every(function (t) {
        var n = t.campaign,
          o = t.campaignGroup;
        return !(
          o.objective !== r("AdsAPIObjectives").APP_INSTALLS ||
          o.buying_type !== r("AdsBuyingTypes").AUCTION ||
          n.is_dynamic_creative === !0 ||
          n.is_dynamic_creative_optimization === !0 ||
          !m.has(e)
        );
      });
    }
    function g(e) {
      return e.every(function (e) {
        return !o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(
          e.adgroup,
        );
      });
    }
    function h(e) {
      return e.every(function (e) {
        return o("AdsAssetFeedUtils").isDofAdgroupFromSpec(e.adgroup);
      });
    }
    function y(t, n) {
      var o = C(t);
      if (o == null) return !1;
      var a = n.map(function (e) {
          return e.adgroup;
        }),
        i = a.map(function (e) {
          var t,
            n =
              (t = e.creative) == null || (t = t.asset_feed_spec) == null
                ? void 0
                : t[o];
          return n == null
            ? void 0
            : n.map(function (e) {
                return e.text;
              });
        });
      return i.every(function (t) {
        return (e || (e = r("areEqual")))(i[0], t);
      });
    }
    function C(e) {
      return e === r("AdsUnifiedCreativeAPIFields").message
        ? "bodies"
        : e === r("AdsUnifiedCreativeAPIFields").headline
          ? "titles"
          : null;
    }
    l.isDofTextEligibleSelectorLogic = p;
  },
  98,
);
