__d(
  "adsDraftIsRecoverableError",
  ["errorCode", "GraphAPICore"],
  function (t, n, r, o, a, i, l, s) {
    var e = new Set([33, 1945016, 1945015, 1945014, 1815296, 2490482]);
    function u(t) {
      if (t.code === 1 && t.error_subcode === 1357045) return !1;
      if (r("GraphAPICore").isRecoverableError(t)) return !0;
      if (t.code === 100) {
        var n = t.error_subcode;
        return !e.has(n);
      }
      return !(
        (t.code === 801 && t.error_subcode === 1945023) ||
        (t.code === 200 && t.error_subcode == null) ||
        (t.code === 200 && t.error_subcode === 4289001) ||
        (t.code === 368 && t.error_subcode === 1390008) ||
        (t.code === 1 &&
          t.message != null &&
          t.message.includes("due to malformed syntax"))
      );
    }
    l.default = u;
  },
  98,
);
