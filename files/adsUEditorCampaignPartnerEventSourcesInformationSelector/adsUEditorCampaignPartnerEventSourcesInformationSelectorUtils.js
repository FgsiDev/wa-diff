__d(
  "adsUEditorCampaignPartnerEventSourcesInformationSelectorUtils",
  ["AdsAPIObjectives", "AdsBulkValueUtils", "LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, l, s, u) {
      var c = o("AdsBulkValueUtils").getUniformValueOrDefault(n, null),
        d = o("AdsBulkValueUtils").getUniformValueOrDefault(a, null),
        m = o("AdsBulkValueUtils").getUniformValueOrDefault(l, null),
        p =
          t === r("AdsAPIObjectives").CONVERSIONS &&
          m != null &&
          e.isPartnerSourcesSelected &&
          e.productSetID == null,
        _ = u && t === r("AdsAPIObjectives").CONVERSIONS && m != null,
        f =
          (t === r("AdsAPIObjectives").CONVERSIONS &&
            (c != null || d != null) &&
            m != null) ||
          p ||
          _;
      if (
        !f ||
        (e.isPartnerSourcesSelected && e.productSetID != null) ||
        m == null
      )
        return r("LoadObject").withValue(e, { creatorModuleID: i.id });
      var g = s.get(m);
      return g.mapValue(function (e) {
        var t = r("immutable").Record({
          isPartnerSourcesSelected: !0,
          parentCatalogID: e.parentCatalogID,
          productSetID: m,
          selectedCatalogSegmentID: e.catalogID,
          selectedPartnerID: e.businessID,
        });
        return t();
      });
    }
    l.adsUEditorCampaignPartnerEventSourcesInformation = e;
  },
  98,
);
