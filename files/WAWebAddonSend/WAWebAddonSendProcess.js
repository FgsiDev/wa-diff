__d(
  "WAWebAddonSendProcess",
  [
    "WALogger",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonEncryptAddonMsgData",
    "WAWebAddonInfraError",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonRetryRequestUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSendMsgData",
    "WAWebAddonUpdateDataUtils",
    "WAWebHandleMsgError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebSendMsgJob",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return e.parent.isGroupStatus !== !0
        ? e
        : babelHelpers.extends({}, e, {
            encryptedMsgData: babelHelpers.extends({}, e.encryptedMsgData, {
              isGroupStatus: !0,
            }),
            decryptedMsgData: babelHelpers.extends({}, e.decryptedMsgData, {
              isGroupStatus: !0,
            }),
          });
    }
    async function f(e, t) {
      var n = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(
          e,
          t,
        ),
        r = n ? await n.decrypt() : e,
        a = o("WAWebAddonSelectUtils").getAddonTableMode(e);
      await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
        {
          processMode: o("WAWebAddonConstants").AddonProcessMode.SetAck,
          tableMode: a,
        },
        { add: [r] },
      );
    }
    function g(e) {
      var t = e.id,
        n = t.remote;
      return t.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(n)
        ? o("WAWebAck").ACK.READ
        : o("WAWebAck").ACK.SENT;
    }
    function h(e, t) {
      if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
        var n = o("WAWebMsgGetters").getPollEndTime(e.parent),
          r = parseInt(t, 10) * 1e3;
        if (n != null && r > n) return !0;
      }
      return !1;
    }
    var y = new Set([
      o("WAWebAddonConstants").AddonProcessMode.Send,
      o("WAWebAddonConstants").AddonProcessMode.SendRetry,
      o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
    ]);
    async function C(t) {
      try {
        var n =
            t.ack === o("WAWebAck").ACK.FAILED
              ? o("WAWebAddonConstants").AddonProcessMode.SendRetry
              : o("WAWebAddonConstants").AddonProcessMode.Send,
          r = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
            [t],
            n,
          ),
          a = r[0],
          i = o("WAWebAddonSelectUtils")
            .createAddonParentSelector(a)
            .getForAddon(t);
        await f(
          babelHelpers.extends({}, t, { ack: o("WAWebAck").ACK.FAILED }),
          i,
        );
      } catch (n) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendAddonMsgData: failed to mark addon send-failed without sending ",
                "",
              ])),
            t.id.toString(),
          )
          .tags("messaging", "addons")
          .sendLogs("sendAddonMsgData: mark-failed-without-send");
      }
    }
    async function b(e, t) {
      var n = o("WAWebAddonConstants").AddonProcessMode.Send;
      (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke &&
        (n = o("WAWebAddonConstants").AddonProcessMode.SendRevoke),
        e.ack === o("WAWebAck").ACK.FAILED &&
          (n = o("WAWebAddonConstants").AddonProcessMode.SendRetry));
      var a;
      try {
        var i;
        if (!y.has(n))
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        var l = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
        if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
          a = await o(
            "WAWebAddonProcessMsgs",
          ).processOutgoingMsgOptimisticUpdate(n, e);
        else {
          var C;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-infra] send ",
                " (",
                ") id=",
                " parent=",
                " isLid=",
                "",
              ])),
            o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e),
            e.type,
            e.id.id,
            l.id,
            (C = l.participant) == null ? void 0 : C.isLid(),
          );
          var b = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
              [e],
              n,
            ),
            v = b[0],
            S = b[1];
          if (
            ((a = {
              encryptedMsgData: S[0],
              decryptedMsgData: S[0],
              parent: o("WAWebAddonSelectUtils")
                .createAddonParentSelector(v)
                .getForAddon(S[0]),
            }),
            n === o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
              e.type === o("WAWebMsgType").MSG_TYPE.COMMENT)
          ) {
            var R = o("WAWebAddonPluginProcessor").getAddonProcessor(
              a.decryptedMsgData,
            );
            R.convert.toDualEncryptedMsgData != null &&
              (a.encryptedMsgData = await R.convert.toDualEncryptedMsgData(
                a.decryptedMsgData,
                a.parent,
              ));
          }
          ((a = _(a)),
            (n === o("WAWebAddonConstants").AddonProcessMode.Send ||
              n === o("WAWebAddonConstants").AddonProcessMode.SendRetry) &&
              (await o("WAWebAddonProcessMsgs").processOutgoingMsg(
                n,
                a.encryptedMsgData,
                v,
                t,
              )));
        }
        await o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(
          a.decryptedMsgData,
        );
        var L =
          a.parent.broadcastId != null &&
          r("WAWebWid").isWid(a.parent.broadcastId) &&
          !!((i = a.parent.broadcastId) != null && i.isBroadcastList());
        if (L) {
          var E = o("WAWebReferentialMsgKey").getReferentialMsgKey(a.parent);
          a.encryptedMsgData = o(
            "WAWebAddonProcessMsgsUtils",
          ).updateMsgParentKeyValue(a.encryptedMsgData, E);
        }
        var k = await o("WAWebSendMsgJob").encryptAndSendMsg(
            {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
              data: a.encryptedMsgData,
            },
            t,
          ),
          I = k.count,
          T = k.error,
          D = k.t;
        if (
          (L &&
            (a.encryptedMsgData = o(
              "WAWebAddonProcessMsgsUtils",
            ).updateMsgParentKeyValue(a.encryptedMsgData, a.parent.id)),
          T != null)
        )
          throw new (o("WAWebHandleMsgError").MessageSentAckError)(T);
        if (h(a, D))
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAddonMsgData: post-send validation failed, marking as failed",
                ])),
            ),
            r("err")("Post-send validation failed")
          );
        return (
          await f(
            babelHelpers.extends({}, a.decryptedMsgData, {
              ack: g(a.encryptedMsgData),
            }),
            a.parent,
          ),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-infra]: sent ",
                " addon, id: ",
                "",
              ])),
            a.decryptedMsgData.type,
            a.decryptedMsgData.id.id,
          ),
          { t: parseInt(D, 10), count: I }
        );
      } catch (t) {
        if (a == null) {
          if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
            try {
              var x = await o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs([e], n),
                $ = x[0],
                P = o("WAWebAddonSelectUtils")
                  .createAddonParentSelector($)
                  .getForAddon(e);
              await f(
                babelHelpers.extends({}, e, { ack: o("WAWebAck").ACK.FAILED }),
                P,
              );
            } catch (t) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "sendAddonMsgData: failed to set ACK.FAILED for optimistic addon ",
                      "",
                    ])),
                  e.id.toString(),
                )
                .tags("messaging", "addons")
                .sendLogs("sendAddonMsgData: optimistic-set-ack-failed");
            }
          throw (
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAddonMsgData: parent ",
                    " not found for ",
                    "",
                  ])),
                o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e),
                e.id.toString(),
              )
              .tags("messaging", "addons")
              .sendLogs("sendAddonMsgData: undefined parent"),
            t
          );
        }
        throw (
          await f(
            babelHelpers.extends({}, a.decryptedMsgData, {
              ack: o("WAWebAck").ACK.FAILED,
            }),
            a.parent,
          ),
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "sendAddonMsgData: failure, msg: ",
                "",
              ])),
            e.id.toString(),
          ),
          t
        );
      }
    }
    ((l.markAddonSendFailed = C), (l.sendAddonProcess = b));
  },
  98,
);
