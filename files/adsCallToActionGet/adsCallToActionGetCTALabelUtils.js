__d(
  "adsCallToActionGetCTALabelUtils",
  [
    "invariant",
    "AdsBulkValueUtils",
    "AdsCallToActionTypes",
    "AdsUEditorAdgroupCallToActionStrings",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "NO_BUTTON",
      u = "REMIND_ME";
    function c(t) {
      if (!t) return null;
      var n = o("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(t);
      return n === e || !n
        ? null
        : n === o("AdsBulkValueUtils").MIXED_VALUE
          ? o("AdsUEditorAdgroupCallToActionStrings").MIXED_STATE
          : n === u
            ? null
            : d(n);
    }
    function d(t) {
      if (!t || t === e || t === u) return null;
      if (t === o("AdsBulkValueUtils").MIXED_VALUE)
        return o("AdsUEditorAdgroupCallToActionStrings").MIXED_STATE;
      var n = r("getObjectValues")(r("AdsCallToActionTypes").TYPES),
        a = n.filter(function (e) {
          return e.name === t;
        });
      return (a.length || s(0, 2765), a[0].text);
    }
    ((l.adsCallToActionGetCTALabel = c),
      (l.adsCallToActionGetCTALabelFromCTAType = d));
  },
  98,
);
