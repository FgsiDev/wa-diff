__d(
  "captureUsageSnapshot",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = window.__bodyWrapper;
      if (!e.getCodeUsage)
        return { js_calls: {}, document_html: "", stylesheets: {} };
      var t = babelHelpers.extends({}, e.getCodeUsage()),
        n = String(window.document.body.outerHTML),
        r = {};
      return (
        Array.from(document.styleSheets).forEach(function (e) {
          e.href && (r[e.href] = !0);
        }),
        { js_calls: t, document_html: n, stylesheets: r }
      );
    }
    i.default = e;
  },
  66,
);
