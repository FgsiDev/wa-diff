__d(
  "AdsPEDraftSyncStore",
  [
    "errorCode",
    "AdFLEXPerfConfig",
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsApplicationIDs",
    "AdsBaseDraftSyncStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCreationAndEditingScenarioLoggerUtils",
    "AdsDraftDraftCurrentDraftLoadErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchCreateErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchDeleteErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux",
    "AdsDraftDraftSyncCompletedDataAction",
    "AdsDraftSyncUtils",
    "AdsEditorCampaignGroupBudgetShowPreviewActionFlux",
    "AdsManagerQPLUserFlowLogger",
    "AdsMgmtQPLLogger",
    "AdsPECampaignGroupLiveTableStore",
    "AdsPECampaignLiveTableStore",
    "AdsPEUploadShowPreviewActionFlux",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionsController",
    "FBLogger",
    "L1LiveReverseInteropStore",
    "PEAppLogger",
    "PowerEditorConfig.experimental",
    "QPLUserFlow",
    "WebApiApplication",
    "adsCastToAdsApplicationID",
    "adsDraftIsExistingFragment",
    "adsPELockedAndPublishingSelectors",
    "getByPath",
    "getInstantPublishScenariosInfo",
    "immutable",
    "nullthrows",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("getByPath")(r("PowerEditorConfig.experimental"), [
      "config",
      "DRAFT",
      "SYNC_INTERVAL",
    ]);
    function u(e, t) {
      return c(e, t) ? m(t) : (p("fragment_no_account_id", t), !1);
    }
    function c(e, t) {
      var n = d(t.fragment, e);
      return t.accountID === n;
    }
    function d(e, t) {
      var n = e.accountID;
      if (!n && r("adsDraftIsExistingFragment")(e)) {
        var o =
            t.getLevel() === "campaignGroup"
              ? t.get(e.objectID)
              : t.getCached(e.objectID),
          a = o.getValueEnforcing();
        n = r("nullthrows")(a).account_id;
      }
      return n;
    }
    function m(e) {
      var t = e.fragment;
      return t.draftID == null || e.draftID === t.draftID;
    }
    function p(e, t) {
      var n = t.fragment;
      (r("PEAppLogger").logForAnalytics("errors", e, {
        current_action_ids: [n.objectID],
        draft_id: n.draftID,
        fragment_id: n.fragmentID,
        payload_source: "_sync",
      }),
        r("FBLogger")("ads").mustfix(
          "Trying to synchronize invalid fragment %s because of %s error. Please report to danlo or gillesruppert.",
          n.fragmentID,
          e,
        ));
    }
    function _(e, t, n) {
      var a = e;
      if (e === "am.publish_ads.in_cell_inline") {
        var i, l;
        a =
          (i =
            r("AdFLEXPerfConfig") == null ||
            (l = r("AdFLEXPerfConfig").get()) == null
              ? void 0
              : l.adsPerfInteractionsPublishAdsInCellInline) != null
            ? i
            : "am.publish_ads.in_cell_inline";
      }
      var s = r("AdsPerfInteractionsController").startInteraction(a, t.type);
      o(
        "AdsPerfInteractionLogDataUtil",
      ).addHeroTracingInteractionCustomMetadata(s, { ad_object_ids: n });
    }
    function f(e, t, n) {
      var r = { ad_object_ids: n, action_types: [t.type] };
      o("AdsManagerQPLUserFlowLogger").isActiveFlow(e)
        ? ((r.start_callsite_extra = [t.type]),
          o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(e, {
            string_array: r,
          }))
        : o("AdsManagerQPLUserFlowLogger").start(e, {
            annotations: {
              string: { start_callsite: t.type },
              string_array: r,
            },
          });
    }
    var g = (function (t) {
      function n() {
        var n;
        n = t.call(this) || this;
        var a = r("immutable").List([
          o("AdsDraftSyncUtils").createStoreRecord(
            r("AdsCampaignGroupDraftFragmentStore"),
            r("AdsPECampaignGroupLiveTableStore"),
          ),
          o("AdsDraftSyncUtils").createStoreRecord(
            r("AdsCampaignDraftFragmentStore"),
            r("AdsPECampaignLiveTableStore"),
          ),
          o("AdsDraftSyncUtils").createStoreRecord(
            r("AdsAdgroupDraftFragmentStore"),
            r("L1LiveReverseInteropStore"),
          ),
        ]);
        return (n.__setLevelStores(a), n.__setSyncInterval(e), n);
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.__onDispatch = function (n) {
          var e = n.action;
          e: {
            var a = e;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              "type" in a &&
              a.type ===
                o("AdsEditorCampaignGroupBudgetShowPreviewActionFlux")
                  .actionType
            ) {
              this.__prepareSync(!1);
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              "type" in a &&
              a.type === o("AdsPEUploadShowPreviewActionFlux").actionType
            ) {
              this.__prepareSync(!1);
              break e;
            }
            {
              var i = a,
                l = r("getInstantPublishScenariosInfo")(i);
              if (l != null) {
                var s = l.adObjectIDs,
                  u = l.immediatePublishIfValid,
                  c = l.interaction,
                  d = l.userFlow;
                (_(c, i, s), f(d, i, s), this.__prepareSync(u));
              }
              break e;
            }
          }
          t.prototype.__onDispatch.call(this, n);
        }),
        (a.__getAppID = function () {
          return r("AdsAccountStore").getSelectedAccount().getValue() != null
            ? r("adsCastToAdsApplicationID")(
                o("WebApiApplication").getClientID(),
              )
            : r("AdsApplicationIDs").ADS_POWER_EDITOR;
        }),
        (a.__isValidSyncRecord = function (t, n) {
          return u(t, n);
        }),
        (a.__shouldLogSync = function () {
          return !0;
        }),
        (a.__logSyncStart = function () {
          o("AdsMgmtQPLLogger").markerStart(r("qpl")._(41484308, "1757"));
        }),
        (a.__logSyncSuccess = function (t) {
          var e,
            n,
            a,
            i = t.get("campaign"),
            l = t.get("ad_set"),
            s = t.get("ad"),
            u = (e = i == null ? void 0 : i.size) != null ? e : 0,
            c = (n = l == null ? void 0 : l.size) != null ? n : 0,
            d = (a = s == null ? void 0 : s.size) != null ? a : 0,
            m = u + c + d;
          (o("AdsMgmtQPLLogger").markerAnnotate(r("qpl")._(41484308, "1757"), {
            int: { num_sync_items: m },
          }),
            o("AdsMgmtQPLLogger").markerEnd(
              r("qpl")._(41484308, "1757"),
              m === 0 ? 4 : 2,
            ));
        }),
        (a.__logSyncFail = function (t) {
          var e,
            n,
            a = [],
            i = new Set(),
            l = new Set(),
            s = [],
            u = new Set();
          switch (t.type) {
            case r("AdsDraftDraftCurrentDraftLoadErrorDataActionFlux")
              .actionType:
              (l.add(t.error),
                i.add(
                  ((e =
                    (n = t.error.error_subcode) != null ? n : t.error.code) !=
                  null
                    ? e
                    : "No error code"
                  ).toString(),
                ),
                t.error.fbtrace_id != null && u.add(t.error.fbtrace_id));
              break;
            case o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
              .actionType:
            case r("AdsDraftDraftFragmentBatchDeleteErrorDataActionFlux")
              .actionType:
            case r("AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux")
              .actionType:
              t.errors.forEach(function (e, t) {
                (l.add(e),
                  e.ad_object_id != null && a.push(e.ad_object_id),
                  e.error_subcode != null
                    ? i.add(e.error_subcode.toString())
                    : e.code != null && i.add(e.code.toString()),
                  e.fbtrace_id != null && u.add(e.fbtrace_id),
                  s.push(t));
              });
              break;
          }
          var c = i.has(String(1357045)) || i.has(String(1357051));
          for (var d of o("AdsCreationAndEditingScenarioLoggerUtils")
            .EDIT_USER_FLOWS) {
            r("QPLUserFlow").addPoint(d, "DRAFT_SYNC_FAILED", {
              data: {
                string: { action_type: t.actionType },
                string_array: {
                  ad_object_ids: a,
                  error_codes: Array.from(i),
                  fragment_ids: s,
                  request_ids: Array.from(u),
                },
              },
            });
            var m = {
                string: {
                  action_type: t.actionType,
                  failure_type: c ? "NETWORK_FAILURE" : "SYSTEM_FAILURE",
                },
                string_array: {
                  error_codes: Array.from(i),
                  request_ids: Array.from(u),
                },
              },
              p = l.values().toArray();
            (p.length > 0 &&
              (m = o(
                "AdsManagerQPLUserFlowLogger",
              ).appendErrorAnnotationsToExistingAnnotations(m, p)),
              r("QPLUserFlow").endFailure(d, "DRAFT_SYNC_NETWORK_FAILED", {
                annotations: m,
              }));
          }
        }),
        (a.__getSyncItems = function (n, a, i) {
          var e = t.prototype.__getSyncItems.call(this, n, a, i);
          if (!i) return e;
          var l = !o("adsPELockedAndPublishingSelectors")
            .adsPEPublishingIDsSelector()
            .isEmpty();
          return !l &&
            i &&
            e.size === 1 &&
            r("nullthrows")(e.get(0)).get("action") === "CREATE"
            ? e.map(function (e) {
                return e.set("action", "CREATE_AND_PUBLISH");
              })
            : e;
        }),
        (a.__syncCompletedAction = function (t, n) {
          var e = t.every(function (e) {
            return e.every(function (e) {
              return e.get("action") === "CREATE_AND_PUBLISH";
            });
          });
          (r("AdsDraftDraftSyncCompletedDataAction").dispatch(
            {
              adsApplicationID: this.__getAppID(),
              syncErrors: n,
              completedAndPublished: e,
            },
            { line: "507", module: "AdsPEDraftSyncStore.js", moduleID: i.id },
          ),
            this.__logSyncSuccess(t));
        }),
        n
      );
    })(r("AdsBaseDraftSyncStore"));
    g.__moduleID = i.id;
    var h = new g();
    l.default = h;
  },
  98,
);
