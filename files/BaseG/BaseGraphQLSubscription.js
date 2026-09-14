__d(
  "BaseGraphQLSubscription",
  [
    "ODS",
    "Random",
    "RelayRTIGraphQLSubscriber",
    "gkx",
    "nullthrows",
    "relay-runtime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 100,
      u = 1e3,
      c = 100,
      d = "gqls_default_logging_base",
      m = "gqls_workplace_logging_base",
      p = 110,
      _ = {
        bumpTotalSubscribeCounter: function (n) {
          (e || (e = o("ODS"))).bumpEntityKey(
            p,
            "basegraphqlsubscription_migration",
            n + ".subscribe.total",
          );
        },
        bumpSsttSubscribeCounter: function (n) {
          ((e || (e = o("ODS"))).bumpEntityKey(
            p,
            "basegraphqlsubscription_migration",
            n + ".subscribe.sstt",
          ),
            _.bumpTotalSubscribeCounter(n));
        },
        bumpTotalReceiveCounter: function (n) {
          (e || (e = o("ODS"))).bumpEntityKey(
            p,
            "basegraphqlsubscription_migration",
            n + ".receive.total",
          );
        },
        bumpSsttReceiveCounter: function (n) {
          ((e || (e = o("ODS"))).bumpEntityKey(
            p,
            "basegraphqlsubscription_migration",
            n + ".receive.sstt",
          ),
            _.bumpTotalReceiveCounter(n));
        },
      };
    function f() {
      if (r("gkx")("21002") && r("Random").coinflip(s)) return d;
      if (r("gkx")("21003") && r("Random").coinflip(c)) return m;
      if (r("gkx")("21004") || (r("gkx")("21005") && r("Random").coinflip(u)))
        return d;
    }
    var g = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getQuery = function () {
          var e = new Error(
            "getQuery() or getQueryID() unimplemented by subclass of BaseGraphQLSubscription",
          );
          throw (e.stack, e);
        }),
        (t.getQueryParameters = function (t) {
          var e = new Error(
            "getQueryParameters() unimplemented by subclass of BaseGraphQLSubscription",
          );
          throw (e.stack, e);
        }),
        (t.getSubscriptionName = function () {
          var e = o("relay-runtime").getRequest(this.getQuery());
          return String(r("nullthrows")(e.params.metadata.subscriptionName));
        }),
        (e.subscribe = function (t, n, r, o) {
          return new this().subscribe(t, n, r, o);
        }),
        (t.subscribe = function (t, n, a, i) {
          var e,
            l,
            s = this.getQueryParameters(t),
            u = o("relay-runtime").getRequest(this.getQuery()).params,
            c = String(
              r("nullthrows")(
                (e = u.metadata) == null ? void 0 : e.subscriptionName,
              ),
            ),
            d = (l = a == null ? void 0 : a.forceLogContext) != null ? l : f();
          (_.bumpSsttSubscribeCounter(c),
            (s = babelHelpers.extends({}, s, {
              input: babelHelpers.extends({}, s.input, {
                client_subscription_id: r("uuidv4")(),
              }),
            })));
          var m = o("RelayRTIGraphQLSubscriber")
            .subscribe(u, s, d, a == null ? void 0 : a.viewerID, i)
            .do({
              start: function () {},
              next: function () {},
              unsubscribe: function () {},
            });
          return m.subscribe({
            next: function (t) {
              (_.bumpSsttReceiveCounter(c),
                typeof t == "object" && t.data != null && n(t.data));
            },
          });
        }),
        e
      );
    })();
    l.default = g;
  },
  98,
);
