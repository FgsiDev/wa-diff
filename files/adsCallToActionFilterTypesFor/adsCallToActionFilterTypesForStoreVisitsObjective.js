__d(
  "adsCallToActionFilterTypesForStoreVisitsObjective",
  ["AdsAdgroupSemanticFields", "adsAdgroupIsDynamicProductCarouselAd"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i = e;
      r("adsAdgroupIsDynamicProductCarouselAd")(t, n, o) &&
        (i = i.filter(function (e) {
          return e.name !== "CALL_NOW" && e.name !== "GET_DIRECTIONS";
        }));
      var l = r("AdsAdgroupSemanticFields").callToActionType.get(n, t);
      return (
        a &&
          l !== "CALL_NOW" &&
          (i = i.filter(function (e) {
            return e.name !== "CALL_NOW";
          })),
        a &&
          l !== "MESSAGE_PAGE" &&
          (i = i.filter(function (e) {
            return e.name !== "MESSAGE_PAGE";
          })),
        i
      );
    }
    l.default = e;
  },
  98,
);
