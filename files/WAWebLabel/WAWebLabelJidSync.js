__d(
  "WAWebLabelJidSync",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCTWAAeDetectionGating",
    "WAWebContactSystemMsg",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDetectedOutcomeLabelConstants",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebListItemParentType",
    "WAWebMsgType",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamLabelSyncTrackingReporter",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = r("JSResourceForInteraction")(
        "WAWebLabelAssociationModelMetadata",
      ).__setRef("WAWebLabelJidSync");
    async function m(e) {
      var t = e.associationId,
        n = e.chatExists,
        a = e.isDetectedOutcome,
        i = e.labelCollectionAddition,
        l = e.labelId,
        s = e.modelMetaData,
        u = e.predefinedId,
        c = e.queuedEmissions,
        m = e.wid;
      if (
        !(
          !n ||
          u == null ||
          !a ||
          r("WAWebSyncBootstrap").isSyncDBootstrapInProcess() ||
          !o("WAWebABProps").getABPropConfigValue(
            "ctwa_3pd_conversion_on_ae_detection",
          )
        )
      ) {
        var p = JSON.stringify([l, m]);
        if (
          !c.has(p) &&
          (c.add(p),
          (await o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .get([
              l,
              t,
              o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
            ])) == null)
        ) {
          var _ =
            u === o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID;
          if (
            s == null ||
            !o(
              "WAWebCTWAAeDetectionGating",
            ).isCtwaAeModelMetadataIngestionEnabled()
          ) {
            i.detectedOutcomeSignalEmission = { lead: _ };
            return;
          }
          var f = await d.load(),
            g = f.parseLabelAssociationModelMetadata,
            h = g(s);
          i.detectedOutcomeSignalEmission =
            h.length === 0
              ? { lead: _ }
              : {
                  lead: _,
                  metadata: JSON.stringify(
                    _ ? { ae_model_data: h } : { paid: !1, ae_model_data: h },
                  ),
                };
        }
      }
    }
    function p(t) {
      var n = t.direction,
        a = t.isLabeled,
        i = t.jid,
        l = t.labelId,
        s = t.predefinedId,
        u = t.result,
        c = t.timestampMs;
      o("WAWebWamLabelSyncTrackingReporter")
        .generateLabelJidHash(l, i)
        .then(function (e) {
          o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(
            e,
            o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM
              .LABEL_JID,
            n,
            u,
            a,
            c,
            void 0,
            s,
          );
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to log label JID sync WAM event",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("label-jid-sync-wam-error");
        });
    }
    function _(e, t) {
      (t ===
        o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
          .FAILED_ORPHANED &&
        e.labeled &&
        o("WAWebWamLabelSyncTrackingReporter").recordDeferredLabelAssociation(
          e.labelId,
          { chatJid: e.jid, isLabeled: e.labeled, timestampMs: e.timestampMs },
        ),
        p({
          direction: o("WAWebWamLabelSyncTrackingReporter")
            .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
          isLabeled: e.labeled,
          jid: e.jid,
          labelId: e.labelId,
          predefinedId: e.predefinedId,
          result: t,
          timestampMs: e.timestampMs,
        }));
    }
    function f(e) {
      (e.labeled ||
        o("WAWebWamLabelSyncTrackingReporter").removeDeferredLabelAssociation(
          e.labelId,
          e.jid,
        ),
        _(
          e,
          e.isOrphaned
            ? o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .FAILED_ORPHANED
            : o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE
                .SUCCESS,
        ));
    }
    var g = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.chatJidIndex = 2),
            (t.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION;
          }),
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelJid;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = new Map(),
              a = [],
              i = [],
              l = [],
              d = [],
              g = [],
              h = new Set(),
              y = 0,
              C = 0,
              b = await Promise.all(
                t.map(async function (t) {
                  try {
                    if (t.operation === "set") {
                      var u,
                        c,
                        _ = t.indexParts,
                        f = t.value,
                        b = _[1],
                        v = _[2];
                      if (!b || !v) return e.malformedActionIndex();
                      var S =
                        (u = f.labelAssociationAction) == null
                          ? void 0
                          : u.labeled;
                      if (S == null)
                        return (
                          y++,
                          p({
                            direction: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            isLabeled: !1,
                            jid: v,
                            labelId: b,
                            result: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_RESULT_TYPE.FAILED_MISSING_ACTION,
                            timestampMs: Date.now(),
                          }),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            e.collectionName,
                          )
                        );
                      var R =
                        (c = f.labelAssociationAction) == null
                          ? void 0
                          : c.modelMetaData;
                      if (!r("WAWebWid").isWid(v))
                        return (
                          p({
                            direction: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_DIRECTION_TYPE.RECEIVER,
                            isLabeled: S,
                            jid: v,
                            labelId: b,
                            result: o("WAWebWamLabelSyncTrackingReporter")
                              .LABEL_SYNC_RESULT_TYPE.FAILED_INVALID_JID,
                            timestampMs: Date.now(),
                          }),
                          e.malformedActionIndex()
                        );
                      var L = o("WAWebWidFactory").createWid(v),
                        E =
                          await o(
                            "WAWebSyncdGetChat",
                          ).resolveChatForMutationIndex(L);
                      if (E.success === !0)
                        L = o("WAWebWidFactory").createWid(E.chat.id);
                      else if (
                        (E.success,
                        o(
                          "WAWebLid1X1MigrationGating",
                        ).Lid1X1MigrationUtils.isLidMigrated() && L.isLid())
                      ) {
                        var k = o("WAWebApiContact").getPhoneNumber(L);
                        k != null && (L = k);
                      }
                      var I = L.toString(),
                        T = {
                          labelId: b,
                          associationId: I,
                          type: o("WAWebSchemaLabelAssociation")
                            .LabelAssociationType.Jid,
                        },
                        D = null,
                        x = !1;
                      if (S) {
                        var $,
                          P = await o("WAWebSchemaLabel")
                            .getLabelTable()
                            .get(b);
                        ((D = P == null ? void 0 : P.predefinedId),
                          (x = P == null));
                        var N =
                            D ===
                              o("WAWebDetectedOutcomeLabelConstants")
                                .DO_NEW_ORDER_PREDEFINED_ID ||
                            D ===
                              o("WAWebDetectedOutcomeLabelConstants")
                                .DO_LEAD_PREDEFINED_ID,
                          M = n.has(I);
                        if (!M) {
                          var w = await o("WAWebSchemaChat")
                            .getChatTable()
                            .get(I, !1);
                          w &&
                            (n.set(
                              I,
                              o(
                                "WAWebLid1X1MigrationGating",
                              ).Lid1X1MigrationUtils.isLidMigrated() &&
                                w.accountLid != null
                                ? w.accountLid
                                : I,
                            ),
                            (M = !0));
                        }
                        a.push(T);
                        var A = {
                          parentId: I,
                          labels: [b],
                          parentType:
                            M || !L.isUser()
                              ? o("WAWebListItemParentType").LabelItemParentType
                                  .Chat
                              : o("WAWebListItemParentType").LabelItemParentType
                                  .Contact,
                        };
                        if (
                          (l.push(A),
                          D != null &&
                            o(
                              "WAWebUserPrefsGeneral",
                            ).getDetectedOutcomeOnboardingStatus() &&
                            N)
                        ) {
                          var F = o("WAWebContactSystemMsg").genNotificationMsg(
                            L,
                            {
                              type: "notification_template",
                              kind: o("WAWebMsgType").MsgKind
                                .NotificationTemplate,
                              subtype:
                                "biz_automatically_labeled_chat_system_message",
                              templateParams: [D.toString()],
                            },
                          );
                          await o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: L,
                            newMsg: F,
                            handleSingleMsgOrigin:
                              "detectedOutcomeNotification",
                            preserveOrder: !1,
                          });
                        }
                        await m({
                          associationId: ($ = n.get(I)) != null ? $ : I,
                          chatExists: M,
                          isDetectedOutcome: N,
                          labelCollectionAddition: A,
                          labelId: b,
                          modelMetaData: R,
                          predefinedId: D,
                          queuedEmissions: h,
                          wid: I,
                        });
                      } else
                        (i.push(
                          o(
                            "WAWebSchemaLabelAssociation",
                          ).createLabelAssociationPrimaryKey(T),
                        ),
                          d.push({
                            parentId: I,
                            labelId: b,
                            parentType: o("WAWebListItemParentType")
                              .LabelItemParentType.Chat,
                          }));
                      return (
                        g.push({
                          labelId: b,
                          jid: v,
                          labeled: S,
                          isOrphaned: x,
                          predefinedId: D,
                          timestampMs: Date.now(),
                        }),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      C++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return (
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to apply label JID sync mutation",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("label-jid-sync-apply-error"),
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Failed,
                      }
                    );
                  }
                }),
              );
            (y > 0 &&
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "label jid sync: ",
                    " malformed mutations",
                  ])),
                y,
              ),
              C > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "label jid sync: ",
                      " unsupported operations",
                    ])),
                  C,
                ));
            var v = g.filter(function (e) {
                return !e.labeled;
              }),
              S = g.filter(function (e) {
                return e.labeled;
              });
            try {
              await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).removeLabelAssociations(i);
            } catch (e) {
              throw (
                v.forEach(function (e) {
                  _(
                    e,
                    o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                  );
                }),
                e
              );
            }
            try {
              await o(
                "WAWebDBLabelAssociationDatabaseApi",
              ).mergeReceivedLabelAssociations(a);
            } catch (e) {
              throw (
                v.forEach(f),
                S.forEach(function (e) {
                  _(
                    e,
                    o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_RESULT_TYPE.FAILED_DB_UPDATE,
                  );
                }),
                e
              );
            }
            return (
              g.forEach(f),
              (d.length > 0 || l.length > 0) &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "applyLabelAssociationChanges",
                  { removals: d, additions: l },
                ),
              b
            );
          }),
          (n.createLabelAssociationMutations = async function (t, n) {
            var e = this,
              r = o("WATimeUtils").unixTimeMs(),
              a = [];
            t.forEach(function (t) {
              var i = t.id,
                l = t.type;
              n.forEach(function (t) {
                var n = t.mutationIndexSegments,
                  s = { labelAssociationAction: { labeled: l === "add" } };
                a.push({
                  timestamp: r,
                  collection: e.collectionName,
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  indexArgs: [i].concat(n),
                  version: o("WAWebSyncdConst").LABEL_ASSOCIATION_SYNC_VERSION,
                  value: s,
                  action: o("WAWebSyncdConst").Actions.LabelJid,
                });
              });
            });
            var i = await Promise.all(
              a.map(async function (e) {
                var t = e.indexArgs,
                  n = t[0],
                  r = babelHelpers.arrayLikeToArray(t).slice(1),
                  a = await Promise.all(
                    r.map(async function (e) {
                      var t = o("WAWebWidFactory").createWid(e);
                      return o("WAWebSyncdGetChat").getWidMutationIndexForWid(
                        t,
                      );
                    }),
                  );
                return babelHelpers.extends({}, e, {
                  indexArgs: [n].concat(a),
                });
              }),
            );
            for (var l of i)
              if (l.action === o("WAWebSyncdConst").Actions.LabelJid) {
                var s = l.indexArgs,
                  u = s[0],
                  c = babelHelpers.arrayLikeToArray(s).slice(1),
                  d = c[0];
                if (u != null && d != null) {
                  var m;
                  p({
                    direction: o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_DIRECTION_TYPE.SENDER,
                    isLabeled:
                      ((m = l.value.labelAssociationAction) == null
                        ? void 0
                        : m.labeled) === !0,
                    jid: d,
                    labelId: u,
                    result: o("WAWebWamLabelSyncTrackingReporter")
                      .LABEL_SYNC_RESULT_TYPE.SUCCESS,
                    timestampMs: r,
                  });
                }
              }
            return i.map(o("WAWebSyncdActionUtils").buildPendingMutation);
          }),
          t
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      h = new g();
    l.default = h;
  },
  98,
);
