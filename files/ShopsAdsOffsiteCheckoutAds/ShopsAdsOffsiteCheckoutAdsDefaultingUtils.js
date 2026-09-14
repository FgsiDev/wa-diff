__d(
  "ShopsAdsOffsiteCheckoutAdsDefaultingUtils",
  [
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsUEditorAdgroupInstagramUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupSetPageUtils",
    "filterNulls",
    "isEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var o, a, i;
      if (t == null) return null;
      var l = r("filterNulls")(
        Array.from(
          t
            .filter(function (e) {
              var t, n;
              return (t =
                e == null ||
                (n = e.commerce_merchant_settings) == null ||
                (n = n.shop_ads_capabilities) == null
                  ? void 0
                  : n.includes("OFFSITE_IAB_CHECKOUT_ENABLED")) != null
                ? t
                : !1;
            })
            .values(),
        ),
      );
      if ((e || (e = r("isEmpty")))(l)) return null;
      var s = l.find(function (e) {
        var t;
        return (
          (e == null || (t = e.commerce_merchant_settings) == null
            ? void 0
            : t.id) === n
        );
      });
      return n != null && s == null
        ? null
        : (o = s == null || (a = s.page) == null ? void 0 : a.id) != null
          ? o
          : (i = l[0]) == null || (i = i.page) == null
            ? void 0
            : i.id;
    }
    function u(e, t, n, a, i, l, u, c, d) {
      var m = u,
        p = r("nullthrows")(
          n.get(m.id),
          "Parent extra data must exist for the adgroup being defaulted.",
        ),
        _ = p.campaign,
        f = p.campaignGroup,
        g = p.specPlugin;
      if (t) {
        var h = r("AdsAdgroupSemanticFields").pageID.get(g, m);
        if (h == null) {
          var y = s(a.getValue(), d);
          if (y != null) {
            var C;
            ((m = o("AdsUEditorAdgroupSetPageUtils").setAdgroupPage(
              m,
              m.id,
              [m.id],
              e,
              y,
              a.getValue(),
              {},
              l,
              !1,
              null,
            )),
              o("AdsUEditorAdgroupInstagramUtils").initiateInstagramDefaulting(
                l.account,
                ((C = {}), (C[m.id] = null), C),
                y,
                e,
                a.getValue(),
                l.isShopsAdsIncentiveProgram,
                null,
              ));
          }
        }
      }
      var b = r("AdsAdgroupSemanticFields").instagramActorID.get(g, m),
        v = r("AdsAdgroupSemanticFields").pageID.get(g, m);
      return (
        (m = o("AdsUEditorAdgroupMutators").maybeUpdateSAOffDestinationSpec(
          m,
          _,
          f,
          o("AdsBulkValueUtils").getUniformValueOrDefault(i.getValue(), null),
          a.getValue(),
          v,
          b,
          c,
        )),
        m
      );
    }
    l.maybeDefaultSAOffIdentitiesAndOptIn = u;
  },
  98,
);
