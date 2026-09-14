__d(
  "AdsCreativePixelUrlDataProviderPlugin",
  ["AdsGraphAPI", "loadObjectMapProvider", "stableStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      initialState: r("loadObjectMapProvider").keyed(s, function (e) {
        return r("stableStringify")(e);
      }),
    };
    function s(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("adspixel", e.pixelID)
        .get({ fields: ["domains"], limit: 20 })
        .then(function (e) {
          var t;
          return (t = e.domains) != null ? t : [];
        });
    }
    var u = e;
    l.default = u;
  },
  98,
);
