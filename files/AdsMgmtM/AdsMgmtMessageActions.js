__d(
  "AdsMgmtMessageActions",
  [
    "AdsDataAtom",
    "AdsMessagingAddMessageDataAction",
    "AdsMessagingDismissMessageDataAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, n, o, a, l, s, u, c, d, m, p, _, f, g) {
      (g === void 0 && (g = !1),
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("AdsMessagingAddMessageDataAction").dispatch(
            {
              data: {
                actionButton: t,
                secondaryActionButton: n,
                body: o,
                id: _,
                isActorEnforcement: d,
                isBinding: m != null ? m : !1,
                onDismiss: p,
                placement: l,
                pageID: u,
                severity: a,
                tabHash: c,
                title: s,
                tipName: f,
                hideXout: g,
              },
            },
            { line: "35", module: "AdsMgmtMessageActions.js", moduleID: i.id },
          );
        }));
    }
    function d(e) {
      r("AdsMessagingDismissMessageDataAction").dispatch(
        { data: { id: e } },
        { line: "57", module: "AdsMgmtMessageActions.js", moduleID: i.id },
      );
    }
    ((l.addMessage = c), (l.dismissMessage = d));
  },
  98,
);
