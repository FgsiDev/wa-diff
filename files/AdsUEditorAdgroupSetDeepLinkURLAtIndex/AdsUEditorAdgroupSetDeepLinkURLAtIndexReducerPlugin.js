__d(
  "AdsUEditorAdgroupSetDeepLinkURLAtIndexReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAppUrlUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetDeepLinkURLAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsAdgroupSemanticFields").linkURL.get(t, e);
      if (
        (n === void 0 && (n = r("immutable").List()),
        !(n instanceof r("immutable").List))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "this function must be invoked on an asset feed field",
        );
      return n;
    }
    function s(t, n, o) {
      var a = e(t, n).map(function (e) {
        return e.set("deeplink_url", o);
      });
      return r("AdsAdgroupSemanticFields").linkURL.set(n, t, a);
    }
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
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
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(a.get(n)),
                  u = l.campaign,
                  c = l.campaignGroup,
                  d = r("AdsAdgroupRecordAccessors")
                    .creative.asset_feed_spec.link_urls.at(t.assetIndex)
                    .deeplink_url.set(t.deepLinkURL, e);
                if (
                  (o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(d) &&
                    (d = s(e, r("nullthrows")(i.get(e.id)), t.deepLinkURL)),
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(d))
                ) {
                  var m,
                    p = o(
                      "AdsUEditorCampaignAdObjectsUtils",
                    ).getPromotedObjectType({ campaign: u, campaignGroup: c }),
                    _ = o(
                      "AdsAssetFeedUtils",
                    ).shouldAddObjectStoreURLForTrafficAndPromotedApp(
                      c.objective,
                      p,
                    ),
                    f =
                      (m = u.promoted_object) == null
                        ? void 0
                        : m.object_store_url,
                    g = _ && r("AdsAppUrlUtils").isAppStoreURL(f);
                  if (g) {
                    var h = [].concat(
                      r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                        .LINK_URLS,
                      ["0", "object_store_urls"],
                    );
                    d = d.setIn(h, [f]);
                  }
                  var y = r("AdsAdgroupRecordAccessors")
                    .creative.asset_feed_spec.call_to_actions.at(0)
                    .value.get(d);
                  if (y != null) {
                    var C;
                    d = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.call_to_actions.set(
                      (C = d.creative) == null ||
                        (C = C.asset_feed_spec) == null ||
                        (C = C.call_to_actions) == null
                        ? void 0
                        : C.update(0, function (e) {
                            return e.setIn(
                              ["value", "app_link"],
                              t.deepLinkURL,
                            );
                          }),
                      d,
                    );
                  }
                  return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
                    d,
                    r("nullthrows")(i.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").linkURL,
                    "adlabels",
                  );
                }
                return d;
              },
            );
          },
          o("AdsUEditorAdgroupSetDeepLinkURLAtIndexDataActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
