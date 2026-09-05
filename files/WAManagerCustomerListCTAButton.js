__d(
  "WAManagerCustomerListCTAButton",
  [
    "AdsHelpTrayUILoggerStoreUtils",
    "GeoButton.react",
    "MAIBAChatNavigationContext",
    "geoMargin",
    "react",
    "react-compiler-runtime",
    "useJSON",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = "maiba-wa-manager-customer-list-cta",
      f = "wa-manager-customer-list";
    function g(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.attributesJson,
        a = r("useJSON")(n),
        i = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        l = i.externalConversationId,
        u = a.action != null && a.action !== "" ? a.action : null,
        c = a.label != null && a.label !== "" ? a.label : null,
        m = u != null && c != null,
        g = u != null ? u : "",
        h = c != null ? c : "",
        y;
      t[0] !== g || t[1] !== h
        ? ((y = { action: g, "cta-type": f, label: h }),
          (t[0] = g),
          (t[1] = h),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] !== u || t[4] !== l || t[5] !== C
        ? ((b = function () {
            u != null &&
              (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_click",
                C,
              ),
              window.dispatchEvent(
                new CustomEvent(_, {
                  detail: { action: u, externalConversationId: l },
                }),
              ));
          }),
          (t[3] = u),
          (t[4] = l),
          (t[5] = C),
          (t[6] = b))
        : (b = t[6]);
      var v = b,
        S = p(!1),
        R,
        L;
      if (
        (t[7] !== m || t[8] !== C
          ? ((R = function () {
              S.current ||
                !m ||
                ((S.current = !0),
                o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_impression",
                  C,
                ));
            }),
            (L = [m, C]),
            (t[7] = m),
            (t[8] = C),
            (t[9] = R),
            (t[10] = L))
          : ((R = t[9]), (L = t[10])),
        d(R, L),
        u == null || c == null)
      )
        return null;
      var E;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = [r("geoMargin").end8, r("geoMargin").bottom8]), (t[11] = E))
        : (E = t[11]);
      var k;
      return (
        t[12] !== v || t[13] !== c
          ? ((k = s.jsx(r("GeoButton.react"), {
              label: c,
              onClick: v,
              variant: "primary",
              xstyle: E,
            })),
            (t[12] = v),
            (t[13] = c),
            (t[14] = k))
          : (k = t[14]),
        k
      );
    }
    l.default = g;
  },
  98,
);
