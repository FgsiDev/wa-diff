__d(
  "adsCommonTargetingLogAlternativeCountryComparison",
  [
    "AdsCommonTargetingDefaultConstants",
    "AdsCurrentUser",
    "AdsManagerAppConfig",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = t.length > 1 || (t.length === 1 && t[0] !== n),
        l = t.length > 1;
      r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
        var s, u, c;
        return {
          ad_account_id: e,
          event: "location_default_country_logging",
          extra_data: {
            all_alternative_countries: t.join(","),
            alternative_country: (s = t[0]) != null ? s : "",
            alternative_granularities: "",
            alternative_matches_returned: i ? "true" : "false",
            api_error_message: "",
            business_country_code: a != null ? a : "",
            fallback_country: o("AdsCommonTargetingDefaultConstants")
              .FALLBACK_COUNTRY,
            fetch_status: "prefetched",
            more_than_one: l ? "true" : "false",
            returned_country: n,
            session_id:
              (u = r("AdsManagerAppConfig").sessionID) != null ? u : "",
            user_country_code:
              (c = r("AdsCurrentUser").countryCode) != null ? c : "",
          },
        };
      });
    }
    l.default = e;
  },
  98,
);
