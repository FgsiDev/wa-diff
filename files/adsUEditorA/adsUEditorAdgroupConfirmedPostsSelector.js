__d(
  "adsUEditorAdgroupConfirmedPostsSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsFBStorySelectionProvider",
    "AdsFBStorySelectionReader",
    "AdsInstagramMediaV2DataProvider",
    "AdsLoadStateUtils_LEGACY",
    "AdsPagePostUtils",
    "AdsPartnershipAdInstagramMediaDataProvider",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupSharedSelectors",
    "AdsUEditorSelectors",
    "ApiDynamicCreativeOptimizationTypes",
    "LoadObject",
    "PartnershipDynamicAdsGatingUtils",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsInstagramPostConvertV2MediaToFBPagePost",
    "adsPagePostGetSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdGroupBrandedContentInstagramBoostingTypeFieldSelector",
    "adsUEditorAssetFeedOptimizationTypeSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("adsCreateSelector")(
        [
          (u = o("AdsUEditorAdgroupSharedSelectors")).uniformPagePostIDSelector,
          u.uniformSourceMediaIDSelector,
          u.assetFeedSpecPostsSelector,
          u.creativeAssetGroupsSpecPostIDsSelector,
          u.uniformInstagramActorV2IDSelector,
          u.uniformBrandedContentPartnerIGUserIDSelector,
          u.uniformBrandedContentAdCodeSelector,
          r("adsUEditorAssetFeedOptimizationTypeSelector"),
          r("adsPagePostGetSelector"),
          r("AdsInstagramMediaV2DataProvider").toFluxSelector(),
          r("AdsPartnershipAdInstagramMediaDataProvider").toFluxSelector(),
          r("AdsFBStorySelectionProvider").toFluxSelector(),
          r("adsUEditorAccountSelector"),
          o("adsUEditorAdGroupBrandedContentInstagramBoostingTypeFieldSelector")
            .brandedContentAdBoostingTypeSelector,
          (e = r("adsGetUniformValueSelector"))(
            o("AdsUEditorAdgroupBulkSelectors").selectorByAdgroupFn(
              o("AdsAPIAdgroupRecordUtils").getBrandedContentPrimaryPageID,
            ),
            null,
          ),
          e(
            (s = o("AdsUEditorSelectors")).adgroup.bulkByAccessorToJS(
              function (e) {
                var t;
                return (t = e.creative) == null ||
                  (t = t.facebook_branded_content) == null
                  ? void 0
                  : t.sponsor_page_id;
              },
            ),
            null,
          ),
          e(
            s.adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null || (t = t.branded_content) == null
                ? void 0
                : t.parent_source_instagram_media_id;
            }),
            null,
          ),
          e(
            s.adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null || (t = t.branded_content) == null
                ? void 0
                : t.parent_source_facebook_post_id;
            }),
            null,
          ),
          e(o("AdsUEditorAdgroupBulkSelectors").pageID),
          e(
            s.adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null
                ? void 0
                : t.source_facebook_post_id;
            }),
            null,
          ),
          e(
            s.campaign.bulkByAccessorToJS(function (e) {
              return e.destination_type;
            }),
          ),
          s.adgroup.bulkByAccessorToJS(function (e) {
            return e.id;
          }),
          e(
            s.adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null ? void 0 : t.object_story_spec;
            }),
            null,
          ),
        ],
        function (
          t,
          n,
          a,
          l,
          s,
          u,
          c,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v,
          S,
          R,
          L,
          E,
          k,
          I,
          T,
          D,
        ) {
          var e = o(
            "AdsFBStorySelectionReader",
          ).getFBStorySelectionForAdgroupsFromProviderData(y, T.getValues(), D);
          if (e != null)
            return [r("LoadObject").withValue(e, { creatorModuleID: i.id })];
          if (l != null && l.size > 0) return d(l, f, g, E);
          if (
            _ === r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR &&
            a != null &&
            (a == null ? void 0 : a.size) > 0
          )
            return a
              .map(function (e) {
                var t = e.get("post_id"),
                  n = e.get("source_instagram_media_id");
                if (e.has("post_id") && typeof t == "string")
                  return o("AdsLoadStateUtils_LEGACY").toLoadObject(f(t));
                if (
                  e.has("source_instagram_media_id") &&
                  typeof n == "string"
                ) {
                  var a = m(n, g);
                  return a == null
                    ? null
                    : r("LoadObject").withValue(a, { creatorModuleID: i.id });
                } else return null;
              })
              .toArray()
              .filter(function (e) {
                return e != null;
              });
          if (
            r("isTruthy")(n) ||
            (o(
              "PartnershipDynamicAdsGatingUtils",
            ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() &&
              r("isTruthy")(R))
          ) {
            var x = null,
              $ =
                n != null
                  ? n
                  : o(
                        "PartnershipDynamicAdsGatingUtils",
                      ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost()
                    ? R
                    : null;
            if (b !== null) {
              var P = b === "CREATOR_BOOST" ? s : u;
              r("isTruthy")(P) &&
                r("isTruthy")($) &&
                (x = p(P, C.account_id, $, c, v, s, S, u, h));
            }
            return (
              x == null && r("isTruthy")($) && (x = m($, g)),
              x == null
                ? []
                : [r("LoadObject").withValue(x, { creatorModuleID: i.id })]
            );
          } else if (
            r("isTruthy")(L) &&
            L !== "0" &&
            r("isTruthy")(E) &&
            o(
              "PartnershipDynamicAdsGatingUtils",
            ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost()
          ) {
            var N = o("AdsPagePostUtils").generatePagePostId_BROKEN(E, L);
            return [o("AdsLoadStateUtils_LEGACY").toLoadObject(f(N))];
          } else if (r("isTruthy")(t)) {
            if (r("isTruthy")(k) && r("isTruthy")(E)) {
              var M = o("AdsPagePostUtils").generatePagePostId_BROKEN(E, k),
                w = f(M);
              if (w != null) {
                var A = o("AdsLoadStateUtils_LEGACY").toLoadObject(w);
                if (A.hasValue()) return [A];
              }
            }
            return [o("AdsLoadStateUtils_LEGACY").toLoadObject(f(t))];
          } else if (r("isTruthy")(k) && r("isTruthy")(E)) {
            var F = o("AdsPagePostUtils").generatePagePostId_BROKEN(E, k);
            return [o("AdsLoadStateUtils_LEGACY").toLoadObject(f(F))];
          }
          return [];
        },
        { name: i.id + ".adsUEditorAdgroupConfirmedPostsSelector" },
      );
    function d(e, t, n, a) {
      return e == null
        ? []
        : e
            .map(function (e) {
              if (e == null) return null;
              var l = m(e, n);
              if (l != null)
                return r("LoadObject").withValue(l, { creatorModuleID: i.id });
              if (r("isTruthy")(a)) {
                var s = t(
                  o("AdsPagePostUtils").generatePagePostId_BROKEN(a, e),
                );
                if (s != null) {
                  var u = o("AdsLoadStateUtils_LEGACY").toLoadObject(s);
                  if (u.hasValue()) return u;
                }
                return null;
              }
              return null;
            })
            .toArray()
            .filter(function (e) {
              return e != null;
            });
    }
    function m(e, t) {
      var n = t.get(e);
      return n.isDone() && n.hasValue()
        ? r("adsInstagramPostConvertV2MediaToFBPagePost")(n.getValueEnforcing())
        : null;
    }
    function p(e, t, n, o, a, i, l, s, u) {
      var c = u.get({
        ig_user_id: e,
        ad_account_id: t,
        media_id: n,
        ad_code: o,
        primary_fb_page_id: a,
        primary_ig_user_id: i,
        secondary_fb_page_id: l,
        secondary_ig_user_id: s,
      });
      return c.isDone() && c.hasValue()
        ? r("adsInstagramPostConvertV2MediaToFBPagePost")(
            c.getValueEnforcing().instagram_media_for_ads,
          )
        : null;
    }
    l.adsUEditorAdgroupConfirmedPostsSelector = c;
  },
  98,
);
