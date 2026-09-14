__d(
  "AdsPECreationStore",
  [
    "invariant",
    "AdsCertificationShowCreationBlockingActionFlux",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsCopyCopyErrorDataActionFlux",
    "AdsCreateCompletedActionFlux",
    "AdsDataAtom",
    "AdsDraftDraftFragmentBatchCreateErrorDataActionFlux",
    "AdsDraftDraftFragmentTooManyFragmentsInDraftDataActionFlux",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsDraftSelectionStore",
    "AdsDuplicationCopySpecsPreCacheLauncher",
    "AdsDuplicationUpgradeLoadDUEntrypointActionFlux",
    "AdsEditorSelectedIDsSelector",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsLiveCreationDataManager",
    "AdsObjectLevelToStore",
    "AdsObjectTypeUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPECreateCancelCreatingActionFlux",
    "AdsPECreateCloseCreateFlowActionFlux",
    "AdsPECreateCreateAdActionFlux",
    "AdsPECreateCreateCampaignActionFlux",
    "AdsPECreateDuplicateAdgroupsActionFlux",
    "AdsPECreateDuplicateCampaignActionFlux",
    "AdsPECreateStartDuplicatingAction",
    "AdsPECreateStartDuplicatingActionFlux",
    "AdsPECreateStartDuplicatingAdgroupByImagesActionFlux",
    "AdsPECreateStartQuickCreateActionFlux",
    "AdsPECreationMode",
    "AdsPEFluxAdSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignSelectionIdClickedActionFlux",
    "AdsPERouterHelper",
    "AdsSelectionLevelSelectors",
    "DuplicationCombinedRelayEntrypointController",
    "DuplicationUpgradeRelayEntrypointController",
    "FluxStore",
    "adsDuplicationCombinedEntrypointContextID",
    "adsDuplicationNewItemTypeUtil",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsPELockedAndPublishingSelectors",
    "adsPEManageAdsSectionSelector",
    "adsUserSettingsSelector",
    "cr:24",
    "createObjectFrom",
    "getByPath",
    "gkx",
    "isFalsey",
    "isTruthy",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("requireDeferred")(
        "getAdsDuplicationDialogInnerPreloadVariables",
      ).__setRef("AdsPECreationStore"),
      c = (function (t) {
        function a() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getPredictionID = function () {
              return n.$AdsPECreationStore$p_6;
            }),
            n.$AdsPECreationStore$p_14(),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.getDuplicateImages = function () {
            return this.$AdsPECreationStore$p_2 || [];
          }),
          (l.getCreationMode = function () {
            return this.$AdsPECreationStore$p_1;
          }),
          (l.getPreferredCampaignGroupIDs = function () {
            return this.$AdsPECreationStore$p_8;
          }),
          (l.getPreferredCampaignIDs = function () {
            return this.$AdsPECreationStore$p_7;
          }),
          (l.getSelectedCampaignGroupID = function () {
            return this.$AdsPECreationStore$p_10;
          }),
          (l.getSelectedCampaignID = function () {
            return this.$AdsPECreationStore$p_9;
          }),
          (l.getDefaultObjective = function () {
            return this.$AdsPECreationStore$p_12;
          }),
          (l.getDefaultBuyingType = function () {
            return this.$AdsPECreationStore$p_13;
          }),
          (l.getSource = function () {
            return this.$AdsPECreationStore$p_11;
          }),
          (l.getDuplicationEntrypointSource = function () {
            return this.$AdsPECreationStore$p_3;
          }),
          (l.isCreating = function () {
            return this.$AdsPECreationStore$p_4;
          }),
          (l.isDialogShown = function () {
            return this.$AdsPECreationStore$p_5;
          }),
          (l.getDuplicationUpgradeEntrypointReference = function () {
            return r(
              "DuplicationUpgradeRelayEntrypointController",
            ).getEntrypointReferenceForDisplay();
          }),
          (l.getDuplicationCombinedEntrypointReference = function () {
            return r(
              "DuplicationCombinedRelayEntrypointController",
            ).getEntrypointReferenceForDisplay();
          }),
          (l.__getActionTypes = function () {
            return [
              o("AdsCertificationShowCreationBlockingActionFlux").actionType,
              o("AdsCopyCopyCompletedDataActionFlux").actionType,
              o("AdsCopyCopyErrorDataActionFlux").actionType,
              o("AdsCreateCompletedActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
                .actionType,
              o("AdsDraftDraftFragmentTooManyFragmentsInDraftDataActionFlux")
                .actionType,
              o("AdsDraftDraftPublishDataActionFlux").actionType,
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
              o("AdsPECreateCancelCreatingActionFlux").actionType,
              o("AdsPECreateCloseCreateFlowActionFlux").actionType,
              o("AdsPECreateCreateAdActionFlux").actionType,
              o("AdsPECreateCreateCampaignActionFlux").actionType,
              o("AdsPECreateDuplicateAdgroupsActionFlux").actionType,
              o("AdsPECreateDuplicateCampaignActionFlux").actionType,
              o("AdsPECreateStartDuplicatingActionFlux").actionType,
              o("AdsPECreateStartDuplicatingAdgroupByImagesActionFlux")
                .actionType,
              o("AdsPECreateStartQuickCreateActionFlux").actionType,
              o("AdsPEFluxCampaignSelectionIdClickedActionFlux").actionType,
              o("AdsPEFluxAdSelectionIdClickedActionFlux").actionType,
              r("AdsDuplicationUpgradeLoadDUEntrypointActionFlux").actionType,
            ];
          }),
          (l.__getDependencyStores = function () {
            return [].concat(
              o(
                "AdsSelectionLevelSelectors",
              ).adsEditorLevelSelector.getStores(),
              o(
                "AdsEditorSelectedIDsSelector",
              ).AdsEditorSelectedIDsSelector.getStores(),
              Array.from(r("AdsObjectLevelToStore").values()),
              o("AdsPECampaignGroupSelectors").getByFieldsSelector.getStores(),
              [r("AdsDraftSelectionStore")],
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedAndPublishingSelector.getStores(),
              r("adsPEManageAdsSectionSelector").getStores(),
              o("adsUserSettingsSelector").adsUserSettingsSelector.getStores(),
            );
          }),
          (l.__onDispatch = function (t) {
            this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
            var e = o("adsUserSettingsSelector").adsUserSettingsSelector(),
              n = t.action;
            e: {
              var a = n;
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType
              ) {
                var i = a;
                this.$AdsPECreationStore$p_15(i);
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateCreateAdActionFlux").actionType &&
                "adgroupCreationData" in a &&
                "commonCreationData" in a &&
                "campaignGroupCreationData" in a &&
                "campaignCreationData" in a
              ) {
                var l = a.adgroupCreationData,
                  s = a.commonCreationData,
                  u = a.campaignGroupCreationData,
                  c = a.campaignCreationData;
                this.$AdsPECreationStore$p_16(l, s, u, c, e);
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateCreateCampaignActionFlux").actionType &&
                "commonCreationData" in a &&
                "campaignGroupCreationData" in a &&
                "campaignCreationData" in a
              ) {
                var d = a.commonCreationData,
                  m = a.campaignGroupCreationData,
                  p = a.campaignCreationData;
                this.$AdsPECreationStore$p_17(d, m, p);
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateDuplicateAdgroupsActionFlux").actionType
              ) {
                var _ = a;
                this.$AdsPECreationStore$p_18(
                  _.commonCreationData,
                  _.campaignGroupCreationData,
                  _.campaignCreationData,
                  _.sourceAdgroupIDs,
                  _.familyLineCounts,
                  _.onCopyCompleted,
                );
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateDuplicateCampaignActionFlux").actionType
              ) {
                var f = a;
                this.$AdsPECreationStore$p_19(
                  f.commonCreationData,
                  f.campaignGroupCreationData,
                  f.sourceCampaignIDs,
                  f.familyLineCounts,
                  f.onCopyCompleted,
                );
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateStartDuplicatingAdgroupByImagesActionFlux")
                    .actionType &&
                "selectedImages" in a
              ) {
                var g = a.selectedImages;
                this.$AdsPECreationStore$p_20(g);
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateStartDuplicatingActionFlux").actionType
              ) {
                var h = a,
                  y = this.$AdsPECreationStore$p_21(h.objectLevel);
                (h.source != null && (this.$AdsPECreationStore$p_3 = h.source),
                  this.$AdsPECreationStore$p_22(
                    y,
                    h.duplicationUpgradeEligibility,
                  ));
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateCancelCreatingActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_23();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsCopyCopyCompletedDataActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_24();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType === o("AdsCopyCopyErrorDataActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_24();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType === o("AdsCreateCompletedActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_24();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o(
                    "AdsDraftDraftFragmentTooManyFragmentsInDraftDataActionFlux",
                  ).actionType
              ) {
                this.$AdsPECreationStore$p_24();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
                    .actionType
              ) {
                this.$AdsPECreationStore$p_24();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsDraftDraftPublishDataActionFlux").actionType
              ) {
                var C = a;
                r("isTruthy")(C.createdInCF) &&
                  r("isTruthy")(C.shouldPublishImmediately) &&
                  this.$AdsPECreationStore$p_24();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateCloseCreateFlowActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_23();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPECreateStartQuickCreateActionFlux").actionType
              ) {
                var b = a;
                (this.$AdsPECreationStore$p_23(),
                  this.$AdsPECreationStore$p_25(b));
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsCertificationShowCreationBlockingActionFlux").actionType
              )
                break e;
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPEFluxCampaignSelectionIdClickedActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_26();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  o("AdsPEFluxAdSelectionIdClickedActionFlux").actionType
              ) {
                this.$AdsPECreationStore$p_26();
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "actionType" in a &&
                a.actionType ===
                  r("AdsDuplicationUpgradeLoadDUEntrypointActionFlux")
                    .actionType &&
                "duplicationUpgradeEligibility" in a
              ) {
                var v = a.duplicationUpgradeEligibility;
                this.$AdsPECreationStore$p_27(v);
                break e;
              }
              break e;
            }
          }),
          (l.$AdsPECreationStore$p_15 = function (o) {
            if (o.data.params.duplicate_campaign === !0) {
              var t;
              this.$AdsPECreationStore$p_10 =
                (t = o.data.params.selected_campaign_ids) == null
                  ? void 0
                  : t.first();
              var a = this.$AdsPECreationStore$p_21("campaign");
              this.$AdsPECreationStore$p_22(a);
              return;
            }
            if (o.data.params.duplicate_campaign_upgrade === !0) {
              var l;
              ((this.$AdsPECreationStore$p_10 =
                (l = o.data.params.selected_campaign_ids) == null
                  ? void 0
                  : l.first()),
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    var e = r("AdsPERouterHelper").getRouteBuilder();
                    e.getCurrentParams().duplicate_campaign_upgrade === !0 &&
                      (e.setDuplicateCampaignUpgrade(null).navigate(),
                      n("cr:24") != null
                        ? n("cr:24")({
                            objectLevel: "campaign",
                            shouldResolveDuplicationUpgradeEligibility: !1,
                            source: "click_campaign_group_duplicate",
                          })
                        : r("AdsPECreateStartDuplicatingAction").dispatch(
                            {
                              duplicationUpgradeEligibility: {
                                isEligibleForDuplicationUpgrade: !1,
                              },
                              objectLevel: "campaign",
                              source: "click_campaign_group_duplicate",
                            },
                            {
                              line: "482",
                              module: "AdsPECreationStore.js",
                              moduleID: i.id,
                            },
                          ));
                  },
                ));
              return;
            }
            if (o.data.params.duplicate_ad === !0) {
              var s, u;
              if (
                ((this.$AdsPECreationStore$p_10 =
                  (s = o.data.params.selected_campaign_ids) == null
                    ? void 0
                    : s.first()),
                (this.$AdsPECreationStore$p_9 =
                  (u = o.data.params.selected_adset_ids) == null
                    ? void 0
                    : u.first()),
                this.$AdsPECreationStore$p_10 !== null &&
                  this.$AdsPECreationStore$p_9 !== null)
              ) {
                this.$AdsPECreationStore$p_28();
                var c = this.$AdsPECreationStore$p_21("ad");
                this.$AdsPECreationStore$p_22(c);
              }
              return;
            }
            ((this.$AdsPECreationStore$p_6 = r("getByPath")(o, [
              "data",
              "params",
              "rf_prediction_id",
            ])),
              (this.$AdsPECreationStore$p_10 = r("getByPath")(o, [
                "data",
                "params",
                "campaign",
              ])));
          }),
          (l.$AdsPECreationStore$p_23 = function () {
            (this.$AdsPECreationStore$p_14(), this.__emitChange());
          }),
          (l.$AdsPECreationStore$p_29 = function (t) {
            ((this.$AdsPECreationStore$p_5 = t),
              t ||
                (r("DuplicationUpgradeRelayEntrypointController").dispose(),
                r("DuplicationCombinedRelayEntrypointController").dispose()));
          }),
          (l.$AdsPECreationStore$p_14 = function () {
            ((this.$AdsPECreationStore$p_2 = []),
              (this.$AdsPECreationStore$p_1 = null),
              (this.$AdsPECreationStore$p_4 = !1),
              (this.$AdsPECreationStore$p_6 = null),
              (this.$AdsPECreationStore$p_8 = {}),
              (this.$AdsPECreationStore$p_7 = {}),
              (this.$AdsPECreationStore$p_9 = null),
              (this.$AdsPECreationStore$p_10 = null),
              (this.$AdsPECreationStore$p_12 = null),
              (this.$AdsPECreationStore$p_13 = null),
              this.$AdsPECreationStore$p_29(!1));
          }),
          (l.$AdsPECreationStore$p_16 = function (t, n, o, a, i) {
            ((this.$AdsPECreationStore$p_4 = !0),
              this.__emitChange(),
              r("AdsLiveCreationDataManager").createAd([t], n, o, a, i));
          }),
          (l.$AdsPECreationStore$p_17 = function (t, n, o) {
            ((this.$AdsPECreationStore$p_4 = !0),
              this.__emitChange(),
              r("AdsLiveCreationDataManager").createCampaign(t, n, o));
          }),
          (l.$AdsPECreationStore$p_18 = function (t, n, a, i, l, s) {
            var e = r("gkx")("8518")
              ? i
              : Array.from(
                  o(
                    "AdsEditorSelectedIDsSelector",
                  ).AdsEditorSelectedIDsSelector("adgroup"),
                );
            (r("AdsLiveCreationDataManager").duplicateAdgroups(
              t,
              n,
              a,
              e,
              l,
              s,
            ),
              this.$AdsPECreationStore$p_14(),
              this.__emitChange());
          }),
          (l.$AdsPECreationStore$p_19 = function (t, n, a, i, l) {
            ((this.$AdsPECreationStore$p_4 = !0), this.__emitChange());
            var e = r("gkx")("8518")
              ? a
              : Array.from(
                  o(
                    "AdsEditorSelectedIDsSelector",
                  ).AdsEditorSelectedIDsSelector("campaign"),
                );
            r("AdsLiveCreationDataManager").duplicateCampaign(t, n, e, i, l);
          }),
          (l.$AdsPECreationStore$p_28 = function () {
            if (!r("adsPEManageAdsSectionSelector")()) {
              ((this.$AdsPECreationStore$p_8 = r("createObjectFrom")([])),
                (this.$AdsPECreationStore$p_7 = r("createObjectFrom")([])));
              return;
            }
            for (
              var e = [],
                t = [],
                n = o("AdsSelectionLevelSelectors").adsEditorLevelSelector(),
                a = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(n),
                i = o(
                  "AdsEditorSelectedIDsSelector",
                ).AdsEditorSelectedIDsSelector(r("nullthrows")(a)),
                l = 0;
              l < (i.length || 1);
              l++
            ) {
              for (
                var s = i[l] || null, u = null, c = null;
                n && r("isFalsey")(s);
              )
                ((n = this.$AdsPECreationStore$p_30(n)),
                  (s = this.$AdsPECreationStore$p_31(n)));
              if (n && r("isTruthy")(s)) {
                var d = r("AdsObjectLevelToStore").get(n);
                if (d) {
                  var m = d.getCachedObject(s).getValue();
                  if (m)
                    e: {
                      var p = n;
                      if (p === "campaign") {
                        c = m.id;
                        break e;
                      }
                      if (p === "ad_set") {
                        ((c = m.campaign_id), (u = m.id));
                        break e;
                      }
                      if (p === "ad") {
                        ((c = m.campaign_id), (u = m.adset_id));
                        break e;
                      }
                      {
                        var _ = p;
                        break e;
                      }
                    }
                }
              }
              (c && t.push(c), u && e.push(u));
            }
            ((this.$AdsPECreationStore$p_8 = r("createObjectFrom")(t)),
              (this.$AdsPECreationStore$p_7 = r("createObjectFrom")(e)));
          }),
          (l.$AdsPECreationStore$p_26 = function () {
            this.$AdsPECreationStore$p_5 &&
              (this.$AdsPECreationStore$p_28(), this.__emitChange());
          }),
          (l.$AdsPECreationStore$p_31 = function (t) {
            var e = this.$AdsPECreationStore$p_32(t);
            return e[0];
          }),
          (l.$AdsPECreationStore$p_32 = function (t) {
            return (function (e) {
              if (e === "campaign")
                return o(
                  "adsMgmtCampaignGroupSelectedIdsSelector",
                ).adsMgmtCampaignGroupSelectedIdsSelector();
              if (e === "ad_set")
                return o(
                  "adsMgmtCampaignSelectedIdsSelector",
                ).adsMgmtCampaignSelectedIdsSelector();
              if (e === "ad")
                return o(
                  "adsMgmtAdgroupSelectedIdsSelector",
                ).adsMgmtAdgroupSelectedIdsSelector();
              {
                var t = e;
                return [];
              }
            })(t);
          }),
          (l.$AdsPECreationStore$p_30 = function (t) {
            return (function (e) {
              if (e === "ad_set") return "campaign";
              if (e === "ad") return "ad_set";
              {
                var t = e;
                return null;
              }
            })(t);
          }),
          (l.$AdsPECreationStore$p_24 = function () {
            (this.$AdsPECreationStore$p_14(), this.__emitChange());
          }),
          (l.$AdsPECreationStore$p_20 = function (t) {
            (this.$AdsPECreationStore$p_14(),
              (this.$AdsPECreationStore$p_2 = t),
              this.$AdsPECreationStore$p_29(!0),
              (this.$AdsPECreationStore$p_1 =
                r("AdsPECreationMode").DuplicateAdgroupByImages),
              this.$AdsPECreationStore$p_28(),
              this.$AdsPECreationStore$p_33(),
              this.__emitChange());
          }),
          (l.$AdsPECreationStore$p_27 = function (t, n) {
            (n === void 0 && (n = "preload"),
              (t == null ? void 0 : t.isEligibleForDuplicationUpgrade) === !0 &&
                (n === "open"
                  ? r(
                      "DuplicationUpgradeRelayEntrypointController",
                    ).loadEntrypointForDisplay(t.scopes)
                  : r(
                      "DuplicationUpgradeRelayEntrypointController",
                    ).preloadEntrypoint(t.scopes)));
          }),
          (l.$AdsPECreationStore$p_33 = function (t) {
            var e = this;
            if (r("gkx")("13614")) {
              var n = r("adsDuplicationNewItemTypeUtil")(
                  this.$AdsPECreationStore$p_1,
                ),
                o =
                  (t == null ? void 0 : t.isEligibleForDuplicationUpgrade) ===
                  !0
                    ? t.scopes
                    : null;
              u.onReadyImmediately(function (t) {
                var a = t(n, r("adsDuplicationCombinedEntrypointContextID"));
                a != null &&
                  (r(
                    "DuplicationCombinedRelayEntrypointController",
                  ).loadEntrypointForDisplay({ bauVariables: a, upgrade: o }),
                  e.__emitChange());
              });
            }
          }),
          (l.$AdsPECreationStore$p_21 = function (t) {
            var e = (function (e) {
              if (e === "campaign")
                return r("AdsPECreationMode").DuplicateCampaignGroups;
              if (e === "ad_set")
                return r("AdsPECreationMode").DuplicateCampaigns;
              if (e === "ad") return r("AdsPECreationMode").DuplicateAdgroups;
              {
                var t = e;
                return null;
              }
            })(t);
            return (e || s(0, 2844), e);
          }),
          (l.$AdsPECreationStore$p_22 = function (t, n) {
            var e;
            (this.$AdsPECreationStore$p_14(),
              this.$AdsPECreationStore$p_29(!0),
              (this.$AdsPECreationStore$p_1 = t),
              this.$AdsPECreationStore$p_28(),
              r("AdsDuplicationCopySpecsPreCacheLauncher")(
                n == null || (e = n.scopes) == null ? void 0 : e.scope_ids,
              ),
              this.$AdsPECreationStore$p_27(n, "open"),
              this.$AdsPECreationStore$p_33(n),
              this.__emitChange());
          }),
          (l.$AdsPECreationStore$p_25 = function (t) {
            (this.$AdsPECreationStore$p_28(),
              (this.$AdsPECreationStore$p_10 = t.data.selectedCampaignGroupID),
              (this.$AdsPECreationStore$p_9 = t.data.selectedCampaignID),
              this.$AdsPECreationStore$p_10 === null &&
                this.$AdsPECreationStore$p_9 != null &&
                (this.$AdsPECreationStore$p_10 = this.$AdsPECreationStore$p_34(
                  t.data.level,
                )),
              (this.$AdsPECreationStore$p_11 = t.data.source),
              this.$AdsPECreationStore$p_35());
          }),
          (l.$AdsPECreationStore$p_35 = function () {
            var e = this.$AdsPECreationStore$p_10;
            r("isTruthy")(e) &&
              o("adsPELockedAndPublishingSelectors")
                .adsPELockedAndPublishingSelector()
                .has(e) &&
              ((this.$AdsPECreationStore$p_10 = null),
              (this.$AdsPECreationStore$p_9 = null));
          }),
          (l.$AdsPECreationStore$p_34 = function (t) {
            return t === "campaign"
              ? null
              : Object.keys(this.getPreferredCampaignGroupIDs() || {})[0];
          }),
          a
        );
      })(r("FluxStore"));
    c.__moduleID = i.id;
    var d = new c();
    l.default = d;
  },
  98,
);
