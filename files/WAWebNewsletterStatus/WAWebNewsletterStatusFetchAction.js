__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBGetReactions",
    "WAWebDBMessageDelete",
    "WAWebDBMessageUtils",
    "WAWebJidToWid",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetStatusMyReactionsJob",
    "WAWebNewsletterGetStatusesJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterReactionCollection",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = n("$InternalEnum").Mirrored([
        "NewStatuses",
        "NoNewStatuses",
        "FetchFailed",
      ]);
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (m || (m = n("Promise"))).all([
              h(e),
              C(e).catch(o("WAWebNullFunc").returnNull),
            ]),
            a = t[0],
            i = t[1];
          return (
            i != null &&
              (yield v(i, e).catch(r("WAWebNoop")),
              yield R(i, e).catch(r("WAWebNoop"))),
            a
          );
        })),
        f.apply(this, arguments)
      );
    }
    var g = new Map();
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = g.get(e);
          if (t != null) return t;
          var n = E(e);
          g.set(e, n);
          try {
            return yield n;
          } finally {
            g.delete(e);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebStatusGatingUtils",
          ).isChannelStatusLikesSendEnabledNoExposure()
            ? o(
                "WAWebNewsletterGetStatusMyReactionsJob",
              ).fetchNewsletterStatusMyReactions(e)
            : null;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.length !== 0)
            try {
              var r = yield o(
                "WAWebNewsletterDBUtils",
              ).bulkGetMessagesByServerIds(
                t.map(function (e) {
                  return e.serverId;
                }),
                n,
                o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus,
              );
              for (var a of t) {
                var i = a.reactionText,
                  l = a.serverId,
                  s = r.get(l);
                s != null &&
                  o("WAWebNewsletterReactionCollection")
                    .NewsletterMessageReactionsCollection.gadd({ id: s.id })
                    .updateMyReaction(i);
              }
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status][my-reactions] hydrate failed",
                    ])),
                )
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-my-reactions-hydrate-failed");
            }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebStatusCollection").StatusCollection.get(
            o("WAWebJidToWid").jidWithTypeToWid({
              jidType: "newsletter",
              newsletterJid: t,
            }),
          );
          if (n != null) {
            var r = new Set(
                e.map(function (e) {
                  return e.serverId;
                }),
              ),
              a = new Map();
            for (var i of n.msgs.toArray()) {
              var l = i.serverId;
              l != null &&
                !r.has(l) &&
                a.set(
                  o("WAWebNewsletterDBUtils")
                    .craftNewsletterMsgKeyFromServerId(l, t)
                    .toString(),
                  i,
                );
            }
            if (a.size !== 0)
              try {
                var u = yield o(
                    "WAWebDBGetReactions",
                  ).getAllReactionsFromParentMsgs(Array.from(a.keys())),
                  c = u
                    .filter(function (e) {
                      return (
                        e.reactionText !==
                          o("WAWebDBGetReactions").REVOKED_REACTION_TEXT &&
                        a.has(e.parentMsgKey)
                      );
                    })
                    .map(function (e) {
                      return e.parentMsgKey;
                    });
                if (c.length === 0) return;
                var d = o("WATimeUtils").unixTimeMs(),
                  m = o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid();
                yield o(
                  "WAWebDBCreateOrUpdateReactions",
                ).createOrUpdateReactions(
                  c.map(function (e) {
                    return {
                      parentMsgKey: e,
                      senderUserJid: m,
                      reactionText: o("WAWebDBGetReactions")
                        .REVOKED_REACTION_TEXT,
                      timestamp: d,
                      orphan: 0,
                      msgKey: e,
                    };
                  }),
                );
                for (var p of c) {
                  var _ = a.get(p);
                  _ != null &&
                    o("WAWebNewsletterReactionCollection")
                      .NewsletterMessageReactionsCollection.gadd({ id: _.id })
                      .updateMyReaction(
                        o("WAWebDBGetReactions").REVOKED_REACTION_TEXT,
                      );
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status][my-reactions] reconcile failed",
                      ])),
                  )
                  .tags("newsletter", "status")
                  .sendLogs("newsletter-status-my-reactions-reconcile-failed");
              }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
              r("WAWebNewsletterMetadataCollection") == null ||
                (t = r("WAWebNewsletterMetadataCollection").get(e)) == null
                ? void 0
                : t.membershipType,
            );
          try {
            var a,
              i,
              l = yield o(
                "WAWebNewsletterGetStatusesJob",
              ).getNewsletterStatuses(e, n, {}),
              s = l.from,
              d = l.msgs,
              m = l.reactionCounts,
              _ = l.revokedServerIds,
              f = l.viewCounts;
            if (
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] fetched ",
                    " statuses for ",
                    "",
                  ])),
                String(d.length),
                e,
              ),
              yield I(s, _ != null ? _ : []),
              d.length === 0)
            )
              return N(s, e);
            yield D({
              from: s,
              msgs: d,
              viewCounts: f,
              reactionCounts: m,
              isFullFetch: !0,
            });
            var g =
                (a =
                  r("WAWebNewsletterMetadataCollection") == null ||
                  (i = r("WAWebNewsletterMetadataCollection").get(e)) == null ||
                  (i = i.statusMetadata) == null
                    ? void 0
                    : i.lastStatusServerId) != null
                  ? a
                  : 0,
              h = Math.max(
                o("WAWebNewsletterStatusProcessingUtils").computeMaxServerId(d),
                g,
              );
            return (
              h > 0 &&
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(e, h),
              p.NewStatuses
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to fetch statuses for ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-fetch-failed"),
              p.FetchFailed
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length !== 0) {
            var n = o("WAWebStatusCollection").StatusCollection.get(e);
            if (n != null) {
              var r = new Set(t),
                a = n.msgs.filter(function (e) {
                  return e.serverId != null && r.has(e.serverId);
                });
              a.length !== 0 &&
                (n.revokeMsgs(
                  a.map(function (e) {
                    return e.id.toString();
                  }),
                ),
                yield o("WAWebDBMessageDelete").removeStatusMessage(a));
            }
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.isFullFetch,
            r = e.msgs,
            a = e.reactionCounts,
            i = e.viewCounts;
          yield o(
            "WAWebNewsletterStatusProcessingUtils",
          ).addAndPersistStatusMessages(t, r);
          var l = r.map(function (e) {
              return e.id;
            }),
            s = o(
              "WAWebNewsletterStatusProcessingUtils",
            ).prepareReactionsForPersist(l, a, o("WATimeUtils").unixTime()),
            u = s.reactionIdsToRemove,
            c = s.reactions;
          if (
            (i.size > 0
              ? (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).persistNewsletterStatusInteractions({
                  ids: l,
                  reactionIdsToRemove: u,
                  reactions: c,
                  timestamp: Date.now(),
                  viewCounts: i,
                }),
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).updateStatusViewCounts(t, r, i),
                yield o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
                  ids: l,
                  reactionIdsToRemove: u,
                  reactions: c,
                }))
              : c.length > 0 &&
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] reactions w/o view counts, skip persist",
                      ])),
                  )
                  .sendLogs("newsletter-status-reactions-no-viewcounts"),
            n)
          ) {
            var m = o("WAWebStatusCollection").StatusCollection.get(t);
            m != null && (yield $(m));
          }
          o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          e.msgs.forEach(function (e) {
            return t.push(e.id.toString());
          });
          var n = yield o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).getNewsletterMsgAckValues(t);
          e.msgs.forEach(function (e, t) {
            var r = n[t];
            r != null && r >= o("WAWebAck").ACK.READ && e.set({ ack: r });
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      var n,
        a = o("WAWebStatusCollection").StatusCollection.get(e);
      a != null && o("WAWebStatusCollection").StatusCollection.remove(a);
      var i =
          r("WAWebNewsletterMetadataCollection") == null
            ? void 0
            : r("WAWebNewsletterMetadataCollection").get(t),
        l =
          i == null || (n = i.statusMetadata) == null
            ? void 0
            : n.lastStatusServerId;
      return (
        l != null &&
          o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
            t,
            l,
          ),
        p.NoNewStatuses
      );
    }
    ((l.FetchResult = p),
      (l.fetchNewsletterStatusesAndMyReactions = _),
      (l.fetchNewsletterStatuses = h),
      (l.fetchMyStatusReactions = C),
      (l.hydrateMyStatusReactions = v),
      (l.reconcileMyStatusReactions = R));
  },
  98,
);
