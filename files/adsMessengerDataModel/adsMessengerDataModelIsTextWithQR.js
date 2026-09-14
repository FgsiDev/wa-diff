__d(
  "adsMessengerDataModelIsTextWithQR",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelGetMediaFormat",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetMediaFormat")(e);
      return t === r("AdsMessengerJSONMediaFormatType").TEXT
        ? !r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.path,
          )
        : !1;
    }
    l.default = e;
  },
  98,
);
