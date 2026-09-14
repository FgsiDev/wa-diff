__d(
  "AdsPixelDataManager",
  [
    "invariant",
    "AdsAccountDataDispatcher",
    "AdsAccountStore",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsPixelDataManagerLoader",
    "AdsPixelFields",
    "AdsPixelServerActions",
    "AdsPixelServerReceivePixelEventCountsAction",
    "AdsPixelServerReceivePixelStatsErrorDataAction",
    "AdsPixelStatsTypes",
    "AdsPixelStatusUtils",
    "AsyncRequest",
    "AsyncTypedRequest",
    "CustomAudienceTosUtils",
    "GraphAPIPaging",
    "Promise",
    "SignalsAdAccountPixelIDListStore",
    "SignalsHomeAdAccountAddPixelAction",
    "SignalsOptimizationSourceContainer",
    "StatsTypeToAggregationType",
    "XAdsDefaultPixelControllerRouteBuilder",
    "XAdsPixelDefaultConversionControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "getByPath",
    "isFalsey",
    "isTruthy",
    "promiseDone",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 50;
    function c() {
      var e = r("CustomAudienceTosUtils").getTosRequirements()
          .website_custom_audience,
        t = r("AdsAccountStore").getSelectedAccountIDX();
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .adaccount(t)
          .edge("customaudiencestos")
          .post({ accountId: t, tos_id: e }),
        function (e) {
          r("AdsAccountDataDispatcher").loadAccountData(t);
        },
        function (e) {
          return r("AdsPixelServerActions").receiveError(e, "acceptTOS");
        },
      );
    }
    function d(e) {
      var t = e.adAccountID,
        n = e.errorCallback,
        a = e.name,
        l = e.successCallback;
      (r("AdsInterfacesLogger").log(
        { eventName: "facebook_pixel_create_pixel_attempt" },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      ),
        r("AdsPixelServerActions").waitForServerResponse(),
        r("promiseDone")(
          o("AdsGraphAPI")
            .get(i.id)
            .adaccount(
              t != null ? t : r("AdsAccountStore").getSelectedAccountIDX(),
            )
            .edge("adspixels")
            .post({ name: a.toString() }),
          function (e) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("adspixels", e.id)
                .get({ fields: o("AdsPixelFields").PIXEL_FIELDS }),
              function (e) {
                (r("AdsPixelServerActions").createPixel(e),
                  r("AdsPixelServerActions").updatePixels([e]),
                  r("AdsInterfacesLogger").log(
                    { eventName: "facebook_pixel_create_pixel_success" },
                    r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
                  ),
                  l && l(e),
                  r("isTruthy")(t) &&
                    (r("SignalsAdAccountPixelIDListStore").clearKeyLater(t),
                    r("SignalsHomeAdAccountAddPixelAction").dispatch(
                      { adAccountID: t, name: a.toString(), pixelID: e.id },
                      {
                        line: "168",
                        module: "AdsPixelDataManager.js",
                        moduleID: i.id,
                      },
                    )));
              },
              function (e) {
                (r("AdsPixelServerActions").receiveError(
                  e,
                  "createPixelFetchFields",
                ),
                  n && n(e));
              },
            );
          },
          function (e) {
            (r("AdsPixelServerActions").receiveError(e, "createPixel"),
              r("AdsInterfacesLogger").log(
                { eventName: "facebook_pixel_create_pixel_fail" },
                r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
              ),
              n && n(e));
          },
        ));
    }
    function m(e, t, n, a) {
      var l = [babelHelpers.extends({ id: e }, t)];
      r("promiseDone")(
        o("AdsGraphAPI").get(i.id).object("adspixel", e).post(t),
        function (e) {
          (n && n(e), e.success && r("AdsPixelServerActions").updatePixels(l));
        },
        function (e) {
          (a && a(e), r("AdsPixelServerActions").receiveError(e, "editPixel"));
        },
      );
    }
    function p(e) {
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("customaudience", e)
          .get({ fields: o("AdsPixelFields").AUDIENCE_FIELDS }),
        function (t) {
          r("AdsPixelServerActions").updateAudiences(e, t);
        },
        function (e) {
          return r("AdsPixelServerActions").receiveError(e, "loadAudience");
        },
      );
    }
    function _(e) {
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .adaccount(r("AdsAccountStore").getSelectedAccountIDX())
          .edge("customaudiences")
          .get({
            fields: o("AdsPixelFields").PIXEL_AUDIENCE_FIELDS,
            pixel_id: e,
          }),
        function (t) {
          (r("vulture")("6iYb5rXVaXjMcD2oo6FXFe5O7q8="),
            r("AdsPixelServerActions").updatePixelAudiences(
              e,
              t.data,
              !r("getByPath")(t, ["paging", "next"]),
            ));
        },
        function (e) {
          return r("AdsPixelServerActions").receiveError(e, "loadAudiences");
        },
      );
    }
    function f(e) {
      var t = r("XAdsDefaultPixelControllerRouteBuilder").buildUri({
        account_id: r("AdsAccountStore").getSelectedAccountIDX(),
        domains: e,
        source: "CREATION",
      });
      new (r("AsyncRequest"))()
        .setURI(t)
        .setHandler(function (e) {
          r("AdsPixelServerActions").updateDefaultPixelID(e.payload);
        })
        .setErrorHandler(function (e) {
          return r("AdsPixelServerActions").receiveError(
            e,
            "loadDefaultPixelID",
          );
        })
        .send();
    }
    function g() {
      var e = r("AdsAccountStore").getSelectedAccountIDX(),
        t = r("XAdsPixelDefaultConversionControllerRouteBuilder").buildUri({
          account_id: e,
        });
      new (r("AsyncTypedRequest"))()
        .setURI(t)
        .setPayloadHandler(function (e) {
          r("AdsPixelServerActions").updateDefaultPromotedObject(e);
        })
        .setErrorHandler(function (e) {
          return r("AdsPixelServerActions").receiveError(
            e,
            "loadDefaultPromotedObject",
          );
        })
        .send();
    }
    function h(t, a, l) {
      r("promiseDone")(
        (e || (e = n("Promise"))).all([
          o("AdsGraphAPI")
            .get(i.id)
            .object("adspixel", t)
            .edge("event_last_fired_time")
            .get({ limit: a }),
          o("AdsGraphAPI")
            .get(i.id)
            .object("adspixel", t)
            .edge("stats")
            .get({
              aggregation: "event_total_counts",
              fields: o("AdsPixelFields").PIXEL_STATS_FIELDS,
              sanitize_url: !0,
              start_time: l,
            }),
        ]),
        function (e) {
          var n,
            o,
            a = (n = e[0]) == null ? void 0 : n.data,
            l =
              (o = e[1]) == null || (o = o.data) == null || (o = o[0]) == null
                ? void 0
                : o.data;
          if (a != null && l != null) {
            var s = l.reduce(function (e, t) {
                return ((e[t.value] = t.count), e);
              }, {}),
              u = a
                .map(function (e) {
                  return s[e.event] != null
                    ? babelHelpers.extends({}, e, { count: s[e.event] })
                    : babelHelpers.extends({}, e, { count: 0 });
                })
                .filter(Boolean);
            r("AdsPixelServerReceivePixelEventCountsAction").dispatch(
              { eventCounts: u, pixelID: t },
              { line: "320", module: "AdsPixelDataManager.js", moduleID: i.id },
            );
          } else
            r("AdsPixelServerReceivePixelEventCountsAction").dispatch(
              { eventCounts: [], pixelID: t },
              { line: "325", module: "AdsPixelDataManager.js", moduleID: i.id },
            );
        },
        function (e) {
          r("AdsPixelServerActions").receiveError(
            e,
            "loadEventCountsAndLastFiredTime",
          );
        },
      );
    }
    function y(e) {
      r("isFalsey")(e) ||
        !/^\d+$/.test(e) ||
        r("promiseDone")(
          o("AdsGraphAPI")
            .get(i.id)
            .object("adspixel", e)
            .batched()
            .get({ fields: o("AdsPixelFields").PIXEL_FIELDS }),
          function (t) {
            var n,
              o = (n = t.name) != null ? n : "",
              a = {
                hasBAPIDomains: t.has_bapi_domains,
                id: e,
                isUnavailable: t.is_unavailable,
                lastFiredTime: t.last_fired_time,
                name: o,
                ownerBusiness: t.owner_business,
                serverLastFiredTime: t.server_last_fired_time,
              };
            (t.owner_ad_account != null &&
              (a = babelHelpers.extends({}, a, {
                ownerAdAccount: { accountID: t.owner_ad_account.account_id },
              })),
              t.owner_business != null &&
                (a = babelHelpers.extends({}, a, {
                  ownerBusiness: t.owner_business,
                })));
            var i = new (r("SignalsOptimizationSourceContainer"))(
              a.id,
            ).fromPixelRawData(a);
            r("AdsPixelServerActions").updatePixels([i]);
          },
          function (e) {
            return r("AdsPixelServerActions").receiveError(e, "loadPixel");
          },
        );
    }
    function C(e, t) {
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("adspixel", e)
          .edge("shared_accounts")
          .get({ business: t, fields: o("AdsPixelFields").ACCOUNT_FIELDS }),
        function (t) {
          r("AdsPixelServerActions").updatePixelAccounts(e, t.data);
        },
        function (e) {
          return r("AdsPixelServerActions").receiveError(
            e,
            "loadPixelAccounts",
          );
        },
      );
    }
    function b() {
      r("promiseDone")(
        o("AdsPixelDataManagerLoader")
          .loadPixels(r("AdsAccountStore").getSelectedAccountIDX())
          .then(o("GraphAPIPaging").allPages()),
        function (e) {
          return r("AdsPixelServerActions").updatePixels(e.data);
        },
        function (e) {
          return r("AdsPixelServerActions").receiveError(e, "loadPixels");
        },
      );
    }
    function v(e) {
      var t = e.aggregationPagingLimit,
        n = e.aggregationPagingStart,
        a = e.event,
        l = e.eventsSourceFilter,
        u = e.maxTimeRange,
        c = u === void 0 ? !0 : u,
        d = e.pixelID,
        m = e.receivingAutomaticEvents,
        p = m === void 0 ? !1 : m,
        _ = e.sanitizeURL,
        f = _ === void 0 ? !0 : _,
        g = e.shouldUnixTimestamp,
        h = g === void 0 ? !1 : g,
        y = e.statsType;
      y in r("StatsTypeToAggregationType") || s(0, 1793, y);
      var C = c
          ? o("AdsPixelStatusUtils").getStatsMaximumStartTimeForPixel()
          : o("AdsPixelStatusUtils").getStatsStartTime(),
        b = y === r("AdsPixelStatsTypes").EVENT ? l : null;
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("adspixel", d)
          .edge("stats")
          .get({
            aggregation: r("StatsTypeToAggregationType")[y],
            aggregation_paging_limit: t,
            aggregation_paging_start: n,
            date_format: h ? "U" : void 0,
            event: a,
            event_source: b,
            fields: o("AdsPixelFields").PIXEL_STATS_FIELDS,
            receiving_automatic_events: p,
            sanitize_url: f,
            start_time: C,
          }),
        function (e) {
          r("AdsPixelServerActions").updatePixelStats({
            event: a,
            eventsSourceFilter: b,
            isUnixTime: h,
            pixelID: d,
            stats: e.data,
            statsType: y,
          });
        },
        function (e) {
          (r("AdsPixelServerReceivePixelStatsErrorDataAction").dispatch(
            {
              error: e,
              event: a,
              eventsSourceFilter: b,
              pixelID: d,
              statsType: y,
            },
            { line: "473", module: "AdsPixelDataManager.js", moduleID: i.id },
          ),
            r("AdsPixelServerActions").receiveError(e, "loadStats"));
        },
      );
    }
    function S(t) {
      var a = t.maxTimeRange,
        l = a === void 0 ? !0 : a,
        s = t.pixelID,
        u = t.sanitizeURL,
        c = u === void 0 ? !0 : u,
        d = t.shouldUnixTimestamp,
        m = d === void 0 ? !1 : d,
        p = l
          ? o("AdsPixelStatusUtils").getStatsMaximumStartTimeForPixel()
          : o("AdsPixelStatusUtils").getStatsStartTime();
      return new (e || (e = n("Promise")))(function (e, t) {
        r("promiseDone")(
          o("AdsGraphAPI")
            .get(i.id)
            .object("adspixel", s)
            .edge("stats")
            .get({
              aggregation: "event_detection_method",
              date_format: m ? "U" : void 0,
              fields: o("AdsPixelFields").PIXEL_STATS_FIELDS,
              sanitize_url: c,
              start_time: p,
            }),
          function (t) {
            e({ stats: t.data });
          },
          function (e) {
            (r("AdsPixelServerReceivePixelStatsErrorDataAction").dispatch(
              {
                error: e,
                event: null,
                eventsSourceFilter: null,
                pixelID: s,
                statsType: null,
              },
              { line: "519", module: "AdsPixelDataManager.js", moduleID: i.id },
            ),
              r("AdsPixelServerActions").receiveError(
                e,
                "loadStatsByEventAndDetectionType",
              ),
              t(e));
          },
        );
      });
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.eventsSourceFilter,
            a = t.onProgress,
            l = t.pixelID,
            s = yield o("AdsGraphAPI")
              .get(i.id)
              .object("adspixel", l)
              .edge("stats")
              .get({
                aggregation: "event_total_counts",
                date_format: "U",
                eventsSourceFilter: r,
                fields: o("AdsPixelFields").PIXEL_STATS_FIELDS,
              }),
            c = s.data;
          if (c.length !== 1) return [];
          var d = c[0].data
              .sort(function (e, t) {
                return e.count > t.count ? -1 : 1;
              })
              .slice(0, u),
            m = d.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.value,
                      n = yield o("AdsGraphAPI")
                        .get(i.id)
                        .object("adspixel", l)
                        .edge("stats")
                        .get({
                          aggregation: "event",
                          date_format: "U",
                          event: t,
                          eventsSourceFilter: r,
                          fields: o("AdsPixelFields").PIXEL_STATS_FIELDS,
                        }),
                      s = n.data;
                    return (a(s), s);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return (yield (e || (e = n("Promise"))).all(m)).flatMap(function (e) {
            return e;
          });
        })),
        L.apply(this, arguments)
      );
    }
    ((l.acceptCustomAudienceTOS = c),
      (l.createPixel = d),
      (l.editPixel = m),
      (l.loadAudience = p),
      (l.loadAudiences = _),
      (l.loadDefaultPixelID = f),
      (l.loadDefaultPromotedObject = g),
      (l.loadEventCountsAndLastFiredTime = h),
      (l.loadPixel = y),
      (l.loadPixelAccounts = C),
      (l.loadPixels = b),
      (l.loadStats = v),
      (l.loadStatsByEventAndDetectionType = S),
      (l.loadStatsEventByEvent = R));
  },
  98,
);
