__d(
  "WAWebSocketLogoutStorageUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebFtsClient",
    "WAWebFtsStorage",
    "WAWebJobsStorage",
    "WAWebLruMediaStorageUtils",
    "WAWebModelStorage",
    "WAWebOffdStorage",
    "WAWebQplStorage",
    "WAWebWorkerStorage",
    "cr:10201",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebLabyrinthDebugStorage").__setRef(
        "WAWebSocketLogoutStorageUtils",
      );
    async function u() {
      var e = [
        o("WAWebModelStorage").destroy(),
        o("WAWebLruMediaStorageUtils").destroyStorage(),
      ];
      (e.push(o("WAWebFtsStorage").destroy()),
        e.push(o("WAWebOffdStorage").destroy()),
        e.push(o("WAWebJobsStorage").destroy()),
        e.push(o("WAWebQplStorage").destroy()),
        e.push(o("WAWebFtsClient").ftsClient.clearInitializationPromises()),
        e.push(o("WAWebFtsClient").ftsClient.destroyExternalStorage()),
        r("gkx")("23871") && e.push(c()),
        e.push(o("WAWebWorkerStorage").destroy()),
        await Promise.all(e));
    }
    async function c() {
      try {
        var t = await s.load(),
          n = t.destroy;
        await n();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "destroyStorage: loading Labyrinth debug storage failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("labyrinth-debug-storage-load-failed");
      }
    }
    l.destroyStorage = u;
  },
  98,
);
