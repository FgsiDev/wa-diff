__d(
  "AdsODAXAdgroupReducerUtils",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdCreationUtils",
    "AdsAdgroupRecordAccessors",
    "AdsChildAttachmentsUtils",
    "AdsInstagramActorIDUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsInstagramUsernameStoreUtils",
    "AdsLeadGenAdGroupUtils",
    "AdsLoadState_LEGACY",
    "AdsMutators",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCallAddOnDefaultingMutator",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupIncludeInAdStudyMutator",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorHostIDs",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsUEditorUnifiedCreationVideoViewsAdgroupMutators",
    "ClickToMessageCTMAdoptionFeatureGating",
    "Promise",
    "WebToWhatsappUtils",
    "WebToXDefaultingUtils",
    "adsConvergenceGetDefaultAdgroupRecord",
    "isTruthy",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n,
        r,
        a = e.adgroup,
        i = e.campaign,
        l = e.campaignGroup,
        s = e.placePageSetParentPageID,
        u = e.useFix;
      if (!u) {
        var c;
        return [
          o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(l),
          (c = a.creative) == null || (c = c.object_story_spec) == null
            ? void 0
            : c.instagram_actor_id,
        ];
      }
      var d = o("AdsPageUtils").getPageID(a),
        m =
          (t =
            (n = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(
              l,
            )) != null
              ? n
              : (r = i.promoted_object) == null
                ? void 0
                : r.page_id) != null
            ? t
            : d;
      m == null && s != null && (m = s);
      var p =
        d != null && d === m
          ? o("AdsInstagramActorIDUtils").getInstagramActorID(a)
          : null;
      return [m, p];
    }
    function u(e) {
      var t = s(e),
        n = t[0],
        r = t[1];
      return r == null ? [n, e.defaultInstagramID] : [n, r];
    }
    function c(t, a, l, s) {
      var c,
        d,
        m,
        p,
        _,
        f = l.account,
        g = l.bizAIEligibility,
        h = l.businessWhatsAppBusinessAccountsLoadObject,
        y = l.campaignsMap,
        C = l.contextualDiscoveryAdsEligibilityState,
        b = l.defaultInstagramID,
        v = l.getPage,
        S = l.getShouldEnableAutomaticFlowByDefault,
        R = l.getShouldEnableMusicByDefault,
        L = l.isPostClickExperience,
        E = l.mappedObjective,
        k = l.parentData,
        I = l.placePageSetParentPageID,
        T = l.shouldDefaultForAwarenessPageL2Change,
        D = l.shouldDefaultForVideoEngagementTypeSelection,
        x = l.specialAdCategoriesMap,
        $ = x != null ? x.get(a) : null,
        P = r("nullthrows")(k.get(a)),
        N = P.campaign,
        M = P.campaignGroup,
        w = P.specPlugin,
        A = (c = N.promoted_object) == null ? void 0 : c.full_funnel_objective;
      if (
        o("AdsLeadGenAdGroupUtils").isF2MultiDestinationKeepOriginalAdgroup(
          N,
          s,
        )
      )
        return o(
          "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
        ).updateContextualDiscoveryAdsEligibilitySpec(t, {
          shouldOptIn: !1,
          shouldRenderCheckbox: !0,
          isExplicitOptOut: !0,
        });
      var F = E !== r("AdsAPIObjectives").MESSAGES,
        O = u({
          useFix: F,
          placePageSetParentPageID: I,
          adgroup: t,
          campaign: N,
          campaignGroup: M,
          defaultInstagramID: b,
          account: f,
        }),
        B = O[0],
        W = O[1],
        q =
          B != null ? B : (d = N.promoted_object) == null ? void 0 : d.page_id,
        U = v && q != null ? v(q) : null,
        V =
          W != null
            ? o("AdsInstagramUsernameStoreUtils").loadInstagramUsernameByID(W)
            : null,
        H =
          (V == null ? void 0 : V.loadState) === r("AdsLoadState_LEGACY").LOADED
            ? V == null
              ? void 0
              : V.threads_user_id
            : null,
        G = r("adsConvergenceGetDefaultAdgroupRecord")(
          f,
          E,
          y.get(a),
          !1,
          (m = $ == null ? void 0 : $.toArray()) != null ? m : [],
          null,
          B,
          W,
          o("AdsInstagramUserIdMigrationUtils").PLACEHOLDER_IGID_V2,
          H,
          null,
          null,
          void 0,
          void 0,
          void 0,
          S,
          R,
          C,
          U,
          A || M.objective,
          M.buying_type,
          h,
          g,
        ),
        z = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          M.objective,
          N,
        );
      N.destination_type === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM &&
        (G = o(
          "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
        ).updateContextualDiscoveryAdsEligibilitySpec(G, {
          shouldOptIn: !1,
          shouldRenderCheckbox: !0,
          isExplicitOptOut: !0,
        }));
      var j =
        o(
          "AdsUEditorUnifiedCreationAwarenessUtils",
        ).getCTXDefaultDestinationFromSource(
          U == null ? void 0 : U.ctx_account_based_default_source,
          !1,
          !1,
        ) != null;
      if (
        E === r("AdsAPIObjectives").VIDEO_VIEWS &&
        j &&
        ((D === !0 &&
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementVideoViews(z, A || M.objective)) ||
          (T === !0 &&
            o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).isEligibleForCTXAwarenessVideoViews(N.optimization_goal, E)))
      ) {
        var K = o("AdsChildAttachmentsUtils").isCarouselAd(t),
          Q = M.is_odax_campaign_group === !0,
          X = o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).getSelectedMessagingType(t),
          Y = I != null;
        G = o(
          "AdsUEditorUnifiedCreationVideoViewsAdgroupMutators",
        ).getNewVideoViewsAdgroupWithMessagingFields(
          f,
          G,
          null,
          K,
          Q,
          L != null ? L : !1,
          !1,
          Y,
          !Y,
          null,
          A || M.objective,
          N.optimization_goal,
          U,
          z,
          X,
          w,
        );
      }
      var J = t.name || o("AdsAdCreationUtils").DEFAULT_ADGROUP_NAME.toString();
      if (
        !F &&
        ((p = N.promoted_object) == null ? void 0 : p.page_id) != null
      ) {
        var Z;
        G = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.page_id.set(
          (Z = N.promoted_object) == null ? void 0 : Z.page_id,
          G,
        );
      }
      if (
        E === r("AdsAPIObjectives").CONVERSIONS &&
        (M.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          M.objective === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (z === r("AdsPromotedObjectTypes").PIXEL ||
          z === r("AdsPromotedObjectTypes").WEBSITE)
      ) {
        var ee = r("nullthrows")(k.get(a)),
          te = ee.specPlugin,
          ne = o("WebToWhatsappUtils").isWebToXEligibleForSingleCreative(
            { campaign: N, campaignGroup: M, adgroup: G },
            te,
          ),
          re = o("AdsPageUtils").getPageID(G);
        if (ne) {
          var oe,
            ae =
              re != null
                ? r("AdsPageStore").getLoadObject(re).getValue()
                : null;
          ae &&
            r("isTruthy")(ae.last_website_link) &&
            (o(
              "WebToWhatsappUtils",
            ).isInAdsManagerEngagementObjectiveWeblinkPrefillQE(
              A || M.objective,
            ) ||
              o(
                "WebToWhatsappUtils",
              ).isInAdsManagerLeadsObjectiveWeblinkPrefillQE(
                A || M.objective,
              )) &&
            (G = o(
              "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
            ).setStickyWeblinkPrefill(
              G,
              ae.last_website_link,
              ae,
              A || M.objective,
            ));
          var ie = o("WebToXDefaultingUtils").enableBrowserAddOnDefaultingType(
              f,
              [t.id],
              M,
              N,
              t,
              r("AdsUEditorHostIDs").EDITING,
              ae,
              "conversion_switch_L2",
              N == null ||
                (oe = N.toJS()) == null ||
                (oe = oe.targeting) == null ||
                (oe = oe.geo_locations) == null
                ? void 0
                : oe.countries,
              N.optimization_goal,
            ),
            le = ie.type;
          switch (le) {
            case "whatsapp":
              ((G = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setWhatsAppWebsiteExtensionType(G)),
                r("promiseDone")(
                  (e || (e = n("Promise"))).resolve({}),
                  function () {
                    r("AdsUEditorAdgroupWebToWhatsappDefaultedAction").dispatch(
                      {
                        adgroupIDs: [t.id],
                        hostID: r("AdsUEditorHostIDs").EDITING,
                      },
                      {
                        line: "443",
                        module: "AdsODAXAdgroupReducerUtils.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ));
              break;
            case "messenger":
              G = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setMessengerWebsiteExtensionType(G);
              break;
            case "instagram_direct":
              G = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setInstagramDirectWebsiteExtensionType(G);
              break;
            case "messaging_apps":
              G = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setMessagingAppsWebsiteExtensionType(
                G,
                [].concat((_ = ie.multiDestinationType) != null ? _ : []),
                void 0,
                M.objective,
              );
              break;
            case "phone_call":
              G = o(
                "AdsUEditorAdgroupCallAddOnDefaultingMutator",
              ).applyCallAddOnDefaultBrowserAddOn(
                G,
                ae == null ? void 0 : ae.phone_number_prefill,
                re,
              );
              break;
            case "none":
            case "instant_form":
              G = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).cleanWebsiteExtensionFields(G);
              break;
          }
          G = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setPageWelcomeMessageOnWebsiteExtensionTypeSelection(
            G,
            re,
            le,
            M.objective,
          );
        }
      }
      return (
        (G = o(
          "AdsUEditorAdgroupIncludeInAdStudyMutator",
        ).setAdgroupIncludeInAdStudy(t, G)),
        (G = o(
          "AdsUEditorAdgroupBizAIDefaultOptInMutator",
        ).updateBizAIDefaultOptIn(
          G,
          g,
          o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
            .BizAIDefaultOptInCallSite.ODAX_DEFAULTING,
        )),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").name.set(J),
          r("AdsAdgroupRecordAccessors").id.set(a),
          r("AdsAdgroupRecordAccessors").adset_id.set(t.adset_id),
          r("AdsAdgroupRecordAccessors").campaign_id.set(t.campaign_id),
          r("AdsAdgroupRecordAccessors").status.set(t.status),
        )(G)
      );
    }
    function d(e, t, n) {
      return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, r) {
        return c(e, r, n, t.oldPromotedObjectType);
      });
    }
    function m(e, t) {
      return t
        ? o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .offer_id.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .name.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
              .offer_id.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.offer_id.delete,
          )(e)
        : e;
    }
    ((l._getDefaultPageAndInstagramAccountID = u),
      (l.getDefaultAdgroupForNewMappedObjective = c),
      (l.adsAdgroupSetChannelReducerFn = d),
      (l.maybeClearOffer = m));
  },
  98,
);
