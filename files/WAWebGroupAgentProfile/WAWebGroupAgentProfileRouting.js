__d(
  "WAWebGroupAgentProfileRouting",
  [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebHatchFrontendGating",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      BASIC_CARD: "basic_card",
      OWNER_CARD: "owner_card",
    });
    function s(t, n, r) {
      var a;
      if (
        (r === void 0 && (r = m(t)),
        !p(t, n) ||
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
      )
        return null;
      var i = _(r);
      return i != null && !g(t, i)
        ? null
        : h(t, i, (a = r) == null ? void 0 : a.creatorLid)
          ? e.OWNER_CARD
          : e.BASIC_CARD;
    }
    function u(e, t) {
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return (
        (n == null ? void 0 : n.lastFetchedTimeMs) != null &&
        n.isDeleted !== !0 &&
        n.isDeprecated !== !0 &&
        s(e, t) != null
      );
    }
    function c(t, n, r) {
      var o = s(t, n);
      if (o == null) return null;
      var a = o === e.OWNER_CARD;
      return { info: a, message: a, remove: r };
    }
    function d(e) {
      return e.info || e.message || e.remove;
    }
    function m(e) {
      var t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return t == null
        ? null
        : {
            creatorLid: t.creatorLid,
            isDeleted: t.isDeleted,
            isDeprecated: t.isDeprecated,
            lastFetchedTimeMs: t.lastFetchedTimeMs,
            product: t.product,
          };
    }
    function p(e, t) {
      return t == null
        ? !1
        : o("WAWebChatGetters").getIsGroup(t) &&
            e.isFbidBot() &&
            !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function _(e) {
      return e == null || e.lastFetchedTimeMs == null
        ? null
        : o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function f(e, t) {
      return (
        t === o("WAWebBotProduct").BotProduct.MUSE ||
        (t === o("WAWebBotProduct").BotProduct.HATCH &&
          !e.equals(o("WAWebBotUtils").HATCH_BOT_FBID_WID))
      );
    }
    function g(e, t) {
      return t === o("WAWebBotProduct").BotProduct.THIRD_PARTY || f(e, t);
    }
    function h(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return (
        f(e, t) &&
        n != null &&
        r != null &&
        n === r.user &&
        o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() &&
        o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      );
    }
    ((l.GroupAgentProfileDestination = e),
      (l.getGroupAgentProfileDestination = s),
      (l.isOpenGroupAiAgent = u),
      (l.getGroupAgentParticipantActions = c),
      (l.hasGroupAgentParticipantAction = d),
      (l.isMuseGroupAgentProfileProduct = f));
  },
  98,
);
