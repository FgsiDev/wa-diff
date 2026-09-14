__d(
  "adsMessengerDataModelSetAutofillMessage",
  ["AdsMessengerJSONPaths", "adsMessengerDataModelClone", "setByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.AUTOFILL_MESSAGE;
      if (!n) return e;
      var o = r("adsMessengerDataModelClone")(e);
      return (r("setByPath")(o, n, t), o);
    }
    l.default = e;
  },
  98,
);
