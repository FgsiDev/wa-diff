__d(
  "WAWebMetaAiOpenGroupNux",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebCriticalEventWamEvent",
    "WAWebErrorBoundary.react",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNullFunc",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = "META_AI_OPEN_GROUP_NUX_ENTERED_GROUPS",
      m = "meta_ai_open_group_nux_missing_notice_id",
      p = null,
      _ = !1,
      f = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebMetaAiOpenGroupNuxModal.react",
        )
          .__setRef("WAWebMetaAiOpenGroupNux")
          .load();
      }, "MetaAiOpenGroupNuxModal");
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield y(e),
            yield o(
              "WAWebGroupAgentNonInitiatorNux",
            ).maybeShowGroupAgentNonInitiatorNux(e));
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, a) {
      if (p != null) return p;
      if (!b(t)) return (s || (s = n("Promise"))).resolve();
      var i = Number(o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId()),
        l = v(i, a)
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaAiOpenGroupNux] failed to show the NUX",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("meta-ai-open-group-nux-failed");
          })
          .finally(function () {
            p === l && (p = null);
          });
      return ((p = l), l);
    }
    function C(e) {
      var t = e.id.toString();
      return L().includes(t)
        ? (s || (s = n("Promise"))).resolve()
        : y(e, function () {
            return E(t);
          });
    }
    function b(e) {
      var t;
      return !e.id.isGroup() ||
        ((t = e.groupMetadata) == null ? void 0 : t.isOpenBotGroup) !== !0 ||
        !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
        ? !1
        : o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() == null
          ? (R(), !1)
          : !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice();
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (yield o("WAWebBotTos").refreshMetaAiOpenGroupNotice(),
            !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice())
          ) {
            var r = yield f();
            (yield o("WAWebModalManager").ModalManager.existsAsync()) ||
              (yield new (s || (s = n("Promise")))(function (n) {
                var a = function (t) {
                  (n(), o("WAWebModalManager").closeModalManager());
                };
                (o("WAWebModalManager").ModalManager.open(
                  c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                    fallback: o("WAWebNullFunc").returnNull,
                    name: "meta-ai-open-group-nux",
                    onError: a,
                    children: c.jsx(r, { noticeId: e, onClosed: n }),
                  }),
                ),
                  t == null || t());
              }));
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      _ ||
        ((_ = !0),
        new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
          name: m,
        }).commit());
    }
    function L() {
      var e = r("WAWebUserPrefsStore").getUser(d);
      return Array.isArray(e)
        ? e.filter(function (e) {
            return typeof e == "string";
          })
        : [];
    }
    function E(e) {
      var t = L();
      t.includes(e) || r("WAWebUserPrefsStore").setUser(d, [].concat(t, [e]));
    }
    ((l.maybeShowGroupAgentNuxes = g),
      (l.maybeShowMetaAiOpenGroupNux = y),
      (l.maybeShowMetaAiOpenGroupNuxAtFirstEntry = C),
      (l.isMetaAiOpenGroupNuxOwed = b));
  },
  98,
);
