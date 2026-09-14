__d(
  "adsMessengerDataModelGetQuickReplies",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelGetMediaFormat",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (e == null) return null;
      var n = r("adsMessengerDataModelGetMediaFormat")(e);
      switch (n) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.QUICK_REPLIES,
          );
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.QUICK_REPLIES,
          );
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.QUICK_REPLIES,
          );
        default:
          var o = !!e.message_data,
            a = o ? e.message_data : e;
          if (a instanceof Array)
            try {
              var i,
                l = JSON.parse(JSON.stringify(a)).length === 1;
              return l
                ? (i = a[0].message) == null
                  ? void 0
                  : i.quick_replies
                : null;
            } catch (e) {
              return null;
            }
          if (o && a instanceof Object) {
            var s;
            return (s = a.message) == null ? void 0 : s.quick_replies;
          }
          return (t = e.message) == null ? void 0 : t.quick_replies;
      }
    }
    l.default = e;
  },
  98,
);
