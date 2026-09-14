__d(
  "adsMessengerDataModelGetActionTypePath",
  ["AdsMessengerJSONMediaFormatType", "adsMessengerDataModelGetMediaFormat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (r("adsMessengerDataModelGetMediaFormat")(e)) {
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          return ["text_format", "customer_action_type"];
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return ["image_format", "customer_action_type"];
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return ["video_format", "customer_action_type"];
        default:
          return null;
      }
    }
    l.default = e;
  },
  98,
);
