__d(
  "VideoLiveIconUtil",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "DEFAULT",
        "POST_SELECTION_MODAL",
        "POST_CONFIRMED_PREVIEW",
      ]),
      s = "x127erq4-B",
      u = {
        defaultLiveIcon: {
          animationDirection: "xpz12be",
          animationDuration: "xof6966",
          animationIterationCount: "xa4qsjk",
          animationName: "x12ugbrb",
          animationTimingFunction: "xkewf8z",
          backgroundColor: "xla8ptc",
          borderStartStartRadius: "xjwep3j",
          borderStartEndRadius: "x1t39747",
          borderEndEndRadius: "x1wcsgtt",
          borderEndStartRadius: "x1pczhz8",
          fontWeight: "xk50ysn",
          marginTop: "x14vqqas",
          marginInlineEnd: "xbelrpt",
          marginBottom: "xat24cr",
          marginInlineStart: "x1diwwjn",
          paddingTop: "x1iorvi4",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "xjkvuk6",
          paddingInlineStart: "x25sj25",
          zIndex: "xoegz02",
          display: "x1lliihq",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
        defaultLiveText: { color: "xyxa9uu", fontSize: "x1f6kntn", $$css: !0 },
        postSelectionModalLiveIcon: {
          animationDirection: "xpz12be",
          animationDuration: "xof6966",
          animationIterationCount: "xa4qsjk",
          animationName: "x12ugbrb",
          animationTimingFunction: "xkewf8z",
          backgroundColor: "xla8ptc",
          borderStartStartRadius: "xjwep3j",
          borderStartEndRadius: "x1t39747",
          borderEndEndRadius: "x1wcsgtt",
          borderEndStartRadius: "x1pczhz8",
          fontWeight: "xk50ysn",
          marginTop: "x1anpbxc",
          marginInlineEnd: "x1sa5p1d",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x14vy60q",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xyiysdx",
          zIndex: "xoegz02",
          display: "x1lliihq",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
        postSelectionModalLiveText: {
          color: "xyxa9uu",
          fontSize: "x190qgfh",
          $$css: !0,
        },
        postConfirmedPreviewLiveIcon: {
          animationDirection: "xpz12be",
          animationDuration: "xof6966",
          animationIterationCount: "xa4qsjk",
          animationName: "x12ugbrb",
          animationTimingFunction: "xkewf8z",
          backgroundColor: "xla8ptc",
          borderStartStartRadius: "xjwep3j",
          borderStartEndRadius: "x1t39747",
          borderEndEndRadius: "x1wcsgtt",
          borderEndStartRadius: "x1pczhz8",
          fontWeight: "xk50ysn",
          marginTop: "x1ok221b",
          marginInlineEnd: "xf6vk7d",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x14vy60q",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xyiysdx",
          zIndex: "xoegz02",
          display: "x1lliihq",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
        postConfirmedPreviewLiveText: {
          color: "xyxa9uu",
          fontSize: "x190qgfh",
          $$css: !0,
        },
      };
    function c(t) {
      switch (t) {
        case e.DEFAULT:
          return u.defaultLiveIcon;
        case e.POST_SELECTION_MODAL:
          return u.postSelectionModalLiveIcon;
        case e.POST_CONFIRMED_PREVIEW:
          return u.postConfirmedPreviewLiveIcon;
      }
    }
    function d(t) {
      switch (t) {
        case e.DEFAULT:
          return u.defaultLiveText;
        case e.POST_SELECTION_MODAL:
          return u.postSelectionModalLiveText;
        case e.POST_CONFIRMED_PREVIEW:
          return u.postConfirmedPreviewLiveText;
      }
    }
    ((l.VideoLiveIconPlacement = e),
      (l.getVideoLiveIconStyle = c),
      (l.getVidoeLiveTextStyle = d));
  },
  98,
);
