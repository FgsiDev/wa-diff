__d(
  "AdsPEDraftPublishLoggerHelper",
  [
    "AdAsyncRequestStatus",
    "AdsAPIDraftPaths",
    "AdsAPIDraftPublishStatusPaths",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsDraftProvider",
    "AdsDraftPublishTypes",
    "AdsDuplicationUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPEUploadStore",
    "BizAIFeatureLoggingUtils",
    "Promise",
    "adsDraftGetErrorsByIDFromFragmentStatusData",
    "asyncToGeneratorRuntime",
    "getByPath",
    "gkx",
    "isMessageMarketingEnabledFromCampaign",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsDraftProvider").toFluxStore(),
      u = 2e3;
    function c(e) {
      var t, n;
      return {
        draft_id: e.id,
        current_action_items_count_map: {
          canceled: (t = r("getByPath"))(
            e,
            (n = r("AdsAPIDraftPaths")).PUBLISH_STATUS.CANCELED_COUNT,
          ),
          error: t(e, n.PUBLISH_STATUS.ERROR_COUNT),
          initial: t(e, n.PUBLISH_STATUS.INITIAL_COUNT),
          in_progress: t(e, n.PUBLISH_STATUS.IN_PROGRESS_COUNT),
          success: t(e, n.PUBLISH_STATUS.SUCCESS_COUNT),
        },
      };
    }
    function d(e) {
      var t,
        n,
        o,
        a =
          (t =
            (n = e.response) == null || (n = n.fragment_statuses) == null
              ? void 0
              : n.data) != null
            ? t
            : [];
      return {
        action_session_id: r("AdsPEUploadStore").getSessionID(),
        draft_id: e.draftID,
        error_code: e.error.code,
        error_message: e.error.message,
        error_sub_code: e.error.error_subcode,
        error_type: e.failureReason,
        event_source: r("AdsPEUploadStore").getPreviewSource(),
        fbtrace_id: e.error.fbtrace_id,
        fragment_ids:
          (o = e.fragmentIDs) != null
            ? o
            : a.map(function (e) {
                return e.fragment_id;
              }),
        stack_trace: e.error.stack,
        www_request_id: e.error.fbtrace_id,
      };
    }
    function m(t) {
      return new (e || (e = n("Promise")))(function (e) {
        return window.setTimeout(e, t);
      });
    }
    function p(e, t) {
      return _(e, o("AdsPECampaignSelectors").getSelector, t);
    }
    function _(t, o, a) {
      return t == null
        ? new (e || (e = n("Promise")))(function (e) {
            e(null);
          })
        : (e || (e = n("Promise"))).race([
            r("promiseStoreGet")(o.getStores(), function () {
              return o()(t);
            }),
            m(a).then(function () {
              return null;
            }),
          ]);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e == null ? void 0 : e.ad_object_type;
          if (n !== "ad_set" && n !== "ad") return null;
          var o = null;
          n === "ad"
            ? (o = h(e == null ? void 0 : e.ad_object_id, t).campaignID)
            : (o = e == null ? void 0 : e.ad_object_id);
          try {
            var a = yield p(o, u),
              i = null;
            return (
              n === "ad_set" &&
                r("AdsCampaignDraftFragmentStore").hasDraft(t) &&
                (i = r("AdsCampaignDraftFragmentStore").get(t).getValue()),
              a == null && i == null ? null : babelHelpers.extends({}, a, i)
            );
          } catch (e) {
            return null;
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = null,
        a = null;
      if (e != null) {
        var i = o("AdsPEAdgroupSelectors")
          .getRecordSelector_LEGACY()(e)
          .getValue();
        ((n = i == null ? void 0 : i.campaign_id),
          (a = i == null ? void 0 : i.adset_id));
      }
      if (r("AdsAdgroupDraftFragmentStore").hasDraft(t)) {
        var l = r("AdsAdgroupDraftFragmentStore").get(t).getValue();
        ((l == null ? void 0 : l.adset_id) != null &&
          (a = l == null ? void 0 : l.adset_id),
          (l == null ? void 0 : l.campaign_id) != null &&
            (n = l == null ? void 0 : l.campaign_id));
      }
      return { campaignGroupID: n, campaignID: a };
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield p(e, u);
            return t == null ? void 0 : t.campaign_id;
          } catch (e) {
            return null;
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          e: {
            if (t === "ad") {
              var r = h(e, n),
                o = r.campaignGroupID,
                a = r.campaignID;
              return { adgroup_id: e, campaign_group_id: o, campaign_id: a };
            }
            return t === "ad_set"
              ? {
                  adgroup_id: null,
                  campaign_group_id: yield y(e),
                  campaign_id: e,
                }
              : t === "campaign"
                ? { adgroup_id: null, campaign_group_id: e, campaign_id: null }
                : {
                    adgroup_id: null,
                    campaign_group_id: null,
                    campaign_id: null,
                  };
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = r("AdsPEUploadStore").getSessionID(),
            l = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
              s.getState().get(t.draftID),
            ),
            u = r("getByPath")(
              t.response,
              r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
              [],
            ),
            c = null,
            d = null,
            m =
              (a = t.response) == null || (a = a.fragment_statuses) == null
                ? void 0
                : a.data[0],
            p = m == null ? void 0 : m.ad_object_type,
            _ = m == null ? void 0 : m.ad_object_id;
          if (p === "ad" && _ != null) {
            var g;
            ((d = o("AdsPEAdgroupSelectors")
              .getRecordSelector_LEGACY()(_)
              .getValue()),
              (c =
                (g = d) == null || (g = g.creative) == null
                  ? void 0
                  : g.product_set_id));
          }
          var h = yield f(m, t.draftID),
            y = null;
          if (
            (h != null &&
              (y = o(
                "isMessageMarketingEnabledFromCampaign",
              ).isMessageMarketingEnabledFromCampaign(h)),
            t.isInitialRequestFailure)
          ) {
            var C = new Set(t.fragmentIDs);
            u = u.filter(function (e) {
              return C.has(e.fragment_id) || t.fragmentIDs.length === 0;
            });
          }
          var v = r("adsDraftGetErrorsByIDFromFragmentStatusData")(u);
          return yield (e || (e = n("Promise"))).all(
            Array.from(
              v,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      a = e[1];
                    return babelHelpers.extends(
                      {
                        action_session_id: i,
                        ad_account_id_explicit: l.account_id,
                      },
                      yield b(n, a.adObjectType, t.draftID),
                      {
                        biz_ai_feature_statuses: Object.fromEntries(
                          o("BizAIFeatureLoggingUtils").getBizAIFeatureStatuses(
                            d,
                          ),
                        ),
                        current_report_id: a.asyncRequestID,
                        draft_id: t.draftID,
                        error_message: a.errorMessage,
                        error_sub_code: a.errorSubCode,
                        error_type: t.isInitialRequestFailure
                          ? o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                              .INITIAL_REQUEST_FAILURE
                          : o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                              .UNKNOWN,
                        event_source: r("AdsPEUploadStore").getPreviewSource(),
                        fragment_id: a.fragmentID,
                        is_duplicated_object: o(
                          "AdsDuplicationUtils",
                        ).isDuplicatedFragment(n, a.adObjectType),
                        is_new_fragment: a.isNew,
                        object_ids: [n],
                        object_level: a.adObjectType,
                        original_ad_object_id: n,
                        product_set_id: c,
                        prior_data:
                          t.publishRequestError != null
                            ? JSON.stringify(t.publishRequestError)
                            : null,
                        subsequent_data: JSON.stringify({
                          is_mm_enabled: y,
                          ads_link_error_fix_gk: r("gkx")("17791"),
                        }),
                        vital: !0,
                      },
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return (
        e === void 0 && (e = {}),
        !!r("getByPath")(
          e,
          r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.path,
        )
      );
    }
    function E(e) {
      var t = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
        s.getState().get(e.draftID),
      );
      return {
        action_session_id: r("AdsPEUploadStore").getSessionID(),
        ad_account_id: t.account_id,
        draft_id: e.draftID,
        event_source: r("AdsPEUploadStore").getPreviewSource(),
        prior_data: JSON.stringify(e.response || {}),
      };
    }
    function k(e) {
      var t = e.response || {},
        n = e.draftID,
        a = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
          s.getState().get(n),
        ),
        i = r("getByPath")(
          t,
          r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.ERROR_DATA
            .FRAGMENT_ID,
          null,
        );
      return {
        action_session_id: r("AdsPEUploadStore").getSessionID(),
        ad_account_id: a.account_id,
        draft_id: n,
        error_message: r("getByPath")(
          t,
          r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.ERROR_MESSAGE,
        ),
        error_sub_code: +r("getByPath")(
          t,
          r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.ERROR_CODE,
        ),
        error_type: e.isInitialRequestFailure
          ? o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
              .INITIAL_REQUEST_FAILURE
          : o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS.UNKNOWN,
        event_source: r("AdsPEUploadStore").getPreviewSource(),
        fragment_id: i,
        prior_data:
          e.publishRequestError != null
            ? JSON.stringify(e.publishRequestError)
            : null,
        vital: !0,
      };
    }
    function I(e) {
      var t = e.publish_status;
      return t ? T(t) : null;
    }
    function T(e) {
      var t = !!e.publish_error;
      if (t)
        return {
          errorMessage: r("getByPath")(
            e,
            r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.ERROR_MESSAGE,
          ),
          errorSubCode: r("getByPath")(
            e,
            r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.ERROR_CODE,
          ),
          fragmentID: r("getByPath")(
            e,
            r("AdsAPIDraftPublishStatusPaths").PUBLISH_ERROR.ERROR_DATA
              .FRAGMENT_ID,
          ),
        };
      var n = r("getByPath")(
          e,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
          [],
        ),
        o = n.find(function (e) {
          return e.status === r("AdAsyncRequestStatus").ERROR;
        });
      return o
        ? {
            errorMessage: o.error_message,
            errorSubCode: o.error_code,
            fragmentID: o.fragment_id,
          }
        : null;
    }
    ((l.getInProgressOnInitData = c),
      (l.getDraftPublishFailureData = d),
      (l.sleepPromise = m),
      (l.makeCampaignLoaderPromise = p),
      (l.makeObjectLoaderPromise = _),
      (l.getDraftFragmentPublishErrorsData = S),
      (l.hasPublishError = L),
      (l.getPublishWillCompleteData = E),
      (l.getDraftPublishErrorData = k),
      (l.getErrorFromDraft = I),
      (l.getErrorFromPublishStatus = T));
  },
  98,
);
