__d(
  "adsUEditorAdgroupSetObjectiveReduceFn",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdCreationUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsExistingPostDefaultingGatingUtils",
    "AdsExistingPostDefaultingUtils",
    "AdsInterfacesLoggerUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPostDefaultingRetentionUtils",
    "AdsPostDefaultingValidationUtils",
    "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
    "AdsUEditorAdgroupExistingPostDefaultingMutators",
    "adsConvergenceGetDefaultAdgroupRecord",
    "err",
    "formatPageID",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l, s, u, c, d, m) {
      if (a == null || e == null) return l;
      try {
        if (
          !m.isPostDefaulted ||
          !o(
            "AdsExistingPostDefaultingGatingUtils",
          ).isBoostOnAML1FBDefaultingEnabled()
        )
          return l;
        var p = o("AdsExistingPostDefaultingUtils").getPostFromPostId(a, e),
          _ = p.isIGPost,
          f = p.post;
        if (f == null) return l;
        if (!_ && f.page_id != null && String(f.page_id) !== String(e)) {
          var g;
          return (
            o("AdsInterfacesLoggerUtils").logException(
              r("err")("fb_post_defaulting_page_mismatch"),
              ((g = {}),
              (g.module_name = "adsUEditorAdgroupSetObjectiveReduceFn"),
              (g.page_id = e),
              g),
            ),
            l
          );
        }
        var h = o("AdsAPICampaignRecordUtils").getPromotedObjectType(d, s),
          y = o("AdsODAXUtils").maybeTranslateObjective(
            d,
            h,
            s.optimization_goal,
          );
        if (
          (_ &&
            !o("AdsExistingPostDefaultingUtils").isIGPostEligibleForDefaulting(
              f,
              y,
              e,
            )) ||
          (!_ &&
            !o("AdsExistingPostDefaultingUtils").isFBPostEligibleForDefaulting(
              f,
              y,
              { instagramActorID: t, pageID: e },
            ))
        )
          return l;
        var C = o("AdsPostDefaultingValidationUtils").validatePost(
          _,
          f,
          i,
          s,
          u,
          y,
          h,
        );
        if (C.length > 0) return l;
        var b = o(
          "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
        ).initExistingPostAd(e, t, n, l, s, u, c);
        return o("AdsUEditorAdgroupExistingPostDefaultingMutators").setPost(
          e,
          f,
          _,
          i,
          b,
          s,
          u,
          y,
          h,
        );
      } catch (t) {
        var v;
        return (
          o("AdsInterfacesLoggerUtils").logException(
            t,
            ((v = {}),
            (v.module_name = "adsUEditorAdgroupSetObjectiveReduceFn"),
            (v.objective = d),
            (v.page_id = e),
            v),
          ),
          l
        );
      }
    }
    function s(t, n, a) {
      var i = a.account,
        l = a.campaignsMap,
        s = a.contextualDiscoveryAdsEligibilityState,
        u = a.getShouldEnableAutomaticFlowByDefault,
        c = a.getShouldEnableMusicByDefault,
        d = a.parentData,
        m = a.postDefaultingData,
        p = a.promotablePageIDs,
        _ = a.specialAdCategoriesMap;
      return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t, a) {
        var f,
          g,
          h,
          y,
          C,
          b = r("nullthrows")(d.get(a)),
          v = b.campaign,
          S = b.campaignGroup,
          R = b.specPlugin,
          L =
            (f = t.creative) == null || (f = f.object_story_spec) == null
              ? void 0
              : f.instagram_actor_id,
          E =
            (g = t.creative) == null || (g = g.object_story_spec) == null
              ? void 0
              : g.instagram_user_id,
          k = n.pageID;
        if (n.pageID == null) {
          var I = r("formatPageID")(t.toJS()),
            T = p.getValue();
          T != null && T.has(I) && (k = I);
        }
        if (L == null) {
          var D;
          L = (D = t.creative) == null ? void 0 : D.instagram_actor_id;
        }
        if (E == null) {
          var x;
          E = (x = t.creative) == null ? void 0 : x.instagram_user_id;
        }
        var $ = r("AdsAdgroupSemanticFields").threadsUserID.isSupported(R, t)
            ? r("AdsAdgroupSemanticFields").threadsUserID.get(R, t)
            : (h = t.creative) == null || (h = h.object_story_spec) == null
              ? void 0
              : h.threads_user_id,
          P = o("AdsPostDefaultingRetentionUtils").getPostID(t),
          N = r("adsConvergenceGetDefaultAdgroupRecord")(
            i,
            n.newObjective,
            l.get(a),
            n.isAuthorizedPage,
            (y = _.get(a)) != null ? y : [],
            (C = n.objectiveSpecificDependencies.storeTrafficData) == null
              ? void 0
              : C.locationPage,
            k,
            L,
            E,
            $,
            n.pageDestination,
            n.objectiveSpecificDependencies.catalogSalesData,
            void 0,
            void 0,
            void 0,
            u,
            c,
            s,
          ),
          M = t.name || o("AdsAdCreationUtils").DEFAULT_ADGROUP_NAME.toString();
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").name.set(M),
          r("AdsAdgroupRecordAccessors").id.set(a),
          r("AdsAdgroupRecordAccessors").adset_id.set(t.adset_id),
          r("AdsAdgroupRecordAccessors").campaign_id.set(t.campaign_id),
          r("AdsAdgroupRecordAccessors").status.set(t.status),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            k,
          ),
          function (t) {
            return e(k, L, E, P, i, t, v, S, R, n.newObjective, m);
          },
        )(N);
      });
    }
    l.default = s;
  },
  98,
);
