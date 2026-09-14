__d(
  "AdsUEditorAdgroupInstagramExistingPostMutators",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAssetFeedUtils",
    "AdsInstagramBrandedContentUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationUtils",
    "adsAssetFeedGetCallToActionValue",
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
      if ((n === void 0 && (n = !1), n)) {
        var o;
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(
          (o = e.creative) == null ||
            (o = o.asset_feed_spec) == null ||
            (o = o.call_to_actions) == null
            ? void 0
            : o.update(0, function (e) {
                return e.setIn(["type"], t);
              }),
          e,
        );
      }
      return r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
        t,
        e,
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
    function d(e, t) {
      var n = e;
      return !o("AdsUEditorUnifiedCreationUtils").isMultiDestinationPAC(n) &&
        (o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(n) ||
          o("AdsAssetFeedUtils").isPACAndIGAdsFromRecord(n))
        ? b(n, "link", t)
        : g(n, "link", t);
    }
    function m(e, t) {
      var n = r("immutable").List(t);
      if (
        !o("AdsUEditorUnifiedCreationUtils").isMultiDestinationPAC(e) &&
        (o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e) ||
          o("AdsAssetFeedUtils").isPACAndIGAdsFromRecord(e))
      )
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.call_to_action.value.object_store_urls.set(n, e);
      if (
        o("AdsAssetFeedUtils").hasAssetFeedSpecWithoutOnlyOnsiteDestinations(
          e,
        ) &&
        !o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(e)
      ) {
        var a,
          i =
            (a = e.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.call_to_actions;
        return i == null || i.isEmpty()
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_to_actions.set(
              i.update(0, function (e) {
                return e.setIn(["value", "object_store_urls"], n);
              }),
              e,
            );
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.call_to_action.value.object_store_urls.set(n, e);
    }
    function p(e, t) {
      return t == null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.config.enable_third_party_deeplink.delete(
            e,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.config.enable_third_party_deeplink.set(
            t,
            e,
          );
    }
    function _(e, t) {
      var n = e;
      return (
        o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(n) &&
          (n = b(n, "app_link", t)),
        h(n, t)
      );
    }
    function f(e, t) {
      var n = e;
      return (
        o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(n) &&
          (n = b(n, "app_destination", t)),
        g(n, "app_destination", t)
      );
    }
    function g(e, t, n) {
      return o(
        "AdsAssetFeedUtils",
      ).hasAssetFeedSpecWithoutOnlyOnsiteDestinations(e) &&
        !o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(e)
        ? C(e, t, n)
        : b(e, t, n);
    }
    function h(e, t) {
      var n = o("AdsAssetFeedUtils").isAdgroupUsingSomeCallToActions(e.toJS());
      return n
        ? y(e, t)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.app_link.set(t, e);
    }
    function y(e, t) {
      var n,
        o,
        a =
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_actions.get(e)) == null
            ? void 0
            : n.findIndex(function (t, n) {
                return (
                  r("adsAssetFeedGetCallToActionValue")(
                    e,
                    n,
                    "app_destination",
                  ) === "INSTAGRAM_DIRECT"
                );
              });
      return a != null && a !== -1
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_actions.set(
            (o = e.creative) == null ||
              (o = o.asset_feed_spec) == null ||
              (o = o.call_to_actions) == null
              ? void 0
              : o.update(a, function (e) {
                  return e.setIn(["value", "app_link"], t);
                }),
            e,
          )
        : e;
    }
    function C(e, t, n) {
      var o;
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_to_actions.set(
        (o = e.creative) == null ||
          (o = o.asset_feed_spec) == null ||
          (o = o.call_to_actions) == null
          ? void 0
          : o.update(0, function (e) {
              return e.setIn(["value", t], n);
            }),
        e,
      );
    }
    function b(e, t, n) {
      switch (t) {
        case "link":
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.link.set(n, e);
        case "app_link":
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.app_link.set(n, e);
        case "app_destination":
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.app_destination.set(n, e);
        case "object_store_urls":
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.object_store_urls.set(
            r("immutable").fromJS([n]),
            e,
          );
        default:
          return e;
      }
    }
    ((l.setCheckoutAndCTAType = s),
      (l.setCTALink = d),
      (l.setCTAObjectStoreURLs = m),
      (l.setEnableThirdPartyDeeplink = p),
      (l.setIGCTAAppLinkMultiCreator = _),
      (l.setCTAAppDestination = f),
      (l.setCTAValueField = g));
  },
  98,
);
