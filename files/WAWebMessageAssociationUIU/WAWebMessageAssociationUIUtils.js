__d(
  "WAWebMessageAssociationUIUtils",
  [
    "WAWebFrontendMsgGetters",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("WAWebMsgType").MSG_TYPE.ALBUM,
      o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
    ]);
    function s(t, n, r) {
      return r && e.has(n)
        ? Math.min.apply(
            Math,
            [t].concat(
              r.map(function (e) {
                var t = e.ack;
                return t;
              }),
            ),
          )
        : t;
    }
    function u(e, t) {
      return (
        t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT),
        m(o("WAWebMsgCollection").MsgCollection.byParentMessage(e), t)
      );
    }
    async function c(e, t) {
      var n = Array.from(new Set(t)),
        r = n.filter(function (e) {
          return o("WAWebMsgCollection").MsgCollection.get(e) == null;
        });
      r.length > 0 &&
        (await o("WAWebMsgCollection").MsgCollection.getMessagesById(r));
      var a = new Map(
          o("WAWebMsgCollection")
            .MsgCollection.byParentMessage(e)
            .map(function (e) {
              return [e.id.toString(), e];
            }),
        ),
        i = [];
      return (
        n.forEach(function (e) {
          var t = a.get(e);
          t != null && i.push(t);
        }),
        i
      );
    }
    function d(e, t) {
      return (
        t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT),
        o("WAWebMsgCollection")
          .MsgCollection.byChat(e)
          .filter(function (e) {
            var n = e.viewMode;
            return !o("WAWebViewModeUtils").isViewModeVisibleInSurface(t, n);
          })
      );
    }
    function m(e, t) {
      return e.filter(function (e) {
        var n = e.associationType,
          r = e.parentMsgKey,
          a = e.pendingDeleteForMe,
          i = e.viewMode;
        return (
          n != null &&
          r != null &&
          !a &&
          !o("WAWebViewModeUtils").isViewModeVisibleInSurface(t, i)
        );
      });
    }
    function p(e) {
      var t = e.duringDetach,
        n = t === void 0 ? !1 : t,
        r = e.parentMsgKey,
        o = n ? 1 : 0;
      return u(r).length - o > 0;
    }
    function _(e) {
      var t = e.duringDetach,
        n = t === void 0 ? !1 : t,
        r = e.parentMsg;
      switch (r.type) {
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION: {
          var a = o("WAWebFrontendMsgGetters").getAsPollCreation(r);
          return a == null
            ? !0
            : a.pollContentType ===
                o("WAWebPollCreationUtils").PollContentType.IMAGE &&
                u(r.id).length !== a.pollOptions.length;
        }
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
        default:
          return !p({ parentMsgKey: r.id, duringDetach: n });
      }
    }
    function f(e) {
      var t = e.associationType;
      if (!t) return !0;
      var n = e.parentMsgKey
        ? o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey)
        : null;
      e: return t ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
        ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            !_({ parentMsg: n })
        : t ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM
          ? n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.ALBUM &&
            !_({ parentMsg: n })
          : !0;
    }
    function g(e) {
      e.filter(Boolean).forEach(function (e) {
        var t = e.parentMsgKey,
          n = e.viewMode;
        if (
          t &&
          !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
            o("WAWebViewMode.flow").ViewModeSurface.CHAT,
            n,
          )
        ) {
          var r,
            a = o("WAWebMsgCollection").MsgCollection.get(t);
          a &&
            (r = o("WAWebInvisiblePlaceholderViewModeProcessor")
              .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) !=
              null &&
            r.includes(a.type) &&
            !_({ parentMsg: a, duringDetach: !1 }) &&
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              a == null ? void 0 : a.viewMode,
            ) &&
            a.set("viewMode", o("WAWebViewMode.flow").ViewModeType.VISIBLE);
        }
      });
    }
    ((l.getLowestAckState = s),
      (l.getHiddenAssociatedMessages = u),
      (l.getAssociatedMessagesByMsgKeys = c),
      (l.getHiddenViewModeMessagesForChat = d),
      (l.filterOutVisibleAssociatedMessages = m),
      (l.shouldHideParentMessage = _),
      (l.shouldDisplayOrphanMessage = f),
      (l.makeParentMessagesVisibleInChat = g));
  },
  98,
);
