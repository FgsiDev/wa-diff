__d(
  "AdsUEditorAdgroupSharedSelectors",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramUsernameStore",
    "AdsLandingViewTypeUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorSelectorUtils",
    "AdsUEditorSelectors",
    "LoadObject",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "emptyFunction",
    "err",
    "filterNulls",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (d = r("adsCreateSelector"))(
        [
          (e = o("AdsUEditorAdgroupBulkSelectors")).pageID,
          r("AdsPageStore").getAllSelector,
        ],
        function (t, n) {
          var e = n(r("filterNulls")(t.getValues()));
          return o("AdsLoadStateUtils_LEGACY").anyLoading(e)
            ? r("LoadObject").loading({ creatorModuleID: i.id })
            : o("AdsLoadStateUtils_LEGACY").anyError(e)
              ? r("LoadObject").withError(r("err")("Error loading pages"), {
                  creatorModuleID: i.id,
                })
              : r("LoadObject").withValue(e, { creatorModuleID: i.id });
        },
        { name: i.id + ".pagesMap" },
      ),
      p = d(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector"), m],
        function (t, n) {
          return n.map(function (e) {
            var n = t.map(function (e) {
              var t = o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(e);
              return [
                e,
                r("AdsAdgroupSemanticFields").pageID.get(t, e.adgroup),
              ];
            });
            return n.map(function (t) {
              var n = t[0],
                a = t[1],
                i = r("isTruthy")(a) ? e.get(a) : null;
              return o("AdsLandingViewTypeUtils").fromAdObjects(n, i);
            });
          });
        },
        { name: i.id + ".landingViewTypesSelector" },
      ),
      _ = d(
        [p],
        function (t) {
          return t.map(
            o("AdsUEditorSelectorUtils").memoizeBulkAggregation(
              r("emptyFunction").thatReturnsArgument,
            ),
          );
        },
        { name: i.id + ".bulkLandingViewType" },
      ),
      f = e.selectorByAdgroupFn(
        (c = o("AdsAPIAdgroupRecordUtils")).getPagePostID,
      ),
      g = (s = r("adsGetUniformValueSelector"))(f, null),
      h = s(e.selectorByAdgroupFn(c.getInstagramCallToActionType), null),
      y = s(e.selectorByAdgroupFn(c.getInstagramCallToActionLink), null),
      C = d(
        [e.selectorByAdgroupFn(c.getInstagramStoryID)],
        function (t) {
          return t;
        },
        { name: i.id },
      ),
      b = s(C, null),
      v = d(
        [e.selectorByAdgroupFn(c.getInstagramSourceMediaID)],
        function (t) {
          return t;
        },
        { name: i.id },
      ),
      S = s(v, null),
      R = d(
        [
          (u = o("AdsUEditorSelectors")).adgroup.bulkBySemanticField(
            r("AdsAdgroupSemanticFields").instagramActorID.get,
          ),
          u.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.branded_content) == null
              ? void 0
              : t.promoted_page_id;
          }),
          r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
        ],
        function (t, n, r) {
          var e = n.map(function (e) {
            return o(
              "AdsInstagramBrandedContentUtils",
            ).getInstagramAccountIDFromPage(e, r);
          });
          return L(t, n, e);
        },
        { name: i.id },
      );
    function L(e, t, n) {
      var a = t == null || t instanceof r("AdsEmptyValue") ? e : n;
      return a == null ? null : o("AdsBulkValueUtils").getUniformValue(a);
    }
    var E = d(
        [
          R,
          r("AdsInstagramUsernameStore").getForAdgroupSelector,
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n, a) {
          if (r("isFalsey")(t)) return null;
          var e = n(t, a[0]);
          return o("AdsLoadStateUtils_LEGACY").isLoaded(e) ? e.id_v2 : null;
        },
        { name: i.id },
      ),
      k = d(
        [
          u.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.instagram_branded_content) == null
              ? void 0
              : t.sponsor_id;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id },
      ),
      I = d(
        [
          u.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.branded_content) == null
              ? void 0
              : t.instagram_boost_post_access_token;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id },
      ),
      T = d(
        [
          s(
            u.adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.posts.get,
            ),
            null,
          ),
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".assetFeedSpecPostsSelector" },
      ),
      D = d(
        [
          s(
            u.adgroup.bulkByAccessorToJS(function (e) {
              return e.creative_asset_groups_spec;
            }),
            null,
          ),
        ],
        function (t) {
          var e,
            n =
              t == null || (e = t.groups) == null || (e = e[0]) == null
                ? void 0
                : e.posts;
          return n == null
            ? r("immutable").List()
            : r("immutable").List(
                n.filter(function (e) {
                  return e != null;
                }),
              );
        },
        { name: i.id + ".creativeAssetGroupsSpecPostsSelector" },
      ),
      x = d(
        [D],
        function (t) {
          return r("immutable").List(
            t
              .map(function (e) {
                var t;
                return (t = e == null ? void 0 : e.source_instagram_media_id) !=
                  null
                  ? t
                  : e == null
                    ? void 0
                    : e.post_id;
              })
              .filter(Boolean),
          );
        },
        { name: i.id + ".creativeAssetGroupsSpecPostIDsSelector" },
      );
    ((l.pagesMap = m),
      (l.bulkLandingViewType = _),
      (l.bulkPagePostIDSelector = f),
      (l.uniformPagePostIDSelector = g),
      (l.uniformCreativeCallToActionTypeSelector = h),
      (l.uniformCreativeCallToActionLinkSelector = y),
      (l.bulkStoryIDSelector = C),
      (l.uniformStoryIDSelector = b),
      (l.bulkSourceMediaIDSelector = v),
      (l.uniformSourceMediaIDSelector = S),
      (l.uniformInstagramActorIDSelector = R),
      (l.uniformInstagramActorIDSelectorLogic = L),
      (l.uniformInstagramActorV2IDSelector = E),
      (l.uniformBrandedContentPartnerIGUserIDSelector = k),
      (l.uniformBrandedContentAdCodeSelector = I),
      (l.assetFeedSpecPostsSelector = T),
      (l.creativeAssetGroupsSpecPostsSelector = D),
      (l.creativeAssetGroupsSpecPostIDsSelector = x));
  },
  98,
);
