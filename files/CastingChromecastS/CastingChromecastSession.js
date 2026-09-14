__d(
  "CastingChromecastSession",
  ["FBLogger", "Promise", "err", "getErrorSafe", "removeFromArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n) {
          var o = this;
          ((this.$3 = null),
            (this.$4 = []),
            (this.$5 = []),
            (this.$6 = []),
            (this.$7 = []),
            (this.$8 = []),
            (this.$9 = []),
            (this.$10 = []),
            (this.$11 = []),
            (this.$12 = function (e, t) {
              if (e === o.$2) {
                var n = o.$4.slice();
                n.forEach(function (e) {
                  e(t);
                });
              } else
                o.$6.slice().forEach(function (t) {
                  t(
                    r("err")(
                      "Namespace does not match. Expected " +
                        o.$2 +
                        " but received " +
                        e,
                    ),
                    "CastingChromecastSession._onMessageReceived",
                  );
                });
            }),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            n.addMessageListener(this.$2, this.$12));
        }
        var o = t.prototype;
        return (
          (o.destroy = function () {
            var e = this.$3;
            (e != null &&
              (e.status != null &&
                e.status !== "disconnected" &&
                r("FBLogger")("comet_cast_sender").mustfix(
                  "Destroying receiver session that is not disconnected. Status, %s",
                  e.status,
                ),
              e.removeMessageListener(this.$2, this.$12)),
              (this.$3 = null));
          }),
          (o.isCasting = function () {
            return this.$3 != null;
          }),
          (o.isConnected = function () {
            return this.$3 != null && this.$3.status === "connected";
          }),
          (o.isDisconnected = function () {
            return this.$3 != null && this.$3.status === "disconnected";
          }),
          (o.disconnect = function () {
            var t = this;
            return (
              this.$5.slice().forEach(function (e) {
                e();
              }),
              new (e || (e = n("Promise")))(function (e, n) {
                t.$3 != null ? t.$3.stop(e, n) : e();
              })
                .catch(function (e) {
                  if (t.$3 != null && t.$3.status !== "stopped")
                    throw (
                      t.$6.slice().forEach(function (t) {
                        t(
                          r("getErrorSafe")(e),
                          "CastingChromecastSession.disconnect",
                        );
                      }),
                      e
                    );
                })
                .finally(function () {
                  var e = t.$3;
                  ((t.$3 = null),
                    e && e.removeMessageListener(t.$2, t.$12),
                    t.$7.slice().forEach(function (e) {
                      e();
                    }));
                })
            );
          }),
          (o.getVolume = function () {
            var e = this.$13();
            return e ? e.level : null;
          }),
          (o.getFriendlyName = function () {
            return this.$14();
          }),
          (o.setVolume = function (o) {
            var t = this,
              a = this.$3;
            return new (e || (e = n("Promise")))(function (e, t) {
              if (a == null) {
                t(r("err")("Cannot set volume without a session"));
                return;
              }
              a.setReceiverVolumeLevel(o, e, t);
            }).catch(function (e) {
              throw (
                t.$6.slice().forEach(function (t) {
                  t(e, "CastingChromecastSession.setVolume");
                }),
                e
              );
            });
          }),
          (o.isMuted = function () {
            var e = this.$13();
            return e ? e.muted : null;
          }),
          (o.mute = function () {
            return this.$15(!0);
          }),
          (o.unmute = function () {
            return this.$15(!1);
          }),
          (o.sendMessage = function (o) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var a = t.$3;
              if (a == null) {
                n(r("err")("The message can not be sent without a session"));
                return;
              }
              a.sendMessage(t.$2, o, e, n);
            }).catch(function (e) {
              throw (
                t.$6.slice().forEach(function (t) {
                  t(e, "CastingChromecastSession.sendMessage");
                }),
                e
              );
            });
          }),
          (o.$13 = function () {
            var e,
              t =
                (e = this.$3) == null || (e = e.receiver) == null
                  ? void 0
                  : e.volume;
            return t == null ? null : t;
          }),
          (o.$14 = function () {
            var e, t;
            return (e =
              (t = this.$3) == null ? void 0 : t.receiver.friendlyName) != null
              ? e
              : null;
          }),
          (o.$15 = function (o) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var a = t.$3;
              if (a == null) {
                n(r("err")("The muted state can not be set without a session"));
                return;
              }
              a.setReceiverMuted(o, e, n);
            }).catch(function (e) {
              throw (
                t.$6.slice().forEach(function (t) {
                  t(e, "CastingChromecastSession._setIsMuted");
                }),
                e
              );
            });
          }),
          (o.onMessage = function (t) {
            var e = this.$4;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onDisconnecting = function (t) {
            var e = this.$5;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onError = function (t) {
            var e = this.$6;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onDisconnected = function (t) {
            var e = this.$7;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onVideoLoading = function (t) {
            var e = this.$8;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onVideoLoaded = function (t) {
            var e = this.$9;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onVideoPlaying = function (t) {
            var e = this.$10;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (o.onVideoPaused = function (t) {
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
          t
        );
      })();
    l.default = s;
  },
  98,
);
