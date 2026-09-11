__d(
  "UFICommonInteractionLogger",
  [
    "QuickPerformanceLogger",
    "UFICommonInteractionEvents",
    "performanceAbsoluteNow",
    "qpl",
    "requestAnimationFrameAcrossTransitions",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map(),
      c = 0;
    function d() {
      return r("uuidv4")();
    }
    function m(t, n) {
      var o = (e || (e = r("performanceAbsoluteNow")))(),
        a = n != null ? n : d(),
        i = f(t),
        l;
      if (i) {
        var m = c++;
        ((l = { event: i, markerKey: m }),
          (s || (s = r("QuickPerformanceLogger"))).markerStart(i, m, o));
      }
      return (u.set(a, { qplInfo: l, startTimestamp: o }), a);
    }
    function p(e) {
      r("requestAnimationFrameAcrossTransitions")(function () {
        _(e);
      });
    }
    function _(t, n) {
      var o = u.get(t);
      if (o) {
        var a = o.qplInfo;
        if ((u.delete(t), a)) {
          var i = (e || (e = r("performanceAbsoluteNow")))();
          (s || (s = r("QuickPerformanceLogger"))).markerEnd(
            a.event,
            n === !0 ? 3 : 2,
            a.markerKey,
            i,
          );
        }
      }
    }
    function f(e) {
      switch (e) {
        case r("UFICommonInteractionEvents").UFI_OPTIMISTIC_COMMENT:
          return r("qpl")._(3735589, "1811");
        case r("UFICommonInteractionEvents").UFI_PERSISTED_COMMENT:
          return r("qpl")._(3735591, "5737");
        case r("UFICommonInteractionEvents").UFI2_OPTIMISTIC_COMMENT:
          return r("qpl")._(3735590, "6043");
        case r("UFICommonInteractionEvents").UFI2_PERSISTED_COMMENT:
          return r("qpl")._(3735592, "2960");
        case r("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT:
          return r("qpl")._(3735618, "7148");
        case r("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT:
          return r("qpl")._(3735619, "7056");
        case r("UFICommonInteractionEvents").UFI2_OPTIMISTIC_COMMENT_EDIT:
          return r("qpl")._(3735593, "7493");
        case r("UFICommonInteractionEvents").UFI2_PERSISTED_COMMENT_EDIT:
          return r("qpl")._(3735594, "1099");
        case r("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT_EDIT:
          return r("qpl")._(3735626, "5992");
        case r("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT_EDIT:
          return r("qpl")._(3735627, "6752");
        case r("UFICommonInteractionEvents").UFI_TOP_LEVEL_COMMENTS_PAGINATION:
          return r("qpl")._(3735595, "4690");
        case r("UFICommonInteractionEvents").UFI2_TOP_LEVEL_COMMENTS_PAGINATION:
          return r("qpl")._(3735596, "3289");
        case r("UFICommonInteractionEvents")
          .COMET_UFI_TOP_LEVEL_COMMENTS_PAGINATION:
          return r("qpl")._(3735620, "232");
        case r("UFICommonInteractionEvents").UFI2_REPLY_COMMENTS_PAGINATION:
          return r("qpl")._(3735597, "1585");
        case r("UFICommonInteractionEvents")
          .COMET_UFI_REPLY_COMMENTS_PAGINATION:
          return r("qpl")._(3735622, "1891");
        case r("UFICommonInteractionEvents").UFI_SHARE_DIALOG_OPENS:
          return r("qpl")._(3735598, "7109");
        case r("UFICommonInteractionEvents").UFI2_SHARE_DIALOG_OPENS:
          return r("qpl")._(3735599, "1269");
        case r("UFICommonInteractionEvents").UFI_COMPOSER_INPUT_FOCUS:
          return r("qpl")._(3735600, "6153");
        case r("UFICommonInteractionEvents").UFI_STORY_REACTION:
          return r("qpl")._(3735601, "3455");
        case r("UFICommonInteractionEvents").UFI_COMMENT_REACTION:
          return r("qpl")._(3735604, "6177");
        case r("UFICommonInteractionEvents").UFI2_STORY_REACTION:
          return r("qpl")._(3735602, "4694");
        case r("UFICommonInteractionEvents").UFI2_COMMENT_REACTION:
          return r("qpl")._(3735603, "6895");
        case r("UFICommonInteractionEvents").COMET_UFI_STORY_REACTION:
          return r("qpl")._(3735623, "54");
        case r("UFICommonInteractionEvents").COMET_UFI_COMMENT_REACTION:
          return r("qpl")._(3735624, "702");
        case r("UFICommonInteractionEvents").UFI_COMPOSER_KEYPRESS_LATENCY:
          return r("qpl")._(3735605, "622");
        case r("UFICommonInteractionEvents").UFI2_COMPOSER_KEYPRESS_LATENCY:
          return r("qpl")._(3735606, "5054");
        case r("UFICommonInteractionEvents")
          .COMET_UFI_COMPOSER_KEYPRESS_LATENCY:
          return r("qpl")._(3735625, "7813");
      }
    }
    ((l.makeTrackingID = d),
      (l.startInteraction = m),
      (l.endInteractionAtEndOfFrame = p),
      (l.endInteraction = _));
  },
  98,
);
