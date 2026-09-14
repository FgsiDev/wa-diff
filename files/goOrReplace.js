__d(
  "goOrReplace",
  ["Env", "URI", "isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, o) {
      var a = new (e || (e = r("URI")))(n);
      (s || (s = r("Env"))).isCQuick &&
        r("isFacebookURI")(a) &&
        a.addQueryData({
          cquick: (s || (s = r("Env"))).iframeKey,
          cquick_token: s.iframeToken,
          ctarget: s.iframeTarget,
        });
      var i = a.toString();
      o ? t.replace(i) : t.href == i ? t.reload() : (t.href = i);
    }
    l.default = u;
  },
  98,
);
