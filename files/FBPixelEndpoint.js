__d(
  "FBPixelEndpoint",
  ["invariant", "FBEventsParamList", "FBEventsUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "https://www.facebook.com/tr/",
      u = location.href,
      c = window.top !== window,
      d = document.referrer;
    function m(e, t, n, o) {
      o === void 0 && (o = {});
      var a = new (r("FBEventsParamList"))();
      (a.append("id", e),
        a.append("ev", t),
        a.append("dl", u),
        a.append("rl", d),
        a.append("if", c),
        a.append("ts", new Date().valueOf()),
        a.append("cd", n),
        a.append("sw", window.screen.width),
        a.append("sh", window.screen.height));
      for (var i in o) a.append(i, o[i]);
      return a;
    }
    function p(t, n, r, o) {
      var a = m(t, n, r, o),
        i = a.toQueryString();
      2048 > (e + "?" + i).length ? _(e, i) : f(e, a);
    }
    function _(e, t) {
      var n = new Image();
      n.src = e + "?" + t;
    }
    function f(e, t) {
      var n,
        r = "fb" + Math.random().toString().replace(".", ""),
        a = document.createElement("form");
      ((a.method = "post"),
        (a.action = e),
        (a.target = r),
        (a.acceptCharset = "utf-8"),
        (a.style.display = "none"));
      var i = !!(window.attachEvent && !window.addEventListener),
        l = i ? '<iframe name="' + r + '">' : "iframe",
        u = document.createElement(l);
      (u instanceof HTMLIFrameElement || s(0, 20659),
        (u.src = "javascript:false"),
        (u.id = r),
        (u.name = r),
        a.appendChild(u),
        o("FBEventsUtils").listenOnce(u, "load", function () {
          (t.each(function (e, t) {
            var n = document.createElement("input");
            ((n.name = e), (n.value = t), a.appendChild(n));
          }),
            o("FBEventsUtils").listenOnce(u, "load", function () {
              var e;
              (e = a.parentNode) == null || e.removeChild(a);
            }),
            a.submit());
        }),
        (n = document.body) == null || n.appendChild(a));
    }
    l.sendEvent = p;
  },
  98,
);
