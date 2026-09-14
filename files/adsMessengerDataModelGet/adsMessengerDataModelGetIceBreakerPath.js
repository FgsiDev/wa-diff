__d(
  "adsMessengerDataModelGetIceBreakerPath",
  ["AdsMessengerJSONMediaFormatType", "adsMessengerDataModelGetMediaFormat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetMediaFormat")(e);
      switch (t) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return ["image_format", "message", "ice_breakers"];
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          return ["text_format", "message", "ice_breakers"];
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return ["video_format", "message", "ice_breakers"];
        default:
          return null;
      }
    }
    l.default = e;
  },
  98,
);
