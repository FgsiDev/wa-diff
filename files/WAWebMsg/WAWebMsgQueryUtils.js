__d(
  "WAWebMsgQueryUtils",
  [
    "WAPromiseProps",
    "WATypeUtils",
    "WAWebCollectionConstants",
    "WAWebDBGetGroupMemberUpdateMessages",
    "WAWebDBGroupAgentRichResponseLinkBackfill",
    "WAWebDBMessageFindLocal",
    "WAWebMsgCollection",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r =
          typeof t == "number" && !isNaN(t)
            ? t
            : o("WAWebCollectionConstants").PAGE_SIZE,
        a = { add: "search" },
        i = await o("WAWebDBMessageFindLocal").msgFindStarred({
          count: r,
          chat: e != null ? e : void 0,
          anchor: n,
        });
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        void 0,
        i,
        a,
        "msgCollectionGetStarred",
      );
    }
    async function s(e, t, n) {
      var r =
          typeof t == "number" && !Number.isNaN(t)
            ? t
            : o("WAWebCollectionConstants").PAGE_SIZE,
        a = { add: "search" },
        i = await o("WAWebDBMessageFindLocal").msgFindEvents({
          count: r,
          chat: e,
          anchor: n,
        });
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        void 0,
        i,
        a,
        "msgCollectionGetEvents",
      );
    }
    async function u(e, t, n) {
      var r =
          typeof t == "number" && !Number.isNaN(t)
            ? t
            : o("WAWebCollectionConstants").PAGE_SIZE,
        a = { add: "search" },
        i = await o(
          "WAWebDBGetGroupMemberUpdateMessages",
        ).getGroupMemberUpdateMessagesForChat(e, r, n);
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        void 0,
        i,
        a,
        "msgCollectionGetGroupMemberUpdates",
      );
    }
    async function c(e, t) {
      var n =
          typeof e == "number" && !isNaN(e)
            ? e
            : o("WAWebCollectionConstants").PAGE_SIZE,
        r = await o("WAWebDBMessageFindLocal").msgFindCallLog({
          count: n,
          anchor: t,
        });
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        void 0,
        r,
        { add: "search" },
        "msgCollectionGetVoipCallLogs",
      );
    }
    async function d(e) {
      var t = e.count,
        n = e.direction,
        r = e.msgKey,
        a = t != null ? t : o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
        i = n === "after" ? "after" : "before",
        l = await o("WAWebDBMessageFindLocal").getAllDocsMessages({
          chat: r == null ? void 0 : r.remote,
          count: a,
          direction: i,
          msgKey: r,
        });
      return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        void 0,
        l,
        { add: "search" },
        "msgCollectionGetAllMedia",
      );
    }
    async function m(e) {
      var t = await o(
        "WAWebDBGroupAgentRichResponseLinkBackfill",
      ).backfillGroupAgentRichResponseLinkIndex(e);
      return t.length === 0
        ? []
        : o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            t,
            { add: "search" },
            "msgCollectionQueryMedia",
          );
    }
    async function p(e, t, n, r, a) {
      var i =
          o("WATypeUtils").isNumber(t) && t !== 0
            ? t
            : o("WAWebCollectionConstants").PAGE_SIZE,
        l = n || "before",
        s = { add: "search" },
        u = await o("WAWebDBMessageFindLocal").msgFindMedia({
          count: i,
          mediaType: a,
          direction: l,
          chat: e,
          anchor: r,
        });
      return Array.isArray(u)
        ? o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            u,
            { add: "search" },
            "msgCollectionQueryMedia",
          )
        : o("WAPromiseProps").promiseProps({
            docCount: u.docCount,
            linkCount: u.linkCount,
            mediaCount: u.mediaCount,
            messages: o(
              "WAWebMsgCollection",
            ).MsgCollection.processMultipleMessages(
              void 0,
              u.messages,
              s,
              "msgCollectionQueryMedia",
            ),
          });
    }
    ((l.getStarred = e),
      (l.getEventMsgs = s),
      (l.getGroupMemberUpdateMsgs = u),
      (l.getVoipCallLogMsgs = c),
      (l.getAllDocsMsgs = d),
      (l.backfillGroupAgentRichResponseLinks = m),
      (l.queryMedia = p));
  },
  98,
);
