__d(
  "FXLinkingUtils",
  ["ConstUriUtils", "appendPersistQueryParamsToUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "fx_ig_web_linking_plain_token";
    function s(e, t, n, a) {
      var i,
        l,
        s,
        u = o("ConstUriUtils").getUri(e),
        c = (function () {
          return n === "next" || n === "destination_url"
            ? String(u == null ? void 0 : u.getQueryParam(n))
            : n === "extra_data"
              ? r("appendPersistQueryParamsToUrl")(
                  String(u == null ? void 0 : u.getQueryParam(n)),
                )
              : null;
        })();
      if (c == null) return null;
      var d =
        (i = o("ConstUriUtils").getUri(c)) == null ||
        (i = i.setPath("/add/")) == null ||
        (i = i.addQueryParam("background_page", a != null ? a : t)) == null
          ? void 0
          : i.toString();
      if (d == null) return null;
      var m = u == null ? void 0 : u.addQueryParam(String(n), d);
      if (
        n !== "extra_data" ||
        String(m == null ? void 0 : m.getQueryParam("is_from_fb")) !== "1"
      )
        return m == null ? void 0 : m.toString();
      var p = m == null ? void 0 : m.getQueryParam("next");
      if (typeof p != "string") return null;
      var _ =
        (l = o("ConstUriUtils").getUri(p)) == null ||
        (l = l.addQueryParam("extra_data", d)) == null
          ? void 0
          : l.toString();
      return _ == null
        ? null
        : m == null || (s = m.addQueryParam("next", _)) == null
          ? void 0
          : s.toString();
    }
    ((l.PLAIN_TOKEN = e), (l.getWebAuthURLWithURLPath = s));
  },
  98,
);
