__d(
  "adsSignalsWebsitePromotedObjectEventNameIDMetadataSelector",
  [
    "LoadObject",
    "SignalsEventNameMetadataDataProvider",
    "adsCreateSelector",
    "adsSignalsWebsitePromotedObjectSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("SignalsEventNameMetadataDataProvider").toFluxSelector(),
          r("adsSignalsWebsitePromotedObjectSelector"),
        ],
        function (t, n) {
          var e;
          if (
            n != null &&
            (n == null ? void 0 : n.websitePromotedObject) != null &&
            (n == null || (e = n.websitePromotedObject) == null
              ? void 0
              : e.offsite_conversion_event_id) != null
          ) {
            var o,
              a =
                n == null || (o = n.websitePromotedObject) == null
                  ? void 0
                  : o.offsite_conversion_event_id;
            return t.get({ eventNameID: a });
          }
          return r("LoadObject").withValue(null, { creatorModuleID: i.id });
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
