__d(
  "WAWebBotTos",
  [
    "WAComms",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWebBotGating",
    "WAWebBotTosIds",
    "WAWebBotTypes",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebSetUserNoticeStageJob",
    "WAWebTos",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "BIZ_BOT_TOS_DISMISSED_AT",
      u = {
        minTimeout: 1e3,
        maxTimeout: 4e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      c = 3e4,
      d = 3e3,
      m = 3e4;
    function p() {
      var e;
      return (e = o("WAWebBotGating").getNonBlockingBotNoticeIds()) == null
        ? void 0
        : e.some(function (e) {
            return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
          });
    }
    function _() {
      return f() || B() || W();
    }
    function f() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function g(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(oe(e));
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = oe(e);
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
            t.some(function (e) {
              return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
            }) && (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        y.apply(this, arguments)
      );
    }
    var C = null;
    function b() {
      return (
        C != null ||
          (C = v().finally(function () {
            C = null;
          })),
        C
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
            !(e.length === 0 || F(e)) && (yield M(e)));
        })),
        S.apply(this, arguments)
      );
    }
    var R = null,
      L = null;
    function E() {
      return (
        R != null ||
          (R = k().finally(function () {
            R = null;
          })),
        R
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
          e == null ||
            D() ||
            T() ||
            ((L = o("WATimeUtils").monotonicTime()), yield M([e]));
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return L != null && o("WATimeUtils").monotonicTimeSince(L) < m;
    }
    function D() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      return e == null
        ? !0
        : (o("WAWebTos").TosManager.registerDisclosureNoticeIds([e]),
          o("WAWebTos").TosManager.getState(e) === "ACCEPTED");
    }
    function x() {
      return o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() != null && D();
    }
    function $() {
      return P(E, x);
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              t(),
              d,
              "Group notice refresh timed out",
            );
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Group notice refresh before confirmation failed: ",
                    "",
                  ])),
                String(t),
              ),
              !1
            );
          }
          return n();
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            a = yield o("WAExponentialBackoff").exponentialBackoff(
              u,
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    try {
                      yield o("WAPromiseTimeout").promiseTimeout(
                        o("WAComms").waitForConnection(),
                        c,
                        "waitForConnection timed out",
                      );
                      var a = yield o(
                        "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
                      ).sendGetDisclosureStageByIdsRPC({
                        getDisclosureStageByIdArgs: e.map(function (e) {
                          return {
                            getDisclosureStageByIdId: Number(e),
                            getDisclosureStageByIdT: t,
                          };
                        }),
                      });
                      if (
                        a.name !==
                        "GetDisclosureStageByIdsResponseClientSuccess"
                      )
                        throw r("err")(
                          "Group notice stage query failed: " + a.name,
                        );
                      return a;
                    } catch (e) {
                      return n(e instanceof Error ? e : r("err")(String(e)));
                    }
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            );
          a.value.notice
            .filter(function (t) {
              return (
                e.includes(String(t.id)) &&
                (t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED ||
                  t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK)
              );
            })
            .forEach(function (e) {
              o("WAWebTos").TosManager.setState(String(e.id), "ACCEPTED", t);
            });
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e), F(e));
    }
    function F(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
        })
      );
    }
    function O(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = ae(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function B() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function W() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function q() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function U(e) {
      if (
        (e === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebBotGating").isBizBotConsentRequired()) ||
        V()
      )
        return !0;
      var t = r("WAWebUserPrefsStore").getUser(s);
      if (typeof t != "number") return !1;
      var n = o("WAWebBotGating").bizBotConsentDismissalCooldown();
      return n < 0 ? !0 : n === 0 ? !1 : o("WATimeUtils").unixTime() - t < n;
    }
    function V() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield J(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield J(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield J(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      r("WAWebUserPrefsStore").setUser(s, e);
    }
    function te(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function ne(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function re(e) {
      if (te(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function oe(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = ae(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function ae(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS = d),
      (l.META_AI_OPEN_GROUP_NOTICE_REFRESH_COOLDOWN_MS = m),
      (l.hasAcceptedNonBlockingBotTos = p),
      (l.hasSeenBotTos = _),
      (l.hasSeenAgentTos = f),
      (l.registerBotTosRequirements = g),
      (l.refreshBotTosRequirements = h),
      (l.refreshMuseGroupTosNotices = b),
      (l.refreshMetaAiOpenGroupNotice = E),
      (l.hasAcceptedMetaAiOpenGroupNotice = D),
      (l.hasConfirmedMetaAiOpenGroupNoticeAcceptance = x),
      (l.refreshAndConfirmMetaAiOpenGroupNoticeAcceptance = $),
      (l.hasAcceptedMuseGroupTos = A),
      (l.hasAcceptedBlockingBotTos = O),
      (l.hasSeenInvokeTos = B),
      (l.hasSeenShortcutTos = W),
      (l.hasSeenMasterBotTos = q),
      (l.hasSeenBizBotTos = U),
      (l.hasAcceptedBizBotTos = V),
      (l.markSeenAgentTos = H),
      (l.markSeenInvokeTos = z),
      (l.markSeenShortcutTos = K),
      (l.acceptBizBotTos = X),
      (l.setBizBotTosDismissalTime = ee),
      (l.isNonBlockingBotNotice = te),
      (l.isMasterBotTosNotice = ne),
      (l.canShowBotTos = re));
  },
  98,
);
