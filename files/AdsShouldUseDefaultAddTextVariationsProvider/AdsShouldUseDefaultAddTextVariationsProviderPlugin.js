__d(
  "AdsShouldUseDefaultAddTextVariationsProviderPlugin",
  [
    "AsyncTypedRequest",
    "SignalsLaminarHelpers",
    "XAdsCreativeTextGenerationDefaultAddControllerRouteBuilder",
    "cr:3372",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
        s,
        function (e) {
          return e;
        },
        function (e) {
          n("cr:3372") != null &&
            e.forEach(function (e, t) {
              e.hasValue() && n("cr:3372").validate(t, e.getValueEnforcing());
            });
        },
      ),
    };
    function s(e) {
      var t = r("XAdsCreativeTextGenerationDefaultAddControllerRouteBuilder")
        .buildUri({ ad_account_id: e })
        .toString();
      return new (r("AsyncTypedRequest"))(t)
        .promisePayload()
        .then(function (e) {
          return {
            isEligibileToDefaultAdd: e.should_use_default_add,
            isEligibileToDefaultAddHeadline: e.should_use_headline_default_add,
            hasTextGenRevenueInLast30Days:
              e.has_text_gen_revenue_in_last_30_days,
          };
        });
    }
    var u = e;
    l.default = u;
  },
  98,
);
