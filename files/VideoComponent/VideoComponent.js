__d(
  "VideoComponent",
  [
    "CurrentUser",
    "ErrorBoundary.react",
    "RelayFBNetwork",
    "SubscriptionsHandler",
    "err",
    "fetchStaticQuery",
    "react",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t, n;
      return (t = (n = e.displayName) != null ? n : e.name) != null
        ? t
        : "Component";
    }
    function c(e, t) {
      var n,
        o = t || {},
        a = o.observedVpcEvents || [],
        i =
          o.suppressMount ||
          function (e) {
            return !1;
          },
        l = u(e);
      return (
        (n = (function (t) {
          function n(e) {
            var n;
            return (
              (n = t.call(this, e) || this),
              (n.$3 = s.createRef()),
              (n.$8 = function () {
                if (n.$2 && n.$2.length && n.$3.current) {
                  var e = { time: Date.now(), queuedEvents: n.$2 };
                  (n.setState({ vpcEventInfo: e }), (n.$2 = []));
                }
              }),
              (n.state = {
                video: null,
                user: null,
                vpcEventInfo: { time: 0, queuedEvents: [] },
              }),
              (n.$2 = []),
              n
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var u = n.prototype;
          return (
            (u.render = function () {
              return this.$4()
                ? null
                : s.jsx(r("ErrorBoundary.react"), {
                    onError: function (t, n) {},
                    children: s.jsx(
                      e,
                      babelHelpers.extends({ ref: this.$3 }, this.props, {
                        vpcEventInfo: this.state.vpcEventInfo,
                        video: this.state.video,
                        user: this.state.user,
                      }),
                    ),
                  });
            }),
            (u.enable = function (t) {
              if (!this.$4()) {
                ((this.vpc = t),
                  (this.$1 = new (r("SubscriptionsHandler"))()),
                  this.$5(t));
                var e = this.$3.current;
                if (e) {
                  if (e.enable == null)
                    throw r("err")(
                      l + " must implement enable(VideoPlayerController)",
                    );
                  (e.enable(t), this.$6(t.getVideoID(), o.videoGraphQLQuery));
                }
              }
            }),
            (u.disable = function () {
              if (!this.$4()) {
                var e = this.$3.current;
                if (e) {
                  if (e.disable == null)
                    throw r("err")(l + " must implement disable()");
                  (e.disable(), this.$1 && this.$1.release());
                }
              }
            }),
            (u.$4 = function () {
              return i(this.props.videoData);
            }),
            (u.$6 = function (t, n) {
              var e,
                o,
                a = this;
              !t ||
                !n ||
                r("fetchStaticQuery")(
                  (e =
                    (o = this.props.relayEnvironment) == null
                      ? void 0
                      : o.getNetwork()) != null
                    ? e
                    : r("RelayFBNetwork"),
                  n,
                  { videoID: t, userID: r("CurrentUser").getID() },
                  { force: !0 },
                ).then(function (e) {
                  var t = e.data,
                    n = t.user,
                    r = t.video;
                  (a.vpc &&
                    r &&
                    a.$3.current &&
                    r.id == a.vpc.getVideoID() &&
                    a.setState({ video: r }),
                    n && a.$3.current && a.setState({ user: n }));
                });
            }),
            (u.$5 = function (t) {
              var e = this,
                n = function (r) {
                  var n = t.addListener(r, function () {
                    return e.$7(r);
                  });
                  e.$1.addSubscriptions(n);
                };
              for (var r of a) n(r);
            }),
            (u.$7 = function (t) {
              (this.$2.length || r("setImmediate")(this.$8), this.$2.push(t));
            }),
            n
          );
        })(s.Component)),
        (n.displayName = "VideoComponent(" + l + ")"),
        n
      );
    }
    l.createContainer = c;
  },
  98,
);
