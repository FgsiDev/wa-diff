__d(
  "AdsUEditorAdgroupSetBrandedContentSponsorPageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBrandedContentSponsorPageDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.facebook_branded_content.sponsor_page_id.set(
                  t.pageID,
                  n,
                )),
                t.boostingType &&
                  r("AdsAdgroupRecordAccessors").creative.branded_content
                    .product_set_partner_selection_status != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content_boosting_type.set(
                    t.boostingType,
                    n,
                  )),
                (n = o(
                  "AdsPartnershipAdsPlacementsMutators",
                ).clearPartnershipAdsOrganicPostsOnIdentityChange(e, n)),
                n
              );
            });
          },
          r("AdsUEditorAdgroupSetBrandedContentSponsorPageDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
