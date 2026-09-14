__d(
  "adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountUtils",
  [
    "AdAccountProductExtensionsMainProductKey",
    "AdToCatalogUtils",
    "AdsBulkValueUtils",
    "AdsInterfacesLogger",
    "LoadObject",
    "ProductSetAPIClientUtils",
    "gkx",
    "isEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 64,
      u = 3e4,
      c = new Map(),
      d = 512,
      m = new Set();
    function p(e, t, n, a) {
      var i, l, s, u, c;
      if (!(!e.hasValueWithoutError() && !e.hasError())) {
        var p =
            e.hasValueWithoutError() &&
            (i = (l = e.getValueEnforcing()) == null ? void 0 : l.catalogID) !=
              null
              ? i
              : null,
          _ = a != null ? String(a) : null,
          f = p != null ? String(p) : null,
          g = e.hasError()
            ? e.getError() instanceof
              o("ProductSetAPIClientUtils").NoEligibleProductSetsError
              ? "a2c_no_catalog"
              : "a2c_error"
            : f == null
              ? "a2c_null"
              : _ == null
                ? "pcau_null_a2c_catalog"
                : f === _
                  ? "match"
                  : "diverge",
          h =
            String(t) +
            ":" +
            n +
            ":" +
            (_ != null ? _ : "null") +
            ":" +
            (f != null ? f : "null") +
            ":" +
            g;
        if (!m.has(h)) {
          if (m.size >= d) {
            var y = m.values().next().value;
            y != null && m.delete(y);
          }
          (m.add(h),
            r("AdsInterfacesLogger").log({
              eventName: "pe_catalog_pca_a2c_shadow_log",
              data:
                ((c = {}),
                (c.ad_account_id = t),
                (c.adgroup_id = n),
                (c.subsequent_data = JSON.stringify({
                  pcau_catalog_id: _,
                  pca_a2c_catalog_id: f,
                  match: g,
                  a2c_error:
                    e.getError() instanceof
                    o("ProductSetAPIClientUtils").NoEligibleProductSetsError
                      ? null
                      : (s = (u = e.getError()) == null ? void 0 : u.name) !=
                          null
                        ? s
                        : null,
                })),
                c),
            }));
        }
      }
    }
    function _(t, n, a, l, d, m, f, g, h, y, C) {
      if ((C === void 0 && (C = null), n == null))
        return r("LoadObject").empty({ creatorModuleID: i.id });
      if (t === !0) {
        if (r("justknobx")._("4524")) {
          var b = _(!1, n, a, l, d, m, f, g, h, y, C);
          p(b, n, y[0], C);
        }
        return r("LoadObject").empty({ creatorModuleID: i.id });
      }
      if (y.length !== 1)
        return r("LoadObject").empty({ creatorModuleID: i.id });
      var v = null;
      if (f != null && f.getValues().length > 0) {
        var S;
        v = (S = f.getValueForIndex(0)) != null ? S : null;
      }
      var R = a
          ? null
          : o("AdsBulkValueUtils").getUniformValueOrDefault(h, null),
        L = (e || (e = r("isEmpty")))(R) ? null : R;
      if (o("AdToCatalogUtils").shouldSkipPECatalogFetchForPartialUrl(L))
        return r("LoadObject").empty({ creatorModuleID: i.id });
      var E = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(!0)
          ? o("AdToCatalogUtils").buildPECatalogMatchKey({
              adAccountID: n,
              adgroupID: y[0],
              isCTMAd: a,
              isEligibleForCtdPe: d,
              isEligibleForCtwaPe: l,
              pageID: g,
              pixelID: v,
              url: L,
            })
          : new (r("AdAccountProductExtensionsMainProductKey"))({
              adAccountID: n,
              url: L,
              pixelID: v,
              pageID: g,
              isCTMAd: a,
              isEligibleForCtwaPe: l,
              isEligibleForCtdPe: d,
              requestSource: "PRODUCT_EXTENSIONS",
              adgroupID: y[0],
            }),
        k = m.get(E);
      if (r("gkx")("24245") && !a) {
        var I = String(n) + ":" + y[0],
          T = c.get(I);
        if (
          T != null &&
          T.url != null &&
          L == null &&
          v == null &&
          !k.hasValueWithoutError() &&
          T.result.hasValueWithoutError() &&
          (!r("gkx")("26307") || Date.now() - T.ts < u)
        )
          return T.result;
        if (k.hasValueWithoutError()) {
          if (c.size >= s && !c.has(I)) {
            var D = c.keys().next().value;
            D != null && c.delete(D);
          }
          c.set(I, { result: k, ts: Date.now(), url: L });
        } else
          T != null &&
            c.set(I, {
              result: T.result,
              ts: T.ts,
              url: L != null ? L : T.url,
            });
      }
      return k;
    }
    function f() {
      c.clear();
    }
    ((l.adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountLogic = _),
      (l.clearStickyCacheForTesting = f));
  },
  98,
);
