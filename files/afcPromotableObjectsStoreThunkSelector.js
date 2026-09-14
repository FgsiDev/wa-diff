__d(
  "afcPromotableObjectsStoreThunkSelector",
  ["AFCPromotableObjectStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AFCPromotableObjectStore"),
      function (e) {
        return r("AFCPromotableObjectStore").get(e);
      },
    );
    l.default = e;
  },
  98,
);
