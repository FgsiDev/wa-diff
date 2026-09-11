__d(
  "CometShortenedExternalUrlEntityRenderer",
  [
    "CometShortenedExternalUrlEntityRenderer_entity.graphql",
    "cr:2169",
    "cr:3118",
    "cr:3119",
    "cr:3258",
    "cr:3749",
    "externalUrlDisplayTextIsUrl",
    "isValidURL",
    "memoizeStringOnly",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = r("memoizeStringOnly")(r("isValidURL")),
      d = 60;
    e !== void 0 ||
      (e = n("CometShortenedExternalUrlEntityRenderer_entity.graphql"));
    function m(e) {
      var t = e.entity,
        o = e.entityIsWholeBlock,
        a = e.node,
        i = e.originalText,
        l = t.external_url;
      if (l == null || i == null) return a;
      var s = r("externalUrlDisplayTextIsUrl")(l, i);
      if (n("cr:3749") != null && n("cr:3258") != null) {
        var m = n("cr:3258").extractDataFromGenericLinkUrl(l, i);
        if (
          m != null &&
          (m.type !== n("cr:3258").PIXELCLOUD_HTML_EMBED || o === !0)
        ) {
          var p =
            m.type === n("cr:3258").DELTOID_METRIC_MOVEMENT ||
            m.type === n("cr:3258").DELTOID_TS_METRIC_MOVEMENT;
          if (s || p)
            return u.jsx(n("cr:3749"), {
              data: m.data,
              fileId: m.fileId,
              shortCode: m.shortCode,
              type: m.type,
            });
        }
      }
      if (
        s &&
        n("cr:3118") !== null &&
        n("cr:3119") !== null &&
        n("cr:3119").isPixelcloudLink(l)
      ) {
        var _ = n("cr:3119").pixelcloudInlineLink(i);
        if (_ !== null)
          return u.jsx(n("cr:3118"), {
            location: "FEED",
            pixelcloudID: _,
            pixelcloudURL: l,
          });
      }
      if (!c(i) || !s) return a;
      var f = n("cr:2169")(l, d);
      return f.length < i.length ? f : a;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = function (t, n, r, o, a, i) {
      return u.jsx(m, {
        entity: n,
        entityIsWholeBlock: i,
        node: t,
        originalText: o,
      });
    };
    l.default = p;
  },
  98,
);
