__d(
  "AdsUEditorAdgroupInstagramSelectors",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsEmptyValue",
    "AdsFakePageBackedInstagramAccount",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramProfileUtils",
    "AdsInstagramUsernameStore",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupInstagramSelectorsUtils",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorSelectors",
    "AdsUnifiedInstagramAccountProvider",
    "AdsUniformValue",
    "adsCreateSelector",
    "adsEnforcePureGetStores",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "filterNulls",
    "gkx",
    "igAccessAdsManagerUtils",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = null;
    function d(e, t, n, a, i, l, s, u, c) {
      var d =
          i == null || l == null || i instanceof r("AdsEmptyValue")
            ? t
            : i.map(function (e) {
                return o(
                  "AdsInstagramBrandedContentUtils",
                ).getInstagramAccountIDFromPage(e, l);
              }),
        m = d instanceof r("AdsUniformValue") ? d.getValue() : null;
      if (r("isFalsey")(m)) {
        var p = u && u.hasValueWithoutError() ? u.getValueEnforcing() : null;
        m = r("gkx")("5403") ? (p == null ? void 0 : p.id) : m;
      }
      if (r("isFalsey")(m)) {
        var _ = s instanceof r("AdsUniformValue") ? s.getValue() : null;
        if (r("isFalsey")(_)) return null;
        m = _;
      }
      if (!o("AdsLoadStateUtils_LEGACY").isLoaded(e)) return null;
      var f = e.data,
        g =
          f &&
          f.find(function (e) {
            return e.id === m;
          });
      if (g)
        return babelHelpers.extends(
          { loadState: r("AdsLoadState_LEGACY").LOADED },
          g,
        );
      var h = c == null ? void 0 : c.getValue();
      return m === (h == null ? void 0 : h.id_v2) &&
        o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
        ? h
        : n(m, a[0]);
    }
    var m = (u = o("AdsUEditorAdgroupBulkSelectors")).selectorByAdgroupFn(
        function (e) {
          var t;
          return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
            ? e == null || (t = e.creative) == null
              ? void 0
              : t.instagram_actor_id
            : null;
        },
      ),
      p = (e = r("adsCreateSelector"))(
        [
          o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
            r("AdsAdgroupSemanticFields").instagramActorID.get,
          ),
          m,
        ],
        function (t, n) {
          return t instanceof r("AdsEmptyValue") ? n : t;
        },
        { name: i.id },
      ),
      _ = e(
        [
          u.pageID,
          u.sponsorBoostSponsorPageID,
          r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
          (s = r("adsUEditorSelectedAdgroupIDsSelector")),
        ],
        function (t, n, o, a) {
          var e = t instanceof r("AdsUniformValue") ? t.getValue() : null;
          return (
            (e =
              n instanceof r("AdsUniformValue") && n.getValue()
                ? n.getValue()
                : e),
            r("isFalsey")(e) ? c : o(e)
          );
        },
        {
          name:
            i.id + ".eligiblePageInstagramAccountsForSelectedAdgroupsSelector",
        },
      ),
      f = r("adsEnforcePureGetStores")(
        e(
          [
            o("AdsUEditorCampaignInstagramSelectors").businessInstagramAccounts,
            p,
            r("AdsInstagramUsernameStore").getForAdgroupSelector,
            s,
            o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null ||
                (t = t.object_story_spec) == null
                ? void 0
                : t.threads_user_id;
            }),
            r("AdsUnifiedInstagramAccountProvider").toFluxSelector(),
            o("AdsUEditorCampaignInstagramSelectors")
              .loggedInInstagramAccountSelector,
          ],
          function (t, n, r, o, a, i, l) {
            return d(t, n, r, o, void 0, void 0, a, i, l);
          },
          i.id + ".selectedInstagramAccountSelector",
        ),
      ),
      g = r("adsEnforcePureGetStores")(
        e(
          [
            o("AdsUEditorCampaignInstagramSelectors").businessInstagramAccounts,
            p,
            r("AdsInstagramUsernameStore").getForAdgroupSelector,
            s,
            o("AdsUEditorSelectors").adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.branded_content
                .promoted_page_id.get,
            ),
            r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
          ],
          function (t, n, r, o, a, i) {
            return d(t, n, r, o, a, i);
          },
          i.id + ".messagingTemplateSelectedInstagramAccountSelector",
        ),
      ),
      h = e(
        [p, r("AdsInstagramUsernameStore").getAllForAdgroupSelector, s],
        function (t, n, a) {
          var e = n(r("filterNulls")(t.getValues()), a[0]);
          return o("AdsLoadStateUtils_LEGACY").getLoadedValuesSingleMap(e);
        },
        { name: i.id },
      ),
      y = e(
        [p, h, r("AdsUnifiedInstagramAccountProvider").toFluxSelector()],
        function (t, n, o) {
          var e = !n || n.length === 0,
            a = t.getValues().some(function (e) {
              return !e;
            }),
            i = n.every(function (e) {
              return !!e && !e.is_published;
            });
          if (e || a) {
            if (r("gkx")("5403")) {
              var l = o.hasValueWithoutError() ? o.getValueEnforcing() : null;
              return !!l && !l.is_published;
            }
            return !1;
          }
          return i;
        },
        { name: i.id },
      ),
      C = e(
        [p, y],
        function (t, n) {
          return n
            ? new (r("AdsUniformValue"))(
                r("AdsFakePageBackedInstagramAccount").id,
              )
            : t;
        },
        { name: i.id },
      ),
      b = e(
        [y, f],
        function (t, n) {
          return t
            ? r("AdsFakePageBackedInstagramAccount")
            : n && n.loadState === r("AdsLoadState_LEGACY").LOADED
              ? n
              : null;
        },
        { name: i.id },
      ),
      v = e(
        [u.sponsorBoostSponsorPageID, u.pageID, r("AdsPageStore").getSelector],
        function (t, n, r) {
          return o(
            "AdsUEditorAdgroupInstagramSelectorsUtils",
          ).uniformSelectedPage(t, n, r);
        },
        { name: i.id },
      ),
      S = e(
        [
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector"),
          ),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
        ],
        function (t, n) {
          return o(
            "AdsInstagramProfileUtils",
          ).getIsInstagramProfileConversionUnderTrafficObjective(t, n);
        },
        { name: i.id },
      );
    ((l.UNIFORM_PAGE_INSTAGRAM_ACCOUNTS_NOT_SUPPORTED = c),
      (l.getSelectedInstagramAccount = d),
      (l.eligiblePageInstagramAccountsForSelectedAdgroupsSelector = _),
      (l.selectedInstagramAccountSelector = f),
      (l.messagingTemplateSelectedInstagramAccountSelector = g),
      (l.selectedInstagramAccountsSelector = h),
      (l.allAdgroupsUsePBIASelector = y),
      (l.bulkInstagramAccountIDSelector = C),
      (l.uniformInstagramAccountSelector = b),
      (l.uniformSelectedPageSelector = v),
      (l.isInstagramProfileVisitAdSelector = S));
  },
  98,
);
