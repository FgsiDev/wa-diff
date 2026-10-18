__d(
  "WAWebMexUsersGetUsername",
  [
    "WAWebABProps",
    "WAWebApiContactUsernameFields",
    "WAWebMexUsync",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t =
          o("WAWebABProps").getABPropConfigValue(
            "username_antiscraping_send_cached_un",
          ) === !0
            ? await o(
                "WAWebApiContactUsernameFields",
              ).bulkGetContactToUsernameInfoMap([].concat(e))
            : null,
        n = e.map(function (e) {
          var n,
            r = o("WAWebUsernameTypes").serializeMaybeUsername(
              t == null || (n = t.get(e.toJid())) == null ? void 0 : n.username,
            );
          return babelHelpers.extends(
            { jid: e.toJid() },
            r != null ? { client_known_username: r } : null,
          );
        }),
        r = await o("WAWebMexUsync").mexUsyncQuery({
          users: n,
          telemetry: { context: "INTERACTIVE" },
          fetch: { username: !0 },
        }),
        a = r.response;
      if (a != null) {
        var i = new Map();
        for (var l of a) {
          var s;
          i.set(
            l.jid,
            l.username_info == null
              ? { error: !0, username: null }
              : {
                  username: o("WAWebUsernameTypes").asMaybeUsername(
                    (s = l.username_info) == null ? void 0 : s.username,
                  ),
                },
          );
        }
        return e.map(function (e) {
          var t;
          return (t = i.get(e.toJid())) != null
            ? t
            : { error: !0, username: null };
        });
      }
    }
    async function s(t) {
      var n,
        r = await e([t]);
      return (n = r == null ? void 0 : r[0]) != null
        ? n
        : { username: null, error: !0 };
    }
    ((l.getMexUsersUsername = e), (l.getMexUserUsername = s));
  },
  98,
);
