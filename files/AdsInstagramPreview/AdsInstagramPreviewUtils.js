__d(
  "AdsInstagramPreviewUtils",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = c(0),
        r = n[0],
        a = n[1],
        i;
      t[0] !== e
        ? ((i = function () {
            return a(function (t) {
              return t + 1 > e ? 0 : t + 1;
            });
          }),
          (t[0] = e),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      t[2] !== e
        ? ((s = function () {
            return a(function (t) {
              return t - 1 < 0 ? e : t - 1;
            });
          }),
          (t[2] = e),
          (t[3] = s))
        : (s = t[3]);
      var u = s,
        d;
      return (
        t[4] !== r || t[5] !== l || t[6] !== u
          ? ((d = { currentIndex: r, goToNextIndex: l, goToPrevIndex: u }),
            (t[4] = r),
            (t[5] = l),
            (t[6] = u),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function m(e) {
      return (
        e !== "MESSAGE_PAGE" && e !== "REMIND_ME" && e !== "WHATSAPP_MESSAGE"
      );
    }
    ((l.useEditableIndex = d), (l.isDestinationLinkRequiredForCTAType = m));
  },
  98,
);
