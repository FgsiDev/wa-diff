__d(
  "adsPlacementAssetMutationAddCustomizationMedia",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedConstant",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsDOFUtils",
    "AdsInterfacesLogger",
    "AdsLocalizedPlacementsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "FBLogger",
    "adsConvertAdObjectRecordToPlainJS",
    "adsPlacementAssetMutationAddCustomizationCarousel",
    "adsPlacementAssetMutationRemoveOrphanedAssets",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Map(
        ((e = {}),
        (e.link_url_label =
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.LINK_URLS),
        (e.body_label =
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES),
        (e.title_label =
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.TITLES),
        e),
      );
    function u(e, t, n, a, i) {
      var l,
        s = t.getIn([a, "name"]),
        u = e.getIn(i);
      if (u == null)
        return (
          r("AdsInterfacesLogger").log({
            eventName: "unhandled_js_exception",
            data: {
              adgroup_id: e.id,
              adgroup_spec: e.toJS(),
              message: i.toString(),
              meta_message: JSON.stringify(u),
              event_source:
                "ads_placement_asset_customization_media_default_media_is_null",
            },
          }),
          r("FBLogger")("ads").debug(
            "Could not pull mediaList for mediaPath %s",
            i.join(","),
          ),
          e
        );
      var c = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(u, s),
        d = c.index,
        m = u.get(d),
        p = m
          .get("adlabels")
          .push(r("immutable").Map(((l = {}), (l.name = n), l))),
        _ = u.set(d, m.set("adlabels", p));
      return e.setIn(i, _);
    }
    function c(e, t, n, a, i) {
      var l,
        c,
        d = e,
        m =
          (l = d.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.asset_customization_rules;
      if (m == null) return d;
      var p = o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(d)
        ? m.find(function (e) {
            return e.get("is_default") === !0;
          })
        : o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultRuleOrRuleWithMostPlacements(m);
      if (p == null)
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "[PAC] default rule must exist in PAC ad",
          ),
          e
        );
      var _ = o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(t),
        f = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getTargetingRuleContainingPlacementList(m, _),
        g = (c = f == null ? void 0 : f.rule) != null ? c : p,
        h = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset(),
        y,
        C,
        b = r("adsConvertAdObjectRecordToPlainJS")(e);
      if (g.get("post_label"))
        ((y = "post_label"),
          (C = r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.POSTS));
      else {
        if (g.get("carousel_label"))
          return r("adsPlacementAssetMutationAddCustomizationCarousel")(
            d,
            g,
            _,
            h,
          );
        if (g.get("image_label"))
          ((y = "image_label"),
            (C = r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES));
        else if (g.get("video_label"))
          ((y = "video_label"),
            (C = r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.VIDEOS));
        else
          return (
            o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(b) ||
              r("FBLogger")("am_feature_pac").mustfix(
                "[PAC] Targeting Rule should have either IMAGE_LABEL or VIDEO_LABEL",
              ),
            e
          );
      }
      if (
        ((d = u(d, g, h, y, C)),
        o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(d))
      )
        return (
          (d = o(
            "AdsLocalizedPlacementsMutators",
          ).addPlacementsToAssetCustomizationRules(d, y, h, _)),
          d
        );
      var v = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).movePlacementsInTargetingRules(m, y, h, _, i),
        S = v.updatedTargetingRules,
        R = v.labelsRemoved,
        L = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getTargetingRuleHavingPlacementList(S, _),
        E = L == null ? void 0 : L.index;
      return (
        s.forEach(function (e, t) {
          var a,
            i = g.getIn([t, "name"]),
            l = d.getIn(e);
          if (
            !(i == null || E == null || !(l instanceof r("immutable").List))
          ) {
            var s = o(
                "AdsPlacementAssetUtils",
              ).makeUniqueLabelNameForPlacementAsset(),
              u = r("immutable").Map(((a = {}), (a.name = s), a)),
              c = o("AdsDOFUtils").isLabelFieldDOFEligible(n, t),
              m = !1,
              p = l.map(function (e, t) {
                return e.update(
                  o("AdsAssetFeedConstant").ADLABELS,
                  function (e) {
                    return e instanceof r("immutable").List &&
                      e.some(function (e) {
                        return e.get("name") === i;
                      })
                      ? c
                        ? e.push(u)
                        : m
                          ? e
                          : ((m = !0), e.push(u))
                      : e;
                  },
                );
              });
            ((d = d.setIn(e, p)), (S = S.setIn([E, t], u)));
          }
        }),
        (d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(S, d)),
        R.length > 0 &&
          (d = r("adsPlacementAssetMutationRemoveOrphanedAssets")(d, a)),
        d
      );
    }
    l.default = c;
  },
  98,
);
