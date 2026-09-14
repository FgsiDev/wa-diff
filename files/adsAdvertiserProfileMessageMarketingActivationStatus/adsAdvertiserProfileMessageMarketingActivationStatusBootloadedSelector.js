__d(
  "adsAdvertiserProfileMessageMarketingActivationStatusBootloadedSelector",
  [
    "AdsSelectorBootloadedStore",
    "JSResource",
    "LoadObject",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsSelectorBootloadedStore").create(
        r("JSResource")(
          "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
        ).__setRef(
          "adsAdvertiserProfileMessageMarketingActivationStatusBootloadedSelector",
        ),
      ),
      s = r("adsCreateStoreSelector")(
        [e],
        function (n) {
          return e.onLoadedSelector(
            r("LoadObject").withValue(!1, { creatorModuleID: i.id }),
          );
        },
        { name: i.id + ".selector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
