__d(
  "adsFormatErrorMessage",
  ["AdsManagerErrorUtils", "FBLogger", "FbtResultBase", "cr:242"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = !1);
      var a = e;
      e = e || {};
      var i = e.error_user_msg || e.message || "Unknown error",
        l = [];
      if (
        (i instanceof r("FbtResultBase") && (i = i.toString()),
        typeof i != "string")
      ) {
        var s, u, c, d, m, p, _, f;
        r("FBLogger")("ads_format_error_message").mustfix(
          "Non-string message passed to adsFormatErrorMessage: type=%s, constructor=%s, errorCode=%s, errorKey=%s, errorSubcode=%s",
          typeof i,
          (s =
            (u = i) == null || (u = u.constructor) == null ? void 0 : u.name) !=
            null
            ? s
            : "unknown",
          (c = (d = e) == null ? void 0 : d.code) != null ? c : "none",
          (m = (p = e) == null ? void 0 : p.key) != null ? m : "none",
          (_ = (f = e) == null ? void 0 : f.error_subcode) != null ? _ : "none",
        );
      }
      if (
        (e.code && !i.includes(e.code) && l.push(e.code),
        e.key && !i.includes(e.key) && l.push(e.key),
        e.error_subcode &&
          !i.includes(e.error_subcode) &&
          l.push(e.error_subcode),
        n("cr:242"))
      ) {
        var g,
          h =
            (g = o("AdsManagerErrorUtils").getOpesMIDs(a, !0)) == null
              ? void 0
              : g[0];
        if (h != null) {
          var y = n("cr:242").getLogviewMessage(h);
          l.push(y);
        }
      }
      return l.length === 0
        ? i
        : t
          ? "(#" + l.join(".") + ")"
          : i + " (#" + l.join(".") + ")";
    }
    l.default = e;
  },
  98,
);
