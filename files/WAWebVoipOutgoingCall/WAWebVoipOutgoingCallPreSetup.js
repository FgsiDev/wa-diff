__d(
  "WAWebVoipOutgoingCallPreSetup",
  [
    "WALogger",
    "WAWebAdvSyncDeviceListApi",
    "WAWebApiDeviceList",
    "WAWebContactMutator",
    "WAWebLidMigrationUtils",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "#aa6627";
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = S();
            (a = o("WAWebVoipOutgoingCallQpl")).voipOutgoingCallQplAddPoint(
              e,
              a.VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_START,
            );
            var l = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(n, null, r);
            a.voipOutgoingCallQplAddPoint(
              e,
              a.VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_END,
            );
            var s = S();
            if (!l) return { status: "stopped", stop: "no_permission" };
            var u = yield y(e, t);
            return u.status === "stopped"
              ? u
              : (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SYNC_DEVICE_LIST_START,
                ),
                yield b(u.peerWid, e),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SYNC_DEVICE_LIST_END,
                ),
                babelHelpers.extends({}, u, {
                  permissionsEndTs: s,
                  permissionsStartTs: i,
                }));
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      var o = r.signal,
        a = r.voipReadyTs;
      return n.status === "stopped"
        ? (g(e, t, n.stop, o), null)
        : {
            devicePermissionsMs: h(n, a),
            peerPnWid: n.peerPnWid,
            peerWid: n.peerWid,
            signal: o,
          };
    }
    function g(t, n, r, a) {
      e: {
        if (r === "no_permission" && a.aborted) {
          o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
            t,
            "aborted_before_signaling",
          );
          break e;
        }
        if (r === "no_permission") {
          (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
            t,
            "permission_denied",
          ),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
          break e;
        }
        if (r === "lid_resolution_failed") {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call",
                ])),
            )
            .sendLogs(
              "voip: startWAWebVoipCall: LID failed after usync, call aborted",
            ),
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
              t,
              "lid_resolution_failed",
            ),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
          break e;
        }
        if (r === "peer_wid_null") {
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: peerWid is null",
                ])),
            )
            .sendLogs("voip: startWAWebVoipCall: peerWid is null"),
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
              t,
              "peer_wid_null",
            ),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function h(e, t) {
      var n = e.permissionsEndTs,
        r = e.permissionsStartTs;
      return r == null || n == null || t == null
        ? null
        : Math.max(0, n - Math.max(r, t));
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebLidMigrationUtils").toLid(t),
            r = o("WAWebLidMigrationUtils").toPn(t);
          if (n == null) {
            if (
              (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                    ])),
                )
                .color(m),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .LID_RESOLUTION_SYNC_START,
              ),
              yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [t],
                context: "voip",
                phash: null,
              }),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .LID_RESOLUTION_SYNC_END,
              ),
              (n = o("WAWebLidMigrationUtils").toLid(t)),
              n == null)
            )
              return { status: "stopped", stop: "lid_resolution_failed" };
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: usync resolved LID successfully",
                  ])),
              )
              .color(m);
          }
          var a = n != null ? n : r;
          return a == null
            ? { status: "stopped", stop: "peer_wid_null" }
            : { peerPnWid: r, peerWid: a, status: "resolved" };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebVoipOutgoingSetupLatencyMode").isCacheAwareSyncEnabled())
            try {
              var n = yield o("WAWebApiDeviceList").getDeviceRecord(e);
              if (
                n != null &&
                n.deleted === !1 &&
                n.expectedTs == null &&
                n.advAccountType != null
              ) {
                var r = n.advAccountType;
                (o(
                  "WAWebVoipOutgoingCallQpl",
                ).voipOutgoingCallQplAddAnnotations(t, {
                  bool: { device_list_cache_hit: !0 },
                }),
                  o("WAWebContactMutator").updateContactAdvAccountType({
                    contactId: o("WAWebWidFactory").asUserWidOrThrow(e),
                    advAccountType: r,
                  }));
                return;
              }
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                t,
                { bool: { device_list_cache_hit: !1 } },
              );
            } catch (e) {
              (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                t,
                { bool: { device_list_cache_error: !0 } },
              ),
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: cache-aware device sync failed, falling back to network sync: ",
                      "",
                    ])),
                  e,
                ));
            }
          yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
            wids: [e],
            context: "voip",
            phash: null,
          });
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
    ((l.runOutgoingCallPreSetup = p),
      (l.finishOutgoingCallPreSetup = f),
      (l.stopOutgoingCallBeforeSetup = g),
      (l.nowMs = S));
  },
  98,
);
