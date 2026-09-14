__d(
  "adsMessengerDataModelSetIceBreakers",
  [
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetIceBreakerPath",
    "deleteByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsMessengerDataModelGetIceBreakerPath")(e);
      if (!n) return e;
      var o = r("adsMessengerDataModelClone")(e);
      return (t ? r("setByPath")(o, n, t) : r("deleteByPath")(o, n), o);
    }
    l.default = e;
  },
  98,
);
