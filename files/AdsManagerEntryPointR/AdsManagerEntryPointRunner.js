__d(
  "AdsManagerEntryPointRunner",
  [
    "AdsInteractionTrigger",
    "AdsInteractionTriggerEvent",
    "AdsInteractionTriggerTracker",
    "AdsManagerAppContext",
    "AdsManagerEPAPShadowTransformer",
    "AdsManagerEntryPointUtils",
    "AdsManagerRelayClientPreloadedData",
    "AdsManagerRelayClientPreloaderEventsConsoleLogger",
    "AdsPerfInteractionAddSpansUtil",
    "AdsPreloaderUtils",
    "EventEmitter",
    "FBLogger",
    "GraphAPIPreloadedData",
    "GraphAPIRequestMatchingUtils",
    "InteractionTracingMetrics",
    "JSResource",
    "JSResourceEvents",
    "QuickPerformanceLogger",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "forEachObject",
    "isNullish",
    "minBy",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNow",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 12e4,
      d = 100;
    function m(e, t, n) {
      return o("JSResourceEvents").getEvents(n, e, t).length > 0;
    }
    function p(t, n, o, a) {
      var i,
        l = babelHelpers.extends({}, o),
        s = (i = l.string) != null ? i : {};
      ((l.string = babelHelpers.extends({}, s, { resource: n })),
        (e || (e = r("QuickPerformanceLogger"))).markEvent(
          r("qpl")._(41494292, "2186"),
          t,
          7,
          { annotations: l, timestamp: a },
        ));
    }
    function _(t, n, o) {
      var a,
        i = babelHelpers.extends({}, o),
        l = (a = i.string) != null ? a : {};
      ((i.string = babelHelpers.extends({}, l, { trigger: n })),
        (e || (e = r("QuickPerformanceLogger"))).markEvent(
          r("qpl")._(41485898, "517"),
          t,
          7,
          {
            annotations: i,
            timestamp: (s || (s = r("performanceAbsoluteNow")))(),
          },
        ));
    }
    function f(t, n, o, a, i) {
      var l,
        s = babelHelpers.extends({}, a),
        u = (l = s.string) != null ? l : {};
      if (
        ((s.string = babelHelpers.extends({}, u, {
          name: n.name,
          path: n.path,
          source: h(n),
        })),
        o != null)
      ) {
        var c,
          d = (c = s.string_array) != null ? c : {};
        s.string_array = babelHelpers.extends({}, d, { consumers: o });
      }
      (e || (e = r("QuickPerformanceLogger"))).markEvent(
        r("qpl")._(41491369, "5631"),
        t,
        7,
        { annotations: s, timestamp: i },
      );
    }
    function g(t, n, o, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f = {
          interaction: t.interaction,
          trace_policy: (l = t.tracePolicy) != null ? l : "",
          interaction_key: t.key,
          original_name: (s = n.name) != null ? s : "null",
          original_path: n.path,
          original_source: h(n),
          incoming_name: (u = o.name) != null ? u : "null",
          incoming_path: o.path,
          incoming_source: h(o),
          uri: window.location.pathname,
          app_id: String(
            (c = r("AdsManagerAppContext").getValue("APP_ID")) != null ? c : "",
          ),
          user_id: String(
            (d = r("AdsManagerAppContext").getValue("USER_ID")) != null
              ? d
              : "",
          ),
          ad_account_id: String(
            (m = r("AdsManagerAppContext").getValue("AD_ACCOUNT_ID")) != null
              ? m
              : "",
          ),
          business_id: String(
            (p = r("AdsManagerAppContext").getValue("BUSINESS_ID")) != null
              ? p
              : "",
          ),
          draft_id: String(
            (_ = r("AdsManagerAppContext").getValue("DRAFT_ID")) != null
              ? _
              : "",
          ),
        },
        g = [],
        C = [],
        b = [],
        v = {
          missing_incoming_fields_param: a.missingIncomingFields,
          deltas: g,
          original_deltas: C,
          incoming_deltas: b,
          ongoing_entry_point_interactions: Array.from(
            y.activeEntrypoints.keys(),
          ),
        },
        S = { distance: a.distance },
        R = {
          allow_ignore_empty_params: i.allowIgnoreEmptyParams,
          allow_ids_subset: i.allowIDsSubset,
        };
      (r("forEachObject")(a.pairs, function (e, t) {
        (g.push(t), C.push(e.original), b.push(e.incoming));
      }),
        (e || (e = r("QuickPerformanceLogger"))).markEvent(
          r("qpl")._(41496774, "609"),
          "mismatch",
          3,
          { annotations: { bool: R, double: S, string_array: v, string: f } },
        ));
    }
    function h(e) {
      var t, n, r;
      return (t =
        (n = e.source) != null
          ? n
          : e.params instanceof FormData
            ? null
            : (r = e.params) == null
              ? void 0
              : r._reqSrc) != null
        ? t
        : "null";
    }
    o("GraphAPIPreloadedData").setLogMismatchCallback(function (e, t, n) {
      for (var r of y.activeEntrypoints.values()) r.addDataRecallMiss(t, n);
    });
    var y = (function () {
      function e(t, n, a, i) {
        var l = this,
          u;
        (a === void 0 && (a = {}),
          i === void 0 && (i = null),
          (this.isRunning = !1),
          (this.hasNewResourceToPreload = !1),
          (this.interactionID = null),
          (this.trigger = null),
          (this.apShadowTransformer = null),
          (this.timingLogs = {}),
          (this.emitter = new (r("EventEmitter"))()),
          (this.__startListener = function (e) {
            if (
              e.interaction === l.interaction &&
              o("AdsInteractionTrigger").isCodeInteractionStartInfo(e)
            ) {
              var t,
                n = o("AdsManagerEntryPointUtils").getAnnotations(
                  l.interaction,
                  l.loggingAnnotations,
                );
              (r("clearTimeout")(l.interactionStartTimeoutID),
                _("HIT", (t = l.trigger) != null ? t : "unknown", n),
                l.__setInteractionID({
                  interactionID: e.interactionID,
                  interaction: e.interaction,
                }));
            }
          }),
          (this.__endListener = function (e, t, n) {
            var r = n.status;
            if (
              e.interaction === l.interaction &&
              o("AdsInteractionTrigger").isCodeInteractionStartInfo(e)
            ) {
              var a = {
                interactionID: e.interactionID,
                interaction: e.interaction,
              };
              (r === "SUCCESS" && l.__onInteractionSucceed(a),
                l.__onInteractionFinally(a));
            }
          }),
          (this.isRunning = !0),
          (this.preloadedResources = new Set()),
          (this.preloadedData = []),
          (this.preloadedGraphQLQueries = []),
          (this.dataRecallMisses = new Map()),
          (this.startTime = (s || (s = r("performanceAbsoluteNow")))()),
          (this.hasNewResourceToPreload = !1),
          (this.loggingAnnotations = {}),
          (this.interaction = t));
        var c = e.activeEntrypoints.get(t);
        if (c != null) {
          var d, m;
          return (
            (c.loggingAnnotations = o(
              "AdsManagerEntryPointUtils",
            ).mergeAnnotations(c.loggingAnnotations, a)),
            c.apShadowTransformer == null &&
              (d = i) != null &&
              d.logPreloadTransforms &&
              (c.apShadowTransformer = new (r(
                "AdsManagerEPAPShadowTransformer",
              ))(c, t, c.interactionID != null)),
            c.apShadowTransformer != null &&
              ((m = i) == null ? void 0 : m.logPreloadTransforms) === !1 &&
              c.apShadowTransformer.onInteractionFinally(),
            c
          );
        } else this.loggingAnnotations = a;
        if (
          ((u = i) != null &&
            u.logPreloadTransforms &&
            (this.apShadowTransformer = new (r(
              "AdsManagerEPAPShadowTransformer",
            ))(this, t)),
          e.activeEntrypoints.set(t, this),
          n.interactionID != null && n.interaction != null)
        )
          this.__setInteractionID({
            interactionID: n.interactionID,
            interaction: n.interaction,
          });
        else if (n.trigger != null) {
          var p,
            f = n.trigger;
          this.trigger = f;
          var g = o("AdsManagerEntryPointUtils").getAnnotations(
            this.interaction,
            this.loggingAnnotations,
          );
          o("AdsInteractionTrigger").onInteractionStart.add(
            this.__startListener,
          );
          var h = function () {
            (_("MISS", f, g), l.__onInteractionFinally());
          };
          this.interactionStartTimeoutID = r("setTimeout")(
            function () {
              h();
            },
            (p = n.interactionStartTimeout) != null ? p : 1500,
          );
        }
        return this;
      }
      var t = e.prototype;
      return (
        (t.getEventEmitter = function () {
          return this.emitter;
        }),
        (t.__setInteractionID = function (t) {
          var e;
          ((this.interactionID = t.interactionID),
            this.emitter.emit("start", this.interaction, t.interactionID),
            o("AdsInteractionTrigger").onInteractionEnd.add(this.__endListener),
            (e = this.apShadowTransformer) == null ||
              e.onRealInteractionStart());
        }),
        (t.preloadData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = this;
              if (
                (t === void 0 && (t = o("GraphAPIPreloadedData").Provider.EP),
                !this.isRunning)
              )
                return !1;
              if (e.method !== "get")
                return (
                  r("FBLogger")("ads_manager_entry_points").warn(
                    "Tried to preload data using method %s, but only GET requests are supported",
                    e.method,
                  ),
                  !1
                );
              var a = o("GraphAPIPreloadedData").findEquivalentRequest(e);
              if (a == null) {
                var i = o("AdsPreloaderUtils").getQueryKey(e);
                return (
                  this.preloadedData.push(e),
                  (this.timingLogs[i] = {
                    start: (u || (u = r("performanceNow")))(),
                    end: null,
                    eventType: null,
                    request: e,
                    resultStatus: null,
                    type: "Preload",
                  }),
                  o("GraphAPIPreloadedData")
                    .execute(e, this.interaction, t)
                    .then(
                      function (t) {
                        var a = "succeed";
                        t.error != null &&
                          (o("GraphAPIPreloadedData").remove(e, !0),
                          (n.preloadedData = n.preloadedData.filter(
                            function (t) {
                              return t !== e;
                            },
                          )),
                          (a = "failed"));
                        var l = n.timingLogs[i];
                        return (
                          l &&
                            l.type === "Preload" &&
                            ((l.end = (u || (u = r("performanceNow")))()),
                            (l.resultStatus = a)),
                          !0
                        );
                      },
                      function (t) {
                        (o("GraphAPIPreloadedData").remove(e, !0),
                          (n.preloadedData = n.preloadedData.filter(
                            function (t) {
                              return t !== e;
                            },
                          )));
                        var a = n.timingLogs[i];
                        return (
                          a &&
                            a.type === "Preload" &&
                            ((a.end = (u || (u = r("performanceNow")))()),
                            (a.resultStatus = "failed")),
                          !0
                        );
                      },
                    )
                );
              } else return (this.preloadedData.push(a), !1);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.preloadGraphQLData = function (t, n, a, i) {
          if (this.isRunning) {
            var e = o("AdsManagerRelayClientPreloadedData").preloadGraphQLData(
              this.interaction,
              t,
              n,
              a,
              i,
              r("AdsManagerRelayClientPreloaderEventsConsoleLogger"),
            );
            this.preloadedGraphQLQueries.push(e);
          }
        }),
        (t.preloadResources = function (n) {
          var t = this;
          if (this.isRunning) {
            n.map(function (e) {
              return t.preloadedResources.add(e.getModuleId());
            });
            var o = n.filter(function (t) {
                return !e.loadedResources.has(t.getModuleId());
              }),
              a = (u || (u = r("performanceNow")))();
            (o.length > 0 &&
              ((this.hasNewResourceToPreload = !0),
              r("JSResource").loadAll(o, function () {
                for (
                  var n = arguments.length, i = new Array(n), l = 0;
                  l < n;
                  l++
                )
                  i[l] = arguments[l];
                for (var s of o.entries()) {
                  var c = s[0],
                    d = s[1];
                  if (!r("isNullish")(i[c])) {
                    var m = d.getModuleId();
                    (e.loadedResources.add(m),
                      (t.timingLogs[m] = {
                        start: a,
                        end: (u || (u = r("performanceNow")))(),
                        eventType: null,
                        moduleId: m,
                        type: "Bootload",
                      }));
                  }
                }
              })),
              (this.lastPreloadResourcesTime = (
                s || (s = r("performanceAbsoluteNow"))
              )()));
          }
        }),
        (t.addDataRecallMiss = function (t, n) {
          this.interactionID != null && this.dataRecallMisses.set(t, n);
        }),
        (t.__onInteractionSucceed = function (t) {
          t.interactionID === this.interactionID &&
            (this.emitter.emit("success", this.interaction, t.interactionID),
            this.__logData(),
            o("AdsPerfInteractionAddSpansUtil").addEntryPointDataToTrace(
              t.interactionID,
              this.timingLogs,
            ));
        }),
        (t.__logData = function () {
          var t = o("AdsManagerEntryPointUtils").getAnnotations(
              this.interaction,
              this.loggingAnnotations,
            ),
            n = (s || (s = r("performanceAbsoluteNow")))(),
            a = this.interactionID,
            i = new Set(),
            l = new Set();
          if (a != null) {
            var u = r("InteractionTracingMetrics").get(a),
              d = u == null ? void 0 : u.completed;
            if (u != null && d != null) {
              var _ = n - (d - u.start),
                g = o("JSResourceEvents").getAllModuleEvents(_, n);
              for (var h of g) {
                var y = h[0],
                  C = h[1],
                  b = null,
                  v = null,
                  S = null;
                for (var R of C) {
                  if (v != null && b != null && S != null) break;
                  var L = R.type;
                  (L === "ACCESSED" && b == null && ((b = R), i.add(y)),
                    L === "LOADED" && v == null && ((v = R), l.add(y)),
                    L === "PROMISE_RESOLVED" && S == null && (S = R));
                }
                if (
                  !e.loadedResources.has(y) &&
                  v != null &&
                  b != null &&
                  S != null
                ) {
                  p("RECALL_MISS", y, t, n);
                  var E = v.time - r("performanceNavigationStart")(),
                    k = S.time - r("performanceNavigationStart")();
                  this.timingLogs[y] = {
                    start: E,
                    end: k,
                    eventType: "RECALL_MISS",
                    moduleId: y,
                    type: "Bootload",
                  };
                }
              }
              (r("InteractionTracingMetrics").addMetadata(
                a,
                "hasEntryPoint",
                1,
              ),
                r("InteractionTracingMetrics").addMetadata(
                  a,
                  "allAccessedJSResourceCount",
                  i.size,
                ),
                r("InteractionTracingMetrics").addMetadata(
                  a,
                  "allLoadedJSResourceCount",
                  l.size,
                ));
            }
          }
          var I = this.hasNewResourceToPreload;
          if (
            I &&
            this.lastPreloadResourcesTime != null &&
            n - this.startTime < c
          )
            for (var T of this.preloadedResources) {
              var D = m(this.lastPreloadResourcesTime, n, T)
                ? l.has(T)
                  ? "HIT_LATE"
                  : "HIT"
                : "MISS";
              (p(D, T, t, n),
                this.timingLogs[T] && (this.timingLogs[T].eventType = D));
            }
          this.hasNewResourceToPreload = !1;
          for (var x of this.preloadedData) {
            var $ = o("GraphAPIPreloadedData").getDataConsumers(x),
              P = $ != null && $.length > 0 ? "HIT" : "MISS",
              N = o("AdsPreloaderUtils").getQueryKey(x);
            f(P, x, $, t, n);
            var M = this.timingLogs[N];
            M && M.type === "Preload" && ((M.consumers = $), (M.eventType = P));
          }
          for (var w of this.dataRecallMisses.entries()) {
            var A = w[0];
            f("RECALL_MISS", A, null, t, n);
          }
          this.__logDataMismatches();
        }),
        (t.__logDataMismatches = function () {
          var e = this;
          if (!(Math.random() * d > 1 || this.dataRecallMisses.size === 0)) {
            var t = o("AdsInteractionTriggerTracker").getCurrentInteractions();
            if (t.length !== 0) {
              var n = t.find(function (t) {
                return (
                  t.info.interaction === e.interaction &&
                  t.info.event === r("AdsInteractionTriggerEvent").CODE
                );
              });
              if (n != null) {
                var a = function () {
                  var t = i[0],
                    a = i[1],
                    l = e.preloadedData.map(function (e) {
                      return {
                        request: e,
                        deltas: o(
                          "GraphAPIRequestMatchingUtils",
                        ).getRequestDeltas(e, t, a),
                      };
                    }),
                    s = r("minBy")(l, function (e) {
                      return e.deltas.distance;
                    });
                  s && g(n.info, s.request, t, s.deltas, a);
                };
                for (var i of this.dataRecallMisses.entries()) a();
              }
            }
          }
        }),
        (t.__onInteractionFinally = function (n) {
          if (n == null || n.interactionID === this.interactionID) {
            var t;
            (this.emitter.emit(
              "finally",
              this.interaction,
              n == null ? void 0 : n.interactionID,
            ),
              (this.isRunning = !1),
              o("AdsInteractionTrigger").onInteractionStart.remove(
                this.__startListener,
              ),
              o("AdsInteractionTrigger").onInteractionEnd.remove(
                this.__endListener,
              ),
              this.interactionStartTimeoutID &&
                (r("clearTimeout")(this.interactionStartTimeoutID),
                (this.interactionStartTimeoutID = null)));
            for (var a of this.preloadedData)
              o("GraphAPIPreloadedData").remove(a);
            for (var i of this.preloadedGraphQLQueries)
              o("AdsManagerRelayClientPreloadedData").delayedRemove(
                i,
                r("AdsManagerRelayClientPreloaderEventsConsoleLogger"),
              );
            (e.activeEntrypoints.delete(this.interaction),
              (t = this.apShadowTransformer) == null ||
                t.onInteractionFinally(),
              (this.apShadowTransformer = null));
          } else
            n != null &&
              r("FBLogger")("ams_frontend").warn(
                "[AdsManagerEntryPointRunner] Skipping __onInteractionFinally because '%s' !== '%s', for interaction %s.",
                this.interactionID,
                n.interactionID,
                this.interaction,
              );
        }),
        e
      );
    })();
    ((y.loadedResources = new Set()),
      (y.activeEntrypoints = new Map()),
      (l.default = y));
  },
  98,
);
