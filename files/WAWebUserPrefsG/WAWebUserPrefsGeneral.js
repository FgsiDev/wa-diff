__d(
  "WAWebUserPrefsGeneral",
  [
    "WALogger",
    "WAWebComposeBoxPanelTypes",
    "WAWebDbUsageApiConst",
    "WAWebEnvironment",
    "WAWebEventEmitter",
    "WAWebMobilePlatformPersistence",
    "WAWebPrivacySettings",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "light",
      p = new (r("WAWebEventEmitter"))();
    function _(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME,
        e,
      );
    }
    function f() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME,
      );
      return typeof e == "string" ? e : null;
    }
    function g() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.BROWSER_ID,
      );
      return typeof e == "string" ? e : null;
    }
    function h(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.BROWSER_ID, e);
    }
    function y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_CHAT_MUTE_DURATION,
        e === Number.POSITIVE_INFINITY ? "Infinity" : e,
      );
    }
    function C() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_CHAT_MUTE_DURATION,
      );
      return e === "Infinity"
        ? Number.POSITIVE_INFINITY
        : typeof e == "number"
          ? e
          : null;
    }
    function b(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.THEME, e);
    }
    function v() {
      var e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.THEME);
      return e === "light" || e === "dark" ? e : m;
    }
    function S(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE,
        e,
      );
    }
    function R() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE,
        ) !== !1
      );
    }
    function L(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_MEDIA_EDITOR_PAINT_COLOR,
        e,
      );
    }
    function E() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_MEDIA_EDITOR_PAINT_COLOR,
      );
      return typeof e == "string" ? e : null;
    }
    function k(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL,
        e,
      );
    }
    function I() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL,
      );
      return typeof e != "string"
        ? null
        : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.cast(e);
    }
    function T(e) {
      r("WAWebUserPrefsStore").setUser(e.toString(), !0);
    }
    function D(e) {
      return r("WAWebUserPrefsStore").getUser(e.toString()) === !0;
    }
    function x(e, t, n) {
      if (e != null) {
        var r = e[0],
          o = e[1];
        if (typeof n == "string") {
          var a = o[n];
          a != null && a === n && (t[r] = a);
        }
      }
    }
    function $() {
      var e = {},
        t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
        );
      return (
        t == null ||
          typeof t != "object" ||
          (x(
            ["readReceipts", o("WAWebPrivacySettings").ALL_NONE],
            e,
            t.readReceipts,
          ),
          x(["groupAdd", o("WAWebPrivacySettings").VISIBILITY], e, t.groupAdd),
          x(
            ["profilePicture", o("WAWebPrivacySettings").VISIBILITY],
            e,
            t.profilePicture,
          ),
          x(["about", o("WAWebPrivacySettings").VISIBILITY], e, t.about),
          x(["lastSeen", o("WAWebPrivacySettings").VISIBILITY], e, t.lastSeen),
          x(
            ["online", o("WAWebPrivacySettings").ONLINE_VISIBILITY],
            e,
            t.online,
          ),
          x(["callAdd", o("WAWebPrivacySettings").CALL_ADD], e, t.callAdd),
          x(
            ["messages", o("WAWebPrivacySettings").ALL_CONTACTS],
            e,
            t.messages,
          ),
          x(
            ["defenseMode", o("WAWebPrivacySettings").DEFENSE_MODE_STATE],
            e,
            t.defenseMode,
          ),
          x(["pix", o("WAWebPrivacySettings").VISIBILITY], e, t.pix),
          e.defenseMode != null && e.defenseMode !== "off"
            ? (e.disableLinkPreviews = !0)
            : t.disableLinkPreviews != null &&
              (e.disableLinkPreviews = t.disableLinkPreviews === !0),
          t.disallowAllP2p != null &&
            (e.disallowAllP2p = t.disallowAllP2p === !0)),
        e
      );
    }
    function P(t) {
      (o("WAWebUserPrefsIndexedDBStorage")
        .userPrefsIdb.set(
          o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
          t,
        )
        .catch(function (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "setUserPrivacySettings: failed to set to indexedDB",
              ])),
          );
        }),
        p.trigger("all", t));
    }
    function N() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS,
        ) !== !1
      );
    }
    function M(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS,
        e,
      );
    }
    function w() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO,
        ) !== !1
      );
    }
    function A(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO,
        e,
      );
    }
    function F() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS,
      );
      return r("WAWebEnvironment").isWindows ? e !== !1 : e === !0;
    }
    function O(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS,
        e,
      );
    }
    function B() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS,
      );
      return r("WAWebEnvironment").isWindows ? e !== !1 : e === !0;
    }
    function W(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS,
        e,
      );
    }
    function q(e) {
      var t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR +
            "-" +
            e.toString(),
        ),
        n = {};
      return (
        t == null ||
          typeof t != "object" ||
          Object.entries(t).forEach(function (e) {
            var t = e[0],
              r = e[1];
            typeof r == "number" && (n[t] = r);
          }),
        n
      );
    }
    function U(e, t) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR + "-" + e.toString(),
        t,
      );
    }
    function V(e, t) {
      (H(e), G(t));
    }
    function H(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME,
        e,
      );
    }
    function G(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE, e);
    }
    function z() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME,
      );
      return {
        volume: typeof e == "number" ? e : null,
        muted:
          r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE,
          ) === !0,
      };
    }
    var j = 1;
    function K() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
      );
      return typeof e != "number"
        ? j
        : e === 1 || e === 2
          ? e
          : Math.abs(e - 1.5) < Number.EPSILON
            ? 1.5
            : j;
    }
    function Q(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
        e,
      );
    }
    function X() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
      );
      return typeof e == "number" ? e : null;
    }
    function Y() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
        Date.now(),
      );
    }
    function J() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function Z() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
        Date.now(),
      );
    }
    function ee(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_TOOLTIP_VIEWED_IN_SESSION,
        e,
      );
    }
    function te(e) {
      return (e.toString() || "").replace("@", "_");
    }
    function ne(e) {
      if (
        e.some(function (e) {
          return e.endsWith("_");
        })
      ) {
        var t = e.map(function (e) {
          return e.replace(/_$/, "").replace("@", "_");
        });
        return (
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            t,
          ),
          t
        );
      }
      return e;
    }
    function re(e) {
      var t = te(e),
        n =
          r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
          ) || [];
      if (!Array.isArray(n))
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "markUserSentMessageToChat: store value not array",
              ])),
          ),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            [t],
          ),
          !1
        );
      n = ne(n);
      var a = !n.includes(t);
      return (
        a &&
          (n.push(t),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            n,
          )),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "UserPrefs:markUserSentMessageToChat",
            ])),
        ),
        a
      );
    }
    function oe(e) {
      var t =
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
        ) || [];
      if (!Array.isArray(t)) {
        (o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "removeUserSentMessageToChat: store value not array",
            ])),
        ),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            [],
          ));
        return;
      }
      t = ne(t);
      var n = te(e);
      (t.includes(n) &&
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
          t.filter(function (e) {
            return e !== n;
          }),
        ),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "UserPrefs:removeUserSentMessageToChat",
            ])),
        ));
    }
    function ae() {
      ie();
    }
    function ie() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.DAILY_STATS_START_TIME,
      );
      if (typeof e == "number") return e;
      var t = Date.now();
      return (
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.DAILY_STATS_START_TIME,
          t,
        ),
        t
      );
    }
    function le() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
      );
      return typeof e == "string" ? e : null;
    }
    function se(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
        e,
      );
    }
    function ue() {
      if (!r("gkx")("26258")) {
        var e = { lowQuotaDismissed: !1, highQuotaDismissed: !1 },
          t = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE,
          );
        if (typeof t != "string") return e;
        var n;
        try {
          n = JSON.parse(t);
        } catch (t) {
          return e;
        }
        return n == null || typeof n != "object"
          ? e
          : {
              lowQuotaDismissed: n.lowQuotaDismissed === !0,
              highQuotaDismissed: n.highQuotaDismissed === !0,
            };
      }
      return { lowQuotaDismissed: !0, highQuotaDismissed: !0 };
    }
    function ce(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE,
          JSON.stringify(e),
        );
    }
    function de() {
      if (!r("gkx")("26258")) {
        var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG,
        );
        if (typeof e == "string") {
          var t;
          return (t = o("WAWebDbUsageApiConst").StorageAlertType.cast(e)) !=
            null
            ? t
            : o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT;
        }
      }
      return o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT;
    }
    function me(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG,
          e,
        );
    }
    function pe() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID,
      );
      if (e == null || typeof e != "object") return null;
      var t = e.ts,
        n = e.value;
      return typeof t != "number" || typeof n != "string"
        ? null
        : { ts: t, value: n };
    }
    function _e(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID,
        e,
      );
    }
    function fe() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
      );
      return !!e;
    }
    function ge(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
        e,
      );
    }
    function he() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
      );
      return !!e;
    }
    function ye(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
        e,
      );
    }
    function Ce() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
      );
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
              e,
            ));
        })),
        ve.apply(this, arguments)
      );
    }
    function Se() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
      )) != null
        ? e
        : 0;
    }
    function Re() {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Se(),
            t = Math.pow(2, 31) - 1,
            n = e >= t ? 0 : e + 1;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
            n,
          );
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee() {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
            0,
          );
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
      );
    }
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
            e,
          );
        })),
        De.apply(this, arguments)
      );
    }
    function xe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP,
      );
    }
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PUSH_COMPLETE_TIMESTAMP,
            e,
          );
        })),
        Pe.apply(this, arguments)
      );
    }
    function Ne() {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PUSH_COMPLETE_TIMESTAMP,
          );
        })),
        Me.apply(this, arguments)
      );
    }
    function we() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
      );
    }
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
            e,
          );
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_L10N_CONTENT,
      );
    }
    function Be(e) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .OFFLINE_NOTIFICATION_L10N_CONTENT,
            e,
          );
        })),
        We.apply(this, arguments)
      );
    }
    function qe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function Ue(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function Ve() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function He() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function Ge(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function ze() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function je() {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            "WABrigadingState",
          );
        })),
        Ke.apply(this, arguments)
      );
    }
    function Qe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
            e,
          );
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function Ze(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
        e,
      );
    }
    function et() {
      var e = [],
        t = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS,
        );
      if (typeof t != "string") return e;
      try {
        var n;
        return (n = JSON.parse(t)) != null ? n : e;
      } catch (t) {
        return e;
      }
    }
    function tt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS,
        JSON.stringify(e),
      );
    }
    function nt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
      );
      return typeof e == "number" ? e : null;
    }
    function rt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function ot(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function at() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function it(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function lt() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        ) === !0
      );
    }
    function st() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        !0,
      );
    }
    function ut() {
      return !!r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
      );
    }
    function ct(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
        e,
      );
    }
    function dt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        e,
      );
    }
    function mt() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        ) === !0
      );
    }
    function pt(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
        e,
      );
    }
    function _t() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
      );
      return typeof e == "number" ? String(e) : typeof e == "string" ? e : null;
    }
    function ft() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        ) === !0
      );
    }
    function gt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        e,
      );
    }
    function ht() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE,
      );
      return typeof e == "string" ? e : null;
    }
    function yt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE,
        e,
      );
    }
    ((l.privacySettingsEventEmitter = p),
      (l.setPushname = _),
      (l.getPushname = f),
      (l.getBrowserId = g),
      (l.setBrowserId = h),
      (l.getLastMobilePlatform = o(
        "WAWebMobilePlatformPersistence",
      ).getLastMobilePlatform),
      (l.setLastMobilePlatform = o(
        "WAWebMobilePlatformPersistence",
      ).setLastMobilePlatform),
      (l.setLastChatMuteDuration = y),
      (l.getLastChatMuteDuration = C),
      (l.setTheme = b),
      (l.getTheme = v),
      (l.setSystemThemeMode = S),
      (l.getSystemThemeMode = R),
      (l.setLastMediaEditorPaintColor = L),
      (l.getLastMediaEditorPaintColor = E),
      (l.setLastComposeBoxExpressionPanel = k),
      (l.getLastComposeBoxExpressionPanel = I),
      (l.setSeenGroupDesc = T),
      (l.getSeenGroupDesc = D),
      (l.applyPrivacySetting = x),
      (l.getUserPrivacySettings = $),
      (l.setUserPrivacySettings = P),
      (l.getAutoDownloadPhotos = N),
      (l.setAutoDownloadPhotos = M),
      (l.getAutoDownloadAudio = w),
      (l.setAutoDownloadAudio = A),
      (l.getAutoDownloadVideos = F),
      (l.setAutoDownloadVideos = O),
      (l.getAutoDownloadDocuments = B),
      (l.setAutoDownloadDocuments = W),
      (l.getGroupParticipantAssignedColor = q),
      (l.setGroupParticipantAssignedColor = U),
      (l.setMediaVolumeSettings = V),
      (l.setMediaVolumeSetting = H),
      (l.setMediaMutedSetting = G),
      (l.getMediaVolumeSettings = z),
      (l.DEFAULT_PTT_PLAYBACK_RATE = j),
      (l.getPttPlaybackRate = K),
      (l.setPttPlaybackRate = Q),
      (l.getLastStatusUsage = X),
      (l.setLastStatusUsage = Y),
      (l.getLastNewsletterStatusBackfillTimestamp = J),
      (l.setLastNewsletterStatusBackfillTimestamp = Z),
      (l.setPostcodeTooltipViewedInSession = ee),
      (l.markUserSentMessageToChat = re),
      (l.removeUserSentMessageToChat = oe),
      (l.initDailyStatsStartTime = ae),
      (l.getDailyStatsStartTime = ie),
      (l.getPsKillSwitchToken = le),
      (l.setPsKillSwitchToken = se),
      (l.getStorageDismissState = ue),
      (l.setStorageDismissState = ce),
      (l.getStorageAlert = de),
      (l.setStorageAlert = me),
      (l.getPersistentExpiringId = pe),
      (l.setPersistentExpiringId = _e),
      (l.getWhatsAppWebExternalBetaJoinedIdb = fe),
      (l.setWhatsAppWebExternalBetaJoinedIdb = ge),
      (l.getWhatsAppWebExternalBetaDirtyBitIdb = he),
      (l.setWhatsAppWebExternalBetaDirtyBitIdb = ye),
      (l.getAppVersionBase = Ce),
      (l.setAppVersionBase = be),
      (l.getLoginCounter = Se),
      (l.incrementLoginCounter = Re),
      (l.resetLoginCounter = Ee),
      (l.getOfflinePushCount = Ie),
      (l.setOfflinePushCount = Te),
      (l.getLastPushCompleteTimestamp = xe),
      (l.setLastPushCompleteTimestamp = $e),
      (l.clearLastPushCompleteTimestamp = Ne),
      (l.getOfflinePushDisabled = we),
      (l.setOfflinePushDisabled = Ae),
      (l.getOfflineNotificationContent = Oe),
      (l.setOfflineNotificationContent = Be),
      (l.getOfflineNotificationEngagement = qe),
      (l.setOfflineNotificationContentEngagement = Ue),
      (l.clearOfflineNotificationContentEngagement = Ve),
      (l.getNotificationEngagement = He),
      (l.setNotificationContentEngagement = Ge),
      (l.clearNotificationContentEngagement = ze),
      (l.clearBrigadingstate = je),
      (l.getLogoutReason = Qe),
      (l.setLogoutReason = Xe),
      (l.getLastProfilePicThumbUpdate = Je),
      (l.setLastProfilePicThumbUpdate = Ze),
      (l.getWamBeaconingSettings = et),
      (l.setWamBeaconingSettings = tt),
      (l.getCTWADataSharingCoolOffTimestamp = nt),
      (l.getCTWADataSharingDisclosureShownCount = rt),
      (l.setCTWADataSharingDisclosureShownCount = ot),
      (l.getCTWADataSharingOptOutDisclosureShownCount = at),
      (l.setCTWADataSharingOptOutDisclosureShownCount = it),
      (l.getCTWADataSharingV2DisclosureSeen = lt),
      (l.setCTWADataSharingV2DisclosureSeen = st),
      (l.getCTWAMessageReceived = ut),
      (l.setCTWAMessageReceived = ct),
      (l.setGPCcompleted = dt),
      (l.getGPCCompleted = mt),
      (l.setDebugFacebookGraphQLEndpointOverride = pt),
      (l.getDebugFacebookGraphQLEndpointOverride = _t),
      (l.getDetectedOutcomeOnboardingStatus = ft),
      (l.setDetectedOutcomeOnboardingStatus = gt),
      (l.getLastUsedAdAccountType = ht),
      (l.setLastUsedAdAccountType = yt));
  },
  98,
);
