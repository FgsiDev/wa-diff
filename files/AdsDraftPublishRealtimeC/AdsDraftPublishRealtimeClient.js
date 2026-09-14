__d(
  "AdsDraftPublishRealtimeClient",
  [
    "AdAsyncRequestStatus",
    "AdDraftFragmentValidationStatus",
    "AdDraftPublishStatuses",
    "AdsAPIDraftPublishStatusPaths",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsDataAtom",
    "AdsDraftAppendPublishErrorDataAction",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftDiscardedNotificationAction",
    "AdsDraftDraftFragmentBatchCreatedDataActionFlux",
    "AdsDraftDraftFragmentBatchDeletedDataAction",
    "AdsDraftDraftFragmentBatchDeletedDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftDraftFragmentValidatedDataAction",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsDraftDraftPublishFailedErrorDataActionFlux",
    "AdsDraftDraftPublishInProgressDataAction",
    "AdsDraftDraftPublishInProgressDataActionFlux",
    "AdsDraftDraftSetCurrentDraftSuccessDataActionFlux",
    "AdsDraftFragmentStore",
    "AdsDraftFragmentValidateDataManager",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftPublishDataManager",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishFragmentStartedAction",
    "AdsDraftPublishPublishStartedAction",
    "AdsDraftPublishQPLUserFlowLogging",
    "AdsDraftPublishRealtimeConnection",
    "AdsDraftSelectionStore",
    "AdsPEPublishStartedActionFlux",
    "AdsPEServerImportActions",
    "FBLogger",
    "PowerEditorConfig.experimental",
    "QPLSharing",
    "adsDraftActivePublishSelector",
    "adsDraftGetAdsErrorFromDraftError",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "adsDraftIsApplicationIDPowerEditor",
    "adsMgmtLogger",
    "adsPELockedAndPublishingSelectors",
    "clearTimeout",
    "dangerouslyBypassDispatchError",
    "debounce",
    "expectationViolation",
    "filterMapKeysToArray",
    "findIterable",
    "forEachObject",
    "getByPath",
    "gkx",
    "performanceNow",
    "qex",
    "setByPath",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["error_code"],
      s = ["count"],
      u = ["error_code"],
      c = ["count", "fragment"],
      d,
      m,
      p = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", "PUBLISH_REALTIME_UPDATE_TIMEOUT"],
        1e3,
      ),
      _ = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", "VALIDATION_REALTIME_UPDATE_TIMEOUT"],
        15e3,
      ),
      f = !1,
      g = !1,
      h = null,
      y = new Map(),
      C = new Map(),
      b = new Map(),
      v = {
        handleDispatch: T,
        handleAppendCompleted: G,
        handleFragmentCompleted: N,
        handleFragmentDeleted: U,
        handleFragmentStarted: z,
        handlePublishCompleted: H,
        handlePublishStarted: j,
        handleValidation: J,
        pushWaitTimeout: p,
      };
    function S(e) {
      return (
        e === r("AdDraftPublishStatuses").PRE_PUBLISH ||
        e === r("AdDraftPublishStatuses").FAILED ||
        e === r("AdDraftPublishStatuses").SUCCEEDED
      );
    }
    function R(e, t, n) {
      n === void 0 && (n = !1);
      var o = C.get(e) === !0;
      (o
        ? n && ((o = !1), C.set(e, o))
        : ((o = t != null && S(t)), C.set(e, o)),
        o
          ? r("findIterable")(C.values(), function (e) {
              return !e;
            }) == null && ee()
          : te());
    }
    function L() {
      f || ((d || (d = r("AdsDataAtom"))).register(T), D(), x(), (f = !0));
    }
    function E() {
      (r("AdsDraftPublishRealtimeConnection").startBuffering(), (g = !0));
    }
    function k(e) {
      e.forEach(function (e) {
        var t = e.id;
        r("clearTimeout")(y.get(t));
        var n = r("setTimeout")(function () {
          var n = r("AdsDraftFragmentValidationProvider")().get(e.id);
          ((n == null ||
            n.validation_status ===
              r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION) &&
            (r("AdsDraftFragmentValidateDataManager").forceValidationFor(e),
            r("FBLogger")("ads").warn(
              "No validation received. Polling on fragment %s",
              t,
            )),
            y.delete(t));
        }, _);
        y.set(t, n);
      });
    }
    function I(e) {
      (r("clearTimeout")(y.get(e)), y.delete(e));
    }
    function T(e) {
      var t,
        n = e.action;
      if (r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID))
        switch (n.type) {
          case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType: {
            r("AdsDraftPublishRealtimeConnection").subscribe(
              n.accountID,
              n.draftID,
            );
            break;
          }
          case o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux")
            .actionType:
            r("AdsDraftPublishRealtimeConnection").subscribe(
              n.accountID,
              n.draftID,
            );
            break;
          case o("AdsDraftDraftPublishInProgressDataActionFlux").actionType: {
            g &&
              n.response &&
              (r("dangerouslyBypassDispatchError")(function () {
                r("AdsDraftPublishRealtimeConnection").stopBuffering();
              }),
              (g = !1));
            break;
          }
          case r("AdsPEPublishStartedActionFlux").actionType:
            R(n.asyncRequestSetID, r("AdDraftPublishStatuses").IN_PROGRESS);
            break;
          case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
          case o("AdsDraftDraftPublishFailedErrorDataActionFlux").actionType: {
            var a;
            if (
              ((a = n.response) == null ? void 0 : a.async_request_set_id) !=
              null
            ) {
              var i,
                l,
                s,
                u = (i = n.response) == null ? void 0 : i.async_request_set_id;
              R(
                u,
                (l = (s = n.response) == null ? void 0 : s.status) != null
                  ? l
                  : r("AdDraftPublishStatuses").FAILED,
              );
            }
            break;
          }
          case r("AdsCopyCopyCompletedDataActionFlux").actionType: {
            (d || (d = r("AdsDataAtom"))).waitFor([
              r("AdsDraftFragmentStore").getDispatchToken(),
            ]);
            var c = n.fragments.map(function (e) {
              return r("AdsDraftFragmentStore").getCached(e.id);
            });
            k(c);
            break;
          }
          case o("AdsPEServerImportActions")
            .fragmentDownloadCompletedActionType:
          case r("AdsDraftDraftFragmentBatchCreatedDataActionFlux").actionType:
          case r("AdsDraftDraftFragmentBatchUpdatedDataActionFlux").actionType:
            (n == null ? void 0 : n.shouldValidate) !== !1 && k(n.fragments);
            break;
          case r("AdsDraftDraftPublishDataActionFlux").actionType:
            (t = n.fragmentIDs) == null ||
              t.forEach(function (e) {
                return I(e);
              });
            break;
          case r("AdsDraftDraftFragmentBatchDeletedDataActionFlux").actionType:
            n.fragments.forEach(function (e, t) {
              return I(t);
            });
            break;
        }
    }
    function D() {
      var e = r("AdsAccountStore").getSelectedAccountID();
      if (e != null) {
        var t = r("AdsDraftSelectionStore").getCached(e);
        t.isDone() &&
          t.value != null &&
          r("AdsDraftPublishRealtimeConnection").subscribe(e, t.value);
      }
    }
    function x() {
      var e;
      ((e = r("AdsDraftPublishRealtimeConnection")).addListener("d", U),
        e.addListener("a", G),
        e.addListener("validation_completed", J),
        e.addListener("validation_failed", J),
        e.addListener("draft_discarded", Z),
        r("gkx")("22313") || $());
    }
    function $() {
      var e;
      ((e = r("AdsDraftPublishRealtimeConnection")).addListener("ps", j),
        e.addListener("c", H),
        e.addListener("fs", z),
        e.addListener("f", N));
    }
    function P(e) {
      var t = r("AdsDraftPublishDataProvider")().draftID,
        n = t !== e;
      return (
        n &&
          r("FBLogger")("ads").warn(
            "Received a push notification for draft %s, but we're currently %s! This could happen if the publish is taking place in a different session / browser tab.",
            e,
            t != null ? "publishing " + t : "not publishing",
          ),
        n
      );
    }
    function N(t, n, o) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "FRAGMENT_COMPLETED", {
        data: {
          string: {
            fragment_id: t.fragment.fragment_id,
            draft_id: o,
            error_message: t.fragment.error_message,
            ad_object_id: t.fragment.ad_object_id,
            ad_object_type: t.fragment.ad_object_type,
            source: t.fragment.source,
            status: t.fragment.status,
            action: t.fragment.action,
            www_request_id: t.fragment.www_request_id,
            opes_mid: t.fragment.opes_mid,
          },
          int: { error_code: t.fragment.error_code },
        },
      }),
        oe());
      var a = C.get(t.async_request_set_id),
        l = t.fragment.fragment_id;
      (a == null &&
        r("FBLogger")("ads").warn(
          "Received FRAGMENT_COMPLETED for %s before receiving PUBLISH_STARTED! This should not happen. Draft ID: %s",
          l,
          o,
        ),
        b.has(l) ||
          r("FBLogger")("ads").warn(
            "Received FRAGMENT_COMPLETED for %s before receiving FRAGMENT_STARTED! This should not happen. Draft ID: %s",
            l,
            o,
          ),
        b.delete(l));
      var s = P(o);
      if (s) {
        V([t.fragment], o);
        return;
      }
      var u = r("adsDraftActivePublishSelector")().value;
      if (!u) {
        r("expectationViolation")(
          "Received FRAGMENT_PUBLISHED, but publish status is missing!",
        );
        return;
      }
      var c = t.fragment.ad_object_id,
        d = r("adsDraftGetFragmentStatusesFromPublishResponse")(u);
      if (!d.length) {
        r("FBLogger")("ads").mustfix(
          "fragmentStatus data missing for a current publish of draft ID %s.publishStatus data: %s",
          o,
          JSON.stringify(u),
        );
        return;
      }
      var m = d.find(function (e) {
          return e.ad_object_id === c;
        }),
        p = t.fragment,
        _ = p.error_code,
        f = babelHelpers.objectWithoutPropertiesLoose(p, e),
        g = f;
      (_ != null && (g.error_code = _.toString()),
        m != null ? Object.assign(m, g) : c && d.push(g),
        r("setByPath")(
          u,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
          d,
        ));
      var h = babelHelpers.extends({}, u, re(t));
      (R(t.async_request_set_id, r("AdDraftPublishStatuses").IN_PROGRESS),
        r("gkx")("11746")
          ? q.dispatch(t.async_request_set_id, o, h)
          : r("AdsDraftDraftPublishInProgressDataAction").dispatch(
              {
                adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                draftID: o,
                response: h,
              },
              {
                line: "572",
                module: "AdsDraftPublishRealtimeClient.js",
                moduleID: i.id,
              },
            ));
    }
    function M(e) {
      var t = new Map(),
        n = r("debounce")(function () {
          (r("AdsDraftDraftFragmentBatchDeletedDataAction").dispatch(
            { fragments: t, forceDelete: e },
            {
              line: "585",
              module: "AdsDraftPublishRealtimeClient.js",
              moduleID: i.id,
            },
          ),
            (t = new Map()));
        }, 100);
      return function (e) {
        (t.set(e.id, e), n());
      };
    }
    var w = M(!0),
      A = M(!1),
      F = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", "FRAGMENT_STARTED_DEBOUNCE_TIMEOUT"],
        250,
      );
    function O() {
      var e = new Map(),
        t = function () {
          var t = Array.from(e.values());
          ((e = new Map()),
            t.length > 0 &&
              r("AdsDraftPublishFragmentStartedAction").dispatch(
                { fragments: t },
                {
                  line: "624",
                  module: "AdsDraftPublishRealtimeClient.js",
                  moduleID: i.id,
                },
              ));
        },
        n = r("debounce")(t, F);
      return {
        cancel: function () {
          ((e = new Map()), n.reset());
        },
        dispatch: function (r) {
          (e.set(r.fragmentID, {
            adObjectErrorCode: r.adObjectErrorCode,
            adObjectID: r.adObjectID,
            adObjectType: r.adObjectType,
            fragmentID: r.fragmentID,
          }),
            n());
        },
      };
    }
    var B = O();
    function W() {
      var e = new Map(),
        t = r("debounce")(function () {
          (e.forEach(function (e) {
            r("AdsDraftDraftPublishInProgressDataAction").dispatch(
              {
                adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                draftID: e.draftID,
                response: e.response,
              },
              {
                line: "673",
                module: "AdsDraftPublishRealtimeClient.js",
                moduleID: i.id,
              },
            );
          }),
            e.clear());
        }, 250);
      return {
        cancel: function (r) {
          (e.delete(r), e.size === 0 && t.reset());
        },
        dispatch: function (r, o, a) {
          (e.set(r, { draftID: o, response: a }), t());
        },
      };
    }
    var q = W();
    function U(e) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "FRAGMENT_DELETED", {
        data: {
          string: {
            fragment_id: e.id,
            draft_id: e.ad_draft_id,
            ad_object_id: e.ad_object_id,
          },
        },
      }),
        A(e));
    }
    function V(e, t) {
      e.forEach(function (e) {
        e.status === r("AdAsyncRequestStatus").SUCCESS &&
          w({
            action: e.action,
            ad_draft_id: t,
            ad_object_id: e.ad_object_id,
            ad_object_type: e.ad_object_type,
            id: e.fragment_id,
            status: e.status,
          });
      });
    }
    function H(e, t, n) {
      var a, i;
      (C.has(e.async_request_set_id) ||
        r("FBLogger")("ads").warn(
          "Received PUBLISH_COMPLETED before receiving PUBLISH_STARTED! This should not happen. Draft ID: %s",
          n,
        ),
        oe(),
        R(e.async_request_set_id, e.status));
      var l = P(n);
      if (l) {
        var c = e.fragment_statuses;
        V(c, n);
        return;
      }
      (q.cancel(e.async_request_set_id), B.cancel());
      var d = e.count,
        m = babelHelpers.objectWithoutPropertiesLoose(e, s),
        p = o("adsPELockedAndPublishingSelectors").adsPELockedIDsSelector(),
        _ = (a = r("adsDraftActivePublishSelector")().value) != null ? a : {},
        f = m.fragment_statuses.map(function (e) {
          var t = e.error_code,
            n = babelHelpers.objectWithoutPropertiesLoose(e, u),
            r = n;
          return (t != null && (r.error_code = t.toString()), r);
        }),
        g = babelHelpers.extends(
          {},
          _,
          re(e),
          m,
          ((i = {}), (i.fragment_statuses = { data: f }), i),
        ),
        h = r("AdsDraftPublishDataProvider")().requestMetadata;
      r("AdsDraftPublishDataManager").handlePublishCompleted(
        n,
        g,
        p,
        h.has(e.async_request_set_id.toString()),
      );
    }
    function G(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "APPEND_COMPLETED", {
        data: {
          int: {
            canceled_fragment_count: e.count.canceled,
            errored_fragment_count: e.count.error,
            initial_fragment_count: e.count.initial,
            in_progress_fragment_count: e.count.in_progress,
            success_fragment_count: e.count.success,
          },
        },
      }),
        !P(n) &&
          e.error &&
          r("AdsDraftAppendPublishErrorDataAction").dispatch(
            { error: r("adsDraftGetAdsErrorFromDraftError")(e.error) },
            {
              line: "824",
              module: "AdsDraftPublishRealtimeClient.js",
              moduleID: i.id,
            },
          ));
    }
    function z(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "FRAGMENT_STARTED", {
        data: {
          string: {
            async_request_set_id: e.async_request_set_id,
            fragment_id: e.fragment.fragment_id,
          },
          int: {
            canceled_fragment_count: e.count.canceled,
            errored_fragment_count: e.count.error,
            initial_fragment_count: e.count.initial,
            in_progress_fragment_count: e.count.in_progress,
            success_fragment_count: e.count.success,
          },
        },
      }),
        oe());
      var o = C.get(e.async_request_set_id),
        a = e.fragment.fragment_id;
      if (
        (b.set(
          a,
          e.timestamp_in_ms
            ? (m || (m = r("performanceNow")))() - e.timestamp_in_ms
            : 0,
        ),
        o == null &&
          r("FBLogger")("ads").warn(
            "Received FRAGMENT_STARTED for %s before receiving PUBLISH_STARTED! This should not happen. Draft ID: %s",
            a,
            n,
          ),
        !P(n))
      ) {
        if ((I(a), r("gkx")("11746"))) {
          B.dispatch({
            adObjectID: e.fragment.ad_object_id,
            adObjectType: e.fragment.ad_object_type,
            adObjectErrorCode: e.fragment.error_code,
            fragmentID: a,
          });
          return;
        }
        r("AdsDraftPublishFragmentStartedAction").dispatch(
          {
            fragments: [
              {
                adObjectID: e.fragment.ad_object_id,
                adObjectType: e.fragment.ad_object_type,
                adObjectErrorCode: e.fragment.error_code,
                fragmentID: a,
              },
            ],
          },
          {
            line: "887",
            module: "AdsDraftPublishRealtimeClient.js",
            moduleID: i.id,
          },
        );
      }
    }
    function j(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "PUBLISH_STARTED", {
        data: {
          string: { async_request_set_id: e.async_request_set_id },
          int: {
            canceled_fragment_count: e.count.canceled,
            errored_fragment_count: e.count.error,
            initial_fragment_count: e.count.initial,
            in_progress_fragment_count: e.count.in_progress,
            success_fragment_count: e.count.success,
          },
        },
      }),
        oe());
      var o = e.count,
        a = e.fragment,
        l = babelHelpers.objectWithoutPropertiesLoose(e, c),
        s = Object.keys(a).map(function (e) {
          return (I(e), a[e]);
        });
      R(e.async_request_set_id, r("AdDraftPublishStatuses").IN_PROGRESS);
      var u = babelHelpers.extends({}, l, re(e), {
        status: r("AdDraftPublishStatuses").IN_PROGRESS,
        fragment_statuses: { data: s },
      });
      r("AdsDraftPublishPublishStartedAction").dispatch(
        { draftID: n, response: u },
        {
          line: "940",
          module: "AdsDraftPublishRealtimeClient.js",
          moduleID: i.id,
        },
      );
    }
    var K = new Map();
    function Q() {
      K.size !== 0 &&
        (r("AdsDraftDraftFragmentValidatedDataAction").dispatch(
          { fragments: K },
          {
            line: "952",
            module: "AdsDraftPublishRealtimeClient.js",
            moduleID: i.id,
          },
        ),
        (K = new Map()));
    }
    var X = r("debounce")(function () {
      Q();
    }, 500);
    function Y() {
      var e = X.isPending();
      (X(), !e && r("qex")._("5883") === !0 && Q());
    }
    function J(e) {
      r("QPLSharing").emitPoint("PUBLISH_REQUEST", "VALIDATION_COMPLETED", {
        data: { string: { fragment_id: e.id, ad_object_id: e.ad_object_id } },
      });
      var t = r("AdsDraftFragmentValidationProvider")().get(e.id);
      (t != null &&
        t.fragment_version.toString() !== e.fragment_version.toString()) ||
        (e.validation_status !==
          r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION && I(e.id),
        K.set(e.id, e),
        Y());
    }
    function Z(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "DRAFT_DISCARDED", {
        data: { string: { draft_version: e.draft_version } },
      }),
        r("AdsDraftDraftDiscardedNotificationAction").dispatch(
          { draftID: n, draftVersion: e.draft_version },
          {
            line: "1016",
            module: "AdsDraftPublishRealtimeClient.js",
            moduleID: i.id,
          },
        ));
    }
    function ee() {
      h && (r("clearTimeout")(h), (h = null));
    }
    function te() {
      (ee(), (h = r("setTimeout")(ne, p)));
    }
    function ne() {
      var e = r("AdsDraftPublishDataProvider")().draftID;
      r("FBLogger")("ads").warn(
        "Publish of %s might be stalled as there have not been realtime updates for a while (more details on https://fburl.com/rti/fnz52pwv). Falling back to getting status from the API directly",
        e,
      );
      var t = r("filterMapKeysToArray")(C, function (e) {
        return e === !1;
      });
      e != null &&
        (r("AdsDraftPublishDataManager").fetchAndDispatchPublishStatus(e, t),
        r("adsMgmtLogger")("realtime_publish_stalled", {}));
    }
    function re(e) {
      if (!e || !e.count) return null;
      var t = {};
      return (
        r("forEachObject")(e.count, function (e, n) {
          t[n + "_count"] = e;
        }),
        t
      );
    }
    function oe() {
      o("AdsDraftPublishQPLUserFlowLogging").logToAllPublishUserFlows({
        bool: { has_used_gqls: !0 },
      });
    }
    ((l.__debug = v),
      (l.isPublishStatusFinished = S),
      (l.updatePublishStatus = R),
      (l.init = L),
      (l.bufferUntilPublishStatusFetched = E));
  },
  98,
);
