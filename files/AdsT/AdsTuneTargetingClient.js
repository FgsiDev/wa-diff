__d(
  "AdsTuneTargetingClient",
  [
    "AdsRegulatedCategoryConvertAdproRegulatedCategory",
    "AsyncRequest",
    "XAdsSAFRTargetSpecStringTuningAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.tuneTargetingString = function (t, n, a, i, l) {
            var e,
              s = o(
                "AdsRegulatedCategoryConvertAdproRegulatedCategory",
              ).adproRegulatedCategoryConvertAdsRegulatedCategory(n);
            (i == null
              ? (e = r(
                  "XAdsSAFRTargetSpecStringTuningAsyncControllerRouteBuilder",
                ).buildURL({
                  special_ad_categories: s,
                  special_ad_category_countries: l != null ? l : [],
                  target_spec: a,
                }))
              : (e = r(
                  "XAdsSAFRTargetSpecStringTuningAsyncControllerRouteBuilder",
                ).buildURL({
                  ad_account_id: i,
                  special_ad_categories: s,
                  special_ad_category_countries: l != null ? l : [],
                  target_spec: a,
                })),
              new (r("AsyncRequest"))()
                .setURI(e)
                .setMethod("POST")
                .setAllowCrossPageTransition(!0)
                .setPayloadHandler(t)
                .send());
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
