__d(
  "AdsUEditorAdgroupCachedOnBrandedContentToggleDataActionHandler",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedRecord",
    "AdsUEditorAdgroupOnBrandedContentToggleDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "adsUEditorAccountSelector",
    "emptyFunction",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupOnBrandedContentToggleDataActionFlux")
          .actionType,
        fluxInputs: {
          account: r("adsUEditorAccountSelector"),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          defaultAdGroupsToCache: o(
            "AdsUEditorAdgroupSelectors",
          ).adgroups.mapTransform(r("emptyFunction").thatReturnsArgument),
        },
        mutate: function (t, n, a) {
          var e = a.defaultAdGroupsToCache,
            i = a.parentData,
            l = t.adgroupIDs,
            s =
              t.adgroupsToCache === "UseFallbackAdgroupsToCache"
                ? e
                : t.adgroupsToCache;
          return s
            ? n.withMutations(function (e) {
                return l.reduce(function (e, n) {
                  var a = s.get(n);
                  if (!a) return e;
                  e.get(n) ||
                    e.set(
                      n,
                      r("AdsUEditorAdgroupCachedRecord").getEmptyRecord(),
                    );
                  var l = r("nullthrows")(i.get(n)),
                    u = l.specPlugin,
                    c = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      u,
                      a,
                    ),
                    d = o("AdsAPIAdgroupRecordUtils").getPrimaryPageIDInSpec(
                      a,
                      u,
                    ),
                    m = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.facebook_branded_content.sponsor_page_id.get(a),
                    p = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content_boosting_type.get(a),
                    _ = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ad_format.get(a),
                    f = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.instagram_boost_post_access_token.get(
                      a,
                    ),
                    g =
                      f != null &&
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.source_instagram_media_id.get(a),
                    h = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.parent_source_facebook_post_id.get(
                      a,
                    ),
                    y = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.parent_source_instagram_media_id.get(
                      a,
                    );
                  if (
                    t.isBrandedContentToggleOn &&
                    p === "SPONSOR_BOOST" &&
                    o("AdsAPIAdgroupRecordUtils").isExistingPostAd(a) &&
                    o("AdsAPIAdgroupRecordUtils").isInstagramMedia(a)
                  ) {
                    var C = [m, d];
                    ((d = C[0]), (m = C[1]));
                  }
                  var b = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.instagram_branded_content.sponsor_id.get(a);
                  return (
                    e.setIn(
                      [
                        n,
                        t.isBrandedContentToggleOn
                          ? "oldBrandedContentIdentities"
                          : "newBrandedContentIdentities",
                      ],
                      {
                        secondaryPageID: m,
                        secondaryIgV2ID: b,
                        primaryPageID: d,
                        primaryInstagramActorID: c,
                        boostingType: p,
                        instagram_boost_post_access_token: f,
                        instagram_boost_post_access_token_post_id: g,
                        adFormat: _,
                        parentSourceFacebookPostID: h,
                        parentSourceInstagramMediaID: y,
                      },
                    ),
                    e
                  );
                }, e);
              })
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
