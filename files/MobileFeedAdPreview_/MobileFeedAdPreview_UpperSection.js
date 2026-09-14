__d(
  "MobileFeedAdPreview_UpperSection",
  ["MobileFeedAdPreview_HeaderCard.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.data,
        a = n == null ? void 0 : n.copyrightBlockMessage;
      if (a == null) return null;
      var i;
      return (
        t[0] !== a
          ? ((i = s.jsx(
              r("MobileFeedAdPreview_HeaderCard.react"),
              { copyrightBlockMessage: a },
              "copyright-block-message",
            )),
            (t[0] = a),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    l.default = u;
  },
  98,
);
