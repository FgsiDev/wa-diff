__d(
  "WAWebInteractiveResponseMessage",
  [
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveGalaxyFlowResponseMessage.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgKey", "quotedMsg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.msgKey),
          (l = t.quotedMsg),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        var c;
        ((s = [
          (c = o("WAWebMsgGetters")).getNativeFlowName,
          c.getInteractiveType,
          c.getInteractivePayload,
          c.getTo,
          o("WAWebFrontendMsgGetters").getSafeMsg,
        ]),
          (n[4] = s));
      } else s = n[4];
      var m = o("useWAWebMsgValues").useMsgValues(a, s),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y,
        C,
        b,
        v;
      if (n[5] !== i || n[6] !== h) {
        v = Symbol.for("react.early_return_sentinel");
        e: {
          var S = d(h);
          if (S == null) {
            v = null;
            break e;
          }
          ((y = r("WAWebInteractiveBubble.react")),
            (C = i),
            (b = o("WAWebStateUtils").unproxy(S)));
        }
        ((n[5] = i),
          (n[6] = h),
          (n[7] = y),
          (n[8] = C),
          (n[9] = b),
          (n[10] = v));
      } else ((y = n[7]), (C = n[8]), (b = n[9]), (v = n[10]));
      if (v !== Symbol.for("react.early_return_sentinel")) return v;
      var R;
      n[11] !== l
        ? ((R = l
            ? u.jsx("div", {
                className: "x1198e8h x1lxpwgx xzueoph xw01apr",
                children: l,
              })
            : null),
          (n[11] = l),
          (n[12] = R))
        : (R = n[12]);
      var L;
      n[13] !== y || n[14] !== C || n[15] !== b || n[16] !== R
        ? ((L = u.jsx(
            y,
            babelHelpers.extends({}, C, {
              msg: b,
              header: R,
              displayFooter: !1,
            }),
          )),
          (n[13] = y),
          (n[14] = C),
          (n[15] = b),
          (n[16] = R),
          (n[17] = L))
        : (L = n[17]);
      var E = L;
      if (
        p === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
        o("WAWebGalaxyFlowFeatureSupport").isFlowResponseSupportedFor({
          buttonParamsJson: f == null ? void 0 : f.buttonParamsJson,
          interactiveType: _,
          to: g,
        })
      ) {
        var k;
        return (
          n[18] !== E || n[19] !== a
            ? ((k = u.jsx(
                r("WAWebInteractiveGalaxyFlowResponseMessage.react"),
                { msgKey: a, defaultMsg: E },
              )),
              (n[18] = E),
              (n[19] = a),
              (n[20] = k))
            : (k = n[20]),
          k
        );
      }
      return E;
    }
    function d(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE
        ? e
        : null;
    }
    l.default = c;
  },
  98,
);
