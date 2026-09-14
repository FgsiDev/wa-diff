__d(
  "AdsIGIDv2SemanticFields",
  ["AdsAdgroupSemanticFields", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      instagramUserID: {
        isSupported: function (t, n) {
          return r("gkx")("15865")
            ? r("AdsAdgroupSemanticFields").instagramUserID.isSupported(t, n)
            : r("AdsAdgroupSemanticFields").instagramActorID.isSupported(t, n);
        },
        set: function (t, n, o, a) {
          var e = r("AdsAdgroupSemanticFields").instagramActorID.set(t, n, o);
          return (
            r("gkx")("9636") &&
              (e = r("AdsAdgroupSemanticFields").instagramUserID.set(t, e, a)),
            e
          );
        },
        delete: function (t, n) {
          var e = r("AdsAdgroupSemanticFields").instagramActorID.delete(t, n);
          return (
            r("gkx")("9636") &&
              (e = r("AdsAdgroupSemanticFields").instagramUserID.delete(t, e)),
            e
          );
        },
      },
    };
    l.IGIDV2SemanticFields = e;
  },
  98,
);
