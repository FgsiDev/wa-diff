__d(
  "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupRecordAccessors",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = n.plugins,
              l = n.userSettingsID,
              s = o(
                "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
              ).getCreativeFlexOptOutCountFromProvider(l);
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                u,
                c =
                  (n = (u = a.get(e.id)) == null ? void 0 : u.campaignGroup) !=
                  null
                    ? n
                    : null,
                d = o("AdsDynamicAdsUtils").isDynamicAd(e)
                  ? o(
                      "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
                    ).executeDACreativeFlex(
                      e,
                      t.relatedMediaMap,
                      t.sourceKey,
                      l,
                      i,
                      t.actionCategory,
                      t.isDefaultOn,
                      t.triggerSource,
                    )
                  : o(
                      "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
                    ).executeSACreativeFlex(
                      e,
                      t.relatedMediaMap,
                      t.sourceKey,
                      l,
                      t.actionCategory,
                      c,
                      s,
                    ),
                m = t.websiteMediaHashMap,
                p = t.websiteMediaDimensionsMap;
              if (m != null) {
                var _,
                  f =
                    (_ = d.creative) == null ||
                    (_ = _.creative_sourcing_spec) == null ||
                    (_ = _.website_media_spec) == null
                      ? void 0
                      : _.media;
                if (f != null && f.size > 0) {
                  var g = f.map(function (e) {
                    var t = e.get("image_asset_fbid");
                    if (t != null && typeof t == "string" && m[t] != null) {
                      var n = e.set("image_hash", m[t]),
                        r = p == null ? void 0 : p[t];
                      return (
                        r != null &&
                          ((n = n.set("image_width", r.width)),
                          (n = n.set("image_height", r.height))),
                        n
                      );
                    }
                    return e;
                  });
                  d = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_media_spec.media.set(
                    g,
                  )(d);
                }
              }
              return d;
            });
          },
          r("AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
