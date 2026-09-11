__d(
  "CometUFIFunnelLogger",
  ["CometUFIFunnelLoggerConstants", "FBLogger", "QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(t) {
      e[t] ||
        (r("QPLUserFlow").start(r("qpl")._(3747131, "4389"), {
          instanceKey: t,
        }),
        (e[t] = !0));
    }
    function u(t) {
      (r("QPLUserFlow").endSuccess(r("qpl")._(3747131, "4389"), {
        instanceKey: t,
      }),
        (e[t] = !1));
    }
    function c(t, n) {
      (e[t] || s(t),
        r("QPLUserFlow").addPoint(r("qpl")._(3747131, "4389"), n, {
          instanceKey: t,
        }));
    }
    function d(e) {
      if (e > 2 || e < 0) {
        r("FBLogger")("ufi2").mustfix("Depth should be 0 to 2.");
        return;
      }
      switch (e) {
        case 0:
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .LEVEL_0_PAGER_CLICK;
        case 1:
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .LEVEL_1_PAGER_CLICK;
        case 2:
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .LEVEL_2_PAGER_CLICK;
      }
    }
    function m(e) {
      switch (e) {
        case "1635855486666999":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_LIKE;
        case "1678524932434102":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_LOVE;
        case "478547315650144":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_WOW;
        case "115940658764963":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_HAHA;
        case "908563459236466":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_SORRY;
        case "444813342392137":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_ANGER;
        case "613557422527858":
          return o("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents
            .REACTION_MENU_SUPPORT;
      }
    }
    var p = {
        addPoint: function (t, n) {
          c(t, n);
        },
        endSuccess: function (t) {
          u(t);
        },
        getPagerEventFromDepth: function (t) {
          d(t);
        },
        getReactionMenuEventFromReaction: function (t) {
          m(t);
        },
        start: function (t) {
          s(t);
        },
      },
      _ = p;
    l.default = _;
  },
  98,
);
