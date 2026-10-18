__d(
  "WAWebMediaPrepSendToChat",
  [
    "JSResourceForInteraction",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBotBaseGating",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaEntry",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaPrepHelpers",
    "WAWebMediaPrepMediaProps",
    "WAWebMediaTypes",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNullFunc",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebWamEnumMessageSendResultType",
    "err",
    "getErrorSafe",
    "nullthrows",
    "requireDeferred",
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
      g = r("requireDeferred")("WAWebSendStatusMsgAction").__setRef(
        "WAWebMediaPrepSendToChat",
      ),
      h = new AbortController().signal,
      y = r("err")("upload failed: retryable, auto-retrying"),
      C = 3,
      b = function (t) {
        var e = t.baseProps,
          n = t.chat,
          a = t.options,
          i = t.prep;
        return (
          (a.chatWid = n.id),
          (a.downloadOrigin = o(
            "WAWebMediaPrepHelpers",
          ).getDownloadOriginForChat(n, e)),
          (a.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(n)),
          r("WAWebMediaPrepMediaProps")(i, a)
        );
      };
    async function v(t) {
      var n,
        a,
        i = t.chat,
        l = t.earlyUpload,
        f = t.options,
        v = t.prep;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Media:sendToChat chat ",
            "",
          ])),
        i.id.toLogString(),
      );
      try {
        if (!i.id.isStatus()) {
          var R = await o("WAWebSchemaChat")
            .getChatTable()
            .get(i.id.toString());
          if (R == null) {
            var L;
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendMediaMsgToChat: chat ",
                    " not in DB. lid: ",
                    "",
                  ])),
                i.id.toLogString(),
                (L = i.accountLid) == null ? void 0 : L.toLogString(),
              )
              .sendLogs("send-media-chat-not-found")
              .tags("missing-lid");
          } else
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendMediaMsgToChat: chat ",
                  " found in DB. has account lid: ",
                  "",
                ])),
              i.id.toLogString(),
              R.accountLid != null,
            );
        }
      } catch (e) {
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendMediaMsgToChat: failed to check if chat exists",
            ])),
        );
      }
      var E = f.caption,
        k = f.footer,
        I = f.quotedMsg ? f.quotedMsg.msgContextInfo(i.id) : {},
        T = (n = f.productMsgOptions) != null ? n : {},
        D = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(i),
        x = D.afterReadDuration,
        $ = D.ephemeralDuration,
        P = o("WAWebChatEphemerality").isEphemeralSettingOn(i) ? $ : void 0,
        N = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
        M = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
        w =
          o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(E != null ? E : null) &&
          o("WAWebABProps").getABPropConfigValue(
            "is_spoiler_rich_format_sender_enabled",
          ),
        A,
        F = !1;
      i.isCAGAdmin() && (F = !0);
      var O = (a = f.type) != null ? a : v.baseType;
      o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
        o(
          "WAWebMessagePluginGenerateReportingTokenContent",
        ).isMsgTypeReportingTokenCompatible(O) &&
        (F = !0);
      var B =
        i.id.isBot() &&
        (o("WAWebBotBaseGating").isBotEnabled() || i.id.isSupportAgentBot());
      (B && (F = !0),
        F && (A = self.crypto.getRandomValues(new Uint8Array(32))));
      var W = babelHelpers.extends(
        {},
        await o("WAWebMsgDataUtils").genOutgoingMsgData(i, O),
        {
          type: O,
          caption: E,
          footer: k,
          quotedMsg: I.quotedMsg,
          quotedParticipant: I.quotedParticipant,
          quotedStanzaID: I.quotedStanzaID,
          quotedRemoteJid: I.quotedRemoteJid,
          mentionedJidList: f.mentionedJidList,
          groupMentions: f.groupMentions,
          isForwarded: f.isForwarded,
          forwardingScore: f.forwardingScore,
          forwardedNewsletterMessageInfo: f.forwardedNewsletterMessageInfo,
          forwardedAiBotMessageInfo: f.forwardedAiBotMessageInfo,
          aiProvenance: f.aiProvenance,
          multicast: f.multicast,
          forwardedFromWeb: f.forwardedFromWeb,
          ctwaContext: f.ctwaContext,
          ephemeralDuration: P,
          ephemeralSettingTimestamp: N,
          disappearingModeInitiator: M,
          afterReadDuration: x,
          isSpoiler: w,
          messageSecret: A,
          botPersonaId: f.botPersonaId,
          aiMediaCollectionInfo: f.aiMediaCollectionInfo,
          botMetricsMetadata: f.botMetricsMetadata,
          aiThreadInfo: f.aiThreadInfo,
          isAvatar: f.isAvatar,
          isAiSticker: f.isAiSticker,
          viewMode: f.viewMode,
          parentMsgKey: f.parentMsgKey,
          associationType: f.associationType,
          pairedMediaType: f.pairedMediaType,
          isQuestion: f.isQuestion,
          questionReplyQuotedMessage: f.questionReplyQuotedMessage,
          interactiveAnnotations: f.interactiveAnnotations,
          threadIds: f.threadId != null ? [f.threadId] : void 0,
          statusAttributions: f.statusAttributions,
          isScheduledMsg: f.isScheduledMsg,
          scheduledTimestampS: f.scheduledTimestampS,
        },
        T,
      );
      if (f.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
        var q;
        ((W.description = f.description),
          (W.isCaptionByUser = !!f.caption),
          (W.thumbnailSha256 = f.thumbnailSha256),
          (W.stickers = f.stickers),
          (W.stickerPackPublisher = f.publisher),
          (W.size = (q = f.fileLength) != null ? q : 0),
          (W.stickerPackId = f.stickerPackId),
          (W.thumbnailDirectPath = f.thumbnailDirectPath),
          (W.thumbnailEncSha256 = f.thumbnailEncSha256),
          (W.trayIconFileName = f.trayIconFileName),
          (W.stickerPackSize = f.stickerPackSize));
      }
      (f.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        f.caption &&
        (W.isCaptionByUser = !0),
        f.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((W.nativeFlowInteractiveMsg = f.nativeFlowInteractiveMsg),
          (W.nativeFlowName = f.nativeFlowName),
          (W.interactiveHeader = f.interactiveHeader),
          (W.interactiveType = f.interactiveType),
          (W.interactivePayload = f.interactivePayload)),
        f.isWamoSub === !0 && (W.isWamoSub = !0),
        S(f.onMsgKeyCreated, W.id));
      var U, V;
      async function H(e) {
        U = e;
        var t = f.aiProvenance;
        f.aiProvenancePromise != null &&
          (t = await f.aiProvenancePromise.catch(
            o("WAWebNullFunc").returnNull,
          ));
        var n = e.mediaObject;
        ((f.earlyUpload = l),
          (f.isMediaCryptoExpectedForChat = o(
            "WAWebMediaCryptoEligibilityUtils",
          ).isMediaCryptoExpectedForChat(i)),
          (f.uploadOriginForChat = r("WAWebMediaGetUploadOriginForChat")(i)));
        var a = function () {
            return o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(e, f);
          },
          s = o("WAPromiseBackoffs").createTimer({
            algo: { type: "exponential", first: 1e3, base: 2 },
            max: 3e3,
            jitter: 0.5,
          });
        s();
        var u = await o("WABackoffDelay").backoff(
            {
              delay: function () {
                return s();
              },
              signal: h,
              retries: C,
            },
            async function (e, t) {
              var r,
                i,
                l = (r = n == null ? void 0 : n.loadedSize) != null ? r : 0,
                s = await a(),
                u = (i = n == null ? void 0 : n.loadedSize) != null ? i : 0,
                c = u > l;
              return !s.mediaResult.mediaEntry &&
                s.mediaResult.kind ===
                  o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
                (n == null ? void 0 : n.uploadStage) ===
                  o("WAWebMediaTypes").UploadStage.NEED_UPLOAD &&
                c
                ? (t < C &&
                    (n == null ||
                      n.consolidate({
                        uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
                      })),
                  e(y))
                : s;
            },
          ),
          c = u.body,
          d = u.mediaResult,
          m = d.kind,
          p = d.mediaEntry,
          _ = u.mmsThumbnailData;
        if (((V = m), !p))
          throw r("err")("upload failed: media entry was not created");
        return (
          await r("WAWebMediaUpdateMsg")(
            U,
            babelHelpers.extends(
              {
                aiProvenance: t,
                deprecatedMms3Url: p.deprecatedMms3Url,
                directPath: p.directPath,
                mediaKey: p.getMediaKey(),
                mediaKeyTimestamp: p.getMediaKeyTimestamp(),
                filehash: r("nullthrows")(n).filehash,
                encFilehash: p.getEncfilehash(),
                size: r("nullthrows")(n).size,
                streamingSidecar: p.sidecar,
                firstFrameSidecar: p.firstFrameSidecar,
                body: c,
                stickerSentTs: o("WATimeUtils").unixTimeMs(),
                mediaHandle:
                  p instanceof o("WAWebMediaEntry").UnencryptedMediaEntry
                    ? p.handle
                    : null,
                metadataUrl:
                  p instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  p.metadataUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? p.metadataUrl
                    : null,
                dashManifestUrl:
                  p instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  p.dashManifestUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? p.dashManifestUrl
                    : void 0,
              },
              _,
            ),
          ),
          U
        );
      }
      var G;
      if (f.addEvenWhilePreparing === !0) {
        var z = f.placeholderProps || {},
          j = babelHelpers.extends({}, z, W),
          K = function (t) {
            return (
              (U = t),
              b({ baseProps: W, chat: i, options: f, prep: v })
                .then(function (e) {
                  return r("WAWebMediaUpdateMsg")(U, e);
                })
                .then(function () {
                  return H(U);
                })
            );
          };
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebChatGetters").getIsNewsletter(i)
          ? f.isNewsletterStatus === !0
            ? (G = r("JSResourceForInteraction")(
                "WAWebNewsletterSendStatusAction",
              )
                .__setRef("WAWebMediaPrepSendToChat")
                .load()
                .then(function (e) {
                  return e.sendNewsletterStatusMediaMsgAction(
                    j,
                    K,
                    f.statusPostFunnelContext,
                  );
                }))
            : (G = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                i,
                j,
                K,
              ))
          : i.id.isStatus()
            ? (G = g.load().then(function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: K,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: j,
                });
              }))
            : (G = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, j, K)[1]);
      } else {
        var Q = b({ baseProps: W, chat: i, options: f, prep: v }).then(
          function (e) {
            var t = f.useBasePropsType === !0 ? W.type : e.type;
            return babelHelpers.extends({}, W, e, { type: t });
          },
        );
        if (
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          o("WAWebChatGetters").getIsNewsletter(i)
        )
          if (f.isNewsletterStatus === !0) {
            var X = await Q;
            G = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction")
              .__setRef("WAWebMediaPrepSendToChat")
              .load()
              .then(function (e) {
                return e.sendNewsletterStatusMediaMsgAction(
                  X,
                  H,
                  f.statusPostFunnelContext,
                );
              });
          } else
            G = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
              i,
              await Q,
              H,
            );
        else
          i.id.isStatus()
            ? (G = g.load().then(async function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: H,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: await Q,
                });
              }))
            : W.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
              ? (G = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  i,
                  await Q,
                  H,
                )[1])
              : (G = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  i,
                  Q,
                  H,
                )[1]);
      }
      return G.then(function (e) {
        return { result: e, error: null };
      })
        .catch(function (e) {
          return { result: null, error: e };
        })
        .then(function (e) {
          var t,
            n = e.error,
            r = e.result;
          if (
            (r == null ? void 0 : r.messageSendResult) ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          )
            return (
              U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                U.isAvatar !== !0 &&
                o(
                  "WAWebRecentStickerCollectionMd",
                ).RecentStickerCollectionMd.addStickerWithMediaData(U),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msg: U,
              }
            );
          U && (U.ack = o("WAWebAck").ACK.FAILED);
          var a =
            (t = U) == null || (t = t.mediaObject) == null
              ? void 0
              : t.uploadStage;
          if (
            U &&
            o("WAWebMmsMediaTypes").getMsgMediaType(U) ===
              o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
          ) {
            var i = a || "undefined";
            V === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Sticker:sendToChat failed with expressions panel enabled",
                    ])),
                )
                .tags("non-sad")
                .sendLogs(
                  "sticker-send-fail-with-expressions-panel-enabled-uploadStage-" +
                    i,
                  { sampling: 0.01 },
                );
          }
          if (
            V === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
          ) {
            var l;
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Media:sendToChat canceled",
                  ])),
              ),
              (l = U.wamMessageSendReporter) == null ||
                l.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
                  isTerminal: !0,
                }),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_CANCELLED,
              }
            );
          }
          if (
            (o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Media:sendToChat err res=",
                  " stage=",
                  " kind=",
                  " err=",
                  "",
                ])),
              r,
              a,
              V,
              String(n),
            ),
            a != null)
          )
            switch (a) {
              case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
              case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
              case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
              case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED:
                return {
                  messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(U),
                  msg: U,
                };
              case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                return (
                  o("WAWebCoreActionsODS").logMsgSendError(),
                  o("WAWebCoreActionsODS").logMsgSendErrorUpload(),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_EXPIRED,
                    msg: U,
                  }
                );
              default:
            }
          return V === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
            ? {
                messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(U),
                msg: U,
              }
            : r != null
              ? U != null
                ? babelHelpers.extends({}, r, { msg: U })
                : r
              : (U &&
                  o("WAWebMmsMediaTypes").getMsgMediaType(U) ===
                    o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker:sendToChat failed with unknown error",
                        ])),
                    )
                    .sendLogs("sticker-send-fail-unknown-expression-panels"),
                o("WAWebCoreActionsODS").logMsgSendError(),
                {
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .ERROR_UNKNOWN,
                });
        });
    }
    function S(e, t) {
      try {
        e == null || e(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat onMsgKeyCreated failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("media-send-on-msg-key-created-failed");
      }
    }
    l.default = v;
  },
  98,
);
