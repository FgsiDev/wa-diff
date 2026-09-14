__d(
  "AdsGenAIMapKeyUtils",
  [
    "AdsCreativeGenAIConstants",
    "AdsMetadataBrandKitGetColorCacheKey",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .filter(function (e) {
          return !r("isStringNullOrEmpty")(e);
        })
        .join(o("AdsCreativeGenAIConstants").MEDIA_VARIATIONS_KEY_SPLITTER);
    }
    function s(t, n, r, o) {
      var a = [];
      return (
        t !== "" &&
          (a.push(t),
          n.type !== "automatic" &&
            (a.push(n.fontName), n.textStyle != null && a.push(n.textStyle))),
        r !== "" && a.push(r),
        a.push(o),
        e(a)
      );
    }
    function u(t, n, r) {
      if (t === "") return "";
      if (n.type === "automatic") return t;
      var o = [t, n.fontName];
      return (n.textStyle != null && o.push(n.textStyle), o.push(r), e(o));
    }
    function c(e, t, n, o) {
      var a = Array.from(
          new Set(
            e
              .filter(Boolean)
              .filter(function (e) {
                return e.text !== "";
              })
              .map(function (e) {
                return e.text;
              }),
          ),
        ),
        i = Array.from(
          new Set(
            n
              .map(function (e) {
                return e.hash;
              })
              .filter(Boolean),
          ),
        ),
        l = [];
      if (i.length === 0 && a.length === 0) return l;
      (i.length === 0 && (i = [""]), a.length === 0 && (a = [""]));
      for (var u of a)
        for (var c of i) {
          var d = s(u, t, c, r("AdsMetadataBrandKitGetColorCacheKey")(o));
          l.push(d);
        }
      return l;
    }
    ((l.getMediaVariationsMapOverlayKey = s),
      (l.getMediaVariationsMapKey = u),
      (l.generateAllMediaVariationsMapKeys = c));
  },
  98,
);
