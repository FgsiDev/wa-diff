__d(
  "adsMessengerDataModelSetWelcomeMessage",
  [
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetWelcomeMessage",
    "getByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.getValue();
      if (n === r("adsMessengerDataModelGetWelcomeMessage")(e)) return e;
      var o = r("getByPath")(
          e,
          r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.path,
        ),
        a = o
          ? r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
              .TEXT
          : r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.TEXT,
        i = [
          r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.TEXT,
          a,
          r("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.TEXT,
        ],
        l = r("adsMessengerDataModelClone")(e);
      return (
        i.forEach(function (e) {
          r("setByPath")(l, e, n);
        }),
        l
      );
    }
    l.default = e;
  },
  98,
);
