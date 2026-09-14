__d(
  "AdsUEditorAdgroupClearDataMutatorsUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCallAddonUtils",
    "AdsEditorPostEditMode",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "AdsUEditorWhatsAppMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.adgroup,
          n = t.adgroupID,
          a = t.cachedStoreState,
          i = t.effectiveObjective,
          l = t.specPlugin,
          s = o("AdsUEditorAdgroupCachedUtils").getCreative(
            a,
            n,
            r("AdsEditorPostEditMode").INLINE,
          ),
          u = o("AdsUEditorAdgroupCachedUtils").getMetadata(a, n),
          c = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, l),
          d = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e);
        return o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsUEditorMultiDestinationAdgroupMutators",
            ).cleanMultiDestAdSpecOnConversionLocationChange(e);
          },
          function (e) {
            return r("AdsAdgroupSemanticFields").childAttachments.delete(l, e);
          },
          function (e) {
            return o("AdsUEditorWebsiteAndAppMutators").deleteAdgroupFields(
              e,
              l,
            );
          },
          function (e) {
            return o("AdsUEditorAdgroupOfferMutators").removeOfferIDState(
              e,
              l,
              i,
            );
          },
          function (e) {
            return o(
              "AdsUEditorMessengerMutators",
            ).deleteMessengerDestinationFields({
              adgroup: e,
              specPlugin: l,
              supportPageEndCard: !1,
              removeLinkURL: !0,
            });
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).deleteCallToActionValueAppDestination(e, l);
          },
          function (e) {
            return o(
              "AdsUEditorCallToActionMutators",
            ).deletePageLikesCallToActionValuePage(e, l);
          },
          function (e) {
            return d !== r("AdsEditorPostEditMode").INLINE ||
              c !== r("AdsLinkPostFormat").SINGLE
              ? o("AdsUEditorSetPostEditModeMutators").setToUsingInlineCreation(
                  {
                    adgroup: e,
                    cachedCreative: s,
                    cachedMetadata: u,
                    campaign: null,
                    campaignGroup: null,
                    objective: i,
                    specPathPlugin: l,
                  },
                )
              : e;
          },
          function (e) {
            return o("AdsCallAddonUtils").clearCallExtensionFields(e, l);
          },
          function (e) {
            return o(
              "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
            ).cleanWebsiteExtensionFields(e);
          },
          function (e) {
            return o(
              "AdsUEditorAdgroupLeadNurtureChannelsMutator",
            ).cleanLeadNurtureChannelsField(e);
          },
          function (e) {
            return o(
              "AdsUEditorWhatsAppMutators",
            ).deleteWhatsAppDestinationFields({
              adgroup: e,
              specPlugin: l,
              supportPageEndCard: !1,
              removeWebsiteURL: !0,
            });
          },
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.product_set_id.delete(e);
          },
        )(e);
      },
      s = function (t) {
        var e = t.adgroup,
          n = t.callToActionType,
          a = t.promotedObjectType,
          i = t.specPlugin,
          l = e,
          s = r("AdsAdgroupRecordAccessors").creative.call_to_action.type.get(
            l,
          );
        return (
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l) && (l = u(l)),
          ((a !== r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE &&
            s === "VIEW_INSTAGRAM_PROFILE") ||
            (a !== r("AdsPromotedObjectTypes").LIVE_VIDEO &&
              s === "WATCH_LIVE_VIDEO") ||
            (a !== r("AdsPromotedObjectTypes").REMINDER &&
              s === "JOIN_LIVE_VIDEO")) &&
            ((l =
              n != null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.type.set(n, l)
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.type.delete(l)),
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.delete(l))),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.app_link.delete(l)),
          (l = o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueAppLink(l, i)),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.link.delete(l)),
          (l = o("AdsUEditorCallToActionMutators").deleteCallToActionValueLink(
            l,
            i,
          )),
          l
        );
      },
      u = function (t) {
        var e = t;
        return (
          (e = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.link_urls.delete(e)),
          (e = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_actions.delete(e)),
          (e = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_action_types.delete(e)),
          e
        );
      };
    ((l.clearData = e), (l.clearCTAFields = s));
  },
  98,
);
