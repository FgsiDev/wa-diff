__d(
  "adsBusinessWABAV2BootloadedSelector",
  [
    "AdsSelectorBootloadedStore",
    "JSResource",
    "LoadObject",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsSelectorBootloadedStore").create(
        r("JSResource")("adsBusinessWABAV2Selector").__setRef(
          "adsBusinessWABAV2BootloadedSelector",
        ),
      ),
      s = r("adsCreateStoreSelector")(
        [e],
        function (n) {
          return e.onLoadedSelector(
            r("LoadObject").withValue([], { creatorModuleID: i.id }),
          );
        },
        { name: i.id + ".selector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
