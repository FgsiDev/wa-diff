__d(
  "AdsUEditorAdgroupSetBrandedContentSecondaryIdentityReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsBrandedContentModalMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBrandedContentSecondaryIdentityActionFlux",
    "BrandedContentAdsUtils",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { extraData: r("adsUEditorAdgroupSetPageReducerExtraDataSelector") },
          function (e, t, n) {
            var a = n.extraData,
              i = {};
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l,
                  s = e,
                  u = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(s),
                  c = null;
                (u
                  ? t.advertiserPageID == null
                    ? (c =
                        t.secondaryIgV2ID != null
                          ? "SPONSOR_BOOST"
                          : "CREATOR_BOOST")
                    : t.advertiserPageID === t.secondaryPageID
                      ? (c = "SPONSOR_BOOST")
                      : (c = "CREATOR_BOOST")
                  : t.advertiserPageID == null
                    ? (c =
                        t.secondaryIgV2ID != null
                          ? "SPONSOR_INLINE"
                          : "CREATOR_INLINE")
                    : t.advertiserPageID === t.secondaryPageID
                      ? (c = "SPONSOR_INLINE")
                      : (c = "CREATOR_INLINE"),
                  (c === "CREATOR_BOOST" || c === "SPONSOR_BOOST") &&
                    (s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.testimonial.delete(s)),
                  (s = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.ui_version.set(1, s)),
                  (s = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.ad_format.set(
                    (l = t == null ? void 0 : t.adFormat) != null
                      ? l
                      : o(
                          "BrandedContentAdsUtils",
                        ).getDefaultPartnershipAdFormat(),
                    s,
                  )));
                var d = r("AdsAdgroupRecordAccessors").creative.object_id.get(
                    e,
                  ),
                  m = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.instagram_actor_id.get(e),
                  p = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.instagram_user_id.get(e);
                if (
                  r("gkx")("12161") &&
                  (c === "CREATOR_BOOST" || c === "SPONSOR_BOOST")
                ) {
                  var _ = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.facebook_branded_content.sponsor_page_id.get(e),
                    f = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.instagram_branded_content.sponsor_id.get(e);
                  if (
                    d === t.primaryPageID &&
                    (r("gkx")("15865")
                      ? p === t.primaryInstagramUserID
                      : m === t.primaryInstagramActorID) &&
                    _ === t.secondaryPageID &&
                    f === t.secondaryIgV2ID
                  )
                    return s;
                }
                var g = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.source_instagram_media_id.get(e),
                  h = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_id.get(e);
                if (
                  ((s = o(
                    "AdsBrandedContentModalMutators",
                  ).setPartnershipAdsIdentitiesInSpec(
                    {
                      secondaryPageID: t.secondaryPageID,
                      secondaryIgV2ID: t.secondaryIgV2ID,
                      primaryPageID: t.primaryPageID,
                      primaryInstagramActorID: t.primaryInstagramActorID,
                      primaryInstagramUserID: t.primaryInstagramUserID,
                      boostingType: c,
                      adFormat: o(
                        "BrandedContentAdsUtils",
                      ).getDefaultPartnershipAdFormat(),
                    },
                    s,
                    n,
                    t.adgroupIDs,
                    t.hostID,
                    i,
                    a,
                    a.hasInstagramPlacements,
                  )),
                  r("gkx")("5453"))
                ) {
                  var y = t.selectedPartners,
                    C = r("immutable").Map(
                      Object.fromEntries(
                        Object.entries({
                          fb_page_id: t.primaryPageID,
                          ig_user_id: t.primaryInstagramUserID,
                        }).filter(function (e) {
                          var t = e[0],
                            n = e[1];
                          return n != null;
                        }),
                      ),
                    );
                  if (y != null && y.length > 0) {
                    var b = y.map(function (e) {
                      return r("immutable").Map(
                        Object.fromEntries(
                          Object.entries({
                            fb_page_id: e.fb_page_id,
                            ig_asset_id: e.ig_asset_id,
                            ig_user_id: e.ig_user_id,
                          }).filter(function (e) {
                            var t = e[0],
                              n = e[1];
                            return n != null;
                          }),
                        ),
                      );
                    });
                    s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.partners.set(
                      r("immutable").List([C].concat(b)),
                      s,
                    );
                  } else
                    s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.partners.set(
                      r("immutable").List([C]),
                      s,
                    );
                }
                return (
                  t.shouldPreserveExistingPost === !0 &&
                    (g != null &&
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.source_instagram_media_id.set(g, s)),
                    h != null &&
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_id.set(h, s))),
                  s
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetBrandedContentSecondaryIdentityActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
