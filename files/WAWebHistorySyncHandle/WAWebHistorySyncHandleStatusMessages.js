__d(
  "WAWebHistorySyncHandleStatusMessages",
  [
    "WAAckLevel",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendJobs.flow",
    "WAWebDBReportingTokenUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebReportingTokenConstants",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = t.chunkDownloadFinishTimestamp,
        a = t.chunkInfo,
        i = t.historySyncDataAppliedMetric,
        l = t.historySyncDownloadMetric,
        d = t.proto;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start processing status",
          ])),
      ),
        (l.mdBootstrapMessagesCount = d.statusV3Messages.length),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: n,
          historySyncDownloadMetric: l,
          isSuccess: !0,
          startTs: a.historySyncStepStartedTs,
        }),
        d.statusV3Messages.sort(function (e, t) {
          var n = e.messageTimestamp,
            r = t.messageTimestamp;
          return (
            o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
            o("WATimeUtils").castToUnixTime(parseInt(r, 10))
          );
        }));
      var m = [];
      (await Promise.all(
        d.statusV3Messages.map(async function (e) {
          var t,
            n = null,
            a = [];
          if (e.key.fromMe === !0)
            ((n = o("WAWebUserPrefsMeUser").getMeUserOrThrow()),
              (a = e.userReceipt.filter(function (e) {
                return e.readTimestamp != null && e.readTimestamp !== 0;
              })));
          else {
            var i = e.participant;
            if (i == null)
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] skipping status without participant",
                    ])),
                ),
                Promise.resolve()
              );
            n = o("WAWebWidFactory").createWid(i);
          }
          var l = {
            type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS,
            externalId: r("nullthrows")(
              e.key.id,
              "HistorySync:handleStatusMessages: missing key.id",
            ),
            ts: o("WATimeUtils").castToUnixTime(
              parseInt(e.messageTimestamp, 10),
            ),
            edit: -1,
            isHsm: !1,
            count: null,
            chat: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            author: n,
            pushname: null,
            isDirect: !1,
          };
          if (e.message == null)
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] missing message",
                    ])),
                )
                .sendLogs("history-sync-missing-status-msg"),
              Promise.resolve()
            );
          var c = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
            d = await o("WAWebMsgProcessingApiUtils").parseMessage({
              info: l,
              ciphertextType: c,
              msgProtobuf: r("nullthrows")(
                e.message,
                "HistorySync:handleStatusMessages: missing message",
              ),
              hsmInfo: null,
            }),
            p = d.renderableMsgs && d.renderableMsgs;
          if (!p || p.length !== 1) return Promise.resolve();
          var _ = p[0].id,
            f = p[0].author,
            g = babelHelpers.extends({}, p[0], {
              author: f && o("WAWebLidStatusMigrationUtils").matWidConvert(f),
              id: new (r("WAWebMsgKey"))({
                fromMe: _.fromMe,
                remote: _.remote,
                id: _.id,
                participant:
                  _.participant == null
                    ? void 0
                    : o("WAWebLidStatusMigrationUtils").matWidConvert(
                        _.participant,
                      ),
              }),
            });
          if (e.participant === "0@s.whatsapp.net") return Promise.resolve();
          var h = e.ignore === !0;
          if (
            (h &&
              (g = babelHelpers.extends({}, g, {
                invis: !0,
                ack: o("WAAckLevel").ACK.READ,
              })),
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: g.id.remote,
              newMsg: g,
              handleSingleMsgOrigin: "historyStatusMessages",
            }),
            a.forEach(function (e) {
              var t,
                n = o("WALongInt").numberOrThrowIfTooLarge(
                  (t = e.readTimestamp) != null ? t : 0,
                ),
                r = o("WAWebWidFactory").createWid(e.userJid);
              o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt(
                {
                  ts: n,
                  ack: o("WAAckLevel").ACK.READ,
                  receiverId: r,
                  msgKeys: [g.id.toString()],
                },
              );
            }),
            o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() &&
              ((t = e.reportingTokenInfo) == null ? void 0 : t.reportingTag) !=
                null)
          ) {
            var y;
            g = babelHelpers.extends({}, g, {
              reportingTokenInfo: {
                reportingTag: new Uint8Array(
                  (y = e.reportingTokenInfo) == null ? void 0 : y.reportingTag,
                ),
                version: o("WAWebReportingTokenConstants")
                  .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
              },
            });
          }
          return (m.push(g), !0);
        }),
      ),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          a.msgKey,
          a.syncType,
          a.chunkOrder,
        ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: i,
          startTs: a.historySyncStepStartedTs,
          isSuccess: !0,
        }),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing Status complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            a,
            d.statusV3Messages.length,
          ),
        ),
        o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(m));
    }
    l.handleStatusMessages = d;
  },
  98,
);
