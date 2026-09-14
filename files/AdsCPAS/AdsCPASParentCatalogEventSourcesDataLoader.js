__d(
  "AdsCPASParentCatalogEventSourcesDataLoader",
  [
    "AdsInterfaceCampaignPartnerEventSourcesLogger",
    "AsyncRequest",
    "XCPASParentCatalogAssociatedEventSourcesDataFetchingControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccountID,
        n = e.catalogSegmentID,
        a = r(
          "XCPASParentCatalogAssociatedEventSourcesDataFetchingControllerRouteBuilder",
        ).buildUri({ ad_account_id: t, catalog_segment_id: n });
      return new (r("AsyncRequest"))()
        .setURI(a)
        .exec()
        .then(function (e) {
          if (e.getError() !== 0) {
            var t = e.getErrorSummary() || "";
            return (
              o(
                "AdsInterfaceCampaignPartnerEventSourcesLogger",
              ).logErrorFetchingPartnerEventSources(n, t.toString()),
              []
            );
          }
          var r = e.getPayload(),
            a = r.error,
            i = r.requests;
          return (
            a == null
              ? o(
                  "AdsInterfaceCampaignPartnerEventSourcesLogger",
                ).logSuccessFetchingPartnerEventSources(n)
              : o(
                  "AdsInterfaceCampaignPartnerEventSourcesLogger",
                ).logErrorFetchingPartnerEventSources(n, a),
            i
          );
        });
    }
    l.getParentCatalogEventSourcesData = e;
  },
  98,
);
