__d(
  "MobileFeedAdPreview_AttachmentSection",
  [
    "MobileFeedAdPreview_Attachment.react",
    "err",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.attachmentsData,
        a = e.customVideoRenderer,
        i = e.miscData;
      if (n.length > 1)
        throw r("err")(
          "Mirage currently doesn't support stories with more than one attachment.",
        );
      var l;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        var u;
        (t[4] !== a || t[5] !== i
          ? ((u = function (t, n) {
              return s.createElement(
                r("MobileFeedAdPreview_Attachment.react"),
                babelHelpers.extends({ customVideoRenderer: a }, t, i, {
                  key: "attachment-" + n,
                }),
              );
            }),
            (t[4] = a),
            (t[5] = i),
            (t[6] = u))
          : (u = t[6]),
          (l = n.map(u)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l));
      } else l = t[3];
      var c = l,
        d;
      return (
        t[7] !== c
          ? ((d = s.jsx(s.Fragment, { children: c })), (t[7] = c), (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    l.default = u;
  },
  98,
);
