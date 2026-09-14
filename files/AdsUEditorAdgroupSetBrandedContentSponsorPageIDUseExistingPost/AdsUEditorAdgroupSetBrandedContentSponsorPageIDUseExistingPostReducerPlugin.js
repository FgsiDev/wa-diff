__d(
  "AdsUEditorAdgroupSetBrandedContentSponsorPageIDUseExistingPostReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetBrandedContentSponsorPageIDUseExistingPostDataActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUseExistingPostModalConstants",
    "BrandedContentAdsUtils",
    "adsUEditorAdgroupIsCTXBrandedContentEligibleSelector",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = t
        ? 2
        : n != null
          ? n
          : o("BrandedContentAdsUtils").getDefaultPartnershipAdFormat();
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.branded_content.ad_format.set(a, e);
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            businessID: r("AdsAccountStore").getSelectedBusinessID,
            isCTXBrandedContentEligible: r(
              "adsUEditorAdgroupIsCTXBrandedContentEligibleSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.businessID,
              l = a.isCTXBrandedContentEligible,
              s = a.parentData;
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a = t;
              (n.useExistingPostBrandedContentSponsorPageID !== null &&
                n.useExistingPostBrandedContentSponsorPageID !== "0" &&
                (a = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.facebook_branded_content.sponsor_page_id.set(
                  n.useExistingPostBrandedContentSponsorPageID,
                  a,
                )),
                n.isBrandedContentSwitchedOn === !0 &&
                  ((a = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative
                      .instagram_branded_content.sponsor_id.delete,
                    o("AdsInstagramUserIdMigrationUtils")
                      .IGIDV2MigrationAccessors.creative.instagram_user_id
                      .delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .branded_content_boosting_type.delete,
                  )(a)),
                  r("isFalsey")(n.primaryPageID) &&
                    ((a = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.object_id.delete,
                      r("AdsAdgroupRecordAccessors").creative.object_story_id
                        .delete,
                    )(a)),
                    n.boostingType === "SPONSOR_BOOST" &&
                      (a = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_id.set(
                        n.useExistingPostBrandedContentSponsorPageID,
                        a,
                      ))),
                  r("isTruthy")(n.instagramBrandedContentSponsorID) &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.instagram_branded_content.sponsor_id.set(
                      n.instagramBrandedContentSponsorID,
                      a,
                    )),
                  (r("gkx")("15865")
                    ? r("isTruthy")(n.instagramUserID)
                    : r("isTruthy")(n.instagramActorID)) &&
                    (a = o(
                      "AdsInstagramUserIdMigrationUtils",
                    ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(
                      n.instagramActorID,
                      n.instagramUserID,
                      a,
                    )),
                  r("isTruthy")(n.boostingType) &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content_boosting_type.set(
                      n.boostingType,
                      a,
                    ))));
              var u = r(
                "AdsAdgroupRecordAccessors",
              ).creative.branded_content.ad_format.get(t);
              if (
                ((a = e(
                  a,
                  n.isSuspectedPAConversion != null
                    ? n.isSuspectedPAConversion
                    : !1,
                  u,
                )),
                n.isBrandedContentOrEligibleCollabPost === !0 ||
                  n.selectedPostTab ===
                    o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE
                      .PARTNER_CONTENT ||
                  n.isSuspectedPAConversion === !0)
              ) {
                var c, d, m;
                (r("justknobx")._("5191") &&
                  (a = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.acting_business_id.set(i, a)),
                  n.isBrandedContentSwitchedOn !== !0 &&
                    n.isInstagramPost === !0 &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ui_version.set(1, a)),
                  n.isBrandedContentSwitchedOn !== !0 &&
                    n.isInstagramPost === !1 &&
                    ((a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.ui_version.set(1, a)),
                    (r("gkx")("15865")
                      ? r("isFalsey")(n.instagramUserID)
                      : r("isFalsey")(n.instagramActorID)) &&
                      (a = o(
                        "AdsInstagramUserIdMigrationUtils",
                      ).IGIDV2MigrationAccessors.creative.instagram_user_id.delete(
                        a,
                      ))),
                  n.partnerPageID != null &&
                    n.partnerPageID !== "0" &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.facebook_branded_content.sponsor_page_id.set(
                      n.partnerPageID,
                      a,
                    )),
                  (a = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.instagram_branded_content.sponsor_id.delete(a)),
                  n.instagramBrandedContentSponsorID != null &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.instagram_branded_content.sponsor_id.set(
                      n.instagramBrandedContentSponsorID,
                      a,
                    )),
                  (a = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content_boosting_type.set(
                    n.boostingType,
                    a,
                  )),
                  r("isTruthy")(n.primaryPageID) &&
                    n.isInstagramPost === !0 &&
                    ((a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_id.delete(a)),
                    (a = r("AdsAdgroupRecordAccessors").creative.object_id.set(
                      n.primaryPageID,
                      a,
                    ))),
                  (r("gkx")("15865")
                    ? r("isTruthy")(n.instagramUserID)
                    : r("isTruthy")(n.instagramActorID)) &&
                    ((a = o(
                      "AdsInstagramUserIdMigrationUtils",
                    ).IGIDV2MigrationAccessors.creative.instagram_user_id.delete(
                      a,
                    )),
                    (a = o(
                      "AdsInstagramUserIdMigrationUtils",
                    ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(
                      n.instagramActorID,
                      n.instagramUserID,
                      a,
                    ))));
                var p = r("nullthrows")(s.get(t.id)),
                  _ = p.campaign,
                  f =
                    n.isFBCTXCTAPost === !0 ||
                    (n.isInstagramPost === !0 &&
                      (o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(
                        (c = t.creative) == null ||
                          (c = c.call_to_action) == null
                          ? void 0
                          : c.type,
                      ) ||
                        o(
                          "AdsUEditorMessagingDestinationUtils",
                        ).isClickToMessageAdDestination(_.destination_type)));
                if (
                  (l === !0 &&
                    ((d = _.promoted_object) == null ? void 0 : d.page_id) !=
                      null) ||
                  f === !0
                ) {
                  var g, h;
                  a =
                    ((g = _.promoted_object) == null ? void 0 : g.page_id) !=
                    null
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.branded_content.promoted_page_id.set(
                          (h = _.promoted_object) == null ? void 0 : h.page_id,
                          a,
                        )
                      : o(
                          "AdsInstagramBrandedContentUtils",
                        ).setPromotedPageIDforL1Ads(a);
                } else
                  ((m = a.creative) == null || (m = m.branded_content) == null
                    ? void 0
                    : m.promoted_page_id) != null &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.promoted_page_id.delete(a));
              } else if (
                r("isFalsey")(n.instagramBrandedContentSponsorID) &&
                r("isFalsey")(n.useExistingPostBrandedContentSponsorPageID)
              ) {
                var y;
                ((a = (y = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.instagram_branded_content.delete(a)),
                  (a = y.creative.branded_content_boosting_type.delete(a)),
                  (a = y.creative.branded_content.ad_format.delete(a)),
                  (a =
                    y.creative.facebook_branded_content.sponsor_page_id.delete(
                      a,
                    )),
                  (a = y.creative.branded_content.promoted_page_id.delete(a)));
              }
              return (
                (a = o(
                  "AdsPartnershipAdsPlacementsMutators",
                ).maySyncPartnershipAdsOrganicPosts(t, a)),
                a
              );
            });
          },
          o(
            "AdsUEditorAdgroupSetBrandedContentSponsorPageIDUseExistingPostDataActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
