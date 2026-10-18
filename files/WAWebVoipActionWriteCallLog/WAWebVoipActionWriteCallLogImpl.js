__d(
  "WAWebVoipActionWriteCallLogImpl",
  [
    "WALogger",
    "WAResolvable",
    "WAWebCallLogMsgData.flow",
    "WAWebChatGetExistingBridge",
    "WAWebCmd",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebFindChatAction",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgChatAction",
    "WAWebUpdateMessageUIAction",
    "WAWebViewMode.flow",
    "WAWebVoipActionSurfaceCallLogChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipPendingCallLogOutcome",
    "WAWebVoipPhaseTracker",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = new Set(),
      L = 100,
      E = new Map();
    function k(e) {
      if (!R.has(e)) {
        if (R.size >= L) {
          var t = R.values().next().value;
          t != null && R.delete(t);
        }
        R.add(e);
      }
    }
    function I(e) {
      return R.has(e);
    }
    async function T(t) {
      var n = t.callOutcome,
        a = t.chatId,
        i = t.expectedPendingOutcome,
        l = t.msgKey,
        p = o("WAWebVoipPhaseTracker").beginPostCallWork(),
        _ = Date.now();
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
      );
      try {
        await o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: a,
            isOffline: !1,
            msgCategory: null,
            skipOfflineWait: !0,
            action: async function () {
              var t,
                p,
                f = Date.now() - _;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log outcome update dequeued after ",
                    "ms",
                  ])),
                f,
              ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_QUEUED,
                ));
              var g = o("WAWebMsgCollection").MsgCollection.get(l),
                h =
                  (t = g == null ? void 0 : g.toJSON()) != null
                    ? t
                    : await o("WAWebDBMsgUtils").getMsgByMsgKey(l);
              if (h == null) {
                if (i != null) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] deferred call log outcome skipped; row still missing for ",
                        "",
                      ])),
                    l.id,
                  ),
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .ICCE_WRITE_CALL_LOG_COMPLETE,
                    ));
                  return;
                }
                (o(
                  "WAWebVoipPendingCallLogOutcome",
                ).rememberPendingCallLogOutcome(l, n)
                  ? o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log outcome deferred; no row for ",
                          "",
                        ])),
                      l.id,
                    )
                  : o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log outcome update skipped; no row for ",
                          "",
                        ])),
                      l.id,
                    ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              if (
                g == null
                  ? h.kind !== "callLog"
                  : g.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG
              ) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log outcome update skipped; row is not a call log for ",
                      "",
                    ])),
                  l.id,
                ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              var y = o(
                "WAWebVoipPendingCallLogOutcome",
              ).prepareCallLogOutcomeUpdate({
                existingCallOutcome:
                  (p = g == null ? void 0 : g.callOutcome) != null
                    ? p
                    : h.kind === "callLog"
                      ? h.callOutcome
                      : null,
                expectedPendingOutcome: i,
                msgKey: l,
                requestedCallOutcome: n,
              });
              if (y.type === "skip") {
                (y.reason === "consumed" &&
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] deferred call log outcome skipped; token was consumed for ",
                        "",
                      ])),
                    l.id,
                  ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_COMPLETE,
                  ));
                return;
              }
              var C = babelHelpers.extends({}, h, {
                kind: "callLog",
                callOutcome: y.callOutcome,
              });
              (g != null
                ? await Promise.all([
                    g.applyUpdate(C),
                    o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                      chatId: a,
                      newMsg: C,
                      handleSingleMsgOrigin: "voipNotification",
                      messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                        .MessageOverwriteOption.VOIP_CALL_LOG,
                    }),
                  ])
                : await o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: a,
                    newMsg: C,
                    handleSingleMsgOrigin: "voipNotification",
                    messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                      .MessageOverwriteOption.VOIP_CALL_LOG,
                  }),
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  l,
                  y.pendingOutcome,
                ),
                r("WAWebVoipCallsTabPanelManager").trigger(
                  "onWriteCallLogMessage",
                  g,
                ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_COMPLETE,
                ));
            },
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "voip_call_log_outcome",
            );
          });
      } finally {
        o("WAWebVoipPhaseTracker").endPostCallWork(p);
      }
    }
    async function D(e, t, n, a, i) {
      (a === void 0 && (a = !1), i === void 0 && (i = !1));
      var l = P(t),
        s = o("WAWebVoipPhaseTracker").beginPostCallWork();
      try {
        var u,
          c = await o("WAWebChatGetExistingBridge").getExisting(e);
        if (
          (c && c.ephemeralDuration != null
            ? (u = babelHelpers.extends({}, t, {
                ephemeralDuration: c.ephemeralDuration,
              }))
            : (u = t),
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG,
          ),
          l != null && (await l.waitForPrevious),
          await M(u))
        )
          return null;
        if ((l == null || l.release(), a && !n)) {
          var d = o(
              "WAWebVoipPendingCallLogOutcome",
            ).mergePendingCallLogOutcome(u),
            m = d.callLogMessage,
            h = d.pendingOutcome,
            y = o("WAWebMsgCollection").MsgCollection.get(m.id);
          if (!y) {
            var C = o("WAWebMsgCollection").MsgCollection.add(
              babelHelpers.extends({}, m),
            )[0];
            if (C)
              return (
                o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
                  m.id,
                  h,
                ),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log in-mem, async IDB persist scheduled",
                    ])),
                ),
                N({ callLogMessage: m, chatId: e, msg: C }),
                C
              );
          }
        }
        var b = new (o("WAResolvable").Resolvable)(),
          v = Date.now();
        return (
          o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: e,
              isOffline: n,
              msgCategory: null,
              skipOfflineWait: !0,
              action: async function () {
                var e = Date.now() - v;
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log dequeued after ",
                      "ms queue wait",
                    ])),
                  e,
                ),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .ICCE_WRITE_CALL_LOG_QUEUED,
                  ));
                var t = S(u)
                  .then(function (t) {
                    var n = Date.now() - v,
                      r = n - e;
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] call log done: queue=",
                          "ms write=",
                          "ms total=",
                          "ms",
                        ])),
                      e,
                      r,
                      n,
                    ),
                      o("WAWebVoipActivityTracker").trackUiActivity(
                        o("WAWebVoipActivityTracker").VoipUiActivity
                          .ICCE_WRITE_CALL_LOG_COMPLETE,
                      ),
                      b.resolve(t));
                  })
                  .catch(function (e) {
                    (o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] call log write failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip-callog-write-failed"),
                      b.resolve(null));
                  });
                return n ? Promise.resolve() : t;
              },
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "voip_call_log_write",
              );
            }),
          await b.promise
        );
      } finally {
        (l == null || l.release(),
          o("WAWebVoipPhaseTracker").endPostCallWork(s));
      }
      async function S(t) {
        n || (await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        var a = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            t,
          ),
          l = a.callLogMessage,
          s = a.pendingOutcome;
        if (n)
          return (
            await x({ callLogMessage: l, chatId: e, pendingOutcome: s }),
            r("WAWebVoipCallsTabPanelManager").trigger(
              "onWriteCallLogMessage",
              null,
            ),
            null
          );
        var u = await $({
            callLogMessage: l,
            chatId: e,
            pendingOutcome: s,
            skipIdbPersistForUpdate: i,
          }),
          c = u.msg,
          d = u.surface;
        return (
          (d === "promoted" || (d === "created" && !i)) &&
            (await o(
              "WAWebVoipActionSurfaceCallLogChat",
            ).maybeSurfaceCallLogChatInChatList(e, l)),
          r("WAWebVoipCallsTabPanelManager").trigger(
            "onWriteCallLogMessage",
            c,
          ),
          c
        );
      }
    }
    async function x(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        r = e.pendingOutcome;
      o("WAWebCmd").Cmd.isMainStreamReadyMd &&
        o("WAWebUpdateMessageUIAction").updateUI({ chatId: n, msg: t });
      var a = o("WAWebGetMessageCache").getMessageCache();
      (await a.addMessages([{ msg: t }], !1),
        o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
          t.id,
          r,
        ));
      var i = t.id;
      if (i != null) {
        var l = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(
            t,
          ),
          s = l.callLogMessage,
          u = l.pendingOutcome;
        if (u != null) {
          if (s !== t) {
            await T({
              callOutcome: u.callOutcome,
              chatId: n,
              expectedPendingOutcome: u,
              msgKey: i,
            });
            return;
          }
          o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(i, u);
        }
      }
    }
    async function $(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        r = e.pendingOutcome,
        a = e.skipIdbPersistForUpdate,
        i = o("WAWebMsgCollection").MsgCollection.get(t.id);
      if (i == null) {
        var l = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(n, t);
        return (
          l != null &&
            o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
              t.id,
              r,
            ),
          { msg: l, surface: l != null ? "created" : "none" }
        );
      }
      var s =
          i.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME ||
          i.viewMode ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_PROMOTED,
        u = s && t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE;
      s &&
        t.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        o("WALogger")
          .WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[writeVoipCallLogMessageImpl] placeholder ",
                " -> non-VISIBLE ",
                "",
              ])),
            i.viewMode,
            t.viewMode,
          )
          .tags("non-sad")
          .sendLogs("voip-callog-promote-non-visible");
      var c =
          s && t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE
            ? babelHelpers.extends({}, t, {
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_OFFLINE_RESUME_PROMOTED,
              })
            : t,
        d = w(i.t, A(i.callOutcome, c));
      return (
        a
          ? await i.applyUpdate(d)
          : await Promise.all([
              i.applyUpdate(d),
              await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: n,
                newMsg: d,
                handleSingleMsgOrigin: "voipNotification",
                messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                  .MessageOverwriteOption.VOIP_CALL_LOG,
              }),
            ]),
        o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, r),
        { msg: i, surface: u ? "promoted" : "none" }
      );
    }
    function P(e) {
      var t, n;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return null;
      var r = (t = e.id) == null ? void 0 : t.id;
      if (r == null) return null;
      var a = (n = E.get(r)) != null ? n : Promise.resolve(),
        i = new (o("WAResolvable").Resolvable)(),
        l = a.then(function () {
          return i.promise;
        });
      E.set(r, l);
      var s = !1;
      return {
        waitForPrevious: a,
        release: function () {
          s ||
            ((s = !0),
            i.resolve(),
            l.then(function () {
              E.get(r) === l && E.delete(r);
            }));
        },
      };
    }
    async function N(e) {
      var t = e.callLogMessage,
        n = e.chatId,
        a = e.msg,
        i = Date.now();
      o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: n,
          isOffline: !1,
          msgCategory: null,
          action: async function () {
            var e = Date.now() - i;
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log IDB persist dequeued after ",
                  "ms",
                ])),
              e,
            ),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG_QUEUED,
              ),
              await o("WAWebReleaseToEventLoop").releaseToEventLoop());
            try {
              var l = await o("WAWebFindChatAction").findOrCreateLatestChat(
                  n,
                  "voipCallLog",
                ),
                s = l.chat;
              (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: s.id,
                newMsg: t,
                handleSingleMsgOrigin: "voipNotification",
              }),
                s.msgs.add(a),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log persisted to IDB successfully",
                    ])),
                ));
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] call log IDB persist failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("voip")
                .sendLogs("voip: persistCallLogAsync"),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_WRITE_CALL_LOG_FAILED,
                ));
              return;
            }
            (await o(
              "WAWebVoipActionSurfaceCallLogChat",
            ).maybeSurfaceCallLogChatInChatList(n, t),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .ICCE_WRITE_CALL_LOG_COMPLETE,
              ),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "onWriteCallLogMessage",
                a,
              ));
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_call_log_persist",
          );
        });
    }
    async function M(e) {
      var t;
      if (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return !1;
      var n = (t = e.id) == null ? void 0 : t.id;
      if (
        n == null ||
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(n)
      )
        return !1;
      try {
        var a = null;
        if (
          e.kind === "callLog" &&
          e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed
        ) {
          var i = await o(
            "WAWebDBGetByParentMsgKey",
          ).getMessageOrphansByParentMsgKey(e.id);
          for (var l of i)
            if (l.parsedMsgPayload.kind === "callLog") {
              a = l.parsedMsgPayload.callOutcome;
              break;
            }
        }
        var s = A(a, e),
          u = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(s),
          c = u.callLogMessage,
          d = u.pendingOutcome;
        (await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
          [c],
          function (e) {
            return e.id;
          },
        ),
          o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(
            c.id,
            d,
          ),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] orphaned for placeholder callId=",
                "",
              ])),
            n,
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] storeMessageOrphans failed for callId=",
                "",
              ])),
            n,
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-orphan-store-fail");
      }
      return !0;
    }
    function w(e, t) {
      return e != null && t.t !== e ? babelHelpers.extends({}, t, { t: e }) : t;
    }
    function A(e, t) {
      return e ===
        o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere &&
        t.kind === "callLog" &&
        t.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed
        ? babelHelpers.extends({}, t, {
            callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
              .AcceptedElsewhere,
          })
        : t;
    }
    ((l.markCallIdProcessed = k),
      (l.isCallIdAlreadyProcessed = I),
      (l.updateVoipCallLogOutcomeImpl = T),
      (l.writeVoipCallLogMessageImpl = D));
  },
  98,
);
