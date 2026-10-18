__d(
  "WAWebPersistBotProfiles",
  [
    "WAWebBotProfileCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["commands", "id", "prompts"],
      s = ["name"];
    async function u(t) {
      (await o("WAWebSchemaBotProfile")
        .getBotProfileTable()
        .bulkCreateOrMerge(
          t.map(function (t) {
            var n = t.commands,
              r = t.id,
              o = t.prompts,
              a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return babelHelpers.extends(
              {
                id: r.toString(),
                prompts: JSON.stringify(o),
                commands: JSON.stringify(n),
              },
              a,
            );
          }),
        ),
        t.forEach(function (e) {
          return o("WAWebBotProfileCollection").BotProfileCollection.gadd(
            babelHelpers.extends({ id: e.id }, e),
          );
        }));
    }
    function c(e, t, n) {
      var r = n != null && n !== "" ? n : null,
        a = t != null && t !== "" ? t : null,
        i = r != null ? r : a;
      if (i == null) return null;
      var l = a != null ? a : i;
      if (d(e, i, l)) return null;
      var s = Date.now();
      return (
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e)
          .set({
            eurl: i,
            previewEurl: l,
            previewDirectPath: null,
            fullDirectPath: null,
            filehash: null,
            tag: "bot",
            stale: !1,
            timestamp: s,
          }),
        {
          id: e.toString(),
          eurl: i,
          previewEurl: l,
          previewDirectPath: null,
          fullDirectPath: null,
          filehash: null,
          tag: "bot",
          timestamp: s,
        }
      );
    }
    function d(e, t, n) {
      var r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
        e,
      );
      return (
        r != null &&
        r.eurl === t &&
        r.previewEurl === n &&
        r.previewDirectPath == null &&
        r.fullDirectPath == null &&
        r.filehash == null
      );
    }
    async function m(e, t) {
      return p([{ fields: t, wid: e }]);
    }
    async function p(e) {
      if (e.length !== 0) {
        var t = e.map(function (e) {
          var t = e.fields,
            n = e.wid;
          return { fields: _(t), wid: n };
        });
        (await o("WAWebSchemaBotProfile")
          .getBotProfileTable()
          .bulkCreateOrMerge(
            t.map(function (e) {
              var t = e.fields,
                n = e.wid;
              return babelHelpers.extends({ id: n.toString() }, t);
            }),
          ),
          t.forEach(function (e) {
            var t = e.fields,
              n = e.wid;
            return o("WAWebBotProfileCollection").BotProfileCollection.gadd(
              babelHelpers.extends({ id: n }, t),
            );
          }));
      }
    }
    function _(e) {
      var t = e.name,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return t != null && t !== ""
        ? babelHelpers.extends({}, n, { name: t })
        : n;
    }
    function f(e) {
      return e != null && (e.name != null || e.lastFetchedTimeMs != null);
    }
    async function g(e) {
      return f(
        await o("WAWebSchemaBotProfile").getBotProfileTable().get(e.toString()),
      );
    }
    ((l.persistBotProfiles = u),
      (l.setBotProfilePicUrls = c),
      (l.mergeBotSupportFields = m),
      (l.mergeBotSupportFieldsBatch = p),
      (l.isStoredBotProfile = f),
      (l.hasStoredBotProfile = g));
  },
  98,
);
