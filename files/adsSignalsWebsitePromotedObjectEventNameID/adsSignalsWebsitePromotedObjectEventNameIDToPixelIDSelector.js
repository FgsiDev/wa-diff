__d(
  "adsSignalsWebsitePromotedObjectEventNameIDToPixelIDSelector",
  [
    "adsCreateSelector",
    "adsSignalsWebsitePromotedObjectEventNameIDMetadataSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsSignalsWebsitePromotedObjectEventNameIDMetadataSelector")],
        function (t) {
          if (!t.hasValueWithoutError()) return null;
          var e = t.getValueEnforcing();
          return e == null ? void 0 : e.data_source.id;
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
