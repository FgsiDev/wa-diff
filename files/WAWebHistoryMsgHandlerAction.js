__d(
  "WAWebHistoryMsgHandlerAction",
  [
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiContact",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiHistorySyncNotification",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebBotTypes",
    "WAWebCTWAGatingUtils",
    "WAWebCallsOnlyGating",
    "WAWebChatConstants",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebContactSystemMsg",
    "WAWebCryptoCurve25519",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBDrainBotOrphansForHistoryMsgs",
    "WAWebDBProcessInitialHistorySyncMessage",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebHandleAddChats",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncStickers",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMemberLabelHistorySync",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebProcessMessageAssociationMessages",
    "WAWebProtobufsAdv.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSeedBotProfilesFromHistorySync",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSyncBootstrap",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsModelStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
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
      F;
    async function O(t) {
      var n = t.chunkDownloadFinishTimestamp,
        a = t.chunkInfo,
        i = t.historyLidPnMappings,
        l = t.historySyncDataAppliedMetric,
        I = t.historySyncDownloadMetric,
        T = t.newLidMetadata,
        D = t.newUsernameUpdates,
        x = t.proto;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] preprocessing started, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a),
        )
        .tags("history-sync");
      var $ = [],
        P = {},
        N = {},
        M = new Map(),
        w = {},
        A = [],
        F = new Map(),
        O = new Set(),
        B = 0,
        W = [],
        j = [],
        K = o(
          "WAWebHistorySyncNotificationCommonUtils",
        ).getLidMappingAsStringSet(i);
      o("WAWebCurrentUser").isEmployee() &&
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "first lid mappings for initial sync. count: ",
                ". ",
                "...",
              ])),
            K == null ? void 0 : K.size,
            o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(K),
          )
          .verbose();
      var Q = new Map(),
        X = [],
        Y = 0,
        J = 0,
        Z = 0,
        ee = [],
        te =
          o(
            "WAWebBizCoexGatingUtils",
          ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
          (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === !0,
        ne = async function (t) {
          var e,
            n,
            l,
            s,
            u,
            c,
            d = t.id;
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] processing conversation ",
                  " with ",
                  " messages",
                ])),
              d,
              t.messages.length,
            );
          var m = o("WAWebWidFactory").createWid(d);
          if (m.isNewsletter()) return 0;
          var p = U(m, t);
          if (p.result === "skip-chat") return 0;
          if (p.result === "extracted") {
            var _ = p.accountLid;
            if (M.has(_))
              return (
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                      ])),
                  )
                  .sendLogs("duplicated-account-lid-in-history-sync"),
                0
              );
            M.set(_, m);
          } else p.result;
          var f = m,
            g,
            h =
              o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
              m.isRegularUserPn() &&
              p.accountLid != null;
          if (
            (h &&
              p.accountLid != null &&
              (Y++,
              X.length < 3 &&
                X.push(m.toLogString() + " -> " + p.accountLid.toLogString()),
              (f = p.accountLid),
              (g = m.toString())),
            m.isUser())
          ) {
            if (m.isLid()) {
              var y = t.pnJid;
              y != null &&
                $.push({
                  lid: m,
                  pn: o("WAWebWidFactory").createUserWidOrThrow(y),
                });
              var C = t.displayName,
                b = t.shareOwnPn;
              if (C != null || b != null) {
                var I = {};
                (C != null && (I.displayNameLID = C),
                  b != null && (I.shareOwnPn = b),
                  T.push({ lid: m, data: I }));
              }
            } else if (t.lidJid != null) {
              var D = o("WAWebWidFactory").createUserLidOrThrow(t.lidJid);
              $.push({ lid: D, pn: m });
            }
          }
          var x = t.name;
          f.isBot() && x != null && x !== "" && j.push({ name: x, wid: f });
          var q = [];
          B += t.messages.length;
          var V = [],
            H = new Set(),
            ne = [];
          (t.messages.length === 0 && (P[d] = -1),
            r("isStringNullOrEmpty")(t.pHash) || (w[d] = t.pHash));
          var re,
            oe = !1,
            ae = [],
            ie = 0,
            le = 0;
          (t.messages.forEach(function (e, n) {
            var l, s, u, c;
            if (n === t.messages.length - 1) {
              var p = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.msgOrderId);
              p != null && (P[d] = p);
            }
            var _ =
              (e == null ||
              (l = e.message) == null ||
              (l = l.message) == null ||
              (l = l.protocolMessage) == null
                ? void 0
                : l.type) ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .REQUEST_WELCOME_MESSAGE;
            if (_) {
              ie++;
              return;
            }
            var g =
              (e == null ||
              (s = e.message) == null ||
              (s = s.message) == null ||
              (s = s.protocolMessage) == null
                ? void 0
                : s.type) ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .BOT_MEMU_ONBOARDING_MESSAGE;
            if (g) {
              le++;
              return;
            }
            if (
              !o(
                "WAWebLimitSharingProtoUtils",
              ).shouldWithholdHistorySyncMessage(t, e)
            ) {
              if (
                o("WAWebMobilePlatforms").isSMB() &&
                o(
                  "WAWebBizCoexGatingUtils",
                ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
                n === 0 &&
                f.isUser() &&
                t.systemMessageToInsert != null
              )
                switch (t.systemMessageToInsert) {
                  case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                    .E2EE_MSG: {
                    if (te) break;
                    var h = o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeChangeNotificationMsg({
                      accountTypeChangedUser: o(
                        "WAWebUserPrefsMeUser",
                      ).getMeUserOrThrow(),
                      chatId: f,
                      newAdvAccountType: o("WAWebProtobufsAdv.pb")
                        .ADVEncryptionType.E2EE,
                    });
                    (V.push(h),
                      o(
                        "WAWebBizCoexUtils",
                      ).sendWamCoexPrivacySysMsgHistorySyncInsert(h));
                    break;
                  }
                  case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                    .NE2EE_SELF: {
                    if (!te) break;
                    var y = o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                      f,
                      o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                    );
                    (V.push(y),
                      o(
                        "WAWebBizCoexUtils",
                      ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                    break;
                  }
                  case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                    .NE2EE_OTHER: {
                    var C = o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeChangeNotificationMsg({
                      accountTypeChangedUser: o(
                        "WAWebUserPrefsMeUser",
                      ).getMeUserOrThrow(),
                      chatId: f,
                      newAdvAccountType: o("WAWebProtobufsAdv.pb")
                        .ADVEncryptionType.HOSTED,
                    });
                    (V.push(C),
                      o(
                        "WAWebBizCoexUtils",
                      ).sendWamCoexPrivacySysMsgHistorySyncInsert(C));
                  }
                }
              var b = o(
                  "WAWebHistorySyncNotificationCommonUtils",
                ).parseWebMsgInfoAndReturnNullOnFailure({
                  protobufChatId: m,
                  message: e.message,
                  chunkInfo: a,
                  allLidMapping: K,
                  totalMissingMapping: Q,
                  historyLidPnMappings: i,
                  dbChatId: f,
                }),
                v =
                  ((u = e.message) == null ||
                  (u = u.message) == null ||
                  (u = u.commentMessage) == null
                    ? void 0
                    : u.targetMessageKey) == null,
                S = (b == null ? void 0 : b.associationType) != null;
              if (v) {
                var R;
                (b != null &&
                  H.has(b.id.toString()) &&
                  H.delete(b == null ? void 0 : b.id.toString()),
                  (b != null &&
                    b.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                    b.ctwaContext != null) ||
                    V.push(b));
                var L =
                    (R = e.message) == null ||
                    (R = R.message) == null ||
                    (R = R.extendedTextMessage) == null ||
                    (R = R.contextInfo) == null
                      ? void 0
                      : R.externalAdReply,
                  E = b != null ? b : {},
                  k = E.from,
                  I = E.id,
                  T = E.to;
                if (
                  L != null &&
                  (I == null ? void 0 : I.fromMe) != null &&
                  k != null &&
                  T != null &&
                  o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(L)
                ) {
                  var D,
                    x = new (r("WAWebMsgKey"))({
                      fromMe: !I.fromMe,
                      remote: f,
                      id: r("WAWebMsgKey").newId_DEPRECATED(),
                    }),
                    $ = o(
                      "WAWebMsgAGMProcessing",
                    ).genHistoryAutomatedGreetingMsg({
                      msgKey: x,
                      ctwaContext: L,
                      to: k,
                      from: T,
                      msgTimestamp:
                        (D = e.message) == null ? void 0 : D.messageTimestamp,
                    });
                  V.push($);
                }
              }
              if (b != null && S) {
                var N = b.parentMsgKey.toString();
                (H.add(N), ne.push(b));
              }
              ((q = q.concat(
                o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                  webMsgInfo: e.message,
                  parsedWebMsgInfo: b,
                  isFromCag: (c = t.isDefaultSubgroup) != null ? c : !1,
                }),
              )),
                (b == null ? void 0 : b.subtype) === "biz_bot_1p_disclosure" &&
                  (re = o("WAWebBotTypes").BizBotType.BIZ_1P),
                (b == null ? void 0 : b.subtype) === "biz_bot_3p_disclosure" &&
                  (re = o("WAWebBotTypes").BizBotType.BIZ_3P),
                (b == null ? void 0 : b.subtype) ===
                  "ctwa_consumer_data_sharing_disclosure_system_message" &&
                  (oe = !0),
                (ae = o(
                  "WAWebMmSignalSharingExpirationWindowUtils",
                ).getUpdatedMmSignalSharingExpirationWindowFromHistorySync(
                  e.message,
                  ae,
                )));
            }
          }),
            ie > 0 &&
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " request welcome messages",
                  ])),
                ie,
              ),
            le > 0 &&
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                le,
              ));
          var se;
          if (H.size > 0) {
            var ue = o(
              "WAWebProcessMessageAssociationMessages",
            ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
              ne,
              H,
            );
            ue != null &&
              ue.validAssociatedMsgs &&
              (se = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                ue == null ? void 0 : ue.validAssociatedMsgs,
              ));
          }
          ((V = o(
            "WAWebApiFilterAndReplaceMessages",
          ).filterAndReplaceMessagesInitialHistorySync(V, se)),
            (V = V.reverse()));
          var ce = o(
            "WAWebLimitSharingProtoUtils",
          ).getAcp2SettingFromProtocolHistorySyncConversation(t);
          if (
            ce != null &&
            (F.set(f.toString(), ce),
            o("WAWebLimitSharingProtoUtils").shouldInjectAcp2HistorySyncNotice(
              ce,
              f,
              V,
            ))
          ) {
            var de = babelHelpers.extends(
              {},
              o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(f, ce),
              { t: Math.floor(Number(ce.settingTimestamp) / 1e3) },
            );
            V.push(de);
          }
          var me = t.contactPrimaryIdentityKey;
          if (me && r("WAWebWid").isUser(f)) {
            var pe = o("WAWebSignalCommonUtils").bufferToStr(
              o("WAWebCryptoCurve25519").toSignalCurvePubKey(me),
            );
            W.push({
              userId: o("WAWebWidFactory").asUserWidOrThrow(f),
              identityKey: pe,
            });
          }
          var _e, fe, ge;
          if (((e = t.disappearingMode) == null ? void 0 : e.initiator) != null)
            switch (t.disappearingMode.initiator) {
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .CHANGED_IN_CHAT:
                ((_e = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .ChangedInChat),
                  (fe = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .ChatSettings));
                break;
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .INITIATED_BY_ME:
                ((_e = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .InitiatedByMe),
                  (fe = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .AccountSettings),
                  (ge = !0));
                break;
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .INITIATED_BY_OTHER:
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .BIZ_UPGRADE_FB_HOSTING:
                ((_e = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .InitiatedByOther),
                  (fe = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .AccountSettings),
                  (ge = !1));
                break;
            }
          if (((n = t.disappearingMode) == null ? void 0 : n.trigger) != null) {
            var he = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTriggerFromProtobuf(
              t.disappearingMode.trigger,
            );
            he != null && (fe = he);
          }
          ((l = t.disappearingMode) == null ? void 0 : l.initiatedByMe) !=
            null && (ge = t.disappearingMode.initiatedByMe);
          var ye = t.tcToken != null && t.tcTokenTimestamp != null;
          if (o("WAWebCurrentUser").isEmployee()) {
            var Ce;
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                  ", dbChatId=",
                  ", ",
                  ", ",
                  "",
                ])),
              m,
              f,
              (Ce = p.accountLid) != null ? Ce : "n/a",
              f.isRegularUser()
                ? o("WAWebApiContact").getAlternateUserWid(
                    o("WAWebWidFactory").asUserWidOrThrow(f),
                  )
                : "n/a",
            );
          }
          var be = p.accountLid,
            ve = {
              t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                (s = t.conversationTimestamp) != null ? s : t.lastMsgTimestamp,
              ),
              accountLid: be,
              id: f,
              unreadCount: t.unreadCount,
              ephemeralDuration: t.ephemeralExpiration,
              ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
              disappearingModeInitiator: _e,
              disappearingModeTrigger: fe,
              disappearingModeInitiatedByMe: ge,
              endOfHistoryTransferType:
                (u = t.endOfHistoryTransferType) != null
                  ? u
                  : o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE,
              name: t.name,
              notSpam: t.notSpam,
              isSenderNewAccount: t.isSenderNewAccount,
              isSenderSuspicious: t.isSenderSuspicious,
              pendingInitialLoading: !1,
              unreadMentionCount: t.unreadMentionCount,
              tcToken: ye ? t.tcToken : null,
              tcTokenTimestamp: ye ? t.tcTokenTimestamp : null,
              tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
              bizBotSystemMsgType: re,
              hasCtwaConsumerDataSharingDisclosureSystemMsg: oe || void 0,
              isLocked: t.locked,
              limitSharing: o(
                "WAWebLimitSharingProtoUtils",
              ).getLimitSharingFromProtocolHistorySyncConversation(t),
              capiThreadControl: G(t.maibaAiThreadEnabled),
              historyChatId: g,
            };
          if (
            (f.isLid() && (ve.lidOriginType = z(t.lidOriginType)),
            t.archived != null && (ve.archive = t.archived),
            t.authAgentParentCompanyName != null)
          ) {
            var Se;
            ((ve.parentCompanyName = t.authAgentParentCompanyName),
              (ve.obaPhoneNumber =
                (Se = t.authAgentObaPhoneNumber) != null ? Se : ""));
          }
          ((c = ae) != null &&
            c.length &&
            (ve.mmSignalSharingExpirationWindow = o(
              "WAWebMmSignalSharingExpirationWindowUtils",
            ).getSortedMmSignalSharingExpirationWindowFromHistorySync(ae)),
            ee.push(
              o("WAWebHistorySyncNotificationUtils")
                .saveGroupMetadataForLeftGroup(t, ve.id)
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                        ])),
                    )
                    .tags("history-sync");
                }),
            ));
          var Re = f.toString(),
            Le = O.has(d);
          Le ? J++ : O.add(d);
          var Ee = Object.prototype.hasOwnProperty.call(N, Re);
          (Ee ? Z++ : Le || A.push(ve),
            (N[Re] = { chatInfo: ve, msgs: V, unifiedAddons: q }));
        },
        re;
      for (var oe of x.conversations) re = await ne(oe);
      (Y > 0 &&
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] overriding ",
              " chat ids => ",
              "",
            ])),
          Y,
          X,
        ),
        J > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] found ",
                " duplicated protobuf conversation ids during initial sync",
              ])),
            J,
          ),
        Z > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] found ",
                " duplicated db conversation ids during initial sync",
              ])),
            Z,
          ));
      for (var ae of x.accounts) {
        var ie = V(ae);
        ie && D.push(ie);
      }
      var le = o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
        a,
        B,
        A.length,
      );
      (o("WALogger")
        .LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] preprocessing completed, ",
              "",
            ])),
          le,
        )
        .tags("history-sync"),
        $.length > 0 &&
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] saving ",
                " LIDxPN mappings obtained from conversations",
              ])),
            $.length,
          ),
          await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: $,
            flushImmediately: !0,
            identityChangeHandlingEnabled: !1,
            learningSource: "history-msg-handler",
          })),
        (I.mdBootstrapMessagesCount = B),
        (I.mdBootstrapChatsCount = x.conversations.length),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: n,
          historySyncDownloadMetric: I,
          isSuccess: !0,
          startTs: a.historySyncStepStartedTs,
        }),
        r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(
          B,
          A.length,
        ));
      var se = 0,
        ue = [];
      (W.forEach(function (e) {
        var t = e.identityKey,
          n = e.userId;
        !n.isLid() &&
          o("WAWebApiContact").getCurrentLid(n) == null &&
          n.isRegularUser() &&
          se++;
        try {
          var r = o("WAWebSignalCommonUtils").createSignalAddress(n).toString();
          o("WAWebUserPrefsMeUser").isMeAccount(n)
            ? o("WAWebHistorySyncNotificationUtils")
                .checkSelfHistorySyncIdentity(r, t)
                .catch(function () {
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "[history sync] handleInitialSyncMsgs: can't save the identity key.",
                          ],
                          [
                            "[history sync] handleInitialSyncMsgs: can\\'t save the identity key.",
                          ],
                        )),
                    )
                    .sendLogs("failed-self-identity-check-from-history-sync");
                })
            : ue.push({ identifier: r, identityKey: t });
        } catch (e) {
          o("WALogger").ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "[history sync] handleInitialSyncMsgs: can't save the identity key.",
                ],
                [
                  "[history sync] handleInitialSyncMsgs: can\\'t save the identity key.",
                ],
              )),
          );
        }
      }),
        await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .bulkCreateIdentity(ue),
        se > 0 &&
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                  "",
                ])),
              se,
            )
            .sendLogs(
              "handleInitialSyncMsgs: there are Identities with missing LIDs",
              { sampling: 0.01 },
            ));
      try {
        await Promise.all(ee);
      } catch (e) {
        o("WALogger")
          .WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] handleInitialSyncMsgs: saving group metadata failed",
              ])),
          )
          .tags("history-sync");
      }
      (await o(
        "WAWebSeedBotProfilesFromHistorySync",
      ).seedBotProfilesFromHistorySync(j),
        await r("WAWebHandleAddChats")(A),
        await o("WAWebLimitSharingProtoUtils").applyAcp2HistorySyncAdoptions(F),
        await q(N, le),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          a.msgKey,
          a.syncType,
          a.chunkOrder,
        ),
        o("WALogger")
          .LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] data applied, ",
                "",
              ])),
            le,
          )
          .tags("history-sync"),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: l,
          startTs: a.historySyncStepStartedTs,
          isSuccess: !0,
          forceFlushWamBuffer: !0,
        }),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing initial sync messages complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            a,
            B,
            A.length,
          ),
        ),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] set history initial sync boundary with length ",
              "",
            ])),
          Object.keys(P).length,
        ),
        await Promise.all([
          o(
            "WAWebHistorySyncNotificationUtils",
          ).handleChatThreadLoggingMetadata(x),
          o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(P),
          x.companionMetaNonce != null
            ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                "WAWebCompanionMetaNonce",
                x.companionMetaNonce,
              )
            : null,
          H(x.nctSalt),
        ]),
        o("WAWebUserPrefsModelStorage").setInitialGroupPhash(w),
        o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(Q));
    }
    async function B(e) {
      var t = e.chunkDownloadFinishTimestamp,
        n = e.chunkInfo,
        r = e.historySyncDataAppliedMetric,
        a = e.historySyncDownloadMetric,
        i = e.proto;
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] processing history non blocking data",
          ])),
      ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: t,
          historySyncDownloadMetric: a,
          isSuccess: !0,
          startTs: n.historySyncStepStartedTs,
        }),
        i.pastParticipants != null &&
          i.pastParticipants.length > 0 &&
          (await o("WAWebHistorySyncNotificationUtils").processPastParticipants(
            i,
            n,
          )),
        i.callLogRecords != null &&
          i.callLogRecords.length > 0 &&
          (await W(i, n)),
        i.conversations != null &&
          (await o("WAWebMemberLabelHistorySync").processMemberLabels(i)),
        o("WAWebHistorySyncStickers").processRecentStickers(i, n),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: r,
          startTs: n.historySyncStepStartedTs,
          isSuccess: !0,
        }));
    }
    async function W(e, t) {
      (o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start processing call log records",
          ])),
      ),
        e.callLogRecords.sort(function (e, t) {
          var n = e.startTime,
            r = t.startTime;
          return (
            o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
            o("WATimeUtils").castToUnixTime(parseInt(r, 10))
          );
        }),
        await Promise.all(
          e.callLogRecords.map(async function (e) {
            await o(
              "WAWebVoipActionWriteCallLogSync",
            ).generateCallLogFromCallSyncRecord({
              callLogRecord: e,
              fromHistorySync: !0,
            });
          }),
        ),
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing call log records complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            t,
            e.callLogRecords.length,
          ),
        ));
    }
    function q(e, t) {
      if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
        return Promise.resolve();
      var n = { add: "last", isHistory: !0 },
        a = Object.keys(e).map(function (t) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processMultipleMessages",
            {
              chatId: o("WAWebWidFactory").createWid(t),
              msgObjs: e[t].msgs,
              meta: n,
              processMessagesOrigin: "historyMsgHandlerAction",
              chatMsgsCollection: null,
            },
          );
        });
      return Promise.all(
        [].concat(a, [
          o("WAWebDBProcessInitialHistorySyncMessage").storeInitialSyncMessages(
            e,
            t,
          ),
        ]),
      )
        .then(function () {
          var t,
            n = (t = Array.prototype).concat.apply(
              t,
              Object.keys(e).map(function (t) {
                return e[t].msgs.map(function (e) {
                  return e.id.toString();
                });
              }),
            );
          o("WAWebCheckUpdateOrphanReactions")
            .checkUpdateForOrphanReactions(n)
            .catch(function () {
              o("WALogger")
                .ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Failed update for orphan reactions",
                    ])),
                )
                .sendLogs("failed-update-for-orphan-reactions");
            });
          var r = Object.keys(e).flatMap(function (t) {
            return e[t].msgs.flatMap(function (e) {
              var t;
              return ((t = e.threadIds) != null ? t : []).map(function (e) {
                return e.toString();
              });
            });
          });
          return o("WAWebSyncdOrphan").checkOrphanMutations(
            n,
            Object.keys(e),
            r,
          );
        })
        .then(function () {
          return o(
            "WAWebDBDrainBotOrphansForHistoryMsgs",
          ).drainBotOrphansForHistoryMsgs(
            Object.keys(e).flatMap(function (t) {
              return e[t].msgs;
            }),
          );
        })
        .then(function () {
          var t;
          return Promise.all(
            (t = Array.prototype).concat.apply(
              t,
              Object.keys(e).map(function (t) {
                return e[t].unifiedAddons;
              }),
            ),
          ).then(function (e) {
            var t;
            return o("WAWebAddonProcessMsgs").processHistoryMsgs(
              (t = []).concat.apply(t, e),
            );
          });
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").LogoutDrop,
            r("WAWebNoop"),
          ),
        )
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] error occurred",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(
              "msg_handler for MD: error storing/processing multiple messages",
            );
        });
    }
    function U(e, t) {
      if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(e))
        return { result: "not-needed" };
      if (t.accountLid != null) {
        var n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid);
        return { result: "extracted", accountLid: n };
      }
      return e.isLid()
        ? { result: "extracted", accountLid: e }
        : (o("WALogger")
            .ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: Migrated account not sending accountLid for a PN chat in history sync",
                ])),
            )
            .sendLogs("missing-account-lid-in-history-sync"),
          { result: "skip-chat" });
    }
    function V(e) {
      var t = e.lid,
        n = e.username,
        a = e.countryCode;
      if (!(t == null || (n == null && a == null))) {
        var i = o("WAWebWidFactory").createUserWidOrThrow(t),
          l;
        if (
          (a != null &&
            ((l = o("WAWebAsISOCountryCode").asISOCountryCode(a)),
            !l &&
              o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .WARN(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] invalid country code retrieved",
                    ])),
                )
                .sendLogs("invalid-country-code-for-username-history-sync", {
                  sampling: 0.01,
                })),
          n != null)
        )
          try {
            var s = {
              userId: i,
              username: o("WAWebUsernameTypes").asUsername(n),
            };
            return (l != null && (s.usernameCountryCode = l), s);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleInitialSyncMsgs: invalid username received.",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("invalid-username-history-sync"),
              l != null ? { userId: i, usernameCountryCode: l } : null
            );
          }
        else if (l != null) return { userId: i, usernameCountryCode: l };
      }
    }
    function H(e) {
      return e != null
        ? (o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Stored NCT salt, size=",
                " bytes",
              ])),
            e.byteLength,
          ),
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            "WAWebNctSalt",
            o("WABase64").encodeB64(e),
          ))
        : null;
    }
    function G(e) {
      return e === !0
        ? o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN
        : e === !1 || e === void 0
          ? o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .UNKNOWN
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function z(e) {
      if (e != null) {
        var t = o("WAWebUsernameTypes").LidOriginType.cast(e);
        return t == null
          ? (o("WALogger")
              .ERROR(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: invalid lidOriginType received.",
                  ])),
              )
              .sendLogs(
                "handleInitialSyncMsgs: invalid lidOriginType received: " + e,
              ),
            o("WAWebUsernameTypes").LidOriginType.GENERAL)
          : t === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
              o(
                "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
              ).hasPhoneNumberHidingThreadPromotionMigrationStarted()
            ? (o("WALogger")
                .WARN(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleInitialSyncMsgs: overriding PNH_CTWA to GENERAL post-migration",
                    ])),
                )
                .sendLogs(
                  "handleInitialSyncMsgs: overriding PNH_CTWA lidOriginType to GENERAL post-migration",
                ),
              o("WAWebUsernameTypes").LidOriginType.GENERAL)
            : t;
      }
      return o("WAWebUsernameTypes").LidOriginType.GENERAL;
    }
    ((l.handleInitialSyncMsgs = O),
      (l.handleNonBlockingData = B),
      (l.getUsernameUpdate = V),
      (l.storeNctSaltFromHistorySync = H),
      (l.getCapiThreadControlForHistorySync = G),
      (l.determineLidOriginTypeForHistorySync = z));
  },
  98,
);
