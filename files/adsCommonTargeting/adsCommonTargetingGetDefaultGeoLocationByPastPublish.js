__d(
  "adsCommonTargetingGetDefaultGeoLocationByPastPublish",
  [
    "AdsCommonTargetingDefaultConstants",
    "AdsCurrentUser",
    "AdsManagerAppConfig",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
    "adsCommonTargetingFetchLastPublishedCountry",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      var i = (e || (e = r("performanceNow")))();
      return r("adsCommonTargetingFetchLastPublishedCountry")(t)
        .then(function (l) {
          var s = l.allCountries,
            u = l.alternativeGranularities,
            c = l.apiErrorMessage,
            d = l.fetchStatus,
            m = l.firstCountry,
            p = s.length > 1 || (s.length === 1 && s[0] !== n),
            _ = s.length > 1,
            f = Math.round((e || (e = r("performanceNow")))() - i);
          return (
            r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
              var e, i;
              return {
                ad_account_id: t,
                event: "location_default_country_logging",
                extra_data: {
                  all_alternative_countries: s.join(","),
                  alternative_country: m != null ? m : "",
                  alternative_granularities: u.join(","),
                  alternative_matches_returned: p ? "true" : "false",
                  api_error_message: c,
                  business_country_code: a != null ? a : "",
                  fallback_country: o("AdsCommonTargetingDefaultConstants")
                    .FALLBACK_COUNTRY,
                  fetch_duration_ms: String(f),
                  fetch_status: d,
                  more_than_one: _ ? "true" : "false",
                  returned_country: n,
                  session_id:
                    (e = r("AdsManagerAppConfig").sessionID) != null ? e : "",
                  user_country_code:
                    (i = r("AdsCurrentUser").countryCode) != null ? i : "",
                },
              };
            }),
            p ? s : null
          );
        })
        .catch(function () {
          return null;
        });
    }
    l.default = s;
  },
  98,
);
