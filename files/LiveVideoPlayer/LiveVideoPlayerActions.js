__d(
  "LiveVideoPlayerActions",
  ["LiveVideoPlayerDispatcher"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = { type: "SET_IS_REWOUND", isRewound: t, vpc: e };
      r("LiveVideoPlayerDispatcher").dispatch(n);
    }
    function s(e) {
      var t = { type: "DISMISS_REWIND_COMMENT_OVERLAY", playerID: e };
      r("LiveVideoPlayerDispatcher").dispatch(t);
    }
    ((l.setIsRewound = e), (l.dismissRewindCommentOverlay = s));
  },
  98,
);
