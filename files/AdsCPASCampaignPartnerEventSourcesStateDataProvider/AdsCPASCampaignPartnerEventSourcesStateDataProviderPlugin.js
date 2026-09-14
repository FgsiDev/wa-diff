__d(
  "AdsCPASCampaignPartnerEventSourcesStateDataProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        isPartnerSourcesSelected: !1,
        parentCatalogID: null,
        productSetID: null,
        selectedCatalogSegmentID: null,
        selectedPartnerID: null,
        selectedSourceType: null,
        caffPromotedCatalogType: null,
      }),
      s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
