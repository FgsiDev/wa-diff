__d(
  "WAWebStartupResourcesPrefetch",
  ["WALogger", "WAWebWindowsQueryParams", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [].concat(o("WAWebWindowsQueryParams").WINDOWS_QUERY_PARAMS, [
        "locale",
      ]),
      c = 3,
      d = null;
    function m(e) {
      return (
        d == null &&
          (d = p(e).finally(function () {
            d = null;
          })),
        d
      );
    }
    async function p(t) {
      if (!navigator.onLine) return null;
      try {
        var n = await _(t),
          a = n.noCorsUrls,
          i = n.rev,
          l = n.urls,
          u = await h(l);
        return (
          await Promise.all(a.map(C)),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[startup-resources-prefetch] rev ",
                ": ",
                " files (",
                " bytes), ",
                " without CORS",
              ])),
            i,
            l.length,
            u,
            a.length,
          ),
          i
        );
      } catch (e) {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[startup-resources-prefetch] failed: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          null
        );
      }
    }
    async function _(e) {
      var t = new URL("/static_resources.json", self.location.origin);
      e != null && t.searchParams.set("rev", String(e));
      var n = new URLSearchParams(self.location.search);
      for (var o of u) {
        var a = n.get(o);
        a != null && t.searchParams.set(o, a);
      }
      var i = await self.fetch(t.toString(), { cache: "no-store" });
      if (!i.ok) throw r("err")("startup resources: HTTP " + i.status);
      return f(await i.json());
    }
    function f(e) {
      if (e == null || typeof e != "object")
        throw r("err")("startup resources: not an object");
      var t = e.noCorsUrls,
        n = e.rev,
        o = e.urls;
      if (typeof n != "number")
        throw r("err")("startup resources: unexpected rev");
      return { rev: n, urls: g(o), noCorsUrls: g(t) };
    }
    function g(e) {
      if (!Array.isArray(e))
        throw r("err")("startup resources: unexpected urls");
      var t = [];
      for (var n of e) {
        if (typeof n != "string")
          throw r("err")("startup resources: unexpected url");
        t.push(n);
      }
      return t;
    }
    async function h(e) {
      var t = 0,
        n = 0,
        r = !1,
        o = async function () {
          if (!(r || t >= e.length)) {
            var a = e[t++];
            try {
              n += await y(a);
            } catch (e) {
              throw ((r = !0), e);
            }
            await o();
          }
        },
        a = Math.min(c, e.length);
      return (await Promise.all(Array.from({ length: a }, o)), n);
    }
    async function y(e) {
      var t = await self.fetch(e, { mode: "cors", priority: "low" });
      if (!t.ok) throw r("err")(e + ": HTTP " + t.status);
      return (await t.arrayBuffer()).byteLength;
    }
    async function C(e) {
      await self.fetch(e, {
        mode: "no-cors",
        credentials: "include",
        priority: "low",
      });
    }
    l.prefetchStartupResources = m;
  },
  98,
);
