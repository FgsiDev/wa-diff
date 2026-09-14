__d(
  "isSubscriberListAudience",
  ["AdsCustomAudienceType", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("isTruthy")(e) &&
        (e === r("AdsCustomAudienceType").SUBTYPES.SUBSCRIBER_LIST ||
          parseInt(e, 10) ===
            r("AdsCustomAudienceType").SUBTYPE_TO_ENUM_MAP[
              r("AdsCustomAudienceType").SUBTYPES.SUBSCRIBER_LIST
            ])
      );
    }
    l.isSubscriberListAudience = e;
  },
  98,
);
