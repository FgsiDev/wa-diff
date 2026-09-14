__d(
  "ShopsAdsAdapterAdgroupDestinationRulePlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsFacebookEventAdUtils",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupShopsAdsMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorWhatsAppMutators",
    "AdsWhatsAppUtils",
    "getIsInstantExperienceAd",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_adgroup_destination_rule",
        isCompatible: function (t) {
          var e,
            n,
            a = o("AdsFacebookEventAdUtils").getIsFacebookEventAd(
              t,
              ((e = t.creative) == null ? void 0 : e.product_set_id) == null,
            );
          if (a) return "l1_destination_facebook_event_enabled";
          var i = r("getIsInstantExperienceAd")(
            t,
            ((n = t.creative) == null ? void 0 : n.product_set_id) == null,
          );
          return i ? "instant_experience_enabled" : null;
        },
        pivots: { ruleType: "shops_ads_adgroup_destination_rule" },
        transform: function (t, n) {
          var e = n.adgroupSDDResponseMap,
            a = n.adgroupToShopSpecShopIDMap,
            i = n.campaign,
            l = n.effectiveObjective,
            s = n.hostID,
            u = n.identityToStorefrontMap,
            c = n.isEligibleForOnsiteDestination,
            d = n.isShopsAdsIncentiveProgram,
            m = n.selectedLinkType,
            p = n.specPlugin,
            _ = n.storefrontsLoadObject,
            f = o(
              "AdsUEditorAdgroupShopAdsUtils",
            ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(t),
            g = r("AdsAdgroupSemanticFields").multiShareEndCard.isSupported(
              p,
              t,
            );
          if (
            (o("AdsWhatsAppUtils").isWhatsAppDestinationAd(t) &&
              ((f = o(
                "AdsUEditorWhatsAppMutators",
              ).deleteWhatsAppDestinationFields({
                adgroup: f,
                specPlugin: p,
                supportPageEndCard: g,
                removeWebsiteURL: !1,
              })),
              (f = o(
                "AdsUEditorCallToActionMutators",
              ).deleteCallToActionValueAppDestination(f, p))),
            d)
          ) {
            if (
              ((f = o(
                "AdsUEditorAdgroupShopsAdsMutators",
              ).removeUnsupportedDestinationAndDispatchWebsiteAndShopSelection(
                f,
                s,
                l,
                m,
                _,
              )),
              a != null && a.has(t.id))
            ) {
              var h = a.get(t.id);
              h != null &&
                (f = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.shop_spec.shop_id.set(h, f));
            }
            return o(
              "AdsUEditorAdgroupShopsAdsMutators",
            ).maybeSetOnsiteDestination(f, p, i, c, u, e, !0);
          }
          return f;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
