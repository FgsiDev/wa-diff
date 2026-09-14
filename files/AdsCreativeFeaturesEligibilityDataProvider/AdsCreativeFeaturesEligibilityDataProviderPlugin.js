__d(
  "AdsCreativeFeaturesEligibilityDataProviderPlugin",
  [
    "AdsCreativeFeaturesEligibilityDataLoadedAction",
    "AsyncTypedRequest",
    "FBLogger",
    "SignalsLaminarHelpers",
    "XAdsProductPlatformAdAccountFeatureEligibilityMapController",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.accountID,
        n = e.campaignGroupID,
        r = e.specialAdCategories,
        o = r != null && r.length > 0 ? r.slice().sort().join(",") : "";
      return t + "_" + (n != null ? n : "") + "_" + o;
    }
    var s = {
      initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
        u,
        e,
        function () {
          r("AdsCreativeFeaturesEligibilityDataLoadedAction").dispatch(
            {},
            {
              line: "65",
              module: "AdsCreativeFeaturesEligibilityDataProviderPlugin.js",
              moduleID: i.id,
            },
          );
        },
      ),
    };
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accountID,
            n = e.campaignGroupID,
            o = r("XAdsProductPlatformAdAccountFeatureEligibilityMapController")
              .getURIBuilder()
              .setInt("adaccountid", t);
          n != null && o.setInt("campaigngroupid", n);
          var a = o.getURI();
          try {
            var i = yield new (r("AsyncTypedRequest"))(a).promisePayload();
            return i;
          } catch (e) {
            throw (
              r("FBLogger")("ads")
                .catching(r("err")(String(e)))
                .warn(
                  "Music on Reels eligibility map fetch failed for creative feature eligibility data",
                ),
              e
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    var d = s;
    l.default = d;
  },
  98,
);
