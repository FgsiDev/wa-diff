__d(
  "WAWebHandleHistorySyncChunk",
  [
    "WAAsyncSleep",
    "WABinary",
    "WAGzip",
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiChatBulkGetByHistory",
    "WAWebApiChatCommon",
    "WAWebApiHistorySyncNotification",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebChatConstants",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBMessageUtils",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetHistorySyncProgress",
    "WAWebHandleHistorySyncMsg",
    "WAWebHistoryMsgHandlerAction",
    "WAWebHistorySyncDynamicThrottlingManager",
    "WAWebHistorySyncHandlePushname",
    "WAWebHistorySyncHandleStatusMessages",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
    "WAWebHttpErrors",
    "WAWebLimitSharingProtoUtils",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMessageAssociation.flow",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebNetworkStatus",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessage",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSetUsernameJob",
    "WAWebStartMediaDownloadQpl",
    "WAWebSyncGatingUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateLidMetadataApi",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "decodeProtobuf",
    "getErrorSafe",
    "gkx",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
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
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q = 10,
      X = 100;
    async function Y(t, n) {
      var a =
          n != null
            ? n
            : {
                qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                  entryPoint: "HandleHistorySyncChunk",
                }),
                initialChunkRetryCount: 0,
              },
        i = a.initialChunkRetryCount,
        l = a.qpl;
      i === 1 && l.addAnnotations({ bool: { hasRetry: !0 } });
      try {
        if (
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleHistorySyncChunk started for ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            )
            .tags("history-sync"),
          t.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP)
        ) {
          var q = await o(
            "WAWebUserPrefsHistorySync",
          ).getInitialHistorySyncComplete();
          if (q === !0) {
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Skip duplicate initial sync chunk ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
              l.endSuccess({
                string: { downloadResult: "duplicate_initial_sync_chunk" },
              }));
            return;
          }
          await o(
            "WAWebHistorySyncLidChatGating",
          ).persistForceHistoryLidChatSetting();
        }
        if (
          (o(
            "WAWebMetricsAttributionActions",
          ).startHistorySyncAttributionTracking(t.syncType),
          t.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_STATUS_V3)
        )
          try {
            var U = r("WAWebMsgKey").fromString(t.msgKey);
            o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: U.remote,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                .HISTORY_SYNC_COMPLETION,
              groupedReceipt: new Map().set(U.remote, [U.id]),
            });
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Status receipt send failed",
                  ])),
              )
              .tags("history-sync");
          }
        var V = await o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
            t,
          ),
          H = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(t),
          G = await o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
            t,
            H == null,
          ),
          z = G.historySyncDataAppliedMetric,
          j = G.historySyncDownloadedMetric,
          K = G.historySyncStartDownloadingMetric;
        (t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP &&
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] download started, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            )
            .tags("history-sync"),
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            t.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .DOWNLOADING,
            t.chunkOrder,
          ),
          o(
            "WAWebHistorySyncNotificationUtils",
          ).commitHistoryStartDownloadingMetric(
            K,
            t.historySyncStepStartedTs,
            o("WATimeUtils").unixTimeMs(),
          ));
        var te = null;
        if (H != null)
          (l.addPoint("history_sync_inline_payload"),
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] get inline payload in chunk, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
            (te = H));
        else
          try {
            (o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] start downloading chunk, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
              (te = await o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt(
                babelHelpers.extends(
                  { signal: new AbortController().signal, downloadQpl: l },
                  t.downloadOptions,
                ),
              )));
          } catch (e) {
            if (
              (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] history sync download failed",
                  ])),
              ),
              o(
                "WAWebMetricsAttributionActions",
              ).stopHistorySyncAttributionTracking(t.syncType),
              e instanceof o("WAWebHttpErrors").HttpNetworkError)
            ) {
              if (
                t.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .INITIAL_BOOTSTRAP &&
                i < Q
              )
                return (
                  await r("WAWebNetworkStatus").waitIfOffline(),
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] init sync download failed, retrying",
                        ])),
                    )
                    .tags("history-sync"),
                  Y(t, { qpl: l, initialChunkRetryCount: i + 1 })
                );
              (l.endFailWithError(
                "download_failed",
                r("getErrorSafe")(e).message,
              ),
                o(
                  "WAWebApiHistorySyncNotification",
                ).removeLocalFailureFromInFlightChunk(t.msgKey));
              return;
            }
            l.endFailWithError("download_failed", r("getErrorSafe")(e).message);
            var ne = r("WAWebMsgKey").fromString(t.msgKey);
            if (
              (o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                failureReason: o(
                  "WAWebMdSyncDownloadFailureReason",
                ).getMdSyncDownloadFailureReason(e),
                historySyncDownloadMetric: j,
                isSuccess: !1,
                startTs: t.historySyncStepStartedTs,
              }),
              t.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND)
            ) {
              var re, oe;
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][rdu] on-demand chunk download failed",
                  ])),
              ),
                o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).handleHistorySyncOnDemandFailure(
                  (re = t.peerDataRequestChatId) != null ? re : "",
                ),
                o(
                  "WAWebNonMessageDataRequestLoggingUtils",
                ).logHistorySyncOnDemandResponse(
                  o("WAWebWamEnumPeerDataResponseApplyResultType")
                    .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD,
                  (oe = t.peerDataRequestSessionId) != null ? oe : "",
                ));
            }
            (r("WAWebSendHistSyncServerErrorReceiptJob")(
              ne.remote,
              ne.id,
              t.downloadOptions.mediaKey,
            ),
              await o(
                "WAWebApiHistorySyncNotification",
              ).markChunkForReuploadPending(t.msgKey));
            return;
          }
        (t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP &&
          o("WALogger")
            .LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] download completed, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            )
            .tags("history-sync"),
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            t.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .DOWNLOADED,
            t.chunkOrder,
          ),
          (t.downloadOptions.mediaKey = ""),
          (j.mdBootstrapStepResult = o(
            "WAWebWamEnumMdBootstrapStepResult",
          ).MD_BOOTSTRAP_STEP_RESULT.SUCCESS));
        var ae = new (o("WABinary").Binary)(te),
          ie = await o("WAGzip").inflate(ae.readByteArrayView());
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
        );
        var le = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
          ie,
        );
        (o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.HSProtobufParsing,
        ),
          t.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP &&
            o("WALogger")
              .LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][initial bootstrap] protobuf decoded, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  void 0,
                  le.conversations.length,
                ),
              )
              .tags("history-sync"),
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] LID-PN mappings start, ",
                ", cnt=",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
              t,
              void 0,
              void 0,
            ),
            le.phoneNumberToLidMappings.length,
          ));
        var se = [];
        le.phoneNumberToLidMappings.forEach(function (e) {
          var t = e.lidJid,
            n = e.pnJid;
          t != null &&
            n != null &&
            se.push({
              lid: o("WAWebWidFactory").createUserLidOrThrow(t),
              pn: o("WAWebWidFactory").createUserWidOrThrow(n),
            });
        });
        var ue = {
          mappings: se,
          flushImmediately: !0,
          learningSource: "history-sync-chunk",
        };
        (t.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP
          ? await o("WAWebDBCreateLidPnMappings").createLidPnMappings(ue)
          : await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches(
              ue,
            ),
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] LID-PN mappings done, ",
                ", cnt=",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
              t,
              void 0,
              void 0,
            ),
            se.length,
          ));
        var ce = o(
          "WAWebHistorySyncNotificationCommonUtils",
        ).getLidMappingAsStringSet(se);
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger")
            .LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "completed learning lid mappings for history sync. count: ",
                  ". ",
                  "...",
                ])),
              ce == null ? void 0 : ce.size,
              o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(
                ce,
              ),
            )
            .verbose();
        var de = new Map();
        (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
          t.syncType,
          o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
          t.chunkOrder,
        ),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] chunk downloaded, ",
                "",
              ])),
            o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
              t,
              void 0,
              le.conversations.length,
            ),
          ));
        var me = o("WATimeUtils").unixTimeMs();
        t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .RECENT &&
          t.chunkOrder != null &&
          o("WAWebHistorySyncProgress").updateHistorySyncProgressModel();
        var pe = function (n) {
          o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric(
            {
              historySyncDataAppliedMetric: z,
              startTs: t.historySyncStepStartedTs,
              isSuccess: !1,
              forceFlushWamBuffer: !0,
              failureReason: n,
            },
          );
        };
        t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_STATUS_V3 &&
        le.statusV3Messages &&
        le.statusV3Messages.length > 0
          ? await o("WAWebHistorySyncHandleStatusMessages")
              .handleStatusMessages({
                chunkDownloadFinishTimestamp: me,
                chunkInfo: t,
                historySyncDataAppliedMetric: z,
                historySyncDownloadMetric: j,
                proto: le,
              })
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] storing status messages failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  pe(String(e)),
                  e
                );
              })
          : t.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .NON_BLOCKING_DATA
            ? await o("WAWebHistoryMsgHandlerAction")
                .handleNonBlockingData({
                  chunkDownloadFinishTimestamp: me,
                  chunkInfo: t,
                  historySyncDataAppliedMetric: z,
                  historySyncDownloadMetric: j,
                  proto: le,
                })
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] storing non blocking data failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    pe(String(e)),
                    e
                  );
                })
            : t.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .PUSH_NAME &&
              (le.conversations = le.conversations.reduce(function (e, t) {
                var n = null;
                try {
                  n = o("WAWebWidFactory").createWid(t.id);
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          '[history sync] wid creation failed "',
                          '": ',
                          "",
                        ])),
                      t.id,
                      e,
                    )
                    .tags("history-sync");
                }
                return n ? e.concat(t) : e;
              }, []));
        var _e = [],
          fe = [],
          ge = [];
        if (
          t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP
        )
          await o("WAWebHistoryMsgHandlerAction")
            .handleInitialSyncMsgs({
              chunkDownloadFinishTimestamp: me,
              chunkInfo: t,
              historyLidPnMappings: se,
              historySyncDataAppliedMetric: z,
              historySyncDownloadMetric: j,
              newLidMetadata: _e,
              newUsernameUpdates: ge,
              proto: le,
            })
            .catch(function (e) {
              throw (
                o("WALogger")
                  .LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing initial sync messages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                pe(String(e)),
                e
              );
            });
        else if (
          t.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .PUSH_NAME
        )
          await o("WAWebHistorySyncHandlePushname")
            .handlePushName(le, t, j, z, me)
            .catch(function (e) {
              throw (
                o("WALogger")
                  .LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] storing initial pushname failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                pe(String(e)),
                e
              );
            });
        else if (
          ![
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_STATUS_V3,
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .NON_BLOCKING_DATA,
          ].includes(t.syncType) &&
          (o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing non initial status messages",
              ])),
          ),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          !J(t, le))
        ) {
          var he = [],
            ye = new Set(),
            Ce = [],
            be = [],
            ve = [],
            Se = new Set(),
            Re = [],
            Le = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary(),
            Ee = 0,
            ke = 0,
            Ie = !1,
            Te = o(
              "WAWebSyncGatingUtils",
            ).getRecentSyncMessageProcessingBreakIteration(),
            De = await o(
              "WAWebUserPrefsAppStateSync",
            ).getAllCriticalDataSynced();
          (Le == null || r("isEmptyObject")(Le)) &&
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] boundary data is null or empty",
                ])),
            );
          for (
            var xe = [],
              $e = [],
              Pe = [],
              Ne = [],
              Me = 0,
              we = 0,
              Ae = 0,
              Fe = 0,
              Oe = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? await o(
                    "WAWebApiChatBulkGetByHistory",
                  ).bulkGetChatsMaybeByHistory(
                    le.conversations.map(function (e) {
                      return e.id;
                    }),
                  )
                : [],
              Be = 0;
            Be < le.conversations.length;
            Be++
          ) {
            var We = !1,
              qe = le.conversations[Be],
              Ue = qe.id,
              Ve = Le == null ? void 0 : Le[Ue];
            if (Ve == null) {
              xe.length < 3 && xe.push(r("gkx")("26258") ? "-" : Ue);
              var He = o("WAWebWidFactory").createWid(Ue).toJid();
              ((Le == null ? void 0 : Le[He]) != null &&
                $e.length < 3 &&
                $e.push(r("gkx")("26258") ? "-" : Ue),
                (We = !0));
            }
            var Ge = o("WAWebWidFactory").createWid(Ue);
            Ge.isNewsletter() &&
              (Pe.length < 3 && Pe.push(r("gkx")("26258") ? "-" : Ue),
              (We = !0));
            var ze = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
                ? Oe[Be]
                : await o("WAWebApiChatCommon").getChatMaybeByHistory(Ue),
              je =
                (ze == null ? void 0 : ze.id) != null
                  ? o("WAWebWidFactory").createWid(ze.id)
                  : Ge,
              Ke =
                (ze == null ? void 0 : ze.endOfHistoryTransferType) ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
            if (
              (((!ze && Ve != null) ||
                (ze && ze.endOfHistoryTransferType == null) ||
                Ke) &&
                (Ne.length < 3 && Ne.push(r("gkx")("26258") ? "-" : Ue),
                (We = !0)),
              We)
            )
              t.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND && (Ie = !0);
            else {
              for (
                var Qe = 0,
                  Xe = self.performance.now(),
                  Ye = 0,
                  Je = 0,
                  Ze = 0,
                  et = 0,
                  tt = 0;
                tt < qe.messages.length;
                tt++
              ) {
                var nt, rt, ot, at;
                Ee++;
                var it = o(
                  "WAWebHistorySyncDynamicThrottlingManager",
                ).historySyncDynamicThrottlingManager.getThrottleRate();
                if (
                  ++Qe >= it.batchSize &&
                  o("WAWebABProps").getABPropConfigValue(
                    "wa_web_history_sync_dynamic_throttling",
                  )
                ) {
                  var lt = self.performance.now(),
                    st = lt - Xe;
                  (Ye++,
                    o(
                      "WAWebHistorySyncDynamicThrottlingManager",
                    ).historySyncDynamicThrottlingManager.setLastProcessTime(
                      st,
                      Qe,
                    ),
                    it.delayMs > 0 &&
                      (Je++, await o("WAPromiseDelays").delayMs(it.delayMs)),
                    (Qe = 0),
                    (Xe = self.performance.now()));
                }
                var ut = qe.messages[tt],
                  ct = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    ut.msgOrderId,
                  );
                if (!(Ve != null && Ve !== -1 && ct != null && ct >= Ve)) {
                  var dt =
                    (ut == null ||
                    (nt = ut.message) == null ||
                    (nt = nt.message) == null ||
                    (nt = nt.protocolMessage) == null
                      ? void 0
                      : nt.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (dt === !0) {
                    Ze++;
                    continue;
                  }
                  var mt =
                    (ut == null ||
                    (rt = ut.message) == null ||
                    (rt = rt.message) == null ||
                    (rt = rt.protocolMessage) == null
                      ? void 0
                      : rt.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (mt) {
                    et++;
                    continue;
                  }
                  if (
                    !o(
                      "WAWebLimitSharingProtoUtils",
                    ).shouldWithholdHistorySyncMessage(qe, ut)
                  ) {
                    Se.add(Ue);
                    var pt = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: Ge,
                      message: ut.message,
                      chunkInfo: t,
                      allLidMapping: ce,
                      totalMissingMapping: de,
                      historyLidPnMappings: se,
                      dbChatId: je,
                    });
                    if (
                      (pt &&
                        pt.id.remote.toString() !== Ue &&
                        Se.add(pt.id.remote.toString()),
                      tt === 0 && pt && ze)
                    ) {
                      var _t = await o("WAWebSchemaMessage")
                        .getMessageTable()
                        .betweenCount(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(je),
                          o("WAWebDBMessageUtils").endOfChat(je),
                        );
                      _t === 0 && Re.push(pt);
                    }
                    if (
                      ((ve = ve.concat(
                        o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                          webMsgInfo: ut.message,
                          parsedWebMsgInfo: pt,
                          isFromCag:
                            (ot = qe.isDefaultSubgroup) != null ? ot : !1,
                        }),
                      )),
                      pt != null &&
                        ((at = ut.message) == null ||
                        (at = at.commentMetadata) == null
                          ? void 0
                          : at.commentParentKey) == null &&
                        (ye.has(pt.id.toString()) &&
                          ye.delete(pt == null ? void 0 : pt.id.toString()),
                        he.push(pt)),
                      pt != null &&
                        o("WAWebMessageAssociation.flow").isAssociatedMsg(pt))
                    ) {
                      var ft = pt.parentMsgKey.toString();
                      (ye.add(ft), Ce.push(pt));
                    }
                    (pt != null &&
                      o("WAWebThreadMsgUtils").isThreadMsg(pt) &&
                      be.push(pt),
                      o("WAWebABProps").getABPropConfigValue(
                        "wa_web_history_sync_dynamic_throttling",
                      ) ||
                        (await o(
                          "WAAsyncSleep",
                        ).asyncSleepAfterGivenLoopIteration(
                          ke++,
                          De ? Te : X,
                        )));
                  }
                }
              }
              if (((Me += Ye), (we += Je), (Ae += Ze), (Fe += et), Qe > 0)) {
                var gt = self.performance.now(),
                  ht = gt - Xe;
                o(
                  "WAWebHistorySyncDynamicThrottlingManager",
                ).historySyncDynamicThrottlingManager.setLastProcessTime(
                  ht,
                  Qe,
                );
              }
            }
          }
          (Me > 0 &&
            o("WALogger")
              .LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Throttling observed ",
                    " times across all conversations",
                  ])),
                Me,
              )
              .tags("history-sync"),
            we > 0 &&
              o("WALogger")
                .LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Applied ",
                      " message throttling delays across all conversations",
                    ])),
                  we,
                )
                .tags("history-sync"),
            Ae > 0 &&
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " request welcome messages",
                  ])),
                Ae,
              ),
            Fe > 0 &&
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                Fe,
              ),
            xe.length > 0 &&
              o("WALogger")
                .LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, null boundary => ",
                      "",
                    ])),
                  xe.length,
                  xe,
                )
                .tags("history-sync"),
            $e.length > 0 &&
              o("WALogger")
                .LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, null boundary, exist as jid",
                    ])),
                  $e.length,
                )
                .sendLogs("history-sync-unexpected-conversation-drop"),
            Pe.length > 0 &&
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] dropped ",
                    " chats, sync disabled",
                  ])),
                Pe.length,
              ),
            Ne.length > 0 &&
              o("WALogger")
                .LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] dropped ",
                      " chats, already complete ",
                      "",
                    ])),
                  Ne.length,
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    t,
                  ),
                )
                .tags("history-sync"),
            (j.mdBootstrapMessagesCount = Ee),
            (j.mdBootstrapChatsCount = le.conversations.length),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: me,
              historySyncDownloadMetric: j,
              isSuccess: !0,
              startTs: t.historySyncStepStartedTs,
            }),
            o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .MESSAGE_PREPROCESSED,
              t.chunkOrder,
            ));
          try {
            (he.length !== 0
              ? await o(
                  "WAWebHandleHistorySyncMsg",
                ).handleProgressiveHistorySyncMsgs({
                  associatedMsgs: Ce,
                  chatsWithRecentOrFullSyncMsgs: Array.from(Se),
                  chunkOrder: t.chunkOrder,
                  lastMsgs: Re,
                  missingParentsCache: ye,
                  recentOrFullSyncMsgs: he,
                  syncType: t.syncType,
                  threadMsgs: be,
                  unifiedAddons: ve,
                })
              : o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] no messages from history sync need to handle",
                    ])),
                ),
              await o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                t.syncType,
                t.chunkOrder,
                V,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              await o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder));
            for (
              var yt = new Set(), Ct = [], bt = 0;
              bt < le.conversations.length;
              bt++
            ) {
              var vt = le.conversations[bt],
                St = o("WAWebWidFactory").createWid(vt.id),
                Rt = Oe[bt],
                Lt =
                  (Rt == null ? void 0 : Rt.id) != null
                    ? o("WAWebWidFactory").createWid(Rt.id)
                    : St;
              yt.add(Lt.toString());
              var Et = (Le == null ? void 0 : Le[vt.id]) != null,
                kt = null;
              (Et && (kt = vt.endOfHistoryTransferType),
                kt != null &&
                  Ct.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(Lt, kt),
                  ));
            }
            (await Promise.all(Ct),
              Z({
                applyHistorySyncOnDemandFailure: Ie,
                chatRows: Oe,
                chunkInfo: t,
                proto: le,
              }),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerHistorySyncChunkProcessed(yt),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: z,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !0,
              }),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .APPLIED,
                t.chunkOrder,
              ),
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing recent/full/on-demand chunk complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  Ee,
                  Se.size,
                ),
              ));
          } catch (e) {
            throw (
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing recent/full/on-demand chunk failed: ",
                    "",
                  ])),
                e,
              ),
              pe(String(e)),
              e
            );
          }
        }
        var It = r("WAWebMsgKey").fromString(t.msgKey),
          Tt = new Map();
        (Tt.set(It.remote, [It.id]),
          t.syncType !==
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_STATUS_V3 &&
            o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: It.remote,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                .HISTORY_SYNC_COMPLETION,
              groupedReceipt: Tt,
            }),
          await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
            mappings: fe,
            flushImmediately: !0,
            learningSource: "history-sync-chunk",
          }),
          await o("WAWebUpdateLidMetadataApi").updateLidMetadata({
            updates: _e,
          }),
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            (await o("WAWebSetUsernameJob").setUsernamesJob(ge)),
          await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
            t.msgKey,
            t.syncType,
            t.chunkOrder,
          ),
          t.downloadOptions.encFilehash != null &&
            r("WAWebMmsClient")
              .deleteMdHistorySyncBlob({
                directPath: t.downloadOptions.directPath,
                encFilehash: t.downloadOptions.encFilehash,
                signal: new AbortController().signal,
                encHandle: t.encHandle,
                companionUserSecret: o(
                  "WAWebUserPrefsIndexedDBStorage",
                ).userPrefsIdb.get("WAWebCompanionMetaNonce"),
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "MMS client delete error",
                    ])),
                );
              }));
        var Dt = le.conversations.length === 1 ? le.conversations[0].id : null;
        (await ee(t.syncType, le.progress, Dt, t),
          o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(de),
          l.isActive() && l.endSuccess());
      } catch (e) {
        throw (
          l.isActive() &&
            l.endFailWithError(
              "history_sync_chunk_failed",
              r("getErrorSafe")(e).message,
            ),
          e
        );
      }
    }
    function J(e, t) {
      if (
        e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t.conversations.length !== 1
      ) {
        var n, a;
        return (
          o("WALogger").LOG(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][rdu] on-demand dropped, conv len ",
                " != 1",
              ])),
            r("gkx")("26258") ? "" : t.conversations.length,
          ),
          o(
            "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
          ).handleHistorySyncOnDemandFailure(
            (n = e.peerDataRequestChatId) != null ? n : "",
          ),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logHistorySyncOnDemandResponse(
            o("WAWebWamEnumPeerDataResponseApplyResultType")
              .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE,
            (a = e.peerDataRequestSessionId) != null ? a : "",
          ),
          !0
        );
      }
      return !1;
    }
    function Z(e) {
      var t = e.applyHistorySyncOnDemandFailure,
        n = e.chatRows,
        r = e.chunkInfo,
        a = e.proto;
      if (
        r.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        a.conversations.length === 1
      ) {
        var i, l;
        o("WAWebMetricsAttributionActions").stopHistorySyncAttributionTracking(
          r.syncType,
        );
        var s = a.conversations[0].id,
          u =
            ((i = n[0]) == null ? void 0 : i.id) != null
              ? o("WAWebWidFactory").createWid(n[0].id).toJid()
              : s;
        (t
          ? o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).handleHistorySyncOnDemandFailure(u)
          : o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).handleHistorySyncOnDemandSuccess(u),
          o(
            "WAWebNonMessageDataRequestLoggingUtils",
          ).logHistorySyncOnDemandResponse(
            t
              ? o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR
              : o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS,
            (l = r.peerDataRequestSessionId) != null ? l : "",
          ));
      }
    }
    async function ee(e, t, n, a) {
      var i = o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled();
      if (
        ((t === 100 ||
          e ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP) &&
          o(
            "WAWebMetricsAttributionActions",
          ).stopHistorySyncAttributionTracking(e),
        e ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP)
      )
        (o("WALogger")
          .LOG(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Initial bootstrap history sync complete",
              ])),
          )
          .tags("history-sync"),
          await o("WAWebUserPrefsHistorySync").setInitialHistorySyncComplete(),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            initialCompleted: !0,
          }),
          o("WALogger")
            .LOG(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] completion persisted, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a),
            )
            .tags("history-sync"),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerInitialChatHistorySynced(),
          o("WALogger")
            .LOG(
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] completion event emitted, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a),
            )
            .tags("history-sync"));
      else if (
        e ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .RECENT &&
        t === 100
      )
        (o("WALogger")
          .LOG(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Recent history sync complete",
              ])),
          )
          .tags("history-sync"),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            recentCompleted: !0,
          }),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerRecentChatHistorySynced());
      else if (
        e ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL &&
        t === 100
      )
        (o("WALogger")
          .LOG(
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Full history sync complete",
              ])),
          )
          .tags("history-sync"),
          i ||
            (o("WALogger").LOG(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] set history initial sync boundary to empty",
                ])),
            ),
            o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary({})),
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            fullCompleted: !0,
          }),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerFullChatHistorySynced());
      else if (
        i &&
        e ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND &&
        t === 100
      ) {
        var l;
        o("WALogger")
          .LOG(
            K ||
              (K = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] On demand history sync complete for chat ",
                "",
              ])),
            r("gkx")("26258") ? "-" : n,
          )
          .tags("history-sync");
        var s = "onDemandCompleted_" + (n != null ? n : "");
        await o("WAWebUserPrefsHistorySync").setHistorySyncStatus(
          ((l = {}), (l[s] = !0), l),
        );
      }
    }
    l.handleHistorySyncChunk = Y;
  },
  98,
);
