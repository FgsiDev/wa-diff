__d(
  "adsUIEditorSignalsWebsitePromotedObjectEventNameIDToPixelIDSelector",
  [
    "adsCreateSelector",
    "adsUIEditorSignalsWebsitePromotedObjectEventNameIDMetadataSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r(
            "adsUIEditorSignalsWebsitePromotedObjectEventNameIDMetadataSelector",
          ),
        ],
        function (t) {
          var e;
          return t.hasValueWithoutError()
            ? (e = t.getValue()) == null
              ? void 0
              : e.data_source.id
            : null;
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
