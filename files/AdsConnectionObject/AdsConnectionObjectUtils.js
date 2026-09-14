__d(
  "AdsConnectionObjectUtils",
  ["AdsAPIConnectionObjectPaths", "AdsDestinationTypes", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("getByPath")(e, r("AdsAPIConnectionObjectPaths").OBJECT_TYPE) ===
        r("AdsDestinationTypes").APP
      );
    }
    function s(e) {
      return (
        r("getByPath")(e, r("AdsAPIConnectionObjectPaths").OBJECT_TYPE) ===
        r("AdsDestinationTypes").EVENT
      );
    }
    ((l.isApp = e), (l.isEvent = s));
  },
  98,
);
