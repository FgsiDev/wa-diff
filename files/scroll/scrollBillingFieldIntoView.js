__d(
  "scrollBillingFieldIntoView",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      if (e != null) {
        var n = (t = e.ownerDocument) == null ? void 0 : t.defaultView;
        if (n != null) {
          for (var r = e.parentElement; r != null; ) {
            var o = n.getComputedStyle(r),
              a = o.overflowY;
            if (
              (a === "auto" || a === "scroll") &&
              r.scrollHeight > r.clientHeight
            )
              break;
            r = r.parentElement;
          }
          if (r == null) {
            e.scrollIntoView({ block: "center", inline: "nearest" });
            return;
          }
          var i = e.getBoundingClientRect(),
            l = r.getBoundingClientRect();
          r.scrollTop += i.top - l.top - (r.clientHeight - i.height) / 2;
        }
      }
    }
    i.default = e;
  },
  66,
);
