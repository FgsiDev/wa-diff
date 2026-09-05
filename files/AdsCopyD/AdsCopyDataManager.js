__d(
  "AdsCopyDataManager",
  [
    "errorCode",
    "AdDraftFragmentSource",
    "AdFLEXPerfConfig",
    "AdsAPIOptimizationGoals",
    "AdsCityRadiusRemovalQEUtils",
    "AdsCopyAcrossObjectiveOption",
    "AdsCopyCopyErrorDataAction",
    "AdsCopyDraftOption",
    "AdsCrepePerformanceUtils",
    "AdsDraftDraftFragmentBatchLoadedDataAction",
    "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
    "AdsDuplicationZeroEditTracker",
    "AdsDuplicationZeroEditTrackingKillSwitch",
    "AdsFrequencyControlEditorConstants",
    "AdsGraphAPI",
    "AdsInterfacesRouter",
    "AdsLandingPageViewsUtils",
    "AdsLinkClicksDeprecationDuplicationUtils",
    "AdsMgmtOpenTrayStore",
    "AdsMgmtStandaloneRouteUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPERouterHelper",
    "AdsPerfInteractionEditorTreeUtils",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionsController",
    "AdsToggleSource",
    "FBLogger",
    "GraphAPIRetry",
    "Promise",
    "QPLUserFlow",
    "ReelsAdPlacement",
    "adsCopyCompleted",
    "adsCopySourceToObjectCreationSource",
    "adsDuplicationGetSelectedCountAtLevel",
    "adsMgmtTrayStateSelector",
    "asyncToGeneratorRuntime",
    "createMapBy",
    "curry",
    "emptyFunction",
    "err",
    "getAdsProcessingDuplicationOverrideTrackingComponent",
    "gkx",
    "ifRequired",
    "isEmpty",
    "isTruthy",
    "maybeApplyIDs",
    "maybePreloadAdsPreflightRecommendations",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = 3;
    function m(e) {
      var t = o("AdsPECampaignGroupSelectors").getByFieldsSelector(),
        n = t(e, { frequency_control_specs: null });
      if (n != null && n.hasValue()) {
        var r = n.getValueEnforcing().frequency_control_specs;
        return Array.from(r != null ? r : []).length > 0;
      }
      return !1;
    }
    function p(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          if (e.ad_object_type === "campaign") {
            var n = e.values.find(function (e) {
              return e.field === "frequency_control_specs";
            });
            if (n != null) {
              var r = JSON.parse(n.new_value);
              r != null && r.length > 0 && t.add(e.ad_object_id);
            }
          }
        }),
        e.map(function (e) {
          if (
            e.ad_object_type !== "ad_set" ||
            t.has(e.parent_ad_object_id) ||
            m(e.parent_ad_object_id)
          )
            return e;
          var n = e.values,
            a = n.find(function (e) {
              return e.field === "frequency_control_specs";
            });
          if (a != null) {
            var i = JSON.parse(a.new_value);
            if (i != null && i.length > 0) return e;
          }
          var l = n.find(function (e) {
            return e.field === "optimization_goal";
          });
          if (l == null) return e;
          var s = JSON.parse(l.new_value);
          if (s !== r("AdsAPIOptimizationGoals").REACH) return e;
          var u = [
              o("AdsFrequencyControlEditorConstants")
                .DEFAULT_FREQUENCY_CONTROL_SPEC,
            ],
            c =
              a != null
                ? n.map(function (e) {
                    return e.field === "frequency_control_specs"
                      ? babelHelpers.extends({}, e, {
                          new_value: JSON.stringify(u),
                        })
                      : e;
                  })
                : [].concat(n, [
                    {
                      field: "frequency_control_specs",
                      old_value: JSON.stringify(null),
                      new_value: JSON.stringify(u),
                    },
                  ]);
          return babelHelpers.extends({}, e, { values: c });
        })
      );
    }
    function _(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          if (!(e.ad_object_type !== "campaign" || e.ad_object_id == null)) {
            var n = e.values.find(function (e) {
              return e.field === "promoted_object";
            });
            if (n != null)
              try {
                var r,
                  o = JSON.parse(n.new_value);
                t.set(
                  e.ad_object_id,
                  (r = o == null ? void 0 : o.product_catalog_id) != null
                    ? r
                    : null,
                );
              } catch (e) {}
          }
        }),
        t
      );
    }
    function f(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          if (!(e.ad_object_type !== "campaign" || e.ad_object_id == null)) {
            var n = e.values.find(function (e) {
              return e.field === "objective";
            });
            if (n != null)
              try {
                t.set(e.ad_object_id, JSON.parse(n.new_value));
              } catch (e) {}
          }
        }),
        t
      );
    }
    function g(e, t, n) {
      var a = o(
        "AdsLinkClicksDeprecationDuplicationUtils",
      ).isAppConversionLocation(e, t == null ? void 0 : t.application_id);
      if (e == null && !a) return null;
      var i = o(
        "AdsLinkClicksDeprecationDuplicationUtils",
      ).getDuplicatedLinkClicksGoal({
        isAdvantagePlusOn: n,
        isApp: a,
        isMessaging: o(
          "AdsLinkClicksDeprecationDuplicationUtils",
        ).isMessagingDestination(e),
      });
      return i === r("AdsAPIOptimizationGoals").LINK_CLICKS ? null : i;
    }
    function h(e) {
      if (!o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding())
        return e;
      var t = _(e),
        n = f(e);
      return e.map(function (e) {
        var a;
        if (e.ad_object_type !== "ad_set") return e;
        var i = e.values,
          l = i.find(function (e) {
            return e.field === "optimization_goal";
          });
        if (l == null) return e;
        var s = JSON.parse(l.new_value),
          u = i.find(function (e) {
            return e.field === "destination_type";
          }),
          c = u != null ? JSON.parse(u.new_value) : null,
          d = e.parent_ad_object_id,
          m = d != null ? n.get(d) : null,
          p =
            (a = o(
              "AdsLinkClicksDeprecationDuplicationUtils",
            ).getDuplicatedTrafficMessagingGoal(m, c)) != null
              ? a
              : o(
                  "AdsLinkClicksDeprecationDuplicationUtils",
                ).getDuplicatedTrafficWebsiteGoal(m, c, s);
        if (p == null) {
          if (s !== r("AdsAPIOptimizationGoals").LINK_CLICKS) return e;
          var _ = i.find(function (e) {
              return e.field === "promoted_object";
            }),
            f = _ != null ? JSON.parse(_.new_value) : null,
            h = d != null ? t.get(d) : null,
            y =
              h != null || (f == null ? void 0 : f.product_catalog_id) != null;
          p = g(c, f, y);
        }
        if (p == null || p === s) return e;
        var C = i.map(function (e) {
          return e.field === "optimization_goal"
            ? babelHelpers.extends({}, e, { new_value: JSON.stringify(p) })
            : e;
        });
        return babelHelpers.extends({}, e, { values: C });
      });
    }
    var y = [
      (c = r("AdDraftFragmentSource")).CLICK_AD_DUPLICATE,
      c.CLICK_CAMPAIGN_DUPLICATE,
      c.CLICK_CAMPAIGN_GROUP_DUPLICATE,
      c.UPGRADE_DUPLICATE,
      c.QUICK_DUPLICATE_REDIRECT,
      c.QUICK_DUPLICATE_FROM_TOOLBAR,
    ];
    function C(e, t, a, l, s, c) {
      var d, m, _, f, g, y;
      l === void 0 && (l = null);
      var C =
          e.length > 0
            ? (d =
                (m = e[0]) == null || (m = m.extraData) == null
                  ? void 0
                  : m.count) != null
              ? d
              : 1
            : 0,
        b = o(
          "getAdsProcessingDuplicationOverrideTrackingComponent",
        ).getAdsProcessingDuplicationOverrideTrackingComponent(
          t,
          C,
          (_ = r("adsDuplicationGetSelectedCountAtLevel")(c, s)) != null
            ? _
            : 1,
        ),
        v = b != null ? { overrideTrackingSurface: String(b) } : {},
        S = r("AdsPerfInteractionsController").startInteraction(
          (f =
            r("AdFLEXPerfConfig") == null ||
            (g = r("AdFLEXPerfConfig").get()) == null
              ? void 0
              : g.adsPerfInteractionsDuplicationProcessingDuplicationEvent) !=
            null
            ? f
            : "am.duplication.processing_duplication",
          i.id,
          v,
        );
      o("AdsPerfInteractionEditorTreeUtils").isCampaignStructureOpen() &&
        r("AdsPerfInteractionsController").startInteraction(
          "am.editor.load_campaign_tree",
          i.id,
        );
      var L = [],
        E = [],
        k = [];
      if (
        (e.forEach(function (e) {
          var n = R(e, t, a, S, c);
          E.push(n);
        }),
        o(
          "AdsPerfInteractionLogDataUtil",
        ).addHeroTracingInteractionCustomMetadata(
          S,
          ((y = {}),
          (y.source = t),
          (y.event_source = a),
          (y.item_count = C),
          (y.is_creation_package = o(
            "AdsCrepePerformanceUtils",
          ).isCreationPackage()),
          y),
        ),
        r("QPLUserFlow").addAnnotations(r("qpl")._(270218207, "7032"), {
          string_array: { start_callsite_extra: [t, a] },
        }),
        s != null)
      ) {
        var I = {};
        switch (a) {
          case r("AdDraftFragmentSource").CLICK_CAMPAIGN_GROUP_DUPLICATE:
            I.fragment_intent_campaign_group_count = s.campaignGroup * C;
          case r("AdDraftFragmentSource").CLICK_CAMPAIGN_DUPLICATE:
            I.fragment_intent_campaign_count = s.campaign * C;
          case r("AdDraftFragmentSource").CLICK_AD_DUPLICATE:
            I.fragment_intent_adgroup_count = s.adgroup * C;
            break;
          case r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_EDIT_DROPDOWN:
          case r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_TREE:
            I = {
              fragment_intent_campaign_group_count: s.campaignGroup,
              fragment_intent_campaign_count: s.campaign,
              fragment_intent_adgroup_count: s.adgroup,
            };
            break;
        }
        o(
          "AdsPerfInteractionLogDataUtil",
        ).addHeroTracingInteractionCustomMetadata(S, I);
      }
      var $ = e
        .map(function (e) {
          var t;
          return (t = e.extraData) == null ? void 0 : t.campaignGroupID;
        })
        .filter(r("isTruthy"))
        .filter(Boolean);
      r("promiseDone")(
        (u || (u = n("Promise"))).all(E).then(function (e) {
          var t,
            n = e.filter(Boolean);
          if (n.length === 0) throw r("err")("Copy failed - reject promise");
          var l = [];
          (n.forEach(function (e) {
            var t = x(e);
            if (
              ((L = L.concat(t.fragments)),
              k.push(t),
              o(
                "AdsDuplicationZeroEditTrackingKillSwitch",
              ).isZeroEditDuplicationTrackingEnabled())
            )
              try {
                o("AdsDuplicationZeroEditTracker").registerCopiedFragments(
                  t.draftID,
                  t.fragments,
                  a,
                );
              } catch (e) {
                r("FBLogger")("ads").warn(
                  "Failed to register fragments duplication zero edit",
                );
              }
            t.fullAdDraftFragments != null &&
              (l = l.concat(t.fullAdDraftFragments));
          }),
            (l = p(l)),
            (l = h(l)),
            l.some(T) &&
              o(
                "AdsCityRadiusRemovalQEUtils",
              ).isInCityRadiusRemovalQETreatment() &&
              (l = l.map(D)),
            r("AdsDraftDraftFragmentBatchLoadedDataAction").dispatch(
              {
                fragments: r("createMapBy")(l, function (e) {
                  return e.id;
                }),
              },
              { line: "527", module: "AdsCopyDataManager.js", moduleID: i.id },
            ));
          var s = 0,
            u = 0,
            c = 0;
          (L.forEach(function (e) {
            e.ad_object_type === "ad"
              ? (s += 1)
              : e.ad_object_type === "ad_set"
                ? (u += 1)
                : e.ad_object_type === "campaign" && (c += 1);
          }),
            o(
              "AdsPerfInteractionLogDataUtil",
            ).addHeroTracingInteractionCustomMetadata(
              S,
              ((t = {}),
              (t.duplicated_adgroups_count = s),
              (t.duplicated_campaigns_count = u),
              (t.duplicated_campaign_groups_count = c),
              t),
            ),
            r("maybePreloadAdsPreflightRecommendations")(l));
        }),
        function () {
          return r("adsCopyCompleted")(k, L, t, l, $, S);
        },
        r("emptyFunction"),
      );
    }
    function b(e) {
      var t,
        n,
        a = r("ifRequired")(
          "adsMgmtAdgroupSelectedIdsSelector",
          function (e) {
            return e.adsMgmtAdgroupSelectedIdsSelector();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Eager Loading Error: %s isn't required, fragmentSource: %s",
                "adsMgmtAdgroupSelectedIdsSelector",
                e,
              ),
              []
            );
          },
        ),
        i = r("ifRequired")(
          "adsMgmtCampaignSelectedIdsSelector",
          function (e) {
            var t = e.adsMgmtCampaignSelectedIdsSelector;
            return t();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Eager Loading Error: %s isn't required, fragmentSource: %s",
                "adsMgmtCampaignSelectedIdsSelector",
                e,
              ),
              []
            );
          },
        ),
        l = r("ifRequired")(
          "adsMgmtCampaignGroupSelectedIdsSelector",
          function (e) {
            var t = e.adsMgmtCampaignGroupSelectedIdsSelector;
            return t();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Eager Loading Error: %s isn't required, fragmentSource: %s",
                "adsMgmtCampaignGroupSelectedIdsSelector",
                e,
              ),
              []
            );
          },
        );
      if (a.length === 0 && i.length === 0 && l.length === 0) {
        r("FBLogger")("ads").mustfix(
          "Duplication Eager Loading Error: all preselected IDs are empty, fragmentSource: %s",
          e,
        );
        return;
      }
      var s =
        (t = r("AdsInterfacesRouter").getOrNull()) == null
          ? void 0
          : t.getLeafRoute().name;
      if (s == null) {
        r("FBLogger")("ads").mustfix(
          "Duplication Eager Loading Error: could not get the level from the route, fragmentSource: %s",
          e,
        );
        return;
      }
      var u = v(s);
      if (u == null) {
        r("FBLogger")("ads").warn(
          "Duplication Eager Loading Error: could not get ad object level from route level, fragmentSource: %s, level: %s",
          e,
          s,
        );
        return;
      }
      var c = r("AdsPERouterHelper").getRouteBuilder(),
        d = r("curry")(o("maybeApplyIDs").maybeApplyIDsImpl, c);
      (c.context({
        toggleSource: r("AdsToggleSource").copy,
        shouldEditorBeHidden: !0,
      }),
        d("campaign", l),
        d("ad_set", i),
        d("ad", a));
      var m =
        (n = o("AdsMgmtStandaloneRouteUtils").getEditorRouteNameForStandalone(
          !1,
          u,
          "EDITOR_DRAWER",
        )) != null
          ? n
          : "";
      (c.route(m), c.navigate(!0));
    }
    function v(e) {
      return e === "AdsPEAdsICERoute"
        ? "ad"
        : e === "AdsPEAdsetsICERoute"
          ? "ad_set"
          : e === "AdsPECampaignsICERoute"
            ? "campaign"
            : null;
    }
    function S(e, t, n, o, a) {
      var i = r("adsCopySourceToObjectCreationSource")(t, n);
      return C(e, t, i, o, a, n);
    }
    function R(e, t, a, l, s) {
      var u,
        c,
        m,
        p,
        _,
        f,
        g,
        h,
        y = e.accountID,
        C = e.draftID,
        v = e.extraData,
        S = e.ids,
        R = e.newParentID,
        E = e.requestID;
      S.length === 0 &&
        r("FBLogger")("ads", "duplication_errors").mustfix(
          "ids should not be an empty array. Request: %s",
          JSON.stringify(e),
        );
      var T = o("AdsGraphAPI")
          .get(i.id)
          .adaccount(y)
          .edge("asyncadcopiesfullfragments"),
        D = k(e.extraData),
        x = {
          addraft_id: C,
          ad_object_ids: S,
          conversion_option: D,
          auto_conversion: o("AdsCopyAcrossObjectiveOption")
            .AdsCopyAcrossObjectiveOption.CONVERSION,
          copy_count: v ? v.count : null,
          copy_options: I(e.extraData),
          excluded_adset_ids:
            v == null || (u = v.odaxMigrationData) == null
              ? void 0
              : u.excluded_adset_ids,
          odax_objective:
            v == null || (c = v.odaxMigrationData) == null
              ? void 0
              : c.targetObjective,
          is_compatible_odax_objective:
            v == null || (m = v.odaxMigrationData) == null
              ? void 0
              : m.isCompatibleTargetObjective,
          l3_custom_rename: r("isTruthy")(
            v == null || (p = v.odaxMigrationData) == null
              ? void 0
              : p.customName,
          )
            ? v == null || (_ = v.odaxMigrationData) == null
              ? void 0
              : _.customName
            : v == null
              ? void 0
              : v.splitTestCustomName,
          deep_copy: !0,
          all_ad_object_ids: [],
          rename_strategy:
            (v == null ? void 0 : v.rename_strategy) || "ONLY_TOP_LEVEL_RENAME",
          reparenting_id: R,
          skip_tracking_specs: !0,
          source: a,
          draft_conversion: r("AdsCopyDraftOption").DRAFT_CONVERSION,
          split_test_study_id:
            v == null || (f = v.splitTestFreeformDuplicationConfig) == null
              ? void 0
              : f.studyID,
          creation_package_config_id:
            (g = v == null ? void 0 : v.creationPackageConfigID) != null
              ? g
              : v == null || (h = v.unificationUpgradeData) == null
                ? void 0
                : h.creationPackageConfigID,
          dsa_beneficiary: v == null ? void 0 : v.dsaBeneficiary,
          dsa_payor: v == null ? void 0 : v.dsaPayor,
          opt_in_duplication_automated_chat_upgrade_recommendations:
            (v == null
              ? void 0
              : v.duplicationAutomatedChatUpgradeRecommendations) != null &&
            (v == null
              ? void 0
              : v.duplicationAutomatedChatUpgradeRecommendations.length) > 0,
          opt_in_duplication_cta_upgrade_recommendations:
            (v == null
              ? void 0
              : v.duplicationCtaUpgradeOptInRecommendations) != null &&
            (v == null
              ? void 0
              : v.duplicationCtaUpgradeOptInRecommendations.length) > 0,
          opt_in_duplication_budget_recommendations:
            (v == null ? void 0 : v.duplicationBudgetRecommendations) != null &&
            (v == null ? void 0 : v.duplicationBudgetRecommendations.length) >
              0,
          opt_in_duplication_dc_optimization_recommendations:
            (v == null
              ? void 0
              : v.duplicationDCOptimizationUpgradeRecommendations) != null &&
            (v == null
              ? void 0
              : v.duplicationDCOptimizationUpgradeRecommendations.length) > 0,
          custom_targeting: v == null ? void 0 : v.customTargeting,
          custom_budget: v == null ? void 0 : v.customBudget,
          custom_budget_type: v == null ? void 0 : v.customBudgetType,
          custom_start_date: v == null ? void 0 : v.customStartDate,
          custom_end_date: v == null ? void 0 : v.customEndDate,
          regional_regulated_categories:
            v == null ? void 0 : v.regionalRegulatedCategories,
          broad_geo_upsell_toggle: v == null ? void 0 : v.broadGeoUpsellToggle,
          l1_custom_rename: v == null ? void 0 : v.newAdgroupName,
          l2_custom_rename: v == null ? void 0 : v.newCampaignName,
        },
        $ = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = null,
              t = yield o(
                "GraphAPIRetry",
              ).postWithRetries_UNSAFE_IDEMPOTENT_ONLY(T, x, d, function (t) {
                var n =
                  t.code === 1 &&
                  (t.error_subcode === 1357045 ||
                    t.error_subcode === 1357051) &&
                  r("gkx")("22338");
                return (n && (e = !0), n);
              });
            return (
              (t.extraData = v),
              (t.requestID = E || 0),
              (t.sourceAdObjectIDs = S),
              o(
                "AdsPerfInteractionLogDataUtil",
              ).addHeroTracingInteractionCustomMetadata(l, {
                has_retried_after_empty_response: e,
              }),
              t
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return (
        !o(
          "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
        ).isEligibleForPreloadEditorOnHoverSilent() &&
          !o(
            "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
          ).isEligibleForPreloadEditorOnSelectSilent() &&
          L(a) &&
          b(a),
        $().then(
          function (e) {
            return e;
          },
          function (e) {
            r("AdsCopyCopyErrorDataAction").dispatch(
              {
                accountID: y,
                error: e,
                ids: S,
                extraData: v,
                level: s,
                requestID: E || 0,
                source: t,
              },
              { line: "812", module: "AdsCopyDataManager.js", moduleID: i.id },
            );
          },
        )
      );
    }
    function L(e) {
      return (
        r("adsMgmtTrayStateSelector")() === null &&
        o("AdsMgmtOpenTrayStore").AdsMgmtOpenTrayStore.getIsEditorHidden() ===
          !1 &&
        y.indexOf(e) >= 0
      );
    }
    function E(e, t) {
      var n, o, a, i, l, s, u, c;
      if (
        (n = e.campaignIDsToAddInstagramReelsPlacement) != null &&
        n.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var d;
        t.ADD_INSTAGRAM_REELS_PLACEMENT =
          ((d = {}),
          (d.CAMPAIGN_ID = e.campaignIDsToAddInstagramReelsPlacement),
          (d.DUPLICATION_TYPE = e.custom_event_type),
          d);
      }
      if (
        (o = e.campaignIDsToAddReelsPlacement) != null &&
        (o = o.get(r("ReelsAdPlacement").INSTAGRAM_REELS)) != null &&
        o.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var m, p;
        t.ADD_INSTAGRAM_REELS_PLACEMENT =
          ((p = {}),
          (p.CAMPAIGN_ID =
            (m = e.campaignIDsToAddReelsPlacement) == null
              ? void 0
              : m.get(r("ReelsAdPlacement").INSTAGRAM_REELS)),
          (p.DUPLICATION_TYPE = e.custom_event_type),
          p);
      }
      if (
        (a = e.campaignIDsToAddReelsPlacement) != null &&
        (a = a.get(r("ReelsAdPlacement").FACEBOOK_REELS)) != null &&
        a.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var _, f;
        t.ADD_FACEBOOK_REELS_PLACEMENT =
          ((f = {}),
          (f.CAMPAIGN_ID =
            (_ = e.campaignIDsToAddReelsPlacement) == null
              ? void 0
              : _.get(r("ReelsAdPlacement").FACEBOOK_REELS)),
          (f.DUPLICATION_TYPE = e.custom_event_type),
          f);
      }
      if (
        (i = e.campaignIDsToAddReelsPlacement) != null &&
        (i = i.get(r("ReelsAdPlacement").FB_REELS_OVERLAY)) != null &&
        i.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var g, h;
        t.ADD_FACEBOOK_REELS_OVERLAY_PLACEMENT =
          ((h = {}),
          (h.CAMPAIGN_ID =
            (g = e.campaignIDsToAddReelsPlacement) == null
              ? void 0
              : g.get(r("ReelsAdPlacement").FB_REELS_OVERLAY)),
          (h.DUPLICATION_TYPE = e.custom_event_type),
          h);
      }
      if (
        e.campaignIDsToAddInstreamVideoPlacement &&
        e.campaignIDsToAddInstreamVideoPlacement.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var y;
        t.ADD_INSTREAM_VIDEOS_PLACEMENT =
          ((y = {}),
          (y.CAMPAIGN_ID = e.campaignIDsToAddInstreamVideoPlacement),
          (y.DUPLICATION_TYPE = e.custom_event_type),
          y);
      }
      if (
        (l = e.campaignIDsToAddInstagramExploreHomePlacement) != null &&
        l.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var C;
        t.ADD_INSTAGRAM_EXPLORE_HOME_PLACEMENT =
          ((C = {}),
          (C.CAMPAIGN_ID = e.campaignIDsToAddInstagramExploreHomePlacement),
          (C.DUPLICATION_TYPE = e.custom_event_type),
          C);
      }
      if (
        (s = e.campaignIDsToAddInstagramLeadGenUpsellPlacements) != null &&
        s.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var b;
        t.ADD_INSTAGRAM_LEAD_GEN_UPSELL_PLACEMENTS =
          ((b = {}),
          (b.CAMPAIGN_ID = e.campaignIDsToAddInstagramLeadGenUpsellPlacements),
          (b.DUPLICATION_TYPE = e.custom_event_type),
          b);
      }
      if (
        (u = e.campaignIDsToAddFacebookProfileFeedPlacement) != null &&
        u.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var v;
        t.ADD_FACEBOOK_PROFILE_FEED_PLACEMENT =
          ((v = {}),
          (v.CAMPAIGN_ID = e.campaignIDsToAddFacebookProfileFeedPlacement),
          (v.DUPLICATION_TYPE = e.custom_event_type),
          v);
      }
      if (
        e.campaignIDsToOptInConnectedTVPlacement &&
        e.campaignIDsToOptInConnectedTVPlacement.length
      ) {
        var S;
        t.ADD_CONNECTED_TV_PLACEMENT =
          ((S = {}),
          (S.CAMPAIGN_ID = e.campaignIDsToOptInConnectedTVPlacement),
          S);
      }
      if (
        e.campaignIDsToAddMessengerPlacement &&
        e.campaignIDsToAddMessengerPlacement.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var R;
        t.ADD_MESSENGER_PLACEMENT =
          ((R = {}),
          (R.CAMPAIGN_ID = e.campaignIDsToAddMessengerPlacement),
          (R.DUPLICATION_TYPE = e.custom_event_type),
          R);
      }
      ((c = e.splitTestFreeformDuplicationConfig) == null
        ? void 0
        : c.addMessengerMarketingMessagesPlacement) === !0 &&
        (t.ADD_MESSENGER_MARKETING_MESSAGES_PLACEMENT = {});
    }
    function k(t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
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
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se;
      if (!t) return {};
      var ue = {};
      if (t.preCacheUUID != null) {
        var ce;
        ue.PRE_CACHE_UUID =
          ((ce = {}), (ce.PRE_CACHE_UUID = t.preCacheUUID), ce);
      }
      if (
        (E(t, ue),
        (n = t.campaignIDsToRollbackTargetingPGDIndividualSetting) != null &&
          n.length)
      ) {
        var de;
        ue.ROLLBACK_TARGETING_PGD_INDIVIDUAL_SETTING =
          ((de = {}),
          (de.CAMPAIGN_IDS_TO_ROLLBACK_TARGETING_PGD_INDIVIDUAL_SETTING =
            t.campaignIDsToRollbackTargetingPGDIndividualSetting),
          de);
      }
      if (
        t.campaignIDsToAddWhatsAppDestination &&
        t.campaignIDsToAddWhatsAppDestination.length
      ) {
        var me;
        ue.ADD_WHATSAPP_DESTINATION =
          ((me = {}),
          (me.CAMPAIGN_ID = t.campaignIDsToAddWhatsAppDestination),
          me);
      }
      if (
        t.campaignIDsToAddMessengerDestination &&
        t.campaignIDsToAddMessengerDestination.length
      ) {
        var pe;
        ue.ADD_MESSENGER_DESTINATION =
          ((pe = {}),
          (pe.CAMPAIGN_ID = t.campaignIDsToAddMessengerDestination),
          pe);
      }
      if (t.shopAdsUpsell === !0) {
        var _e;
        ue.SHOPS_ADS_UPSELL_DATA =
          ((_e = {}), (_e.SHOPS_ADS_UPSELL_ENABLED = t.shopAdsUpsell), _e);
      }
      if (t.shopsAdsAdgroupUpgradesMap) {
        var fe;
        ue.SHOPS_ADS_DUPLICATION_UPGRADE =
          ((fe = {}),
          (fe.ADGROUP_IDS_TO_UPGRADE = t.shopsAdsAdgroupUpgradesMap),
          fe);
      }
      if (t.convertToConversionLeadOptimizationGoal === !0) {
        var ge;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_QUALITY_LEAD =
          ((ge = {}),
          (ge.SHOULD_SWITCH_TO_QUALITY_LEAD_OPTIMIZATION_GOAL =
            t.convertToConversionLeadOptimizationGoal),
          ge);
      }
      if (t.convertToLeadGenerationOptimizationGoal === !0) {
        var he;
        ue.SWITCH_CLO_PROXY_TO_LEAD_GENERATION =
          ((he = {}),
          (he.SHOULD_SWITCH_CLO_PROXY_TO_LEAD_GENERATION =
            t.convertToLeadGenerationOptimizationGoal),
          he);
      }
      if (t.convertToConversationsOptimizationGoal === !0) {
        var ye;
        ue.CONVERT_TO_CONVERSATIONS_OPTIMIZATION_GOAL =
          ((ye = {}),
          (ye.SHOULD_OPT_IN_CONVERSATIONS_OPTIMIZATION_GOAL =
            t.convertToConversationsOptimizationGoal),
          ye);
      }
      if (t.convertToLeadsObjective === !0) {
        var Ce;
        ue.CONVERT_TO_LEADS_OBJECTIVE =
          ((Ce = {}),
          (Ce.SHOULD_OPT_IN_LEADS_OBJECTIVE = t.convertToLeadsObjective),
          Ce);
      }
      if (t.convertToEngagementObjective === !0) {
        var be;
        ue.CONVERT_TO_ENGAGEMENT_OBJECTIVE =
          ((be = {}),
          (be.SHOULD_OPT_IN_ENGAGEMENT_OBJECTIVE =
            t.convertToEngagementObjective),
          be);
      }
      if (t.convertToMessengerDestination === !0) {
        var ve;
        ue.CONVERT_TO_MESSENGER_DESTINATION =
          ((ve = {}),
          (ve.SHOULD_OPT_IN_MESSENGER_DESTINATION =
            t.convertToMessengerDestination),
          ve);
      }
      if (t.convertToSMCTA === !0) {
        var Se;
        ue.CONVERT_TO_SMCTA =
          ((Se = {}), (Se.SHOULD_OPT_IN_SMCTA = t.convertToSMCTA), Se);
      }
      if (t.convertToEmptyFrequencyControl === !0) {
        var Re;
        ue.CONVERT_TO_EMPTY_FREQUENCY_CONTROL =
          ((Re = {}),
          (Re.SHOULD_OPT_IN_EMPTY_FREQUENCY_CONTROL =
            t.convertToEmptyFrequencyControl),
          Re);
      }
      if ((o = t.reelsMusicDuplicationEligible) != null && o.length) {
        var Le;
        ue.CONVERT_TO_AUTOFLOW_MUSIC_ADGROUP =
          ((Le = {}), (Le.ADGROUP_ID = t.reelsMusicDuplicationEligible), Le);
      }
      if (
        (a = t.adgroupIDsToTurnOnSiteExtensionsGuidanceDuplication) != null &&
        a.length
      ) {
        var Ee;
        ue.ADD_SITE_EXTENSIONS =
          ((Ee = {}),
          (Ee.ADGROUP_ID =
            t.adgroupIDsToTurnOnSiteExtensionsGuidanceDuplication),
          Ee);
      }
      if ((i = t.adgroupIDsToTurnOnSmsVerification) != null && i.length) {
        var ke;
        ue.TURN_ON_SMS_VERIFICATION =
          ((ke = {}),
          (ke.ADGROUP_ID = t.adgroupIDsToTurnOnSmsVerification),
          ke);
      }
      if (t.turnOnSmsVerificationForAllAds === !0) {
        var Ie;
        ue.TURN_ON_SMS_VERIFICATION = babelHelpers.extends(
          {},
          ue.TURN_ON_SMS_VERIFICATION,
          ((Ie = {}),
          (Ie.SHOULD_OPT_IN_SMS_VERIFICATION =
            t.turnOnSmsVerificationForAllAds),
          Ie),
        );
      }
      if ((l = t.adgroupIDsToTurnOnBizAIAgent) != null && l.length) {
        var Te;
        ue.TURN_ON_BIZ_AI_AGENT =
          ((Te = {}), (Te.ADGROUP_ID = t.adgroupIDsToTurnOnBizAIAgent), Te);
      }
      if (
        (s = t.adgroupIDsToTurnOnCtxRecommendedTemplateBundle) != null &&
        s.length
      ) {
        var De;
        ue.TURN_ON_CTX_RECOMMENDED_TEMPLATE_BUNDLE =
          ((De = {}),
          (De.ADGROUP_ID = t.adgroupIDsToTurnOnCtxRecommendedTemplateBundle),
          (De.CTX_ELIGIBLE_CHILD_REC_TYPES =
            t.ctxRecommendedTemplateBundleEligibleChildRecTypes),
          De);
      }
      if (t.convertToPurchaseOptimizationGoal === !0) {
        var xe;
        ue.CONVERT_TO_PURCHASE_OPTIMIZATION_GOAL =
          ((xe = {}),
          (xe.SHOULD_OPT_IN_PURCHASE_OPTIMIZATION_GOAL =
            t.convertToPurchaseOptimizationGoal),
          xe);
      }
      if (t.convertToOffsiteConversionGoal === !0) {
        var $e;
        ue.CONVERT_TO_OFFSITE_CONVERSION_GOAL =
          (($e = {}),
          ($e.SHOULD_OPT_IN_OFFSITE_CONVERSION_GOAL =
            t.convertToOffsiteConversionGoal),
          $e);
      }
      if (t.convertToValueOptimizationGoal === !0) {
        var Pe;
        ue.CONVERT_TO_VALUE_OPTIMIZATION_GOAL =
          ((Pe = {}),
          (Pe.SHOULD_OPT_IN_VALUE_OPTIMIZATION_GOAL =
            t.convertToValueOptimizationGoal),
          Pe);
      }
      if (t.destinationCampaignGroupObjective != null) {
        var Ne;
        ue.DESTINATION_CAMPAIGN_GROUP =
          ((Ne = {}),
          (Ne.DESTINATION_CAMPAIGN_GROUP_OBJECTIVE =
            t.destinationCampaignGroupObjective),
          Ne);
      }
      if (t.convertToAutoflowAdgroup != null) {
        var Me;
        ue.CONVERT_TO_AUTOFLOW_ADGROUP =
          ((Me = {}),
          (Me.SHOULD_OPT_IN_AUTOFLOW = t.convertToAutoflowAdgroup),
          Me);
      }
      if (t.convertToMultiAdvertiserAdsAdgroup === !0) {
        var we;
        ue.CONVERT_TO_MULTI_ADVERTISER_ADS_ADGROUP =
          ((we = {}),
          (we.SHOULD_OPT_IN_MULTI_ADVERTISER_ADS =
            t.convertToMultiAdvertiserAdsAdgroup),
          we);
      }
      if ((u = t.adgroupIDsToTurnOnCatalogDynamicMedia) != null && u.length) {
        var Ae;
        ue.TURN_ON_CATALOG_DYNAMIC_MEDIA =
          ((Ae = {}),
          (Ae.ADGROUP_ID = t.adgroupIDsToTurnOnCatalogDynamicMedia),
          Ae);
      }
      if (
        (c = t.advantagePlusCreativeCatalogDuplicationEligibleAdgroup) !=
          null &&
        c.length
      ) {
        var Fe;
        ue.CONVERT_TO_ACO_ADGROUP =
          ((Fe = {}),
          (Fe.SHOULD_OPT_IN_ACO =
            t.advantagePlusCreativeCatalogDuplicationEligibleAdgroup),
          Fe);
      }
      if (
        (d = t.adgroupIDsToTurnOnCreativeImageTemplates) != null &&
        d.length
      ) {
        var Oe;
        ue.TURN_ON_CREATIVE_IMAGE_TEMPLATES =
          ((Oe = {}),
          (Oe.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeImageTemplates),
          Oe);
      }
      if ((m = t.adgroupIDsToTurnOnCreativeImageTouchups) != null && m.length) {
        var Be;
        ue.TURN_ON_CREATIVE_IMAGE_TOUCHUPS =
          ((Be = {}),
          (Be.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeImageTouchups),
          Be);
      }
      if (
        (p = t.adgroupIDsToTurnOnCreativeTextOptimizations) != null &&
        p.length
      ) {
        var We;
        ue.TURN_ON_CREATIVE_TEXT_OPTIMIZATIONS =
          ((We = {}),
          (We.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeTextOptimizations),
          We);
      }
      if ((_ = t.adgroupIDsToTurnOnCreativeVideoAutocrop) != null && _.length) {
        var qe;
        ue.TURN_ON_CREATIVE_VIDEO_AUTO_CROP =
          ((qe = {}),
          (qe.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeVideoAutocrop),
          qe);
      }
      if ((f = t.duplicationUpgradeRelatedMediaData) != null && f.length) {
        var Ue;
        ue.TURN_ON_RELATED_MEDIA_DUPLICATION_UPGRADE =
          ((Ue = {}),
          (Ue.RELATED_MEDIA = t.duplicationUpgradeRelatedMediaData),
          Ue);
      }
      if (t.duplicationUpgradeDurationSettingsRecommendationData != null) {
        var Ve;
        ue.UPGRADE_DURATION_SETTINGS_FOR_DUPLICATION =
          ((Ve = {}),
          (Ve.CAMPAIGN_ID =
            t.duplicationUpgradeDurationSettingsRecommendationData.campaign_ids),
          (Ve.SABR_RECOMMENDED_DURATION_DAYS =
            t.duplicationUpgradeDurationSettingsRecommendationData.recommended_duration_days),
          Ve);
      }
      if (
        (g = t.campaignIDsToTurnOnLookalikeTargetingRelaxation) != null &&
        g.length
      ) {
        var He;
        ue.TURN_ON_LOOKALIKE_TARGETING_RELAXATION =
          ((He = {}),
          (He.CAMPAIGN_ID = t.campaignIDsToTurnOnLookalikeTargetingRelaxation),
          He);
      }
      if (
        (h = t.campaignIDsToTurnOnCustomAudienceTargetingRelaxation) != null &&
        h.length
      ) {
        var Ge;
        ue.TURN_ON_CUSTOM_AUDIENCE_TARGETING_RELAXATION =
          ((Ge = {}),
          (Ge.CAMPAIGN_ID =
            t.campaignIDsToTurnOnCustomAudienceTargetingRelaxation),
          Ge);
      }
      if (
        (y = t.campaignGroupIDsToTurnOnAdsetBudgetSharing) != null &&
        y.length
      ) {
        var ze;
        ue.TURN_ON_AD_SET_BUDGET_SHARING =
          ((ze = {}),
          (ze.CAMPAIGN_GROUP_IDS_TO_UPGRADE_TO_AD_SET_BUDGET_SHARING =
            t.campaignGroupIDsToTurnOnAdsetBudgetSharing),
          ze);
      }
      if (
        (C = t.adgroupIdsToTurnOnWhatsappBrowserExtension) != null &&
        C.length
      ) {
        var je;
        ue.ADD_WHATSAPP_BROWSER_ADD_ON =
          ((je = {}),
          (je.ADGROUP_IDS_TO_UPGRADE =
            t.adgroupIdsToTurnOnWhatsappBrowserExtension),
          je);
      }
      if (
        (b = t.adgroupIdsToTurnOnMessengerBrowserExtension) != null &&
        b.length
      ) {
        var Ke;
        ue.CONVERT_TO_MESSENGER_BROWSER_ADD_ON =
          ((Ke = {}),
          (Ke.ADGROUP_IDS_TO_UPGRADE =
            t.adgroupIdsToTurnOnMessengerBrowserExtension),
          Ke);
      }
      if (
        (v = t.campaignIDsToTurnOnDetailedTargetingOptimization) != null &&
        v.length
      ) {
        var Qe;
        ue.TURN_ON_DETAILED_TARGETING_OPTIMIZATION =
          ((Qe = {}),
          (Qe.CAMPAIGN_ID = t.campaignIDsToTurnOnDetailedTargetingOptimization),
          Qe);
      }
      if (
        (S = t.campaignIDsToTurnOnAdvantageAudienceTargetingAutomation) !=
          null &&
        S.length
      ) {
        var Xe;
        ue.TURN_ON_ADVANTAGE_AUDIENCE_TARGETING_AUTOMATION =
          ((Xe = {}),
          (Xe.CAMPAIGN_ID =
            t.campaignIDsToTurnOnAdvantageAudienceTargetingAutomation),
          Xe);
      }
      if (
        (R = t.campaignIDsToTurnOnCreativeAudiencePairing) != null &&
        R.length
      ) {
        var Ye;
        ue.TURN_ON_CREATIVE_AUDIENCE_PAIRING =
          ((Ye = {}),
          (Ye.CAMPAIGN_ID = t.campaignIDsToTurnOnCreativeAudiencePairing),
          Ye);
      }
      if ((L = t.campaignIDsToTurnOnBroadgeoTargeting) != null && L.length) {
        var Je;
        ue.TURN_ON_BROAD_GEO_TARGETING =
          ((Je = {}),
          (Je.CAMPAIGN_ID = t.campaignIDsToTurnOnBroadgeoTargeting),
          Je);
      }
      if ((k = t.campaignIDsToTurnOnDeviceTargeting) != null && k.length) {
        var Ze;
        ue.TURN_ON_DEVICE_TARGETING =
          ((Ze = {}),
          (Ze.CAMPAIGN_ID = t.campaignIDsToTurnOnDeviceTargeting),
          Ze);
      }
      if ((I = t.turnOnEngagedViewAttribution) != null && I.length) {
        var et;
        ue.TURN_ON_ENGAGED_VIEW_ATTRIBUTION =
          ((et = {}),
          (et.CAMPAIGN_IDS_TO_TURN_ON_ENGAGED_VIEW_ATTRIBUTION =
            t.turnOnEngagedViewAttribution),
          et);
      }
      if ((T = t.turnOnIncrementalAttribution) != null && T.length) {
        var tt;
        ue.TURN_ON_INCREMENTAL_ATTRIBUTION =
          ((tt = {}), (tt.CAMPAIGN_ID = t.turnOnIncrementalAttribution), tt);
      }
      if ((D = t.campaignIDsToTurnOnAdvantagePlacements) != null && D.length) {
        var nt;
        ue.TURN_ON_ADVANTAGE_PLACEMENTS =
          ((nt = {}),
          (nt.CAMPAIGN_ID = t.campaignIDsToTurnOnAdvantagePlacements),
          nt);
      }
      if (
        ((x = t.unificationUpgradeData) == null
          ? void 0
          : x.isUnificationUpgrade) === !0
      ) {
        var rt;
        ue.UNIFICATION_DUPLICATION_UPGRADE =
          ((rt = {}),
          (rt.IS_UNIFICATION_UPGRADE =
            t.unificationUpgradeData.isUnificationUpgrade),
          (rt.SHOULD_SPLIT_CAMPAIGN =
            t.unificationUpgradeData.shouldSplitCampaignForUnificationUpgrade),
          rt);
      }
      if (t.isEligibleForBAUToPGDStandardDuplication === !0) {
        var ot;
        ue.BAU_TO_PGD_STANDARD_DUPLICATION =
          ((ot = {}), (ot.IS_BAU_TO_PGD_STANDARD_DUPLICATION = !0), ot);
      }
      if (($ = t.copyAdgroupAgain) != null && $.length) {
        var at;
        ue.COPY_ADGROUP_AGAIN =
          ((at = {}), (at.ADGROUP_ID = t.copyAdgroupAgain), at);
      }
      if (
        (P = t.campaignIDsToSwitchToWebAndAppConversionLocation) != null &&
        P.length
      ) {
        var it;
        ue.SWITCH_CONVERSION_LOCATION_TO_WEB_AND_APP =
          ((it = {}),
          (it.CAMPAIGN_ID = t.campaignIDsToSwitchToWebAndAppConversionLocation),
          it);
      }
      if (
        (N = t.campaignIDsToUpsellSoftOptOutToNonAplusP) != null &&
        N.length
      ) {
        var lt;
        ue.UPSELL_SOFT_OPT_OUT_TO_NON_APLUS_P =
          ((lt = {}),
          (lt.CAMPAIGN_ID = t.campaignIDsToUpsellSoftOptOutToNonAplusP),
          lt);
      }
      if (
        (M = t.adgroupIDsToConvertToAdvantagePlusDestination) != null &&
        M.length
      ) {
        var st;
        ue.CONVERT_TO_ADVANTAGE_PLUS_DESTINATION_ADGROUP =
          ((st = {}),
          (st.ADGROUP_ID = t.adgroupIDsToConvertToAdvantagePlusDestination),
          st);
      }
      if (
        (w = t.campaignIDsToSwitchToWebAndInstantFormConversionLocation) !=
          null &&
        w.length
      ) {
        var ut;
        ue.SWITCH_CONVERSION_LOCATION_TO_WEBSITE_AND_INSTANT_FORM =
          ((ut = {}),
          (ut.CAMPAIGN_ID =
            t.campaignIDsToSwitchToWebAndInstantFormConversionLocation),
          ut);
      }
      if (
        (A = t.campaignIDsToSwitchToWebAndInstoreConversionLocation) != null &&
        A.length
      ) {
        var ct;
        ue.SWITCH_CONVERSION_LOCATION_TO_WEB_AND_INSTORE =
          ((ct = {}),
          (ct.CAMPAIGN_ID =
            t.campaignIDsToSwitchToWebAndInstoreConversionLocation),
          ct);
      }
      if (
        (F = t.campaignIDsToSwitchToWebsiteAndCallsConversionLocation) !=
          null &&
        F.length
      ) {
        var dt;
        ue.SWITCH_CONVERSION_LOCATION_TO_WEBSITE_AND_CALLS =
          ((dt = {}),
          (dt.CAMPAIGN_ID =
            t.campaignIDsToSwitchToWebsiteAndCallsConversionLocation),
          dt);
      }
      if ((O = t.campaignIDsToEnableCallAdsL2Dayparting) != null && O.length) {
        var mt;
        ue.CALL_ADS_L2_DAYPARTING =
          ((mt = {}),
          (mt.CAMPAIGN_ID = t.campaignIDsToEnableCallAdsL2Dayparting),
          mt);
      }
      if (
        (B = t.campaignIDsToConvertToCTDLeadsOptimization) != null &&
        B.length
      ) {
        var pt;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_LEAD_GENERATION =
          ((pt = {}),
          (pt.CAMPAIGN_ID = t.campaignIDsToConvertToCTDLeadsOptimization),
          pt);
      }
      if (
        (W = t.campaignIDsToConvertToCTMLeadsOptimization) != null &&
        W.length
      ) {
        var _t;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_LEAD_GENERATION =
          ((_t = {}),
          (_t.CAMPAIGN_ID = t.campaignIDsToConvertToCTMLeadsOptimization),
          _t);
      }
      if (
        (q = t.campaignIDsToConvertToCTMValueOptimization) != null &&
        q.length
      ) {
        var ft;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_VALUE_OPTIMIZATION_FOR_CTX =
          ((ft = {}),
          (ft.CAMPAIGN_ID = t.campaignIDsToConvertToCTMValueOptimization),
          ft);
      }
      if ((U = t.adgroupIDsToConvertToB2PMessaging) != null && U.length) {
        var gt;
        ue.CONVERT_TO_B2P_MESSAGING =
          ((gt = {}),
          (gt.ADGROUP_ID = t.adgroupIDsToConvertToB2PMessaging),
          gt);
      }
      if ((V = t.adgroupIDsToConvertToChatOnWhatsapp) != null && V.length) {
        var ht;
        ue.CONVERT_TO_CHAT_ON_WHATSAPP =
          ((ht = {}),
          (ht.ADGROUP_ID = t.adgroupIDsToConvertToChatOnWhatsapp),
          ht);
      }
      if (
        (H = t.adgroupIDsToConvertToPartnershipAdsDynamicHeader) != null &&
        H.length
      ) {
        var yt;
        ue.CONVERT_TO_PARTNERSHIP_AD_DYNAMIC_HEADER =
          ((yt = {}),
          (yt.ADGROUP_ID = t.adgroupIDsToConvertToPartnershipAdsDynamicHeader),
          yt);
      }
      if (
        (G = t.campaignIDsToConvertToPurchaseOptimization) != null &&
        G.length
      ) {
        var Ct;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_PURCHASE_OPTIMIZATION =
          ((Ct = {}),
          (Ct.CAMPAIGN_ID = t.campaignIDsToConvertToPurchaseOptimization),
          Ct);
      }
      if (
        (z = t.campaignIDsToConvertToCTDPurchaseOptimization) != null &&
        z.length
      ) {
        var bt;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_PURCHASE_OPTIMIZATION =
          ((bt = {}),
          (bt.CAMPAIGN_ID = t.campaignIDsToConvertToCTDPurchaseOptimization),
          bt);
      }
      if (
        (j = t.campaignIDsToConvertToCTWALeadOptimization) != null &&
        j.length
      ) {
        var vt;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_LEAD_GENERATION =
          ((vt = {}),
          (vt.CAMPAIGN_ID = t.campaignIDsToConvertToCTWALeadOptimization),
          vt);
      }
      if (
        (K = t.campaignIDsToConvertToCTWAPurchaseOptimization) != null &&
        K.length
      ) {
        var St;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_PURCHASE_OPTIMIZATION =
          ((St = {}),
          (St.CAMPAIGN_ID = t.campaignIDsToConvertToCTWAPurchaseOptimization),
          St);
      }
      if (
        (Q = t.campaignIDsToConvertToInAppAdImpressionRoasAndroid) != null &&
        Q.length
      ) {
        var Rt;
        ue.IN_APP_AD_IMPRESSION_ROAS_ANDROID =
          ((Rt = {}),
          (Rt.CAMPAIGN_ID =
            t.campaignIDsToConvertToInAppAdImpressionRoasAndroid),
          Rt);
      }
      if (
        (X = t.campaignIDsToConvertToValueOptimizationGoalIAP) != null &&
        X.length
      ) {
        var Lt;
        ue.CONVERT_TO_VALUE_OPTIMIZATION_GOAL_IAP =
          ((Lt = {}),
          (Lt.CAMPAIGN_ID = t.campaignIDsToConvertToValueOptimizationGoalIAP),
          Lt);
      }
      if ((Y = t.campaignIDsToConvertToQualityLead) != null && Y.length) {
        var Et;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_QUALITY_LEAD =
          ((Et = {}),
          (Et.CAMPAIGN_ID = t.campaignIDsToConvertToQualityLead),
          Et);
      }
      if (
        (J = t.campaignIDsToConvertToOffsiteQualityLead) != null &&
        J.length
      ) {
        var kt;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_QUALITY_LEAD =
          ((kt = {}),
          (kt.CAMPAIGN_ID = t.campaignIDsToConvertToOffsiteQualityLead),
          kt);
      }
      if ((Z = t.campaignIDsToConvertToValue) != null && Z.length) {
        var It;
        ue.CONVERT_TO_VALUE_OPTIMIZATION_GOAL =
          ((It = {}), (It.CAMPAIGN_ID = t.campaignIDsToConvertToValue), It);
      }
      if ((ee = t.campaignIDsToConvertToLandingPageView) != null && ee.length) {
        var Tt;
        ue.SWITCH_OPTIMIZATION_GOAL_TO_LPV =
          ((Tt = {}),
          (Tt.CAMPAIGN_ID = t.campaignIDsToConvertToLandingPageView),
          Tt);
      }
      if (
        (te = t.campaignIDsToConvertToMultiMessageDestinations) != null &&
        te.length
      ) {
        var Dt;
        ue.CONVERT_TO_MULTI_MESSAGE_DESTINATIONS =
          ((Dt = {}),
          (Dt.CAMPAIGN_ID = t.campaignIDsToConvertToMultiMessageDestinations),
          Dt);
      }
      if ((t == null ? void 0 : t.isOptedIntoUnifiedPCA) === !0) {
        var xt;
        ue.UNIFIED_PCA =
          ((xt = {}),
          (xt.IS_OPTED_INTO_UNIFIED_PCA = t.isOptedIntoUnifiedPCA),
          xt);
      }
      if (
        (ne = t.campaignIDsToConvertToOffsiteConversion) != null &&
        ne.length
      ) {
        var $t;
        ue.CONVERT_TO_OFFSITE_CONVERSION_GOAL =
          (($t = {}),
          ($t.CAMPAIGN_ID = t.campaignIDsToConvertToOffsiteConversion),
          $t);
      }
      if (
        (re = t.shopsAdsSAOffDuplicationUpgradeAdgroupIDs) != null &&
        re.length
      ) {
        var Pt;
        ue.SHOPS_ADS_SAOFF_DWU_UPGRADE =
          ((Pt = {}),
          (Pt.ADGROUP_IDS_TO_UPGRADE =
            t.shopsAdsSAOffDuplicationUpgradeAdgroupIDs),
          Pt);
      }
      if (
        (oe = t.voViewThroughDefaultDuplicationUpgradeCampaignIds) != null &&
        oe.length
      ) {
        var Nt;
        ue.VO_VIEW_THROUGH_ATTRIBUTION =
          ((Nt = {}),
          (Nt.CAMPAIGN_ID =
            t.voViewThroughDefaultDuplicationUpgradeCampaignIds),
          Nt);
      }
      if (
        (ae = t.smartDefaultValueRulesDuplicationUpgradeCampaignIds) != null &&
        ae.length
      ) {
        var Mt;
        ue.TURN_ON_SMART_DEFAULT_VALUE_RULES =
          ((Mt = {}),
          (Mt.CAMPAIGN_ID =
            t.smartDefaultValueRulesDuplicationUpgradeCampaignIds),
          Mt);
      }
      if (
        (ie = t.campaignIDsToAddInstagram3MajorPlacement) != null &&
        ie.length
      ) {
        var wt;
        ue.ADD_INSTAGRAM_3_MAJOR_PLACEMENTS =
          ((wt = {}),
          (wt.CAMPAIGN_ID = t.campaignIDsToAddInstagram3MajorPlacement),
          wt);
      }
      if (t.adsDuplicationUpgradeProductExtensionsData != null) {
        var At;
        ue.PRODUCT_EXTENSION_DUPLICATION_UPGRADE =
          ((At = {}),
          (At.PRODUCT_EXTENSION_UPGRADE_SPEC =
            t.adsDuplicationUpgradeProductExtensionsData),
          At);
      }
      if ((le = t.phantomAdgroupIDsToRemove) != null && le.length) {
        var Ft;
        ue.REMOVE_PHANTOM_ADS =
          ((Ft = {}),
          (Ft.PHANTOM_ADGROUP_IDS = t.phantomAdgroupIDsToRemove),
          Ft);
      }
      if ((t == null ? void 0 : t.ctxDownfunnelTargetObjective) != null) {
        var Ot;
        ue.CTX_DOWNFUNNEL_TARGET_OBJECTIVE =
          ((Ot = {}),
          (Ot.CTX_DOWNFUNNEL_TARGET_OBJECTIVE =
            t == null ? void 0 : t.ctxDownfunnelTargetObjective),
          Ot);
      }
      return (e || (e = r("isEmpty")))(ue)
        ? {}
        : ((se = {}), (se.conversion_spec = ue), se);
    }
    function I(e) {
      var t = [];
      ((e == null ? void 0 : e.isDuplicateTurnOnAdsStatus) === !0 &&
        t.push("FORCE_RUN_STATUS_ACTIVE"),
        e && e.shouldIncludeComment === !0 && t.push("REUSE_CREATIVE"));
      var n = e == null ? void 0 : e.splitTestFreeformDuplicationConfig;
      return (
        (n == null ? void 0 : n.studyID) != null &&
          (n == null ? void 0 : n.adObjectLevelToCopy) === "campaign" &&
          t.push("AUTO_ACTIVATE_AAA_CAMPAIGN"),
        t
      );
    }
    function T(e) {
      var t, n;
      if (e.ad_object_type !== "ad_set") return !1;
      var r = e.values;
      if (!Array.isArray(r)) return !1;
      var o = r.findIndex(function (e) {
        return (e == null ? void 0 : e.field) === "targeting";
      });
      if (o < 0) return !1;
      var a = (t = r[o]) == null ? void 0 : t.new_value,
        i;
      if (typeof a == "string")
        try {
          i = JSON.parse(a);
        } catch (e) {
          return !1;
        }
      else if (a != null && typeof a == "object") i = a;
      else return !1;
      var l =
        (n = i) == null || (n = n.excluded_geo_locations) == null
          ? void 0
          : n.cities;
      return Array.isArray(l) && l.length > 0;
    }
    function D(e) {
      var t;
      if (e.ad_object_type !== "ad_set") return e;
      var n = e.values;
      if (!Array.isArray(n)) return e;
      var r = n.findIndex(function (e) {
        return (e == null ? void 0 : e.field) === "targeting";
      });
      if (r < 0) return e;
      var o = n[r],
        a = o == null ? void 0 : o.new_value,
        i,
        l = !1;
      if (typeof a == "string") {
        l = !0;
        try {
          i = JSON.parse(a);
        } catch (t) {
          return e;
        }
      } else if (a != null && typeof a == "object") i = a;
      else return e;
      var s =
        (t = i) == null || (t = t.excluded_geo_locations) == null
          ? void 0
          : t.cities;
      if (!Array.isArray(s) || s.length === 0) return e;
      var u = s.map(function (e) {
          return e != null && e.radius === 0
            ? e
            : babelHelpers.extends({}, e, { radius: 0 });
        }),
        c = babelHelpers.extends({}, i, {
          excluded_geo_locations: babelHelpers.extends(
            {},
            i.excluded_geo_locations,
            { cities: u },
          ),
        }),
        d = l ? JSON.stringify(c) : c,
        m = n.map(function (e, t) {
          return t === r ? babelHelpers.extends({}, e, { new_value: d }) : e;
        });
      return babelHelpers.extends({}, e, { values: m });
    }
    function x(e) {
      var t = e.addraft_fragments,
        n = t.map(function (e) {
          return e.ad_object_id;
        }),
        r = {
          fragments: t,
          draftID: e.addraft_id,
          ids: n,
          extraData: e.extraData,
          requestID: e.requestID,
          sourceAdObjectIDs: e.sourceAdObjectIDs,
          fullAdDraftFragments: e.full_addraft_fragments,
        };
      return r;
    }
    ((l.maybeConvertOptimizationGoalForDuplication = h),
      (l.copyWithFragmentSource = C),
      (l.copy = S),
      (l.getConversionOptions = k),
      (l.fragmentHasExcludedCities = T),
      (l.zeroExcludedCityRadiusOnDuplicate = D));
  },
  98,
);
