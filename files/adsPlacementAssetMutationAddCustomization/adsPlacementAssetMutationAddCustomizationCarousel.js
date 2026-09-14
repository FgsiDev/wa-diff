__d(
  "adsPlacementAssetMutationAddCustomizationCarousel",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedConstant",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "MarketingMessageSetupVisibilityUtils",
    "adsPlacementAssetMutationAddCarouselCardDetail",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l,
        s = e,
        u = (i = s.creative) == null ? void 0 : i.asset_feed_spec,
        c = u == null ? void 0 : u.asset_customization_rules,
        d = u == null ? void 0 : u.carousels;
      if (d == null || c == null) return s;
      var m = t.getIn(["carousel_label", "name"]),
        p = d.find(function (e) {
          return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === m;
        });
      if (p == null) return s;
      var _ = r("immutable").Map(((l = {}), (l.name = a), l)),
        f = p.setIn([o("AdsAssetFeedConstant").ADLABELS, 0], _),
        g = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).convertPlacementListToTargeting(n),
        h = t
          .set("carousel_label", _)
          .set("customization_spec", g)
          .delete("use_existing_post")
          .delete("use_ig_existing_post");
      if (
        ((s = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.carousels.set(
            d.push(f),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.asset_customization_rules.set(c.push(h)),
        )(s)),
        o(
          "MarketingMessageSetupVisibilityUtils",
        ).isCreativeEditorEligibleForMarketingMessageSetup(n))
      ) {
        var y = u == null ? void 0 : u.titles,
          C = u == null ? void 0 : u.descriptions,
          b = f.getIn(["child_attachments"]);
        b.map(function (e, t) {
          var n,
            i,
            l,
            u,
            c = e.getIn(["title_label", "name"]),
            d = e.getIn(["description_label", "name"]),
            m = String(
              (n =
                y == null ||
                (i = y.find(function (e) {
                  return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === c;
                })) == null
                  ? void 0
                  : i.get("text")) != null
                ? n
                : "",
            ),
            p = String(
              (l =
                C == null ||
                (u = C.find(function (e) {
                  return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === d;
                })) == null
                  ? void 0
                  : u.get("text")) != null
                ? l
                : "",
            ),
            _ = (m + "\n" + p).trim();
          s = r("adsPlacementAssetMutationAddCarouselCardDetail")(
            s,
            a,
            t,
            "descriptions",
            { text: _ },
          );
        });
      }
      return s;
    }
    l.default = e;
  },
  98,
);
