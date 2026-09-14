__d(
  "adsUIEditorSignalsWebsitePromotedObjectEventNameIDMetadataSelector",
  [
    "AdsUEditorCampaignWebsitePromotedObjectSelectors",
    "LoadObject",
    "SignalsEventNameMetadataDataProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("SignalsEventNameMetadataDataProvider").toFluxSelector(),
          o("AdsUEditorCampaignWebsitePromotedObjectSelectors")
            .websitePromotedObjectSelector,
        ],
        function (t, n) {
          if (
            n != null &&
            (n == null ? void 0 : n.offsite_conversion_event_id) != null
          ) {
            var e = n == null ? void 0 : n.offsite_conversion_event_id;
            return t.get({ eventNameID: e });
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
