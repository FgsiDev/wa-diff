__d(
  "adsCopyCompleted",
  [
    "AdsApplicationUtils",
    "AdsCampaignStructureSimpleCreateActionTypes",
    "AdsCampaignStructureSimpleCreateActions",
    "AdsCopyActionUtils",
    "AdsCopySource",
    "AdsCrepeAdObjectUtils",
    "AdsCrepePackageConfigUtil",
    "AdsDraftGroupByUtils",
    "AdsDuplicationIntoPackageUtils",
    "AdsManagerQPLUserFlowLogger",
    "AdsMgmtOpenTrayStore",
    "AdsObjectTypes",
    "AdsPENavigationUtils",
    "AdsPERouterHelper",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionPFRHubUtils",
    "AdsToggleSource",
    "AdsUEditorHostIDs",
    "FBLogger",
    "QPLUserFlow",
    "adsCreateSelector",
    "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToast",
    "adsGetIsMessageMarketingEnabledFromAdgroupIDSelector",
    "adsGetIsMessageMarketingEnabledFromCampaignGroupIDSelector",
    "adsGetIsMessageMarketingEnabledFromCampaignIDSelector",
    "adsMgmtTrayStateSelector",
    "adsPECrepeEditorStepIndexSelector",
    "adsPECrepeIsPackageSelector",
    "adsPECrepePackageConfigForAdObjectIDAndLevelSelector",
    "adsPECrepePackageConfigForAdObjectIDSelector",
    "cr:38161",
    "curry",
    "first",
    "gkx",
    "ifRequired",
    "isAdsSimpleCreateSurface",
    "maybeApplyIDs",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (n == null || n.length === 0) return !1;
      var a = r("AdsPERouterHelper").getRouter().getQueryParams(),
        i = a.current_step,
        l = a.package_config_id,
        s = o("AdsCrepeAdObjectUtils").getAdObjectTypeFromLevel(t);
      if (l == null) {
        var u;
        l =
          (u = r("adsPECrepePackageConfigForAdObjectIDAndLevelSelector")()(
            o("AdsCrepePackageConfigUtil").getObjectIDAndLevelMemoized(n[0], t),
          )) == null
            ? void 0
            : u.id;
      }
      if (l != null)
        return (
          (i = o(
            "adsPECrepeEditorStepIndexSelector",
          ).adsPECrepeGetEditorStepIndexForObjectTypeSelector()(s)),
          i === -1 && (i = 0),
          e
            .section("PACKAGE_AD_CREATION")
            .setCreationPackageConfigID(l)
            .setCurrentStep(i),
          !0
        );
      var c = r("AdsPENavigationUtils").getNavSectionFromAdObjectLevel(t);
      return (e.section(c), !0);
    }
    var s = function (t) {
      return r("adsCreateSelector")(
        [r("adsPECrepePackageConfigForAdObjectIDSelector")],
        function (n) {
          var e;
          return (
            ((e = n({ objectID: r("first")(t) })) == null ? void 0 : e.id) !=
            null
          );
        },
        { name: i.id },
      );
    };
    function u(e, t, n) {
      var r,
        o = !1;
      return (
        e != null ? (o = e.some(n)) : t != null && (o = t.some(n)),
        o && ((r = t == null ? void 0 : t.length) != null ? r : 0) > 1
      );
    }
    function c(t, a, l, c, d, m) {
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var p,
          _,
          f,
          g,
          h,
          y,
          C = [],
          b = [];
        ((C = r("ifRequired")(
          "adsMgmtCampaignSelectedIdsSelector",
          function (e) {
            var t = e.adsMgmtCampaignSelectedIdsSelector;
            return t();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Error: %s isn't required",
                "adsMgmtCampaignSelectedIdsSelector",
              ),
              []
            );
          },
        )),
          (b = r("ifRequired")(
            "adsMgmtCampaignGroupSelectedIdsSelector",
            function (e) {
              var t = e.adsMgmtCampaignGroupSelectedIdsSelector;
              return t();
            },
            function () {
              return (
                r("FBLogger")("ads").mustfix(
                  "Duplication Error: %s isn't required",
                  "adsMgmtCampaignGroupSelectedIdsSelector",
                ),
                []
              );
            },
          )));
        var v = o("AdsDraftGroupByUtils").groupAdObjectIDsByLevel(a);
        if (l === r("AdsCopySource").CREATION_PACKAGE_MFR_UPGRADE) {
          c == null || c(a);
          return;
        }
        if (r("isAdsSimpleCreateSurface")()) {
          if (
            (n("cr:38161").dispatch(
              {
                adgroupIDs: v.ad,
                fragments: a,
                hostID: r("AdsUEditorHostIDs").EDITING,
                newParentCampaignGroupIds: d,
                responses: t,
                shouldKeepOriginalsInCampaignTree: !1,
                source: l,
              },
              { line: "198", module: "adsCopyCompleted.js", moduleID: i.id },
            ),
            l !== r("AdsCopySource").SIMPLE_CREATE_QUICK_DUPLICATE)
          ) {
            var S,
              R,
              L = (S = v.ad) == null ? void 0 : S[0],
              E = (R = v.ad_set) == null ? void 0 : R[0];
            L != null
              ? o(
                  "AdsCampaignStructureSimpleCreateActions",
                ).handleAdsCampaignStructureSimpleCreateAction(
                  r("AdsCampaignStructureSimpleCreateActionTypes").NAVIGATE,
                  L,
                  r("AdsObjectTypes").ADGROUP,
                )
              : E != null &&
                o(
                  "AdsCampaignStructureSimpleCreateActions",
                ).handleAdsCampaignStructureSimpleCreateAction(
                  r("AdsCampaignStructureSimpleCreateActionTypes").NAVIGATE,
                  E,
                  r("AdsObjectTypes").CAMPAIGN,
                );
          }
          c == null || c(a);
          return;
        }
        var k = r("adsPECrepeIsPackageSelector")(),
          I = o("AdsCopyActionUtils").createCopyCompletedData(v, C, b),
          T = s((p = I.campaignGroupIDs) != null ? p : [])(),
          D = r("AdsPERouterHelper").getRouter().getActiveState(),
          x = r("adsMgmtTrayStateSelector")(),
          $ =
            (b.length === 1 && D.section === "L3") ||
            (C.length === 1 && D.section === "L2") ||
            (((_ = I.adgroupIDs) == null ? void 0 : _.length) === 1 &&
              D.section === "L1"),
          P = !1;
        if (r("gkx")("13496")) {
          var N = u(
              b,
              I.campaignGroupIDs,
              r("adsGetIsMessageMarketingEnabledFromCampaignGroupIDSelector")(),
            ),
            M = u(
              C,
              I.campaignIDs,
              r("adsGetIsMessageMarketingEnabledFromCampaignIDSelector")(),
            ),
            w = u(
              null,
              I.adgroupIDs,
              r("adsGetIsMessageMarketingEnabledFromAdgroupIDSelector")(),
            );
          P = N || M || w;
        }
        if (l === r("AdsCopySource").DUPLICATE_AND_PUBLISH) {
          (o("AdsManagerQPLUserFlowLogger").forEachMarker(
            r("qpl")._(270218207, "7032"),
            function (e, t, n) {
              r("QPLUserFlow").endSuccess(n, {
                instanceKey: t,
                annotations: {
                  string: { end_action_name: "duplicate_and_publish" },
                },
              });
            },
          ),
            n("cr:38161").dispatch(
              {
                responses: t,
                fragments: a,
                adgroupIDs: v.ad,
                source: l,
                shouldKeepOriginalsInCampaignTree: x != null,
                hostID: r("AdsUEditorHostIDs").EDITING,
                newParentCampaignGroupIds: d,
              },
              { line: "292", module: "adsCopyCompleted.js", moduleID: i.id },
            ),
            c == null || c(a));
          return;
        }
        if (
          (k && D.section !== "PACKAGE_AD_CREATION" && !$) ||
          (T &&
            ((f = (g = I.campaignGroupIDs) == null ? void 0 : g.length) != null
              ? f
              : 0) > 1) ||
          l === r("AdsCopySource").ASC_FRAGMENTATION_MFR ||
          P
        ) {
          var A, F;
          n("cr:38161").dispatch(
            {
              responses: t,
              fragments: a,
              adgroupIDs: v.ad,
              source: l,
              shouldKeepOriginalsInCampaignTree: x != null,
              hostID: r("AdsUEditorHostIDs").EDITING,
              newParentCampaignGroupIds: d,
            },
            { line: "316", module: "adsCopyCompleted.js", moduleID: i.id },
          );
          var O =
              (A = t[0]) == null ||
              (A = A.extraData) == null ||
              (A = A.unificationUpgradeData) == null
                ? void 0
                : A.isUnificationUpgrade,
            B =
              (F = t[0]) == null || (F = F.extraData) == null
                ? void 0
                : F.isEligibleForBAUToPGDStandardDuplication;
          if (
            ((l === r("AdsCopySource").ASC_FRAGMENTATION_MFR ||
              l === r("AdsCopySource").SHOPS_ADS_L3_UPGRADE_DUPLICATE ||
              l === r("AdsCopySource").BLENDED_ADS_L3_UPGRADE_DUPLICATE ||
              O === !0 ||
              B === !0) &&
              c &&
              c(a),
            l !== r("AdsCopySource").SHOPS_ADS_L3_UPGRADE_DUPLICATE &&
              l !== r("AdsCopySource").BLENDED_ADS_L3_UPGRADE_DUPLICATE &&
              O !== !0 &&
              B !== !0)
          ) {
            var W;
            o(
              "AdsPerfInteractionLogDataUtil",
            ).addHeroTracingInteractionCustomMetadata(
              m,
              ((W = {}), (W.duplication_no_reroute = !0), W),
            );
            return;
          }
        }
        var q =
            o(
              "AdsMgmtOpenTrayStore",
            ).AdsMgmtOpenTrayStore.getIsEditorHidden() === !1,
          U = function () {
            n("cr:38161").dispatch(
              {
                responses: t,
                fragments: a,
                adgroupIDs: v.ad,
                shouldKeepOriginalsInCampaignTree: x != null && q,
                source: l,
                hostID: r("AdsUEditorHostIDs").EDITING,
                newParentCampaignGroupIds: d,
              },
              { line: "355", module: "adsCopyCompleted.js", moduleID: i.id },
            );
          },
          V = r("AdsPERouterHelper").getRouteBuilder(),
          H = {
            toggleSource: r("AdsToggleSource").copy,
            shouldEditorBeHidden: !1,
          };
        V.action(function () {
          (c && c(a),
            (l === r("AdsCopySource").QUICK_DUPLICATE_ACTION_REDUCER ||
              l === r("AdsCopySource").PASTE_FROM_CLIPBOARD) &&
              r("adsDuplicationMaybeDispatchPromoAdsAlwaysOnToast")(a),
            o("AdsPerfInteractionPFRHubUtils").startPFRInteraction(i.id));
        }).context(H);
        var G = r("curry")(o("maybeApplyIDs").maybeApplyIDsImpl, V),
          z = r("curry")(e, V);
        if (
          (G("campaign", I.campaignGroupIDs),
          G("ad_set", I.campaignIDs),
          ((h = t[0]) == null || (h = h.extraData) == null
            ? void 0
            : h.isOptedInForCreativeTesting) === !0)
        ) {
          var j, K;
          G(
            "ad",
            (j = (K = I.adgroupIDs) == null ? void 0 : K.slice(0, 1)) != null
              ? j
              : [],
          );
        } else G("ad", I.adgroupIDs);
        z("campaign", I.campaignGroupIDs) ||
          z("ad_set", I.campaignIDs) ||
          z("ad", I.adgroupIDs);
        var Q = (y = t[0]) == null ? void 0 : y.fullAdDraftFragments;
        if (
          Q != null &&
          o("AdsDuplicationIntoPackageUtils").isCreationSourceAdDuplication(
            Q[0].source,
          )
        ) {
          var X,
            Y,
            J =
              (X =
                (Y = Q[0].values.find(function (e) {
                  return e.field === "campaign_id";
                })) == null
                  ? void 0
                  : Y.new_value) != null
                ? X
                : "",
            Z = J.split('"').join("");
          if (
            Z.length > 0 &&
            o(
              "AdsDuplicationIntoPackageUtils",
            ).isDestinationPackageCampaignGroup(Z)
          ) {
            var ee,
              te,
              ne =
                (ee =
                  (te = Q[0].values.find(function (e) {
                    return e.field === "adset_id";
                  })) == null
                    ? void 0
                    : te.new_value) != null
                  ? ee
                  : "",
              re = ne.split('"').join("");
            return (
              o(
                "AdsDuplicationIntoPackageUtils",
              ).setSelectedIDsForCreationPackage(V, [Z], [re]),
              V.action(function () {
                (U(), c && c(a));
              }),
              V.navigate()
            );
          }
        }
        var oe = k && l === r("AdsCopySource").PASTE_FROM_CLIPBOARD;
        (!oe && !T && V.tray("EDITOR_DRAWER"), V.navigate(!0), U());
      } else {
        var ae = r("AdsPERouterHelper").getRouteBuilder();
        ae.action(function () {
          n("cr:38161").dispatch(
            {
              responses: t,
              fragments: a,
              adgroupIDs: o("AdsDraftGroupByUtils").groupAdObjectIDsByLevel(a)
                .ad,
              shouldKeepOriginalsInCampaignTree: !0,
              source: l,
              hostID: null,
              newParentCampaignGroupIds: d,
            },
            { line: "464", module: "adsCopyCompleted.js", moduleID: i.id },
          );
        });
      }
    }
    l.default = c;
  },
  98,
);
