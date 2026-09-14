__d(
  "ClientAdAccount-ads_cpas_ad_account_check-resolver",
  ["AdsCPASAdAccountCheckProvider", "AdsDML", "AdsDMLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDMLUtils").storeToQuery({
      dataGetter: function (t, n) {
        var e;
        return t != null && (e = n.getState().get(t).getValue()) != null
          ? e
          : !1;
      },
      store: r("AdsCPASAdAccountCheckProvider").toFluxStore(),
    });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, t.account_id);
    }
    l.ads_cpas_ad_account_check = s;
  },
  98,
);
