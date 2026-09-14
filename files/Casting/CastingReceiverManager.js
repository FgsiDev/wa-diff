__d(
  "CastingReceiverManager",
  [
    "CastingChromecastScanner",
    "FBLogger",
    "Promise",
    "Random",
    "SubscriptionsHandler",
    "TV2CommsParseUtils",
    "TV2MessageTypes",
    "TV2PhotoShowRequest",
    "getErrorSafe",
    "promiseDone",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "1.2.0",
      u = (function () {
        function t(e) {
          var t = this;
          ((this.$5 = null),
            (this.$6 = null),
            (this.$10 = null),
            (this.$11 = []),
            (this.$12 = []),
            (this.$13 = []),
            (this.$14 = []),
            (this.$15 = []),
            (this.$16 = []),
            (this.$17 = []),
            (this.$18 = []),
            (this.$19 = []),
            (this.$4 = new (r("CastingChromecastScanner"))(
              e,
              o("TV2MessageTypes").FBAPP_CAST_PROTOCOL_NAMESPACE,
            )),
            (this.$2 = null),
            (this.$1 = !1),
            (this.$3 = 0),
            (this.$6 = null),
            (this.$9 = new Map()),
            (this.$20 = new (r("SubscriptionsHandler"))()),
            this.$20.addSubscriptions(
              this.$4.onStatusChanged(function (e) {
                var n = e.foundReceiver;
                t.$15.slice().forEach(function (e) {
                  e(!!n);
                });
              }),
              this.$4.onSessionDisconnected(function () {
                (t.$21(),
                  t.$14.slice().forEach(function (e) {
                    e();
                  }));
              }),
              this.$4.onSessionStarted(function (e) {
                t.$22(e);
              }),
              this.$4.onError(function (e, n) {
                t.$11.slice().forEach(function (t) {
                  t(e, n);
                });
              }),
            ),
            (this.$7 = this.$4.init()),
            r("promiseDone")(
              this.$7.then(
                function () {
                  ((t.$2 = !0),
                    (t.$1 = !0),
                    t.$13.slice().forEach(function (e) {
                      e();
                    }));
                },
                function (e) {
                  ((t.$2 = !1),
                    t.$12.slice().forEach(function (t) {
                      t(e);
                    }));
                },
              ),
            ));
        }
        var a = t.prototype;
        return (
          (a.ready = function () {
            return this.$7;
          }),
          (a.hasSupport = function () {
            return this.$2;
          }),
          (a.hasFoundReceiver = function () {
            return this.$4.hasFoundReceiver();
          }),
          (a.isCasting = function (t) {
            var e = !!this.$5 && this.$5.isCasting();
            return (
              e &&
                t != null &&
                (e = this.$6 != null && this.$6.indexOf(t) >= 0),
              e
            );
          }),
          (a.getSession = function () {
            var e = this;
            return this.ready()
              .then(function () {
                var t = e.$5;
                t != null && !t.isConnected() && e.$21();
              })
              .then(function () {
                return e.$5 ? e.$5 : (e.$8 || (e.$8 = e.$23()), e.$8);
              })
              .catch(function (t) {
                throw (
                  e.$11.slice().forEach(function (e) {
                    e(t, "CastingReceiverManager.getSession");
                  }),
                  t
                );
              })
              .finally(function () {
                e.$8 = null;
              });
          }),
          (a.startCasting = function (t, n, r) {
            var e = this;
            return this.$24(t, n, r).then(function (t) {
              t.success ? (e.$6 = t.target) : (e.$6 = null);
            });
          }),
          (a.stopCasting = function () {
            var t = this;
            return this.isCasting()
              ? this.ready()
                  .then(function () {
                    var e = t.$5;
                    return (e != null && e.isDisconnected() && t.$21(), t.$5);
                  })
                  .then(function (t) {
                    return t == null
                      ? (e || (e = n("Promise"))).resolve(null)
                      : t.disconnect();
                  })
                  .then(function () {
                    t.$21();
                  })
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.playVideoNow = function (r, o) {
            return this.isCasting()
              ? this.$25(
                  "next_video",
                  babelHelpers.extends({}, r, { auto_advance: !0 }),
                  o,
                ).then(function () {})
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.skipToNextVideo = function () {
            return this.isCasting()
              ? this.$25("skip_video").then(function () {})
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.playVideo = function (r) {
            return this.isCasting()
              ? this.$25("play_video", { position: r || 0 }).then(
                  function () {},
                )
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.pauseVideo = function () {
            return this.isCasting()
              ? this.$25("pause_video").then(function () {})
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.seekVideo = function (r) {
            return this.isCasting()
              ? this.$25("seek_video", { position: r }).then(function () {})
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.showPhoto = function (r) {
            return this.isCasting()
              ? this.$25(
                  "show_photo",
                  void 0,
                  o("TV2PhotoShowRequest").TV2PhotoShowRequestToJson(r),
                  "Photo",
                ).then(function () {})
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.stopVideo = function () {
            return this.isCasting()
              ? this.$25("stop_video").then(function () {})
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.playAlbumSlideshow = function () {
            return this.isCasting()
              ? this.$25("play_photo", void 0, void 0, "PhotoAlbum").then(
                  function () {},
                )
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.pauseAlbumSlideshow = function () {
            return this.isCasting()
              ? this.$25("pause_photo", void 0, void 0, "PhotoAlbum").then(
                  function () {},
                )
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.nextPhotoAlbumSlideshow = function () {
            return this.isCasting()
              ? this.$25("next_photo", void 0, void 0, "PhotoAlbum").then(
                  function () {},
                )
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.previousPhotoAlbumSlideshow = function () {
            return this.isCasting()
              ? this.$25("previous_photo", void 0, void 0, "PhotoAlbum").then(
                  function () {},
                )
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.getFriendlyName = function () {
            return this.$5 == null ? null : this.$5.getFriendlyName();
          }),
          (a.getVolume = function () {
            return this.$5 == null ? null : this.$5.getVolume();
          }),
          (a.setVolume = function (r) {
            return !this.isCasting() || this.$5 == null
              ? (e || (e = n("Promise"))).resolve()
              : this.$5.setVolume(r);
          }),
          (a.isMuted = function () {
            return !this.isCasting() || this.$5 == null
              ? null
              : this.$5.isMuted();
          }),
          (a.mute = function () {
            return !this.isCasting() || this.$5 == null
              ? (e || (e = n("Promise"))).resolve()
              : this.$5.mute();
          }),
          (a.unmute = function () {
            return !this.isCasting() || this.$5 == null
              ? (e || (e = n("Promise"))).resolve()
              : this.$5.unmute();
          }),
          (a.$26 = function () {
            var e = this,
              t = this.$27();
            return this.$28(function (e) {
              return {
                data: { client_cast_session: t, version: s },
                num: e,
                target: "version",
                timestamp: Date.now(),
                type: "version_request",
              };
            })
              .then(function (t) {
                var n = t.messageNum;
                return e.$29(function (e) {
                  return e.response_num === n;
                });
              })
              .then(function (e) {
                if (e.type !== "version_response")
                  throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                    'Response message was not a "version_response"',
                  );
                if (e.data == null)
                  throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                    "Version response is missing data",
                  );
                return e.data;
              });
          }),
          (a.$24 = function (t, n, o) {
            var e = this,
              a = this.$27();
            return this.$28(function (e) {
              return {
                data: {
                  client_cast_session: a,
                  name: t,
                  params: n,
                  payload: o,
                  version: s,
                },
                num: e,
                target: "version_launch",
                timestamp: Date.now(),
                type: "version_launch",
              };
            })
              .then(function (t) {
                var n = t.messageNum;
                return e.$29(function (e) {
                  return e.response_num === n;
                });
              })
              .then(function (e) {
                if (e.type !== "version_launch_response")
                  throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                    'Response message was not a "version_launch_response"',
                  );
                if (e.data == null)
                  throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                    "Version launch response is missing data",
                  );
                return e.data;
              });
          }),
          (a.$30 = function () {
            var t = this;
            return this.$6 != null
              ? (e || (e = n("Promise"))).resolve(this.$6)
              : this.getSession()
                  .then(function (e) {
                    return t.$26();
                  })
                  .then(function (e) {
                    var n = null;
                    if (
                      (typeof e.currently_running_experience == "object" &&
                        (n = e.currently_running_experience),
                      n == null)
                    )
                      throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                        "Session has no target",
                      );
                    return ((t.$6 = n), t.$6);
                  });
          }),
          (a.$27 = function () {
            var e = null;
            return (
              localStorage && (e = localStorage.getItem("CastingSessionKey")),
              e == null &&
                ((e = r("Random").uint32().toString(16)),
                localStorage && localStorage.setItem("CastingSessionKey", e)),
              e
            );
          }),
          (a.$28 = function (t) {
            var e = (this.$3 += 2);
            return this.getSession()
              .then(function (n) {
                if (n == null)
                  throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                    "The message can not be sent without a session",
                  );
                var o = t(e);
                return n.sendMessage(o);
              })
              .then(function () {
                return { messageNum: e };
              });
          }),
          (a.$29 = function (a) {
            return this.getSession().then(function (t) {
              if (t == null)
                throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                  "The message cannot be received without a session",
                );
              return new (e || (e = n("Promise")))(function (e, n) {
                var r = t.onMessage(function (t) {
                  try {
                    var i =
                      o(
                        "TV2CommsParseUtils",
                      ).parseTV2CommsFBAppOutboundMessageFromJSON(t);
                    if (
                      i.type === "version_response" ||
                      i.type === "version_launch_response" ||
                      i.type === "experience_state" ||
                      i.type === "command_result"
                    ) {
                      var l = !a || a(i);
                      l && (r.remove(), e(i));
                    }
                  } catch (e) {
                    (r.remove(), n(e));
                  }
                });
              });
            });
          }),
          (a.$25 = function (t, n, o, a) {
            var e = this;
            return this.$30()
              .then(function (r) {
                return e.$28(function (e) {
                  return {
                    data: { cmd: t, name: a, params: n, payload: o },
                    num: e,
                    target: r,
                    timestamp: Date.now(),
                    type: "experience_command",
                  };
                });
              })
              .then(function (t) {
                var n = t.messageNum;
                return e.$29(function (e) {
                  return e.response_num === n;
                });
              })
              .then(function (e) {
                if (e.type !== "command_result")
                  throw r("FBLogger")("comet_cast_sender").mustfixThrow(
                    'Response message was not a "command_result"',
                  );
                return e.data;
              });
          }),
          (a.$23 = function () {
            var e = this;
            return this.$4.getSession().then(function (t) {
              return (e.$5 == null && (e.$5 = t), e.$5);
            });
          }),
          (a.$22 = function (t) {
            var e = this;
            this.$5 = t;
            var n = "extension";
            (this.$8 && (n = "site"),
              r("promiseDone")(
                this.$26().then(function (a) {
                  var i = null;
                  (typeof a.currently_running_experience == "object" &&
                    (i = a.currently_running_experience),
                    i != null && (e.$6 = i),
                    e.$18.slice().forEach(function (r) {
                      r(t, {
                        session: t,
                        source: n,
                        success: !0,
                        target: e.$6,
                      });
                    }),
                    (e.$10 = t.onMessage(function (t) {
                      try {
                        var n =
                          o(
                            "TV2CommsParseUtils",
                          ).parseTV2CommsFBAppOutboundMessageFromJSON(t);
                        e.$17.slice().forEach(function (e) {
                          e(n);
                        });
                      } catch (t) {
                        var a = r("getErrorSafe")(t);
                        e.$11.slice().forEach(function (e) {
                          e(
                            a,
                            "CastingReceiverManager._onSessionStartedHandler",
                          );
                        });
                      }
                    })));
                }),
              ));
          }),
          (a.$21 = function () {
            this.$10 != null && (this.$10.remove(), (this.$10 = null));
            var e = this.$5;
            (e != null && e.destroy(), (this.$5 = null), (this.$6 = null));
          }),
          (a.onError = function (t) {
            var e = this.$11;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onExperienceNotSupported = function (t) {
            var e = this.$12;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onExperienceReady = function (t) {
            var e = this.$13;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onReceiverDisconnected = function (t) {
            var e = this.$14;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onReceiverStatusChanged = function (t) {
            var e = this.$15;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionDisconnected = function (t) {
            var e = this.$16;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionMessage = function (t) {
            var e = this.$17;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionStarted = function (t) {
            var e = this.$18;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onStopView = function (t) {
            var e = this.$19;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
