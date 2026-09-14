__d(
  "AdsUEditorCampaignSetBrandSafetyContentFilterLevelReducerPlugin",
  [
    "AdsBrandSafetyContentFilterLevel",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsBrandSafetyUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBrandSafetyContentFilterLevelActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.isANLinkedToFB,
              i = t.newLevel;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t,
                n = (
                  (t = e.targeting.brand_safety_content_filter_levels) != null
                    ? t
                    : r("immutable").List()
                ).toSet(),
                l = o(
                  "AdsBrandSafetyContentFilterLevel",
                ).ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVELS.includes(i),
                s = o(
                  "AdsBrandSafetyContentFilterLevel",
                ).ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS.includes(i),
                u = o(
                  "AdsBrandSafetyContentFilterLevel",
                ).ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVELS.includes(i),
                c = r("AdsBrandSafetyUtils").getBrandSafetyContentFilterANLevel(
                  n.toList(),
                ),
                d = r("AdsBrandSafetyUtils").getBrandSafetyContentFilterFBLevel(
                  n.toList(),
                ),
                m = r(
                  "AdsBrandSafetyUtils",
                ).getBrandSafetyInventoryFilterFeedLevel(n.toList());
              if (
                (l && c && (n = n.subtract([c])),
                s && d && (n = n.subtract([d])),
                u && m && (n = n.subtract([m])),
                (n = n.add(i)),
                s && a)
              ) {
                var p = o(
                  "AdsBrandSafetyContentFilterLevel",
                ).ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS.find(
                  function (e) {
                    return e === i;
                  },
                );
                if (p != null) {
                  var _ = o("AdsBrandSafetyContentFilterLevelConstants")
                    .ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL[p];
                  n = n
                    .subtract([c].filter(Boolean))
                    .add(
                      o(
                        "AdsBrandSafetyContentFilterLevel",
                      ).getANEquivalentOfFBContentFilterLevel(_),
                    );
                }
              }
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.brand_safety_content_filter_levels.set(n.toList()),
                o("AdsPlacementReducerUtils").updatePlacementSpec,
              )(e);
            });
          },
          o("AdsUEditorCampaignSetBrandSafetyContentFilterLevelActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
