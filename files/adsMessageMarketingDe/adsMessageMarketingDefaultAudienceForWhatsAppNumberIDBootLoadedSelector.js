__d(
  "adsMessageMarketingDefaultAudienceForWhatsAppNumberIDBootLoadedSelector",
  ["AdsSelectorBootloadedStore", "JSResource", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return null;
      },
      s = r("AdsSelectorBootloadedStore").create(
        r("JSResource")(
          "adsMessageMarketingDefaultAudienceForWhatsAppNumberIDSelector",
        ).__setRef(
          "adsMessageMarketingDefaultAudienceForWhatsAppNumberIDBootLoadedSelector",
        ),
      ),
      u = r("adsCreateStoreSelector")(
        [s],
        function (n) {
          return s.onLoadedSelector(e);
        },
        {
          name:
            i.id +
            ".adsMessageMarketingDefaultAudienceForWhatsAppNumberIDBootLoadedSelector",
        },
      ),
      c = u;
    l.default = c;
  },
  98,
);
