__d(
  "adsCallToActionFilterTypesForConversionsObjective",
  ["AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      return (
        t === r("AdsPromotedObjectTypes").PHONE_CALL
          ? (n = e.filter(function (e) {
              return e.name === "CALL_NOW";
            }))
          : (n = e.filter(function (e) {
              return e.name !== "GET_DIRECTIONS" && e.name !== "CALL_NOW";
            })),
        n
      );
    }
    l.default = e;
  },
  98,
);
