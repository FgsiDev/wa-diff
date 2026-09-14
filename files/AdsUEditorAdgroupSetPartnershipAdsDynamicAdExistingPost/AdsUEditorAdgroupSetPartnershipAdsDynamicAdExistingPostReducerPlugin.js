__d(
  "AdsUEditorAdgroupSetPartnershipAdsDynamicAdExistingPostReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPartnershipAdsDynamicAdExistingPostDataActionFlux",
    "AdsUseExistingPostModalConstants",
    "BrandedContentAdsUtils",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (
                t.isBrandedContentSwitchedOn !== !0 ||
                t.selectedPostTab !==
                  o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE
                    .PARTNER_CONTENT
              )
                return e;
              var n = o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative
                  .instagram_branded_content.sponsor_id.delete,
                r("AdsAdgroupRecordAccessors").creative.facebook_branded_content
                  .sponsor_page_id.delete,
                o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
                  .creative.instagram_user_id.delete,
                o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors
                  .creative.object_story_spec.instagram_user_id.delete,
                r("AdsAdgroupRecordAccessors").creative
                  .branded_content_boosting_type.delete,
                r("AdsAdgroupRecordAccessors").creative.object_id.delete,
                r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .page_id.delete,
                r("AdsAdgroupRecordAccessors").creative.branded_content
                  .promoted_page_id.delete,
              )(e);
              (r("isTruthy")(t.primaryPageID)
                ? (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.page_id.set(t.primaryPageID, n))
                : t.boostingType === "SPONSOR_BOOST" &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.page_id.set(
                    t.useExistingPostBrandedContentSponsorPageID,
                    n,
                  )),
                (r("gkx")("15865")
                  ? r("isTruthy")(t.instagramUserID)
                  : r("isTruthy")(t.instagramActorID)) &&
                  (n = o(
                    "AdsInstagramUserIdMigrationUtils",
                  ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
                    t.instagramActorID,
                    t.instagramUserID,
                    n,
                  )),
                r("isTruthy")(t.useExistingPostBrandedContentSponsorPageID) &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.facebook_branded_content.sponsor_page_id.set(
                    t.useExistingPostBrandedContentSponsorPageID,
                    n,
                  )),
                r("isTruthy")(t.instagramBrandedContentSponsorID) &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.instagram_branded_content.sponsor_id.set(
                    t.instagramBrandedContentSponsorID,
                    n,
                  )),
                r("isTruthy")(t.boostingType) &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content_boosting_type.set(
                    t.boostingType,
                    n,
                  )));
              var a = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.branded_content.ad_format.get(e),
                i =
                  a != null
                    ? a
                    : o(
                        "BrandedContentAdsUtils",
                      ).getDefaultPartnershipAdFormat();
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.branded_content.ad_format.set(i, n)),
                n
              );
            });
          },
          o(
            "AdsUEditorAdgroupSetPartnershipAdsDynamicAdExistingPostDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
