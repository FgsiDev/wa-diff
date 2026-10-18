__d(
  "WAWebRequestBotProfiles",
  [
    "WALogger",
    "WAWebBotProfileCategory",
    "WAWebBotTypes",
    "WAWebFetchBotProfilesGQL",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      return e.length === 0 ? [] : c(e);
    }
    async function c(t) {
      var n = d(t);
      if (n.length === 0)
        return Promise.reject(r("err")("no status data returned for user"));
      var a = n.map(function (e) {
          return e.fbid;
        }),
        i;
      try {
        i = await o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(a);
      } catch (t) {
        throw (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestBotProfiles] GQL fetch threw",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bot-profile-gql-fetch-exception"),
          t
        );
      }
      if (i.type !== "success")
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestBotProfiles] GQL fetch failed",
                ])),
            )
            .sendLogs("bot-profile-gql-fetch-failed"),
          i.type === "graphql-error"
            ? i.error
            : r("err")("bot profile GQL fetch failed")
        );
      var l = m(n, i.value);
      return l.length === 0
        ? Promise.reject(r("err")("no status data returned for user"))
        : l;
    }
    function d(e) {
      var t = [];
      for (var n of e) {
        var r = f(n.id, n.personaId);
        r != null &&
          r !== "" &&
          t.push({ fbid: r, id: n.id, isDefault: n.isDefault });
      }
      return t;
    }
    function m(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.personaId, e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = n.get(o.fbid);
        a != null &&
          r.push(p({ gqlProfile: a, isDefault: o.isDefault, wid: o.id }));
      }
      return r;
    }
    function p(e) {
      var t = e.gqlProfile,
        n = e.isDefault,
        r = e.wid;
      return {
        id: r,
        name: t.name,
        attrs: "",
        description: t.description,
        category: o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
        isDefault: n,
        prompts: t.prompts.map(function (e) {
          return { emoji: "", text: e };
        }),
        personaId: t.personaId,
        commands: [],
        commandsDescription: "",
        isMetaCreated: t.isMetaCreated,
        creatorName: t.creatorName,
        creatorProfileUrl: t.creatorProfileUrl,
        lastUpdateTs: Date.now(),
        posingAsProfessional: _(t.posingAsProfessional),
      };
    }
    function _(e) {
      return e == null
        ? null
        : (function (e) {
            if (e === "yes")
              return o("WAWebBotTypes").BotPosingAsProfessionalType.YES;
            if (e === "no")
              return o("WAWebBotTypes").BotPosingAsProfessionalType.NO;
            {
              var t = e;
              return o("WAWebBotTypes").BotPosingAsProfessionalType.UNKNOWN;
            }
          })(e.toLowerCase());
    }
    function f(e, t) {
      if (t != null && t !== "") {
        var n = t.indexOf("$"),
          r = n === -1 ? t : t.substring(0, n);
        return r !== "" ? r : null;
      }
      return e.isFbidBot() ? e.user : null;
    }
    l.requestBotProfiles = u;
  },
  98,
);
