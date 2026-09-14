__d(
  "AdsCanvasClearReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCanvasClearDataActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "PartnershipDynamicAdsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = e;
              return (
                (o(
                  "PartnershipDynamicAdsGatingUtils",
                ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() ||
                  o(
                    "PartnershipDynamicAdsGatingUtils",
                  ).shouldEnableContentSearchForPartnershipAdsDynamicAds()) &&
                  (t = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_instagram_media_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_facebook_post_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .instagram_boost_post_access_token.delete,
                  )(t)),
                o(
                  "PartnershipDynamicAdsGatingUtils",
                ).shouldEnableContentSearchForPartnershipAdsDynamicAds() &&
                  (t = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .facebook_boost_post_access_token.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .content_search_input.delete,
                  )(t)),
                t
              );
            });
          },
          o("AdsCanvasClearDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
