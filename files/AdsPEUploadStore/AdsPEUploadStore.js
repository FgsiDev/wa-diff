__d(
  "AdsPEUploadStore",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsApplicationIDs",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsDraftDraftClosedDataActionFlux",
    "AdsDraftDraftFragmentBatchCreatedDataActionFlux",
    "AdsDraftDraftFragmentBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux",
    "AdsDraftDraftFragmentListBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentListLoadedDataActionFlux",
    "AdsDraftDraftFragmentListPartialLoadDataActionFlux",
    "AdsDraftDraftHidePublishDetailsDataActionFlux",
    "AdsDraftDraftHidePublishPreviewDataActionFlux",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsDraftDraftPublishFailedErrorDataActionFlux",
    "AdsDraftDraftSyncCompletedDataActionFlux",
    "AdsDraftFragmentListDataManager",
    "AdsDraftFragmentStore",
    "AdsEditorCampaignGroupBudgetShowPreviewActionFlux",
    "AdsInterfacesLogger",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsObjectLevelToStore",
    "AdsPEDraftSelectors",
    "AdsPEUpdateSelectionForPublishActionFlux",
    "AdsPEUploadSelectAllABTestObjectsActionFlux",
    "AdsPEUploadShowPreviewActionFlux",
    "AdsPEUploadSkipSyncActionFlux",
    "AdsPEUploadStoreUtils",
    "AdsPEUploadTogglePreviewSelectionActionFlux",
    "AdsPEUploadTogglePreviewTabSelectionActionFlux",
    "AdsPEUploadUtils",
    "AdsReachFrequencyFlowStartUploadActionFlux",
    "AdsRecommendationsClearPendingPublishActionFlux",
    "AdsRecommendationsMarkPendingPublishActionFlux",
    "AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux",
    "AdsUEditorPECampaignLiveStatusChangeActionFlux",
    "FluxReduceStore",
    "LoadObject",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "adsDraftIsApplicationIDPowerEditor",
    "adsDraftIsDeleted",
    "adsPECurrentDraftIDSelector",
    "adsPEGenerateUploadStoreSessionID",
    "adsPELockedAndPublishingSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        hasSelectionBeenModified: !1,
        isDialogShown: !1,
        ignoreSyncState: !1,
        previewSource: null,
        sessionID: r("adsPEGenerateUploadStoreSessionID")(),
        selectedAdObjectLevel: null,
        selection: r("immutable").Map(),
        waitingForDraftClose: !1,
        refreshingFragments: !1,
        updatedAdObjectIds: {
          campaignGroupId: "",
          campaignId: "",
          adGroupId: "",
        },
        recommendationData: null,
      },
      c = r("immutable").Map(
        ((e = {}), (e.campaign = null), (e.ad_set = null), (e.ad = null), e),
      );
    function d(e) {
      var t = e.objectID,
        n = e.objectType,
        o = null;
      if (n) {
        var a = r("AdsObjectLevelToStore").get(n);
        a && (o = a.getCachedObject(t).getValue());
      }
      var i = null,
        l = null;
      if (o)
        switch (n) {
          case "ad":
            ((l = o.campaign_id), (i = o.adset_id));
            break;
          case "ad_set":
            l = o.campaign_id;
            break;
        }
      return {
        id: t,
        parentCampaignID: i,
        parentCampaignGroupID: l,
        isDeleted: r("adsDraftIsDeleted")(e),
      };
    }
    function m(e, t, n, r) {
      var a = c.map(function (e, t) {
        return o("AdsPEDraftSelectors")
          .fragmentsNotPublishing_UNSAFE_NOT_REALLY_A_SELECTOR[t]()
          .filter(function (e) {
            return e == null ? void 0 : e.hasValue();
          })
          .map(function (e) {
            return d(e.getValueEnforcing());
          })
          .toSet();
      });
      return babelHelpers.extends({}, e, {
        hasSelectionBeenModified: !0,
        selection: o("AdsPEUploadUtils").toggleSelectionInPreview(
          a,
          e.selection,
          r,
          t,
          n,
          null,
        ),
      });
    }
    var p = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this, s || (s = r("AdsDataAtom"))) || this),
          (t.$AdsPEUploadStore$p_1 = r("immutable").Map()),
          (t.isWaitingForDraftClose = r("adsCreateStoreSelector")(
            [t],
            function () {
              return t.getState().waitingForDraftClose;
            },
            { name: i.id },
          )),
          (t.getSelection = r("adsCreateStoreSelector")(
            [t],
            function () {
              return t.getState().selection;
            },
            { name: i.id },
          )),
          (t.getSelectionForLevel = r("adsCreateSelectorsByLevel")(
            function (e) {
              return r("adsCreateStoreSelector")(
                [t],
                function () {
                  return (
                    t.getState().selection.get(e) || r("immutable").OrderedSet()
                  );
                },
                { name: i.id },
              );
            },
          )),
          (t.getSelectedAdObjectLevel = r("adsCreateStoreSelector")(
            [t],
            function () {
              return t.getState().selectedAdObjectLevel;
            },
            { name: i.id },
          )),
          (t.getPreviewSource = r("adsCreateStoreSelector")(
            [t],
            function () {
              return t.getState().previewSource;
            },
            { name: i.id },
          )),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getInitialState = function () {
          return u;
        }),
        (n.__getActionTypes = function () {
          return [
            o("AdsEditorCampaignGroupBudgetShowPreviewActionFlux").actionType,
            o("AdsDraftDraftClosedDataActionFlux").actionType,
            o("AdsDraftDraftFragmentBatchCreatedDataActionFlux").actionType,
            o("AdsDraftDraftFragmentBatchLoadedDataActionFlux").actionType,
            o("AdsDraftDraftFragmentBatchUpdatedDataActionFlux").actionType,
            o("AdsDraftDraftFragmentListBatchLoadedDataActionFlux").actionType,
            o("AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux")
              .actionType,
            o("AdsDraftDraftFragmentListLoadedDataActionFlux").actionType,
            o("AdsDraftDraftFragmentListPartialLoadDataActionFlux").actionType,
            o("AdsDraftDraftHidePublishDetailsDataActionFlux").actionType,
            o("AdsDraftDraftHidePublishPreviewDataActionFlux").actionType,
            o("AdsDraftDraftPublishCompletedDataActionFlux").actionType,
            o("AdsDraftDraftPublishDataActionFlux").actionType,
            o("AdsDraftDraftPublishFailedErrorDataActionFlux").actionType,
            o("AdsDraftDraftSyncCompletedDataActionFlux").actionType,
            o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType,
            o("AdsPEUpdateSelectionForPublishActionFlux").actionType,
            o("AdsPEUploadShowPreviewActionFlux").actionType,
            o("AdsPEUploadSkipSyncActionFlux").actionType,
            r("AdsPEUploadSelectAllABTestObjectsActionFlux").actionType,
            o("AdsPEUploadTogglePreviewSelectionActionFlux").actionType,
            o("AdsPEUploadTogglePreviewTabSelectionActionFlux").actionType,
            o("AdsReachFrequencyFlowStartUploadActionFlux").actionType,
            o("AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux")
              .actionType,
            o("AdsRecommendationsMarkPendingPublishActionFlux").actionType,
            r("AdsRecommendationsClearPendingPublishActionFlux").actionType,
            o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
          ];
        }),
        (n.__getDependencyStores = function () {
          return [].concat(
            o(
              "adsPECurrentDraftIDSelector",
            ).adsPECurrentDraftIDSelector.getStores(),
            [
              r("AdsAdgroupDraftFragmentStore"),
              r("AdsCampaignDraftFragmentStore"),
              r("AdsCampaignGroupDraftFragmentStore"),
              r("AdsDraftFragmentStore"),
            ],
            o(
              "adsPELockedAndPublishingSelectors",
            ).adsPEPublishingIDsSelector.getStores(),
          );
        }),
        (n.reduce = function (t, n) {
          this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
          var e = t,
            a = n.action,
            i = babelHelpers.extends({ adsApplicationID: null }, a),
            l = i.adsApplicationID;
          if (!r("adsDraftIsApplicationIDPowerEditor")(l)) return e;
          switch (a.type) {
            case o("AdsDraftDraftFragmentListBatchLoadedDataActionFlux")
              .actionType:
            case o("AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux")
              .actionType:
              e = babelHelpers.extends({}, e, { refreshingFragments: !1 });
              break;
            case o("AdsDraftDraftFragmentListLoadedDataActionFlux").actionType:
            case o("AdsDraftDraftFragmentBatchCreatedDataActionFlux")
              .actionType:
            case o("AdsDraftDraftFragmentBatchLoadedDataActionFlux").actionType:
            case o("AdsDraftDraftFragmentBatchUpdatedDataActionFlux")
              .actionType:
            case o("AdsDraftDraftFragmentListPartialLoadDataActionFlux")
              .actionType:
              return this.$AdsPEUploadStore$p_2(e);
            case o("AdsDraftDraftSyncCompletedDataActionFlux").actionType:
            case o("AdsPEUploadSkipSyncActionFlux").actionType:
              return e.isDialogShown && !e.ignoreSyncState
                ? babelHelpers.extends({}, e, { ignoreSyncState: !0 })
                : e;
            case o("AdsDraftDraftHidePublishPreviewDataActionFlux").actionType:
              return (
                r("AdsInterfacesLogger").log(
                  { eventName: "CANCEL_OR_CLOSE_PUBLISH_PREVIEW_DIALOG" },
                  r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
                ),
                this.$AdsPEUploadStore$p_3(e)
              );
            case o("AdsDraftDraftHidePublishDetailsDataActionFlux").actionType:
              return this.$AdsPEUploadStore$p_3(e);
            case o("AdsDraftDraftClosedDataActionFlux").actionType:
              return e.waitingForDraftClose
                ? babelHelpers.extends({}, e, { waitingForDraftClose: !1 })
                : e;
            case o("AdsPEUpdateSelectionForPublishActionFlux").actionType:
              return babelHelpers.extends(
                {},
                this.$AdsPEUploadStore$p_4(e, a.selection),
                { previewSource: a.eventSource },
              );
            case o("AdsPEUploadShowPreviewActionFlux").actionType:
              return this.$AdsPEUploadStore$p_5(e, a);
            case o("AdsEditorCampaignGroupBudgetShowPreviewActionFlux")
              .actionType:
              return babelHelpers.extends(
                {},
                this.$AdsPEUploadStore$p_4(e, null),
                { isDialogShown: !0, previewSource: a.source },
              );
            case o("AdsReachFrequencyFlowStartUploadActionFlux").actionType:
              return babelHelpers.extends(
                {},
                this.$AdsPEUploadStore$p_4(e, null),
                { isDialogShown: !0 },
              );
            case o("AdsPEUploadTogglePreviewSelectionActionFlux").actionType:
              return a.selectedAdObjectLevel
                ? m(e, [a.id], a.isChecked, a.selectedAdObjectLevel)
                : e;
            case r("AdsPEUploadSelectAllABTestObjectsActionFlux").actionType:
              return this.$AdsPEUploadStore$p_6(e, a);
            case o("AdsPEUploadTogglePreviewTabSelectionActionFlux").actionType:
              return babelHelpers.extends({}, e, {
                selectedAdObjectLevel: a.selectedAdObjectLevel,
              });
            case o("AdsDraftDraftPublishDataActionFlux").actionType:
              return babelHelpers.extends({}, e, { isDialogShown: !1 });
            case o("AdsDraftDraftPublishFailedErrorDataActionFlux").actionType:
              return babelHelpers.extends({}, e, { waitingForDraftClose: !1 });
            case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
              return babelHelpers.extends({}, e, {
                waitingForDraftClose: a.willCloseDraft,
              });
            case o("AdsRecommendationsMarkPendingPublishActionFlux").actionType:
              return babelHelpers.extends({}, e, {
                recommendationData: {
                  adObjectIDs: a.adObjectIDs,
                  isOneClickApply: a.isOneClickApply,
                  recommendationHash: a.recommendationHash,
                  recommendationId: a.recommendationId,
                  recommendationSource: a.recommendationSource,
                  recommendationType: a.recommendationType,
                  resolutionSubtype: a.resolutionSubtype,
                },
              });
            case r("AdsRecommendationsClearPendingPublishActionFlux")
              .actionType:
              return babelHelpers.extends({}, e, { recommendationData: null });
            case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType:
              return a.data.params.show_review === !0
                ? babelHelpers.extends({}, e, {
                    isDialogShown: !0,
                    selectedAdObjectLevel: "campaign",
                  })
                : e;
          }
          return e;
        }),
        (n.getSessionID = function () {
          return this.getState().sessionID;
        }),
        (n.getRecommendationData = function () {
          return this.getState().recommendationData;
        }),
        (n.getUpdatedAdObjectIds = function () {
          return this.getState().updatedAdObjectIds;
        }),
        (n.$AdsPEUploadStore$p_7 = function (t, n) {
          var e = this.$AdsPEUploadStore$p_1.get(t) || r("immutable").Map(),
            o = n.filter(function (t) {
              var n, r;
              return (
                !e.has(t) ||
                ((n = (r = e.get(t)) == null ? void 0 : r.isLoading()) != null
                  ? n
                  : !1)
              );
            });
          return (
            o.length > 0 &&
              ((e = e.withMutations(function (e) {
                var n = r("AdsObjectLevelToStore").get(t),
                  a = n == null ? void 0 : n.getAllObjects(o);
                o.forEach(function (t) {
                  var n = a == null ? void 0 : a.get(t);
                  if (n && !n.isLoading() && n.hasValue()) {
                    var o = n.getValueEnforcing();
                    e.set(
                      t,
                      r("LoadObject").withValue(o.name, {
                        creatorModuleID: i.id,
                      }),
                    );
                  } else
                    e.set(
                      t,
                      r("LoadObject").loading({ creatorModuleID: i.id }),
                    );
                });
              })),
              (this.$AdsPEUploadStore$p_1 = this.$AdsPEUploadStore$p_1.set(
                t,
                e,
              ))),
            e
          );
        }),
        (n.getCachedNames = function (t, n) {
          return (n === void 0 && (n = []), this.$AdsPEUploadStore$p_7(t, n));
        }),
        (n.$AdsPEUploadStore$p_3 = function (t) {
          return (
            (this.$AdsPEUploadStore$p_1 = r("immutable").Map()),
            babelHelpers.extends({}, t, { isDialogShown: !1 })
          );
        }),
        (n.$AdsPEUploadStore$p_5 = function (t, n) {
          var e = o(
              "adsPECurrentDraftIDSelector",
            ).adsPECurrentDraftIDSelector(),
            a = t;
          return (
            e.hasValueWithoutError() &&
              (r("AdsDraftFragmentListDataManager").loadFor(
                e.getValueEnforcing(),
                r("AdsApplicationIDs").ADS_POWER_EDITOR,
              ),
              (a = babelHelpers.extends({}, a, { refreshingFragments: !0 }))),
            n.selectionLevel != null
              ? babelHelpers.extends(
                  {},
                  this.$AdsPEUploadStore$p_4(a, n.selection),
                  {
                    isDialogShown: !0,
                    previewSource: n.source,
                    selectedAdObjectLevel: n.selectionLevel,
                  },
                )
              : babelHelpers.extends(
                  {},
                  this.$AdsPEUploadStore$p_4(a, n.selection),
                  { isDialogShown: !0, previewSource: n.source },
                )
          );
        }),
        (n.$AdsPEUploadStore$p_6 = function (t, n) {
          return n.idsByLevel.every(function (e, n) {
            var r, o;
            return (
              e.size === 0 ||
              ((r =
                (o = t.selection.get(n)) == null ? void 0 : o.isSuperset(e)) !=
              null
                ? r
                : !1)
            );
          })
            ? t
            : babelHelpers.extends({}, t, {
                hasSelectionBeenModified: !0,
                selection: t.selection.map(function (e, t) {
                  var r;
                  return e.concat((r = n.idsByLevel.get(t)) != null ? r : []);
                }),
              });
        }),
        (n.$AdsPEUploadStore$p_2 = function (t) {
          return !t.isDialogShown || t.hasSelectionBeenModified
            ? t
            : babelHelpers.extends({}, t, {
                selection: this.$AdsPEUploadStore$p_8(),
              });
        }),
        (n.$AdsPEUploadStore$p_4 = function (t, n) {
          var e = !o("adsPELockedAndPublishingSelectors")
              .adsPEPublishingIDsSelector()
              .isEmpty(),
            a = e ? t.sessionID : r("adsPEGenerateUploadStoreSessionID")();
          return babelHelpers.extends({}, t, {
            hasSelectionBeenModified: !!n,
            sessionID: a,
            ignoreSyncState: !1,
            selection: n != null ? n : this.$AdsPEUploadStore$p_8(),
          });
        }),
        (n.$AdsPEUploadStore$p_8 = function () {
          return o("AdsPEUploadStoreUtils").createSelection().selection;
        }),
        t
      );
    })(r("FluxReduceStore"));
    p.__moduleID = i.id;
    var _ = new p();
    l.default = _;
  },
  98,
);
