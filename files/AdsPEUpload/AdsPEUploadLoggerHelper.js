__d(
  "AdsPEUploadLoggerHelper",
  [
    "AdDraftPublishStatuses",
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCreativeFeaturesUtils",
    "AdsDraftProvider",
    "AdsError",
    "AdsErrorUtils",
    "AdsFragmentsUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsManagerDowntimeProductionFiredrill",
    "AdsMessageCampaignTargetingLoggingUtils",
    "AdsMgmtQPLLogger",
    "AdsObjectLevelToFragmentStore",
    "AdsObjectLevelToStore",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPCAUnifiedWS2LoggingUtils",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPEDraftPublishAdgroupFragmentLogger",
    "AdsPEDraftPublishLoggerHelper",
    "AdsPELegacyLoggerState",
    "AdsPEUploadStore",
    "BizAIFeatureLoggingUtils",
    "PowerEditorLoggingConstants",
    "Promise",
    "adsDraftActivePublishSelector",
    "asyncToGeneratorRuntime",
    "flattenArray",
    "gkx",
    "immutable",
    "isMessageMarketingEnabledFromCampaign",
    "normalizeErrorPath",
    "performanceAbsoluteNow",
    "qex",
    "qpl",
    "requireWeak",
    "sumOfArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("AdsDraftProvider").toFluxStore(),
      m = 500,
      p = 1e3,
      _;
    r("requireWeak")("AdsObjectLevelToValidationErrorsSelectors", function (e) {
      _ = e;
    });
    var f =
        ((e = {}),
        (e.ad = "adgroup_start_publish"),
        (e.ad_set = "campaign_start_publish"),
        (e.campaign = "campaign_group_start_publish"),
        (e.ad_account = ""),
        (e.topline = ""),
        e),
      g =
        ((s = {}),
        (s.ad = "adgroup_id"),
        (s.ad_set = "campaign_id"),
        (s.campaign = "campaign_group_id"),
        (s.ad_account = "original_ad_object_id"),
        (s.topline = "original_ad_object_id"),
        s),
      h = ["ad", "ad_set", "campaign"],
      y = {
        _uploadStartTime: 0,
        getLogsForUploadStart: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t, a;
            (o("AdsPELegacyLoggerState").startFlow(
              o("PowerEditorLoggingConstants").FLOW.UPLOAD,
            ),
              y.measureUploadStart());
            var l = (t = e.selection) != null ? t : r("immutable").Map(),
              s = l
                .map(function (e) {
                  return e.toSet();
                })
                .toSet()
                .flatten(),
              u = r("immutable").OrderedMap(),
              d = r("immutable").OrderedMap(),
              m = [];
            h.forEach(function (e) {
              var t = r("AdsObjectLevelToFragmentStore").get(e),
                n;
              if (_ != null) {
                var a;
                n = (a = _.get(e)) == null ? void 0 : a.combinedErrorsSelector;
              }
              var l = r("AdsObjectLevelToStore").get(e),
                c = t
                  .getFragmentsInDraftFor(
                    r("AdsAccountStore").getSelectedAccountID(),
                  )
                  .filter(function (e) {
                    return !e.isLoading() && e.hasValue();
                  })
                  .map(function (e) {
                    return e.getValueEnforcing();
                  })
                  .filter(function (e) {
                    return s.has(e.objectID);
                  })
                  .map(function (t) {
                    var a,
                      s,
                      u = [];
                    n != null && (u = n(t.objectID));
                    var c = l.getObject(t.objectID);
                    m = m.concat(
                      u.map(function (e) {
                        return e.message;
                      }),
                    );
                    var d, p, _, f, g, h;
                    if (c.hasValue()) {
                      var y = c.getValueEnforcing();
                      e === "ad"
                        ? ((d = y.campaign_id),
                          (p = y.adset_id),
                          (_ = o("AdsPEAdgroupSelectors")
                            .getSelector_LEGACY()(t.objectID)
                            .getValue()),
                          (h = r("AdsAdgroupDraftFragmentStore").isNew(
                            t.objectID,
                          )))
                        : e === "ad_set"
                          ? ((d = y.campaign_id),
                            (f = o("AdsPECampaignSelectors")
                              .getSelector()(t.objectID)
                              .getValue()),
                            (h = r("AdsCampaignDraftFragmentStore").isNew(
                              t.objectID,
                            )))
                          : e === "campaign" &&
                            ((h = r("AdsCampaignGroupDraftFragmentStore").isNew(
                              t.objectID,
                            )),
                            (g = o("AdsPECampaignGroupSelectors")
                              .getByFieldsSelector()(
                                t.objectID,
                                {
                                  is_skadnetwork_attribution: null,
                                  objective: null,
                                },
                                i.id,
                              )
                              .getValue()));
                    }
                    return {
                      id: t.objectID,
                      fragmentID: t.fragmentID,
                      isNewFragment: h,
                      isValid: !u.length,
                      adgroupSpec: _,
                      campaignSpec: f,
                      isSKAdNetworkAttribution:
                        (a = g) == null ? void 0 : a.is_skadnetwork_attribution,
                      objective: (s = g) == null ? void 0 : s.objective,
                      objectCreationSource: t.source,
                      parentCampaignGroupID: d,
                      parentCampaignID: p,
                      validationErrors: u,
                    };
                  })
                  .valueSeq()
                  .toArray();
              ((u = u.set(e, c)), c.length && (d = d.set(e, c.length)));
            });
            var b = (a = u.get("ad")) != null ? a : [];
            for (var S of b) {
              var R,
                L = S.adgroupSpec;
              if (
                (L == null || (R = L.metadata) == null
                  ? void 0
                  : R.is_pca_unified_format_ad) === !0
              ) {
                var E,
                  k,
                  I = L.creative,
                  T = r("qex")._("4926"),
                  D = o(
                    "AdsPEDraftPublishAdgroupFragmentLogger",
                  ).getPCAUPublishAttemptMediaData(S.id),
                  x = o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).getPCAUWS2Cohort();
                o("AdsPCAUnifiedWS2LoggingUtils").logFlowEdit(
                  "publish_attempt",
                  {
                    adgroupID: S.id,
                    campaignID: S.parentCampaignID,
                    campaignGroupID: S.parentCampaignGroupID,
                    productSetID:
                      I == null || (E = I.creative_sourcing_spec) == null
                        ? void 0
                        : E.associated_product_set_id,
                    enrollStatus: T,
                  },
                  babelHelpers.extends(
                    {
                      isPcaUnifiedFormatAd: !0,
                      treatmentType: T,
                      cohort: x,
                      formatTransformationSpec:
                        (I == null ? void 0 : I.format_transformation_spec) !=
                        null
                          ? JSON.stringify(I.format_transformation_spec)
                          : null,
                      productMediaMetadataSpec:
                        (I == null || (k = I.creative_sourcing_spec) == null
                          ? void 0
                          : k.product_media_metadata_spec) != null
                          ? JSON.stringify(
                              I.creative_sourcing_spec
                                .product_media_metadata_spec,
                            )
                          : null,
                      mediaSourcingSpec:
                        (I == null ? void 0 : I.media_sourcing_spec) != null
                          ? JSON.stringify(I.media_sourcing_spec)
                          : null,
                    },
                    D,
                  ),
                );
              }
            }
            var $ = v(!1, d, m, null, e.fakePublishID),
              P = [];
            for (var N of u) {
              var M = N[0],
                w = N[1],
                A = f[M],
                F = g[M];
              for (var O of w) {
                var B = y._getLogsForItemWithTimeout(O, M, F, A, p);
                P.push(B);
              }
            }
            var W = yield (c || (c = n("Promise"))).all(P),
              q = y._replaceNullLogsWithFallbackLogs(W),
              U = y._getLogsFromArrayOfItemLogsParamsWithLogs(q);
            return (
              o("AdsMgmtQPLLogger").markEvent(
                r("qpl")._(270218326, "5877"),
                "success",
                7,
              ),
              [C("start_upload", babelHelpers.extends({}, $), "upload")].concat(
                U,
              )
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        _replaceNullLogsWithFallbackLogs: function (t) {
          return t.map(function (e) {
            var t = e.params,
              n = e.logs;
            return n == null
              ? {
                  params: t,
                  logs: y._getLogsForItemWithoutFieldsFromAsyncData(
                    t.item,
                    t.level,
                    t.idField,
                    t.publishEventName,
                  ),
                }
              : e;
          });
        },
        _getLogsFromArrayOfItemLogsParamsWithLogs: function (t) {
          var e = t.map(function (e) {
              return e.logs;
            }),
            n = y._flattenArrayOfArrayOfLogs(e);
          return n;
        },
        _flattenArrayOfArrayOfLogs: function (t) {
          var e = [];
          for (var n of t) n != null && (e = e.concat(n));
          return e;
        },
        _getLogsForItemWithTimeout: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, r, a, i) {
              var l = yield (c || (c = n("Promise"))).race([
                y
                  ._getLogsForItem(e, t, r, a)
                  .then(function (n) {
                    return {
                      params: {
                        item: e,
                        level: t,
                        idField: r,
                        publishEventName: a,
                      },
                      logs: n,
                    };
                  })
                  .catch(function () {
                    return {
                      params: {
                        item: e,
                        level: t,
                        idField: r,
                        publishEventName: a,
                      },
                      logs: null,
                    };
                  }),
                o("AdsPEDraftPublishLoggerHelper")
                  .sleepPromise(i)
                  .then(function () {
                    return {
                      params: {
                        item: e,
                        level: t,
                        idField: r,
                        publishEventName: a,
                      },
                      logs: null,
                    };
                  }),
              ]);
              return l;
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        _getLogsForItem: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              var a,
                i,
                l = e.campaignSpec,
                s = null;
              e: {
                if (t === "ad_set") {
                  s = {
                    includedCustomAudienceIDs: o(
                      "AdsMessageCampaignTargetingLoggingUtils",
                    ).getIncludedCustomAudienceIDs(l),
                    excludedCustomAudienceIDs: o(
                      "AdsMessageCampaignTargetingLoggingUtils",
                    ).getExcludedCustomAudienceIDs(l),
                    is_mm_enabled: o(
                      "isMessageMarketingEnabledFromCampaign",
                    ).isMessageMarketingEnabledFromCampaign(l),
                  };
                  break e;
                }
                if (t === "ad") {
                  var u = o("AdsPEDraftPublishLoggerHelper")
                    .makeCampaignLoaderPromise(e.parentCampaignID, m)
                    .then(function (e) {
                      return e;
                    })
                    .catch(function () {
                      return null;
                    });
                  ((l = yield u),
                    (s = {
                      is_mm_enabled: l
                        ? o(
                            "isMessageMarketingEnabledFromCampaign",
                          ).isMessageMarketingEnabledFromCampaign(l)
                        : null,
                    }));
                  break e;
                }
                {
                  s = {};
                  break e;
                }
              }
              var c = y._getItemLogDataWithoutFieldsFromAsyncData(e, n),
                d = babelHelpers.extends({}, c, {
                  campaign_spec: JSON.stringify(l),
                  rf_budget_value: (a = l) == null ? void 0 : a.daily_budget,
                  biz_ai_is_advantage_plus_business_ai_agent: o(
                    "AdsCreativeFeaturesUtils",
                  ).isFeatureOptedInFromAdgroupNullable(
                    e.adgroupSpec,
                    "biz_ai",
                  ),
                  biz_ai_feature_statuses: Object.fromEntries(
                    o("BizAIFeatureLoggingUtils").getBizAIFeatureStatuses(
                      e.adgroupSpec,
                    ),
                  ),
                  campaign_bid_strategy:
                    (i = l) == null ? void 0 : i.bid_strategy,
                  subsequent_data: JSON.stringify(babelHelpers.extends({}, s)),
                }),
                p = y._makePublishLogsForItem(e, t, r, d);
              return p;
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        _getLogsForItemWithoutFieldsFromAsyncData: function (t, n, r, o) {
          var e = y._getItemLogDataWithoutFieldsFromAsyncData(t, r),
            a = babelHelpers.extends({}, e, {
              subsequent_data: JSON.stringify(
                babelHelpers.extends({}, e.subsequent_data, {
                  non_async_log: !0,
                }),
              ),
            });
          return y._makePublishLogsForItem(t, n, o, a);
        },
        _makePublishLogsForItem: function (t, n, r, o) {
          return [C(r, o, "publish")].concat(b(t, n));
        },
        _getItemLogDataWithoutFieldsFromAsyncData: function (t, n) {
          var e,
            o = (t.validationErrors || []).map(function (e) {
              return e.message;
            }),
            a = {
              action_session_id: r("AdsPEUploadStore").getSessionID(),
              campaign_group_id: t.parentCampaignGroupID,
              campaign_id: t.parentCampaignID,
              adgroup_spec: JSON.stringify(t.adgroupSpec),
              client_error_messages: o,
              event_source: r("AdsPEUploadStore").getPreviewSource(),
              fragment_id: t.fragmentID,
              has_client_error: !t.isValid,
              is_new_fragment: t.isNewFragment,
              is_skadnetwork_attribution: t.isSKAdNetworkAttribution,
              object_creation_source: t.objectCreationSource,
              objective: t.objective,
            };
          return babelHelpers.extends({}, a, ((e = {}), (e[n] = t.id), e));
        },
        getLogsForUploadFinished: function (t, n, a, i) {
          var e,
            l,
            s,
            u = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
              d.getState().get(t),
            ),
            c = u.account_id,
            m = r("adsDraftActivePublishSelector")();
          if (!c || !m.hasValue()) return [];
          var p = m.getValueEnforcing(),
            _ = p.success_count,
            f = p.status,
            g = f === r("AdDraftPublishStatuses").FAILED,
            h = !!_,
            y =
              (e =
                p == null || (l = p.fragment_statuses) == null
                  ? void 0
                  : l.data) != null
                ? e
                : [],
            b = y
              .map(function (e) {
                return e.error_message;
              })
              .filter(Boolean),
            S = r("immutable")
              .OrderedMap(
                ((s = {}),
                (s.campaign = o(
                  "AdsFragmentsUtils",
                ).filterFragmentsByObjectType(y, "campaign").length),
                (s.ad_set = o("AdsFragmentsUtils").filterFragmentsByObjectType(
                  y,
                  "ad_set",
                ).length),
                (s.ad = o("AdsFragmentsUtils").filterFragmentsByObjectType(
                  y,
                  "ad",
                ).length),
                s),
              )
              .filter(function (e) {
                return e > 0;
              }),
            R = v(!0, S, b, c, i),
            L = [];
          if (
            (g &&
              L.push(
                C(
                  "upload_failed",
                  babelHelpers.extends({}, R, {
                    immediate: n,
                    object_creation_source: a,
                  }),
                  "upload",
                ),
              ),
            h)
          ) {
            (L.push(
              C(
                "upload_succeed",
                babelHelpers.extends({}, R, {
                  immediate: n,
                  object_creation_source: a,
                }),
                "upload",
              ),
            ),
              o("AdsPELegacyLoggerState").endFlow(
                o("PowerEditorLoggingConstants").FLOW.UPLOAD,
              ));
            for (var E of o(
              "AdsManagerDowntimeProductionFiredrill",
            ).getFakeSignals())
              L.push(
                C(
                  E,
                  babelHelpers.extends({}, R, {
                    immediate: n,
                    object_creation_source: a,
                  }),
                  "upload",
                ),
              );
            o("AdsMgmtQPLLogger").markEvent(
              r("qpl")._(270207765, "2118"),
              "success",
              7,
            );
          }
          return L;
        },
        getLogsForPublishReview: function () {
          var e = r("AdsAccountStore").getSelectedAccountID(),
            t = r("immutable")
              .Seq()
              .concat(
                r("AdsAdgroupDraftFragmentStore")
                  .getFragmentsInDraftFor(e)
                  .valueSeq(),
                r("AdsCampaignDraftFragmentStore")
                  .getFragmentsInDraftFor(e)
                  .valueSeq(),
                r("AdsCampaignGroupDraftFragmentStore")
                  .getFragmentsInDraftFor(e)
                  .valueSeq(),
              )
              .filter(function (e) {
                return !e.isLoading() && e.hasValue();
              })
              .toArray()
              .map(function (e) {
                var t = e.getValueEnforcing(),
                  n,
                  o = [];
                return (
                  _ != null &&
                    ((n = _.get(t.objectType).combinedErrorsSelector),
                    (o = n(t.objectID))),
                  {
                    id: t.objectID,
                    fragmentID: t.fragmentID,
                    errors: r("AdsErrorUtils").getAllErrorsAtLevel(
                      o,
                      r("AdsError").Level.WARN,
                    ),
                    idField: g[t.objectType],
                  }
                );
              }),
            n = r("AdsPEUploadStore").getSessionID();
          return r("flattenArray")(
            t.map(function (e) {
              return e.errors.map(function (t) {
                var o,
                  a = {
                    fragment_id: e.fragmentID,
                    action_session_id: n,
                    error_type: (t.isServerError ? "s-" : "c-") + t.key,
                    error_sub_code: t.key,
                    error_message: t.message,
                    blame_field_specs: r("normalizeErrorPath")(t.path),
                    event_source: r("AdsPEUploadStore").getPreviewSource(),
                    has_client_error: !0,
                  };
                return C(
                  "validation_error_on_review",
                  babelHelpers.extends(
                    {},
                    a,
                    ((o = {}), (o[e.idField] = e.id), o),
                  ),
                  "upload",
                );
              });
            }),
          );
        },
        getLogsForDraftPublishCompleted: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = e.response || {},
                a = [];
              if (o("AdsPEDraftPublishLoggerHelper").hasPublishError(r)) {
                var i = o(
                  "AdsPEDraftPublishLoggerHelper",
                ).getDraftPublishErrorData(e);
                a.push(
                  C(
                    "publish_failed",
                    babelHelpers.extends({}, i, {
                      immediate: t,
                      object_creation_source: n,
                    }),
                    "upload",
                  ),
                );
              }
              return yield o("AdsPEDraftPublishLoggerHelper")
                .getDraftFragmentPublishErrorsData(e)
                .then(function (e) {
                  return a.concat(
                    e.map(function (e) {
                      return C(
                        "publish_item_failed",
                        babelHelpers.extends({}, e, {
                          immediate: t,
                          object_creation_source: n,
                        }),
                        "upload",
                      );
                    }),
                  );
                });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        measureUploadStart: function () {
          y._uploadStartTime = (u || (u = r("performanceAbsoluteNow")))();
        },
        getTotalUploadTime: function () {
          return y._uploadStartTime && y._uploadStartTime > 0
            ? (u || (u = r("performanceAbsoluteNow")))() - y._uploadStartTime
            : null;
        },
      };
    function C(e, t, n) {
      return { category: n, data: t, eventName: e };
    }
    function b(e, t) {
      var n = null,
        o = null;
      switch (t) {
        case "campaign":
          n = "campaign_group_error_on_start_publish";
          break;
        case "ad_set":
          n = "campaign_error_on_start_publish";
          break;
        case "ad":
          n = "adgroup_error_on_start_publish";
          break;
      }
      if (_ != null) {
        var a;
        o = (a = _.get(t)) == null ? void 0 : a.combinedErrorsSelector;
      }
      if (!n || !o) return [];
      var i = r("AdsErrorUtils").getAllErrorsAtLevel(
        o(e.id),
        r("AdsError").Level.WARN,
      );
      return i.map(function (t) {
        return C(
          n || "",
          {
            fragment_id: e.fragmentID,
            action_session_id: r("AdsPEUploadStore").getSessionID(),
            error_code: t.key,
            error_message: t.message,
            event_source: r("AdsPEUploadStore").getPreviewSource(),
            blame_field_specs: r("normalizeErrorPath")(t.path),
          },
          "upload",
        );
      });
    }
    function v(e, t, n, o, a) {
      var i = e ? y.getTotalUploadTime() : null,
        l = r("sumOfArray")(t.valueSeq().toArray()),
        s = {
          current_action_time: i,
          current_action_ads_count: t.get("ad") || 0,
          current_action_campaigns_count: t.get("ad_set") || 0,
          current_action_campaign_groups_count: t.get("campaign") || 0,
          current_action_items_count: l,
          client_error_messages: n,
          event_source: r("AdsPEUploadStore").getPreviewSource(),
          has_client_error: n.length > 0,
          action_session_id: r("AdsPEUploadStore").getSessionID(),
          vital: !0,
          publish_ids: [a || ""],
          metadata: JSON.stringify({ is_comet: r("gkx")("12639") }),
        };
      return (o && (s.ad_account_id = o), s);
    }
    var S = y;
    l.default = S;
  },
  98,
);
