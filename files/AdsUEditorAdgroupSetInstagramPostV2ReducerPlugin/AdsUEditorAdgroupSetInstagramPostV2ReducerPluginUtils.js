__d(
  "AdsUEditorAdgroupSetInstagramPostV2ReducerPluginUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFormatMutatorUtils",
    "AdsCreativeSiteLinksAPICallUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsExistingPostCTAUtils",
    "AdsInstagramReelErrorUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorCampaignShopAdsUtils",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageCTDFeatureGating",
    "PEFunnelLogger",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCallToActionGetDefaultCallToActionType",
    "adsCampaignPromotedObjectSelector",
    "adsUEditorCreativeSiteLinksNoticeDataSelector",
    "gkx",
    "immutable",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("immutable").List(
        e.map(function (e) {
          var t, n;
          return r("immutable").Map({
            type: "PRODUCT_TAG",
            position_spec: r("immutable").Map({
              x: (t = e.x) != null ? t : 0.5,
              y: (n = e.y) != null ? n : 0.5,
              width: 1,
              height: 1,
            }),
            product_tag_spec: r("immutable").Map({
              product_id: String(e.product_id),
            }),
          });
        }),
      );
    }
    function s(t, n, a, i, l, s, c, d) {
      var m, p, _, f, g, h;
      d === void 0 && (d = !1);
      var y = o(
          "AdsUEditorCampaignShopAdsUtils",
        ).isOmnichannelShopAutomaticCampaign(n),
        C = (m = c.post) == null ? void 0 : m.message,
        b = r(
          "AdsAdgroupRecordAccessors",
        ).creative.source_instagram_media_id.get(t),
        v =
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content_boosting_type.get(t) != null,
        S =
          r("justknobx")._("3367") &&
          b != null &&
          b === c.postID &&
          !o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(n.destination_type) &&
          !v,
        R = t;
      R = t.withMutations(function (t) {
        var i,
          l =
            (i = c.post) == null || (i = i.product_tags) == null
              ? void 0
              : i.data,
          s =
            c.isSuggestedPostDefaulting === !0
              ? r("AdsAdgroupRecordAccessors").creative.instagram_actor_id.get(
                  t,
                )
              : null,
          d =
            c.isSuggestedPostDefaulting === !0
              ? r("AdsAdgroupRecordAccessors").creative.instagram_user_id.get(t)
              : null;
        o("AdsMutators").chain(
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
              e,
              "RAW_TEXT",
            );
          },
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
          r("AdsAdgroupRecordAccessors").creative.source_facebook_post_id
            .delete,
          r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
          r("AdsAdgroupRecordAccessors").creative.instagram_story_id.delete,
          r("AdsAdgroupRecordAccessors").creative.object_id.set(c.pageID),
          function (e) {
            return o("AdsCreativeFormatMutatorUtils").mutateCreativeMediaType(
              e,
              "EXISTING_INSTAGRAM_POST",
            );
          },
          r("AdsAdgroupRecordAccessors").creative.source_instagram_media_id.set(
            c.postID,
          ),
          r("AdsAdgroupRecordAccessors").creative.portrait_customizations
            .delete,
          r("AdsAdgroupRecordAccessors").creative.interactive_components_spec
            .delete,
          r("AdsAdgroupRecordAccessors").creative.instant_checkout_setting
            .delete,
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .ad_handle_type.delete,
          r("AdsAdgroupRecordAccessors").creative.branded_content.testimonial
            .delete,
          function (e) {
            return o(
              "AdsUEditorMessagingDestinationUtils",
            ).isClickToMessageAdDestination(n.destination_type)
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.existing_post_title.delete(e)
              : e;
          },
          S
            ? function (e) {
                return e;
              }
            : r("AdsAdgroupRecordAccessors").creative.body.set(C),
          function (t) {
            var n, a, i;
            if (l == null || l.length === 0)
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.delete(t);
            var s = (n = c.post) == null ? void 0 : n.tagged_products,
              u =
                (a =
                  s == null
                    ? void 0
                    : s.should_populate_interactive_component_spec) != null
                  ? a
                  : !1,
              d = r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.delete(t);
            if (u) {
              var m = e(l);
              d = r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.components.set(m, d);
            }
            var p = o("AdsExistingPostCTAUtils").getProductTagCTALink(
              l,
              s == null ? void 0 : s.data,
              (i = c.post) == null ? void 0 : i.product_tag_creator_offsite_url,
            );
            return p == null
              ? d
              : o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.type.set("SHOP_NOW"),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.value.link.set(p),
                )(d);
          },
          function (e) {
            return (r("gkx")("15865") ? d != null : s != null)
              ? o(
                  "AdsInstagramUserIdMigrationUtils",
                ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(
                  s,
                  d,
                  e,
                )
              : e;
          },
        )(t);
        var m = y
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.onsite_destinations.get(t)
          : null;
        (!c.isMultiDestinationAd &&
          !o("AdsInstagramReelErrorUtils").isReelWithCopyrightMusic(c.post) &&
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(t),
          c.objectType &&
            r("AdsAdgroupRecordAccessors").creative.object_type.set(
              c.objectType,
              t,
            ),
          y &&
            o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.onsite_destinations.set(m),
              r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
                "SHOP_NOW",
              ),
            )(t));
        var p = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
            a.objective,
            n,
          ),
          _ = o("AdsODAXUtils").maybeTranslateObjective(
            a.objective,
            p,
            n.optimization_goal,
          ),
          f = r("AdsAdgroupRecordAccessors").creative.call_to_action.type.get(
            t,
          );
        if ((f == null || f === "NO_BUTTON") && u(p, a.objective, _)) {
          var g = r("adsCallToActionGetDefaultCallToActionType")(_, p);
          g != null &&
            r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
              g,
              t,
            );
        }
      });
      var L = { campaign: n, campaignGroup: a, adgroup: R };
      R = o(
        "adsAutomaticFlowMutationSetDoFSpec",
      ).adsStandardEnhancementsExistingPostSpecMutator(
        i,
        L,
        l,
        c.post,
        void 0,
        void 0,
        c.posts,
      );
      var E = c.posts != null && c.posts.length > 1;
      !E && o("AdsInstagramReelErrorUtils").isReelWithCopyrightMusic(c.post)
        ? (R = o("AdsUEditorAdgroupAudiosAdsMutators").maybeSetAudioSwap(R))
        : (R = o("AdsUEditorAdgroupAudiosAdsMutators").maybeRemoveAudioSwap(R));
      var k =
          (p = c.post) == null || (p = p.partnership_ads_identities) == null
            ? void 0
            : p.secondary_identities,
        I = r("isTruthy")(k) && k.length > 0,
        T =
          (_ = R.creative) == null ||
          (_ = _.degrees_of_freedom_spec) == null ||
          (_ = _.creative_features_spec) == null
            ? void 0
            : _.product_extensions;
      R = o(
        "adsAutomaticFlowMutationSetDoFSpec",
      ).adsSetProductExtensionsExistingPostMutator(
        R,
        I,
        o("AdsMetadataConnectedSourcesUtils").isCTWADestinationByCampaign(n),
        o("AdsMetadataConnectedSourcesUtils").isEligibleForCtdPeByCampaign(n) &&
          o(
            "ClickToMessageCTDFeatureGating",
          ).enableCTDProductExtensionsIGPlacement(!0),
        d,
      );
      var D =
        (f = R.creative) == null ||
        (f = f.degrees_of_freedom_spec) == null ||
        (f = f.creative_features_spec) == null
          ? void 0
          : f.product_extensions;
      if (T == null && D != null) {
        var x,
          $,
          P = {
            adgroup_id: R.id,
            campaign_group_id: a.id,
            campaign_id: n.id,
            object_creation_source: "existing_post",
            object_level: "ad_level",
          },
          N = {
            entry_point: "existing_post_mutation",
            opt_in_source:
              (x =
                ($ = R.creative) == null ||
                ($ = $.creative_sourcing_spec) == null ||
                ($ = $.catalog) == null ||
                ($ = $.action_metadata) == null
                  ? void 0
                  : $.type) != null
                ? x
                : "DEFAULT",
          };
        D.enroll_status === "OPT_IN"
          ? o("PEFunnelLogger").logL1DataConsentDefaultOn(P, N)
          : o("PEFunnelLogger").logL1DataConsentDefaultOff(P, N);
      }
      var M =
          (g = t.creative) == null || (g = g.creative_sourcing_spec) == null
            ? void 0
            : g.site_links_spec,
        w = r("adsUEditorCreativeSiteLinksNoticeDataSelector")(
          r("AdsEditingAdgroupEditorContext"),
        );
      if (
        r("justknobx")._("3185") &&
        (M == null || M.size === 0) &&
        ((h = w.getValue()) == null ? void 0 : h.defaultOnType) == null &&
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForSiteExtensionsByCampaignAndAdgroup(n, a, t)
      ) {
        var A,
          F = o("AdsPageUtils").getPageID(L.adgroup),
          O = r("adsCampaignPromotedObjectSelector")(n.id),
          B =
            (A = c.post) == null ||
            (A = A.call_to_action) == null ||
            (A = A.value) == null
              ? void 0
              : A.link;
        o("AdsCreativeSiteLinksAPICallUtils")
          .loadDomainAndSiteLinksWithMutation(
            n,
            B,
            i.account_id,
            t.id,
            O,
            "AdsUEditorAdgroupSetInstagramPostV2ReducerPluginUtils",
            F,
          )
          .then(function () {})
          .catch(function () {});
      }
      return (
        (R = o(
          "adsAutomaticFlowMutationSetDoFSpec",
        ).adsSetSiteExtensionsExistingPostMutator(t, R)),
        R
      );
    }
    function u(e, t, n) {
      var a =
        n === r("AdsAPIObjectives").CONVERSIONS &&
        e === r("AdsPromotedObjectTypes").PIXEL;
      return a
        ? o("ClickToMessageCTDFeatureGating").isCTADefaultingEnabled()
        : !1;
    }
    l.updateAdgroupWithSelectedInstagramPostV2 = s;
  },
  98,
);
