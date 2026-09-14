__d(
  "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsEditorPostEditMode",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramProfileMutators",
    "AdsUEditorInstagramUtils",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUnifiedProfileVisitUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.adgroup,
        n = t.campaignGroupPromotedPageID,
        a = t.instagramAccount,
        i = t.objective,
        l = t.pageID,
        u = t.pages,
        c = t.postEditMode,
        d = t.specPlugin,
        m = r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE,
        p = o("AdsMutators").chain(
          function (e) {
            return c === r("AdsEditorPostEditMode").INLINE
              ? o("AdsUEditorInstagramProfileMutators").setInstagramProfileCTA({
                  pages: u,
                  adgroup: e,
                  campaignGroupPromotedPageID: n,
                  objective: i,
                  specPlugin: d,
                  promotedObjectType: m,
                })
              : e;
          },
          function (e) {
            return a != null
              ? o("AdsUEditorInstagramProfileMutators").setCTALinkAndAppLink({
                  adgroup: e,
                  specPlugin: d,
                  instagramAccount: a,
                  postEditMode: c,
                })
              : e;
          },
          function (e) {
            return s(e, a, l);
          },
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.set(
              r("ApiDynamicCreativeOptimizationTypes")
                .UNIFIED_PROFILE_VISIT_DESTINATION,
              e,
            );
          },
        );
      return p(e);
    };
    function s(e, t, n) {
      var a = r("immutable").List(),
        i = a.size,
        l = o("AdsUEditorInstagramUtils").getInstagramProfileLinks(t);
      if (l != null) {
        var s = l.appLink,
          u = l.externalLink;
        ((a = a
          .setIn([i, "type"], "VIEW_INSTAGRAM_PROFILE")
          .setIn([i, "value", "link"], u)
          .setIn([i, "value", "app_link"], s)),
          i++);
      } else {
        var c,
          d =
            (c = e.creative) == null ||
            (c = c.asset_feed_spec) == null ||
            (c = c.call_to_actions) == null
              ? void 0
              : c.find(function (e) {
                  return (
                    (e == null ? void 0 : e.get("type")) ===
                    "VIEW_INSTAGRAM_PROFILE"
                  );
                });
        d != null && ((a = a.set(i, d)), i++);
      }
      if (n != null) {
        var m = o(
          "AdsUnifiedProfileVisitUtils",
        ).getExternalLinkForFacebookPageVisit(n);
        a = a
          .setIn([i, "type"], "VISIT_PROFILE")
          .setIn([i, "value", "link"], m);
      }
      var p = o("AdsUEditorUnifiedCreationAdgroupMutators").deleteAssetFeedSpec(
        e,
      );
      return (
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(a, e)),
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_action_types.delete(p)),
        (p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.delete(p)),
        p
      );
    }
    var u = function (t) {
        var e = t.adgroup,
          n = t.campaignGroupPromotedPageID,
          a = t.instagramAccount,
          i = t.objective,
          l = t.pages,
          s = t.postEditMode,
          u = t.specPlugin,
          c = r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE,
          d = o("AdsMutators").chain(
            function (e) {
              return s === r("AdsEditorPostEditMode").INLINE
                ? o(
                    "AdsUEditorInstagramProfileMutators",
                  ).setInstagramProfileCTA({
                    pages: l,
                    adgroup: e,
                    campaignGroupPromotedPageID: n,
                    objective: i,
                    specPlugin: u,
                    promotedObjectType: c,
                  })
                : e;
            },
            function (e) {
              return a != null
                ? o("AdsUEditorInstagramProfileMutators").setCTALinkAndAppLink({
                    adgroup: e,
                    specPlugin: u,
                    instagramAccount: a,
                    postEditMode: s,
                  })
                : e;
            },
          );
        return d(e);
      },
      c = function (t) {
        var e,
          n = t.adgroup,
          a = t.campaignGroupPromotedPageID,
          i = t.objective,
          l = t.pages,
          s = t.specPlugin,
          u = r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE,
          c =
            (e = n.creative) == null || (e = e.object_story_spec) == null
              ? void 0
              : e.page_id;
        return o("AdsMutators").chain(
          function (e) {
            return o("AdsUEditorCallToActionMutators").setCallToAction({
              callToActionType: "VISIT_PROFILE",
              pages: l,
              cachedCallToActionLink: null,
              adgroup: e,
              campaignGroupPromotedPageID: a,
              objective: i,
              promotedObjectType: u,
              specPlugin: s,
            });
          },
          function (e) {
            return o("AdsUEditorCallToActionMutators").setCallToActionType(
              e,
              "VISIT_PROFILE",
              s,
            );
          },
          function (e) {
            if (c == null) return e;
            var t = o(
                "AdsUnifiedProfileVisitUtils",
              ).getExternalLinkForFacebookPageVisit(c),
              n = o("AdsUEditorCallToActionMutators").setCallToActionValueField(
                e,
                s,
                "link",
                t,
              );
            return (
              (n = r("AdsAdgroupSemanticFields").linkURL.set(s, n, t)),
              n
            );
          },
        )(n);
      },
      d = function (n) {
        var t = n.adgroup,
          o = n.campaignGroupPromotedPageID,
          a = n.destination,
          i = n.instagramAccount,
          l = n.objective,
          s = n.pageID,
          d = n.pages,
          m = n.postEditMode,
          p = n.specPlugin;
        switch (a) {
          case r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE:
            return e({
              adgroup: t,
              campaignGroupPromotedPageID: o,
              instagramAccount: i,
              objective: l,
              pageID: s,
              pages: d,
              postEditMode: m,
              specPlugin: p,
            });
          case r("AdCampaignDestination").INSTAGRAM_PROFILE:
            return u({
              adgroup: t,
              campaignGroupPromotedPageID: o,
              instagramAccount: i,
              objective: l,
              pages: d,
              postEditMode: m,
              specPlugin: p,
            });
          case r("AdCampaignDestination").FACEBOOK_PAGE:
            return c({
              adgroup: t,
              campaignGroupPromotedPageID: o,
              objective: l,
              pages: d,
              specPlugin: p,
            });
          default:
            return t;
        }
      },
      m = function (n) {
        var t = n.adgroup,
          a = n.campaignGroupPromotedPageID,
          i = n.destinationType,
          l = n.instagramAccount,
          s = n.objective,
          u = n.pageID,
          c = n.specPlugin;
        if (i === r("AdCampaignDestination").FACEBOOK_PAGE && u != null) {
          var d = o(
            "AdsUnifiedProfileVisitUtils",
          ).getExternalLinkForFacebookPageVisit(u);
          return o("AdsMutators").chain(
            function (e) {
              return o(
                "AdsUEditorCallToActionMutators",
              ).setCallToActionValueField(e, c, "link", d);
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").linkURL.set(c, e, d);
            },
          )(t);
        } else if (
          i === r("AdCampaignDestination").INSTAGRAM_PROFILE &&
          l != null
        ) {
          var m = o("AdsAPIAdgroupRecordUtils").getPostEditMode(t);
          return o("AdsUEditorInstagramProfileMutators").setCTALinkAndAppLink({
            adgroup: t,
            specPlugin: c,
            instagramAccount: l,
            postEditMode: m,
          });
        } else if (
          i === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
        )
          return e({
            adgroup: t,
            campaignGroupPromotedPageID: a,
            objective: s,
            specPlugin: c,
            instagramAccount: l,
            pages: null,
            postEditMode: o("AdsAPIAdgroupRecordUtils").getPostEditMode(t),
            pageID: u,
          });
        return t;
      },
      p = function (t) {
        var e = t.adgroup,
          n = t.cachedCreative,
          a = t.cachedMetadata,
          i = t.campaign,
          l = t.campaignGroup,
          s = t.destinationType,
          u = t.objective,
          c = t.postEditMode,
          d = t.specPlugin;
        if (c !== r("AdsEditorPostEditMode").EXISTING) return e;
        var m = r("AdsAdgroupRecordAccessors").creative.media_type.get(e);
        return _(s, m) || f(s, m)
          ? o("AdsUEditorSetPostEditModeMutators").setToUsingInlineCreation({
              adgroup: e,
              campaign: i,
              campaignGroup: l,
              cachedCreative: n,
              cachedMetadata: a,
              objective: u,
              specPathPlugin: d,
            })
          : e;
      };
    function _(e, t) {
      return (
        e === r("AdCampaignDestination").FACEBOOK_PAGE &&
        t === "EXISTING_INSTAGRAM_POST"
      );
    }
    function f(e, t) {
      return (
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsDestinationContainsIG(e) &&
        t === "EXISTING_POST"
      );
    }
    var g = function (t) {
      var e = t.adgroup,
        n = t.destinationType,
        r = t.specPlugin,
        a = h(n);
      return a == null
        ? e
        : o("AdsUEditorCallToActionMutators").setCallToActionType(e, a, r);
    };
    function h(e) {
      return e === r("AdCampaignDestination").FACEBOOK_PAGE
        ? "VISIT_PROFILE"
        : e === r("AdCampaignDestination").INSTAGRAM_PROFILE ||
            e === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
          ? "VIEW_INSTAGRAM_PROFILE"
          : null;
    }
    var y = function (t) {
        var e = t.adgroup,
          n = t.cachedCreative,
          a = t.cachedMetadata,
          i = t.campaign,
          l = t.campaignGroup,
          s = t.destinationType,
          u = t.instagramAccount,
          c = t.objective,
          d = t.pages,
          m = t.postEditMode,
          _ = t.specPlugin;
        return o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).deleteAssetFeedSpec(e);
          },
          function (e) {
            return p({
              adgroup: e,
              campaign: i,
              campaignGroup: l,
              destinationType: s,
              postEditMode: m,
              cachedCreative: n,
              cachedMetadata: a,
              objective: c,
              specPlugin: _,
            });
          },
          function (e) {
            var t;
            return o(
              "AdsUEditorInstagramProfileMutators",
            ).setInstagramProfileCTA({
              pages: d,
              adgroup: e,
              campaignGroupPromotedPageID:
                (t = l.promoted_object) == null ? void 0 : t.page_id,
              objective: c,
              specPlugin: _,
              promotedObjectType: r("AdsPromotedObjectTypes")
                .IG_PROFILE_AND_FB_PAGE,
            });
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueInstagramProfileDestination(e, _, m);
          },
          function (e) {
            return u != null
              ? o("AdsUEditorInstagramProfileMutators").setCTALinkAndAppLink({
                  adgroup: e,
                  specPlugin: _,
                  instagramAccount: u,
                  postEditMode: m,
                })
              : e;
          },
          function (e) {
            return g({ adgroup: e, destinationType: s, specPlugin: _ });
          },
        )(e);
      },
      C = function (t) {
        var e = t.adgroup,
          n = t.cachedCreative,
          a = t.cachedMetadata,
          i = t.campaign,
          l = t.campaignGroup,
          s = t.destinationType,
          u = t.objective,
          d = t.pages,
          m = t.postEditMode,
          _ = t.specPlugin;
        return o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).deleteAssetFeedSpec(e);
          },
          function (e) {
            return p({
              adgroup: e,
              campaign: i,
              campaignGroup: l,
              destinationType: s,
              postEditMode: m,
              cachedCreative: n,
              cachedMetadata: a,
              objective: u,
              specPlugin: _,
            });
          },
          function (e) {
            var t;
            return c({
              adgroup: e,
              pages: d,
              specPlugin: _,
              campaignGroupPromotedPageID:
                (t = l.promoted_object) == null ? void 0 : t.page_id,
              objective: u,
            });
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueAppLink(e, _);
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueInstagramProfileDestination(e, _, m);
          },
          function (e) {
            var t;
            return o(
              "AdsPartnershipAdsPlacementsMutators",
            ).maySyncPartnershipAdsOrganicPosts(
              e,
              o("AdsMutators").chain(
                (t = r("AdsAdgroupRecordAccessors")).creative
                  .facebook_branded_content.sponsor_page_id.delete,
                t.creative.instagram_branded_content.delete,
                t.creative.branded_content_boosting_type.delete,
                t.creative.branded_content.delete,
              )(e),
            );
          },
          function (e) {
            return g({ adgroup: e, destinationType: s, specPlugin: _ });
          },
        )(e);
      },
      b = function (n) {
        var t = n.adgroup,
          r = n.cachedCreative,
          a = n.cachedMetadata,
          i = n.campaign,
          l = n.campaignGroup,
          s = n.destinationType,
          u = n.instagramAccount,
          c = n.objective,
          d = n.pageID,
          m = n.pages,
          _ = n.postEditMode,
          f = n.specPlugin;
        return o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).deleteAssetFeedSpec(e);
          },
          function (t) {
            var n;
            return e({
              instagramAccount: u,
              postEditMode: _,
              adgroup: t,
              pages: m,
              specPlugin: f,
              campaignGroupPromotedPageID:
                (n = l.promoted_object) == null ? void 0 : n.page_id,
              objective: c,
              pageID: d,
            });
          },
          function (e) {
            return p({
              adgroup: e,
              campaign: i,
              campaignGroup: l,
              destinationType: s,
              postEditMode: _,
              cachedCreative: r,
              cachedMetadata: a,
              objective: c,
              specPlugin: f,
            });
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueInstagramProfileDestination(e, f, _);
          },
          function (e) {
            return g({ adgroup: e, destinationType: s, specPlugin: f });
          },
        )(t);
      };
    ((l.setUnifiedProfileVisitsMultiDestinationCTAFields = e),
      (l.setUnifiedProfileVisitsCTAFieldsForDestination = d),
      (l.updateUnifiedProfileVisitCTAsOnPageIDChange = m),
      (l.normalizeCTAForUPVDestination = g),
      (l.switchToIGOnlyDestination = y),
      (l.switchToFBOnlyDestination = C),
      (l.switchToMultiDestination = b));
  },
  98,
);
