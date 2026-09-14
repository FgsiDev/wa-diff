__d(
  "AdsSpecialAdFrameworkConfigDataLoader",
  [
    "AdsRegulatedCategoryConvertAdproRegulatedCategory",
    "AsyncRequest",
    "SAFRDynamicUIPlatformCallsTypedLogger",
    "XAdsSAFRDynamicUIConfigAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = e.accountID,
        i = o(
          "AdsRegulatedCategoryConvertAdproRegulatedCategory",
        ).adproRegulatedCategoryConvertAdsRegulatedCategory(
          e.regulatedCategories,
        ),
        l = (t = e.regulatedCategoryCountries) != null ? t : [];
      return (
        a != null
          ? (n = r(
              "XAdsSAFRDynamicUIConfigAsyncControllerRouteBuilder",
            ).buildUri({
              special_ad_categories: i,
              special_ad_category_countries: l,
              ad_account_id: a,
            }))
          : (n = r(
              "XAdsSAFRDynamicUIConfigAsyncControllerRouteBuilder",
            ).buildUri({
              special_ad_categories: i,
              special_ad_category_countries: l,
            })),
        new (r("SAFRDynamicUIPlatformCallsTypedLogger"))()
          .setRegulatedCategories(i)
          .setAdAccountID(e.accountID)
          .log(),
        new (r("AsyncRequest"))()
          .setURI(n)
          .setMethod("GET")
          .setReadOnly(!0)
          .exec()
          .then(
            function (e) {
              var t = e.payload;
              return t == null
                ? null
                : babelHelpers.extends({}, t.restrictions);
            },
            function (e) {
              return null;
            },
          )
      );
    }
    l.genContent = e;
  },
  98,
);
