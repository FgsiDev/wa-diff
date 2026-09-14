__d(
  "AdsUEditorCampaignSetAppReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppMutationUtils",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsBuyingTypes",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsFlexibleTargetingConstants",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetAppActionFlux",
    "AppAndWebLPVUtils",
    "LoadObject",
    "ads-app-platforms",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsCampaignIsMobileAppEngagementSupportedObjective",
    "adsUEditorAccountSelector",
    "immutable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          campaignGroups: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
        },
        function (e, t, n) {
          var a = n.account,
            l = n.campaignGroups,
            u = n.eligibilityInformation,
            m = t.app,
            p = t.productSetID,
            _ = t.url;
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, t) {
            var n = r("nullthrows")(l.get(t)),
              f = r("LoadObject").withValue(n, { creatorModuleID: i.id }),
              g = n.objective,
              h = n.bid_strategy
                ? n.bid_strategy
                : r("AdsAPIBidStrategies").NONE;
            return o("AdsMutators").chain(
              function (e) {
                return s(g, e, m, _, p, u, h);
              },
              function (e) {
                return c(n, _, e);
              },
              function (e) {
                return d(g, _, e, a);
              },
              function (e) {
                return o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(n)
                  ? e
                  : o("AdsCampaignBudgetMutationUtils").resetBudgetToDefault(
                      a,
                      g,
                      _,
                      e,
                      f,
                    );
              },
            )(e);
          });
        },
        o("AdsUEditorCampaignSetAppActionFlux").actionType,
      ),
    };
    function s(e, t, n, a, i, l, s) {
      var u,
        c,
        d,
        m,
        p = (u = t.promoted_object) == null ? void 0 : u.application_id,
        _ = (c = t.promoted_object) == null ? void 0 : c.object_store_url;
      if ((n.id || n.app_id) === p && a === _) return t;
      var f = o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").promoted_object.application_id.set(
          n.id || n.app_id,
        ),
        r("AdsCampaignRecordAccessors").promoted_object.object_store_url.set(a),
        r("AdsCampaignRecordAccessors").promoted_object.product_set_id.set(i),
        r("AdsCampaignRecordAccessors").promoted_object.custom_event_str.delete,
        r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
          .delete,
        r("AdsCampaignRecordAccessors").promoted_object
          .custom_attribution_source_ids.delete,
      )(t);
      typeof a == "string" &&
        (f = o("AdsAppMutationUtils").setTargetingAppOS(f, a));
      var g = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, f);
      r("AdsAppUtils").isRoasOptimization(e, t.optimization_goal, g) &&
        s === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS &&
        (f = r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.custom_event_type.set("PURCHASE", f));
      var h = r("adsCampaignIsMobileAppEngagementSupportedObjective")(e);
      if (h && o("AdsPromotedObjectAppUtils").isAppType(g)) {
        var y = "installed";
        r("AdsAppUtils").storeUrlRequiresUserLevelEntitledTargeting(a) &&
          (y = "entitled");
        var C =
          e === r("AdsAPIObjectives").LINK_CLICKS &&
          g === r("AdsPromotedObjectTypes").MOBILE_APP &&
          t.optimization_goal ===
            r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS;
        f = C
          ? r("AdsCampaignRecordAccessors").targeting.app_install_state.delete(
              f,
            )
          : r("AdsCampaignRecordAccessors").targeting.app_install_state.set(
              y,
              f,
            );
      }
      var b = babelHelpers.extends({}, l, {
        promotedObjectType: g,
        objectStoreURL: a,
      });
      f = o("AdsPlacementReducerUtils").resetPlacement(f, b);
      var v = Array.from(
        (d = (m = f.promoted_object) == null ? void 0 : m.object_store_urls) !=
          null
          ? d
          : r("immutable").List(),
      );
      if (
        v.length > 0 &&
        !r("AdsAppUrlUtils").hasBothAndroidAndIOSPlatforms(v)
      ) {
        var S = [],
          R = [];
        (v.forEach(function (e) {
          var t = r("AdsAppUrlUtils").getMobileAppStoreNameFromUrl(e);
          if (r("isTruthy")(t)) {
            var n = r("AdsAppUtils").getPlatformFromStoreName(t),
              a = o("ads-app-platforms").getMobileOSForPlatform(n),
              i = r("AdsAppUtils").getDefaultUserDevices(e);
            (a !== void 0 && (S = S.concat([a])),
              i !== void 0 && (R = R.concat(i)));
          }
        }),
          (f = r("AdsCampaignRecordAccessors").targeting.user_os.set(
            r("immutable").List(S),
            f,
          )),
          (f = r("AdsCampaignRecordAccessors").targeting.user_device.set(
            r("immutable").List(R),
            f,
          )));
      }
      if (r("AdsAppUrlUtils").isGalaxyStoreURL(a)) {
        var L = r("immutable").fromJS([
          r("AdsFlexibleTargetingConstants").TARGETING_OEM_STORE
            .SAMSUNG_DEVICES,
        ]);
        f = r("AdsCampaignRecordAccessors").targeting.behaviors.set(L, f);
      }
      return f;
    }
    function u(e, t) {
      var n = r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT;
      return e === r("AdsAPIObjectives").LINK_CLICKS &&
        r("AdsAppUrlUtils").isCanvasLink(t)
        ? n
        : e;
    }
    function c(e, t, n) {
      var a,
        i,
        l = u(e.objective, t),
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, n),
        c =
          ((a = n.promoted_object) == null ? void 0 : a.application_id) != null;
      if (
        o("AppAndWebLPVUtils").shouldUseAppLpv() &&
        l === r("AdsAPIObjectives").LINK_CLICKS &&
        s === r("AdsPromotedObjectTypes").MOBILE_APP &&
        c
      )
        return n;
      var d = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: l,
          promotedObjectType: s,
          destinationType: o("AdsAPICampaignRecordUtils").getDestinationType(n),
        }),
        m = n.optimization_goal,
        p =
          (i =
            d.getSupportedOptimizationGoals == null
              ? void 0
              : d.getSupportedOptimizationGoals({
                  objective: l,
                  promotedObjectType: s,
                })) != null
            ? i
            : [];
      if (m != null && p.includes(m)) return n;
      var _ = d.getDefaultOptimizationGoal({
        campaignGroup: e,
        hasBackingApplication: c,
        appURL: t,
      });
      return r("AdsCampaignRecordAccessors").optimization_goal.set(_, n);
    }
    function d(e, t, n, a) {
      var i = n.optimization_goal,
        l = u(e, t),
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, n),
        c = r("adsBillingEventGetDefaultDEPRECATED")(
          r("AdsBuyingTypes").AUCTION,
          l,
          i,
          s,
          a,
        );
      return r("AdsCampaignRecordAccessors").billing_event.set(c, n);
    }
    var m = e;
    l.default = m;
  },
  98,
);
