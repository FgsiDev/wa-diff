__d(
  "AdsUEditorAdgroupFacebookExistingPostMutators",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAssetFeedUtils",
    "AdsInstagramBrandedContentUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["MESSAGE_PAGE", "WHATSAPP_MESSAGE"];
    function s(t, n, a, i, l, s) {
      var d,
        m,
        p,
        _ = t,
        f = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(_),
        g =
          o("AdsAssetFeedUtils").hasAssetFeedSpecWithoutOnlyOnsiteDestinations(
            _,
          ) && !o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(_),
        h = o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(_),
        y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          null,
          n,
          null,
          t,
        );
      a !== "INSTAGRAM_MESSAGE" &&
        y !== r("AdsPromotedObjectTypes").MOBILE_APP &&
        (_ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.call_to_action.value.app_link.delete(_));
      var C = !e.includes(a);
      if (
        (o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(a) &&
        ((d = _.creative) == null ? void 0 : d.branded_content) != null
          ? (_ = o("AdsInstagramBrandedContentUtils").setPromotedPageIDforL1Ads(
              _,
              s,
            ))
          : !o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(a) &&
            !o(
              "AdsUEditorMessagingDestinationUtils",
            ).isClickToMessageAdDestination(i) &&
            ((m = _.creative) == null || (m = m.branded_content) == null
              ? void 0
              : m.promoted_page_id) != null &&
            (_ = r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content.promoted_page_id.delete(_)),
        h || o("AdsAssetFeedUtils").isPACAndIGAdsFromRecord(_))
      )
        return (
          (_ = o("AdsAdgroupCallToActionMutatorsAdapter").setCallToAction(
            a,
            t,
          )),
          C ? c(_, g) : _
        );
      if (r("isFalsey")(a))
        return f
          ? o(
              "AdsAdgroupWebsiteLinkPostTypeMutators",
            ).convertToHasNoWebsiteLinkFormat(_, l)
          : r("AdsAdgroupRecordAccessors").creative.call_to_action.delete(_);
      if (
        g &&
        ((p = _.creative) == null || (p = p.asset_feed_spec) == null
          ? void 0
          : p.call_to_actions) == null
      ) {
        if (o("AdsUEditorMessagingDestinationUtils").isMultiDestination(i))
          return o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
            t,
            i,
            null,
          );
        var b = r("immutable").fromJS([{ type: a }]);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(b, _);
      } else return g ? u(_, a, !0) : (C && (_ = c(_, g)), u(_, a));
    }
    function u(e, t, n) {
      return (
        n === void 0 && (n = !1),
        n
          ? o("AdsMutators").chain(
              function (e) {
                var n;
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.set(
                  (n = e.creative) == null ||
                    (n = n.asset_feed_spec) == null ||
                    (n = n.call_to_actions) == null
                    ? void 0
                    : n.update(0, function (e) {
                        return e.setIn(["type"], t);
                      }),
                  e,
                );
              },
              function (e) {
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.call_to_action_type.set(t, e);
              },
            )(e)
          : o("AdsMutators").chain(
              function (e) {
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.call_to_action.type.set(t, e);
              },
              function (e) {
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.call_to_action_type.set(t, e);
              },
            )(e)
      );
    }
    function c(e, t) {
      if (t) {
        var n;
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(
          (n = e.creative) == null ||
            (n = n.asset_feed_spec) == null ||
            (n = n.call_to_actions) == null
            ? void 0
            : n.update(0, function (e) {
                return e.deleteIn(["value", "app_destination"]);
              }),
          e,
        );
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.call_to_action.value.app_destination.delete(e);
    }
    l.setCheckoutAndCTAType = s;
  },
  98,
);
