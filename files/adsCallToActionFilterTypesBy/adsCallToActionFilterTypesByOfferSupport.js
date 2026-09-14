__d(
  "adsCallToActionFilterTypesByOfferSupport",
  ["AdsAPIObjectives", "AdsCallToActionTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        t.forEach(function (t, o) {
          n[o]
            ? (e = e.filter(function (e) {
                return e !== r("AdsCallToActionTypes").TYPES.GET_OFFER;
              }))
            : ((e = e.filter(function (e) {
                return e !== r("AdsCallToActionTypes").TYPES.GET_OFFER_VIEW;
              })),
              t === r("AdsAPIObjectives").STORE_VISITS &&
                (e = e.filter(function (e) {
                  return e !== r("AdsCallToActionTypes").TYPES.GET_OFFER;
                })));
        }),
        e
      );
    }
    l.default = e;
  },
  98,
);
