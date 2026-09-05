__d(
  "PartnershipAdsHubContentPageDetailModal.entrypoint",
  [
    "JSResourceForInteraction",
    "PartnershipAdsHubContentPageDetailModalQuery$Parameters",
    "PartnershipAdsHubContentPageDetailViewProfilesRowQuery$Parameters",
    "PartnershipAdsHubContentPageDetailViewTaggedAccountsQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.businessID,
          r = t.routeParams,
          o = r.selected_business_ig_user_id,
          a = r.selected_business_page_id,
          i = r.selected_content_id;
        return {
          queries: {
            PartnershipAdsHubContentPageDetailModalQueryReference: {
              options: { fetchPolicy: "store-or-network" },
              parameters: n(
                "PartnershipAdsHubContentPageDetailModalQuery$Parameters",
              ),
              variables: {
                businessAssetFBPageID: a,
                businessAssetIGUserID: o,
                businessID: e,
                contentID: i,
              },
            },
            PartnershipAdsHubContentPageDetailViewProfilesRowQueryReference: {
              options: { fetchPolicy: "store-or-network" },
              parameters: n(
                "PartnershipAdsHubContentPageDetailViewProfilesRowQuery$Parameters",
              ),
              variables: {
                businessAssetFBPageID: a,
                businessAssetIGUserID: o,
                businessID: e,
                contentID: i,
              },
            },
            PartnershipAdsHubContentPageDetailViewTaggedAccountsQueryReference:
              {
                options: { fetchPolicy: "store-or-network" },
                parameters: n(
                  "PartnershipAdsHubContentPageDetailViewTaggedAccountsQuery$Parameters",
                ),
                variables: {
                  businessAssetFBPageID: a,
                  businessAssetIGUserID: o,
                  businessID: e,
                  contentID: i,
                },
              },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "PartnershipAdsHubContentPageDetailModal.react",
      ).__setRef("PartnershipAdsHubContentPageDetailModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
