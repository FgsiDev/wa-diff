__d(
  "adsMessengerDataModelGetWelcomeMessage",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelGetMediaFormat",
    "adsMessengerDataModelIsTextWithQR",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetMediaFormat")(e);
      switch (t) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.TEXT;
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          return r("adsMessengerDataModelIsTextWithQR")(e)
            ? r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.TEXT
            : r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
                .TEXT;
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return r("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.TEXT;
        default:
          return null;
      }
    }
    function s(t) {
      var n;
      if (t == null) return null;
      var o = e(t);
      if (o) return r("getByPath")(t, o);
      var a = !!t.message_data,
        i = a ? t.message_data : t;
      if (i instanceof Array)
        try {
          var l,
            s = JSON.parse(JSON.stringify(i)).length === 1;
          return s ? ((l = i[0].message) == null ? void 0 : l.text) : null;
        } catch (e) {
          return null;
        }
      if (a && i instanceof Object) {
        var u;
        return (u = i.message) == null ? void 0 : u.text;
      }
      return (n = t.message) == null ? void 0 : n.text;
    }
    l.default = s;
  },
  98,
);
