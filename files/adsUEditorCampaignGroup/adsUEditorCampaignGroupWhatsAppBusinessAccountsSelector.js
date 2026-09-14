__d(
  "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector",
  [
    "AdsBusinessWhatsAppBusinessAccountProvider",
    "AdsFluxHooks",
    "AdsInterfacesLogger",
    "LoadObject",
    "RelayHooks",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector_Fragment.graphql",
    "isLinkedWhatsAppNumber",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return r("isLinkedWhatsAppNumber")(e.whatsAppNumberConnectionStatus);
    }
    function u(e) {
      return ["linked".toUpperCase(), "pending".toUpperCase()].includes(
        e.whatsAppNumberConnectionStatus,
      );
    }
    function c(t, a) {
      var l,
        c = o("react-compiler-runtime").c(11),
        m = a === void 0 ? !1 : a,
        p = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector_Fragment.graphql",
              )),
          t,
        ),
        _ = p == null || (l = p.business) == null ? void 0 : l.id,
        f;
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = r(
            "AdsBusinessWhatsAppBusinessAccountProvider",
          ).toFluxSelector()),
          (c[0] = f))
        : (f = c[0]);
      var g = o("AdsFluxHooks").useAdsSelector(f);
      if (_ == null) {
        var h;
        return (
          c[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = r("LoadObject").withValue(null, { creatorModuleID: i.id })),
              (c[1] = h))
            : (h = c[1]),
          h
        );
      }
      var y, C;
      if (c[2] !== _ || c[3] !== g || c[4] !== m) {
        C = Symbol.for("react.early_return_sentinel");
        e: {
          var b = g.get(_);
          if (!g.getData().has(_)) {
            var v;
            (c[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = r("LoadObject").loading({ creatorModuleID: i.id })),
                (c[7] = v))
              : (v = c[7]),
              (C = v));
            break e;
          }
          if (b.isLoading()) {
            var S;
            (c[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = r("LoadObject").loading({ creatorModuleID: i.id })),
                (c[8] = S))
              : (S = c[8]),
              (C = S));
            break e;
          }
          b.hasValueWithoutError() &&
            b.getValueEnforcing().some(d) &&
            r("AdsInterfacesLogger").log({
              eventName: "cloud_api_business_numbers_in_pending_filtered",
            });
          var R = m === !0 ? u : s,
            L;
          (c[9] !== R
            ? ((L = function (t) {
                return t.filter(R);
              }),
              (c[9] = R),
              (c[10] = L))
            : (L = c[10]),
            (y = b.map(L)));
        }
        ((c[2] = _), (c[3] = g), (c[4] = m), (c[5] = y), (c[6] = C));
      } else ((y = c[5]), (C = c[6]));
      if (C !== Symbol.for("react.early_return_sentinel")) return C;
      var E = y;
      return E;
    }
    function d(e) {
      return e.whatsAppNumberConnectionStatus === "pending".toUpperCase();
    }
    var m = r("adsCreateSelector")(
      [
        r("adsUEditorAccountSelector"),
        r("AdsBusinessWhatsAppBusinessAccountProvider").toFluxSelector(),
      ],
      function (t, n) {
        var e,
          o = (e = t.business) == null ? void 0 : e.id;
        if (o == null)
          return r("LoadObject").withValue(null, { creatorModuleID: i.id });
        var a = n.get(o);
        return n.getData().has(o)
          ? a.isLoading()
            ? r("LoadObject").loading({ creatorModuleID: i.id })
            : a.map(function (e) {
                return e.filter(s);
              })
          : r("LoadObject").loading({ creatorModuleID: i.id });
      },
      { name: i.id + ".businessWhatsAppBusinessAccountsSelector" },
    );
    ((l.isWhatsAppNumberEligibleForCTX = s),
      (l.useAdsMessengerBusinessWhatsAppBusinessAccountsSelector = c),
      (l.businessWhatsAppBusinessAccountsSelector = m));
  },
  98,
);
