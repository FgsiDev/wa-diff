__d(
  "AdsBaseDraftSyncStore",
  [
    "AdsAccountStore",
    "AdsAppVisibilityBlurDataActionFlux",
    "AdsApplicationIDs",
    "AdsConnectionStatusStore",
    "AdsDataAtom",
    "AdsDraftDraftClearRecentlySyncedDataAction",
    "AdsDraftDraftClearRecentlySyncedDataActionFlux",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadErrorDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftFragmentBatchCreateErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchDeleteErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchDeletedDataAction",
    "AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux",
    "AdsDraftDraftSyncCompletedDataAction",
    "AdsDraftDraftSyncCompletedDataActionFlux",
    "AdsDraftDraftSyncDataAction",
    "AdsDraftDraftSyncDataActionFlux",
    "AdsDraftDraftSyncRequestSentDataAction",
    "AdsDraftFragmentDataManager",
    "AdsDraftFragmentDataManagerUtils",
    "AdsDraftFragmentListStore",
    "AdsDraftFragmentStore",
    "AdsDraftProvider",
    "AdsDraftPublishDataManager",
    "AdsDraftSelectionStore",
    "AdsDraftSyncUtils",
    "AdsInterfacesLogger",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPEUpdateSelectionForPublishAction",
    "AdsPerfInteractionsController",
    "AdsPublishSourceTypes",
    "FBLogger",
    "FluxStore",
    "Promise",
    "QPLDraftFragmentMutationLogger",
    "QPLSharing",
    "abstractMethod",
    "adsCreateStoreThunkSelector",
    "adsDraftPublishingCreateFragmentAndPublishAction",
    "getErrorSafe",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("AdsDraftProvider").toFluxStore(),
      c = 1e4,
      d = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this, s || (s = r("AdsDataAtom"))) || this),
            (e.hasRecentlySynced = function () {
              return e.$AdsBaseDraftSyncStore$p_3;
            }),
            (e.getHasRecentlySyncedSelector = r("adsCreateStoreThunkSelector")(
              e,
              e.hasRecentlySynced,
            )),
            (e.isSyncing = function () {
              return e.$AdsBaseDraftSyncStore$p_5;
            }),
            (e.getIsSyncingSelector = r("adsCreateStoreThunkSelector")(
              e,
              e.isSyncing,
            )),
            (e.getSyncActionSummary = function (t) {
              return r("immutable")
                .Map()
                .withMutations(function (n) {
                  e.$AdsBaseDraftSyncStore$p_7.forEach(function (e) {
                    e.draftStore.getDirtyFor(t).forEach(function (e) {
                      var t = o("AdsDraftSyncUtils").getSyncAction(e);
                      n.update(t, 0, function (e) {
                        return e + 1;
                      });
                    });
                  });
                });
            }),
            (e.getSyncActionSummarySelector = r("adsCreateStoreThunkSelector")(
              e,
              e.getSyncActionSummary,
            )),
            (e.itemsInCurrentSync = function () {
              return e.$AdsBaseDraftSyncStore$p_5
                ? e.$AdsBaseDraftSyncStore$p_6
                : 0;
            }),
            (e.getItemsInCurrentSyncSelector = r("adsCreateStoreThunkSelector")(
              e,
              e.itemsInCurrentSync,
            )),
            (e.getErrors = function () {
              return e.$AdsBaseDraftSyncStore$p_2;
            }),
            (e.getErrorsSelector = r("adsCreateStoreThunkSelector")(
              e,
              e.getErrors,
            )),
            (e.$AdsBaseDraftSyncStore$p_2 = r("immutable").Map()),
            (e.$AdsBaseDraftSyncStore$p_1 = r("immutable").Map()),
            (e.$AdsBaseDraftSyncStore$p_3 = !1),
            (e.$AdsBaseDraftSyncStore$p_4 = null),
            (e.$AdsBaseDraftSyncStore$p_5 = !1),
            (e.$AdsBaseDraftSyncStore$p_7 = r("immutable").List()),
            (e.$AdsBaseDraftSyncStore$p_6 = 0),
            (e.$AdsBaseDraftSyncStore$p_8 = 5e3),
            (e.$AdsBaseDraftSyncStore$p_9 = !1),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            if (
              (n.adsApplicationID === null &&
                r("AdsInterfacesLogger").log(
                  {
                    eventName: "adsApplicationID_null_in_draft_action",
                    data: { action_type: n.type },
                  },
                  r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
                ),
              n.adsApplicationID != null &&
                n.adsApplicationID !== this.__getAppID())
            ) {
              this.$AdsBaseDraftSyncStore$p_7.forEach(function (e) {
                ((s || (s = r("AdsDataAtom"))).waitFor([
                  e.draftStore.getDispatchToken(),
                ]),
                  e.draftStore.hasChanged() &&
                    r("AdsInterfacesLogger").log(
                      {
                        eventName: "draft_sync_returned_too_early",
                        data: { action_type: n.type },
                      },
                      r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
                    ));
              });
              return;
            }
            switch (n.type) {
              case o("AdsDraftDraftCloseDataActionFlux").actionType:
                this.$AdsBaseDraftSyncStore$p_11(
                  n.draftID,
                  n.publishedObjectIDs,
                  n.fragmentIDs,
                );
                break;
              case o("AdsDraftDraftSyncDataActionFlux").actionType:
                this.__prepareSync(!1);
                break;
              case o("AdsAppVisibilityBlurDataActionFlux").actionType:
                this.__prepareSync(!1);
                break;
              case o("AdsDraftDraftSyncCompletedDataActionFlux").actionType:
                this.$AdsBaseDraftSyncStore$p_12();
                break;
              case o("AdsDraftDraftClearRecentlySyncedDataActionFlux")
                .actionType:
                ((this.$AdsBaseDraftSyncStore$p_3 = !1),
                  (this.$AdsBaseDraftSyncStore$p_4 = null));
                break;
              case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux")
                .actionType:
                this.$AdsBaseDraftSyncStore$p_13();
                break;
              case o("AdsDraftDraftCurrentDraftLoadErrorDataActionFlux")
                .actionType:
                this.__logSyncFail(n);
                break;
              case o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
                .actionType:
              case o("AdsDraftDraftFragmentBatchDeleteErrorDataActionFlux")
                .actionType:
              case o("AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux")
                .actionType:
                this.$AdsBaseDraftSyncStore$p_14(n);
            }
            if (this.$AdsBaseDraftSyncStore$p_15()) {
              if (
                (this.isSyncing() &&
                  r("QPLSharing").emitPoint("DRAFT_SYNC", "ALREADY_SYNCING", {
                    data: { string: { action: n.actionType } },
                  }),
                this.isSyncing())
              ) {
                o("QPLDraftFragmentMutationLogger").markerEndSuccess();
                return;
              } else if (
                !r("AdsPerfInteractionsController")
                  .getAllOngoingInteraction()
                  .has("am.editor_footer.draft_status")
              ) {
                o("QPLDraftFragmentMutationLogger").markerEndSuccess();
                return;
              }
            }
            (this.$AdsBaseDraftSyncStore$p_7.forEach(function (t) {
              ((s || (s = r("AdsDataAtom"))).waitFor([
                t.draftStore.getDispatchToken(),
              ]),
                t.draftStore.hasChanged() &&
                  (e.$AdsBaseDraftSyncStore$p_13(), e.__emitChange()));
            }),
              this.isSyncing() &&
                r("QPLSharing").emitPoint("DRAFT_SYNC", "ALREADY_SYNCING", {
                  data: { string: { action: n.actionType } },
                }),
              o("QPLDraftFragmentMutationLogger").markerEndSuccess());
          }),
          (l.$AdsBaseDraftSyncStore$p_15 = function () {
            return (
              this.$AdsBaseDraftSyncStore$p_10 != null ||
              !this.$AdsBaseDraftSyncStore$p_8
            );
          }),
          (l.hasItemsToSync = function () {
            return this.$AdsBaseDraftSyncStore$p_7.some(function (e) {
              return e.draftStore.getDirty().size > 0;
            });
          }),
          (l.hasItemsToSyncFor = function (t) {
            return this.$AdsBaseDraftSyncStore$p_7.some(function (e) {
              return e.draftStore.getDirtyFor(t).size > 0;
            });
          }),
          (l.getItemsToSyncCountFor = function (t) {
            return this.$AdsBaseDraftSyncStore$p_7.reduce(function (e, n) {
              return e + n.draftStore.getDirtyFor(t).size;
            }, 0);
          }),
          (l.__setLevelStores = function (t) {
            this.$AdsBaseDraftSyncStore$p_7 = t;
          }),
          (l.__setSyncInterval = function (t) {
            this.$AdsBaseDraftSyncStore$p_8 = t;
          }),
          (l.$AdsBaseDraftSyncStore$p_11 = function (t, n, o) {
            this.__getAppID() === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
              r("AdsDraftPublishDataManager").close(t, n, o, "close");
          }),
          (l.$AdsBaseDraftSyncStore$p_12 = function () {
            var e = this;
            (this.$AdsBaseDraftSyncStore$p_6 &&
              ((this.$AdsBaseDraftSyncStore$p_3 = !0),
              this.$AdsBaseDraftSyncStore$p_4 &&
                window.clearTimeout(this.$AdsBaseDraftSyncStore$p_4),
              (this.$AdsBaseDraftSyncStore$p_4 = window.setTimeout(function () {
                r("AdsDraftDraftClearRecentlySyncedDataAction").dispatch(
                  { adsApplicationID: e.__getAppID() },
                  {
                    line: "427",
                    module: "AdsBaseDraftSyncStore.js",
                    moduleID: i.id,
                  },
                );
              }, c))),
              (this.$AdsBaseDraftSyncStore$p_5 = !1),
              (this.$AdsBaseDraftSyncStore$p_2 =
                this.$AdsBaseDraftSyncStore$p_1),
              (this.$AdsBaseDraftSyncStore$p_6 = 0),
              (this.$AdsBaseDraftSyncStore$p_2.size > 0 ||
                this.$AdsBaseDraftSyncStore$p_9) &&
                this.$AdsBaseDraftSyncStore$p_13(),
              this.__emitChange());
          }),
          (l.$AdsBaseDraftSyncStore$p_13 = function () {
            var e = this;
            if (!this.$AdsBaseDraftSyncStore$p_15()) {
              if (this.$AdsBaseDraftSyncStore$p_5) {
                this.$AdsBaseDraftSyncStore$p_9 = !0;
                return;
              }
              (this.__prepareSync(!1),
                (this.$AdsBaseDraftSyncStore$p_10 = window.setTimeout(
                  function () {
                    r("AdsDraftDraftSyncDataAction").dispatch(
                      { adsApplicationID: e.__getAppID() },
                      {
                        line: "466",
                        module: "AdsBaseDraftSyncStore.js",
                        moduleID: i.id,
                      },
                    );
                  },
                  this.$AdsBaseDraftSyncStore$p_8,
                )),
                (this.$AdsBaseDraftSyncStore$p_9 = !1));
            }
          }),
          (l.__resetScheduledSync = function () {
            this.$AdsBaseDraftSyncStore$p_10 &&
              (window.clearTimeout(this.$AdsBaseDraftSyncStore$p_10),
              (this.$AdsBaseDraftSyncStore$p_10 = null));
          }),
          (l.__getAppID = function () {
            return r("abstractMethod")("AdsBaseDraftSyncStore", "__getAppID");
          }),
          (l.__prepareSync = function (t) {
            if (
              (this.__resetScheduledSync(),
              !!r("AdsConnectionStatusStore").isConnected())
            ) {
              var e = r("AdsAccountStore").getSelectedAccountID();
              if (e != null) {
                var n = this.__getAppID(),
                  a = r("AdsDraftSelectionStore").getOrCreateFor(e, n),
                  i = a.isDone() ? a.getValue() : null;
                if (i != null) {
                  (s || (s = r("AdsDataAtom"))).waitFor([u.getDispatchToken()]);
                  var l = o(
                    "AdsLoadStateUtils_LEGACY",
                  ).fromLoadObjectTreatEmptyAsLoading(u.getState().get(i));
                  l == null ||
                    l.loadState !== r("AdsLoadState_LEGACY").LOADED ||
                    this.$AdsBaseDraftSyncStore$p_16(e, i, t);
                }
              }
            }
          }),
          (l.$AdsBaseDraftSyncStore$p_16 = function (t, n, o) {
            var e = this;
            if (this.$AdsBaseDraftSyncStore$p_5) {
              this.$AdsBaseDraftSyncStore$p_13();
              return;
            }
            if (
              ((s || (s = r("AdsDataAtom"))).waitFor([
                r("AdsDraftFragmentListStore").getDispatchToken(),
                r("AdsDraftFragmentStore").getDispatchToken(),
                r("AdsDraftSelectionStore").getDispatchToken(),
              ]),
              (this.$AdsBaseDraftSyncStore$p_6 =
                this.getItemsToSyncCountFor(t)),
              this.$AdsBaseDraftSyncStore$p_6 !== 0)
            ) {
              (this.__logSyncStart(),
                (this.$AdsBaseDraftSyncStore$p_5 = !0),
                (this.$AdsBaseDraftSyncStore$p_1 = r("immutable").Map()));
              var a = this.__getSyncItems(t, n, o);
              (this.__sendSyncRequests(a).catch(function (e) {
                r("FBLogger")("ads_front_end_infra")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Draft sync requests failed");
              }),
                s.addPostDispatchCallback(function () {
                  r("AdsDraftDraftSyncRequestSentDataAction").dispatch(
                    { adsApplicationID: e.__getAppID() },
                    {
                      line: "579",
                      module: "AdsBaseDraftSyncStore.js",
                      moduleID: i.id,
                    },
                  );
                }),
                this.__emitChange());
            }
          }),
          (l.__getSyncItems = function (t, n, r) {
            var e = this;
            return this.$AdsBaseDraftSyncStore$p_7.flatMap(function (r) {
              return e.$AdsBaseDraftSyncStore$p_17(
                t,
                n,
                r.draftStore,
                r.liveStore,
              );
            });
          }),
          (l.__sendSyncRequests = function (a) {
            var t = this,
              i = o(
                "AdsDraftFragmentDataManagerUtils",
              ).findDescendantDeletedItems(a),
              l = i.valueSeq().flatten(!0).toSet(),
              s = a
                .filter(function (e) {
                  return !l.contains(e);
                })
                .groupBy(function (e) {
                  return e.objectType;
                }),
              u = s.get("campaign", r("immutable").List()),
              c = s.get("ad_set", r("immutable").List()),
              d = s.get("ad", r("immutable").List()),
              m = function () {
                return (e || (e = n("Promise"))).all(
                  t.$AdsBaseDraftSyncStore$p_18(u, i, "campaign"),
                );
              },
              p = function () {
                return (e || (e = n("Promise"))).all(
                  t.$AdsBaseDraftSyncStore$p_18(c, i, "ad_set"),
                );
              },
              _ = function () {
                return (e || (e = n("Promise"))).all(
                  t.$AdsBaseDraftSyncStore$p_18(d, i, "ad"),
                );
              },
              f = null;
            return (
              u.size > 0 && (f = m()),
              c.size > 0 && (f = f ? f.then(p) : p()),
              d.size > 0 && (f = f ? f.then(_) : _()),
              (f = f != null ? f : (e || (e = n("Promise"))).resolve()),
              r("promiseDone")(
                f,
                function () {
                  t.__syncCompletedAction(s, t.$AdsBaseDraftSyncStore$p_1);
                },
                function () {
                  t.__syncCompletedAction(s, t.$AdsBaseDraftSyncStore$p_1);
                },
              ),
              f
            );
          }),
          (l.__syncCompletedAction = function (t, n) {
            (r("AdsDraftDraftSyncCompletedDataAction").dispatch(
              { adsApplicationID: this.__getAppID(), syncErrors: n },
              {
                line: "708",
                module: "AdsBaseDraftSyncStore.js",
                moduleID: i.id,
              },
            ),
              this.__logSyncSuccess(t));
          }),
          (l.$AdsBaseDraftSyncStore$p_18 = function (t, n, o) {
            var e = this;
            return t
              .map(function (t) {
                return e.$AdsBaseDraftSyncStore$p_19(
                  t.fragment.toAPI(),
                  t.draftID,
                  t.action,
                  n.get(t.objectID, r("immutable").List()),
                  o,
                );
              })
              .toArray();
          }),
          (l.$AdsBaseDraftSyncStore$p_17 = function (t, n, r, a) {
            var e = this;
            return r
              .getDirtyFor(t, !0)
              .map(function (e) {
                return o("AdsDraftSyncUtils").SyncItemRecord({
                  accountID: t,
                  action: o("AdsDraftSyncUtils").getSyncAction(e),
                  draftID: n,
                  fragment: e,
                  objectID: e.objectID,
                  objectType: r.getObjectType(),
                });
              })
              .map(function (t) {
                return e.__getAncestorIDs(t);
              })
              .filter(function (t) {
                return e.__isValidSyncRecord(a, t);
              })
              .toList();
          }),
          (l.__isValidSyncRecord = function (t, n) {
            return r("abstractMethod")(
              "AdsBaseDraftSyncStore",
              "__isValidSyncRecord",
            );
          }),
          (l.__getAncestorIDs = function (t) {
            return t;
          }),
          (l.$AdsBaseDraftSyncStore$p_19 = function (t, n, o, a, l) {
            var e = this;
            switch (o) {
              case "BLANK_IGNORE":
                return null;
              case "CREATE":
                return this.__createFragment(n, t);
              case "CREATE_AND_PUBLISH":
                return this.__createAndPublishFragment(n, t, l);
              case "DELETE_EMPTY":
              case "DELETE_NEW": {
                var s = r("AdsDraftFragmentDataManager").promiseDelete(
                  t.id,
                  t,
                  this.__getAppID(),
                );
                return a.size > 0
                  ? s.then(function () {
                      var t = new Map(
                        a
                          .map(function (e) {
                            var t = e.fragment.toAPI(),
                              n = t.action,
                              r = t.ad_draft_id,
                              o = t.ad_object_id,
                              a = t.ad_object_type,
                              i = t.id,
                              l = t.publish_status;
                            return [
                              e.fragment.fragmentID,
                              {
                                action: n,
                                ad_draft_id: r,
                                ad_object_id: o,
                                ad_object_type: a,
                                id: i,
                                status: l,
                              },
                            ];
                          })
                          .toArray(),
                      );
                      r("AdsDraftDraftFragmentBatchDeletedDataAction").dispatch(
                        {
                          fragments: t,
                          adsApplicationID: e.__getAppID(),
                          forceDelete: !0,
                        },
                        {
                          line: "849",
                          module: "AdsBaseDraftSyncStore.js",
                          moduleID: i.id,
                        },
                      );
                    })
                  : s;
              }
              case "UPDATE":
                return this.__updateFragment(t);
              default:
                return null;
            }
          }),
          (l.__createFragment = function (t, n) {
            return r("AdsDraftFragmentDataManager").create(
              t,
              babelHelpers.extends({}, n, { validate: !1 }),
              this.__getAppID(),
            );
          }),
          (l.__createAndPublishFragment = function (o, a, l) {
            var t,
              u,
              c = a.ad_object_id,
              d = (u = r("immutable")).OrderedSet([c]),
              m = u
                .Map(
                  ((t = {}),
                  (t.campaign = u.OrderedSet()),
                  (t.ad_set = u.OrderedSet()),
                  (t.ad = u.OrderedSet()),
                  t),
                )
                .withMutations(function (e) {
                  return (e.set(l, d), e);
                });
            return new (e || (e = n("Promise")))(function (e) {
              (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r("AdsPEUpdateSelectionForPublishAction").dispatch(
                    {
                      selection: m,
                      eventSource: r("AdsPublishSourceTypes").TABLE,
                    },
                    {
                      line: "909",
                      module: "AdsBaseDraftSyncStore.js",
                      moduleID: i.id,
                    },
                  );
                  var t = r("adsDraftPublishingCreateFragmentAndPublishAction")(
                    {
                      draftID: o,
                      ignoreErrors: !0,
                      fragment: babelHelpers.extends({}, a, { validate: !1 }),
                      tempFragmentID: c,
                      selection: m,
                      isFirstBlockingError: !1,
                    },
                  );
                  e(t);
                },
              );
            });
          }),
          (l.__updateFragment = function (t) {
            return r("AdsDraftFragmentDataManager").update(
              babelHelpers.extends({}, t, { validate: !1 }),
              this.__getAppID(),
            );
          }),
          (l.$AdsBaseDraftSyncStore$p_14 = function (t) {
            ((this.$AdsBaseDraftSyncStore$p_1 =
              this.$AdsBaseDraftSyncStore$p_1.withMutations(function (e) {
                t.errors.forEach(function (t, n) {
                  e.set(n, t);
                });
              })),
              this.__logSyncFail(t));
          }),
          (l.__shouldLogSync = function () {
            return !1;
          }),
          (l.__logSyncStart = function () {
            this.__shouldLogSync() &&
              r("abstractMethod")("AdsBaseDraftSyncStore", "__logSyncStart");
          }),
          (l.__logSyncSuccess = function (t) {
            this.__shouldLogSync() &&
              r("abstractMethod")("AdsBaseDraftSyncStore", "__logSyncSuccess");
          }),
          (l.__logSyncFail = function (t) {
            this.__shouldLogSync() &&
              r("abstractMethod")("AdsBaseDraftSyncStore", "__logSyncFail");
          }),
          a
        );
      })(r("FluxStore"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
